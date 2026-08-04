let form = document.getElementById("feedbackForm");

window.onload = function () {
    displayData();
};

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let course = document.getElementById("course").value;
    let feedback = document.getElementById("feedback").value.trim();

    if(name=="" || email=="" || course=="" || feedback=="")
    {
        alert("Please fill all fields");
        return;
    }

    let student = {

        name:name,
        email:email,
        course:course,
        feedback:feedback

    };

    localStorage.setItem("studentFeedback", JSON.stringify(student));

    displayData();

    form.reset();

});

function displayData(){

    let data = localStorage.getItem("studentFeedback");

    let output = document.getElementById("output");

    if(data){

        let student = JSON.parse(data);

        output.innerHTML = `
            <b>Name:</b> ${student.name}<br>
            <b>Email:</b> ${student.email}<br>
            <b>Course:</b> ${student.course}<br>
            <b>Feedback:</b> ${student.feedback}
        `;

    }
    else{

        output.innerHTML="No Feedback Stored";

    }

}

function deleteData(){

    localStorage.removeItem("studentFeedback");

    displayData();

}