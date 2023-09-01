class CharacterCard extends HTMLElement {

    static get observedAttributes(){
        return["species","gender","house","yearofbirth"]
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName, oldValue,newValue){
        this[propName] = newValue
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/CharacterCard/Card.css">
        <card>
            <p>${this.species}</p>
            <p>${this.gender}</p>
            <p>${this.house}</p>
            <p>${this.yearofbirth}</p>
         </card>
        `
    }
}

customElements.define("character-card",CharacterCard)
export default CharacterCard