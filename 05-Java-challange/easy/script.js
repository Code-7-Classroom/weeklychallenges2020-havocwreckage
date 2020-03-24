var firstPerson = "John";
var secondPerson = "Thomas";
var fp=firstPerson.length;
var sp=secondPerson.length;
var nameDifference = (fp-sp); 

if(nameDifference<0){
    nameDifference=nameDifference * -1;
}
    if(fp>sp){
    console.log('The name '+ firstPerson+ ' is longer than '
    +secondPerson+ ' by '+nameDifference+ ' letters');
    }
    else{
        console.log('The name '+ secondPerson+ ' is longer than '
        +firstPerson+ ' by '+nameDifference+ ' letters');
    }
