import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import CustomPhoto from '../CustomPhoto/CustomPhoto';
import Logout from '../Logout/Logout'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

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
                <div>

                </div>
                
                <Link to='/confirmation'><button>confirmation</button></Link>
            </div>
        )
    }
}
export default CheckOut