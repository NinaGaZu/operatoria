
/*  Tabla del 7 */
 for (var i = 1; i <= 10; i++) {
    let num= 7;
    multi = num * i;
    console.log(num + "x" + i + "=" + multi + "<br>");
}


  
    function suma(){
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let suma = parseInt(n1) + parseInt(n2);
    resultado.innerHTML=(suma);
    }

    function resta(){
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let resta = n1 - n2;
    if (resta < 0) resultado.innerHTML=(0);
    else resultado.innerHTML=(resta);
    }

    function porcentaje(){
    let n3 = document.getElementById("num3").value;
    let n4 = document.getElementById("num4").value;
    let p = n3 / 100;
    let porcentaje = p * n4;
    igual.innerHTML=(porcentaje);
    }
 


    

      



