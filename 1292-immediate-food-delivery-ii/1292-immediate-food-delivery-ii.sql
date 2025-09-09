# Write your MySQL query statement below
with first_orders as (
    select customer_id, min(order_date) as order_date from Delivery group by customer_id
)

select round(avg(Delivery.order_date = customer_pref_delivery_date)*100,2) as immediate_percentage from Delivery join first_orders on Delivery.customer_id = first_orders.customer_id and Delivery.order_date = first_orders.order_date