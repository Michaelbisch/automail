import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';

class ReviewMaker extends Component{
    constructor() {
        super()
        this.state = {
            isReviewed: false,
            review: '',
            rating: 1
        }
    }
    componentDidMount(){
        this.setState({
            isReviewed: this.props.isReviewed
        })
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
        const { rating } = this.state;
        // console.log(this.state)
        return(
            <div>
                <Link to='/'><button>Home</button></Link>
                <Link to='/auth'><button>Login</button></Link>
                <div>
                <StarRatingComponent 
                name="rate"
                starCount={5}
                value={rating}
                onStarClick={this.onStarClick.bind(this)}
                />
                <input placeholder="Review"></input>
                <Link to='/reviews'><button>submit</button></Link>
                </div>
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

export default connect(mapStateToProps)(ReviewMaker)
