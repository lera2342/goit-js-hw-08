function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return c.Date.now()};function g(e,t,n){var i,o,r,a,u,f,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,r=o;return i=o=void 0,l=t,a=e.apply(r,n)}function h(e){return l=e,u=setTimeout(O,t),c?y(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=r}function O(){var e=m();if(j(e))return T(e);u=setTimeout(O,function(e){var n=t-(e-f);return s?v(n,r-(e-l)):n}(e))}function T(e){return u=void 0,g&&i?y(e):(i=o=void 0,a)}function w(){var e=m(),n=j(e);if(i=arguments,o=this,f=e,n){if(void 0===u)return h(f);if(s)return u=setTimeout(O,t),y(f)}return void 0===u&&(u=setTimeout(O,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=f=o=u=void 0},w.flush=function(){return void 0===u?a:T(m())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:i,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form"),{email:h,message:j}=y.elements;y.addEventListener("onput",e(t)((function(){const e={email:h.value,message:j.value};localStorage.setItem("feedback-from-state",JSON.stringify(e))}),500));const O=localStorage.getItem("feedback-form-state");O?(h.value=JSON.parse(O).email,j.value=JSON.parse(O).message):(h.value="",j.value=""),y.addEventListener("submit",(function(e){if(e.preventDefault(),(h.value.length&&j.value.length)<1)alert("All fields must be filled");else{const t={email:h.value,message:j.value};console.log(t),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}}));
//# sourceMappingURL=03-feedback.f3826ae6.js.map