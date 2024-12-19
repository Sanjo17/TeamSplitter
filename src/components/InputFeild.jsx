import { useContext, useState } from "react";
import PropTypes from 'prop-types';
import Button from "./Button";
import { useAuthContext } from "../context/AuthContext";
import { TeamContext } from "../context/TeamContext";
import { Options } from "./options";



function InputFeild({onSubmit,idd}){
    const user = useAuthContext();
    const [playerlist]  = useContext(TeamContext);
    console.log("playerlist = "+playerlist)
    
    // const player = document.getElementById('input');
    const [playername,setplayername] = useState("");
    const [options,setOption] = useState(false);
    // const[savTeams,setSavTeams] = useState([{name:"team1",players:[playerlist]}]);

    function setup(e){
        setplayername(e.target.value);
        
    }

    function handlebtnclick(playername){
        onSubmit(playername);
        setplayername("");
    }

    const handleOptions= () => {
        setOption(!options);
    }

    const closeOptions = () => {
        setOption(!options);
    }
    
    
    return(
        <>
        <div>
            <label htmlFor="input"><h2 className="lexend-deca-t">Enter the Team members</h2></label>
            <input type="text" id="input" onChange={setup} value={playername}></input>
            <Button onSumit={()=>handlebtnclick(playername)} title={'add'} />
            <Button title={'Itto'} onSumit={()=>idd()} bg="#32CD32"/>
            {user?<Button title={'option'} bg="#32CD32" onSumit={handleOptions}/>:null} 
            
            
            
        </div>
        {options?<Options closeOptions={closeOptions}/>:null}
          </>
    );
}

InputFeild.propTypes = {
   onSubmit: PropTypes.func.isRequired,
   idd: PropTypes.func.isRequired,
}

export default InputFeild;