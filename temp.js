function celciustofahrenheit()
{
  var c=document.getElementById("input1").value;
  var f=(9/5*parseFloat(c)+32);
  alert(f);
}
//
function celciustokelvin()
{
  var c=document.getElementById("input1").value;
  var k=(parseFloat(c)+273.15);
  alert(k);
}
//
function kelvintocelcius()
{
  var k=document.getElementById("input1").value;
  if (k < 0) {
        alert("Kelvin cannot be negative.");
    }
  var c=parseFloat(k)-273.15;
  alert(c);
}
//
function fahrenheittocelcius()
{
  var f=document.getElementById("input1").value;
  var c=(parseFloat(f)-32)*(5/9);
  alert(c);
}
//
function fahrenheittokelvin()
{
  var f=document.getElementById("input1").value;
  var k=((parseFloat(f)-32)*(5/9)+273.15);
  alert(k);
}
//
function kelvintofahrenheit()
{
  var k=document.getElementById("input1").value;
   if (k < 0) {
        alert("Kelvin cannot be negative.");
    }
  var f=((parseFloat(k)-273.15)*(9/5)+32);
  alert(f);
}