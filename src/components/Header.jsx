import { deleteUser } from "firebase/auth";
import { useAuthContext } from "../context/AuthContext";
import { logout, signInAnonym } from "../firebase/auth";
import { addUser, deleteDbUser } from "../firebase/firestore";

function Header(){

    const user = useAuthContext();
    

    const handleSignIn = async() => {
        try{
        const userObj = await signInAnonym();
        console.log(userObj);
        await addUser({id:userObj,savTeams:[]})
        }catch(e){
            console.log(e)
        }
        

    }
    const handleDelete = async() => {
        try{
            await deleteDbUser(user.uid);
            await deleteUser(user);
            await logout();

        }catch(e){
            console.log(e)
        }
    }
    return(

        <header>
            <nav className="navbar">
            <div className="nav-head">      
            <h1 className="metal-mania-regular">Team Idd</h1>
            </div> 
                <div className="nav-items">
                    {user?<p>{"user "+user.uid.slice(0,6)+"..."}</p>:<button onClick={handleSignIn}>create account</button>}
                    {user?<button onClick={handleDelete}>Delete</button>:null}
                </div>
            </nav>
        </header>

    );
}

export default Header;