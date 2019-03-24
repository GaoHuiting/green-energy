//create resources
const resources = [
    {
        heading: "Reduce air pollution",
        path: "./images/street.jpg",
        body: "Bring reusable cloth bags shopping rather than accepting plastic ones at the store. Buy a metal or glass reusable water bottle rather than buying bottled water. Opt for the can of Coke over the plastic bottle. Refuse plastic eating utensils and carry your own reusable set. (bamboo is a great option as it is so lightweight). Rather than using plastic bags for lunch or snacks; opt for reusable or bee’s wax snack bags. You can also reuse any resealable bags or tubs that were part of the packaging from a previous item you bought. (Ex. resealable bags of trail mix or tubs of hummus)"
    },
    {
        heading: "Cut global warming emissions",
        path: "./images/bear.jpg",
        body: "Adding insulation to your walls and installing weather stripping or caulking around doors and windows can lower your heating costs more than 25 percent, by reducing the amount of energy you need to heat and cool your home. Turn down the heat while you’re sleeping at night or away during the day, and keep temperatures moderate at all times. Install a programmable thermostat because setting it just 2 degrees lower in winter and higher in summer could save about 2,000 pounds of carbon dioxide each year. Secondly, drive less and drive smart. less driving means fewer emissions. Besides saving gasoline, walking and biking are great forms of exercise. Explore the York Region Transit system and check out options for carpooling to work or school. When you do drive, make sure your car is running efficiently."
    },
    {
        heading: "Diversify our power supply",
        path: "./images/solar-panel.jpg",
        body: "Having a diverse energy mix is usually considered an important part of energy security, having multiple sources allows a country to continue without disruption if one source of energy fails. There are exceptions to this case. Nations that supply themselves with all of the energy they consume can worry less about the security of their energy supply. A country that imports a large amount of energy has to take into account all the factors that can disrupt the supply of energy coming from the exporting country."
    }
];

/* GETTING REFERENCES TO ACTIVE ELEMENTS */
const btns = document.querySelectorAll("button");
const currentContent = document.querySelector(".current-content");

currentContent.innerHTML = `<article>
                            <h2>${resources[0].heading}</h2>
                            <img src="${resources[0].path}">
                            <p>${resources[0].body}</p>
                            </article>`;

/*CREATING EVENT-HANDLER*/
function contentLoader(ev) {
    console.log(ev.target.textContent);
    /*console.log("content loader works");*/
    
    let eventTarget = ev.target.textContent;
    // console.log(eventTarget);

    if (eventTarget === "button 1") {
        currentContent.innerHTML = `<article>
                                    <h2>${resources[0].heading}</h2>
                                    <img src="${resources[0].path}">
                                    <p>${resources[0].body}</p>
                                    </article>`;
    } else if (eventTarget === "button 2") {
        currentContent.innerHTML = `<article>
                                    <h2>${resources[1].heading}</h2>
                                    <img src="${resources[1].path}">
                                    <p>${resources[1].body}</p>
                                    </article`;
    } else {
        currentContent.innerHTML = `<article>
                                    <h2>${resources[2].heading}</h2>
                                    <img src="${resources[2].path}">
                                    <p>${resources[2].body}</p>
                                    </article>`;
    }

    //move id to the current button
    //ev.target.id = "active";
    for (let btn of btns) {
        if (btn.id) {
            btn.removeAttribute("id");
        }
    }

    ev.target.id = "active";
}

/* REGISTERING EVENT CONTENT */
btns[1].addEventListener("click", contentLoader);
btns[2].addEventListener("click", contentLoader);
btns[3].addEventListener("click", contentLoader);
