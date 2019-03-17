import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import CustomPhoto from '../CustomPhoto/CustomPhoto';
import Logout from '../Logout/Logout'
import './Customize.css'

class Customize extends Component{
    constructor(){
        super()
        this.state = {
            topinput: 'Javascript',
            bottominput: 'Get Weird'
        }
    }
    handleChange(prop,val){
        this.setState({
            [prop]:val
        })
    }
    render(){
        console.log(this.state)
        return(
            <div className='customizebody'>
                        <Logout />
                        <div className='home'>
                            <Link to='/'><button className='homebutton'>home</button></Link>
                        </div>
                <div className='customizers'>
                <div>
                <CustomPhoto
                topinput={this.state.topinput}
                bottominput={this.state.bottominput}
                />
                </div>

                <div>
                        <h3>Text Color</h3>
                        <div>
                        <input type='checkbox'></input> <input type='checkbox'></input> <input type='checkbox'></input>
                        </div>
                        <input type='text' placeholder="Top Input" value={this.state.topinput} onChange={e=>this.handleChange('topinput',e.target.value)}></input>
                        <input type='text' placeholder="Bottom Input" value={this.state.bottominput} onChange={e=>this.handleChange('bottominput',e.target.value)}></input>
                        <Link to='/checkout'><button>CheckOut</button></Link>
                </div>
                </div>

            </div>
        )
    }
}
export default Customize