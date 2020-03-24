function myFunction() {
    var x = document.getElementById("myText").value;
    if (x == x.toUpperCase()) {
      console.log('They are shouting');

  }
  else if(x == x.toLowerCase()){
      console.log('They are talking quietly');
  }
  else
      console.log('They are talking normal');
}