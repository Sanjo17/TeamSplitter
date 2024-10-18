import PropTypes from 'prop-types';
import Button from './Button';

function PlayerTile({player = "Player",remove,id}){
    return(
        <div className='playertile'>
            <div className='tile-items'>
        <h4>{
        player!=""?player.toUpperCase():"player"}</h4>
        <Button title='x' padding='6px ' onSumit={()=>remove(id)} bg='orange'/>
        </div>
        </div>
    );
}

PlayerTile.propTypes = {
    player : PropTypes.string.isRequired,
    remove : PropTypes.func,
    id: PropTypes.number
    
}
export default PlayerTile;