let contanier = document.getElementById("container");
let popup = document.getElementById("popup");

function openpage() {

    let fullName = document.getElementById("fullname").value;
    let userName = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let phoneNum = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("cpassword").value;
    let address = document.getElementById("address").value;
    let postalCode = document.getElementById("postalcode").value;
    let dateofBirth = document.getElementById("dateofbirth").value;
    let picture = document.getElementById("picture").value;

    const userInfo = {
        fullName,
        userName,
        email,
        password,
        cpassword,
        phoneNum,
        address,
        postalCode,
        dateofBirth,
        picture,
    }

    if (fullName.length < 2 || fullName.length > 25) {
        document.getElementById("validation1").innerHTML = "*Please write above 2 and less 25 alphabet.";
    }

    if (fullName === "") {
        document.getElementById("validation1").innerHTML = "*This field is required";
    }
    // for email
    if (userName.length < 5 || userName.length > 25) {
        document.getElementById("validation2").innerHTML = "*Please enter above 5 and less 25 alphabet.";
    }
    if (userName === "") {
        document.getElementById("validation2").innerHTML = "*This field is required";
    }

    if (email.length < 5 || email.length > 25) {
        document.getElementById("validation3").innerHTML = "*Please enter above 5 and less 25 alphabet.";
    }
    if (email === "") {
        document.getElementById("validation3").innerHTML = "*This field is required";
    }

    // // for password

    if (password.length <= 7) {
        document.getElementById("validation4").innerHTML = "*your password should be 8 digits.";
    }

    if (password.length > 15) {
        document.getElementById("validation4").innerHTML = "*your password is too long .";
    }
    if (password === "") {
        document.getElementById("validation4").innerHTML = "*this field is required.";
    }

    if (cpassword === "") {
        document.getElementById("validation5").innerHTML = "*This field is required";
    }


    if (phoneNum.length <= 10 || phoneNum.length >= 12) {
        document.getElementById("validation6").innerHTML = "*phone number must be 11 digits";
    }

    if (phoneNum === "") {
        document.getElementById("validation6").innerHTML = "*This field is required";
    }
    // for address
    if (address.length > 29) {
        document.getElementById("validation7").innerHTML = "*address is too long"
    }

    if (address === "") {
        document.getElementById("validation7").innerHTML = "*This field is required";
    }

    // for postalcode
    if (postalCode.length > 8) {
        document.getElementById("validation8").innerHTML = "*Postal code should be 4,6 and 8 digits";
    }

    if (postalCode === "") {
        document.getElementById("validation8").innerHTML = "*This field is required";
    }
    if (dateofBirth === "") {
        document.getElementById("validation9").innerHTML = "*This field is required";
    }
    
    if (cpassword != password) {
        document.getElementById("validation5").innerHTML = "*please enter same password "
    }
    if (picture === "") {
        document.getElementById("validation10").innerHTML = "*This field is required";
    }

    else{
        popup.classList.add("open-page");
        let division = document.getElementById('container').style.display = "none";

        window.localStorage.setItem("userdetails",JSON.stringify(userInfo))

        let values = localStorage.getItem('userInfo');
        console.log(values)
    }


}



//========================================================================== close page ==========================================================================


function closepage() {


   let email = document.getElementById("email").value;
   let password = document.getElementById("password").value;
   let cheakEmail = document.getElementById("cheakEmail").value;
   let cheakPass = document.getElementById("cheakPassword").value;
  
    if (cheakEmail == email && cheakPass == password) {
  
      popup.classList.remove("open-page");

  
    }
    else {
      document.getElementById("modalValidationemail").innerHTML = "Wrong email:";
      document.getElementById("modalValidationpass").innerHTML = "Wrong password:";
    }
  
  
  }