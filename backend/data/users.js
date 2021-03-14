
import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Han',
    email: 'han@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Vuong',
    email: 'vuong@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users