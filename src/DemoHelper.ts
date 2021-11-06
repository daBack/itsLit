import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import './components/FeatureContainer.js';

export class DemoHelper extends LitElement {
  @property({ type: String }) title = 'My app';

  static styles = css`
    :host {
      min-height: 100vh;
      width: 100vw;
      display: flex;
      flex-direction: row;
      color: #1a2b42;
    }
    .divider {
      display: flex;
      width: 2px;
      background-color: red;
      height: 100%;
    }
    main {
      display: flex;
      width: 100%;
      padding: 2rem;
    }
    .container {
      flex: 1;
      overflow-y: auto;
      display: flex;
    }
  `;

  render() {
    return html`
      <main>
        <div class="container">
          <feature-container></feature-container>
        </div>
        <div class="divider"></div>
        <div class="container"></div>
      </main>
    `;
  }
}

customElements.define('demo-helper', DemoHelper);
