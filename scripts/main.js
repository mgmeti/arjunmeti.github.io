const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/head-meter.jpg") {
        myImage.setAttribute("src", "images/head-meter-2.jpg");
    } else {
        myImage.setAttribute("src", "images/head-meter.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");

    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Head Meter Magic, ${myName}`;
    }
}

myButton.onclick = () => {
    setUserName();
};

if (!localStorage.getItem("name")) {
    setUserName();
}
else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Head Meter Magic, ${storedName}`;
}





