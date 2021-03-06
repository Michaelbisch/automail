import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Logout from '../Logout/Logout';
import { connect } from 'react-redux';
import { reviewAuth } from '../../ducks/reducer';
import ReviewList from '../ReviewList/ReviewList';
import './Reviews.css'


class Reviews extends Component{
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            order_id: ''
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
            axios.delete(`/api/review/${id}`, { user_id }).then(res => {
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
        
        if(this.props.email !== '') {
            return( 
            <div>
                <div className="revheader">
                <h3 className="h3id" style={{marginBottom: 'unset'}}>Enter a product id</h3>
                <h3 className="h3id" style={{margin: 'unset'}}>to make a review</h3>
                <input className='idinput' type='text' placeholder="id" value={this.state.order_id} onChange={e=>this.handleChange('order_id',e.target.value)}></input>
                <button onClick={this.idCheck}>Enter</button>
               </div>
                        <div className='home'>
                            <Link to='/'><button className='homebutton'>home</button></Link>
                        </div>
                <Logout />
                <div className="reviewlist" >
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
                <div className="revheader">
                <h3 className="h3id">Login to make a review</h3>
               </div>
                        <div className='home'>
                            <Link to='/'><button className='homebutton'>home</button></Link>
                        </div>
                <Logout />
                <div className='reviewlist'>
                <ReviewList 
                posts={this.state.posts}
                deletePost={this.deletePost}
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