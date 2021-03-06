import { css } from "styled-components";

/**
 * Defined css stuff used by styled components.
 */
export default class Styles {
  public static resetCss = css`html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;color:#222;box-sizing:border-box;-webkit-tap-highlight-color:transparent;font-family:-apple-system, BlinkMacSystemFont, "游ゴシック体", YuGothic, "Yu Gothic M", "游ゴシック Medium", "Yu Gothic Medium", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN W3", HiraKakuProN-W3, "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", "メイリオ", Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", "Helvetica Neue", HelveticaNeue, Helvetica, Arial, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"}a,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}a{text-decoration:none;box-shadow:none}img{vertical-align:bottom;width:100%}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}a,area,button,[role="button"],input:not([type="range"]),label,select,summary,textarea{-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer}main,section,aside{display:block}`;
  public static transition = css`
    transition: ease .3s;
  `;
  public static mb = css`
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
  `;
}
