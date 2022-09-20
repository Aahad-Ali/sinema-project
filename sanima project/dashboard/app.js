function myMenu() {
    let menu = document.getElementById('navbarSupportedContent');

    if (menu.style.display == "block") {
        menu.style.display = "none";
    }
    else {
        menu.style.display = "block";
    }
}
function movieDetails() {
    let movieModal = document.getElementById('popup');

    movieModal.style.display = 'flex';
    movieModal.style.flexDirection = 'column';


    let div1 = document.getElementById('card-line1');
    let div2 = document.getElementById('card-line2');

    div1.style.display = "none";
    div2.style.display = "none";


}


function select(args) {

    

    if (args == 1) {
        let seatDiv1 = document.getElementById('seat1').style.backgroundColor = "green";
    }
    if (args == 2) {
        let seatDiv2 = document.getElementById('seat2').style.backgroundColor = "green";
    }

    if (args == 3) {
        let seatDiv3 = document.getElementById('seat3').style.backgroundColor = "green";
    }

    if (args == 4) {
        let seatDiv4 = document.getElementById('seat4').style.backgroundColor = "green";
    }

    if (args == 5) {
        let seatDiv5 = document.getElementById('seat5').style.backgroundColor = "green";
    }

    if (args == 6) {
        let seatDiv6 = document.getElementById('seat6').style.backgroundColor = "green";
    }

    if (args == 7) {
        let seatDiv7 = document.getElementById('seat7').style.backgroundColor = "green";
    }

    if (args == 8) {
        let seatDiv8 = document.getElementById('seat8').style.backgroundColor = "green";
    }

    if (args == 9) {
        let seatDiv9 = document.getElementById('seat9').style.backgroundColor = "green";
    }

    if (args == 10) {
        let seatDiv10 = document.getElementById('seat10').style.backgroundColor = "green";
    }

    if (args == 11) {
        let seatDiv11 = document.getElementById('seat11').style.backgroundColor = "green";
    }

    if (args == 12) {
        let seatDiv12 = document.getElementById('seat12').style.backgroundColor = "green";
    }

    if (args == 13) {
        let seatDiv13 = document.getElementById('seat13').style.backgroundColor = "green";
    }

    if (args == 14) {
        let seatDiv14 = document.getElementById('seat14').style.backgroundColor = "green";
    }

    if (args == 15) {
        let seatDiv15 = document.getElementById('seat15').style.backgroundColor = "green";
    }

    if (args == 16) {
        let seatDiv16 = document.getElementById('seat16').style.backgroundColor = "green";
    }

    if (args == 17) {
        let seatDiv17 = document.getElementById('seat17').style.backgroundColor = "green";
    }

    if (args == 18) {
        let seatDiv18 = document.getElementById('seat18').style.backgroundColor = "green";
    }

    if (args == 19) {
        let seatDiv19 = document.getElementById('seat19').style.backgroundColor = "green";
    }

    if (args == 20) {
        let seatDiv20 = document.getElementById('seat20').style.backgroundColor = "green";
    }

}

function closeModal() {

    let movieName = document.getElementById('picname').Value;
    if (movieName === "") {
      document.getElementById('validationmodal').innerHTML = "This field is required";
    }
    else{
        let div1 = document.getElementById('card-line1');
        let div2 = document.getElementById('card-line2');
    
        div1.style.display = "flex";
        div2.style.display = "flex";
    
        let movieModal = document.getElementById('popup');
    
        movieModal.style.display = 'none';
    }

    

   
}