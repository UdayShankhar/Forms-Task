"use strict"

document.getElementById("add").addEventListener("click",function(){
let Name = document.getElementById("name");
let Gender = document.getElementById("gender");
let Pincode = document.getElementById("pincode");
let State = document.getElementById("state");
let Country = document.getElementById("country");
let table = document.getElementById("table_of_information");
let row_Count = table.rows.length;
let row = table.insertRow(row_Count);
row.insertCell(0).innerHTML = Name;
row.insertCell(1).innerHTML = Gender;
row.insertCell(2).innerHTML = Pincode;
row.insertCell(3).innerHTML = State;
row.insertCell(4).innerHTML = Country;
});