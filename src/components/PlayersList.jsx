import PropTypes from 'prop-types';

function PlayersList({team,players=[""]}){
   
    return(
        <div className="playerlist">
            
            <h1>Team {team}</h1>
            {players.map((p,index)=>(
                <h3 key={index} className='nova-round-regular'>{p}</h3>
            ))}

        </div>
    );
}

PlayersList.propTypes = {
    players: PropTypes.arrayOf(PropTypes.string).isRequired,
    team: PropTypes.string.isRequired
};
export default PlayersList;