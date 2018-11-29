# How to use endpoints 

## Register User : POST - /users/register
Body : 

```
{
    "name":"abccc1",
    "email":"abccc@cpp.edu",
    "username":"abcccc",
    "password":"123456" 
}
```
    
## Authenticate User : POST - /users/authenticate
Body : 
```
{
	  "username":"abcccc",
          "password":"123456"
}
```

## Get all the users profiles : GET - /users/profile
Header: 
```Authorization : token```

## Get the specific user profiles : GET - /users/:username
```http://localhost:3000/users/:username```

Body : 
```
{
	  "name":"abcccc",
          "username":"123456"
	  "email":"abcccc",
          "games":"123456"
	  "socialsite":"abcccc",
          "describe":"123456"
}
```

## Get all the users profiles : GET - /users/all
```http://localhost:3000/users/all```

## Get all users by game: GET - /users/game/:game
```http://localhost:3000/users/game/Minecraft```
