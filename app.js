var a = {
    sname : ["Taha" , "Ali" , "Ahmed" , "sami" , "faiq"],
    fname : ["Asad" , "Asghar" , "tlaha" , "ibrahim" , "hamza"],
    roll : [1 , 2, 3, 4, 5],
    math : [78.3,65.7,87,77,67],
    english : [78,67,87,99,87],
    urdu : [99,87,67,77,67],
    chemistry:[72,73,74,88,77],
    physic : [88,76,61,65,88],
    
};


document.getElementById("std1_name").innerHTML=a.sname[0];
document.getElementById("std1_father").innerHTML=a.fname[0];
document.getElementById("std1_roll").innerHTML=a.roll[0];
document.getElementById("std1_math").innerHTML=a.math[0];
document.getElementById("std1_english").innerHTML=a.english[0];
document.getElementById("std1_urdu").innerHTML=a.urdu[0];
document.getElementById("std1_chemistry").innerHTML=a.chemistry[0];
document.getElementById("std1_physic").innerHTML=a.physic[0];


document.getElementById("std2_name").innerHTML=a.sname[1];
document.getElementById("std2_father").innerHTML=a.fname[1];
document.getElementById("std2_roll").innerHTML=a.roll[1];
document.getElementById("std2_math").innerHTML=a.math[1];
document.getElementById("std2_english").innerHTML=a.english[1];
document.getElementById("std2_urdu").innerHTML=a.urdu[1];
document.getElementById("std2_chemistry").innerHTML=a.chemistry[1];
document.getElementById("std2_physic").innerHTML=a.physic[1];

document.getElementById("std3_name").innerHTML=a.sname[2];
document.getElementById("std3_father").innerHTML=a.fname[2];
document.getElementById("std3_roll").innerHTML=a.roll[2];
document.getElementById("std3_math").innerHTML=a.math[2];
document.getElementById("std3_english").innerHTML=a.english[2];
document.getElementById("std3_urdu").innerHTML=a.urdu[2];
document.getElementById("std3_chemistry").innerHTML=a.chemistry[2];
document.getElementById("std3_physic").innerHTML=a.physic[2];


document.getElementById("std4_name").innerHTML=a.sname[3];
document.getElementById("std4_father").innerHTML=a.fname[3];
document.getElementById("std4_roll").innerHTML=a.roll[3];
document.getElementById("std4_math").innerHTML=a.math[3];
document.getElementById("std4_english").innerHTML=a.english[3];
document.getElementById("std4_urdu").innerHTML=a.urdu[3];
document.getElementById("std4_chemistry").innerHTML=a.chemistry[3];
document.getElementById("std4_physic").innerHTML=a.physic[3];

document.getElementById("std5_name").innerHTML=a.sname[4];
document.getElementById("std5_father").innerHTML=a.fname[4];
document.getElementById("std5_roll").innerHTML=a.roll[4];
document.getElementById("std5_math").innerHTML=a.math[4];
document.getElementById("std5_english").innerHTML=a.english[4];
document.getElementById("std5_urdu").innerHTML=a.urdu[4];
document.getElementById("std5_chemistry").innerHTML=a.chemistry[4];
document.getElementById("std5_physic").innerHTML=a.physic[4];

function final(){

var i = +prompt("Enter your roll no.,The range is 1-5");
i--
    var result= (a.math[i] + a.english[i] + a.urdu[i] + a.chemistry[i] + a.physic[i])/500*100
    
    document.getElementById("result").innerHTML=` percentage ${result} % <br> Name : ${a.sname[i]} 
    SCORE:<br> MATH : ${a.math[i] }<br> ENGLISH : ${a.english[i]} <br> URDU : ${a.urdu[i]} <br> CHEMISTRY : ${a.chemistry[i]} <br> PHYSIC : ${a.physic[i]}`
}