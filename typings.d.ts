declare module '*.css';
declare module '*.less';
declare module '*.png';
// 声明当前的环境
declare const CurrentEnvironment: 'dev' | 'test' | 'prd';
declare const REACT_APP_ENV: string;
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement;
  const url: string;
  export default url;
}
