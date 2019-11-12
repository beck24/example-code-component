/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface ExampleCode {}
  interface PrettyCode {
    /**
    * The language to format: html | js | css
    */
    'language': string;
  }
}

declare global {


  interface HTMLExampleCodeElement extends Components.ExampleCode, HTMLStencilElement {}
  var HTMLExampleCodeElement: {
    prototype: HTMLExampleCodeElement;
    new (): HTMLExampleCodeElement;
  };

  interface HTMLPrettyCodeElement extends Components.PrettyCode, HTMLStencilElement {}
  var HTMLPrettyCodeElement: {
    prototype: HTMLPrettyCodeElement;
    new (): HTMLPrettyCodeElement;
  };
  interface HTMLElementTagNameMap {
    'example-code': HTMLExampleCodeElement;
    'pretty-code': HTMLPrettyCodeElement;
  }
}

declare namespace LocalJSX {
  interface ExampleCode {}
  interface PrettyCode {
    /**
    * The language to format: html | js | css
    */
    'language'?: string;
  }

  interface IntrinsicElements {
    'example-code': ExampleCode;
    'pretty-code': PrettyCode;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'example-code': LocalJSX.ExampleCode & JSXBase.HTMLAttributes<HTMLExampleCodeElement>;
      'pretty-code': LocalJSX.PrettyCode & JSXBase.HTMLAttributes<HTMLPrettyCodeElement>;
    }
  }
}

