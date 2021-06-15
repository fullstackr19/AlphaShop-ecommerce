const bcrypt = require('bcryptjs')

const users = [
    { name: 'Admin', email: 'admin@mail.com', password: bcrypt.hashSync('123456', 10), isAdmin: true },
    { name: 'John doe', email: 'John@mail.com', password: bcrypt.hashSync('John', 10), isAdmin: false },
    { name: 'Jane Doe', email: 'Jane@mail.com', password: bcrypt.hashSync('Jane', 10), isAdmin: false }
]

module.exports = users