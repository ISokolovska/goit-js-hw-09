!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("iU1Pc");document.querySelector(".form").addEventListener("submit",(function(t){var n=function(t){(function(e,t){var n=Math.random()>.3;return new Promise((function(e,o){setTimeout((function(){n?e(t):o(t)}),t)}))})(0,a).then((function(n){e(i).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(n){e(i).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))})),a+=+r};t.preventDefault();for(var o=t.target.delay.value,r=t.target.step.value,u=t.target.amount.value,a=+o,c=1;c<=Number(u);c++)n(c)})),fetch("google.com").data}();
//# sourceMappingURL=03-promises.f947cf9a.js.map
