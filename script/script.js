/**
 * 
 */

const selectKinderen = document.querySelector("#kinderen")
const ulgeschenken = document.querySelector("#geschenkenlijst")
const selectGeschenken = document.querySelector("#geschenken")

fetch("https://o-apiandclient-render.onrender.com/kinderen")
.then(info => info.json())
.then(kinderen => {
    kinderen.forEach(kind => {  // alle kinderen toevoegen in de lijst
        const newoption = document.createElement("option")
        newoption.innerHTML = kind.voornaam
        selectKinderen.appendChild(newoption)
    });
})

fetch("https://o-apiandclient-render.onrender.com/geschenken")
.then(info => info.json())
.then(geschenken => {
    geschenken.forEach(geschenk => {  // geschenken in de mogelijke geschenkenlijst steken
        const newLi = document.querySelector("li")
        newLi.innerHTML = geschenk.naam
        ulgeschenken.appendChild(newLi)

        const newoption = document.querySelector("li")
        newoption.innerHTML = geschenk.naam
        selectGeschenken.appendChild(newoption)
    })

})


