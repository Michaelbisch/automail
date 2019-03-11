import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

function ReviewList(props){
    console.log(666666,props.posts)
   
    const mappedPosts = props.posts.map(post => {
        console.log(444444, post.post)
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