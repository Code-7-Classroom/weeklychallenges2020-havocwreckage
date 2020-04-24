let express = require('express')

let app = express()

let data = require('./public/employees.json')

app.get('/test',(req,res) => {
    
    res.send("people")

})


app.get('/employees', (req,res) => {

    if(!data){
        res.status(404).send("Couldnt find the students")
    }

    res.send(data)

})


app.get('/employees/:id', (req,res) =>{

    const sData = data.employees.find((employee)=>{
        console.log(employee.id)

        return parseInt(req.params.id) === employee.id
    })

    if(!data){
        res.status(404).send("Couldnt find the student id")
    }

    res.send(sData);

})

 


const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`server running on port ${port}`)
})