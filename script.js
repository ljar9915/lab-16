// this makes it so the page will show whatever you wrote in the textbox after you submit the form //

function submitForum() {
  let username = document.userform.input_username.value;
  let userEmail = document.userform.input_email.value;
  let userPhoneNum = document.userform.input_phoneNum.value;
  let usernameResult = document.getElementById("nameResult");
  let emailResult = document.getElementById("emailResult");
  let phoneResult = document.getElementById("phoneNumResult");

  nameResult.innerHTML = username;
  emailResult.innerHTML = userEmail;
  phoneResult.innerHTML = userPhoneNum;

  // this makes it so the console will show what you wrote in the form after you submit it //
  console.log(username,userEmail,userPhoneNum);
  
    var x = document.getElementById("before");
    var y = document.getElementById("after");
    if (x.style.display === "none") {
      x.style.display = "block";
      x.style.opacity = "1";
    } else {
      x.style.display = "none";
      y.style.display = "block";
      
    }
}

  function returnHome() { 
    var x= document.getElementById("before");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else
      x.style.display = "none";
}