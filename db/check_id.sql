select order_id, user_id, isreviewed 
from orders
where order_id = ${order_id}