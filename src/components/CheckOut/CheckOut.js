import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import CustomPhoto from '../CustomPhoto/CustomPhoto';
import Logout from '../Logout/Logout'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const stripeDiv = {width: '34vw', height: '45vh', position: 'absolute', top: '26vh', right: '15vw', background: 'red'}

class CheckOut extends Component{
    constructor(props) {
        super(props)
        this.state = {
            amount: 3000
        }
    }
    onToken = (token) => {
        token.card = void 0
        axios.post('/api/payment', {token, amount: this.state.amount}).then(res => {
            console.log(res.data.billing_details.address)
            this.props.history.push('/confirmation')
        })
    }
    render(){
        return(
            <div>
                <div>
                    <Logout />
                        <div className='home'>
                            <Link to='/'><button className='homebutton'>home</button></Link>
                        </div>
                </div>
                <CustomPhoto />
                <div style={stripeDiv}>
                <StripeCheckout 
                name="Automail Industries."
                description="Custom License Plate"
                shippingAddress
                billingAddress
                zipCode
                token = {this.onToken}
                stripeKey={'pk_test_CmQCk8PskvWNIep7n07rRzKn'}
                amount={this.state.amount}
                />
                </div>
                
                
            </div>
        )
    }
}
export default CheckOut