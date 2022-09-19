function BMI(weight, height){
    let bmi =weight / (height * height);
    return bmi;
}

console.log(BMI(84, 1.82));
console.log(BMI());

function Status(bmi){
    if(bmi<18.5){
        return "لديك نقص في الوزن"
    }
    if(bmi>=18.5 && bmi<25){
        return "وزنك صحي"
    }
    return "لديك زيادة في الوزن"
}

function calculate(){
    let weight=document.getElementById("weight").value;
    let height=document.getElementById("height").value;
    let bmiResult = BMI(weight, height);
    let desc = Status(bmiResult);
    document.getElementById("result").innerText=desc+" : "+bmiResult;
    
}
