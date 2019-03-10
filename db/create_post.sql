insert into posts
( stars, post, user_id )
values (${stars}, ${post}, ${user_id});

select posts.post_id, posts.user_id, posts.post, posts.stars, users.email
from posts
join users
on posts.user_id = users.user_id
order by posts.post_id asc