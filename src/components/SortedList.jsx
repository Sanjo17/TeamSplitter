import PlayersList from "./PlayersList";
import PropTypes from 'prop-types';
import { useRef } from "react";
import { toPng } from "html-to-image";


function SortedList({list}){

    const divRef = useRef(null);
    async function handleExport(){
        if (divRef.current) {
            toPng(divRef.current,{ cacheBust: true })
              .then((dataUrl) => {
                const link = document.createElement("a");
                link.href = dataUrl;
                link.download = `team${Date.now()}.jpg`;
                link.click();
              })
              .catch((err) => {
                console.error("Error generating image:", err);
              });
          }
      }

    return(
        <>
        <div ref={divRef} className="teamA" id="teamA">
        <PlayersList team = "A"   players = {list.slice(0,list.length/2)}/>
        <PlayersList team = "B"  players = {list.slice(list.length/2,list.length)}/>
        </div>
        <br/><button className="expbtn" onClick={handleExport}>export</button>
        <h3>Total players: {list.length}</h3>

        </>
    );
}

SortedList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.any),
    

}

export default SortedList; 