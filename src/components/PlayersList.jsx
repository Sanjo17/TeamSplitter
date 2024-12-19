import PropTypes from 'prop-types';
import { useRef, useState } from 'react';

function PlayersList({team,players=[""]}){
   
    const[list,setList] = useState();

    const dragItem = useRef();
    const dragOverItem = useRef();

    const dragStart = (e,pos)=>{
        dragItem.current = pos;
        console.log(e.target.innerHTML);
    };

    const dragEnter = (e,pos) =>{
        dragOverItem.current = pos;
        console.log(e.target.innerHTML);
    };
    const drop = (e) => {
        console.log(e)
        const copyListItems = [...list];
        const dragItemContent = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setList(copyListItems);
      };


    return(
        <div className="playerlist">
            
            <h1>Team {team}</h1>
            {players.map((p,index)=>(
                <h3 key={index} className='nova-round-regular' draggable
                 onDragStart={(e)=>dragStart(e,index)} 
                 onDragOver={(e)=>dragEnter(e,index)}
                 onDragEnd={(e)=>drop(e)}
                 >
                    {p}
                    </h3>
            ))}

        </div>
    );
}

PlayersList.propTypes = {
    players: PropTypes.arrayOf(PropTypes.string).isRequired,
    team: PropTypes.string.isRequired
};
export default PlayersList;