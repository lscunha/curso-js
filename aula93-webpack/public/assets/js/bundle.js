(()=>{"use strict";class t{constructor(t,n){this.firstName=t,this.lastName=n}fetchData(){return new Promise((t=>setTimeout((()=>t(this)),2e3)))}}function n(t,n,e,o,i,r,a){try{var s=t[r](a),c=s.value}catch(t){return void e(t)}s.done?n(c):Promise.resolve(c).then(o,i)}function e(t){return function(){var e=this,o=arguments;return new Promise((function(i,r){var a=t.apply(e,o);function s(t){n(a,i,r,s,c,"next",t)}function c(t){n(a,i,r,s,c,"throw",t)}s(void 0)}))}}var o=new t("Luiz","Otávio");function i(){return(i=e((function*(){var n=yield new t("João","Miranda").fetchData();console.log(n.firstName,n.lastName)}))).apply(this,arguments)}o.fetchData().then((t=>console.log(o))),function(){i.apply(this,arguments)}()})();
//# sourceMappingURL=bundle.js.map