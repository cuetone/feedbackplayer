import { LitElement, html, css } from 'lit-element';

class HomeView extends LitElement {
  static get styles() {
    return css `
      h1{color:yellow}
      h1{text-decoration:underline}
    `;
    
  }

  render() {
    return html`
      <h1>Hola Mundo</h1>
    `;
  }
}

window.customElements.define('home-view', HomeView);
