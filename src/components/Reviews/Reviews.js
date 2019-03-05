import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Reviews extends Component{
    render(){
        return(
            <div>
                <Link to='/'><button>Home</button></Link>
                <Link to='/reviewmaker'><button>Make a review</button></Link>
            </div>
        )
    }
}
export default Reviews