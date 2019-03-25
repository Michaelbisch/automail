import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Logout from '../Logout/Logout';
import ParticleEffectButton from 'react-particle-effect-button';

const buttonMargin = {margin: '3vw', marginBottom: '1.8vh', marginLeft: 0, marginRight: 0}
const centerStyle ={position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
            hidden: false,
            width: window.innerWidth,
            amount: 0,
            oamount: 0
        }
    }
    componentDidMount(){
        this.particleAmount()
    }
    particleAmount = () => {
        if(this.state.width < 800){
            this.setState({
                amount: 3,
                oamount: 5
            })
        }
        else {
            this.setState({
                amount: 15,
                oamount: 65
            })
        }

    }
    animationEnd(){
        const { hidden } = this.state
        this.setState({
            hidden: !hidden
        })
        window.setTimeout(() => {
        this.props.history.push('/customize')
        }, 2200)
    }
    
    render() {
        return(
        <div>
        <Logout />
        
        <div style={centerStyle}>
        <Link to='/reviews'><button style={buttonMargin}>Reviews</button></Link>
        <Link to='/contact'><button style={buttonMargin}>Contact</button></Link>
        <h1>Automail Industries Custom License Plates</h1>
        <h2>Click below to create your own!</h2>
        <ParticleEffectButton
                color='#408C99'
                hidden={this.state.hidden}
                duration={1100}
                particlesAmountCoefficient={this.state.amount}
                oscillationCoefficient={this.state.oamount}
                >
                <button
                    className="myButton"
                    onClick={() => this.animationEnd()}
                >Create!!</button>
            </ParticleEffectButton>
         </div> 

        </div>
        
        )
    }
}

export default Dashboard