function updateCountryView() {
    var ddCountry = document.getElementById("ddCountry");
    var divCountry = document.getElementById("divCountry");

    if (ddCountry.value == "Yes") {
        divCountry.classList.remove("invisible");

    }
    else {
        divCountry.classList.add("invisible");
    }

}

function validateForm() {

    var DoB = document.querySelector("#txtDoB");
    var divDoBError = document.querySelector("#divDoBError")
    var formIsValid = true;

    if (DoB.value == "") {
        divDoBError.classList.remove("invisible");
        divDoBError.innerHTML = "The Date of birth can not be empty."
        DoB.classList.add("hasError");
        formIsValid = false;


    }
    else {
        var DoBDate = new Date(DoB.value);
        var todayDate = new Date();
        if (DoBDate >= todayDate) {
            divDoBError.classList.remove("invisible");
            divDoBError.innerHTML = "Date of birth must be before today's date."
            DoB.classList.add("hasError");
            formIsValid = false;

        }
        else {
            divDoBError.classList.remove("invisible");
            divDoBError.innerHTML = ""
            DoB.classList.add("hasError");
        }

    }

    //check 2
    var ddCountry = document.querySelector("#ddCountry");
    if (ddCountry.value == "Yes") {
        var txtCountry = document.querySelector("$Country");
        if (txtCountry.value == "") {
            document.querySelector("$divCountryError").classList.remove("invisible");
            txtCountry.classList.add("hasError");
            formIsValid = false;
        }
        else {
            document.querySelector("#divCountryError").classList.add("inivisble");
            txtCountry.classList.remove("hasError");
        }

    }

    var elements = document.getElementsByTagName("input");
    var invalidChars = ['#', '!', '~'];
    for (let i = 0; i < elements.length; i++) {
        for (let j = 0; j < invalidChars.length; j++) {
            if (elements[i].value.indexOf(invalidCHars[j]) != -1) {
                elements[i].classList.add("hasError");
                formIsValid = false;
            }
        }
    }







    return formIsValid;

}