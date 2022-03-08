// code for the data 
//data will be over-ride 

function generateHtml(data){


    //make managerCard card
    const managerCard =manager =>{
        return `

          <div class="card" style="width: 18rem;">
            <div class="card-header">
            ${manager.name}<br/>
           <i class="fas fa-mug-hot"></i>${manager.getRole()}<</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="xan.abdn@gmail.com">${manager.email}</a></span></li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
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
           <i class="fas fa-glasses"></i>${engineer.getRole()} </div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:xan.abdn@gmail.com">${engineer.email}</a></span></li>
            <li class="list-group-item">Github Username: <a target="_blank" href="https://github.com/zainuabidin">${engineer.github}</a></li>
            </ul>
        </div>
     `

    }


    // make intern card

    const internCard = intern => {
       
        return ` 
        
        <div class="card" style="width: 18rem;">
            <div class="card-header">
            ${intern.name}<br/>
           <i class="fas fa-user-graduate"></i>Intern</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:xan.abdn@gmail.com">${intern.email}</a></span></li>
            <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
        `

    }

    for (let i = 0; i < data.length; i++) {
        if (data[i].getRole() === "Manager") {
            managerCard(data[i]);
        }
        if (data[i].getRole() === "Engineer") {
           engineerCard(data[i]);
        }
        if (data[i].getRole() === "Intern") {
            internCard(data[i]);
        }
    }



    const teamArr = []
    
    // pushing data in to empty array
    teamArr.push(data.filter(emp =>emp.getRole()==="Manager").map(manager => managerCard(manager)))
    //need to do same for intern and engineer and end with .join after blue apprentice
    // pushing data in to empty array and joining with exiting data
    teamArr.push(data.filter(emp =>emp.getRole()==="Engineer").map(engineer =>engineerCard(engineer)))
     // pushing data in to empty array and joining with exiting data
    teamArr.push(data.filter(emp =>emp.getRole()==="Intern").map(intern =>internCard(intern)))
    

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