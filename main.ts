//STUDENT MANAGEMENT PORTAL USING INQUIRER
import inquirer from 'inquirer'
let studentManagement = async ()=>{
    let loop = true
    let balance = Math.floor(Math.random()*60000)
    while(loop){
        const portal = await inquirer.prompt([{
            type:'list',
            name:'portalOption',
            message:'Login or Sign Up',
            choices:['Login', 'Sign Up', 'Exit']
        }])
        switch(portal.portalOption){
            case 'Exit':
                loop=false
                break;
            case 'Login':
                const authData = await inquirer.prompt([{
                    type:'input',
                    name:'studentID',
                    message:'Enter your ID'
                },
                {
                    type:'password',
                    name:'studentPIN',
                    message:'Enter your 5 Digit Pin'
                }
            ])
            type Data ={
                'id': string,
                'pin':string,
            }
            let stuOne:Data={
                'id' : 'sarosh',
                'pin': '12345',
            }
            let stuTwo:Data={
                'id': 'ahmed',
                'pin':'98765',
            }
            if((authData.studentID===stuOne.id&&authData.studentPIN===stuOne.pin)||
                authData.studentID===stuTwo.id&&authData.studentPIN===stuTwo.pin){
                    console.log('Welcome to the Portal ', authData.studentID,)
                    const loginOption = await inquirer.prompt([{
                        type:'list',
                        name:'loginList',
                        message:'Select your action',
                        choices:['Payment Check','Pay Fees' ,'Enrolled Courses']
                    }])
                    switch (loginOption.loginList){
                        case 'Payment Check':
                        console.log('Your Outstanding Balance is =',balance,'Rs')
                        loop = false
                        break;
                        case 'Pay Fees':
                            console.log('Your current outstanding Balance is=',balance,'Rs')
                        const fee = await inquirer.prompt([{
                            type:'number',
                            name:'feePay',
                            message:'Enter the Amount of fees you want to pay',
                        }])
                        console.log('Fees Paid Rs:',fee.feePay,'Balance left',`${balance-fee.feePay}`)
                        loop = false
                        break;
                        case 'Enrolled Courses':
                        let courses: string[] =['Data Structure', 'Programming Fundamentals','Applied Physics']
                        console.log('Your existing courses:', courses)
                        const courseOptions= await inquirer.prompt([{
                            type:'list',
                            name:'courseAdd',
                            message:'Add new courses or Logout',
                            choices:['Add Courses', 'Logout']
                        }])
                        switch(courseOptions.courseAdd){
                            case 'Logout':
                                loop = false
                                break;
                            case 'Add Courses':
                                const addNew = await inquirer.prompt([{
                                    type:'checkbox',
                                    name:'addCourse',
                                    message: 'Select new courses',
                                    choices:['Calculus','DLD','Functional English']
                                }])
                                console.log('Your current courses are:',courses,addNew.addCourse)
                                loop=false
                                break;
                        }
                    }
                }
                else{
                    console.log('Incorrect Pin or ID')
                    loop =false
                    break;
                }
                break;
                case 'Sign Up':
                    const newData = await inquirer.prompt([{
                        type:'input',
                        name:'newID',
                        message:'Enter your ID',
                    }])
                    let newPIN = Math.floor(Math.random()*(99999-10000+1))+10000
                    console.log('User Successfully Added \n Name=',newData.newID,'Your 5 Digit Pin is:',newPIN)
                    loop=false
                    break;
    }
}
}
studentManagement()