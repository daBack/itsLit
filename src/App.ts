import { LitElement, html, css, TemplateResult } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('db-app')
export class App extends LitElement {
  @property({ type: String }) title = 'My app';

  static styles = css`
    :host {
      display: flex;
    }
  `;

  render(): TemplateResult {
    return html`
      <main>
        <p>Lit template</p>
      </main>
    `;
  }
}
