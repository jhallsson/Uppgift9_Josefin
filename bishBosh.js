const count = 12;
let message;
for (var i = 1; i <= count; i++) {
    if(i%3==0 && i%4==0){
      message = "Bish-Bosh";
    }
    else if(i%3==0){
      message="Bish";
    }
    else if(i%4==0){
      message="Bosh";
    }
    else{
      message = i;
    }
    //console.log(message);
}
