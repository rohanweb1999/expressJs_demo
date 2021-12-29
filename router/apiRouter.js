const express = require('express')
const Employee = require('../model/employeeTemplet')
const router = express.Router()


require('../db/conn');
const User = require('../model/employeeTemplet');


//get users
router.get('/getUsers', async (req, res) => {
    try {
        const users = await User.find()
        res.send((users));
    }
    catch (err) {
        console.log("error: ", err)
        res.send("error" + err);
    }
});




//add employee Data
router.post('/signUp', async (req, res) => {

    const employee = new Employee({
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        contact: req.body.contact,
        salary: req.body.salary,
        profession: req.body.profession,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,

    })
    try {
        const addEmployee = await employee.save()
        res.send(addEmployee)
    } catch (error) {
        res.send("erorr" + error)
    }
})


//get user
router.get('/editUser/:id', async (req, res) => {

    try {
        const user = await User.findById(req.params.id)
        console.log("get request for a emp", user);
        res.send(user)
    }
    catch (err) {
        console.log("error: ", err)
        res.send("error" + err)
    };
});
//update user
router.put('/updateUser/:id', async (req, res) => {

    try {
        const user = await User.findById(req.params.id);
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.email = req.body.email;
        user.contact = req.body.contact;
        user.salary = req.body.salary;
        user.profession = req.body.profession;
        user.password = req.body.password;
        user.confirmPassword = req.body.confirmPassword;

        const e1 = await user.save();
        res.send((e1));
    }
    catch (err) {
        console.log("error: ", err)
        res.send("error" + err)
    };
});

module.exports = router