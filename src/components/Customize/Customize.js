import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import CustomPhoto from '../CustomPhoto/CustomPhoto';
import Logout from '../Logout/Logout'
import './Customize.css';
import Select from 'react-select';
import chroma from 'chroma-js';
import {connect} from 'react-redux';
import {editInputs, clearInputs} from './../../ducks/reducer';




  const options = [
    { value: 'red', label: 'Red', color: '#FF5630'},
    { value: 'black', label: 'Black', color: '#000000'},
    { value: 'blue', label: 'Blue', color: '#0052CC' }
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
    constructor(props){
        super(props)
        this.state = {
            topinput: '',
            bottominput: '',
            platecolor: 'White',
            textcolor: {value: "black", label: "Black", color: "#000000"}
        }
        this.handleTextColor = this.handleTextColor.bind(this)
        this.updateRedux = this.updateRedux.bind(this)
    }
    componentDidMount(){
        this.props.clearInputs()
    }
    updateRedux(){
        if(this.props.user_id === 0){
           return  alert('must be signed in to Checkout')
        } else {
            const { topinput, bottominput, platecolor, textcolor } = this.state
            let customOptions = {
                rtopinput: topinput,
                rbottominput: bottominput,
                rplatecolor: platecolor, 
                rtextcolor: textcolor.value
            }
            this.props.editInputs(customOptions)
            this.props.history.push('/checkout')
        }
    }
    handleTextColor(textcolor){
        this.setState({
            textcolor
        })
    }
    handleChange(prop,val){
        this.setState({
            [prop]:val
        })
    }
    render(){
       console.log(9999, this.props)
    
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
                    textcolor={this.state.textcolor.value}
                    />
                </div>

                                    <div>
                                        <h3>Text Color</h3>
                                        <div>
                                        <Select
                                        onChange={this.handleTextColor}
                                        value={this.state.textcolor}
                                        label="Single select"
                                        options={options}
                                        styles={colourStyles}
                                        />
                                    </div>
                                    <div>
                                        <input type='text' placeholder="Top Input" value={this.state.topinput} maxLength='10' onChange={e=>this.handleChange('topinput',e.target.value)}></input>
                                    </div>
                                    <div>
                                        <input type='text' placeholder="Bottom Input" value={this.state.bottominput} maxLength='10' onChange={e=>this.handleChange('bottominput',e.target.value)}></input>
                                    </div>
                                    <div>    
                                        <button onClick={this.updateRedux}>CheckOut</button>
                                    </div>
                </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        email: state.email,
        user_id: state.user_id,
        isReviewed: state.isReviewed
    }
}

export default connect(mapStateToProps, {editInputs, clearInputs})(Customize)