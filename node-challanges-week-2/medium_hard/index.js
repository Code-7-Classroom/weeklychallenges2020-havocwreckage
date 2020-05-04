//http://localhost:3000/employees
const express = require('express')

const app = express()

const employees = require('./public/employee.json')

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.json());


app.get('/employees', (req,res) => {
    if(!employees){
        res.status(500).send("Couldnt find employees")
    }

    res.send(employees)
})


app.get('/employees/:id', (req,res) =>{

    if(!employees){
        res.status(500).send("Couldn't find employees")
    }

    const e = employees.employees.find((employee)=>{
        console.log(employee.id);

        return parseInt(req.params.id) == employee.id
    })

    if(!e){
        res.status(404).send("Couldn't find the employee id")
    }

    res.send(e);
})


app.post('/employees', (req, res)=>{
 const employee = {
        name: req.query.name,
        id: employees.employees.length + 1
    
 };
 employees.employees.push(employee);
 res.send(employee)
})

app.put('/employees/:id', (req, res)=>{
    const up = employees.employees.find(function(employees){
        return parseInt(req.params.id) === employees.id;
    })
    if(!up){
        res.status(404).send("Couldn't find the workers")
    } if
        up.name = req.query.name,
        up.job = req.query.job;
    res.send("Make sure you changed only name and job")
});
app.delete('/employees/:id', (req, res)=>{
    const e = employees.employees.find((employees)=>{
        return parseInt(req.params.id) === employees.id;
    })
    if(!e){  
        res.status(404).send("Couldn't find the employees")
    }
    const index = employees.employees.indexOf(e);
    employees.employees.splice(index, 1);
    res.send('Employee deleted');
});



const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`server running on port ${port}`)
})