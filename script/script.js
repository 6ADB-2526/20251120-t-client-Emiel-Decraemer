/**
 * 
 */

const selectKinderen = document.querySelector("#kinderen")


fetch("https://o-apiandclient-render.onrender.com/kinderen")
.then(info => info.json())
.then(kinderen => {
    kinderen.forEach(kind => {
        const newoption = document.createElement("option")
        newoption.innerHTML = kind.voornaam
        selectKinderen.appendChild(newoption)
    });
})
