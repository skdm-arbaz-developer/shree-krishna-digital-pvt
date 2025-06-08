declare module 'react-meta-tags' {
    import * as React from 'react';
  
    export interface MetaTagProps {
      children?: React.ReactNode;
    }
  
    export default class MetaTags extends React.Component<MetaTagProps> {}
  }
  