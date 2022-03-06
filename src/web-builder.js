// code for the data 
//data will be over-ride 

function generateHtml(data){


    const managerCard =manager =>{
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
        ${manager.name} <br/>
           <i class="fas fa-mug-hot"></i>${manager.getRole()}</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="">${manager.email}<//a></span></li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</</li>
            </ul>
        </div>
        `
    }
//make engineers card
    
    const engineerCard = engineer =>{
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-header">
       ${engineer.name} <br/>
       <i class="fas fa-glasses"></i>${engineer.getRole} </div>
       <ul class="list-group list-group-flush">
        <li class="list-group-item">${engineer.id} </li>
        <li class="list-group-item">Email: <span id="email"><a href="">${engineer.email} </a></span></li>
        <li class="list-group-item">${engineer.github} <a target="_blank" href="">zainuabidin</a></li>
        </ul>
    </div>
     `
     
    }
// make intern card
    const teamArr = []

    teamArr.push(data.filter(emp =>emp.getRole()==="Manager").map(manager => managerCard(manager)))
    //need to do same for intern and engineer and end with .join after blue apprectis
    teamArr.push(data.filter(emp =>emp.getRole()==="Engineer").map(engineer => engineerCard(engineer)).join)

    //return the array that is joining all of the cards to tbe written
    return teamArr.join("")
}

module.exports= fullTeam =>{
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
   
    <link rel="stylesheet" href="../dist/style.css" />
    <title>Team Profile Generator</title>
</head>
<body>
    <header>
    <h1> My Team </h1>
    </header>

    <main>  
        ${generateHtml(fullTeam)}
    </main>
     
    </body>
    </html>
    `
}