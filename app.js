const  fs  = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern');
const { mainModule } = require("process");
const team =[]
const generateHtml = require("./src/web-builder")

function promptManager(){
    inquirer.prompt([
        { 
            type: 'input',
            name:'name',
            message:'What is your managers name',


        },
        {
            type:'input',
            name:'id',
            message:'what is the managers id',
        },
        {
            type:'input',
            name:'email',
            message:'what is managers email',

        },
        {
            type:'input',
            name:'officeNumber',
            message:'what is the office number',
        }

    ]) 
    .then((answers)=>{
        const manager= new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.officeNumber,
        )
        console.log(manager)
        team.push(manager)
        mainMenu()
    })
}
function mainMenu(){
    inquirer.prompt([
        {
         type:'list',
         name:'choice',
         message:'what would you like to do next',
         choices:['add engineer','add intern','build team']
        }
    ])
    .then((answers)=>{
        switch(answers.choice){
            case 'add engineer':
                promptEngineer()
                break ;
            case 'add intern':
                promptIntern()
                break ;
            default:
                buildTeam()    
        }
    })
}
function promptEngineer(){
    inquirer.prompt([
        {
            type:'input',
            name:"name",
            message:"What is th engineer's name?"

        },
    
            {
                type:'input',
                name:"id",
                message:"What is the engineer's id?"
    
            },
            {
                type:'input',
                name:"email",
                message:"What is the engineer's email?"
    
            },
            {
                type:'input',
                name:"github",
                message:"What is the engineer's github?"
    
            },
    ]).then((answers)=>{
        const engineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            answers.github
        )
        team.push(engineer)
        mainMenu()
    })
}
function promptIntern(){
    inquirer.prompt([
        {
            type:'input',
            name:"name",
            message:"What is th intern's name?"

        },
    
            {
                type:'input',
                name:"id",
                message:"What is the intern's id?"
    
            },
            {
                type:'input',
                name:"email",
                message:"What is the intern's email?"
    
            },
            {
                type:'input',
                name:"school",
                message:"What is the intern's school?"
    
            },
    ]).then((answers)=>{
        const intern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.school
        )
        team.push(intern)
        mainMenu()
    })
}

function buildTeam(){
    fs.writeFileSync("./dist/index.html", generateHtml(team), "utf-8")
}

promptManager()


// this section is complete
