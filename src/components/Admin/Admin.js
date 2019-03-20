import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import OrderList from './OrderList';
import { Link } from 'react-router-dom';
import {Pie} from 'react-chartjs-2';




class Admin extends Component{
    constructor(){
        super()
        this.state = {
            orders: [],
            ratings: [],
            rateData: []
        }
        this.fulfilled = this.fulfilled.bind(this)
    }
    componentDidMount(){
        this.fillRatings()
       
    }
   
    fillRatings = async () => {
        try{ 
        var five = 0
        var four = 0
        var three = 0
        var two = 0
        var one = 0
        let resratings = await axios.get('/api/ratings')
        let res = await axios.get('/api/orders')
        resratings.data.map(rate => {
            if(rate.rating === 5){
               return five++
            } else if(rate.rating === 4) {
               return four++
            } else if(rate.rating === 3) {
               return three++
            } else if(rate.rating === 2) {
               return two ++
            } else {
                return one++
            }
        })
            this.setState({
                ratings: resratings.data,
                orders: res.data,
                rateData: [one, two, three, four, five]
            })
            
        } catch(err){
            console.log(err)
        }
    }
    fulfilled(id){
        axios.put(`/api/isfulfilled/${id}`).then(res => {
            this.setState({
                orders: res.data
            })
        })
    }
    
    render(){
       
        const { rateData } = this.state
        const data = {
            labels: [
                '1 STAR',
                '2 STARS',
                '3 STARS',
                '4 STARS',
                '5 STARS'
            ],
            datasets: [{
                data: rateData,
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                'green',
                'purple'
                
                ],
                hoverBackgroundColor: [
                'orange',
                'orange',
                'orange',
                'orange',
                'orange'
                ]
            }]
        };
        
    


        if(this.props.email !== 'Thomas'){
            return<div><h1>Must be logged in as an administrator to view this page</h1><Link to='/auth'><button className='authbutton'>Login</button></Link></div> 
        } else {
        return(
        <div style={{height: '76vh', width: '100vw'}}>
            <h1>WELCOME IDIOT</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
            
                
                    <div style={{maxHeight: '60vh', maxWidth: '48vw', overflowY: 'auto'}}>
                            <OrderList
                            orders={this.state.orders}
                            fulfilled={this.fulfilled}
                            />
                    </div>
                    <div style={{ minWidth: '50vw', minHeight: '50vh'}}>
                    <h1>Ratings on your orders</h1>
                            <Pie 
                            data={data} 
                            />
                    </div>


                
            </div>
        </div>   
        )
    }
}
}

const mapStateToProps = (State) => {
    return {
        email: State.email,
        user_id: State.user_id
    }
}

export default connect(mapStateToProps)(Admin)