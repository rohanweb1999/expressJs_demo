const express = require('express')
const Employee = require('../model/employeeTemplet')
const router = express.Router()


router.get('/', async (req, res) => {
    try {
        const getEmployee = await Employee.find()
        res.json(getEmployee)
    } catch (error) {
        console.log("error", error);
    }
})
router.post('/', async (req, res) => {

    const employee = new Employee({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        contact: req.body.contact,
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


module.exports = router