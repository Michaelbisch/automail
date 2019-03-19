select orders.order_id,	orders.topinput, orders.bottominput, orders.platecolor,	orders.textcolor, orders.shipping, orders.isfulfilled, users.email
from orders
join users
on orders.user_id = users.user_id
where isfulfilled = false;
