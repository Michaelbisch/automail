import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Logout from '../Logout/Logout';
import { connect } from 'react-redux';
import { reviewAuth } from '../../ducks/reducer'
import ReviewList from '../ReviewList/ReviewList';
class Reviews extends Component{
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            order_id: 0
        }
        this.idCheck = this.idCheck.bind(this)
    }
    componentDidMount(){
        this.getPosts();
    }

    async idCheck(){
        const id = this.props.user_id
        const { order_id } = this.state
        // console.log(11111111, order_id)
        try {
            let res =  await axios.post(`/api/idcheck/${id}`, {order_id})
            let review = {
                order_id: res.data.order_id,
                isReviewed: res.data.isreviewed
            }
            console.log(555555, review)
            this.props.reviewAuth(review)
            this.props.history.push('/post')
        } catch(err) {

            alert('problamo')

        }
    }

    getPosts = () => {
        axios.get('/api/reviews').then(res => {
            this.setState({
                posts: res.data
            })
        })
    }
    handleChange(prop,val){
        this.setState({
            [prop]:val
        })
    }
    render(){
        // console.log(this.props)
        if(this.props.email !== '') {
            return <div>
                <h5>Enter a product ID to make a review.</h5>
                <input type='text' placeholder="Product ID" value={this.state.order_id} onChange={e=>this.handleChange('order_id',e.target.value)}></input>
               <button onClick={this.idCheck}>Enter</button>
                <Link to='/'><button>Home</button></Link>
                <Logout />
                <ReviewList 
                posts={this.state.posts}
                /> 
                </div>
        } 
        return(
            <div>
                <Link to='/'><button>Home</button></Link>
                <h3>Login to make a review
                <Logout />
                <ReviewList 
                posts={this.state.posts}
                /> 
                </h3>

                
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

export default connect(mapStateToProps, { reviewAuth })(Reviews)