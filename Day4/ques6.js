function checkResult(num1, exam){
    if(num1>=90 && num1<=100 && exam=== "final-exam" ){
        console.log("Your grade in final exam is: A+" )

    }
    else if(num1>=89 && num1<=100 ){
        console.log("your grade is A+")

    }
}

console.log(checkResult(89,"MTE-2"))

console.log(checkResult(90,"final-exam"))
