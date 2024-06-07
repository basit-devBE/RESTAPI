import userDao from '../models/persistence/user.dao';

const addUser =(details) => {
    userDao.insert(details)

};

const getUser = (userId) => {
    userDao.get(userId);
}

const updateUser =(userId) => {
    userDao.update(userId);
    }

const removeUser = (userId) => {
 userDao.remove(userId);
 }



export default userservices