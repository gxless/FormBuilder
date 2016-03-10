//var mock = require("./user.mock.json");

var mock = [
    {	"_id": 123, "firstName":"Alice",            "lastName":"Wonderland",
        "username":"alice",  "password":"alice",   "roles": ["student"], "email":"alice@alice.cn"},
    {	"_id": 234, "firstName":"Bob",              "lastName":"Hope",
        "username":"bob",    "password":"bob",     "roles": ["admin"], "email":"bob@bob.edu"},
    {	"_id": 345, "firstName":"Charlie",          "lastName":"Brown",
        "username":"charlie","password":"charlie", "roles": ["faculty"], "email":"charlie@charlie.com"},
    {	"_id": 456, "firstName":"Dan",              "lastName":"Craig",
        "username":"dan",    "password":"dan",     "roles": ["faculty", "admin"], "email":"dan@dan.com"},
    {	"_id": 567, "firstName":"Edward",           "lastName":"Norton",
        "username":"ed",     "password":"ed",      "roles": ["student"], "email":"ed@ed.com"}
];

module.exports = function() {

    var api = {
        findUserByUsername : findUserByUsername,
        findUserByEmail : findUserByEmail,
        findAllUsers : findAllUsers,
        findUserByCredentials : findUserByCredentials,
        createUser : createUser,
        deleteUserById : deleteUserById,
        updateUserById : updateUserById
    };

    return api;


    function findUserByUsername(username) {
        for(var i in mock) {
            if(mock[i].username === username) {
                return true;
            }
        }
        return false;
    }

    function findUserByEmail(email) {
        for(var i in mock) {
            if(mock[i].email === email) {
                return true;
            }
        }
        return false;
    }


    function findAllUsers() {
        return mock;
    }

    function findUserByCredentials(username, password) {
        for(var i in mock) {
            if(mock[i].username === username && mock[i].password === password) {
                return mock[i];
            }
        }
        return null;
    }

    function createUser(user) {

        var newUser = {
            "_id": (new Date).getTime(),
            "firstName":"",
            "lastName":"",
            "username":user.username,
            "password":user.password,
            "roles": [],
            "email":user.email };

        mock.push(newUser);
        return newUser;
    }

    function deleteUserById(userId) {
        for(var i in mock) {
            if(mock[i]._id == userId) {
                mock.splice(i, 1);
                return mock;
            }
        }
    }

    function updateUserById(userId, user) {
        for(var i in mock) {
            if(mock[i]._id == userId) {
                mock[i] = user;
                return mock[i];
            }
        }
    }


};