import React from 'react';
import '../../components/Customize/Customize.css'
import {connect} from 'react-redux';


function CustomPhoto(props){
    console.log(222,props)
    return(
        <div className='customcontainer' >
            <img  src='https://s3-us-west-2.amazonaws.com/automail-custom-covers/Whitecover.png' alt='smile' width="650" height="450" />
            <div className="topinput" style={{color: props.textcolor}} >{props.topinput}</div>
            <div className="bottominput" style={{color: props.textcolor}} >{props.bottominput}</div>
        </div>
    )
}
const mapStateToProps = (State) => {
    return {
        rplatecolor: State.rplatecolor,
        rtextcolor: State.rtextColor,
        rtopinput: State.rtopinput,
        rbottminput: State.rbottminput
    }
}

export default connect(mapStateToProps)(CustomPhoto)
