import users from '../data/user.data'

const insert = (details) => {
    const newUser = {...details, id:users.length+1};
    users.push(newUser);
    return newUser;
}

const get = (details) => {
    const newUser = {...details};

}

const update = (details) => {
    const newUser = {...details};

}

const remove = (details) => {
    const doesUserExist = users.find((user, index) => {
        if (user.id === details.id) {
            users.splice(index, 1);
            return true;
        }
        return false
    });
    return doesUserExist ? true : false;
};


export default{
    insert,
    get
    update,
    remove
}