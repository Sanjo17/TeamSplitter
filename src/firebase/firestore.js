import { addDoc, collection,deleteDoc,getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "./firebase-config";


const usersCollection = collection(db,"users");

export const addUser = async (user) => {await addDoc(usersCollection,user)}
export const getUser = async () => {
    const snapshot = await getDoc(usersCollection);
    return snapshot.docs.map((doc)=>({
        id:doc.id,...doc.data()
    }));
} 
export const deleteDbUser = async(uid) => {
    const q = query(collection(db, "users"), where("id", "==", uid));
            const querySnapshot = await getDocs(q);
            let docRef = querySnapshot.docs[0].ref;
            await deleteDoc(docRef)
            .then(console.log("deleted"))
            .catch(e=>console.log(e));
}
export const savTeamToFire = async(uid,team) => {

    /* doc => {
        id: ...
        savTeams: [{id: ..., team:[...] }]        
        }
        */
    const q = query(collection(db, "users"), where("id", "==", uid));
    const querySnapshot = await getDocs(q);
    let docRef = querySnapshot.docs[0].ref;
    let docSnap = await getDoc(docRef);
    console.log(team + "team {}")
    let existingTeams = docSnap.data().savTeams || [];
    let updatedTeams = [...existingTeams,team];
    await updateDoc(docRef,{savTeams: updatedTeams})
    .then(console.log("updated  or added"))
    .catch(console.log("errrror in update"));
}
export const getDocRef = async (uid) => {
    const q = query(collection(db, "users"), where("id", "==", uid));
    const querySnapshot = await getDocs(q);
    let docRef = querySnapshot.docs[0].ref;
    return docRef;
}
export const updateTeamToFire = async(uid,teamid) => {

    /* doc => {
        id: ...
        savTeams: [{id: ..., team:[...] }]        
        }
        */
    const q = query(collection(db, "users"), where("id", "==", uid));
    const querySnapshot = await getDocs(q);
    let docRef = querySnapshot.docs[0].ref;
    let docSnap = await getDoc(docRef);
    console.log(teamid + "teamid {}")
    let existingTeams = docSnap.data().savTeams || [];
    let updatedTeams = existingTeams.filter((v)=> v.id!=teamid);
    await updateDoc(docRef,{savTeams: updatedTeams})
    .then(console.log("updated  or added"))
    .catch(console.log("errrror in update"));
}
export const getSavTeam = async (uid,teamid) => {
    const q = query(collection(db, "users"), where("id", "==", uid));
    const querySnapshot = await getDocs(q);
    let docRef = querySnapshot.docs[0].ref;
    let docSnap = await getDoc(docRef);
    console.log(teamid + "teamid {}")
    let allTeams = docSnap.data().savTeams || [];
    let idanIlaTeam = allTeams.filter((v)=>v.id==teamid)[0].team;
    return idanIlaTeam;
}

