!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i,a,c,u=r("6JpON"),l={position:"center-bottom",distans:"15px",cssAnimationStile:"from-right"};function s(e,n){return new Promise((function(t,o){var r=Math.random()>.3;setTimeout((function(){r?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault(),i=Number(n.currentTarget.elements.delay.value),c=Number(n.currentTarget.elements.step.value),a=Number(n.currentTarget.elements.amount.value);for(var t=1;t<=a;t+=1)s(t,i).then((function(n){var t=n.position,o=n.delay;e(u).Notify.success("".concat(t," - ").concat(o),l),console.log("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(u).Notify.warning("".concat(t," - ").concat(o),l),console.log("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})),i+=c;n.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.332c96d8.js.map
