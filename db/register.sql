INSERT INTO users ( email, password )
VALUES ( ${email}, ${password} )
returning user_id, email