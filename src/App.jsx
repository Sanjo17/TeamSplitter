
import {useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header"
import InputFeild from "./components/InputFeild";
import List from "./components/List";
import SortedList from "./components/SortedList";
import Button from "./components/Button";




function App() {

  const [playerlist,setplayerlist] = useState([]);
  const [teamA,setTeamA] = useState([]);
  const [teamB,setTeamB] = useState([]);
  const [isOpen,setOpen] = useState(true);  

  

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
  function randNum(min,max){
     return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  function sortTeam(){
    if(playerlist.length>1){
      
      let t = [...playerlist]
    let temp = shuffle(t);

    if(temp.length%2!=0 ){
      temp.push(" - ");
    }
    console.log("first ",temp);  
    let tA = [];
    let tB = [];
    let temp_len = temp.length;
    while(temp_len>=0){
      let n = randNum(0,temp_len-1);
      console.log("random num1 : "+n);
      
      tA.push(temp[n]);
      temp_len--;
      temp = temp.filter((_,id)=>(id!=n));
      console.log("first filter ",temp)
      n = randNum(0,temp_len-1);
      console.log("random num2 : "+n);
      tB.push(temp[n]);
      temp_len--;
      temp = temp.filter((_,id)=>(id!=n));
      console.log("second filter ",temp)



      
    }
    setTeamA(tA);
    setTeamB(tB);

    
    temp = [];
    
    
    
    console.log(teamA,teamB);
    }
    else{
      console.log("add players")
    }

  }
  function showPlayerList(){
    setOpen(!isOpen);
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
    <div className="playerslist-dropdown">
      {playerlist.length>0?<Button title={isOpen?"Hide":"show"} onSumit={showPlayerList}/>:null}
    { isOpen?<List list = {playerlist} remove = {removeplayers} clear={clearAll}/>:null }
    </div>

    <div className="teamlistcontainer">
    {(teamA.length && teamB.length) > 0 ? <SortedList A = {teamA} B={teamB}/>:""}
    </div>
    <Footer/>
    </div>
 );
}


export default App
