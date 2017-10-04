
function addGuest1(){
  var roomLength=document.getElementsByClassName('guestsOfRoomOne')[0].getElementsByTagName('li');
  if (roomLength.length<3){
    var roomOneGuests = document.createElement('li');
    //creates a display case for roomOneGuests
    var x=document.getElementById('guestOne').value;
    //finds user input on guest name and saves it
     var newText1=document.createTextNode(x);
    //takes the saved user guest name and prepares it to be appended
    roomOneGuests.appendChild(newText1);
    //takes the prepared userinput and puts it in the display case
    var position=document.getElementsByClassName('guestsOfRoomOne')[0];
    //marks where the dispaly case will go
    position.appendChild(roomOneGuests);
    //puts display case with item in it on the ordered list wall
    document.getElementById('guestOne').value= "";
    //erases whatever name was put in the input field
  }
  else{
    return
  }
}

function removeGuest1(){
  var y=document.getElementById('guestNumber1').value;
  if ((y==1 || y==2 || y==3)){
    var list=document.getElementsByClassName('guestsOfRoomOne')[0].getElementsByTagName('li')[y-1];
    var ul=list.parentNode;
    ul.removeChild(list);}
  else{return}
}



function addGuest2(){
  var roomLength=document.getElementsByClassName('guestsOfRoomTwo')[0].getElementsByTagName('li');
  if (roomLength.length<3){
    var roomTwoGuests = document.createElement('li');
    //creates a display case for roomOneGuests
    var xx=document.getElementById('guestTwo').value;
    //finds user input on guest name and saves it
     var newText2=document.createTextNode(xx);
    //takes the saved user guest name and prepares it to be appended
    roomTwoGuests.appendChild(newText2);
    //takes the prepared userinput and puts it in the display case
    var position=document.getElementsByClassName('guestsOfRoomTwo')[0];
    //marks where the dispaly case will go
    position.appendChild(roomTwoGuests);
    //puts display case with item in it on the ordered list wall
    document.getElementById('guestTwo').value= "";
    //erases whatever name was put in the input field
  }
  else{
    return
  }
}

function removeGuest2(){
  var yy=document.getElementById('guestNumber2').value;
  if ((yy==1 || yy==2 || yy==3)){
    var list2=document.getElementsByClassName('guestsOfRoomTwo')[0].getElementsByTagName('li')[yy-1];
    var ul2=list2.parentNode;
    ul2.removeChild(list2);}
  else {return}
}

function addGuest3(){
  var roomLength=document.getElementsByClassName('guestsOfRoomThree')[0].getElementsByTagName('li');
  if (roomLength.length<3){
    var roomThreeGuests = document.createElement('li');
    //creates a display case for roomOneGuests
    var xxx=document.getElementById('guestThree').value;
    //finds user input on guest name and saves it
    var newText3=document.createTextNode(xxx);
    //takes the saved user guest name and prepares it to be appended
    roomThreeGuests.appendChild(newText3);
    //takes the prepared userinput and puts it in the display case
    var position=document.getElementsByClassName('guestsOfRoomThree')[0];
    //marks where the dispaly case will go
    position.appendChild(roomThreeGuests);
    //puts display case with item in it on the ordered list wall
    document.getElementById('guestThree').value= "";
    //erases whatever name was put in the input field
  }
  else{
    return
  }
}

function removeGuest3(){
  var yyy=document.getElementById('guestNumber3').value;
  if ((yyy==1 || yyy==2 || yyy==3)){
    var list3=document.getElementsByClassName('guestsOfRoomThree')[0].getElementsByTagName('li')[yyy-1];
    var ul3=list3.parentNode;
    ul3.removeChild(list3);}
  else {
    return
  }
}

function addGuest4(){
  var roomLength=document.getElementsByClassName('guestsOfRoomFour')[0].getElementsByTagName('li');
  if (roomLength.length<3){
    var roomFourGuests = document.createElement('li');
    //creates a display case for roomOneGuests
    var xxxx=document.getElementById('guestFour').value;
    //finds user input on guest name and saves it
    var newText4=document.createTextNode(xxxx);
    //takes the saved user guest name and prepares it to be appended
    roomFourGuests.appendChild(newText4);
    //takes the prepared userinput and puts it in the display case
    var position=document.getElementsByClassName('guestsOfRoomFour')[0];
    //marks where the dispaly case will go
    position.appendChild(roomFourGuests);
    //puts display case with item in it on the ordered list wall
    document.getElementById('guestFour').value= "";
    //erases whatever name was put in the input field
  }
  else{
    return
  }
}

function removeGuest4(){
  var yyyy=document.getElementById('guestNumber4').value;
  //finds what number the user entered in the remove guest input field
  if ((yyyy==1 || yyyy==2 || yyyy==3)){
    var list4=document.getElementsByClassName('guestsOfRoomFour')[0].getElementsByTagName('li')[yyyy-1];
    //finds the ordered list and the index selected by the user
    var ul4=list4.parentNode
    //finds the parent of the child
    ul4.removeChild(list4);
    //removes child from parent node
  }
  else{
    return
  }
}
