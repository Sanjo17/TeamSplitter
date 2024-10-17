import PlayersList from "./PlayersList";
import PropTypes from 'prop-types';


function SortedList({A,B}){
    return(
        <>
        <PlayersList team = 'A'  players = {A}/>
        <PlayersList team = 'B'  players = {B}/>
        </>
    );
}

SortedList.propTypes = {
    A: PropTypes.arrayOf(PropTypes.any),
    B: PropTypes.arrayOf(PropTypes.any)

}

export default SortedList;