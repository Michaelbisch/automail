import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Logout from '../Logout/Logout';
import ParticleEffectButton from 'react-particle-effect-button';


class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
            hidden: false
        }
    }
    // animationStart(){
    //     const { hidden } = this.state
    //     this.setState({
    //         hidden: !hidden
    //     })
    // }
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
        console.log(window)
        return(
        <div>
        <Logout />
        <div style={{position: 'absolute', top: '4vh', left: '43vw'}}>
        <Link to='/reviews'><button>Reviews</button></Link>
        <Link to='/contact'><button>Contact</button></Link>
        </div>
        <div style={{position: 'absolute', top: '38vh', left: '33vw'}}>
        <h1>Automail Industries Custom License Plates</h1>
        <h2>Click below to create your own</h2>
        <ParticleEffectButton
                color='#408C99'
                hidden={this.state.hidden}
                duration={1100}
                particlesAmountCoefficient={[20]}
                oscillationCoefficient={[80]}
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