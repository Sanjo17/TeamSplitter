    import PropsTypes from 'prop-types';
    import { useContext, useEffect, useState } from 'react';
    import { TeamContext } from '../context/TeamContext';
    import { getDocRef, getSavTeam, savTeamToFire, updateTeamToFire } from '../firebase/firestore';
    import { useAuthContext } from '../context/AuthContext';
    import { onSnapshot } from 'firebase/firestore';


    export const Options = ({closeOptions}) => {
        const user = useAuthContext();


        const [playerlist,setPlayerList,ito]  = useContext(TeamContext);
        const [savTeams,setSav] = useState([]); 
        useEffect(()=>{

            const foo = async () => {
            let docRef = await getDocRef(user.uid);
        console.log(docRef)
            const unsubscribe = onSnapshot(docRef, (docSnap) => {
                console.log(docSnap)
                if (docSnap.exists()) {
                setSav(docSnap.data().savTeams || []); // Update state with document data
                } else {
                console.log("No such document!");
                }
            });
            return () => unsubscribe();
        }
        foo();
        },[user.uid]);
        


        async function savTeam(){
            console.log(savTeams+"sav teams")

            let newSavTeam = {id:Date.now(),team:[...playerlist]}
            await savTeamToFire(user.uid,newSavTeam);

        }
        async function deleteRTeam(teamid){  

            await updateTeamToFire(user.uid,teamid);
            // setSav(savTeams.filter((v)=>v.id!=teamid));
        }
        async function savTeamItto(teamid){
            // team = {id: ..., team:[...]}
           let itoTeam =  await getSavTeam(user.uid,teamid);
           console.log(itoTeam);
           setPlayerList(itoTeam);
           ito();
           

        }
        // function editTeam(){} future
        return(
            <>
            <div className="options">
                <div className="teams"> 
                    {savTeams
                    .length>0?savTeams.map((v,i)=>{
                        console.log(v.team)
                        console.log('team numb ='+i )
                        return(
                        <div className="team" key={v.id}>
                            <h6>{v.id}</h6>
                            <p>{v.team.join(" ")}</p>
                            <button className='savteamittobtn' onClick={()=>savTeamItto(v.id)}>Itto</button>
                            <button className='savteamdeletebtn' onClick={()=>deleteRTeam(v.id)}>delete</button>
                        </div>);
                        }):<h4>add teams</h4>}
                <input type="button" value={"sav new team"} id="addteambtn" onClick={savTeam}/>

                </div>
                <button onClick={closeOptions}>close</button>
            </div>
            </>
        );
    }
    Options.propTypes = {
        
        closeOptions: PropsTypes.func,
        
    }