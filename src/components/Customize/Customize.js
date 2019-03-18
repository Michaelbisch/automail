import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import CustomPhoto from '../CustomPhoto/CustomPhoto';
import Logout from '../Logout/Logout'
import './Customize.css';
import Select from 'react-select';
import chroma from 'chroma-js';
// import {editInputsr,clearInputs} from './../../ducks/reducer';
      


      




const options = [
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'Black', label: 'Black', color: '#000000',},
    { value: 'blue', label: 'Blue', color: '#0052CC', disabled: true }
  ]
  const dot = (color = '#ccc') => ({
    alignItems: 'center',
    display: 'flex',
  
    ':before': {
      backgroundColor: color,
      borderRadius: 10,
      content: '" "',
      display: 'block',
      marginRight: 8,
      height: 10,
      width: 10,
    },
  });
  
  const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? null
          : isSelected ? data.color : isFocused ? color.alpha(0.1).css() : null,
        color: isDisabled
          ? '#ccc'
          : isSelected
            ? chroma.contrast(color, 'white') > 2 ? 'white' : 'black'
            : data.color,
        cursor: isDisabled ? 'not-allowed' : 'default',
      };
    },
    input: styles => ({ ...styles, ...dot() }),
    placeholder: styles => ({ ...styles, ...dot() }),
    singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
  };


class Customize extends Component{
    constructor(){
        super()
        this.state = {
            topinput: '',
            bottominput: '',
            platecolor: 'White',
            textcolor: ''
        }
        this.handleTextColor = this.handleTextColor.bind(this)
    }
    handleTextColor(newcolor){
        this.setState({
            textcolor: newcolor.value
        })
    }
    handleChange(prop,val){
        this.setState({
            [prop]:val
        })
    }
    render(){
        console.log(11111,this.state.textcolor)
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
                        <Select 
                        defaultValue={options[1]}
                        label="Single select"
                        options={options}
                        styles={colourStyles}
                        value={this.state.textcolor}
                        onChange={this.handleTextColor}
                        />

                        </div>
                        <div>
                             <input type='text' placeholder="Top Input" value={this.state.topinput} maxLength='10' onChange={e=>this.handleChange('topinput',e.target.value)}></input>
                        </div>
                        <div>
                            <input type='text' placeholder="Bottom Input" value={this.state.bottominput} maxLength='10' onChange={e=>this.handleChange('bottominput',e.target.value)}></input>
                        </div>
                        <div>
                            <Link to='/checkout'><button>CheckOut</button></Link>
                        </div>
                </div>
                </div>

            </div>
        )
    }
}
export default Customize