# Project Hub

## Endpoints
```
baseUrl = http://localhost:3000/api
```

### Auth
| Endpoint | What it does |
| --- | --- |
| ``` /auth/whoami ``` | GET user currently logged in |
| ``` /auth/signup ``` | POST register a new user |
| ``` /auth/login ``` | POST user log in |

Sign up:
```
{
    "name": "Name",
    "email": "email@email.com",
    "password": "password"
}
```

Log in:
```
{
    "email":"email@email.com",
    "password":"password"
}
```

### Categories
| Endpoint | What it does |
| --- | --- |
| ``` /categories ``` | GET all categories |
| ``` /categories/:categoryId ``` | GET a category |

### Ideas
| Endpoint | What it does |
| --- | --- |
| ``` /ideas ``` | GET all ideas |
| ``` /ideas/:id ``` | GET idea by id |
| ``` /ideas ``` | POST a new idea |

### Projects
| Endpoint | What it does |
| --- | --- |
| ``` /projects ``` | GET all projects |
| ``` /projects ``` | POST a new projects |
| ``` /projects/:id ``` | GET a project by an id |
| ``` /projects/:id ``` | UPDATE a project by an id |
| ``` /projects/:id ``` | DELETE a project by an id|

### Comments
| Endpoint | What it does |
| --- | --- |
| ``` /projects/:id/comments ``` | POST a new comment|
| ``` /projects/:id/comments/:id ``` | DELETE a comment of a project|