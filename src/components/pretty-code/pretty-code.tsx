import { Component, h, Host, Element, Prop } from '@stencil/core';
import loadPrism from './Prism';

declare var window: any;

@Component({
  tag: 'pretty-code',
  styleUrl: 'pretty-code.css'
})
export class PrettyCode {
  @Element() el: HTMLElement;

  /**
   * The language to format: html | js | css
   */
  @Prop() language: string = '';

  componentDidRender() {
    if (!window.Prism) {
      loadPrism();
    }
  }

  getClass() {
    let classObj = {
      'line-numbers': true,
      'match-braces': true
    };

    if (this.language) {
      classObj[`language-${this.language}`] = true;
    }

    return classObj;
  }

  render() {
    return(
      <Host>
        <div class="display">
            <script type="text/plain" class={this.getClass()}>
              <slot />
            </script>
        </div>
      </Host>
    );
  }
}
