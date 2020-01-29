class Model{
    constructor(continentElement, countriesElement, buttonElement){
        this.continentElement = continentElement;
        this.countriesElement = countriesElement;
        this.buttonElement = buttonElement;
        this.selectedContinent = null;
        this.selectedCountry = null;
        continentElement.addEventListener("click", this.ContinentsClick);
        countriesElement.addEventListener("click", this.CountriesClick);
        buttonElement.addEventListener("click", this.ButtonClick);
    }

    showThis = () => {
        console.log(this);
    }

    ContinentsClick = (e) => {
        console.log(e.target);
        console.log(e.currentTarget);
        console.log(e);
        for (const iterator of e.currentTarget.children) {
            iterator.classList.remove("selected");
        }
        e.target.classList.add("selected");
        this.selectedContinent = e.target;
    }
    CountriesClick = (e) => {
        console.log(e.target);
        console.log(e.currentTarget);
        console.log(e);
        for (const iterator of e.currentTarget.children) {
            iterator.classList.remove("selected");
        }        
        e.target.classList.add("selected");
        this.selectedCountry = e.target;
    }
    ButtonClick = (e) => {
        e.target.classList.remove("disabled"); 
        console.log(e.target);
        let country = this.selectedCountry;
        let continent = this.selectedContinent;
        document.querySelector("#output > p").innerHTML = "Země " + country.innerText + " přidána do kontinentu " + continent.firstChild.wholeText;
        continent.children[0].innerHTML += "<li>" + country.innerText + "</li>";
    }
}


const init = function(){
    let allCountries = document.querySelectorAll("#countries > ul")[0];
    let allContinents = document.querySelectorAll("#continents > ul")[0];
    let button = document.querySelector("#addCountry");
    let params = [
        allContinents,
        allCountries,
        button 
    ];
    var model = new Model(...params);
    //var model = new Model(allContinents,allCountries);
    model.showThis();
}

document.addEventListener("DOMContentLoaded", init);