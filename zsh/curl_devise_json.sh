curl -v -H "Accept: application/json" -H "Content-Type: application/json" -X POST \
-d '{"user":{"email":"email@email.com","password":"foobar","password_confirmation":"foobar"}}' \
http://0.0.0.0:3000/users
