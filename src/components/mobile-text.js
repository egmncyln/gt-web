import { LitElement, html } from 'lit';

class MobileText extends LitElement {
  render() {
    return html`<p><slot><slot></p>`;
  }
}

customElements.define('mobile-text', MobileText);
