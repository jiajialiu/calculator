var operations=document.getElementsByName("oper");
function calculate() {  
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    var operator="";
    var result="";
    for (var i=0;i<4;i++) {
        if(operations[i].checked){
            operator=operations[i].value;
            break;
        }
    }
    if (operator!="") {
        if (num1=="") {
            alert("please enter number 1");
        }
        else if (num2=="") {
            alert("please enter number 2");
        }
        else{
            switch (operator) {
                case "+":
                    result=num1+num2;
                    document.getElementById("result").textContent="Result is: "+result;
                    break;
                case "-":
                    result=num1-num2;
                    document.getElementById("result").textContent="Result is: "+result;
                    break;
                case "*":
                    result=num1*num2;
                    document.getElementById("result").textContent="Result is: "+result;
                    break;
                case "/":
                    if (num2== 0) {
                        alert("cannot divide by 0!");
                        break;
                    }
                    result=num1/num2;
                    document.getElementById("result").textContent="Result is: "+result;
            }
        }       
    }   
}
for (var i=0;i<4;i++) {
    operations[i].addEventListener("click",calculate,false);
}
document.getElementById("num1").addEventListener("change",calculate,false);
document.getElementById("num2").addEventListener("change",calculate,false);
