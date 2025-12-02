function add(){
  var a=document.getElementById("input1").value;
   var b=document.getElementById("input2").value;
   var c=parseInt(a)+parseInt(b);
   alert(c);
}
function sub(){
  var a=document.getElementById("input1").value;
   var b=document.getElementById("input2").value;
   var c=parseInt(a)-parseInt(b);
   alert(c);
}
function mul(){
  var a=document.getElementById("input1").value;
   var b=document.getElementById("input2").value;
   var c=parseInt(a)*parseInt(b);
  alert(c);
}
function div(){
  var a=document.getElementById("input1").value;
   var b=document.getElementById("input2").value;
   var c;
    if(b==0)
    {
      alert("division cannot be performed");
    }
    else{
      c=parseFloat(a)+parseFloat(b);
    }
     alert(c);
}

