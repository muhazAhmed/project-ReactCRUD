const empModel = require ("../Models/empModel")
const jwt = require("jsonwebtoken")

const addEmp = async (req,res) => {
    try {
        let data = req.body
        let {Name, Age, Salary, Designation} = data

        if (!Name) {
            return res.status(400).json("Please enter a name")
        }
        if (!Age) {
            return res.status(400).json("Please enter Age")
        }
        if (!Salary) {
            return res.status(400).json("Please enter Salary")
        }
        if (!Designation) {
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

        let getData = await empModel.find()
        return res.status(200).json(getData)

    } catch (error) {
        return res.status(500).json(error.message);
    }
}

const getEmpById = async (req,res) => {
    try {
        let data = req.body
        let {Name, Age, Salary, Designation} = data

        let getData = await empModel.findById({_id: req.params.id})
        return res.status(200).json(getData)

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
            
        const deletedEmp = await empModel.deleteOne({_id : empId})
        return res.status(200).json("Employ deleted Successfully")

    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = {addEmp, updateEmp, deleteEmp, getEmp, getEmpById}