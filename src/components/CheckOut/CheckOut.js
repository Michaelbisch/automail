import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import CustomPhoto from '../CustomPhoto/CustomPhoto';
import Logout from '../Logout/Logout'

class CheckOut extends Component{
    render(){
        return(
            <div>
                <Logout />
                
                <CustomPhoto />
                <div>
                    <input placeholder="Address"></input>
                    <input placeholder="Appt"></input>
                    <input placeholder="Zip"></input>
                    <input placeholder="State"></input>
                    <input placeholder="country"></input>
                </div>
                <div> 
                    <input placeholder='a'></input>
                    <input placeholder='Phone'></input>
                </div>
                <h3>TOTAL</h3>
                <Link to='/confirmation'><button>confirmation</button></Link>
            </div>
        )
    }
}
export default CheckOut