

####Инструкция по запуску:

Запустить сервер на домене http://localhost:3000

`npm run watch`
<br><br>
####Endpoints
- получить список пользователей:

`GET localhost:3000/api/v1/users/`
<br><br>
- получить данные по конкретному пользователю:

`GET localhost:3000/api/v1/users/{user_id}`
<br><br>
- добавить нового пользователя:

`POST localhost:3000/api/v1/users/`

параметры:
```
name            STRING
age             INTEGER
profession      STRING
```
<br><br>
- обновить пользователя (методом PATCH):

`PATCH localhost:3000/api/v1/users/{user_id}`

При запросе методом PATCH можно указать один из параметров.

параметры:
```
name            STRING
age             INTEGER
profession      STRING
```
<br><br>
- удалить пользователя:

`DELETE localhost:3000/api/v1/users/{user_id}`

`GET localhost:3000/api/v1/users/`
<br><br>
- получить данные по конкретному проекту:

`GET localhost:3000/api/v1/project/{project_id}`
<br><br>
- добавить новый проект:

`POST localhost:3000/api/v1/project/`

header:
```
User_id         STRING
```
параметры:
```
name            STRING
```