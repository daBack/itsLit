import { LitElement, html, css, TemplateResult } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import InputTypeEnum from './enums/InputTypeEnum.js';

@customElement('custom-input')
export class Input extends LitElement {
  @property({ type: String }) label = '';

  @property({ type: String }) name = '';

  @property({ type: InputTypeEnum }) type = InputTypeEnum.input;

  @property({ type: String }) value = '';

  static styles = css`
    :host {
      display: flex;
    }
    textarea {
      font-family: 'Open Sans', sans-serif;
      font-size: 1.1em;
      width: 100%;
      height: 100px;
      padding: 0.5em;
      border: none;
      outline: none;
      margin: 0.5em 0;
      resize: none;
      background-color: #f4f4f4;
    }
    input {
      width: 100%;
      font-family: 'Open Sans', sans-serif;
      font-size: 1.1em;
      border: none;
      background-color: transparent;
      border-bottom: 1px solid #d3d3d3;
      color: #353535;
      outline: none;
    }
  `;

  render() {
    return html`${this.getInputType()}`;
  }

  private onInput(event: InputEvent): void {
    this.dispatchEvent(
      new CustomEvent('input', {
        detail: {
          name: this.name,
          value: (<HTMLInputElement>event.target).value,
        },
      })
    );
  }

  /**
   *
   * @returns
   */
  private getInputType(): TemplateResult {
    if (this.type === InputTypeEnum.input) {
      return html`<input
        name="${this.name}"
        .value="${this.value}"
        @input="${(event: InputEvent) => this.onInput(event)}"
        placeholder="${this.label}"
      />`;
    }
    if (this.type === InputTypeEnum.textbox) {
      return html`<textarea
        name="${this.name}"
        .value="${this.value}"
        @input="${(event: InputEvent) => this.onInput(event)}"
        placeholder="${this.label}"
      ></textarea>`;
    }
    return html`<p>No valid type for input entered</p>`;
  }
}
