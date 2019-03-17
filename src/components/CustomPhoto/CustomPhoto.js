import React from 'react';
import '../../components/Customize/Customize.css'

function CustomPhoto(props){
    console.log(2222,props)
    return(
        <div className='customcontainer'>
            <img  src='https://s3-us-west-2.amazonaws.com/automail-custom-covers/Whitecover.png' alt='smile' width="650" height="450" />
            <div className="topinput">{props.topinput}</div>
            <div className="bottominput">{props.bottominput}</div>
        </div>
    )
}

export default CustomPhoto