const entries = document.getElementsByClassName("entry");
const filters = document.getElementsByClassName("filter");

// console.log(entries);
// console.log(entries.length);

function handleClick(ev) {
    // console.log(ev.target.classList);
    let isToggled = false;


    //toggles class
    for (let i = 0; i < ev.target.classList.length; i++) {
        // console.log(ev.target.classList[i]);
        if (ev.target.classList[i] == "toggled") { 
            isToggled = true;
            ev.target.classList.remove("toggled");
        };
    }
    if (!isToggled) {
        ev.target.classList.add("toggled");
    }

    //remove hidden/show
    let hidden = document.getElementsByClassName("hide");
    while (hidden.length != 0) {
        hidden[hidden.length-1].classList.remove("hide");
    }
    
    let show = document.getElementsByClassName("show");
    while (show.length != 0) {
        show[show.length-1].classList.remove("show");
    }


    let noFilters = true;
    for (let i = 0; i < filters.length; i++) {
        for (let j = 0; j < filters[i].classList.length; j++) {
            if (filters[i].classList[j] == "toggled") {
                noFilters = false;
                let tag = filters[i].textContent.toLowerCase();
                // console.log (`tag is: ${tag}`);
                for (let k = 0; k < entries.length; k++) {
                    for (let l = 0; l < entries[k].classList.length; l++) {
                        if (entries[k].classList[l] == tag) {
                            entries[k].classList.add("show");
                            // console.log(`add show to:`);
                            // console.log(entries[k]);
                        }
                    }
                }
            }
        }
    }

    if (noFilters) {
        for (let i = 0; i < entries.length; i++) {
            entries[i].classList.add("show");
        }
    }

    for (let i = 0; i < entries.length; i++) {
        let hasShow = false;
        for (j = 0; j < entries[i].classList.length; j++) {
            if (entries[i].classList[j] == "show") {
                hasShow = true;
            }
        }
        if (!hasShow) {
            entries[i].classList.add("hide");
        }
    }


}
