import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Logout from '../Logout/Logout';
import { connect } from 'react-redux';
import ReviewList from '../ReviewList/ReviewList';
import { updatePosts } from '../../ducks/reducer'
class Reviews extends Component{
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }
    componentDidMount(){
        this.getPosts();
    }
    
    getPosts = async () => {
        try {
            let res = await axios.get('/api/posts')
            
            
            this.setState({
                posts: res.data,
            })
        } catch(err) {
            console.log(err)
        }
    }
    render(){
        // console.log(this.state.posts)
        if(this.props.email !== '') {
            return <div>
                <Link to='/post'><button>Make a review</button></Link>
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
                </h3>

                
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        email: state.email
    }
}

export default connect(mapStateToProps, {updatePosts})(Reviews)