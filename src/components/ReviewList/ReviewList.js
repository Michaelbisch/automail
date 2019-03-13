import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

function ReviewList(props){
   
    const mappedPosts = props.posts.map(post => {
        return(
            <div className='reviewbody' key={post.post_id}>
            <div>{post.email}</div>
            <div>
            <StarRatingComponent 
            name='star'
            editing={false}
            starCount={5}
            value={post.rating}
            /></div>
            <div>{post.post}</div>
            </div>
        )
    })
    return <div>{mappedPosts}</div>
} 


export default ReviewList