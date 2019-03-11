import React from 'react';
import {connect} from 'react-redux';

function ReviewList(props){
    console.log(props)
    // const { }
    const mappedPosts = props.posts.map(post => {
        return (
            <div>Review</div>
        )
    })
    return <div>{mappedPosts}</div>
}
    const mapStateToProps = (state) => {
        return {
            posts: state.posts
        }
    }    


export default connect(mapStateToProps)(ReviewList)