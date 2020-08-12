function too() {
    var a = 8;
    var b = 2;
    var c = a + b;
    if (c > 0) {        
        document.write("Eyreg too :"+c)
        console.log("Eyreg too :" +c)
    } else {   
        document.write("Surug too :"+c)
        console.log("Surug too :" +c)
    }
}
function countDown() {
  var currentVal = document.getElementById("countDownButton").innerHTML;
  var newVal=0 ;
  if  (currentVal > 0) {
      newVal = currentVal - 1;
  }
  document.getElementById("countDownButton").innerHTML = newVal ; 
}
function tovch(){
    var colors= new Array();
     colors[0]="red";
     colors[1]="green";
     colors[2]="blue";
     colors[3]="orange";
     colors[4]="magenta";
     colors[5]="cyan";
      for (var i in colors){
          document.write('<div style="background-color:'+colors[i]+';">'+ colors[i]+"</div>\n");
          
      }
}



