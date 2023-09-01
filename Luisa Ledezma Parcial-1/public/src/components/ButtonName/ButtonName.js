class ButtonName extends HTMLElement {

    static get observedAttributes(){
        return["name", "alternate_names"]
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.onButtonClicked = this.onButtonClicked.bind(this)

    }

    connectedCallback(){
        this.mount();
    }

    attributeChangedCallback(propName, oldValue,newValue){
        this[propName] = newValue
        this.mount();
    }

    mount(){
        this.render();
        this.addListeners();
    }

    addListeners(){
        const btn = this.shadowRoot.querySelector("button")
        btn.addEventListener("click",this.onButtonClicked)
    }

    onButtonClicked(){
        const currevalue = this.getAttribute("name") 
        currevalue === "name" ? this.setAttribute("name","alternate_names") :
        this.setAttribute("alternate_names","name")
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/ButtonName/ButtonName.js">
        <div class="button">
            <button>${this.name}</button>
        </div>
        `
    }
}

customElements.define("button-name",ButtonName)
export default ButtonName