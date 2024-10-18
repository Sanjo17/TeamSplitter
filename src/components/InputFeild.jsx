import { useState } from "react";
import PropTypes from 'prop-types';
import Button from "./Button";



function InputFeild({onSubmit,idd}){
    
    // const player = document.getElementById('input');
    const [playername,setplayername] = useState("");

    function setup(e){
        setplayername(e.target.value);
        
    }

    function handlebtnclick(playername){
        onSubmit(playername);
        setplayername("");
    }
    
    
    return(
        <div>
            <label htmlFor="input"><h2 className="lexend-deca-t">Enter the Team members</h2></label>
            <input type="text" id="input" onChange={setup} value={playername}></input>
            <Button onSumit={()=>handlebtnclick(playername)} title={'add'} />
            <Button title={'Itto'} onSumit={()=>idd()} bg="#D2A4A4"/>
            
            
        </div>
    );
}

InputFeild.propTypes = {
   onSubmit: PropTypes.func.isRequired,
   idd: PropTypes.func.isRequired,
}

export default InputFeild;