import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('db-app')
export class App extends LitElement {
  @property({ type: String }) title = 'My app';

  static styles = css`
    :host {
      display: flex;
    }
  `;

  render() {
    return html`
      <main>
        <p>Lit template</p>
      </main>
    `;
  }
}
