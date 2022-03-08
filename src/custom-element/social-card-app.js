import ReactDOM from "react-dom"
import React from "react"
import App from '../App'

class SocialCardApp extends HTMLElement {
    connectedCallback() {
        this.mountPoint = document.createElement('span')
        this.render()
    }

    render() {
        ReactDOM.render(<React.StrictMode>
                    <App/>
            </React.StrictMode>,
            this.appendChild(this.mountPoint))
    }
}

customElements.get('react-social-card') || customElements.define("react-social-card", SocialCardApp)
