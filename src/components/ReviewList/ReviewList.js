import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

function ReviewList(props){
   
    const mappedPosts = props.posts.map(post => {
        return(
            <div className='reviewbody'>
            <div>{post.email}</div>
            <div>
            <StarRatingComponent 
            name='star'
            editing={false}
            starCount={5}
            value={post.stars}
            /></div>
            <div>{post.post}</div>
            </div>
        )
    })
    return <div>{mappedPosts}</div>
} 


export default ReviewList