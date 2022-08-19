/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.svg' {
    const content: React.FC<React.SVGProps<SVGSVGElement>>;
    export default content;
  }