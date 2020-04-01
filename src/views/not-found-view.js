import { LitElement, html, css } from 'lit-element';

class NotFoundView extends LitElement {
  static get styles() {
    return [];
  }

  render() {
    return html`
      <h1>Not Found</h1>
    `;
  }

}

window.customElements.define('not-found-view', NotFoundView);
