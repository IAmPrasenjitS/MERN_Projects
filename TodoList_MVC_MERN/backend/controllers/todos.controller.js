const TodoModel = require('../models/todo.model')

const todoHomeRoute = (req, res) => {
    res.send('This is Todo Home Route')
}

const todoCreateRoute = (req, res) => {
    TodoModel.create(req.body).then((response)=>{
        res.send('Data Inserted')
    }).catch((err)=>{
        res.send('Error: Data Not Inserted')
        console.log("Error is: " + err)
    })
}

const todoReadRoute = (req, res) => {
    TodoModel.find({}).then((response)=>{
        res.send(response)
    }).catch((err)=>{
        res.send('Error: Something went wrong...')
    })
}

const todoUpdateRoute = (req, res) => {
    TodoModel.findOneAndUpdate({"_id":req.body._id},req.body).then((response)=>{
        res.send('Data Updated')
    }).catch((err)=>{
        res.send('Error: Data Not Updated')
        console.log("Error is: " + err)
    })
}

const todoDeleteRoute = (req, res) => {
    TodoModel.findOneAndDelete({"_id":req.body._id}).then((response)=>{
        res.send('Data Deleted')
    }).catch((err)=>{
        res.send('Error: Data Not Deleted')
        console.log("Error is: " + err)
    })
}

module.exports = {todoHomeRoute, todoCreateRoute, todoReadRoute, todoUpdateRoute, todoDeleteRoute}
