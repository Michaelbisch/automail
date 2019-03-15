import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import StarRatingComponent from 'react-star-rating-component';
import Logout from '../Logout/Logout'
// import { reviewAuth } from '../../ducks/reducer'

class ReviewMaker extends Component{
    constructor() {
        super()
        this.state = {
            isReviewed: false,
            post: '',
            rating: 0
        }
        this.postReview = this.postReview.bind(this)
        this.editPost = this.editPost.bind(this)
    }
    componentDidMount(){
        this.setState({
            isReviewed: this.props.isReviewed
        })
    }
    postReview() {
        const { post, rating } = this.state;
        const { user_id } = this.props;
        axios.post('/api/review', {post, rating, user_id}).then(() => {
        this.props.history.push('/reviews')
        })
    }
    editPost() {
        if(this.state.post !== '' && this.state.rating !== 0){

            const id = this.props.post_id
            const post = {
                rating: this.state.rating,
                post: this.state.post
            }
            axios.put(`/api/review/${id}`, post).then(() => {
                this.props.history.push('/reviews')
            })
        } else {
            alert('Must submit both a rating and a review')
        }

    }
    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue})
    }
    handleChange(prop,val){
        this.setState({
            [prop]:val
        })
    }
    render(){
        console.log(this.props.post_id)
        const { rating } = this.state;
        if(this.props.isReviewed === false ) {
            return(
                <div>
                        <div className='home'>
                            <Link to='/'><button className='homebutton'>home</button></Link>
                        </div>
                <Logout />
                <div>
                <StarRatingComponent 
                name="rate"
                starCount={5}
                value={rating}
                onStarClick={this.onStarClick.bind(this)}
                />
                <input type='text' placeholder="Review" value={this.state.post} onChange={e=>this.handleChange('post',e.target.value)}></input>
                <button onClick={this.postReview}>submit</button>
                </div>
             </div>
        )
    } else {
        return(
            <div>
                 <Link to='/'><button>Home</button></Link>
                 <Logout />
                 <div>
                <StarRatingComponent 
                name="rate"
                starCount={5}
                value={rating}
                onStarClick={this.onStarClick.bind(this)}
                />
                <input type='text' placeholder="Review" value={this.state.post} onChange={e=>this.handleChange('post',e.target.value)}></input>
                <button onClick={this.editPost}>Resubmit</button>
                </div>
            </div>
        )
    }
    }
}
const mapStateToProps = (state) => {
    return {
        email: state.email,
        user_id: state.user_id,
        isReviewed: state.isReviewed,
        order_id: state.order_id,
        post_id: state.post_id
    }
}

export default connect(mapStateToProps)(ReviewMaker)
