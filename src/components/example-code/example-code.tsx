import { Component, h, State, Element } from '@stencil/core';

@Component({
  tag: 'example-code',
  styleUrl: 'example-code.css',
  shadow: true
})
export class ExampleCode {
  @Element() el: HTMLElement;
  @State() activeTab: string = 'html';
  @State() htmlCode: string = '';

  componentDidRender() {
    const jsSlot: any = this.el.shadowRoot.querySelector('.tab-js slot');
    const cssSlot: any = this.el.shadowRoot.querySelector('.tab-css slot');

    if (!jsSlot.assignedNodes().length) {
      this.el.shadowRoot.querySelector('button.js').remove();
    }

    if (!cssSlot.assignedNodes().length) {
      this.el.shadowRoot.querySelector('button.css').remove();
    }
  }

  getClass() {
    let classObj = {
      'example-code-component': true
    };

    classObj[this.activeTab] = true;

    return classObj;
  }

  render() {
    return (
      <div class={this.getClass()}>
        <div class="example">
          <slot name="example" />
        </div>
        <div class="tabs">
          <button class="html" onClick={() => this.activeTab = 'html'}>HTML</button>
          <button class="js" onClick={() => this.activeTab = 'js'}>JS</button>
          <button class="css" onClick={() => this.activeTab = 'css'}>CSS</button>
        </div>
        <div class="tab tab-html">
          <div class="slot-container">
            <pre>
            <slot name="html" />
            </pre>
          </div>

          <div class="html-output">{this.htmlCode}</div>
        </div>
        <div class="tab tab-js">
          <slot name="javascript" />
        </div>
        <div class="tab tab-css">
          <slot name="css" />
        </div>
      </div>
    );
  }
}
