const TCTF = () =>
{
  var celsius = parseFloat(document.querySelector("#celsius").value);
  
  var RF = (1.8 *celsius) + 32;
  var a = RF.toFixed(2);

  document.querySelector("#celsius").value = celsius ;

  document.querySelector("#fahrenheit").value = a;
}
 


const TFTC = () =>
{
  var fahrenheit = parseFloat(document.querySelector("#fahrenheit").value);
  
  var CR = (fahrenheit - 32) / 1.8;
  var b = CR.toFixed(2);

  document.querySelector("#celsius").value = b ;

  document.querySelector("#fahrenheit").value = fahrenheit;
}



const reset = () =>

{
   document.querySelector("#celsius").value = " ";
   document.querySelector("#fahrenheit").value = " ";
}

 