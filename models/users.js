const path = require('path')
const fs = require('fs')

class Users {
  static find() {
    return fs.readFileSync(path.join(__dirname, '../resourсes', 'users.json'), 'utf8')
  }

  static findOne(id) {
    const file = fs.readFileSync(path.join(__dirname, '../resourсes', 'users.json'), 'utf8')
    const usersData = JSON.parse(file)
    const user = usersData.users.filter((data) => data.id === +id)

    if (typeof user[0] !== 'undefined') {
      return user[0]
    }

    return false
  }

  static save(users, data = null) {
    if (data) {
      data.age = +data.age
      users.push(data)
    }

    fs.writeFileSync(path.join(__dirname, '../resourсes', 'users.json'), JSON.stringify({ users }))

    return true
  }

  static delete(users, id) {
    return users.filter((a) => a.id !== +id)
  }
}

module.exports = Users
