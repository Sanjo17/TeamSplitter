import PropsTypes from 'prop-types';
import PlayerTile from './PlayerTile';
import Button from './Button';

function List({list, remove,clear}){
    
    
    return(
        <div className="plist">
            {   
            
            list.length>0? list.map((p,id)=>(
                
                <PlayerTile player={p} key = {id} remove = {remove} id={id} />
                
               
            )):"Add Players"}
            {list.length>0 ? <Button title="Clear all" onSumit={()=>clear()}/>: ""}
        </div>
    );
}

List.propTypes = {
    list: PropsTypes.arrayOf(PropsTypes.string).isRequired,
    remove: PropsTypes.func,
    clear: PropsTypes.func,
}
export default List;