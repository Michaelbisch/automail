insert into posts
( rating, post, user_id )
values (${rating}, ${post}, ${user_id});

select posts.post_id, posts.user_id, posts.post, posts.rating, users.email
from posts
join users
on posts.user_id = users.user_id
order by posts.post_id asc