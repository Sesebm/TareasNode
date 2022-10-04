const uuid = require("uuid");

/* id del 1 al 3 para testear */
const userDB = [
  {
    id: "1",
    first_name: "Jose",
    last_name: "Bastidas",
    email: "Jose@gmail.com",
    password: "123456",
    birthday: "1995/08/07",
  },
  {
    id: "2",
    first_name: "Maria",
    last_name: "Ramirez",
    email: "mara@gmail.com",
    password: "maramara",
    birthday: "2000/10/16",
  },
  {
    id: "3",
    first_name: "Pablo",
    last_name: "Garcia",
    email: "Pagarcia@gmail.com",
    password: "pablitopablito",
    birthday: "1997/03/26",
  },
];

const getAllUsers = () => {
  return userDB;
};

const getUserById = (id) => {
  const dataById = userDB.find((task) => task.id === id);
  return dataById;
};

const createUser = ({first_name, last_name, email, password, birthday}=cratnewUser) => {
  const newUser = {
    id: uuid.v4(),
    first_name,
    last_name,
    email,
    password,
    birthday,
  };
  userDB.push(newUser);
  return newUser;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};
