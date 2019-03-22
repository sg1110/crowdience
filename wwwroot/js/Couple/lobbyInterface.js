"use strict";

let connection = new signalR.HubConnectionBuilder().withUrl("/pollHub").build();

document.getElementById("joinGame").addEventListener("click", function (event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
   
    var data = {
        coupleOne: "change this value"
        ///need to check uid to find correct id, where to put couple 1
        //how to fill in couple two???need seperate pages? or use if statement
        //coupleone if its empty, couple2 if not
    }

    fetch("/api/Game", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }).then($(location).attr('href', '/Couple/Vote'))

    // localStorage.setItem("couple", username);
    // if (!username) {
    //     username = "[anonymous]";
    //     //need to change so it's a must to be entered
    // }

    connection.invoke("SendCouple", username).catch(function (err) {
        return console.error(err.toString());
    });

});

connection.start().catch(function (err) {
    return console.error(err.toString());
});

connection.on("ReceiveUid", function(uid) {
    console.log(uid);
    let uid = uid
  });