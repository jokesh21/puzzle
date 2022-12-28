function validate() {
    const myFileInput=document.querySelector("#myFileInput");
    var upload_image="";
   
    myFileInput.addEventListener("change",function(){
        const reader=new FileReader();
        reader.addEventListener("load",()=>{
            localStorage.setItem("image",reader.result);
                
        });
        reader.readAsDataURL(this.files[0]);
    })
    document.addEventListener("DOMContentLoaded",()=>{
        const recentImageDataURL=localStorage.getItem("image");
        if(recentImageDataURL){
            document.querySelector("#image").setAttribute("src",recentImageDataURL);


        
                
        }
    }) 
	var Date = document.getElementById("start").value;
	var Address = document.getElementById("demo").value;
	var Phone = document.getElementById("new").value;
    
	localStorage.setItem('date',Date);
	localStorage.setItem('address',Address);
	localStorage.setItem('phone',Phone);

    if( Date=="" || Address=="" ||Phone==""){
        document.getElementById("errorMsg").innerHTML="please fill the required field"
        
        return false;
    }
 
    else if(Address.length<8){
	    document.getElementById("errorMsg").innerHTML="Address should be atleast 8 characters"
        return false;
    }
    else if (isNaN(Phone)) {
        document.getElementById("errorMsg").innerHTML = "phone no. should be integers"
        return false;
    }
    else if( (Phone.length!=10)){
        document.getElementById("errorMsg").innerHTML="phone no. should be 10 digits"
        return false;
    }

    else{
        alert("Profile updated successfully! ")
        alert("Now you can solve the puzzle!")
    }
}
