const empModel = require ("../Models/empModel")
const jwt = require("jsonwebtoken")

const addEmp = async (req,res) => {
    try {
        let data = req.body
        let {Name, Age, Salary, Designation} = data

        if (!data.Name) {
            return res.status(400).json("Please enter a name")
        }
        if (!data.Age) {
            return res.status(400).json("Please enter Age")
        }
        if (!data.Salary) {
            return res.status(400).json("Please enter Salary")
        }
        if (!data.Designation) {
            return res.status(400).json("Please enter Designation")
        }

        let saveData = await empModel.create(data)
        return res.status(201).json(saveData)

    } catch (error) {
        return res.status(500).json(error.message);
    }
}
const getEmp = async (req,res) => {
    try {
        let data = req.body
        let {Name, Age, Salary, Designation} = data

        let getData = await empModel.find(data)
        return res.status(200).json({data:getData})

    } catch (error) {
        return res.status(500).json(error.message);
    }
}
const updateEmp = async (req,res) => {
    try {
        let body = req.body
        const updatedEmp = await empModel.updateOne({_id: req.params.id}, {$set : body})
        return res.status(200).json(updatedEmp)

    } catch (error) {
        return res.status(500).json(error.message);
    }
}
const deleteEmp = async (req,res) => {
    try {
        const empId = req.params.id
        const token = req.cookies.access_token
        if (!token) {
            return res.status(401).json("You are not allowed")
        }
        jwt.verify(token, process.env.JWT_SECRET, (err, empInfo) => {
            if(err) {
                return res.status(401).json(err.message)
            }
            
            const deletedEmp = empModel.deleteOne({_id : empId})
            return res.status(204).json("Employ deleted Successfully", deletedEmp)
        })

    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = {addEmp, updateEmp, deleteEmp, getEmp}