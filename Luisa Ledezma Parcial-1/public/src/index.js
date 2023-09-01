import * as components from "./components/index.js"
import data from "./data.js"

class CardContainer extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        data.forEach((profile)=> {
            this.shadowRoot.innerHTML += `
            <link rel="stylesheet" href="./src/index.css">
            <div class="character">
                <character-card species="${profile.species}" gender="${profile.gender}" house="${profile.house}" yearofbirth="${profile.yearOfBirth}"></character-card>
                <button-name name="${profile.name}"></button-name>
            </div>
            `
        })
    }
}

customElements.define("card-container",CardContainer)