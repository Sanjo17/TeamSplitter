
import {useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header"
import InputFeild from "./components/InputFeild";
import List from "./components/List";
import SortedList from "./components/SortedList";




function App() {

  const [playerlist,setplayerlist] = useState([]);
  const [teamA,setTeamA] = useState([]);
  const [teamB,setTeamB] = useState([]);

  

  function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
        return array;
    }
  }

  function sortTeam(){
    if(playerlist.length>1){
    let temp = shuffle(playerlist);
    console.log("temp list "+temp);
    console.log("player list "+playerlist);
    let list_len = temp.length; //4
    let teamA_len = list_len/2; //2
    
    setTeamA(temp.slice(0,teamA_len));
    setTeamB(temp.slice(teamA_len,list_len));
    // setTeamA((prevlistA)=>temp.slice(0,teamA_len));
    
    
    
    console.log(teamA,teamB);
    }
    else{
      console.log("add players")
    }

  }

  function addplayertolist(player){
    if(player==""){
    setplayerlist([...playerlist,"player"]);

    }else{
    setplayerlist([...playerlist,player]);
    }
  }
  function removeplayers(index){
    setplayerlist((prevlist)=>prevlist.filter((_,i)=>  i!== index));
  }
  function clearAll(){
    setplayerlist([]);
    setTeamA([]);
    setTeamB([]);
  }
  return(
    <div className="main">
    <Header/>  
    <InputFeild onSubmit = {addplayertolist} idd = {sortTeam}/> 
    <List list = {playerlist} remove = {removeplayers} clear={clearAll}/> 
    <div className="teamlistcontainer">
    {(teamA.length && teamB.length) > 0 ? <SortedList A = {teamA} B={teamB}/>:""}
    </div>
    <Footer/>
    </div>
 );
}


export default App
