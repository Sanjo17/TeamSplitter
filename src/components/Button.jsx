import PropTypes from 'prop-types';

function Button({title,onSumit,padding='10px',fontsize='larger',bg='aquamarine'}){

    let style = {
        padding : padding,
        fontSize: fontsize,
        backgroundColor: bg
    }

    return(
        <button style={style} className='button' onClick={()=> onSumit()}>{title}</button>
    );
}

Button.propTypes = {
    title : PropTypes.string.isRequired,
    onSumit : PropTypes.func.isRequired,
    padding : PropTypes.string,
    fontsize : PropTypes.string,
    bg : PropTypes.string
    
   
   
}

export default Button;