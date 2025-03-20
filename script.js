function submitApplication() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;
    
    if (name === "" || email === "") {
        alert("Please fill in all fields.");
        return;
    }
    
    let applicationList = document.getElementById("applications-list");
    let listItem = document.createElement("li");
    listItem.textContent = `${name} -${dob} - ${phone no} - ${address} - ${email} -${mark} - ${course}`;
    
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function() {
        applicationList.removeChild(listItem);
    };
    
    listItem.appendChild(removeButton);
    applicationList.appendChild(listItem);
    
    document.getElementById("admission-form").reset();
}
