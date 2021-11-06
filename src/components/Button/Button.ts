import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';

export class Button extends LitElement {
  @property({ type: String }) label = '';

  static styles = css`
    :host {
      display: flex;
    }
    button {
      height: 24px;
    }
  `;

  render(): TemplateResult {
    return html`<button>${this.label}</button>`;
  }
}

customElements.define('custom-button', Button);
