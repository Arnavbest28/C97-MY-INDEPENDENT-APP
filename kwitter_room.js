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


  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("TR").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("TR").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }