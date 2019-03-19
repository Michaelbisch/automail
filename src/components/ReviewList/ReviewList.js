import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { editPostId, reviewAuth } from '../../ducks/reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';




function ReviewList(props){
    const auth = {
        user_id: props.user_id,
        isReviewed: true
    }
    const mappedPosts = props.posts.map(post => {
        const {post_id} = post
        if(post.user_id === props.user_id){
            return(
                <div className='reviewbody'  key={post.post_id}>
                    <div>{post.email}</div>
                        <div>
                            <StarRatingComponent 
                                name='star'
                                editing={false}
                                starCount={5}
                                value={post.rating}/>
                        </div>
                    <div>{post.post}</div>
                    <Link to='/post'><button onClick={() => {props.reviewAuth(auth); props.editPostId(post_id)}}>Edit</button></Link>
                    <button onClick={() => props.deletePost(post.post_id)}>Delete</button>
                </div>
        )
    } else {
        return(
            <div style={{display: 'flex', flexDirection: 'column', background: 'grey'}} key={post.post_id}>
                <div className='reviewbody' style={{color: 'white'}}>
                    <div>{post.email}</div>
                        <div>
                            <StarRatingComponent 
                            name='star'
                            editing={false}
                            starCount={5}
                            value={post.rating}
                            />
                        </div>
                    <div>{post.post}</div>
                </div>
            </div>
        )
    }
    })
    return <div>{mappedPosts}</div>
} 
const mapStateToProps = (state) => {
    return {
        user_id: state.user_id,
        post_id: state.post_id
       }
}

export default connect(mapStateToProps, { reviewAuth, editPostId })(ReviewList)