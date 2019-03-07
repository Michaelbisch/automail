import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import CustomPhoto from '../CustomPhoto/CustomPhoto'

class CheckOut extends Component{
    render(){
        return(
            <div>
                <Link to='/'><button>Home</button></Link>
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