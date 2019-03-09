import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import CustomPhoto from '../CustomPhoto/CustomPhoto';
import Logout from '../Logout/Logout'

class Customize extends Component{
    render(){
        // console.log(this.props)
        return(
            <div>
                <Logout />
                <Link to='/'><button>Home</button></Link>
                <Link to='/checkout'><button>CheckOut</button></Link>
                <div>
                <CustomPhoto />
                </div>
                <div> <h3>Plate Color</h3>
                    <input type='checkbox'></input> <input type='checkbox'></input> <input type='checkbox'></input>
                    <div> <h3>Text Color</h3>
                    <input type='checkbox'></input> <input type='checkbox'></input> <input type='checkbox'></input>
                </div>
                <input placeholder='Top Input'></input>
                <div>
                <input placeholder='Bottom Input'></input>
                </div>
                </div>
            </div>
        )
    }
}
export default Customize