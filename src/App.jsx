
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header"
import InputFeild from "./components/InputFeild";
import List from "./components/List";
import SortedList from "./components/SortedList";
import Button from "./components/Button";
import { TeamContext } from "./context/TeamContext";


function App() {
  // const teamContext = useContext(TeamContext);

  const [playerlist,setplayerlist] = useState([]);
  const[finalList,setFinalList] = useState([]);
  const [isOpen,setOpen] = useState(true);  
  
  const sortTeam2 = () => {
    
    let temp = [...playerlist];
    if(temp.length>1){
      if(temp.length%2!=0){
        temp.push("no player");
      }
      for(let i=temp.length-1;i>0;i--){
        let j = Math.floor(Math.random()*(i+1));
        [temp[j],temp[i]] = [temp[i],temp[j]];
      }
      setFinalList(temp);
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
    setFinalList([]);
  }
  return(
    <TeamContext.Provider value={[playerlist,setplayerlist,sortTeam2]}>
    <>
    <div className="main">
      <Header/>  
      <InputFeild onSubmit = {addplayertolist} idd = {sortTeam2}/> 
      
      <div className="teamSection">
      
          <div className="playerslist-dropdown">
            {playerlist.length>0?<Button title={isOpen?"Hide":"show"} onSumit={showPlayerList} bg={isOpen?"red":"#006400"}/>:null}
            { isOpen?<List list = {playerlist} remove = {removeplayers} clear={clearAll}/>:null }
            
          </div>
 
          <div className="teamlistcontainer">
            {(finalList.length) > 0 ?
            <SortedList list={finalList}/> :""}
            
          </div>
        
      </div>
    </div>
    <div className="footer">
    <Footer/>
  </div>
  </>
  </TeamContext.Provider>
 );
}


export default App
