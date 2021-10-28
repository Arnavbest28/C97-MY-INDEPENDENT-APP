var firebaseConfig = {
    apiKey: "AIzaSyD5Lp0kQoXU0ukUjMPk6z3HGXJTMM4TDsk",
    authDomain: "c94-kwitter-webapp---part-2.firebaseapp.com",
    databaseURL: "https://c94-kwitter-webapp---part-2-default-rtdb.firebaseio.com",
    projectId: "c94-kwitter-webapp---part-2",
    storageBucket: "c94-kwitter-webapp---part-2.appspot.com",
    messagingSenderId: "329829934543",
    appId: "1:329829934543:web:f4162daf30d5d74c231eba",
    measurementId: "G-NY2CXTVPTR"
  };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("TR").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
var name= message_data['name'];
var message= message_data['message'];
var like= message_data['like'];
var name_with_tag="<h4>"+name+"<img class='user_tick' scr='tick.png'></h4>";
var message_with_tag="<h4 class='message-h4'>"+message+"</h4>";
var like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
var span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";

var row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
 } });  }); }

 
getData();
var user_name=localStorage.getItem("user_name");
var room_name=localStorage.getItem("room_name");

function send(){
     var msg=document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
           name:user_name,
           message:msg,
           like:0
     });
     document.getElementById("msg").value="";
document.getElementById("msginput").value="";
    }


function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }

function updateLike(message_id)
{
console.log("click on the like button - " +message_id);
var button_id=message_id;
var likes=document.getElementById(button_id).value;
var updated_likes= Number(likes)+1; 
console.log(updated_likes);

firebase.database().ref(room_name).child(message_id).update({
    like:updated_likes
});
}