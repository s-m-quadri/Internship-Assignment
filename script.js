function build_form(){
    let name = document.getElementById("in-name").value;
    let age = document.getElementById("in-age").value;
    let gender = document.getElementById("in-gender").value;
    let note = document.getElementById("in-note").value;
    let med = document.getElementById("in-med").value;

    const date = new Date();
    document.getElementById("date").innerHTML = date.getDate() + " / " + date.getMonth() + " / " + date.getFullYear();
    document.getElementById("name").innerHTML = name;
    document.getElementById("age").innerHTML = age;
    document.getElementById("gender").innerHTML = gender;
    document.getElementById("note").innerHTML = note;
    document.getElementById("med").innerHTML = med;

    document.getElementById("page").innerHTML = document.getElementById("guiform").innerHTML;
}