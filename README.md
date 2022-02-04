

####Инструкция по запуску:

Выполнить миграции

`npx sequelize-cli db:migrate`

Выполнить сиды

`npx sequelize-cli db:seed:all`

Запустить сервер на домене http://localhost:3000

`npm run watch`
<br><br>
####Endpoints
- получить список пользователей:

`GET localhost:3000/api/users/`
<br><br>
- получить данные по конкретному пользователю:

`GET localhost:3000/api/users/{user_id}`
<br><br>
- добавить нового пользователя:

`POST localhost:3000/api/users/`

параметры:
```
name            STRING
age             INTEGER
profession      STRING
```
<br><br>
- обновить пользователя (методом PUT):

`PUT localhost:3000/api/users/{user_id}`

При запросе методом PUT нужно обязательно указывать все параметры.

параметры:
```
name            STRING
age             INTEGER
profession      STRING
```
<br><br>
- обновить пользователя (методом PATCH):

`PATCH localhost:3000/api/users/{user_id}`

При запросе методом PATCH можно указать один из параметров.

параметры:
```
name            STRING
age             INTEGER
profession      STRING
```
<br><br>
- удалить пользователя:

`DELETE localhost:3000/api/users/{user_id}`