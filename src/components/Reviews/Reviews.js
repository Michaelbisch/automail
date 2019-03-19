import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Logout from '../Logout/Logout';
import { connect } from 'react-redux';
import { reviewAuth } from '../../ducks/reducer';
import ReviewList from '../ReviewList/ReviewList';
class Reviews extends Component{
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            order_id: 0
        }
        this.idCheck = this.idCheck.bind(this)
        this.deletePost = this.deletePost.bind(this)
    }
    componentDidMount(){
        this.getPosts();
    }
    getPosts = () => {
        axios.get('/api/reviews').then(res => {
            this.setState({
                posts: res.data
            })
        })
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
            this.props.reviewAuth(review)
            this.props.history.push('/post')
        } catch(err) {

            alert(err)

        }
    }
    deletePost(id) {
        const { user_id } =  this.props
        console.log(user_id)
        // try { 
            axios.delete(`/api/review/${id}`, { user_id }).then(res => {
            this.setState({
                posts: res.data
            })
        })
        // } catch(err) {
        //     alert(err)
        // }
    }

    handleChange(prop,val){
        this.setState({
            [prop]:val
        })
    }
    render(){
        console.log( 666666,this.props.user_id)
        if(this.props.email !== '') {
            return( 
            <div>
                <h5>Enter a product ID to make a review.</h5>
                <input type='text' placeholder="Product ID" value={this.state.order_id} onChange={e=>this.handleChange('order_id',e.target.value)}></input>
               <button onClick={this.idCheck}>Enter</button>
                        <div className='home'>
                            <Link to='/'><button className='homebutton'>home</button></Link>
                        </div>
                <Logout />
                <div style={{height: '60vh', width: '55vw', overflowY: 'auto', position: 'absolute', left: '23vw', top: '20vh'}}>
                <ReviewList 
                posts={this.state.posts}
                deletePost={this.deletePost}
                />
                </div> 
            </div>
            )
        } 
        return(
            <div>
                        <div className='home'>
                            <Link to='/'><button className='homebutton'>home</button></Link>
                        </div>
                <h3>Login to make a review</h3>
                <Logout />
                <div>
                <ReviewList 
                posts={this.state.posts}
                /> 
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        email: state.email,
        user_id: state.user_id,
        isReviewed: state.isReviewed,
        order_id: state.order_id
    }
}

export default connect(mapStateToProps, { reviewAuth })(Reviews)