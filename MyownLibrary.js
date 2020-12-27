
function istouching(object1,object2){

    if(object1.x - object2.x < object2.width/2 + object1.width/2 &&
      object2.x - object1.x < object2.width/2 + object1.width/2 && 
    object1.y - object2.y < object2.height/2 + object1.height/2 &&
    object2.y - object1.y < object2.height/2 + object1.height/2){
  //it will return yes , true = yess.
  return true; 
  
  //to make their color same when they are not collided.
  } 
  else {
   //it will return no, false = no.
    return false;
  
  }
  
  
  }
  