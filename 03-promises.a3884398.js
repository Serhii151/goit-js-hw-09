function e(e,t){return new Promise(((n,s)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:t}):s({position:e,delay:t})}),t)}))}const{Notify:t}=Notiflix;document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();const s=parseInt(this.elements.delay.value),i=parseInt(this.elements.step.value),o=parseInt(this.elements.amount.value);let l=s;for(let n=1;n<=o;n++)e(n,l).then((({position:e,delay:n})=>{t.success(`✅ Fulfilled promise ${e} in ${n}ms`)})).catch((({position:e,delay:n})=>{t.failure(`❌ Rejected promise ${e} in ${n}ms`)})),l+=i}));
//# sourceMappingURL=03-promises.a3884398.js.map