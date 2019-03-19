import React from 'react';

function OrderList(props){
    console.log(33333,props)
    const mappedOrders = props.orders.map(order => {
    return(
        <div style={{display: 'flex', flexDirection: 'column', background: 'grey'}}key={order.order_id}>
            <div className='reviewbody' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', color: 'white'}}>
                
                <div>Plate Color:  {order.platecolor}</div>
                <div style={{borderLeft: '3px solid white'}}>Text Color:  {order.textcolor}</div>
                <div style={{borderLeft: '3px solid white'}}>Top Input:  {order.topinput}</div>
                <div style={{borderLeft: '3px solid white'}}>Bottom Input:  {order.bottominput}</div>
                <div style={{borderLeft: '3px solid white'}}>Shipping Information:  {order.shipping}</div>
                <div style={{borderLeft: '3px solid white'}}>Customer Email:  {order.email}</div>
                <button style={{borderLeft: '3px solid white'}} onClick={() => props.fulfilled(order.order_id)}>Fullfilled</button>
            </div>
        </div>
    )
})
return <div>{mappedOrders}</div>
}

export default OrderList