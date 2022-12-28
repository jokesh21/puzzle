$(window).on("hashchange", function () {
	if (location.hash.slice(1) == "signup") {
		$(".page").addClass("extend");
		$("#login").removeClass("active");
		$("#signup").addClass("active");
	} else {
		$(".page").removeClass("extend");
		$("#login").addClass("active");
		$("#signup").removeClass("active");
	}
});
$(window).trigger("hashchange");

function validateLoginForm() {
	var name = document.getElementById("logName").value;
	var password = document.getElementById("logPassword").value;
	var getEmail=localStorage.getItem('username');
	var getpass=localStorage.getItem('userpass');

	if (name == "" || password == "") {
		document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
		return false;
	}

	else if (password.length < 8) {
		document.getElementById("errorMsg").innerHTML = "Your password must include atleast 8 characters"
		return false;
	}

	else if (name==getEmail|| password==getpass){
		alert("successfull login");
		
		
			
		return true;
	}
	else if(password!=getpass){
		document.getElementById("errorMsg").innerHTML="wrong password"
		return false;
	}
	
		
	
	else{
		document.getElementById("errorMsg").innerHTML="wrong inputs";
		return false;
	}
}
function validateSignupForm() {
	
	var mail = document.getElementById("signEmail").value;
	var name = document.getElementById("signName").value;
	var password = document.getElementById("signPassword").value;
	var params={
		email_id:document.getElementById("signEmail").value,
		from_name:document.getElementById("signName").value,
		password:document.getElementById("signPassword").value
	}
	emailjs.send("service_gsfeeff","template_sps6tvj",params).then((res) => {
		alert("Verification mail has sent to your mail");
		
	})
	localStorage.setItem('userEmail',mail);
	localStorage.setItem('username',name);
	localStorage.setItem('userpass',password);

	if (mail == "" || name == "" || password == "") {
		document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
		return false;
	}
	else if(!mail.includes("gmail.com")){
		document.getElementById("errorMsg").innerHTML="please add gmail.com at this email field"   
		return false;
	}

	else if (password.length < 8) {
		document.getElementById("errorMsg").innerHTML = "Your password must include atleast 8 characters"
		return false;
	}
	else {
		
		alert("Successfully signed up!");
    	return true;

	}
	

}
