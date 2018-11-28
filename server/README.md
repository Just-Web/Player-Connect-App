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

## Get all the specific user profiles : GET - /users/:username

