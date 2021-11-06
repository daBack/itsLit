import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import './Input/Input.js';
import './Button/Button.js';

export class FeatureContainer extends LitElement {
  @property({ type: String }) title = 'My app';

  state = {
    feature: {
      task: '',
      requestedBy: '',
      businessValue: '',
      solution: '',
      linkTitle: '',
      link: '',
    },
  };

  static styles = css`
    :host {
      display: flex;
      width: 100%;
    }
    .container {
      display: flex;
      width: 70%;
      flex-direction: column;
    }
    custom-input {
      margin: 0.4em 0;
    }
  `;

  private onInput(event: CustomEvent): void {
    this.state = {
      ...this.state,
      feature: {
        ...this.state.feature,
        [event.detail.name]: event.detail.value,
      },
    };
    this.requestUpdate();
  }

  render() {
    return html` <div class="container">
      <h2>Features</h2>
      <custom-input
        @input="${(event: CustomEvent) => this.onInput(event)}"
        label="Task"
        name="task"
      ></custom-input>
      <custom-input
        @input="${(event: CustomEvent) => this.onInput(event)}"
        label="Requested by"
        name="requestedBy"
      ></custom-input>
      <custom-input
        @input="${(event: CustomEvent) => this.onInput(event)}"
        type="textbox"
        label="Business value"
        name="businessValue"
      ></custom-input>
      <custom-input
        @input="${(event: CustomEvent) => this.onInput(event)}"
        type="textbox"
        label="Solution"
        name="solution"
      ></custom-input>
      <custom-input
        @input="${(event: CustomEvent) => this.onInput(event)}"
        label="Link title"
        name="linkTitle"
      ></custom-input>
      <custom-input
        @input="${(event: CustomEvent) => this.onInput(event)}"
        label="Link"
        name="link"
      ></custom-input>
      <p>Task: ${this.state.feature.task}</p>
      <custom-button label="Add"></custom-button>
    </div>`;
  }
}

customElements.define('feature-container', FeatureContainer);
