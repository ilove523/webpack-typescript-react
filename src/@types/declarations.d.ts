/*
 * @author: ilove523 <wush3w@126.com>
 * @Date: 2020-12-21 08:57:55
 * @LastEditTime: 2020-12-23 18:03:43
 * @LastEditors: ilove523
 * @description: ''
 */
declare module '*.png' {
  const content: string;
  export = content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

// declare module '*.css' {
//   const content: { [className: string]: string };
//   export = content;
// }

declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

declare module '*.less' {
  const content: { [className: string]: string };
  export = content;
}

declare module '*.svg' {
  import React from 'react';

  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare namespace TodoModel {
  enum Filter {
    SHOW_ALL = 'all',
    SHOW_ACTIVE = 'active',
    SHOW_COMPLETED = 'completed'
  }
}

declare const IS_PROD: boolean;
declare const IS_DEV: boolean;
declare const IS_DEV_SERVER: boolean;
