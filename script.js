"use strict"
function f1()
	{
		var name1 = document.getElementById('name');
		
		/*if(name.value == "")
		{
			alert("Input Name First");
		}
		*/
		
		if(name1.value == "")
		{

			var obj = document.getElementById('msg');
			obj.innerHTML = "Input Name First";
			obj.style.color = "red";
		}
		else if(name1.value.length<=5)
		{
			var obj = document.getElementById('msg');
			obj.innerHTML = "At least two words";
			obj.style.color = "red";
		}
		else if(name1.value.length>=6)
		{
			var obj = document.getElementById('msg');
			obj.innerHTML = "Correct";
			obj.style.color = "green";
		}
	}
//function f2()
	{
		var name = document.getElementById('name').value;
		document.getElementById('msg').innerHTML = name;
	}
	
function f3()
	{
		var email = document.getElementById('email');
		
		if(email.value == "")
		{
			alert("Input Email First");
		}
	}
function f5()
	{	
		if(document.getElementById('gender').checked==false)
		{
			alert("Select gender")
		}
	}