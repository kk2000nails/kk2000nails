(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=Array.isArray,t=Array.prototype.indexOf,n=Array.from;Object.keys;var r=Object.defineProperty,i=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyDescriptors,o=Object.prototype,s=Array.prototype,c=Object.getPrototypeOf,l=Object.isExtensible;function u(e){return typeof e==`function`}const d=()=>{};function f(e){return e()}function p(e){for(var t=0;t<e.length;t++)e[t]()}function m(){var e,t;return{promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}}function h(e,t){if(Array.isArray(e))return e;if(t===void 0||!(Symbol.iterator in e))return Array.from(e);let n=[];for(let r of e)if(n.push(r),n.length===t)break;return n}const g=1024,_=2048,v=4096,y=8192,b=65536,x=1<<19,S=1<<20,C=1<<21,ee=1<<23,te=Symbol(`$state`),ne=Symbol(`legacy props`),re=Symbol(``),w=new class extends Error{name=`StaleReactionError`;message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function ie(e){throw Error(`https://svelte.dev/e/lifecycle_outside_component`)}function ae(){throw Error(`https://svelte.dev/e/async_derived_orphan`)}function oe(e){throw Error(`https://svelte.dev/e/effect_in_teardown`)}function se(){throw Error(`https://svelte.dev/e/effect_in_unowned_derived`)}function ce(e){throw Error(`https://svelte.dev/e/effect_orphan`)}function le(){throw Error(`https://svelte.dev/e/effect_update_depth_exceeded`)}function ue(e){throw Error(`https://svelte.dev/e/lifecycle_legacy_only`)}function de(e){throw Error(`https://svelte.dev/e/props_invalid_value`)}function fe(){throw Error(`https://svelte.dev/e/state_descriptors_fixed`)}function pe(){throw Error(`https://svelte.dev/e/state_prototype_fixed`)}function me(){throw Error(`https://svelte.dev/e/state_unsafe_mutation`)}function he(){throw Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`)}const ge={},_e=Symbol();function ve(e){console.warn(`https://svelte.dev/e/hydration_mismatch`)}function ye(){console.warn(`https://svelte.dev/e/select_multiple_invalid_value`)}function be(){console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`)}let T=!1;function xe(e){T=e}let E;function Se(e){if(e===null)throw ve(),ge;return E=e}function Ce(){return Se(Rt(E))}function D(e){if(T){if(Rt(E)!==null)throw ve(),ge;E=e}}function we(e=1){if(T){for(var t=e,n=E;t--;)n=Rt(n);E=n}}function Te(e=!0){for(var t=0,n=E;;){if(n.nodeType===8){var r=n.data;if(r===`]`){if(t===0)return n;--t}else (r===`[`||r===`[!`)&&(t+=1)}var i=Rt(n);e&&n.remove(),n=i}}function Ee(e){if(!e||e.nodeType!==8)throw ve(),ge;return e.data}function De(e){return e===this.v}function Oe(e,t){return e==e?e!==t||typeof e==`object`&&!!e||typeof e==`function`:t==t}function ke(e){return!Oe(e,this.v)}let Ae=!1;function je(){Ae=!0}let O=null;function Me(e){O=e}function k(e,t=!1,n){O={p:O,c:null,e:null,s:e,x:null,l:Ae&&!t?{s:null,u:null,$:[]}:null}}function A(e){var t=O,n=t.e;if(n!==null){t.e=null;for(var r of n)$t(r)}return e!==void 0&&(t.x=e),O=t.p,e??{}}function Ne(){return!Ae||O!==null&&O.l===null}var Pe=[];function Fe(){var e=Pe;Pe=[],p(e)}function Ie(e){if(Pe.length===0&&!Ye){var t=Pe;queueMicrotask(()=>{t===Pe&&Fe()})}Pe.push(e)}function Le(){for(;Pe.length>0;)Fe()}var Re=new WeakMap;function ze(e){var t=R;if(t===null)return L.f|=ee,e;if(t.f&32768)Be(e,t);else{if(!(t.f&128))throw!t.parent&&e instanceof Error&&Ve(e),e;t.b.error(e)}}function Be(e,t){for(;t!==null;){if(t.f&128)try{t.b.error(e);return}catch(t){e=t}t=t.parent}throw e instanceof Error&&Ve(e),e}function Ve(e){let t=Re.get(e);t&&(r(e,`message`,{value:t.message}),r(e,`stack`,{value:t.stack}))}var He=new Set;let j=null,Ue=null,We=null,Ge=new Set;var Ke=[],qe=null,Je=!1;let Ye=!1;var Xe=class e{current=new Map;#previous=new Map;#callbacks=new Set;#pending=0;#deferred=null;#render_effects=[];#effects=[];#block_effects=[];#dirty_effects=[];#maybe_dirty_effects=[];skipped_effects=new Set;process(e){Ke=[],Ue=null,this.apply();for(let t of e)this.#traverse_effect_tree(t);if(this.#pending===0){var t=We;this.#commit();var n=this.#render_effects,r=this.#effects;this.#render_effects=[],this.#effects=[],this.#block_effects=[],Ue=this,j=null,We=t,tt(n),tt(r),Ue=null,this.#deferred?.resolve()}else this.#defer_effects(this.#render_effects),this.#defer_effects(this.#effects),this.#defer_effects(this.#block_effects);We=null}#traverse_effect_tree(e){e.f^=g;for(var t=e.first;t!==null;){var n=t.f,r=(n&96)!=0;if(!(r&&n&1024||n&8192||this.skipped_effects.has(t))&&t.fn!==null){r?t.f^=g:n&4?this.#effects.push(t):Vn(t)&&(t.f&16&&this.#block_effects.push(t),Kn(t));var i=t.first;if(i!==null){t=i;continue}}var a=t.parent;for(t=t.next;t===null&&a!==null;)t=a.next,a=a.parent}}#defer_effects(e){for(let t of e)(t.f&2048?this.#dirty_effects:this.#maybe_dirty_effects).push(t),Zn(t,g);e.length=0}capture(e,t){this.#previous.has(e)||this.#previous.set(e,t),this.current.set(e,e.v),We?.set(e,e.v)}activate(){j=this}deactivate(){j=null,We=null}flush(){if(Ke.length>0){if(this.activate(),Qe(),j!==null&&j!==this)return}else this.#pending===0&&this.#commit();this.deactivate();for(let e of Ge)if(Ge.delete(e),e(),j!==null)break}#commit(){for(let e of this.#callbacks)e();if(this.#callbacks.clear(),He.size>1){this.#previous.clear();let e=!0;for(let t of He){if(t===this){e=!1;continue}let n=[];for(let[r,i]of this.current){if(t.current.has(r))if(e&&i!==t.current.get(r))t.current.set(r,i);else continue;n.push(r)}if(n.length===0)continue;let r=[...t.current.keys()].filter(e=>!this.current.has(e));if(r.length>0){for(let e of n)nt(e,r);if(Ke.length>0){j=t,t.apply();for(let e of Ke)t.#traverse_effect_tree(e);Ke=[],t.deactivate()}}}j=null}He.delete(this)}increment(){this.#pending+=1}decrement(){--this.#pending;for(let e of this.#dirty_effects)Zn(e,_),it(e);for(let e of this.#maybe_dirty_effects)Zn(e,v),it(e);this.flush()}add_callback(e){this.#callbacks.add(e)}settled(){return(this.#deferred??=m()).promise}static ensure(){if(j===null){let t=j=new e;He.add(j),Ye||e.enqueue(()=>{j===t&&t.flush()})}return j}static enqueue(e){Ie(e)}apply(){}};function Ze(e){var t=Ye;Ye=!0;try{var n;for(e&&(j!==null&&Qe(),n=e());;){if(Le(),Ke.length===0&&(j?.flush(),Ke.length===0))return qe=null,n;Qe()}}finally{Ye=t}}function Qe(){var e=Sn;Je=!0;try{var t=0;for(Cn(!0);Ke.length>0;){var n=Xe.ensure();t++>1e3&&$e(),n.process(Ke),bt.clear()}}finally{Je=!1,Cn(e),qe=null}}function $e(){try{le()}catch(e){Be(e,qe)}}let et=null;function tt(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if(!(r.f&24576)&&Vn(r)&&(et=[],Kn(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null&&r.ac===null?hn(r):r.fn=null),et?.length>0)){bt.clear();for(let e of et)Kn(e);et=[]}}et=null}}function nt(e,t){if(e.reactions!==null)for(let n of e.reactions){let e=n.f;e&2?nt(n,t):e&4194320&&rt(n,t)&&(Zn(n,_),it(n))}}function rt(e,t){if(e.deps!==null){for(let n of e.deps)if(t.includes(n)||n.f&2&&rt(n,t))return!0}return!1}function it(e){for(var t=qe=e;t.parent!==null;){t=t.parent;var n=t.f;if(Je&&t===R&&n&16)return;if(n&96){if(!(n&1024))return;t.f^=g}}Ke.push(t)}function at(e){let t=0,n=xt(0),r;return()=>{Xt()&&(z(n),sn(()=>(t===0&&(r=Yn(()=>e(()=>Et(n)))),t+=1,()=>{Ie(()=>{--t,t===0&&(r?.(),r=void 0,Et(n))})})))}}var ot=x|65664;function st(e,t,n){new ct(e,t,n)}var ct=class{parent;#pending=!1;#anchor;#hydrate_open=T?E:null;#props;#children;#effect;#main_effect=null;#pending_effect=null;#failed_effect=null;#offscreen_fragment=null;#local_pending_count=0;#pending_count=0;#is_creating_fallback=!1;#effect_pending=null;#effect_pending_update=()=>{this.#effect_pending&&wt(this.#effect_pending,this.#local_pending_count)};#effect_pending_subscriber=at(()=>(this.#effect_pending=xt(this.#local_pending_count),()=>{this.#effect_pending=null}));constructor(e,t,n){this.#anchor=e,this.#props=t,this.#children=n,this.parent=R.b,this.#pending=!!this.#props.pending,this.#effect=cn(()=>{if(R.b=this,T){let e=this.#hydrate_open;Ce(),e.nodeType===8&&e.data===`[!`?this.#hydrate_pending_content():this.#hydrate_resolved_content()}else{try{this.#main_effect=ln(()=>n(this.#anchor))}catch(e){this.error(e)}this.#pending_count>0?this.#show_pending_snippet():this.#pending=!1}},ot),T&&(this.#anchor=E)}#hydrate_resolved_content(){try{this.#main_effect=ln(()=>this.#children(this.#anchor))}catch(e){this.error(e)}this.#pending=!1}#hydrate_pending_content(){let e=this.#props.pending;e&&(this.#pending_effect=ln(()=>e(this.#anchor)),Xe.enqueue(()=>{this.#main_effect=this.#run(()=>(Xe.ensure(),ln(()=>this.#children(this.#anchor)))),this.#pending_count>0?this.#show_pending_snippet():(gn(this.#pending_effect,()=>{this.#pending_effect=null}),this.#pending=!1)}))}is_pending(){return this.#pending||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#props.pending}#run(e){var t=R,n=L,r=O;On(this.#effect),Dn(this.#effect),Me(this.#effect.ctx);try{return e()}catch(e){return ze(e),null}finally{On(t),Dn(n),Me(r)}}#show_pending_snippet(){let e=this.#props.pending;this.#main_effect!==null&&(this.#offscreen_fragment=document.createDocumentFragment(),xn(this.#main_effect,this.#offscreen_fragment)),this.#pending_effect===null&&(this.#pending_effect=ln(()=>e(this.#anchor)))}#update_pending_count(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#update_pending_count(e);return}this.#pending_count+=e,this.#pending_count===0&&(this.#pending=!1,this.#pending_effect&&gn(this.#pending_effect,()=>{this.#pending_effect=null}),this.#offscreen_fragment&&=(this.#anchor.before(this.#offscreen_fragment),null),Ie(()=>{Xe.ensure().flush()}))}update_pending_count(e){this.#update_pending_count(e),this.#local_pending_count+=e,Ge.add(this.#effect_pending_update)}get_effect_pending(){return this.#effect_pending_subscriber(),z(this.#effect_pending)}error(e){var t=this.#props.onerror;let n=this.#props.failed;if(this.#is_creating_fallback||!t&&!n)throw e;this.#main_effect&&=(pn(this.#main_effect),null),this.#pending_effect&&=(pn(this.#pending_effect),null),this.#failed_effect&&=(pn(this.#failed_effect),null),T&&(Se(this.#hydrate_open),we(),Se(Te()));var r=!1,i=!1;let a=()=>{if(r){be();return}r=!0,i&&he(),Xe.ensure(),this.#local_pending_count=0,this.#failed_effect!==null&&gn(this.#failed_effect,()=>{this.#failed_effect=null}),this.#pending=this.has_pending_snippet(),this.#main_effect=this.#run(()=>(this.#is_creating_fallback=!1,ln(()=>this.#children(this.#anchor)))),this.#pending_count>0?this.#show_pending_snippet():this.#pending=!1};var o=L;try{Dn(null),i=!0,t?.(e,a),i=!1}catch(e){Be(e,this.#effect&&this.#effect.parent)}finally{Dn(o)}n&&Ie(()=>{this.#failed_effect=this.#run(()=>{this.#is_creating_fallback=!0;try{return ln(()=>{n(this.#anchor,()=>e,()=>a)})}catch(e){return Be(e,this.#effect.parent),null}finally{this.#is_creating_fallback=!1}})})}};function lt(e,t,n){let r=Ne()?ft:ht;if(t.length===0){n(e.map(r));return}var i=j,a=R,o=ut(),s=T;Promise.all(t.map(e=>pt(e))).then(t=>{o();try{n([...e.map(r),...t])}catch(e){a.f&16384||Be(e,a)}s&&xe(!1),i?.deactivate(),dt()}).catch(e=>{Be(e,a)})}function ut(){var e=R,t=L,n=O,r=j,i=T;if(i)var a=E;return function(){On(e),Dn(t),Me(n),r?.activate(),i&&(xe(!0),Se(a))}}function dt(){On(null),Dn(null),Me(null)}function ft(e){var t=2|_,n=L!==null&&L.f&2?L:null;return R===null||n!==null&&n.f&256?t|=256:R.f|=x,{ctx:O,deps:null,effects:null,equals:De,f:t,fn:e,reactions:null,rv:0,v:_e,wv:0,parent:n??R,ac:null}}function pt(e,t){let n=R;n===null&&ae();var r=n.b,i=void 0,a=xt(_e),o=!L,s=new Map;return on(()=>{var t=m();i=t.promise;try{Promise.resolve(e()).then(t.resolve,t.reject).then(dt)}catch(e){t.reject(e),dt()}var n=j,c=r.is_pending();o&&(r.update_pending_count(1),c||(n.increment(),s.get(n)?.reject(w),s.delete(n),s.set(n,t)));let l=(e,t=void 0)=>{if(c||n.activate(),t)t!==w&&(a.f|=ee,wt(a,t));else{a.f&8388608&&(a.f^=ee),wt(a,e);for(let[e,t]of s){if(s.delete(e),e===n)break;t.reject(w)}}o&&(r.update_pending_count(-1),c||n.decrement())};t.promise.then(l,e=>l(null,e||`unknown`))}),Zt(()=>{for(let e of s.values())e.reject(w)}),new Promise(e=>{function t(n){function r(){n===i?e(a):t(i)}n.then(r,r)}t(i)})}function mt(e){let t=ft(e);return An(t),t}function ht(e){let t=ft(e);return t.equals=ke,t}function gt(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)pn(t[n])}}function _t(e){for(var t=e.parent;t!==null;){if(!(t.f&2))return t;t=t.parent}return null}function vt(e){var t,n=R;On(_t(e));try{gt(e),t=Un(e)}finally{On(n)}return t}function yt(e){var t=vt(e);if(e.equals(t)||(e.v=t,e.wv=Bn()),!wn)if(We!==null)We.set(e,e.v);else{var n=(zn||e.f&256)&&e.deps!==null?v:g;Zn(e,n)}}const bt=new Map;function xt(e,t){return{f:0,v:e,reactions:null,equals:De,rv:0,wv:0}}function St(e,t){let n=xt(e,t);return An(n),n}function Ct(e,t=!1,n=!0){let r=xt(e);return t||(r.equals=ke),Ae&&n&&O!==null&&O.l!==null&&(O.l.s??=[]).push(r),r}function M(e,t,n=!1){L!==null&&(!En||L.f&131072)&&Ne()&&L.f&4325394&&!kn?.includes(e)&&me();let r=n?Ot(t):t;return wt(e,r)}function wt(e,t){if(!e.equals(t)){var n=e.v;wn?bt.set(e,t):bt.set(e,n),e.v=t,Xe.ensure().capture(e,n),e.f&2&&(e.f&2048&&vt(e),Zn(e,e.f&256?v:g)),e.wv=Bn(),Dt(e,_),Ne()&&R!==null&&R.f&1024&&!(R.f&96)&&(Nn===null?Pn([e]):Nn.push(e))}return t}function Tt(e,t=1){var n=z(e),r=t===1?n++:n--;return M(e,n),r}function Et(e){M(e,e.v+1)}function Dt(e,t){var n=e.reactions;if(n!==null)for(var r=Ne(),i=n.length,a=0;a<i;a++){var o=n[a],s=o.f;if(!(!r&&o===R)){var c=(s&_)===0;c&&Zn(o,t),s&2?Dt(o,v):c&&(s&16&&et!==null&&et.push(o),it(o))}}}function Ot(t){if(typeof t!=`object`||!t||te in t)return t;let n=c(t);if(n!==o&&n!==s)return t;var r=new Map,a=e(t),l=St(0),u=null,d=Ln,f=e=>{if(Ln===d)return e();var t=L,n=Ln;Dn(null),Rn(d);var r=e();return Dn(t),Rn(n),r};return a&&r.set(`length`,St(t.length,u)),new Proxy(t,{defineProperty(e,t,n){(!(`value`in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&fe();var i=r.get(t);return i===void 0?i=f(()=>{var e=St(n.value,u);return r.set(t,e),e}):M(i,n.value,!0),!0},deleteProperty(e,t){var n=r.get(t);if(n===void 0){if(t in e){let e=f(()=>St(_e,u));r.set(t,e),Et(l)}}else M(n,_e),Et(l);return!0},get(e,n,a){if(n===te)return t;var o=r.get(n),s=n in e;if(o===void 0&&(!s||i(e,n)?.writable)&&(o=f(()=>{var t=Ot(s?e[n]:_e);return St(t,u)}),r.set(n,o)),o!==void 0){var c=z(o);return c===_e?void 0:c}return Reflect.get(e,n,a)},getOwnPropertyDescriptor(e,t){var n=Reflect.getOwnPropertyDescriptor(e,t);if(n&&`value`in n){var i=r.get(t);i&&(n.value=z(i))}else if(n===void 0){var a=r.get(t),o=a?.v;if(a!==void 0&&o!==_e)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return n},has(e,t){if(t===te)return!0;var n=r.get(t),a=n!==void 0&&n.v!==_e||Reflect.has(e,t);return(n!==void 0||R!==null&&(!a||i(e,t)?.writable))&&(n===void 0&&(n=f(()=>{var n=a?Ot(e[t]):_e;return St(n,u)}),r.set(t,n)),z(n)===_e)?!1:a},set(e,t,n,o){var s=r.get(t),c=t in e;if(a&&t===`length`)for(var d=n;d<s.v;d+=1){var p=r.get(d+``);p===void 0?d in e&&(p=f(()=>St(_e,u)),r.set(d+``,p)):M(p,_e)}if(s===void 0)(!c||i(e,t)?.writable)&&(s=f(()=>St(void 0,u)),M(s,Ot(n)),r.set(t,s));else{c=s.v!==_e;var m=f(()=>Ot(n));M(s,m)}var h=Reflect.getOwnPropertyDescriptor(e,t);if(h?.set&&h.set.call(o,n),!c){if(a&&typeof t==`string`){var g=r.get(`length`),_=Number(t);Number.isInteger(_)&&_>=g.v&&M(g,_+1)}Et(l)}return!0},ownKeys(e){z(l);var t=Reflect.ownKeys(e).filter(e=>{var t=r.get(e);return t===void 0||t.v!==_e});for(var[n,i]of r)i.v!==_e&&!(n in e)&&t.push(n);return t},setPrototypeOf(){pe()}})}function kt(e){try{if(typeof e==`object`&&e&&te in e)return e[te]}catch{}return e}function At(e,t){return Object.is(kt(e),kt(t))}var jt,Mt,Nt,Pt;function Ft(){if(jt===void 0){jt=window,document,Mt=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;Nt=i(t,`firstChild`).get,Pt=i(t,`nextSibling`).get,l(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),l(n)&&(n.__t=void 0)}}function It(e=``){return document.createTextNode(e)}function Lt(e){return Nt.call(e)}function Rt(e){return Pt.call(e)}function N(e,t){if(!T)return Lt(e);var n=Lt(E);if(n===null)n=E.appendChild(It());else if(t&&n.nodeType!==3){var r=It();return n?.before(r),Se(r),r}return Se(n),n}function P(e,t=!1){if(!T){var n=Lt(e);return n instanceof Comment&&n.data===``?Rt(n):n}if(t&&E?.nodeType!==3){var r=It();return E?.before(r),Se(r),r}return E}function F(e,t=1,n=!1){let r=T?E:e;for(var i;t--;)i=r,r=Rt(r);if(!T)return r;if(n&&r?.nodeType!==3){var a=It();return r===null?i?.after(a):r.before(a),Se(a),a}return Se(r),r}function zt(e){e.textContent=``}function Bt(){return!1}function Vt(e,t){if(t){let t=document.body;e.autofocus=!0,Ie(()=>{document.activeElement===t&&e.focus()})}}function Ht(e){T&&Lt(e)!==null&&zt(e)}var Ut=!1;function Wt(){Ut||(Ut=!0,document.addEventListener(`reset`,e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(let t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function Gt(e){var t=L,n=R;Dn(null),On(null);try{return e()}finally{Dn(t),On(n)}}function Kt(e,t,n,r=n){e.addEventListener(t,()=>Gt(n));let i=e.__on_r;i?e.__on_r=()=>{i(),r(!0)}:e.__on_r=()=>r(!0),Wt()}function qt(e){R===null&&L===null&&ce(e),L!==null&&L.f&256&&R===null&&se(),wn&&oe(e)}function Jt(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function Yt(e,t,n,r=!0){var i=R;i!==null&&i.f&8192&&(e|=y);var a={ctx:O,deps:null,nodes_start:null,nodes_end:null,f:e|_,first:null,fn:t,last:null,next:null,parent:i,b:i&&i.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(n)try{Kn(a),a.f|=32768}catch(e){throw pn(a),e}else t!==null&&it(a);if(r){var o=a;if(n&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&!(o.f&524288)&&(o=o.first),o!==null&&(o.parent=i,i!==null&&Jt(o,i),L!==null&&L.f&2&&!(e&64))){var s=L;(s.effects??=[]).push(o)}}return a}function Xt(){return L!==null&&!En}function Zt(e){let t=Yt(8,null,!1);return Zn(t,g),t.teardown=e,t}function Qt(e){qt(`$effect`);var t=R.f;if(!L&&t&32&&!(t&32768)){var n=O;(n.e??=[]).push(e)}else return $t(e)}function $t(e){return Yt(4|S,e,!1)}function en(e){return qt(`$effect.pre`),Yt(8|S,e,!0)}function tn(e){Xe.ensure();let t=Yt(64|x,e,!0);return(e={})=>new Promise(n=>{e.outro?gn(t,()=>{pn(t),n(void 0)}):(pn(t),n(void 0))})}function nn(e){return Yt(4,e,!1)}function rn(e,t){var n=O,r={effect:null,ran:!1,deps:e};n.l.$.push(r),r.effect=sn(()=>{e(),!r.ran&&(r.ran=!0,Yn(t))})}function an(){var e=O;sn(()=>{for(var t of e.l.$){t.deps();var n=t.effect;n.f&1024&&Zn(n,v),Vn(n)&&Kn(n),t.ran=!1}})}function on(e){return Yt(4194304|x,e,!0)}function sn(e,t=0){return Yt(8|t,e,!0)}function I(e,t=[],n=[]){lt(t,n,t=>{Yt(8,()=>e(...t.map(z)),!0)})}function cn(e,t=0){return Yt(16|t,e,!0)}function ln(e,t=!0){return Yt(32|x,e,!0,t)}function un(e){var t=e.teardown;if(t!==null){let e=wn,n=L;Tn(!0),Dn(null);try{t.call(null)}finally{Tn(e),Dn(n)}}}function dn(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){let e=n.ac;e!==null&&Gt(()=>{e.abort(w)});var r=n.next;n.f&64?n.parent=null:pn(n,t),n=r}}function fn(e){for(var t=e.first;t!==null;){var n=t.next;t.f&32||pn(t),t=n}}function pn(e,t=!0){var n=!1;(t||e.f&262144)&&e.nodes_start!==null&&e.nodes_end!==null&&(mn(e.nodes_start,e.nodes_end),n=!0),dn(e,t&&!n),Gn(e,0),Zn(e,16384);var r=e.transitions;if(r!==null)for(let e of r)e.stop();un(e);var i=e.parent;i!==null&&i.first!==null&&hn(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function mn(e,t){for(;e!==null;){var n=e===t?null:Rt(e);e.remove(),e=n}}function hn(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function gn(e,t,n=!0){var r=[];vn(e,r,!0),_n(r,()=>{n&&pn(e),t&&t()})}function _n(e,t){var n=e.length;if(n>0){var r=()=>--n||t();for(var i of e)i.out(r)}else t()}function vn(e,t,n){if(!(e.f&8192)){if(e.f^=y,e.transitions!==null)for(let r of e.transitions)(r.is_global||n)&&t.push(r);for(var r=e.first;r!==null;){var i=r.next,a=(r.f&65536)!=0||(r.f&32)!=0;vn(r,t,a?n:!1),r=i}}}function yn(e){bn(e,!0)}function bn(e,t){if(e.f&8192){e.f^=y,e.f&1024||(Zn(e,_),it(e));for(var n=e.first;n!==null;){var r=n.next,i=(n.f&65536)!=0||(n.f&32)!=0;bn(n,i?t:!1),n=r}if(e.transitions!==null)for(let n of e.transitions)(n.is_global||t)&&n.in()}}function xn(e,t){for(var n=e.nodes_start,r=e.nodes_end;n!==null;){var i=n===r?null:Rt(n);t.append(n),n=i}}let Sn=!1;function Cn(e){Sn=e}let wn=!1;function Tn(e){wn=e}let L=null,En=!1;function Dn(e){L=e}let R=null;function On(e){R=e}let kn=null;function An(e){L!==null&&(kn===null?kn=[e]:kn.push(e))}var jn=null,Mn=0;let Nn=null;function Pn(e){Nn=e}let Fn=1;var In=0;let Ln=In;function Rn(e){Ln=e}let zn=!1;function Bn(){return++Fn}function Vn(e){var t=e.f;if(t&2048)return!0;if(t&4096){var n=e.deps,r=(t&256)!=0;if(n!==null){var i,a,o=(t&512)!=0,s=r&&R!==null&&!zn,c=n.length;if((o||s)&&(R===null||!(R.f&16384))){var l=e,u=l.parent;for(i=0;i<c;i++)a=n[i],(o||!a?.reactions?.includes(l))&&(a.reactions??=[]).push(l);o&&(l.f^=512),s&&u!==null&&!(u.f&256)&&(l.f^=256)}for(i=0;i<c;i++)if(a=n[i],Vn(a)&&yt(a),a.wv>e.wv)return!0}(!r||R!==null&&!zn)&&Zn(e,g)}return!1}function Hn(e,t,n=!0){var r=e.reactions;if(r!==null&&!kn?.includes(e))for(var i=0;i<r.length;i++){var a=r[i];a.f&2?Hn(a,t,!1):t===a&&(n?Zn(a,_):a.f&1024&&Zn(a,v),it(a))}}function Un(e){var t=jn,n=Mn,r=Nn,i=L,a=zn,o=kn,s=O,c=En,l=Ln,u=e.f;jn=null,Mn=0,Nn=null,zn=(u&256)!=0&&(En||!Sn||L===null),L=u&96?null:e,kn=null,Me(e.ctx),En=!1,Ln=++In,e.ac!==null&&(Gt(()=>{e.ac.abort(w)}),e.ac=null);try{e.f|=C;var d=e.fn,f=d(),p=e.deps;if(jn!==null){var m;if(Gn(e,Mn),p!==null&&Mn>0)for(p.length=Mn+jn.length,m=0;m<jn.length;m++)p[Mn+m]=jn[m];else e.deps=p=jn;if(!zn||u&2&&e.reactions!==null)for(m=Mn;m<p.length;m++)(p[m].reactions??=[]).push(e)}else p!==null&&Mn<p.length&&(Gn(e,Mn),p.length=Mn);if(Ne()&&Nn!==null&&!En&&p!==null&&!(e.f&6146))for(m=0;m<Nn.length;m++)Hn(Nn[m],e);return i!==null&&i!==e&&(In++,Nn!==null&&(r===null?r=Nn:r.push(...Nn))),e.f&8388608&&(e.f^=ee),f}catch(e){return ze(e)}finally{e.f^=C,jn=t,Mn=n,Nn=r,L=i,zn=a,kn=o,Me(s),En=c,Ln=l}}function Wn(e,n){let r=n.reactions;if(r!==null){var i=t.call(r,e);if(i!==-1){var a=r.length-1;a===0?r=n.reactions=null:(r[i]=r[a],r.pop())}}r===null&&n.f&2&&(jn===null||!jn.includes(n))&&(Zn(n,v),n.f&768||(n.f^=512),gt(n),Gn(n,0))}function Gn(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Wn(e,n[r])}function Kn(e){var t=e.f;if(!(t&16384)){Zn(e,g);var n=R,r=Sn;R=e,Sn=!0;try{t&16?fn(e):dn(e),un(e);var i=Un(e);e.teardown=typeof i==`function`?i:null,e.wv=Fn}finally{Sn=r,R=n}}}async function qn(){await Promise.resolve(),Ze()}function z(e){var t=(e.f&2)!=0;if(null?.add(e),L!==null&&!En){if(!(R!==null&&R.f&16384)&&!kn?.includes(e)){var n=L.deps;if(L.f&2097152)e.rv<In&&(e.rv=In,jn===null&&n!==null&&n[Mn]===e?Mn++:jn===null?jn=[e]:(!zn||!jn.includes(e))&&jn.push(e));else{(L.deps??=[]).push(e);var r=e.reactions;r===null?e.reactions=[L]:r.includes(L)||r.push(L)}}}else if(t&&e.deps===null&&e.effects===null){var i=e,a=i.parent;a!==null&&!(a.f&256)&&(i.f^=256)}if(wn){if(bt.has(e))return bt.get(e);if(t){i=e;var o=i.v;return(!(i.f&1024)&&i.reactions!==null||Jn(i))&&(o=vt(i)),bt.set(i,o),o}}else if(t){if(i=e,We?.has(i))return We.get(i);Vn(i)&&yt(i)}if(We?.has(e))return We.get(e);if(e.f&8388608)throw e.v;return e.v}function Jn(e){if(e.v===_e)return!0;if(e.deps===null)return!1;for(let t of e.deps)if(bt.has(t)||t.f&2&&Jn(t))return!0;return!1}function Yn(e){var t=En;try{return En=!0,e()}finally{En=t}}var Xn=~(v|3072);function Zn(e,t){e.f=e.f&Xn|t}function Qn(e){if(!(typeof e!=`object`||!e||e instanceof EventTarget)){if(te in e)$n(e);else if(!Array.isArray(e))for(let t in e){let n=e[t];typeof n==`object`&&n&&te in n&&$n(n)}}}function $n(e,t=new Set){if(typeof e==`object`&&e&&!(e instanceof EventTarget)&&!t.has(e)){for(let n in t.add(e),e instanceof Date&&e.getTime(),e)try{$n(e[n],t)}catch{}let n=c(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){let t=a(n);for(let n in t){let r=t[n].get;if(r)try{r.call(e)}catch{}}}}}function er(e){return e.endsWith(`capture`)&&e!==`gotpointercapture`&&e!==`lostpointercapture`}var tr=[`beforeinput`,`click`,`change`,`dblclick`,`contextmenu`,`focusin`,`focusout`,`input`,`keydown`,`keyup`,`mousedown`,`mousemove`,`mouseout`,`mouseover`,`mouseup`,`pointerdown`,`pointermove`,`pointerout`,`pointerover`,`pointerup`,`touchend`,`touchmove`,`touchstart`];function nr(e){return tr.includes(e)}var rr=`allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback`.split(`.`),ir={formnovalidate:`formNoValidate`,ismap:`isMap`,nomodule:`noModule`,playsinline:`playsInline`,readonly:`readOnly`,defaultvalue:`defaultValue`,defaultchecked:`defaultChecked`,srcobject:`srcObject`,novalidate:`noValidate`,allowfullscreen:`allowFullscreen`,disablepictureinpicture:`disablePictureInPicture`,disableremoteplayback:`disableRemotePlayback`};function ar(e){return e=e.toLowerCase(),ir[e]??e}[...rr];var or=[`touchstart`,`touchmove`];function sr(e){return or.includes(e)}var cr=[`textarea`,`script`,`style`,`title`];function lr(e){return cr.includes(e)}const ur=new Set,dr=new Set;function fr(e,t,n,r={}){function i(e){if(r.capture||hr.call(t,e),!e.cancelBubble)return Gt(()=>n?.call(this,e))}return e.startsWith(`pointer`)||e.startsWith(`touch`)||e===`wheel`?Ie(()=>{t.addEventListener(e,i,r)}):t.addEventListener(e,i,r),i}function pr(e){for(var t=0;t<e.length;t++)ur.add(e[t]);for(var n of dr)n(e)}var mr=null;function hr(t){var n=this,i=n.ownerDocument,a=t.type,o=t.composedPath?.()||[],s=o[0]||t.target;mr=t;var c=0,l=mr===t&&t.__root;if(l){var u=o.indexOf(l);if(u!==-1&&(n===document||n===window)){t.__root=n;return}var d=o.indexOf(n);if(d===-1)return;u<=d&&(c=u)}if(s=o[c]||t.target,s!==n){r(t,`currentTarget`,{configurable:!0,get(){return s||i}});var f=L,p=R;Dn(null),On(null);try{for(var m,h=[];s!==null;){var g=s.assignedSlot||s.parentNode||s.host||null;try{var _=s[`__`+a];if(_!=null&&(!s.disabled||t.target===s))if(e(_)){var[v,...y]=_;v.apply(s,[t,...y])}else _.call(s,t)}catch(e){m?h.push(e):m=e}if(t.cancelBubble||g===n||g===null)break;s=g}if(m){for(let e of h)queueMicrotask(()=>{throw e});throw m}}finally{t.__root=n,delete t.currentTarget,Dn(f),On(p)}}}function gr(e){var t=document.createElement(`template`);return t.innerHTML=e.replaceAll(`<!>`,`<!---->`),t.content}function _r(e,t){var n=R;n.nodes_start===null&&(n.nodes_start=e,n.nodes_end=t)}function B(e,t){var n=(t&1)!=0,r=(t&2)!=0,i,a=!e.startsWith(`<!>`);return()=>{if(T)return _r(E,null),E;i===void 0&&(i=gr(a?e:`<!>`+e),n||(i=Lt(i)));var t=r||Mt?document.importNode(i,!0):i.cloneNode(!0);if(n){var o=Lt(t),s=t.lastChild;_r(o,s)}else _r(t,t);return t}}function vr(e,t,n=`svg`){var r=!e.startsWith(`<!>`),i=(t&1)!=0,a=`<${n}>${r?e:`<!>`+e}</${n}>`,o;return()=>{if(T)return _r(E,null),E;if(!o){var e=gr(a),t=Lt(e);if(i)for(o=document.createDocumentFragment();Lt(t);)o.appendChild(Lt(t));else o=Lt(t)}var n=o.cloneNode(!0);if(i){var r=Lt(n),s=n.lastChild;_r(r,s)}else _r(n,n);return n}}function yr(e,t){return vr(e,t,`svg`)}function V(){if(T)return _r(E,null),E;var e=document.createDocumentFragment(),t=document.createComment(``),n=It();return e.append(t,n),_r(t,n),e}function H(e,t){if(T){R.nodes_end=E,Ce();return}e!==null&&e.before(t)}let br=!0;function xr(e){br=e}function U(e,t){var n=t==null?``:typeof t==`object`?t+``:t;n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=n+``)}function Sr(e,t){return wr(e,t)}var Cr=new Map;function wr(e,{target:t,anchor:r,props:i={},events:a,context:o,intro:s=!0}){Ft();var c=new Set,l=e=>{for(var n=0;n<e.length;n++){var r=e[n];if(!c.has(r)){c.add(r);var i=sr(r);t.addEventListener(r,hr,{passive:i});var a=Cr.get(r);a===void 0?(document.addEventListener(r,hr,{passive:i}),Cr.set(r,1)):Cr.set(r,a+1)}}};l(n(ur)),dr.add(l);var u=void 0,d=tn(()=>{var n=r??t.appendChild(It());return st(n,{pending:()=>{}},t=>{if(o){k({});var n=O;n.c=o}if(a&&(i.$$events=a),T&&_r(t,null),br=s,u=e(t,i)||{},br=!0,T&&(R.nodes_end=E,E===null||E.nodeType!==8||E.data!==`]`))throw ve(),ge;o&&A()}),()=>{for(var e of c){t.removeEventListener(e,hr);var i=Cr.get(e);--i===0?(document.removeEventListener(e,hr),Cr.delete(e)):Cr.set(e,i)}dr.delete(l),n!==r&&n.parentNode?.removeChild(n)}});return Tr.set(u,d),u}var Tr=new WeakMap,Er=class{anchor;#batches=new Map;#onscreen=new Map;#offscreen=new Map;#transition=!0;constructor(e,t=!0){this.anchor=e,this.#transition=t}#commit=()=>{var e=j;if(this.#batches.has(e)){var t=this.#batches.get(e),n=this.#onscreen.get(t);if(n)yn(n);else{var r=this.#offscreen.get(t);r&&(this.#onscreen.set(t,r.effect),this.#offscreen.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),n=r.effect)}for(let[t,n]of this.#batches){if(this.#batches.delete(t),t===e)break;let r=this.#offscreen.get(n);r&&(pn(r.effect),this.#offscreen.delete(n))}for(let[e,r]of this.#onscreen){if(e===t)continue;let i=()=>{if(Array.from(this.#batches.values()).includes(e)){var t=document.createDocumentFragment();xn(r,t),t.append(It()),this.#offscreen.set(e,{effect:r,fragment:t})}else pn(r);this.#onscreen.delete(e)};this.#transition||!n?gn(r,i,!1):i()}}};ensure(e,t){var n=j,r=Bt();if(t&&!this.#onscreen.has(e)&&!this.#offscreen.has(e))if(r){var i=document.createDocumentFragment(),a=It();i.append(a),this.#offscreen.set(e,{effect:ln(()=>t(a)),fragment:i})}else this.#onscreen.set(e,ln(()=>t(this.anchor)));if(this.#batches.set(n,e),r){for(let[t,r]of this.#onscreen)t===e?n.skipped_effects.delete(r):n.skipped_effects.add(r);for(let[t,r]of this.#offscreen)t===e?n.skipped_effects.delete(r.effect):n.skipped_effects.add(r.effect);n.add_callback(this.#commit)}else T&&(this.anchor=E),this.#commit()}};function Dr(e,t,n=!1){T&&Ce();var r=new Er(e),i=n?b:0;function a(t,n){if(T){let a=Ee(e)===`[!`;if(t===a){var i=Te();Se(i),r.anchor=i,xe(!1),r.ensure(t,n),xe(!0);return}}r.ensure(t,n)}cn(()=>{var e=!1;t((t,n=!0)=>{e=!0,a(n,t)}),e||a(!1,null)},i)}let Or=null;function kr(e){Or=e}function Ar(e,t){return t}function jr(e,t,n){for(var r=e.items,i=[],a=t.length,o=0;o<a;o++)vn(t[o].e,i,!0);var s=a>0&&i.length===0&&n!==null;if(s){var c=n.parentNode;zt(c),c.append(n),r.clear(),Lr(e,t[0].prev,t[a-1].next)}_n(i,()=>{for(var n=0;n<a;n++){var i=t[n];s||(r.delete(i.k),Lr(e,i.prev,i.next)),pn(i.e,!s)}})}function Mr(t,r,i,a,o,s=null){var c=t,l={flags:r,items:new Map,first:null};if(r&4){var u=t;c=T?Se(Lt(u)):u.appendChild(It())}T&&Ce();var d=null,f=!1,p=new Map,m=ht(()=>{var t=i();return e(t)?t:t==null?[]:n(t)}),h,g;function _(){Nr(g,h,l,p,c,o,r,a,i),s!==null&&(h.length===0?d?yn(d):d=ln(()=>s(c)):d!==null&&gn(d,()=>{d=null}))}cn(()=>{g??=R,h=z(m);var e=h.length;if(f&&e===0)return;f=e===0;let t=!1;if(T&&Ee(c)===`[!`!=(e===0)&&(c=Te(),Se(c),xe(!1),t=!0),T){for(var n=null,u,v=0;v<e;v++){if(E.nodeType===8&&E.data===`]`){c=E,t=!0,xe(!1);break}var y=h[v],b=a(y,v);u=Fr(E,l,n,null,y,b,v,o,r,i),l.items.set(b,u),n=u}e>0&&Se(Te())}if(T)e===0&&s&&(d=ln(()=>s(c)));else if(Bt()){var x=new Set,S=j;for(v=0;v<e;v+=1){y=h[v],b=a(y,v);var C=l.items.get(b)??p.get(b);C?r&3&&Pr(C,y,v,r):(u=Fr(null,l,null,null,y,b,v,o,r,i,!0),p.set(b,u)),x.add(b)}for(let[e,t]of l.items)x.has(e)||S.skipped_effects.add(t.e);S.add_callback(_)}else _();t&&xe(!0),z(m)}),T&&(c=E)}function Nr(e,t,r,i,a,o,s,c,l){var u=(s&8)!=0,d=(s&3)!=0,f=t.length,p=r.items,m=r.first,h,g=null,_,v=[],y=[],b,x,S,C;if(u)for(C=0;C<f;C+=1)b=t[C],x=c(b,C),S=p.get(x),S!==void 0&&(S.a?.measure(),(_??=new Set).add(S));for(C=0;C<f;C+=1){if(b=t[C],x=c(b,C),S=p.get(x),S===void 0){var ee=i.get(x);if(ee!==void 0){i.delete(x),p.set(x,ee);var te=g?g.next:m;Lr(r,g,ee),Lr(r,ee,te),Ir(ee,te,a),g=ee}else{var ne=m?m.e.nodes_start:a;g=Fr(ne,r,g,g===null?r.first:g.next,b,x,C,o,s,l)}p.set(x,g),v=[],y=[],m=g.next;continue}if(d&&Pr(S,b,C,s),S.e.f&8192&&(yn(S.e),u&&(S.a?.unfix(),(_??=new Set).delete(S))),S!==m){if(h!==void 0&&h.has(S)){if(v.length<y.length){var re=y[0],w;g=re.prev;var ie=v[0],ae=v[v.length-1];for(w=0;w<v.length;w+=1)Ir(v[w],re,a);for(w=0;w<y.length;w+=1)h.delete(y[w]);Lr(r,ie.prev,ae.next),Lr(r,g,ie),Lr(r,ae,re),m=re,g=ae,--C,v=[],y=[]}else h.delete(S),Ir(S,m,a),Lr(r,S.prev,S.next),Lr(r,S,g===null?r.first:g.next),Lr(r,g,S),g=S;continue}for(v=[],y=[];m!==null&&m.k!==x;)m.e.f&8192||(h??=new Set).add(m),y.push(m),m=m.next;if(m===null)continue;S=m}v.push(S),g=S,m=S.next}if(m!==null||h!==void 0){for(var oe=h===void 0?[]:n(h);m!==null;)m.e.f&8192||oe.push(m),m=m.next;var se=oe.length;if(se>0){var ce=s&4&&f===0?a:null;if(u){for(C=0;C<se;C+=1)oe[C].a?.measure();for(C=0;C<se;C+=1)oe[C].a?.fix()}jr(r,oe,ce)}}u&&Ie(()=>{if(_!==void 0)for(S of _)S.a?.apply()}),e.first=r.first&&r.first.e,e.last=g&&g.e;for(var le of i.values())pn(le.e);i.clear()}function Pr(e,t,n,r){r&1&&wt(e.v,t),r&2?wt(e.i,n):e.i=n}function Fr(e,t,n,r,i,a,o,s,c,l,u){var d=Or,f=(c&1)!=0,p=(c&16)==0,m=f?p?Ct(i,!1,!1):xt(i):i,h=c&2?xt(o):o,g={i:h,v:m,k:a,a:null,e:null,prev:n,next:r};Or=g;try{return e===null&&document.createDocumentFragment().append(e=It()),g.e=ln(()=>s(e,m,h,l),T),g.e.prev=n&&n.e,g.e.next=r&&r.e,n===null?u||(t.first=g):(n.next=g,n.e.next=g.e),r!==null&&(r.prev=g,r.e.prev=g.e),g}finally{Or=d}}function Ir(e,t,n){for(var r=e.next?e.next.e.nodes_start:n,i=t?t.e.nodes_start:n,a=e.e.nodes_start;a!==null&&a!==r;){var o=Rt(a);i.before(a),a=o}}function Lr(e,t,n){t===null?e.first=n:(t.next=n,t.e.next=n&&n.e),n!==null&&(n.prev=t,n.e.prev=t&&t.e)}function W(e,t,...n){var r=new Er(e);cn(()=>{let e=t()??null;r.ensure(e,e&&(t=>e(t,...n)))},b)}function Rr(e,t,n){T&&Ce();var r=new Er(e);cn(()=>{var e=t()??null;r.ensure(e,e&&(t=>n(t,e)))},b)}function zr(e,t,n,r,i,a){let o=T;T&&Ce();var s=null;T&&E.nodeType===1&&(s=E,Ce());var c=T?E:e,l=Or,u=new Er(c,!1);cn(()=>{let e=t()||null;var a=i?i():n||e===`svg`?`http://www.w3.org/2000/svg`:null;if(e===null){u.ensure(null,null),xr(!0);return}return u.ensure(e,t=>{var n=Or;if(kr(l),e){if(s=T?s:a?document.createElementNS(a,e):document.createElement(e),_r(s,s),r){T&&lr(e)&&s.append(document.createComment(``));var i=T?Lt(s):s.appendChild(It());T&&(i===null?xe(!1):Se(i)),r(s,i)}R.nodes_end=s,t.before(s)}kr(n),T&&Se(t)}),xr(!0),()=>{e&&xr(!1)}},b),Zt(()=>{xr(!0)}),o&&(xe(!0),Se(c))}function Br(e,t){var n=void 0,r;cn(()=>{n!==(n=t())&&(r&&=(pn(r),null),n&&(r=ln(()=>{nn(()=>n(e))})))})}function Vr(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Vr(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function Hr(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Vr(e))&&(r&&(r+=` `),r+=t);return r}function Ur(e){return typeof e==`object`?Hr(e):e??``}var Wr=[...` 	
\r\f\xA0\v﻿`];function Gr(e,t,n){var r=e==null?``:``+e;if(t&&(r=r?r+` `+t:t),n){for(var i in n)if(n[i])r=r?r+` `+i:i;else if(r.length)for(var a=i.length,o=0;(o=r.indexOf(i,o))>=0;){var s=o+a;(o===0||Wr.includes(r[o-1]))&&(s===r.length||Wr.includes(r[s]))?r=(o===0?``:r.substring(0,o))+r.substring(s+1):o=s}}return r===``?null:r}function Kr(e,t=!1){var n=t?` !important;`:`;`,r=``;for(var i in e){var a=e[i];a!=null&&a!==``&&(r+=` `+i+`: `+a+n)}return r}function qr(e){return e[0]!==`-`||e[1]!==`-`?e.toLowerCase():e}function Jr(e,t){if(t){var n=``,r,i;if(Array.isArray(t)?(r=t[0],i=t[1]):r=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,``).trim();var a=!1,o=0,s=!1,c=[];r&&c.push(...Object.keys(r).map(qr)),i&&c.push(...Object.keys(i).map(qr));var l=0,u=-1;let t=e.length;for(var d=0;d<t;d++){var f=e[d];if(s?f===`/`&&e[d-1]===`*`&&(s=!1):a?a===f&&(a=!1):f===`/`&&e[d+1]===`*`?s=!0:f===`"`||f===`'`?a=f:f===`(`?o++:f===`)`&&o--,!s&&a===!1&&o===0){if(f===`:`&&u===-1)u=d;else if(f===`;`||d===t-1){if(u!==-1){var p=qr(e.substring(l,u).trim());if(!c.includes(p)){f!==`;`&&d++;var m=e.substring(l,d).trim();n+=` `+m+`;`}}l=d+1,u=-1}}}}return r&&(n+=Kr(r)),i&&(n+=Kr(i,!0)),n=n.trim(),n===``?null:n}return e==null?null:String(e)}function Yr(e,t,n,r,i,a){var o=e.__className;if(T||o!==n||o===void 0){var s=Gr(n,r,a);(!T||s!==e.getAttribute(`class`))&&(s==null?e.removeAttribute(`class`):t?e.className=s:e.setAttribute(`class`,s)),e.__className=n}else if(a&&i!==a)for(var c in a){var l=!!a[c];(i==null||l!==!!i[c])&&e.classList.toggle(c,l)}return a}function Xr(e,t={},n,r){for(var i in n){var a=n[i];t[i]!==a&&(n[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,r))}}function Zr(e,t,n,r){var i=e.__style;if(T||i!==t){var a=Jr(t,r);(!T||a!==e.getAttribute(`style`))&&(a==null?e.removeAttribute(`style`):e.style.cssText=a),e.__style=t}else r&&(Array.isArray(r)?(Xr(e,n?.[0],r[0]),Xr(e,n?.[1],r[1],`important`)):Xr(e,n,r));return r}function Qr(t,n,r=!1){if(t.multiple){if(n==null)return;if(!e(n))return ye();for(var i of t.options)i.selected=n.includes(ei(i));return}for(i of t.options){var a=ei(i);if(At(a,n)){i.selected=!0;return}}(!r||n!==void 0)&&(t.selectedIndex=-1)}function $r(e){var t=new MutationObserver(()=>{Qr(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`value`]}),Zt(()=>{t.disconnect()})}function ei(e){return`__value`in e?e.__value:e.value}const ti=Symbol(`class`),ni=Symbol(`style`);var ri=Symbol(`is custom element`),ii=Symbol(`is html`);function ai(e){if(T){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute(`value`)){var n=e.value;G(e,`value`,null),e.value=n}if(e.hasAttribute(`checked`)){var r=e.checked;G(e,`checked`,null),e.checked=r}}};e.__on_r=n,Ie(n),Wt()}}function oi(e,t){t?e.hasAttribute(`selected`)||e.setAttribute(`selected`,``):e.removeAttribute(`selected`)}function G(e,t,n,r){var i=li(e);T&&(i[t]=e.getAttribute(t),t===`src`||t===`srcset`||t===`href`&&e.nodeName===`LINK`)||i[t]!==(i[t]=n)&&(t===`loading`&&(e[re]=n),n==null?e.removeAttribute(t):typeof n!=`string`&&di(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function si(e,t,n,r,i=!1,a=!1){if(T&&i&&e.tagName===`INPUT`){var o=e;(o.type===`checkbox`?`defaultChecked`:`defaultValue`)in n||ai(o)}var s=li(e),c=s[ri],l=!s[ii];let u=T&&c;u&&xe(!1);var d=t||{},f=e.tagName===`OPTION`;for(var p in t)p in n||(n[p]=null);n.class?n.class=Ur(n.class):(r||n[ti])&&(n.class=null),n[ni]&&(n.style??=null);var m=di(e);for(let i in n){let o=n[i];if(f&&i===`value`&&o==null){e.value=e.__value=``,d[i]=o;continue}if(i===`class`){var h=e.namespaceURI===`http://www.w3.org/1999/xhtml`;Yr(e,h,o,r,t?.[ti],n[ti]),d[i]=o,d[ti]=n[ti];continue}if(i===`style`){Zr(e,o,t?.[ni],n[ni]),d[i]=o,d[ni]=n[ni];continue}var g=d[i];if(!(o===g&&!(o===void 0&&e.hasAttribute(i)))){d[i]=o;var _=i[0]+i[1];if(_!==`$$`)if(_===`on`){let t={},n=`$$`+i,r=i.slice(2);var v=nr(r);if(er(r)&&(r=r.slice(0,-7),t.capture=!0),!v&&g){if(o!=null)continue;e.removeEventListener(r,d[n],t),d[n]=null}if(o!=null)if(v)e[`__${r}`]=o,pr([r]);else{function a(e){d[i].call(this,e)}d[n]=fr(r,e,a,t)}else v&&(e[`__${r}`]=void 0)}else if(i===`style`)G(e,i,o);else if(i===`autofocus`)Vt(e,!!o);else if(!c&&(i===`__value`||i===`value`&&o!=null))e.value=e.__value=o;else if(i===`selected`&&f)oi(e,o);else{var y=i;l||(y=ar(y));var b=y===`defaultValue`||y===`defaultChecked`;if(o==null&&!c&&!b)if(s[i]=null,y===`value`||y===`checked`){let n=e,r=t===void 0;if(y===`value`){let e=n.defaultValue;n.removeAttribute(y),n.defaultValue=e,n.value=n.__value=r?e:null}else{let e=n.defaultChecked;n.removeAttribute(y),n.defaultChecked=e,n.checked=r?e:!1}}else e.removeAttribute(i);else b||m.includes(y)&&(c||typeof o!=`string`)?(e[y]=o,y in s&&(s[y]=_e)):typeof o!=`function`&&G(e,y,o,a)}}}return u&&xe(!0),d}function ci(e,t,n=[],r=[],i,a=!1,o=!1){lt(n,r,n=>{var r=void 0,s={},c=e.nodeName===`SELECT`,l=!1;if(cn(()=>{var u=t(...n.map(z)),d=si(e,r,u,i,a,o);l&&c&&`value`in u&&Qr(e,u.value);for(let e of Object.getOwnPropertySymbols(s))u[e]||pn(s[e]);for(let t of Object.getOwnPropertySymbols(u)){var f=u[t];t.description===`@attach`&&(!r||f!==r[t])&&(s[t]&&pn(s[t]),s[t]=ln(()=>Br(e,()=>f))),d[t]=f}r=d}),c){var u=e;nn(()=>{Qr(u,r.value,!0),$r(u)})}l=!0})}function li(e){return e.__attributes??={[ri]:e.nodeName.includes(`-`),[ii]:e.namespaceURI===`http://www.w3.org/1999/xhtml`}}var ui=new Map;function di(e){var t=e.getAttribute(`is`)||e.nodeName,n=ui.get(t);if(n)return n;ui.set(t,n=[]);for(var r,i=e,o=Element.prototype;o!==i;){for(var s in r=a(i),r)r[s].set&&n.push(s);i=c(i)}return n}var fi=()=>performance.now();const pi={tick:e=>requestAnimationFrame(e),now:()=>fi(),tasks:new Set};function mi(){let e=pi.now();pi.tasks.forEach(t=>{t.c(e)||(pi.tasks.delete(t),t.f())}),pi.tasks.size!==0&&pi.tick(mi)}function hi(e){let t;return pi.tasks.size===0&&pi.tick(mi),{promise:new Promise(n=>{pi.tasks.add(t={c:e,f:n})}),abort(){pi.tasks.delete(t)}}}function gi(e,t){Gt(()=>{e.dispatchEvent(new CustomEvent(t))})}function _i(e){if(e===`float`)return`cssFloat`;if(e===`offset`)return`cssOffset`;if(e.startsWith(`--`))return e;let t=e.split(`-`);return t.length===1?t[0]:t[0]+t.slice(1).map(e=>e[0].toUpperCase()+e.slice(1)).join(``)}function vi(e){let t={},n=e.split(`;`);for(let e of n){let[n,r]=e.split(`:`);if(!n||r===void 0)break;let i=_i(n.trim());t[i]=r.trim()}return t}var yi=e=>e;function bi(e,t,n,r){var i=(e&1)!=0,a=(e&2)!=0,o=i&&a,s=(e&4)!=0,c=o?`both`:i?`in`:`out`,l,u=t.inert,d=t.style.overflow,f,p;function m(){return Gt(()=>l??=n()(t,r?.()??{},{direction:c}))}var h={is_global:s,in(){if(t.inert=u,!i){p?.abort(),p?.reset?.();return}a||f?.abort(),gi(t,`introstart`),f=xi(t,m(),p,1,()=>{gi(t,`introend`),f?.abort(),f=l=void 0,t.style.overflow=d})},out(e){if(!a){e?.(),l=void 0;return}t.inert=!0,gi(t,`outrostart`),p=xi(t,m(),f,0,()=>{gi(t,`outroend`),e?.()})},stop:()=>{f?.abort(),p?.abort()}},g=R;if((g.transitions??=[]).push(h),i&&br){var _=s;if(!_){for(var v=g.parent;v&&v.f&65536;)for(;(v=v.parent)&&!(v.f&16););_=!v||(v.f&32768)!=0}_&&nn(()=>{Yn(()=>h.in())})}}function xi(e,t,n,r,i){var a=r===1;if(u(t)){var o,s=!1;return Ie(()=>{if(!s){var c=t({direction:a?`in`:`out`});o=xi(e,c,n,r,i)}}),{abort:()=>{s=!0,o?.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(n?.deactivate(),!t?.duration)return i(),{abort:d,deactivate:d,reset:d,t:()=>r};let{delay:c=0,css:l,tick:f,easing:p=yi}=t;var m=[];if(a&&n===void 0&&(f&&f(0,1),l)){var h=vi(l(0,1));m.push(h,h)}var g=()=>1-r,_=e.animate(m,{duration:c,fill:`forwards`});return _.onfinish=()=>{_.cancel();var a=n?.t()??1-r;n?.abort();var o=r-a,s=t.duration*Math.abs(o),c=[];if(s>0){var u=!1;if(l)for(var d=Math.ceil(s/(1e3/60)),m=0;m<=d;m+=1){var h=a+o*p(m/d),v=vi(l(h,1-h));c.push(v),u||=v.overflow===`hidden`}u&&(e.style.overflow=`hidden`),g=()=>{var e=_.currentTime;return a+o*p(e/s)},f&&hi(()=>{if(_.playState!==`running`)return!1;var e=g();return f(e,1-e),!0})}_=e.animate(c,{duration:s,fill:`forwards`}),_.onfinish=()=>{g=()=>r,f?.(r,1-r),i()}},{abort:()=>{_&&(_.cancel(),_.effect=null,_.onfinish=d)},deactivate:()=>{i=d},reset:()=>{r===0&&f?.(1,0)},t:()=>g()}}function Si(e,t,n=t){var r=new WeakSet;Kt(e,`input`,async i=>{var a=i?e.defaultValue:e.value;if(a=Ci(e)?wi(a):a,n(a),j!==null&&r.add(j),await qn(),a!==(a=t())){var o=e.selectionStart,s=e.selectionEnd,c=e.value.length;if(e.value=a??``,s!==null){var l=e.value.length;o===s&&s===c&&l>c?(e.selectionStart=l,e.selectionEnd=l):(e.selectionStart=o,e.selectionEnd=Math.min(s,l))}}}),(T&&e.defaultValue!==e.value||Yn(t)==null&&e.value)&&(n(Ci(e)?wi(e.value):e.value),j!==null&&r.add(j)),sn(()=>{var n=t();if(e===document.activeElement){var i=Ue??j;if(r.has(i))return}Ci(e)&&n===wi(e.value)||e.type===`date`&&!n&&!e.value||n!==e.value&&(e.value=n??``)})}function Ci(e){var t=e.type;return t===`number`||t===`range`}function wi(e){return e===``?null:+e}function Ti(e,t){return e===t||e?.[te]===t}function Ei(e={},t,n,r){return nn(()=>{var i,a;return sn(()=>{i=a,a=r?.()||[],Yn(()=>{e!==n(...a)&&(t(e,...a),i&&Ti(n(...i),e)&&t(null,...i))})}),()=>{Ie(()=>{a&&Ti(n(...a),e)&&t(null,...a)})}}),e}function Di(e=!1){let t=O,n=t.l.u;if(!n)return;let r=()=>Qn(t.s);if(e){let e=0,n={},i=ft(()=>{let r=!1,i=t.s;for(let e in i)i[e]!==n[e]&&(n[e]=i[e],r=!0);return r&&e++,e});r=()=>z(i)}n.b.length&&en(()=>{Oi(t,r),p(n.b)}),Qt(()=>{let e=Yn(()=>n.m.map(f));return()=>{for(let t of e)typeof t==`function`&&t()}}),n.a.length&&Qt(()=>{Oi(t,r),p(n.a)})}function Oi(e,t){if(e.l.s)for(let t of e.l.s)z(t);t()}function ki(e){var t=xt(0);return function(){return arguments.length===1?(M(t,z(t)+1),arguments[0]):(z(t),e())}}function Ai(t,n){var r=t.$$events?.[n.type];for(var i of e(r)?r.slice():r==null?[]:[r])i.call(this,n)}function ji(e,t,n){if(e==null)return t(void 0),n&&n(void 0),d;let r=Yn(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}var Mi=[];function Ni(e,t){return{subscribe:Pi(e,t).subscribe}}function Pi(e,t=d){let n=null,r=new Set;function i(t){if(Oe(e,t)&&(e=t,n)){let t=!Mi.length;for(let t of r)t[1](),Mi.push(t,e);if(t){for(let e=0;e<Mi.length;e+=2)Mi[e][0](Mi[e+1]);Mi.length=0}}}function a(t){i(t(e))}function o(o,s=d){let c=[o,s];return r.add(c),r.size===1&&(n=t(i,a)||d),o(e),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:i,update:a,subscribe:o}}function Fi(e,t,n){let r=!Array.isArray(e),i=r?[e]:e;if(!i.every(Boolean))throw Error(`derived() expects stores as input, got a falsy value`);let a=t.length<2;return Ni(n,(e,n)=>{let o=!1,s=[],c=0,l=d,u=()=>{if(c)return;l();let i=t(r?s[0]:s,e,n);a?e(i):l=typeof i==`function`?i:d},f=i.map((e,t)=>ji(e,e=>{s[t]=e,c&=~(1<<t),o&&u()},()=>{c|=1<<t}));return o=!0,u(),function(){p(f),l(),o=!1}})}function Ii(e){let t;return ji(e,e=>t=e)(),t}var Li=!1,Ri=Symbol();function zi(e,t,n){let r=n[t]??={store:null,source:Ct(void 0),unsubscribe:d};if(r.store!==e&&!(Ri in n))if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=d;else{var i=!0;r.unsubscribe=ji(e,e=>{i?r.source.v=e:M(r.source,e)}),i=!1}return e&&Ri in n?Ii(e):z(r.source)}function Bi(){let e={};function t(){Zt(()=>{for(var t in e)e[t].unsubscribe();r(e,Ri,{enumerable:!1,value:!0})})}return[e,t]}function Vi(e){var t=Li;try{return Li=!1,[e(),Li]}finally{Li=t}}var Hi={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function K(e,t,n){return new Proxy({props:e,exclude:t},Hi)}var Ui={get(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(u(r)&&(r=r()),typeof r==`object`&&r&&t in r)return r[t]}},set(e,t,n){let r=e.props.length;for(;r--;){let a=e.props[r];u(a)&&(a=a());let o=i(a,t);if(o&&o.set)return o.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(u(r)&&(r=r()),typeof r==`object`&&r&&t in r){let e=i(r,t);return e&&!e.configurable&&(e.configurable=!0),e}}},has(e,t){if(t===te||t===ne)return!1;for(let n of e.props)if(u(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){let t=[];for(let n of e.props)if(u(n)&&(n=n()),n){for(let e in n)t.includes(e)||t.push(e);for(let e of Object.getOwnPropertySymbols(n))t.includes(e)||t.push(e)}return t}};function q(...e){return new Proxy({props:e},Ui)}function Wi(e,t,n,r){var a=!Ae||(n&2)!=0,o=(n&8)!=0,s=(n&16)!=0,c=r,l=!0,u=()=>(l&&(l=!1,c=s?Yn(r):r),c),d;if(o){var f=te in e||ne in e;d=i(e,t)?.set??(f&&t in e?n=>e[t]=n:void 0)}var p,m=!1;o?[p,m]=Vi(()=>e[t]):p=e[t],p===void 0&&r!==void 0&&(p=u(),d&&(a&&de(t),d(p)));var h=a?()=>{var n=e[t];return n===void 0?u():(l=!0,n)}:()=>{var n=e[t];return n!==void 0&&(c=void 0),n===void 0?c:n};if(a&&!(n&4))return h;if(d){var g=e.$$legacy;return(function(e,t){return arguments.length>0?((!a||!t||g||m)&&d(t?h():e),e):h()})}var _=!1,v=(n&1?ft:ht)(()=>(_=!1,h()));o&&z(v);var y=R;return(function(e,t){if(arguments.length>0){let n=t?z(v):a&&o?Ot(e):e;return M(v,n),_=!0,c!==void 0&&(c=n),e}return wn&&_||y.f&16384?v.v:z(v)})}function Gi(e){O===null&&ie(`onMount`),Ae&&O.l!==null?Xi(O).m.push(e):Qt(()=>{let t=Yn(e);if(typeof t==`function`)return t})}function Ki(e){O===null&&ie(`onDestroy`),Gi(()=>()=>Yn(e))}function qi(e,t,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:r})}function Ji(){let t=O;return t===null&&ie(`createEventDispatcher`),(n,r,i)=>{let a=t.s.$$events?.[n];if(a){let o=e(a)?a.slice():[a],s=qi(n,r,i);for(let e of o)e.call(t.x,s);return!s.defaultPrevented}return!0}}function Yi(e){O===null&&ie(`afterUpdate`),O.l===null&&ue(`afterUpdate`),Xi(O).a.push(e)}function Xi(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}typeof window<`u`&&((window.__svelte??={}).v??=new Set).add(`5`);var Zi={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":2,"stroke-linecap":`round`,"stroke-linejoin":`round`},Qi=yr(`<svg><!><!></svg>`);function J(e,t){k(t,!0);let n=Wi(t,`color`,3,`currentColor`),r=Wi(t,`size`,3,24),i=Wi(t,`strokeWidth`,3,2),a=Wi(t,`absoluteStrokeWidth`,3,!1),o=Wi(t,`iconNode`,19,()=>[]),s=K(t,[`$$slots`,`$$events`,`$$legacy`,`name`,`color`,`size`,`strokeWidth`,`absoluteStrokeWidth`,`iconNode`,`children`]);var c=Qi();ci(c,e=>({...Zi,...s,width:r(),height:r(),stroke:n(),"stroke-width":e,class:[`lucide-icon lucide`,t.name&&`lucide-${t.name}`,t.class]}),[()=>a()?Number(i())*24/Number(r()):i()]);var l=N(c);Mr(l,17,o,Ar,(e,t)=>{var n=mt(()=>h(z(t),2));let r=()=>z(n)[0],i=()=>z(n)[1];var a=V(),o=P(a);zr(o,r,!0,(e,t)=>{ci(e,()=>({...i()}))}),H(e,a)});var u=F(l);W(u,()=>t.children??d),D(c),H(e,c),A()}function $i(e,t){k(t,!0);
/**
* @license @lucide/svelte v0.548.0 - ISC
*
* ISC License
*
* Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
*
* Permission to use, copy, modify, and/or distribute this software for any
* purpose with or without fee is hereby granted, provided that the above
* copyright notice and this permission notice appear in all copies.
*
* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*
* ---
*
* The MIT License (MIT) (for portions derived from Feather)
*
* Copyright (c) 2013-2023 Cole Bemis
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
*/
let n=K(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M11 14h1v4`}],[`path`,{d:`M16 2v4`}],[`path`,{d:`M3 10h18`}],[`path`,{d:`M8 2v4`}],[`rect`,{x:`3`,y:`4`,width:`18`,height:`18`,rx:`2`}]];J(e,q({name:`calendar-1`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=V(),i=P(r);W(i,()=>t.children??d),H(e,r)},$$slots:{default:!0}})),A()}function ea(e,t){k(t,!0);
/**
* @license @lucide/svelte v0.548.0 - ISC
*
* ISC License
*
* Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
*
* Permission to use, copy, modify, and/or distribute this software for any
* purpose with or without fee is hereby granted, provided that the above
* copyright notice and this permission notice appear in all copies.
*
* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*
* ---
*
* The MIT License (MIT) (for portions derived from Feather)
*
* Copyright (c) 2013-2023 Cole Bemis
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
*/
let n=K(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M8 2v4`}],[`path`,{d:`M16 2v4`}],[`rect`,{width:`18`,height:`18`,x:`3`,y:`4`,rx:`2`}],[`path`,{d:`M3 10h18`}],[`path`,{d:`M8 14h.01`}],[`path`,{d:`M12 14h.01`}],[`path`,{d:`M16 14h.01`}],[`path`,{d:`M8 18h.01`}],[`path`,{d:`M12 18h.01`}],[`path`,{d:`M16 18h.01`}]];J(e,q({name:`calendar-days`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=V(),i=P(r);W(i,()=>t.children??d),H(e,r)},$$slots:{default:!0}})),A()}function ta(e,t){k(t,!0);
/**
* @license @lucide/svelte v0.548.0 - ISC
*
* ISC License
*
* Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
*
* Permission to use, copy, modify, and/or distribute this software for any
* purpose with or without fee is hereby granted, provided that the above
* copyright notice and this permission notice appear in all copies.
*
* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*
* ---
*
* The MIT License (MIT) (for portions derived from Feather)
*
* Copyright (c) 2013-2023 Cole Bemis
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
*/
let n=K(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M8 2v4`}],[`path`,{d:`M16 2v4`}],[`rect`,{width:`18`,height:`18`,x:`3`,y:`4`,rx:`2`}],[`path`,{d:`M3 10h18`}]];J(e,q({name:`calendar`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=V(),i=P(r);W(i,()=>t.children??d),H(e,r)},$$slots:{default:!0}})),A()}function na(e,t){k(t,!0);
/**
* @license @lucide/svelte v0.548.0 - ISC
*
* ISC License
*
* Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
*
* Permission to use, copy, modify, and/or distribute this software for any
* purpose with or without fee is hereby granted, provided that the above
* copyright notice and this permission notice appear in all copies.
*
* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*
* ---
*
* The MIT License (MIT) (for portions derived from Feather)
*
* Copyright (c) 2013-2023 Cole Bemis
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
*/
let n=K(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M20 6 9 17l-5-5`}]];J(e,q({name:`check`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=V(),i=P(r);W(i,()=>t.children??d),H(e,r)},$$slots:{default:!0}})),A()}function ra(e,t){k(t,!0);
/**
* @license @lucide/svelte v0.548.0 - ISC
*
* ISC License
*
* Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
*
* Permission to use, copy, modify, and/or distribute this software for any
* purpose with or without fee is hereby granted, provided that the above
* copyright notice and this permission notice appear in all copies.
*
* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*
* ---
*
* The MIT License (MIT) (for portions derived from Feather)
*
* Copyright (c) 2013-2023 Cole Bemis
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
*/
let n=K(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`m15 18-6-6 6-6`}]];J(e,q({name:`chevron-left`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=V(),i=P(r);W(i,()=>t.children??d),H(e,r)},$$slots:{default:!0}})),A()}function ia(e,t){k(t,!0);
/**
* @license @lucide/svelte v0.548.0 - ISC
*
* ISC License
*
* Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
*
* Permission to use, copy, modify, and/or distribute this software for any
* purpose with or without fee is hereby granted, provided that the above
* copyright notice and this permission notice appear in all copies.
*
* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*
* ---
*
* The MIT License (MIT) (for portions derived from Feather)
*
* Copyright (c) 2013-2023 Cole Bemis
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
*/
let n=K(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`m9 18 6-6-6-6`}]];J(e,q({name:`chevron-right`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=V(),i=P(r);W(i,()=>t.children??d),H(e,r)},$$slots:{default:!0}})),A()}function aa(e,t){k(t,!0);
/**
* @license @lucide/svelte v0.548.0 - ISC
*
* ISC License
*
* Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
*
* Permission to use, copy, modify, and/or distribute this software for any
* purpose with or without fee is hereby granted, provided that the above
* copyright notice and this permission notice appear in all copies.
*
* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*
* ---
*
* The MIT License (MIT) (for portions derived from Feather)
*
* Copyright (c) 2013-2023 Cole Bemis
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
*/
let n=K(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`circle`,{cx:`12`,cy:`12`,r:`10`}],[`path`,{d:`M8 12h8`}],[`path`,{d:`M12 8v8`}]];J(e,q({name:`circle-plus`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=V(),i=P(r);W(i,()=>t.children??d),H(e,r)},$$slots:{default:!0}})),A()}function oa(e,t){k(t,!0);
/**
* @license @lucide/svelte v0.548.0 - ISC
*
* ISC License
*
* Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
*
* Permission to use, copy, modify, and/or distribute this software for any
* purpose with or without fee is hereby granted, provided that the above
* copyright notice and this permission notice appear in all copies.
*
* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*
* ---
*
* The MIT License (MIT) (for portions derived from Feather)
*
* Copyright (c) 2013-2023 Cole Bemis
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
*/
let n=K(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M12 6v6l2-4`}],[`circle`,{cx:`12`,cy:`12`,r:`10`}]];J(e,q({name:`clock-1`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=V(),i=P(r);W(i,()=>t.children??d),H(e,r)},$$slots:{default:!0}})),A()}function sa(e,t){k(t,!0);
/**
* @license @lucide/svelte v0.548.0 - ISC
*
* ISC License
*
* Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
*
* Permission to use, copy, modify, and/or distribute this software for any
* purpose with or without fee is hereby granted, provided that the above
* copyright notice and this permission notice appear in all copies.
*
* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*
* ---
*
* The MIT License (MIT) (for portions derived from Feather)
*
* Copyright (c) 2013-2023 Cole Bemis
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
*/
let n=K(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M12 6v6l-4-2`}],[`circle`,{cx:`12`,cy:`12`,r:`10`}]];J(e,q({name:`clock-10`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=V(),i=P(r);W(i,()=>t.children??d),H(e,r)},$$slots:{default:!0}})),A()}function ca(e,t){k(t,!0);
/**
* @license @lucide/svelte v0.548.0 - ISC
*
* ISC License
*
* Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
*
* Permission to use, copy, modify, and/or distribute this software for any
* purpose with or without fee is hereby granted, provided that the above
* copyright notice and this permission notice appear in all copies.
*
* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*
* ---
*
* The MIT License (MIT) (for portions derived from Feather)
*
* Copyright (c) 2013-2023 Cole Bemis
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
*/
let n=K(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M12 6v6l4 2`}],[`circle`,{cx:`12`,cy:`12`,r:`10`}]];J(e,q({name:`clock`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=V(),i=P(r);W(i,()=>t.children??d),H(e,r)},$$slots:{default:!0}})),A()}function la(e,t){k(t,!0);
/**
* @license @lucide/svelte v0.548.0 - ISC
*
* ISC License
*
* Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
*
* Permission to use, copy, modify, and/or distribute this software for any
* purpose with or without fee is hereby granted, provided that the above
* copyright notice and this permission notice appear in all copies.
*
* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*
* ---
*
* The MIT License (MIT) (for portions derived from Feather)
*
* Copyright (c) 2013-2023 Cole Bemis
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
*/
let n=K(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M12.409 5.824c-.702.792-1.15 1.496-1.415 2.166l2.153 2.156a.5.5 0 0 1 0 .707l-2.293 2.293a.5.5 0 0 0 0 .707L12 15`}],[`path`,{d:`M13.508 20.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.677.6.6 0 0 0 .818.001A5.5 5.5 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5z`}]];J(e,q({name:`heart-crack`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=V(),i=P(r);W(i,()=>t.children??d),H(e,r)},$$slots:{default:!0}})),A()}function ua(e,t){k(t,!0);
/**
* @license @lucide/svelte v0.548.0 - ISC
*
* ISC License
*
* Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
*
* Permission to use, copy, modify, and/or distribute this software for any
* purpose with or without fee is hereby granted, provided that the above
* copyright notice and this permission notice appear in all copies.
*
* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*
* ---
*
* The MIT License (MIT) (for portions derived from Feather)
*
* Copyright (c) 2013-2023 Cole Bemis
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
*/
let n=K(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`}],[`path`,{d:`M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`}]];J(e,q({name:`house`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=V(),i=P(r);W(i,()=>t.children??d),H(e,r)},$$slots:{default:!0}})),A()}function da(e,t){k(t,!0);
/**
* @license @lucide/svelte v0.548.0 - ISC
*
* ISC License
*
* Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
*
* Permission to use, copy, modify, and/or distribute this software for any
* purpose with or without fee is hereby granted, provided that the above
* copyright notice and this permission notice appear in all copies.
*
* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*
* ---
*
* The MIT License (MIT) (for portions derived from Feather)
*
* Copyright (c) 2013-2023 Cole Bemis
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
*/
let n=K(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M13 5h8`}],[`path`,{d:`M13 12h8`}],[`path`,{d:`M13 19h8`}],[`path`,{d:`m3 17 2 2 4-4`}],[`rect`,{x:`3`,y:`4`,width:`6`,height:`6`,rx:`1`}]];J(e,q({name:`list-todo`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=V(),i=P(r);W(i,()=>t.children??d),H(e,r)},$$slots:{default:!0}})),A()}function fa(e,t){k(t,!0);
/**
* @license @lucide/svelte v0.548.0 - ISC
*
* ISC License
*
* Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
*
* Permission to use, copy, modify, and/or distribute this software for any
* purpose with or without fee is hereby granted, provided that the above
* copyright notice and this permission notice appear in all copies.
*
* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*
* ---
*
* The MIT License (MIT) (for portions derived from Feather)
*
* Copyright (c) 2013-2023 Cole Bemis
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
*/
let n=K(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M4 5h16`}],[`path`,{d:`M4 12h16`}],[`path`,{d:`M4 19h16`}]];J(e,q({name:`menu`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=V(),i=P(r);W(i,()=>t.children??d),H(e,r)},$$slots:{default:!0}})),A()}function pa(e,t){k(t,!0);
/**
* @license @lucide/svelte v0.548.0 - ISC
*
* ISC License
*
* Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
*
* Permission to use, copy, modify, and/or distribute this software for any
* purpose with or without fee is hereby granted, provided that the above
* copyright notice and this permission notice appear in all copies.
*
* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*
* ---
*
* The MIT License (MIT) (for portions derived from Feather)
*
* Copyright (c) 2013-2023 Cole Bemis
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
*/
let n=K(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`}]];J(e,q({name:`moon`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=V(),i=P(r);W(i,()=>t.children??d),H(e,r)},$$slots:{default:!0}})),A()}function ma(e,t){k(t,!0);
/**
* @license @lucide/svelte v0.548.0 - ISC
*
* ISC License
*
* Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
*
* Permission to use, copy, modify, and/or distribute this software for any
* purpose with or without fee is hereby granted, provided that the above
* copyright notice and this permission notice appear in all copies.
*
* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*
* ---
*
* The MIT License (MIT) (for portions derived from Feather)
*
* Copyright (c) 2013-2023 Cole Bemis
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
*/
let n=K(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z`}],[`path`,{d:`m5 2 5 5`}],[`path`,{d:`M2 13h15`}],[`path`,{d:`M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z`}]];J(e,q({name:`paint-bucket`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=V(),i=P(r);W(i,()=>t.children??d),H(e,r)},$$slots:{default:!0}})),A()}function ha(e,t){k(t,!0);
/**
* @license @lucide/svelte v0.548.0 - ISC
*
* ISC License
*
* Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
*
* Permission to use, copy, modify, and/or distribute this software for any
* purpose with or without fee is hereby granted, provided that the above
* copyright notice and this permission notice appear in all copies.
*
* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*
* ---
*
* The MIT License (MIT) (for portions derived from Feather)
*
* Copyright (c) 2013-2023 Cole Bemis
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
*/
let n=K(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2`}],[`path`,{d:`M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6`}],[`rect`,{x:`6`,y:`14`,width:`12`,height:`8`,rx:`1`}]];J(e,q({name:`printer`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=V(),i=P(r);W(i,()=>t.children??d),H(e,r)},$$slots:{default:!0}})),A()}function ga(e,t){k(t,!0);
/**
* @license @lucide/svelte v0.548.0 - ISC
*
* ISC License
*
* Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
*
* Permission to use, copy, modify, and/or distribute this software for any
* purpose with or without fee is hereby granted, provided that the above
* copyright notice and this permission notice appear in all copies.
*
* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*
* ---
*
* The MIT License (MIT) (for portions derived from Feather)
*
* Copyright (c) 2013-2023 Cole Bemis
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
*/
let n=K(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`m21 21-4.34-4.34`}],[`circle`,{cx:`11`,cy:`11`,r:`8`}]];J(e,q({name:`search`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=V(),i=P(r);W(i,()=>t.children??d),H(e,r)},$$slots:{default:!0}})),A()}function _a(e,t){k(t,!0);
/**
* @license @lucide/svelte v0.548.0 - ISC
*
* ISC License
*
* Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
*
* Permission to use, copy, modify, and/or distribute this software for any
* purpose with or without fee is hereby granted, provided that the above
* copyright notice and this permission notice appear in all copies.
*
* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*
* ---
*
* The MIT License (MIT) (for portions derived from Feather)
*
* Copyright (c) 2013-2023 Cole Bemis
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
*/
let n=K(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M14 17H5`}],[`path`,{d:`M19 7h-9`}],[`circle`,{cx:`17`,cy:`17`,r:`3`}],[`circle`,{cx:`7`,cy:`7`,r:`3`}]];J(e,q({name:`settings-2`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=V(),i=P(r);W(i,()=>t.children??d),H(e,r)},$$slots:{default:!0}})),A()}function va(e,t){k(t,!0);
/**
* @license @lucide/svelte v0.548.0 - ISC
*
* ISC License
*
* Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
*
* Permission to use, copy, modify, and/or distribute this software for any
* purpose with or without fee is hereby granted, provided that the above
* copyright notice and this permission notice appear in all copies.
*
* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*
* ---
*
* The MIT License (MIT) (for portions derived from Feather)
*
* Copyright (c) 2013-2023 Cole Bemis
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
*/
let n=K(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`circle`,{cx:`12`,cy:`12`,r:`4`}],[`path`,{d:`M12 2v2`}],[`path`,{d:`M12 20v2`}],[`path`,{d:`m4.93 4.93 1.41 1.41`}],[`path`,{d:`m17.66 17.66 1.41 1.41`}],[`path`,{d:`M2 12h2`}],[`path`,{d:`M20 12h2`}],[`path`,{d:`m6.34 17.66-1.41 1.41`}],[`path`,{d:`m19.07 4.93-1.41 1.41`}]];J(e,q({name:`sun`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=V(),i=P(r);W(i,()=>t.children??d),H(e,r)},$$slots:{default:!0}})),A()}function ya(e,t){k(t,!0);
/**
* @license @lucide/svelte v0.548.0 - ISC
*
* ISC License
*
* Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
*
* Permission to use, copy, modify, and/or distribute this software for any
* purpose with or without fee is hereby granted, provided that the above
* copyright notice and this permission notice appear in all copies.
*
* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*
* ---
*
* The MIT License (MIT) (for portions derived from Feather)
*
* Copyright (c) 2013-2023 Cole Bemis
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
*/
let n=K(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`}],[`path`,{d:`M3 6h18`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`}]];J(e,q({name:`trash`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=V(),i=P(r);W(i,()=>t.children??d),H(e,r)},$$slots:{default:!0}})),A()}function ba(e,t){k(t,!0);
/**
* @license @lucide/svelte v0.548.0 - ISC
*
* ISC License
*
* Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
*
* Permission to use, copy, modify, and/or distribute this software for any
* purpose with or without fee is hereby granted, provided that the above
* copyright notice and this permission notice appear in all copies.
*
* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*
* ---
*
* The MIT License (MIT) (for portions derived from Feather)
*
* Copyright (c) 2013-2023 Cole Bemis
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
*/
let n=K(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`}],[`circle`,{cx:`12`,cy:`7`,r:`4`}]];J(e,q({name:`user`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=V(),i=P(r);W(i,()=>t.children??d),H(e,r)},$$slots:{default:!0}})),A()}var xa=class e extends Error{constructor(t){super(`ClientResponseError`),this.url=``,this.status=0,this.response={},this.isAbort=!1,this.originalError=null,Object.setPrototypeOf(this,e.prototype),typeof t==`object`&&t&&(this.url=typeof t.url==`string`?t.url:``,this.status=typeof t.status==`number`?t.status:0,this.isAbort=!!t.isAbort,this.originalError=t.originalError,t.response!==null&&typeof t.response==`object`?this.response=t.response:t.data!==null&&typeof t.data==`object`?this.response=t.data:this.response={}),this.originalError||t instanceof e||(this.originalError=t),typeof DOMException<`u`&&t instanceof DOMException&&(this.isAbort=!0),this.name=`ClientResponseError `+this.status,this.message=this.response?.message,this.message||(this.isAbort?this.message=`The request was autocancelled. You can find more info in https://github.com/pocketbase/js-sdk#auto-cancellation.`:this.originalError?.cause?.message?.includes(`ECONNREFUSED ::1`)?this.message=`Failed to connect to the PocketBase server. Try changing the SDK URL from localhost to 127.0.0.1 (https://github.com/pocketbase/js-sdk/issues/21).`:this.message=`Something went wrong.`),this.cause=this.originalError}get data(){return this.response}toJSON(){return{...this}}},Sa=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function Ca(e,t){let n={};if(typeof e!=`string`)return n;let r=Object.assign({},t||{}).decode||Ta,i=0;for(;i<e.length;){let t=e.indexOf(`=`,i);if(t===-1)break;let a=e.indexOf(`;`,i);if(a===-1)a=e.length;else if(a<t){i=e.lastIndexOf(`;`,t-1)+1;continue}let o=e.slice(i,t).trim();if(n[o]===void 0){let i=e.slice(t+1,a).trim();i.charCodeAt(0)===34&&(i=i.slice(1,-1));try{n[o]=r(i)}catch{n[o]=i}}i=a+1}return n}function wa(e,t,n){let r=Object.assign({},n||{}),i=r.encode||Ea;if(!Sa.test(e))throw TypeError(`argument name is invalid`);let a=i(t);if(a&&!Sa.test(a))throw TypeError(`argument val is invalid`);let o=e+`=`+a;if(r.maxAge!=null){let e=r.maxAge-0;if(isNaN(e)||!isFinite(e))throw TypeError(`option maxAge is invalid`);o+=`; Max-Age=`+Math.floor(e)}if(r.domain){if(!Sa.test(r.domain))throw TypeError(`option domain is invalid`);o+=`; Domain=`+r.domain}if(r.path){if(!Sa.test(r.path))throw TypeError(`option path is invalid`);o+=`; Path=`+r.path}if(r.expires){if(!function(e){return Object.prototype.toString.call(e)===`[object Date]`||e instanceof Date}(r.expires)||isNaN(r.expires.valueOf()))throw TypeError(`option expires is invalid`);o+=`; Expires=`+r.expires.toUTCString()}if(r.httpOnly&&(o+=`; HttpOnly`),r.secure&&(o+=`; Secure`),r.priority)switch(typeof r.priority==`string`?r.priority.toLowerCase():r.priority){case`low`:o+=`; Priority=Low`;break;case`medium`:o+=`; Priority=Medium`;break;case`high`:o+=`; Priority=High`;break;default:throw TypeError(`option priority is invalid`)}if(r.sameSite)switch(typeof r.sameSite==`string`?r.sameSite.toLowerCase():r.sameSite){case!0:o+=`; SameSite=Strict`;break;case`lax`:o+=`; SameSite=Lax`;break;case`strict`:o+=`; SameSite=Strict`;break;case`none`:o+=`; SameSite=None`;break;default:throw TypeError(`option sameSite is invalid`)}return o}function Ta(e){return e.indexOf(`%`)===-1?e:decodeURIComponent(e)}function Ea(e){return encodeURIComponent(e)}var Da=typeof navigator<`u`&&navigator.product===`ReactNative`||typeof global<`u`&&global.HermesInternal,Oa;function ka(e){if(e)try{let t=decodeURIComponent(Oa(e.split(`.`)[1]).split(``).map((function(e){return`%`+(`00`+e.charCodeAt(0).toString(16)).slice(-2)})).join(``));return JSON.parse(t)||{}}catch{}return{}}function Aa(e,t=0){let n=ka(e);return!(Object.keys(n).length>0&&(!n.exp||n.exp-t>Date.now()/1e3))}Oa=typeof atob!=`function`||Da?e=>{let t=String(e).replace(/=+$/,``);if(t.length%4==1)throw Error(`'atob' failed: The string to be decoded is not correctly encoded.`);for(var n,r,i=0,a=0,o=``;r=t.charAt(a++);~r&&(n=i%4?64*n+r:r,i++%4)&&(o+=String.fromCharCode(255&n>>(-2*i&6))))r=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`.indexOf(r);return o}:atob;var ja=`pb_auth`,Ma=class{constructor(){this.baseToken=``,this.baseModel=null,this._onChangeCallbacks=[]}get token(){return this.baseToken}get record(){return this.baseModel}get model(){return this.baseModel}get isValid(){return!Aa(this.token)}get isSuperuser(){let e=ka(this.token);return e.type==`auth`&&(this.record?.collectionName==`_superusers`||!this.record?.collectionName&&e.collectionId==`pbc_3142635823`)}get isAdmin(){return console.warn(`Please replace pb.authStore.isAdmin with pb.authStore.isSuperuser OR simply check the value of pb.authStore.record?.collectionName`),this.isSuperuser}get isAuthRecord(){return console.warn(`Please replace pb.authStore.isAuthRecord with !pb.authStore.isSuperuser OR simply check the value of pb.authStore.record?.collectionName`),ka(this.token).type==`auth`&&!this.isSuperuser}save(e,t){this.baseToken=e||``,this.baseModel=t||null,this.triggerChange()}clear(){this.baseToken=``,this.baseModel=null,this.triggerChange()}loadFromCookie(e,t=ja){let n=Ca(e||``)[t]||``,r={};try{r=JSON.parse(n),(typeof r!=`object`||Array.isArray(r))&&(r={})}catch{}this.save(r.token||``,r.record||r.model||null)}exportToCookie(e,t=ja){let n={secure:!0,sameSite:!0,httpOnly:!0,path:`/`},r=ka(this.token);n.expires=r?.exp?new Date(1e3*r.exp):new Date(`1970-01-01`),e=Object.assign({},n,e);let i={token:this.token,record:this.record?JSON.parse(JSON.stringify(this.record)):null},a=wa(t,JSON.stringify(i),e),o=typeof Blob<`u`?new Blob([a]).size:a.length;if(i.record&&o>4096){i.record={id:i.record?.id,email:i.record?.email};let n=[`collectionId`,`collectionName`,`verified`];for(let e in this.record)n.includes(e)&&(i.record[e]=this.record[e]);a=wa(t,JSON.stringify(i),e)}return a}onChange(e,t=!1){return this._onChangeCallbacks.push(e),t&&e(this.token,this.record),()=>{for(let t=this._onChangeCallbacks.length-1;t>=0;t--)if(this._onChangeCallbacks[t]==e)return delete this._onChangeCallbacks[t],void this._onChangeCallbacks.splice(t,1)}}triggerChange(){for(let e of this._onChangeCallbacks)e&&e(this.token,this.record)}},Na=class extends Ma{constructor(e=`pocketbase_auth`){super(),this.storageFallback={},this.storageKey=e,this._bindStorageEvent()}get token(){return(this._storageGet(this.storageKey)||{}).token||``}get record(){let e=this._storageGet(this.storageKey)||{};return e.record||e.model||null}get model(){return this.record}save(e,t){this._storageSet(this.storageKey,{token:e,record:t}),super.save(e,t)}clear(){this._storageRemove(this.storageKey),super.clear()}_storageGet(e){if(typeof window<`u`&&window?.localStorage){let t=window.localStorage.getItem(e)||``;try{return JSON.parse(t)}catch{return t}}return this.storageFallback[e]}_storageSet(e,t){if(typeof window<`u`&&window?.localStorage){let n=t;typeof t!=`string`&&(n=JSON.stringify(t)),window.localStorage.setItem(e,n)}else this.storageFallback[e]=t}_storageRemove(e){typeof window<`u`&&window?.localStorage&&window.localStorage?.removeItem(e),delete this.storageFallback[e]}_bindStorageEvent(){typeof window<`u`&&window?.localStorage&&window.addEventListener&&window.addEventListener(`storage`,(e=>{if(e.key!=this.storageKey)return;let t=this._storageGet(this.storageKey)||{};super.save(t.token||``,t.record||t.model||null)}))}},Pa=class{constructor(e){this.client=e}},Fa=class extends Pa{async getAll(e){return e=Object.assign({method:`GET`},e),this.client.send(`/api/settings`,e)}async update(e,t){return t=Object.assign({method:`PATCH`,body:e},t),this.client.send(`/api/settings`,t)}async testS3(e=`storage`,t){return t=Object.assign({method:`POST`,body:{filesystem:e}},t),this.client.send(`/api/settings/test/s3`,t).then((()=>!0))}async testEmail(e,t,n,r){return r=Object.assign({method:`POST`,body:{email:t,template:n,collection:e}},r),this.client.send(`/api/settings/test/email`,r).then((()=>!0))}async generateAppleClientSecret(e,t,n,r,i,a){return a=Object.assign({method:`POST`,body:{clientId:e,teamId:t,keyId:n,privateKey:r,duration:i}},a),this.client.send(`/api/settings/apple/generate-client-secret`,a)}},Ia=[`requestKey`,`$cancelKey`,`$autoCancel`,`fetch`,`headers`,`body`,`query`,`params`,`cache`,`credentials`,`headers`,`integrity`,`keepalive`,`method`,`mode`,`redirect`,`referrer`,`referrerPolicy`,`signal`,`window`];function La(e){if(e)for(let t in e.query=e.query||{},e)Ia.includes(t)||(e.query[t]=e[t],delete e[t])}function Ra(e){let t=[];for(let n in e){let r=encodeURIComponent(n),i=Array.isArray(e[n])?e[n]:[e[n]];for(let e of i)e=za(e),e!==null&&t.push(r+`=`+e)}return t.join(`&`)}function za(e){return e==null?null:e instanceof Date?encodeURIComponent(e.toISOString().replace(`T`,` `)):typeof e==`object`?encodeURIComponent(JSON.stringify(e)):encodeURIComponent(e)}var Ba=class extends Pa{constructor(){super(...arguments),this.clientId=``,this.eventSource=null,this.subscriptions={},this.lastSentSubscriptions=[],this.maxConnectTimeout=15e3,this.reconnectAttempts=0,this.maxReconnectAttempts=1/0,this.predefinedReconnectIntervals=[200,300,500,1e3,1200,1500,2e3],this.pendingConnects=[]}get isConnected(){return!!this.eventSource&&!!this.clientId&&!this.pendingConnects.length}async subscribe(e,t,n){if(!e)throw Error(`topic must be set.`);let r=e;if(n){La(n=Object.assign({},n));let e=`options=`+encodeURIComponent(JSON.stringify({query:n.query,headers:n.headers}));r+=(r.includes(`?`)?`&`:`?`)+e}let i=function(e){let n=e,r;try{r=JSON.parse(n?.data)}catch{}t(r||{})};return this.subscriptions[r]||(this.subscriptions[r]=[]),this.subscriptions[r].push(i),this.isConnected?this.subscriptions[r].length===1?await this.submitSubscriptions():this.eventSource?.addEventListener(r,i):await this.connect(),async()=>this.unsubscribeByTopicAndListener(e,i)}async unsubscribe(e){let t=!1;if(e){let n=this.getSubscriptionsByTopic(e);for(let e in n)if(this.hasSubscriptionListeners(e)){for(let t of this.subscriptions[e])this.eventSource?.removeEventListener(e,t);delete this.subscriptions[e],t||=!0}}else this.subscriptions={};this.hasSubscriptionListeners()?t&&await this.submitSubscriptions():this.disconnect()}async unsubscribeByPrefix(e){let t=!1;for(let n in this.subscriptions)if((n+`?`).startsWith(e)){t=!0;for(let e of this.subscriptions[n])this.eventSource?.removeEventListener(n,e);delete this.subscriptions[n]}t&&(this.hasSubscriptionListeners()?await this.submitSubscriptions():this.disconnect())}async unsubscribeByTopicAndListener(e,t){let n=!1,r=this.getSubscriptionsByTopic(e);for(let e in r){if(!Array.isArray(this.subscriptions[e])||!this.subscriptions[e].length)continue;let r=!1;for(let n=this.subscriptions[e].length-1;n>=0;n--)this.subscriptions[e][n]===t&&(r=!0,delete this.subscriptions[e][n],this.subscriptions[e].splice(n,1),this.eventSource?.removeEventListener(e,t));r&&(this.subscriptions[e].length||delete this.subscriptions[e],n||this.hasSubscriptionListeners(e)||(n=!0))}this.hasSubscriptionListeners()?n&&await this.submitSubscriptions():this.disconnect()}hasSubscriptionListeners(e){if(this.subscriptions=this.subscriptions||{},e)return!!this.subscriptions[e]?.length;for(let e in this.subscriptions)if(this.subscriptions[e]?.length)return!0;return!1}async submitSubscriptions(){if(this.clientId)return this.addAllSubscriptionListeners(),this.lastSentSubscriptions=this.getNonEmptySubscriptionKeys(),this.client.send(`/api/realtime`,{method:`POST`,body:{clientId:this.clientId,subscriptions:this.lastSentSubscriptions},requestKey:this.getSubscriptionsCancelKey()}).catch((e=>{if(!e?.isAbort)throw e}))}getSubscriptionsCancelKey(){return`realtime_`+this.clientId}getSubscriptionsByTopic(e){let t={};for(let n in e=e.includes(`?`)?e:e+`?`,this.subscriptions)(n+`?`).startsWith(e)&&(t[n]=this.subscriptions[n]);return t}getNonEmptySubscriptionKeys(){let e=[];for(let t in this.subscriptions)this.subscriptions[t].length&&e.push(t);return e}addAllSubscriptionListeners(){if(this.eventSource)for(let e in this.removeAllSubscriptionListeners(),this.subscriptions)for(let t of this.subscriptions[e])this.eventSource.addEventListener(e,t)}removeAllSubscriptionListeners(){if(this.eventSource)for(let e in this.subscriptions)for(let t of this.subscriptions[e])this.eventSource.removeEventListener(e,t)}async connect(){if(!(this.reconnectAttempts>0))return new Promise(((e,t)=>{this.pendingConnects.push({resolve:e,reject:t}),this.pendingConnects.length>1||this.initConnect()}))}initConnect(){this.disconnect(!0),clearTimeout(this.connectTimeoutId),this.connectTimeoutId=setTimeout((()=>{this.connectErrorHandler(Error(`EventSource connect took too long.`))}),this.maxConnectTimeout),this.eventSource=new EventSource(this.client.buildURL(`/api/realtime`)),this.eventSource.onerror=e=>{this.connectErrorHandler(Error(`Failed to establish realtime connection.`))},this.eventSource.addEventListener(`PB_CONNECT`,(e=>{this.clientId=e?.lastEventId,this.submitSubscriptions().then((async()=>{let e=3;for(;this.hasUnsentSubscriptions()&&e>0;)e--,await this.submitSubscriptions()})).then((()=>{for(let e of this.pendingConnects)e.resolve();this.pendingConnects=[],this.reconnectAttempts=0,clearTimeout(this.reconnectTimeoutId),clearTimeout(this.connectTimeoutId);let t=this.getSubscriptionsByTopic(`PB_CONNECT`);for(let n in t)for(let r of t[n])r(e)})).catch((e=>{this.clientId=``,this.connectErrorHandler(e)}))}))}hasUnsentSubscriptions(){let e=this.getNonEmptySubscriptionKeys();if(e.length!=this.lastSentSubscriptions.length)return!0;for(let t of e)if(!this.lastSentSubscriptions.includes(t))return!0;return!1}connectErrorHandler(e){if(clearTimeout(this.connectTimeoutId),clearTimeout(this.reconnectTimeoutId),!this.clientId&&!this.reconnectAttempts||this.reconnectAttempts>this.maxReconnectAttempts){for(let t of this.pendingConnects)t.reject(new xa(e));this.pendingConnects=[],this.disconnect();return}this.disconnect(!0);let t=this.predefinedReconnectIntervals[this.reconnectAttempts]||this.predefinedReconnectIntervals[this.predefinedReconnectIntervals.length-1];this.reconnectAttempts++,this.reconnectTimeoutId=setTimeout((()=>{this.initConnect()}),t)}disconnect(e=!1){if(this.clientId&&this.onDisconnect&&this.onDisconnect(Object.keys(this.subscriptions)),clearTimeout(this.connectTimeoutId),clearTimeout(this.reconnectTimeoutId),this.removeAllSubscriptionListeners(),this.client.cancelRequest(this.getSubscriptionsCancelKey()),this.eventSource?.close(),this.eventSource=null,this.clientId=``,!e){this.reconnectAttempts=0;for(let e of this.pendingConnects)e.resolve();this.pendingConnects=[]}}},Va=class extends Pa{decode(e){return e}async getFullList(e,t){if(typeof e==`number`)return this._getFullList(e,t);let n=500;return(t=Object.assign({},e,t)).batch&&(n=t.batch,delete t.batch),this._getFullList(n,t)}async getList(e=1,t=30,n){return(n=Object.assign({method:`GET`},n)).query=Object.assign({page:e,perPage:t},n.query),this.client.send(this.baseCrudPath,n).then((e=>(e.items=e.items?.map((e=>this.decode(e)))||[],e)))}async getFirstListItem(e,t){return(t=Object.assign({requestKey:`one_by_filter_`+this.baseCrudPath+`_`+e},t)).query=Object.assign({filter:e,skipTotal:1},t.query),this.getList(1,1,t).then((e=>{if(!e?.items?.length)throw new xa({status:404,response:{code:404,message:`The requested resource wasn't found.`,data:{}}});return e.items[0]}))}async getOne(e,t){if(!e)throw new xa({url:this.client.buildURL(this.baseCrudPath+`/`),status:404,response:{code:404,message:`Missing required record id.`,data:{}}});return t=Object.assign({method:`GET`},t),this.client.send(this.baseCrudPath+`/`+encodeURIComponent(e),t).then((e=>this.decode(e)))}async create(e,t){return t=Object.assign({method:`POST`,body:e},t),this.client.send(this.baseCrudPath,t).then((e=>this.decode(e)))}async update(e,t,n){return n=Object.assign({method:`PATCH`,body:t},n),this.client.send(this.baseCrudPath+`/`+encodeURIComponent(e),n).then((e=>this.decode(e)))}async delete(e,t){return t=Object.assign({method:`DELETE`},t),this.client.send(this.baseCrudPath+`/`+encodeURIComponent(e),t).then((()=>!0))}_getFullList(e=500,t){(t||={}).query=Object.assign({skipTotal:1},t.query);let n=[],r=async i=>this.getList(i,e||500,t).then((e=>{let t=e.items;return n=n.concat(t),t.length==e.perPage?r(i+1):n}));return r(1)}};function Ha(e,t,n,r){let i=r!==void 0;return i||n!==void 0?i?(console.warn(e),t.body=Object.assign({},t.body,n),t.query=Object.assign({},t.query,r),t):Object.assign(t,n):t}function Ua(e){e._resetAutoRefresh?.()}var Wa=class extends Va{constructor(e,t){super(e),this.collectionIdOrName=t}get baseCrudPath(){return this.baseCollectionPath+`/records`}get baseCollectionPath(){return`/api/collections/`+encodeURIComponent(this.collectionIdOrName)}get isSuperusers(){return this.collectionIdOrName==`_superusers`||this.collectionIdOrName==`_pbc_2773867675`}async subscribe(e,t,n){if(!e)throw Error(`Missing topic.`);if(!t)throw Error(`Missing subscription callback.`);return this.client.realtime.subscribe(this.collectionIdOrName+`/`+e,t,n)}async unsubscribe(e){return e?this.client.realtime.unsubscribe(this.collectionIdOrName+`/`+e):this.client.realtime.unsubscribeByPrefix(this.collectionIdOrName)}async getFullList(e,t){if(typeof e==`number`)return super.getFullList(e,t);let n=Object.assign({},e,t);return super.getFullList(n)}async getList(e=1,t=30,n){return super.getList(e,t,n)}async getFirstListItem(e,t){return super.getFirstListItem(e,t)}async getOne(e,t){return super.getOne(e,t)}async create(e,t){return super.create(e,t)}async update(e,t,n){return super.update(e,t,n).then((e=>{if(this.client.authStore.record?.id===e?.id&&(this.client.authStore.record?.collectionId===this.collectionIdOrName||this.client.authStore.record?.collectionName===this.collectionIdOrName)){let t=Object.assign({},this.client.authStore.record.expand),n=Object.assign({},this.client.authStore.record,e);t&&(n.expand=Object.assign(t,e.expand)),this.client.authStore.save(this.client.authStore.token,n)}return e}))}async delete(e,t){return super.delete(e,t).then((t=>(!t||this.client.authStore.record?.id!==e||this.client.authStore.record?.collectionId!==this.collectionIdOrName&&this.client.authStore.record?.collectionName!==this.collectionIdOrName||this.client.authStore.clear(),t)))}authResponse(e){let t=this.decode(e?.record||{});return this.client.authStore.save(e?.token,t),Object.assign({},e,{token:e?.token||``,record:t})}async listAuthMethods(e){return e=Object.assign({method:`GET`,fields:`mfa,otp,password,oauth2`},e),this.client.send(this.baseCollectionPath+`/auth-methods`,e)}async authWithPassword(e,t,n){let r;n=Object.assign({method:`POST`,body:{identity:e,password:t}},n),this.isSuperusers&&(r=n.autoRefreshThreshold,delete n.autoRefreshThreshold,n.autoRefresh||Ua(this.client));let i=await this.client.send(this.baseCollectionPath+`/auth-with-password`,n);return i=this.authResponse(i),r&&this.isSuperusers&&function(e,t,n,r){Ua(e);let i=e.beforeSend,a=e.authStore.record,o=e.authStore.onChange(((t,n)=>{(!t||n?.id!=a?.id||(n?.collectionId||a?.collectionId)&&n?.collectionId!=a?.collectionId)&&Ua(e)}));e._resetAutoRefresh=function(){o(),e.beforeSend=i,delete e._resetAutoRefresh},e.beforeSend=async(a,o)=>{let s=e.authStore.token;if(o.query?.autoRefresh)return i?i(a,o):{url:a,sendOptions:o};let c=e.authStore.isValid;if(c&&Aa(e.authStore.token,t))try{await n()}catch{c=!1}c||await r();let l=o.headers||{};for(let t in l)if(t.toLowerCase()==`authorization`&&s==l[t]&&e.authStore.token){l[t]=e.authStore.token;break}return o.headers=l,i?i(a,o):{url:a,sendOptions:o}}}(this.client,r,(()=>this.authRefresh({autoRefresh:!0})),(()=>this.authWithPassword(e,t,Object.assign({autoRefresh:!0},n)))),i}async authWithOAuth2Code(e,t,n,r,i,a,o){let s={method:`POST`,body:{provider:e,code:t,codeVerifier:n,redirectURL:r,createData:i}};return s=Ha(`This form of authWithOAuth2Code(provider, code, codeVerifier, redirectURL, createData?, body?, query?) is deprecated. Consider replacing it with authWithOAuth2Code(provider, code, codeVerifier, redirectURL, createData?, options?).`,s,a,o),this.client.send(this.baseCollectionPath+`/auth-with-oauth2`,s).then((e=>this.authResponse(e)))}authWithOAuth2(...e){if(e.length>1||typeof e?.[0]==`string`)return console.warn(`PocketBase: This form of authWithOAuth2() is deprecated and may get removed in the future. Please replace with authWithOAuth2Code() OR use the authWithOAuth2() realtime form as shown in https://pocketbase.io/docs/authentication/#oauth2-integration.`),this.authWithOAuth2Code(e?.[0]||``,e?.[1]||``,e?.[2]||``,e?.[3]||``,e?.[4]||{},e?.[5]||{},e?.[6]||{});let t=e?.[0]||{},n=null;t.urlCallback||(n=Ga(void 0));let r=new Ba(this.client);function i(){n?.close(),r.unsubscribe()}let a={},o=t.requestKey;return o&&(a.requestKey=o),this.listAuthMethods(a).then((e=>{let a=e.oauth2.providers.find((e=>e.name===t.provider));if(!a)throw new xa(Error(`Missing or invalid provider "${t.provider}".`));let s=this.client.buildURL(`/api/oauth2-redirect`),c=o?this.client.cancelControllers?.[o]:void 0;return c&&(c.signal.onabort=()=>{i()}),new Promise((async(e,o)=>{try{await r.subscribe(`@oauth2`,(async n=>{let l=r.clientId;try{if(!n.state||l!==n.state)throw Error(`State parameters don't match.`);if(n.error||!n.code)throw Error(`OAuth2 redirect error or missing code: `+n.error);let r=Object.assign({},t);delete r.provider,delete r.scopes,delete r.createData,delete r.urlCallback,c?.signal?.onabort&&(c.signal.onabort=null);let i=await this.authWithOAuth2Code(a.name,n.code,a.codeVerifier,s,t.createData,r);e(i)}catch(e){o(new xa(e))}i()}));let l={state:r.clientId};t.scopes?.length&&(l.scope=t.scopes.join(` `));let u=this._replaceQueryParams(a.authURL+s,l);await(t.urlCallback||function(e){n?n.location.href=e:n=Ga(e)})(u)}catch(e){i(),o(new xa(e))}}))})).catch((e=>{throw i(),e}))}async authRefresh(e,t){let n={method:`POST`};return n=Ha(`This form of authRefresh(body?, query?) is deprecated. Consider replacing it with authRefresh(options?).`,n,e,t),this.client.send(this.baseCollectionPath+`/auth-refresh`,n).then((e=>this.authResponse(e)))}async requestPasswordReset(e,t,n){let r={method:`POST`,body:{email:e}};return r=Ha(`This form of requestPasswordReset(email, body?, query?) is deprecated. Consider replacing it with requestPasswordReset(email, options?).`,r,t,n),this.client.send(this.baseCollectionPath+`/request-password-reset`,r).then((()=>!0))}async confirmPasswordReset(e,t,n,r,i){let a={method:`POST`,body:{token:e,password:t,passwordConfirm:n}};return a=Ha(`This form of confirmPasswordReset(token, password, passwordConfirm, body?, query?) is deprecated. Consider replacing it with confirmPasswordReset(token, password, passwordConfirm, options?).`,a,r,i),this.client.send(this.baseCollectionPath+`/confirm-password-reset`,a).then((()=>!0))}async requestVerification(e,t,n){let r={method:`POST`,body:{email:e}};return r=Ha(`This form of requestVerification(email, body?, query?) is deprecated. Consider replacing it with requestVerification(email, options?).`,r,t,n),this.client.send(this.baseCollectionPath+`/request-verification`,r).then((()=>!0))}async confirmVerification(e,t,n){let r={method:`POST`,body:{token:e}};return r=Ha(`This form of confirmVerification(token, body?, query?) is deprecated. Consider replacing it with confirmVerification(token, options?).`,r,t,n),this.client.send(this.baseCollectionPath+`/confirm-verification`,r).then((()=>{let t=ka(e),n=this.client.authStore.record;return n&&!n.verified&&n.id===t.id&&n.collectionId===t.collectionId&&(n.verified=!0,this.client.authStore.save(this.client.authStore.token,n)),!0}))}async requestEmailChange(e,t,n){let r={method:`POST`,body:{newEmail:e}};return r=Ha(`This form of requestEmailChange(newEmail, body?, query?) is deprecated. Consider replacing it with requestEmailChange(newEmail, options?).`,r,t,n),this.client.send(this.baseCollectionPath+`/request-email-change`,r).then((()=>!0))}async confirmEmailChange(e,t,n,r){let i={method:`POST`,body:{token:e,password:t}};return i=Ha(`This form of confirmEmailChange(token, password, body?, query?) is deprecated. Consider replacing it with confirmEmailChange(token, password, options?).`,i,n,r),this.client.send(this.baseCollectionPath+`/confirm-email-change`,i).then((()=>{let t=ka(e),n=this.client.authStore.record;return n&&n.id===t.id&&n.collectionId===t.collectionId&&this.client.authStore.clear(),!0}))}async listExternalAuths(e,t){return this.client.collection(`_externalAuths`).getFullList(Object.assign({},t,{filter:this.client.filter(`recordRef = {:id}`,{id:e})}))}async unlinkExternalAuth(e,t,n){let r=await this.client.collection(`_externalAuths`).getFirstListItem(this.client.filter(`recordRef = {:recordId} && provider = {:provider}`,{recordId:e,provider:t}));return this.client.collection(`_externalAuths`).delete(r.id,n).then((()=>!0))}async requestOTP(e,t){return t=Object.assign({method:`POST`,body:{email:e}},t),this.client.send(this.baseCollectionPath+`/request-otp`,t)}async authWithOTP(e,t,n){return n=Object.assign({method:`POST`,body:{otpId:e,password:t}},n),this.client.send(this.baseCollectionPath+`/auth-with-otp`,n).then((e=>this.authResponse(e)))}async impersonate(e,t,n){(n=Object.assign({method:`POST`,body:{duration:t}},n)).headers=n.headers||{},n.headers.Authorization||(n.headers.Authorization=this.client.authStore.token);let r=new ao(this.client.baseURL,new Ma,this.client.lang),i=await r.send(this.baseCollectionPath+`/impersonate/`+encodeURIComponent(e),n);return r.authStore.save(i?.token,this.decode(i?.record||{})),r}_replaceQueryParams(e,t={}){let n=e,r=``;e.indexOf(`?`)>=0&&(n=e.substring(0,e.indexOf(`?`)),r=e.substring(e.indexOf(`?`)+1));let i={},a=r.split(`&`);for(let e of a){if(e==``)continue;let t=e.split(`=`);i[decodeURIComponent(t[0].replace(/\+/g,` `))]=decodeURIComponent((t[1]||``).replace(/\+/g,` `))}for(let e in t)t.hasOwnProperty(e)&&(t[e]==null?delete i[e]:i[e]=t[e]);for(let e in r=``,i)i.hasOwnProperty(e)&&(r!=``&&(r+=`&`),r+=encodeURIComponent(e.replace(/%20/g,`+`))+`=`+encodeURIComponent(i[e].replace(/%20/g,`+`)));return r==``?n:n+`?`+r}};function Ga(e){if(typeof window>`u`||!window?.open)throw new xa(Error(`Not in a browser context - please pass a custom urlCallback function.`));let t=1024,n=768,r=window.innerWidth,i=window.innerHeight;t=t>r?r:t,n=n>i?i:n;let a=r/2-t/2,o=i/2-n/2;return window.open(e,`popup_window`,`width=`+t+`,height=`+n+`,top=`+o+`,left=`+a+`,resizable,menubar=no`)}var Ka=class extends Va{get baseCrudPath(){return`/api/collections`}async import(e,t=!1,n){return n=Object.assign({method:`PUT`,body:{collections:e,deleteMissing:t}},n),this.client.send(this.baseCrudPath+`/import`,n).then((()=>!0))}async getScaffolds(e){return e=Object.assign({method:`GET`},e),this.client.send(this.baseCrudPath+`/meta/scaffolds`,e)}async truncate(e,t){return t=Object.assign({method:`DELETE`},t),this.client.send(this.baseCrudPath+`/`+encodeURIComponent(e)+`/truncate`,t).then((()=>!0))}},qa=class extends Pa{async getList(e=1,t=30,n){return(n=Object.assign({method:`GET`},n)).query=Object.assign({page:e,perPage:t},n.query),this.client.send(`/api/logs`,n)}async getOne(e,t){if(!e)throw new xa({url:this.client.buildURL(`/api/logs/`),status:404,response:{code:404,message:`Missing required log id.`,data:{}}});return t=Object.assign({method:`GET`},t),this.client.send(`/api/logs/`+encodeURIComponent(e),t)}async getStats(e){return e=Object.assign({method:`GET`},e),this.client.send(`/api/logs/stats`,e)}},Ja=class extends Pa{async check(e){return e=Object.assign({method:`GET`},e),this.client.send(`/api/health`,e)}},Ya=class extends Pa{getUrl(e,t,n={}){return console.warn(`Please replace pb.files.getUrl() with pb.files.getURL()`),this.getURL(e,t,n)}getURL(e,t,n={}){if(!t||!e?.id||!e?.collectionId&&!e?.collectionName)return``;let r=[];r.push(`api`),r.push(`files`),r.push(encodeURIComponent(e.collectionId||e.collectionName)),r.push(encodeURIComponent(e.id)),r.push(encodeURIComponent(t));let i=this.client.buildURL(r.join(`/`));if(Object.keys(n).length){!1===n.download&&delete n.download;let e=new URLSearchParams(n);i+=(i.includes(`?`)?`&`:`?`)+e}return i}async getToken(e){return e=Object.assign({method:`POST`},e),this.client.send(`/api/files/token`,e).then((e=>e?.token||``))}},Xa=class extends Pa{async getFullList(e){return e=Object.assign({method:`GET`},e),this.client.send(`/api/backups`,e)}async create(e,t){return t=Object.assign({method:`POST`,body:{name:e}},t),this.client.send(`/api/backups`,t).then((()=>!0))}async upload(e,t){return t=Object.assign({method:`POST`,body:e},t),this.client.send(`/api/backups/upload`,t).then((()=>!0))}async delete(e,t){return t=Object.assign({method:`DELETE`},t),this.client.send(`/api/backups/${encodeURIComponent(e)}`,t).then((()=>!0))}async restore(e,t){return t=Object.assign({method:`POST`},t),this.client.send(`/api/backups/${encodeURIComponent(e)}/restore`,t).then((()=>!0))}getDownloadUrl(e,t){return console.warn(`Please replace pb.backups.getDownloadUrl() with pb.backups.getDownloadURL()`),this.getDownloadURL(e,t)}getDownloadURL(e,t){return this.client.buildURL(`/api/backups/${encodeURIComponent(t)}?token=${encodeURIComponent(e)}`)}},Za=class extends Pa{async getFullList(e){return e=Object.assign({method:`GET`},e),this.client.send(`/api/crons`,e)}async run(e,t){return t=Object.assign({method:`POST`},t),this.client.send(`/api/crons/${encodeURIComponent(e)}`,t).then((()=>!0))}};function Qa(e){return typeof Blob<`u`&&e instanceof Blob||typeof File<`u`&&e instanceof File||typeof e==`object`&&!!e&&e.uri&&(typeof navigator<`u`&&navigator.product===`ReactNative`||typeof global<`u`&&global.HermesInternal)}function $a(e){return e&&(e.constructor?.name===`FormData`||typeof FormData<`u`&&e instanceof FormData)}function eo(e){for(let t in e){let n=Array.isArray(e[t])?e[t]:[e[t]];for(let e of n)if(Qa(e))return!0}return!1}var to=/^[\-\.\d]+$/;function no(e){if(typeof e!=`string`)return e;if(e==`true`)return!0;if(e==`false`)return!1;if((e[0]===`-`||e[0]>=`0`&&e[0]<=`9`)&&to.test(e)){let t=+e;if(``+t===e)return t}return e}var ro=class extends Pa{constructor(){super(...arguments),this.requests=[],this.subs={}}collection(e){return this.subs[e]||(this.subs[e]=new io(this.requests,e)),this.subs[e]}async send(e){let t=new FormData,n=[];for(let e=0;e<this.requests.length;e++){let r=this.requests[e];if(n.push({method:r.method,url:r.url,headers:r.headers,body:r.json}),r.files)for(let n in r.files){let i=r.files[n]||[];for(let r of i)t.append(`requests.`+e+`.`+n,r)}}return t.append(`@jsonPayload`,JSON.stringify({requests:n})),e=Object.assign({method:`POST`,body:t},e),this.client.send(`/api/batch`,e)}},io=class{constructor(e,t){this.requests=[],this.requests=e,this.collectionIdOrName=t}upsert(e,t){t=Object.assign({body:e||{}},t);let n={method:`PUT`,url:`/api/collections/`+encodeURIComponent(this.collectionIdOrName)+`/records`};this.prepareRequest(n,t),this.requests.push(n)}create(e,t){t=Object.assign({body:e||{}},t);let n={method:`POST`,url:`/api/collections/`+encodeURIComponent(this.collectionIdOrName)+`/records`};this.prepareRequest(n,t),this.requests.push(n)}update(e,t,n){n=Object.assign({body:t||{}},n);let r={method:`PATCH`,url:`/api/collections/`+encodeURIComponent(this.collectionIdOrName)+`/records/`+encodeURIComponent(e)};this.prepareRequest(r,n),this.requests.push(r)}delete(e,t){t=Object.assign({},t);let n={method:`DELETE`,url:`/api/collections/`+encodeURIComponent(this.collectionIdOrName)+`/records/`+encodeURIComponent(e)};this.prepareRequest(n,t),this.requests.push(n)}prepareRequest(e,t){if(La(t),e.headers=t.headers,e.json={},e.files={},t.query!==void 0){let n=Ra(t.query);n&&(e.url+=(e.url.includes(`?`)?`&`:`?`)+n)}let n=t.body;for(let t in $a(n)&&(n=function(e){let t={};return e.forEach(((e,n)=>{if(n===`@jsonPayload`&&typeof e==`string`)try{let n=JSON.parse(e);Object.assign(t,n)}catch(e){console.warn(`@jsonPayload error:`,e)}else t[n]===void 0?t[n]=no(e):(Array.isArray(t[n])||(t[n]=[t[n]]),t[n].push(no(e)))})),t}(n)),n){let r=n[t];if(Qa(r))e.files[t]=e.files[t]||[],e.files[t].push(r);else if(Array.isArray(r)){let n=[],i=[];for(let e of r)Qa(e)?n.push(e):i.push(e);if(n.length>0&&n.length==r.length){e.files[t]=e.files[t]||[];for(let r of n)e.files[t].push(r)}else if(e.json[t]=i,n.length>0){let r=t;t.startsWith(`+`)||t.endsWith(`+`)||(r+=`+`),e.files[r]=e.files[r]||[];for(let t of n)e.files[r].push(t)}}else e.json[t]=r}}},ao=class{get baseUrl(){return this.baseURL}set baseUrl(e){this.baseURL=e}constructor(e=`/`,t,n=`en-US`){this.cancelControllers={},this.recordServices={},this.enableAutoCancellation=!0,this.baseURL=e,this.lang=n,t?this.authStore=t:typeof window<`u`&&window.Deno?this.authStore=new Ma:this.authStore=new Na,this.collections=new Ka(this),this.files=new Ya(this),this.logs=new qa(this),this.settings=new Fa(this),this.realtime=new Ba(this),this.health=new Ja(this),this.backups=new Xa(this),this.crons=new Za(this)}get admins(){return this.collection(`_superusers`)}createBatch(){return new ro(this)}collection(e){return this.recordServices[e]||(this.recordServices[e]=new Wa(this,e)),this.recordServices[e]}autoCancellation(e){return this.enableAutoCancellation=!!e,this}cancelRequest(e){return this.cancelControllers[e]&&(this.cancelControllers[e].abort(),delete this.cancelControllers[e]),this}cancelAllRequests(){for(let e in this.cancelControllers)this.cancelControllers[e].abort();return this.cancelControllers={},this}filter(e,t){if(!t)return e;for(let n in t){let r=t[n];switch(typeof r){case`boolean`:case`number`:r=``+r;break;case`string`:r=`'`+r.replace(/'/g,`\\'`)+`'`;break;default:r=r===null?`null`:r instanceof Date?`'`+r.toISOString().replace(`T`,` `)+`'`:`'`+JSON.stringify(r).replace(/'/g,`\\'`)+`'`}e=e.replaceAll(`{:`+n+`}`,r)}return e}getFileUrl(e,t,n={}){return console.warn(`Please replace pb.getFileUrl() with pb.files.getURL()`),this.files.getURL(e,t,n)}buildUrl(e){return console.warn(`Please replace pb.buildUrl() with pb.buildURL()`),this.buildURL(e)}buildURL(e){let t=this.baseURL;return typeof window>`u`||!window.location||t.startsWith(`https://`)||t.startsWith(`http://`)||(t=window.location.origin?.endsWith(`/`)?window.location.origin.substring(0,window.location.origin.length-1):window.location.origin||``,this.baseURL.startsWith(`/`)||(t+=window.location.pathname||`/`,t+=t.endsWith(`/`)?``:`/`),t+=this.baseURL),e&&(t+=t.endsWith(`/`)?``:`/`,t+=e.startsWith(`/`)?e.substring(1):e),t}async send(e,t){t=this.initSendOptions(e,t);let n=this.buildURL(e);if(this.beforeSend){let e=Object.assign({},await this.beforeSend(n,t));e.url!==void 0||e.options!==void 0?(n=e.url||n,t=e.options||t):Object.keys(e).length&&(t=e,console?.warn&&console.warn("Deprecated format of beforeSend return: please use `return { url, options }`, instead of `return options`."))}if(t.query!==void 0){let e=Ra(t.query);e&&(n+=(n.includes(`?`)?`&`:`?`)+e),delete t.query}return this.getHeader(t.headers,`Content-Type`)==`application/json`&&t.body&&typeof t.body!=`string`&&(t.body=JSON.stringify(t.body)),(t.fetch||fetch)(n,t).then((async e=>{let n={};try{n=await e.json()}catch{}if(this.afterSend&&(n=await this.afterSend(e,n,t)),e.status>=400)throw new xa({url:e.url,status:e.status,data:n});return n})).catch((e=>{throw new xa(e)}))}initSendOptions(e,t){if((t=Object.assign({method:`GET`},t)).body=function(e){if(typeof FormData>`u`||e===void 0||typeof e!=`object`||!e||$a(e)||!eo(e))return e;let t=new FormData;for(let n in e){let r=e[n];if(r!==void 0)if(typeof r!=`object`||eo({data:r})){let e=Array.isArray(r)?r:[r];for(let r of e)t.append(n,r)}else{let e={};e[n]=r,t.append(`@jsonPayload`,JSON.stringify(e))}}return t}(t.body),La(t),t.query=Object.assign({},t.params,t.query),t.requestKey===void 0&&(!1===t.$autoCancel||!1===t.query.$autoCancel?t.requestKey=null:(t.$cancelKey||t.query.$cancelKey)&&(t.requestKey=t.$cancelKey||t.query.$cancelKey)),delete t.$autoCancel,delete t.query.$autoCancel,delete t.$cancelKey,delete t.query.$cancelKey,this.getHeader(t.headers,`Content-Type`)!==null||$a(t.body)||(t.headers=Object.assign({},t.headers,{"Content-Type":`application/json`})),this.getHeader(t.headers,`Accept-Language`)===null&&(t.headers=Object.assign({},t.headers,{"Accept-Language":this.lang})),this.authStore.token&&this.getHeader(t.headers,`Authorization`)===null&&(t.headers=Object.assign({},t.headers,{Authorization:this.authStore.token})),this.enableAutoCancellation&&t.requestKey!==null){let n=t.requestKey||(t.method||`GET`)+e;delete t.requestKey,this.cancelRequest(n);let r=new AbortController;this.cancelControllers[n]=r,t.signal=r.signal}return t}getHeader(e,t){for(let n in e||={},t=t.toLowerCase(),e)if(n.toLowerCase()==t)return e[n];return null}};je();function oo(e,t){if(e instanceof RegExp)return{keys:!1,pattern:e};var n,r,i,a,o=[],s=``,c=e.split(`/`);for(c[0]||c.shift();i=c.shift();)n=i[0],n===`*`?(o.push(`wild`),s+=`/(.*)`):n===`:`?(r=i.indexOf(`?`,1),a=i.indexOf(`.`,1),o.push(i.substring(1,~r?r:~a?a:i.length)),s+=~r&&!~a?`(?:/([^/]+?))?`:`/([^/]+?)`,~a&&(s+=(~r?`?`:``)+`\\`+i.substring(a))):s+=`/`+i;return{keys:o,pattern:RegExp(`^`+s+(t?`(?=$|/)`:`/?$`),`i`)}}function so(){let e=window.location.href.indexOf(`#/`),t=e>-1?window.location.href.substr(e+1):`/`,n=t.indexOf(`?`),r=``;return n>-1&&(r=t.substr(n+1),t=t.substr(0,n)),{location:t,querystring:r}}const co=Ni(null,function(e){e(so());let t=()=>{e(so())};return window.addEventListener(`hashchange`,t,!1),function(){window.removeEventListener(`hashchange`,t,!1)}}),lo=Fi(co,e=>e.location);Fi(co,e=>e.querystring);const uo=Pi(void 0);async function fo(e){if(!e||e.length<1||e.charAt(0)!=`/`&&e.indexOf(`#/`)!==0)throw Error(`Invalid parameter location`);await qn(),history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=(e.charAt(0)==`#`?``:`#`)+e}async function po(e){if(!e||e.length<1||e.charAt(0)!=`/`&&e.indexOf(`#/`)!==0)throw Error(`Invalid parameter location`);await qn();let t=(e.charAt(0)==`#`?``:`#`)+e;try{let e={...history.state};delete e.__svelte_spa_router_scrollX,delete e.__svelte_spa_router_scrollY,window.history.replaceState(e,void 0,t)}catch{console.warn("Caught exception while replacing the current page. If you're running this in the Svelte REPL, please note that the `replace` method might not work in this environment.")}window.dispatchEvent(new Event(`hashchange`))}function mo(e){e?window.scrollTo(e.__svelte_spa_router_scrollX,e.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function ho(e,t){k(t,!1);let n=Wi(t,`routes`,24,()=>({})),r=Wi(t,`prefix`,8,``),i=Wi(t,`restoreScrollState`,8,!1);class a{constructor(e,t){if(!t||typeof t!=`function`&&(typeof t!=`object`||t._sveltesparouter!==!0))throw Error(`Invalid component object`);if(!e||typeof e==`string`&&(e.length<1||e.charAt(0)!=`/`&&e.charAt(0)!=`*`)||typeof e==`object`&&!(e instanceof RegExp))throw Error(`Invalid value for "path" argument - strings must start with / or *`);let{pattern:n,keys:r}=oo(e);this.path=e,typeof t==`object`&&t._sveltesparouter===!0?(this.component=t.component,this.conditions=t.conditions||[],this.userData=t.userData,this.props=t.props||{}):(this.component=()=>Promise.resolve(t),this.conditions=[],this.props={}),this._pattern=n,this._keys=r}match(e){if(r()){if(typeof r()==`string`)if(e.startsWith(r()))e=e.substr(r().length)||`/`;else return null;else if(r()instanceof RegExp){let t=e.match(r());if(t&&t[0])e=e.substr(t[0].length)||`/`;else return null}}let t=this._pattern.exec(e);if(t===null)return null;if(this._keys===!1)return t;let n={},i=0;for(;i<this._keys.length;){try{n[this._keys[i]]=decodeURIComponent(t[i+1]||``)||null}catch{n[this._keys[i]]=null}i++}return n}async checkConditions(e){for(let t=0;t<this.conditions.length;t++)if(!await this.conditions[t](e))return!1;return!0}}let o=[];n()instanceof Map?n().forEach((e,t)=>{o.push(new a(t,e))}):Object.keys(n()).forEach(e=>{o.push(new a(e,n()[e]))});let s=Ct(null),c=Ct(null),l=Ct({}),u=Ji();async function d(e,t){await qn(),u(e,t)}let f=null,p=null;i()&&(p=e=>{f=e.state&&(e.state.__svelte_spa_router_scrollY||e.state.__svelte_spa_router_scrollX)?e.state:null},window.addEventListener(`popstate`,p),Yi(()=>{mo(f)}));let m=null,h=null,g=co.subscribe(async e=>{m=e;let t=0;for(;t<o.length;){let n=o[t].match(e.location);if(!n){t++;continue}let r={route:o[t].path,location:e.location,querystring:e.querystring,userData:o[t].userData,params:n&&typeof n==`object`&&Object.keys(n).length?n:null};if(!await o[t].checkConditions(r)){M(s,null),h=null,d(`conditionsFailed`,r);return}d(`routeLoading`,Object.assign({},r));let i=o[t].component;if(h!=i){i.loading?(M(s,i.loading),h=i,M(c,i.loadingParams),M(l,{}),d(`routeLoaded`,Object.assign({},r,{component:z(s),name:z(s).name,params:z(c)}))):(M(s,null),h=null);let t=await i();if(e!=m)return;M(s,t&&t.default||t),h=i}n&&typeof n==`object`&&Object.keys(n).length?M(c,n):M(c,null),M(l,o[t].props),d(`routeLoaded`,Object.assign({},r,{component:z(s),name:z(s).name,params:z(c)})).then(()=>{uo.set(z(c))});return}M(s,null),h=null,uo.set(void 0)});Ki(()=>{g(),p&&window.removeEventListener(`popstate`,p)}),rn(()=>Qn(i()),()=>{history.scrollRestoration=i()?`manual`:`auto`}),an(),Di();var _=V(),v=P(_),y=e=>{var n=V(),r=P(n);Rr(r,()=>z(s),(e,n)=>{n(e,q({get params(){return z(c)}},()=>z(l),{$$events:{routeEvent(e){Ai.call(this,t,e)}}}))}),H(e,n)},b=e=>{var n=V(),r=P(n);Rr(r,()=>z(s),(e,n)=>{n(e,q(()=>z(l),{$$events:{routeEvent(e){Ai.call(this,t,e)}}}))}),H(e,n)};Dr(v,e=>{z(c)?e(y):e(b,!1)}),H(e,_),A()}var go=e=>e;function _o(e){let t=e-1;return t*t*t+1}function vo(e){let t=typeof e==`string`&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||`px`]:[e,`px`]}function yo(e,{delay:t=0,duration:n=400,easing:r=go}={}){let i=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:r,css:e=>`opacity: ${e*i}`}}function bo(e,{delay:t=0,duration:n=400,easing:r=_o,x:i=0,y:a=0,opacity:o=0}={}){let s=getComputedStyle(e),c=+s.opacity,l=s.transform===`none`?``:s.transform,u=c*(1-o),[d,f]=vo(i),[p,m]=vo(a);return{delay:t,duration:n,easing:r,css:(e,t)=>`
			transform: ${l} translate(${(1-e)*d}${f}, ${(1-e)*p}${m});
			opacity: ${c-u*t}`}}function xo(e,{delay:t=0,duration:n=400,easing:r=_o,axis:i=`y`}={}){let a=getComputedStyle(e),o=+a.opacity,s=i===`y`?`height`:`width`,c=parseFloat(a[s]),l=i===`y`?[`top`,`bottom`]:[`left`,`right`],u=l.map(e=>`${e[0].toUpperCase()}${e.slice(1)}`),d=parseFloat(a[`padding${u[0]}`]),f=parseFloat(a[`padding${u[1]}`]),p=parseFloat(a[`margin${u[0]}`]),m=parseFloat(a[`margin${u[1]}`]),h=parseFloat(a[`border${u[0]}Width`]),g=parseFloat(a[`border${u[1]}Width`]);return{delay:t,duration:n,easing:r,css:e=>`overflow: hidden;opacity: ${Math.min(e*20,1)*o};${s}: ${e*c}px;padding-${l[0]}: ${e*d}px;padding-${l[1]}: ${e*f}px;margin-${l[0]}: ${e*p}px;margin-${l[1]}: ${e*m}px;border-${l[0]}-width: ${e*h}px;border-${l[1]}-width: ${e*g}px;min-${s}: 0`}}var So=(e,t)=>t(-1),Co=(e,t)=>t(1),wo=(e,t,n)=>{t(z(n))},To=B(`<button class="invis svelte-iqhn23">Select</button>`),Eo=B(`<label><p class="svelte-iqhn23"> </p></label> <!>`,1),Do=B(`<div class="calRow svelte-iqhn23"></div>`),Oo=B(`<div class="main svelte-iqhn23"><div class="topRow svelte-iqhn23"><div class="monthSelector svelte-iqhn23"><label class="arrowPicker svelte-iqhn23" for="leftMonth"><!></label> <button id="leftMonth" class="invis svelte-iqhn23">Go Left</button> <p class="svelte-iqhn23"> </p> <label class="arrowPicker svelte-iqhn23" for="rightMonth"><!></label> <button id="rightMonth" class="invis svelte-iqhn23">Go Right</button></div> <div class="yearSelector svelte-iqhn23"><input type="text" class="svelte-iqhn23"/></div></div> <div class="calendar svelte-iqhn23"><!></div></div>`);function ko(e,t){k(t,!1);let n=Wi(t,`month`,12),r=Wi(t,`year`,12),i=Wi(t,`date`,12),a=(e,t)=>new Date(t,e+1,0).getDate(),o=(e,t)=>{let n=a(e,t),r=s(e,t),i=Math.ceil((r+n)/7),o=i*7-(r+n),c=[];for(let e=0;e<r;e++)c.push(-1);for(let e=0;e<n;e++)c.push(e+1);for(let e=0;e<o;e++)c.push(-1);return{rows:i,data:c}},s=(e,t)=>new Date(t,e,1).getDay(),c=e=>{i(1),n((12+n()+e)%12)},l=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`];Di();var u=Oo(),d=N(u),f=N(d),p=N(f),m=N(p);ra(m,{size:22}),D(p);var h=F(p,2);h.__click=[So,c];var g=F(h,2),_=N(g,!0);D(g);var v=F(g,2),y=N(v);ia(y,{size:22}),D(v);var b=F(v,2);b.__click=[Co,c],D(f);var x=F(f,2),S=N(x);ai(S),D(x),D(d);var C=F(d,2),ee=N(C),te=e=>{let t=ht(()=>(Qn(n()),Qn(r()),Yn(()=>o(n(),r()))));var a=V(),s=P(a);Mr(s,1,()=>(Qn(z(t)),Yn(()=>({length:z(t).rows}))),Ar,(e,n,r)=>{var a=Do();Mr(a,4,()=>({length:7}),Ar,(e,n,a,o)=>{let s=ht(()=>(Qn(z(t)),Yn(()=>z(t).data[r*7+a])));var c=Eo(),l=P(c),u=N(l),d=N(u,!0);D(u),D(l);var f=F(l,2),p=e=>{var t=To();t.__click=[wo,i,s],I(()=>G(t,`id`,`select${z(s)??``}`)),H(e,t)};Dr(f,e=>{z(s)!=-1&&e(p)}),I(()=>{Yr(l,1,`date ${z(s)==-1?``:`selectable`}`,`svelte-iqhn23`),Zr(l,i()==z(s)?`background-color: var(--main-color);`:``),G(l,`for`,`select${z(s)??``}`),Zr(u,z(s)==-1?`opacity: 0.5;`:``),U(d,z(s)==-1?`-`:z(s))}),H(e,c)}),D(a),H(e,a)}),H(e,a)};Dr(ee,e=>{n()!=null&&r()!=null&&e(te)}),D(C),D(u),I(()=>U(_,(Qn(n()),Yn(()=>l[n()])))),Si(S,r),bi(3,u,()=>xo,()=>({duration:$.animations?500:0})),H(e,u),A()}pr([`click`]);var Ao=(e,t)=>t(-1),jo=(e,t)=>t(1),Mo=(e,t)=>t(-15),No=(e,t)=>t(15),Po=B(`<div class="timePicker svelte-1ea1iw"><label class="arrowPicker svelte-1ea1iw"><!></label> <p class="svelte-1ea1iw"> </p> <label class="arrowPicker svelte-1ea1iw"><!></label> <button class="invis">Left Hour</button> <button class="invis">Right Hour</button> <p class="svelte-1ea1iw">:</p> <label class="arrowPicker svelte-1ea1iw"><!></label> <p class="svelte-1ea1iw"> </p> <label class="arrowPicker svelte-1ea1iw"><!></label> <button class="invis">Left Min</button> <button class="invis">Right Min</button></div>`);function Fo(e,t){k(t,!1);let n=Wi(t,`minutes`,12),r=Wi(t,`hours`,12),i=Wi(t,`id`,8),a=e=>{r((24+r()+e)%24)},o=e=>{n((60+n()+e)%60)};Di();var s=Po(),c=N(s),l=N(c);ra(l,{size:22}),D(c);var u=F(c,2),d=N(u,!0);D(u);var f=F(u,2),p=N(f);ia(p,{size:22}),D(f);var m=F(f,2);m.__click=[Ao,a];var h=F(m,2);h.__click=[jo,a];var g=F(h,4),_=N(g);ra(_,{size:22}),D(g);var v=F(g,2),y=N(v,!0);D(v);var b=F(v,2),x=N(b);ia(x,{size:22}),D(b);var S=F(b,2);S.__click=[Mo,o];var C=F(S,2);C.__click=[No,o],D(s),I(()=>{G(c,`for`,`leftStartHour${i()??``}`),U(d,r()<10?`0${r()}`:r()),G(f,`for`,`rightStartHour${i()??``}`),G(m,`id`,`leftStartHour${i()??``}`),G(h,`id`,`rightStartHour${i()??``}`),G(g,`for`,`leftStartMin${i()??``}`),U(y,n()<10?`0${n()}`:n()),G(b,`for`,`rightStartMin${i()??``}`),G(S,`id`,`leftStartMin${i()??``}`),G(C,`id`,`rightStartMin${i()??``}`)}),bi(3,s,()=>xo,()=>({duration:$.animations?250:0})),H(e,s),A()}pr([`click`]);var Io=B(`<label class="item svelte-xd7gyz"> </label> <button class="invis svelte-xd7gyz">Select Pack</button>`,1),Lo=(e,t)=>{M(t,!0),setTimeout(()=>{M(t,!1)},5e3)},Ro=B(`<button class="nextButton svelte-xd7gyz" id="check"><!> Delete</button>`),zo=B(`<button class="nextButton svelte-xd7gyz" id="check"><!> You sure?</button>`),Bo=B(`<div class="main svelte-xd7gyz"><div class="headerRow svelte-xd7gyz"><h1 class="svelte-xd7gyz"> </h1></div> <div class="appointmentGroup svelte-xd7gyz"><div class="inputGroup svelte-xd7gyz"><div class="inputRow svelte-xd7gyz"><!> <input placeholder="Client Name..." class="svelte-xd7gyz"/></div> <div class="spacer svelte-xd7gyz"></div> <div class="inputRow svelte-xd7gyz"><!> <input id="type" placeholder="Appointment Type..." class="svelte-xd7gyz"/></div></div> <p class="invis svelte-xd7gyz">These should be dropdown scroll wheel type things</p> <div class="inputGroup svelte-xd7gyz"><div class="inputRow space svelte-xd7gyz"><!> <p class="idkText svelte-xd7gyz">Date</p> <label for="focus1" class="focusLabel svelte-xd7gyz"><p class="svelte-xd7gyz"> </p></label></div> <!> <div class="spacer svelte-xd7gyz"></div> <div class="inputRow svelte-xd7gyz"><!> <p class="idkText svelte-xd7gyz">Start Time</p> <label for="focus2" class="focusLabel svelte-xd7gyz"><p class="svelte-xd7gyz"> </p></label></div> <!> <div class="spacer svelte-xd7gyz"></div> <div class="inputRow svelte-xd7gyz"><!> <p class="idkText svelte-xd7gyz">End Time</p> <label for="focus3" class="focusLabel svelte-xd7gyz"><p class="svelte-xd7gyz"> </p></label></div> <!> <div class="spacer svelte-xd7gyz"></div> <div class="inputRow svelte-xd7gyz"><!> <p class="idkText svelte-xd7gyz">Technician</p> <label for="focus4" class="focusLabel svelte-xd7gyz"><p class="svelte-xd7gyz"> </p></label></div> <label class="dropDown svelte-xd7gyz"></label></div> <div class="inputGroup svelte-xd7gyz"><textarea placeholder="Additional Notes..." class="svelte-xd7gyz"></textarea></div> <div class="buttonRow svelte-xd7gyz"><!> <button class="nextButton svelte-xd7gyz"><!> Save</button></div></div></div>`);function Vo(e,t){k(t,!0),Gi(async()=>{await us()});let n=St(!1),r=e=>e%10==1&&e!=11?`st`:e%10==2&&e!=12?`nd`:e%10==3&&e!=13?`rd`:`th`,i=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],a=(e,t)=>{if($.clock24hr)return`${e}:${t<10?`0${t}`:t}`;if(e>=12){let n=e%12;return n==0&&(n=12),`${n}:${t<10?`0${t}`:t} PM`}else{let n=e%12;return n==0&&(n=12),`${n}:${t<10?`0${t}`:t} AM`}},o=()=>{let e=Z.endHours*60+Z.endMinutes,t=Z.startHours*60+Z.startMinutes;return e-t},s=async()=>{let e=o();if(e<0){ts(`fail`,`You cannot set an appointment to end before it starts`,5e3,la);return}let t=`${Z.year}-${Z.month+1<10?`0${Z.month+1}`:Z.month+1}-${Z.date<10?`0${Z.date}`:Z.date} ${Z.startHours<10?`0${Z.startHours}`:Z.startHours}:${Z.startMinutes<10?`0${Z.startMinutes}`:Z.startMinutes}:00.123Z`;console.log(t);let n={startTime:t,duration:e,type:Z.type,clientName:Z.clientName,notes:Z.notes,tech:Z.tech};try{await ns.collection(`appointments`).update(Z.id,n);let e=new Date;Z.clientName=``,Z.date=e.getDate(),Z.month=e.getMonth(),Z.notes=``,Z.type=``,Z.year=e.getFullYear(),ts(`success`,`Appointment Updated!`,5e3,na),po(`/`)}catch{ts(`fail`,`Something went wrong... Try again later`,5e3,la)}},c=async()=>{try{await ns.collection(`appointments`).delete(Z.id);let e=new Date;Z.clientName=``,Z.date=e.getDate(),Z.month=e.getMonth(),Z.notes=``,Z.type=``,Z.year=e.getFullYear(),ts(`success`,`Appointment Deleted!`,5e3,na),await ss(),po(`/`)}catch{ts(`fail`,`Something went wrong... Try again later`,5e3,la)}};var l=Bo(),u=N(l),d=N(u),f=N(d,!0);D(d),D(u);var p=F(u,2),m=N(p),h=N(m),g=N(h);ba(g,{size:20});var _=F(g,2);ai(_),D(h);var v=F(h,4),y=N(v);da(y,{size:20});var b=F(y,2);ai(b),D(v),D(m);var x=F(m,4),S=N(x),C=N(S);ta(C,{size:20});var ee=F(C,4),te=N(ee),ne=N(te);D(te),D(ee),D(S);var re=F(S,2);ko(re,{get year(){return Z.year},set year(e){Z.year=e},get month(){return Z.month},set month(e){Z.month=e},get date(){return Z.date},set date(e){Z.date=e}});var w=F(re,4),ie=N(w);oa(ie,{size:20});var ae=F(ie,4),oe=N(ae),se=N(oe,!0);D(oe),D(ae),D(w);var ce=F(w,2);Fo(ce,{id:`pihudfgs`,get minutes(){return Z.startMinutes},set minutes(e){Z.startMinutes=e},get hours(){return Z.startHours},set hours(e){Z.startHours=e}});var le=F(ce,4),ue=N(le);sa(ue,{size:20});var de=F(ue,4),fe=N(de),pe=N(fe,!0);D(fe),D(de),D(le);var me=F(le,2);Fo(me,{id:`poihadfgiunsdf`,get minutes(){return Z.endMinutes},set minutes(e){Z.endMinutes=e},get hours(){return Z.endHours},set hours(e){Z.endHours=e}});var he=F(me,4),ge=N(he);ba(ge,{size:20});var _e=F(ge,4),ve=N(_e),ye=N(ve,!0);D(ve),D(_e),D(he);var be=F(he,2);Mr(be,21,()=>Y.technicians,Ar,(e,t,n)=>{var r=Io(),i=P(r);G(i,`for`,`s${n}`);var a=N(i,!0);D(i);var o=F(i,2);G(o,`id`,`s${n}`),o.__click=()=>{Z.tech=z(t).name},I(()=>U(a,z(t).name)),H(e,r)}),D(be),D(x);var T=F(x,2),xe=N(T);Ht(xe),D(T);var E=F(T,2),Se=N(E),Ce=e=>{var t=Ro();t.__click=[Lo,n];var r=N(t);ya(r,{size:20}),we(),D(t),H(e,t)},Te=e=>{var t=zo();t.__click=c;var n=N(t);ya(n,{size:20}),we(),D(t),H(e,t)};Dr(Se,e=>{z(n)?e(Te,!1):e(Ce)});var Ee=F(Se,2);Ee.__click=s;var De=N(Ee);aa(De,{size:20}),we(),D(Ee),D(E),D(p),D(l),I((e,t,n)=>{U(f,Z.clientName),U(ne,`${i[Z.month]??``} ${Z.date??``}${e??``}. ${Z.year??``}`),U(se,t),U(pe,n),U(ye,Z.tech)},[()=>r(Z.date),()=>a(Z.startHours,Z.startMinutes),()=>a(Z.endHours,Z.endMinutes)]),Si(_,()=>Z.clientName,e=>Z.clientName=e),Si(b,()=>Z.type,e=>Z.type=e),bi(3,be,()=>xo,()=>({duration:$.animations?250:0})),Si(xe,()=>Z.notes,e=>Z.notes=e),H(e,l),A()}pr([`click`]);let Y=Ot({sidebarToggle:!1,appointments:[],technicians:[],focusAppt:null});var Ho=new Date;let X=Ot({clientName:``,type:``,date:Ho.getDate(),month:Ho.getMonth(),year:Ho.getFullYear(),notes:``,startHours:12,startMinutes:0,endHours:12,endMinutes:45,technician:``}),Z=Ot({clientName:``,type:``,startHours:12,startMinutes:0,endHours:12,endMinutes:45,date:Ho.getDate(),month:Ho.getMonth(),year:Ho.getFullYear(),notes:``,tech:``,id:``}),Uo=e=>{Z.clientName=e.clientName,Z.type=e.type,Z.startHours=Math.floor(e.time/60),Z.startMinutes=e.time%60,Z.endHours=Math.floor((e.time+e.duration)/60),Z.endMinutes=(e.time+e.duration)%60,Z.date=e.date,Z.month=e.month,Z.year=e.year,Z.notes=e.notes,Z.id=e.id,Z.tech=e.tech,po(`/apptView`)},Q=Ot({name:`Default`,headerColor:`#f8f8f8`,textColor:`#c9c9c9`,mainColor:`#018d6c`,lightMainColor:`#00ad85ff`,dimMainColor:`#006e55ff`,grayColor:`#2f2f2f`,inputColor:`#006e5580`,bgColor:`#0f0f0f`,lightBgColor:`#181818`,lighterBgColor:`#232323`,lightestBgColor:`#2e2e2e`,fail:`#a52100`,index:0});const Wo=[{name:`Default`,type:`dark`,headerColor:`#f8f8f8`,textColor:`#c9c9c9`,mainColor:`#018d6c`,lightMainColor:`#00ad85ff`,dimMainColor:`#006e55ff`,grayColor:`#2f2f2f`,inputColor:`#006e5580`,bgColor:`#0f0f0f`,lightBgColor:`#181818`,lighterBgColor:`#232323`,lightestBgColor:`#2e2e2e`,fail:`#a52100`},{name:`Matcha`,type:`dark`,headerColor:`#e1e6f8ff`,textColor:`#cdd6f4`,mainColor:`#60995aff`,lightMainColor:`#7cca76ff`,dimMainColor:`#53884eff`,grayColor:`#313244`,inputColor:`#53884e80`,bgColor:`#1e1e2e`,lightBgColor:`#242436ff`,lighterBgColor:`#2e2e46ff`,lightestBgColor:`#393957ff`,fail:`#df6174ff`},{name:`Ocean`,type:`dark`,headerColor:`#f0f2fdff`,textColor:`#e3e7ffff`,mainColor:`#5966d6ff`,lightMainColor:`#7482f2ff`,dimMainColor:`#4a56b3ff`,grayColor:`#2e2f44ff`,inputColor:`#4a56b380`,bgColor:`#191a2c`,lightBgColor:`#202136ff`,lighterBgColor:`#2b2c46ff`,lightestBgColor:`#383a5eff`,fail:`#d94f5cff`},{name:`Sunset`,type:`dark`,headerColor:`#fffdfbff`,textColor:`#ffeedd`,mainColor:`#ff7f50ff`,lightMainColor:`#ff9e70ff`,dimMainColor:`#e36b44ff`,grayColor:`#403b3dff`,inputColor:`#e36b4480`,bgColor:`#1b1b24`,lightBgColor:`#232330ff`,lighterBgColor:`#2d2d3bff`,lightestBgColor:`#3f3f57ff`,fail:`#bb0a0aff`},{name:`Regal`,type:`dark`,headerColor:`#e9e1f8ff`,textColor:`#d5cdeaff`,mainColor:`#a678dfff`,lightMainColor:`#c29cf2ff`,dimMainColor:`#8a5fd1ff`,grayColor:`#343046ff`,inputColor:`#8a5fd180`,bgColor:`#1d1a26ff`,lightBgColor:`#242032ff`,lighterBgColor:`#2b263fff`,lightestBgColor:`#332e4cff`,fail:`#df6174ff`},{name:`Forest`,type:`dark`,headerColor:`#e4f2e1ff`,textColor:`#d2e8d0ff`,mainColor:`#5aa469ff`,lightMainColor:`#74c282ff`,dimMainColor:`#4b8f59ff`,grayColor:`#2f3b33ff`,inputColor:`#5aa46980`,bgColor:`#1c241eff`,lightBgColor:`#232c25ff`,lighterBgColor:`#29352dff`,lightestBgColor:`#313f37ff`,fail:`#df6174ff`},{name:`Light`,type:`light`,headerColor:`#020202`,textColor:`#080808`,mainColor:`#018d6c`,lightMainColor:`#00ad85`,dimMainColor:`#006e55`,grayColor:`#2f2f2f`,inputColor:`#006e5580`,bgColor:`#f8f8f8`,lightBgColor:`#e8e8e8`,lighterBgColor:`#dedede`,lightestBgColor:`#d1d1d1ff`,fail:`#a52100`},{name:`Sandstone`,type:`light`,headerColor:`#1d1b18ff`,textColor:`#2d2925`,mainColor:`#d2a679ff`,lightMainColor:`#e6bf95ff`,dimMainColor:`#b8906aff`,grayColor:`#dad4cfff`,inputColor:`#b8906a80`,bgColor:`#fdfaf6`,lightBgColor:`#f6f0ebff`,lighterBgColor:`#ece2daff`,lightestBgColor:`#d3b59fff`,fail:`#ff0000ff`},{name:`Skyline`,type:`light`,headerColor:`#0a1a2fff`,textColor:`#14213d`,mainColor:`#0077b6`,lightMainColor:`#00b4d8`,dimMainColor:`#005f8a`,grayColor:`#b0c4de`,inputColor:`#0077b680`,bgColor:`#d6dce2ff`,lightBgColor:`#beccd6ff`,lighterBgColor:`#99afc2ff`,lightestBgColor:`#8fb2c9ff`,fail:`#d62828ff`},{name:`Peach`,type:`light`,headerColor:`#3d0c02ff`,textColor:`#432818`,mainColor:`#f9844a`,lightMainColor:`#f6aa1c`,dimMainColor:`#e36414`,grayColor:`#c9b5aaff`,inputColor:`#e3641480`,bgColor:`#fff5ec`,lightBgColor:`#ffebd8`,lighterBgColor:`#fde2c8`,lightestBgColor:`#f9d8b6`,fail:`#db0028ff`},{name:`Mint`,type:`light`,headerColor:`#1a2e1aff`,textColor:`#243424`,mainColor:`#5bb98c`,lightMainColor:`#84d9ab`,dimMainColor:`#449970`,grayColor:`#cfd8d3ff`,inputColor:`#5bb98c80`,bgColor:`#f4fff9`,lightBgColor:`#e7f8ef`,lighterBgColor:`#d9efe4`,lightestBgColor:`#cce6d8`,fail:`#d81e1eff`}];var Go=`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-=!@#$%^&*()_+\`~,./<>?;':"[]{}\\|`;const Ko=()=>{let e=``;for(let t=0;t<10;t++)e+=Go[Zo(0,94)];return e};let $=Ot({clock24hr:!1,animations:!0,notifications:!0});const qo=()=>{let e={clock24hr:$.clock24hr,animations:$.animations,notifications:$.notifications,colorIndex:Q.index};localStorage.setItem(`settings`,JSON.stringify(e))},Jo=async()=>{let e=JSON.parse(await localStorage.getItem(`settings`));if(e==null){console.log(`No Settings :(`);return}$.clock24hr=e.clock24hr,$.animations=e.animations,$.notifications=e.notifications,Q.index=e.colorIndex,Yo(Wo[e.colorIndex],Q.index)},Yo=(e,t)=>{Q.name=e.name,Q.headerColor=e.headerColor,Q.textColor=e.textColor,Q.mainColor=e.mainColor,Q.lightMainColor=e.lightMainColor,Q.dimMainColor=e.dimMainColor,Q.grayColor=e.grayColor,Q.inputColor=e.inputColor,Q.bgColor=e.bgColor,Q.lightBgColor=e.lightBgColor,Q.lighterBgColor=e.lighterBgColor,Q.lightestBgColor=e.lightestBgColor,Q.fail=e.fail,Q.index=t,qo()},Xo=e=>{let t=Math.floor(Math.random()*e.length);return e[t]},Zo=(e,t)=>Math.floor(Math.random()*(t-e+1)+e),Qo=e=>{let t=(new Date(e.year,e.month,e.date,Math.floor(e.time/60),e.time%60)-new Date)/6e4,n=t/1440,r=t/60,i=t%60;return t+e.duration<0?`Done`:n>=1?Math.floor(n)==1?`In 1 Day`:`In ${Math.floor(n)} Days`:r>=1?Math.ceil(r)==1?i>1?`In ${Math.floor(r)} Hour, ${Math.floor(i)} Minutes`:Math.ceil(i)==1?`In ${Math.floor(r)} Hour, 1 Minute`:`In ${Math.floor(r)} Hour`:i>1?`In ${Math.floor(r)} Hours, ${Math.floor(i)} Minutes`:Math.ceil(i)==1?`In ${Math.floor(r)} Hours, 1 Minute`:`In ${Math.floor(r)} Hours`:i>0?i>2?`In ${Math.ceil(i)} Minutes`:`In ${Math.ceil(i)} Minute`:`For ${Math.floor(i+e.duration)} More Minutes`};let $o=Ot([]);const es=e=>{let t=$o.indexOf(e);$o.splice(t,1)},ts=(e,t,n,r)=>{if(!$.notifications)return;let i={type:e,content:t,icon:r,id:Ko()};$o.push(i),setTimeout(()=>{es(i)},n)},ns=new ao(`https://georgeeggers.xyz`);var rs=(e,t,n)=>new Date(n,e-1,t).getDay();const os=async()=>{for(let e of Y.appointments)e.timeUntil==`Done`&&await ns.collection(`appointments`).delete(e.id);ts(`success`,`Expired appointments deleted!`,5e3,na),await ss()},ss=async()=>{Y.appointments.length=0,await ls();for(let e of Y.appointments)e.timeUntil=Qo(e)},cs=e=>{let[t,n]=e.startTime.split(` `),[r,i,a]=t.split(`-`),[o,s,c]=n.split(`:`),l=parseInt(o)*60+parseInt(s);return{clientName:e.clientName,type:e.type,time:l,day:rs(i,a,r),date:parseInt(a),month:parseInt(i)-1,year:parseInt(r),duration:e.duration,timeUntil:``,notes:e.notes,tech:e.tech,id:e.id}},ls=async()=>{let e=await ns.collection(`appointments`).getFullList({sort:`-created`});for(let t of e)Y.appointments.push(cs(t))},us=async()=>{Y.technicians.length=0;let e=await ns.collection(`technicians`).getFullList();for(let t of e)Y.technicians.push(t)};var ds=B(`<div class="headerRow svelte-l9fi92"><h1>Upcoming</h1></div>`),fs=B(`<div class="error"><h1> <!></h1> <p>No appointments listed. Try refreshing, or scheduling a new appointment</p></div>`),ps=B(`<label for="deleteDone" class="deleteButton svelte-l9fi92"><!> <p class="svelte-l9fi92">Delete Completed Appointments</p></label> <button class="invis" id="deleteDone">Delete Done</button>`,1),ms=B(`<div class="item svelte-l9fi92"><p style="font-size: 16px;" class="svelte-l9fi92"> </p></div>`),hs=(e,t)=>Uo(z(t)),gs=B(`<label class="appointment svelte-l9fi92"><div class="appointmentHeader svelte-l9fi92"><h1 class="svelte-l9fi92"><!> </h1> <h1 class="svelte-l9fi92"> </h1></div> <div class="info svelte-l9fi92"><div class="item svelte-l9fi92"><!> <p class="svelte-l9fi92"> </p></div> <div class="item svelte-l9fi92"><!> <p class="svelte-l9fi92"> </p></div> <div class="item svelte-l9fi92"><!> <p class="svelte-l9fi92"> </p></div> <div class="item svelte-l9fi92"><!> <p class="svelte-l9fi92"> </p></div> <!></div></label> <button class="invis"></button>`,1),_s=B(`<h1>No appointment matches your search</h1>`),vs=B(`<div class="search svelte-l9fi92"><!> <input type="text" placeholder="Search for appointment..." class="svelte-l9fi92"/></div> <!> <!>`,1),ys=B(`<div class="main svelte-l9fi92"><div class="mainContainer svelte-l9fi92"><!> <div class="upcoming svelte-l9fi92"><!></div></div></div>`);function bs(e,t){k(t,!0);let n=[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`],r=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],i=e=>e%10==1&&e!=11?`st`:e%10==2&&e!=12?`nd`:e%10==3&&e!=13?`rd`:`th`,a=e=>`${r[e.month]} ${e.date}${i(e.date)}, ${e.year}`,o=St(``),s=e=>{let t=e.clientName.toLowerCase(),i=e.type.toLowerCase(),a=n[e.day].toLowerCase(),s=r[e.month].toLowerCase(),c=e.notes,l=e.tech.toLowerCase();for(let e of z(o).split(` `).filter(Boolean)){let n=e.toLowerCase();if(!(t.includes(n)||i.includes(n)||a.includes(n)||s.includes(n)||c.includes(n)||l.includes(n)))return!1}return z(o),!0},c=mt(()=>Y.appointments.filter(e=>s(e)).toSorted((e,t)=>{let n=new Date(e.year,e.month,e.date,Math.floor(e.time/60),e.time%60),r=new Date(t.year,t.month,t.date,Math.floor(t.time/60),t.time%60),i=new Date,a=n-i,o=r-i;return a>o?1:a<o?-1:0})),l=e=>{let t=n[e.day]+` from `,r=Math.floor(e.time/60),i=e.time%60,a=Math.floor((e.time+e.duration)/60),o=(e.time+e.duration)%60;return $.clock24hr?(t+=`${r}:${i<10?`0${i}`:i} to `,t+=`${a}:${o<10?`0${o}`:o}`):(r>12&&(r-=12),a>12&&(a-=12),t+=`${r}:${i<10?`0${i}`:i} to `,t+=`${a}:${o<10?`0${o}`:o}`),t},u=mt(()=>{for(let e of Y.appointments)if(e.timeUntil==`Done`)return!0;return!1});var d=ys(),f=N(d),p=N(f),m=e=>{var t=ds();H(e,t)},h=e=>{var t=fs(),n=N(t),r=N(n),i=F(r);la(i,{size:30}),D(n),we(2),D(t),I(e=>U(r,`${e??``}... `),[()=>Xo([`Zoinks`,`Uh Oh`,`Yikes`,`Oops`,`Gee Whiz`,`Jinkies`,`Jeepers`])]),H(e,t)};Dr(p,e=>{Y.appointments.length==0?e(h,!1):e(m)});var g=F(p,2),_=N(g),v=e=>{var t=vs(),n=P(t),r=N(n);ga(r,{size:20});var i=F(r,2);ai(i),D(n);var s=F(n,2),d=e=>{var t=ps(),n=P(t),r=N(n);ya(r,{size:20}),we(2),D(n);var i=F(n,2);i.__click=function(...e){os?.apply(this,e)},H(e,t)};Dr(s,e=>{z(u)&&e(d)});var f=F(s,2),p=e=>{var t=V(),n=P(t);Mr(n,17,()=>z(c),Ar,(e,t,n)=>{var r=gs(),i=P(r);G(i,`for`,`view${n}`);var o=N(i),s=N(o),c=N(s);ba(c,{size:24});var u=F(c);D(s);var d=F(s,2),f=N(d,!0);D(d),D(o);var p=F(o,2),m=N(p),h=N(m);da(h,{size:18});var g=F(h,2),_=N(g,!0);D(g),D(m);var v=F(m,2),y=N(v);ca(y,{size:18});var b=F(y,2),x=N(b,!0);D(b),D(v);var S=F(v,2),C=N(S);$i(C,{size:18});var ee=F(C,2),te=N(ee,!0);D(ee),D(S);var ne=F(S,2),re=N(ne);ba(re,{size:18});var w=F(re,2),ie=N(w,!0);D(w),D(ne);var ae=F(ne,2),oe=e=>{var n=ms(),r=N(n),i=N(r,!0);D(r),D(n),I(()=>U(i,z(t).notes)),H(e,n)};Dr(ae,e=>{z(t).notes.length>=1&&e(oe)}),D(p),D(i);var se=F(i,2);se.__click=[hs,t],G(se,`id`,`view${n}`),se.textContent=`View ${n}`,I((e,n,r)=>{U(u,` ${z(t).clientName??``}`),Zr(d,e),U(f,z(t).timeUntil),U(_,z(t).type),U(x,n),U(te,r),U(ie,z(t).tech)},[()=>z(t).timeUntil.includes(`For`)?`color: var(--main-color);`:z(t).timeUntil==`Done`?`color: var(--fail-color);`:``,()=>l(z(t)),()=>a(z(t))]),H(e,r)}),H(e,t)},m=e=>{var t=_s();H(e,t)};Dr(f,e=>{z(c).length>0?e(p):e(m,!1)}),Si(i,()=>z(o),e=>M(o,e)),H(e,t)};Dr(_,e=>{Y.appointments.length!=0&&e(v)}),D(g),D(f),D(d),H(e,d),A()}pr([`click`]);var xs=ki(()=>$),Ss=B(`<div class="main svelte-1xel5aa"><div class="headerRow"><h1>Settings</h1></div> <div class="settingsMenu svelte-1xel5aa"><div class="row svelte-1xel5aa"><div class="text svelte-1xel5aa"><p class="header svelte-1xel5aa">24 Hour Times</p> <p class="content svelte-1xel5aa">Toggle the times to display in military time or standard time</p></div> <label for="toggleClock"><div></div></label> <button id="toggleClock" class="invis">Toggle 24HR Time</button></div> <div class="row svelte-1xel5aa"><div class="text svelte-1xel5aa"><p class="header svelte-1xel5aa">Animations</p> <p class="content svelte-1xel5aa">Controls animations across the app</p></div> <label for="toggleAnim"><div></div></label> <button id="toggleAnim" class="invis">Toggle Animations</button></div> <div class="row svelte-1xel5aa"><div class="text svelte-1xel5aa"><p class="header svelte-1xel5aa">Notifications</p> <p class="content svelte-1xel5aa">Controls all popup and push notifications</p></div> <label for="toggleNotif"><div></div></label> <button id="toggleNotif" class="invis">Toggle Notifications</button></div></div></div>`);function Cs(e,t){k(t,!1),Di();var n=Ss(),r=F(N(n),2),i=N(r),a=F(N(i),2),o=N(a);D(a);var s=F(a,2);s.__click=()=>{xs(xs().clock24hr=!xs().clock24hr),qo()},D(i);var c=F(i,2),l=F(N(c),2),u=N(l);D(l);var d=F(l,2);d.__click=()=>{xs(xs().animations=!xs().animations),qo()},D(c);var f=F(c,2),p=F(N(f),2),m=N(p);D(p);var h=F(p,2);h.__click=()=>{xs(xs().notifications=!xs().notifications),qo()},D(f),D(r),D(n),I(()=>{Yr(a,1,`toggle ${xs().animations?`anims`:``}`,`svelte-1xel5aa`),Zr(a,xs().clock24hr?`background-color: var(--main-color);`:`background-color: var(--lighter-bg-color);`),Yr(o,1,`toggleBody ${xs().animations?`anims`:``}`,`svelte-1xel5aa`),Zr(o,xs().clock24hr?`left: calc(100% - 25px);`:`left: 5px;`),Yr(l,1,`toggle ${xs().animations?`anims`:``}`,`svelte-1xel5aa`),Zr(l,xs().animations?`background-color: var(--main-color);`:`background-color: var(--lighter-bg-color);`),Yr(u,1,`toggleBody ${xs().animations?`anims`:``}`,`svelte-1xel5aa`),Zr(u,xs().animations?`left: calc(100% - 25px);`:`left: 5px;`),Yr(p,1,`toggle ${xs().animations?`anims`:``}`,`svelte-1xel5aa`),Zr(p,xs().notifications?`background-color: var(--main-color);`:`background-color: var(--lighter-bg-color);`),Yr(m,1,`toggleBody ${xs().animations?`anims`:``}`,`svelte-1xel5aa`),Zr(m,xs().notifications?`left: calc(100% - 25px);`:`left: 5px;`)}),H(e,n),A()}pr([`click`]);var ws=B(`<div class="calItem svelte-llck0d" style="min-height: 0px; padding-bottom: 20px; justify-content: center; display: flex;"><p style="font-weight: bold; font-size: 22px;" class="svelte-llck0d"> </p></div>`),Ts=B(`<div class="appt svelte-llck0d"><div class="dot svelte-llck0d"></div> <p class="text svelte-llck0d"> </p></div>`),Es=B(`<button class="invis svelte-llck0d"></button> <div class="calInfo svelte-llck0d" style="font-weight: bold;"><div class="infoDot svelte-llck0d"><p class="svelte-llck0d"> </p></div></div> <div class="calData svelte-llck0d"></div>`,1),Ds=B(`<label><!></label>`),Os=B(`<div class="calRow svelte-llck0d"></div>`),ks=B(`<div class="headerRow"><h1> </h1></div> <div class="calRow svelte-llck0d" style="border-top: none;"></div> <!>`,1),As=B(`<div class="calendar svelte-llck0d"></div>`),js=B(`<div class="main" id="bleh"><!> <div id="loadMore" class="svelte-llck0d"></div></div>`);function Ms(e,t){k(t,!0);let n=new Date,r=Ot(n.getFullYear()),i=Ot(n.getDate()),a=Ot(n.getMonth()),o=St(1),s=(e,t)=>new Date(t,e+1,0).getDate(),c=(e,t)=>new Date(t,e,1).getDay(),l=mt(()=>s(a,r)),u=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],d=Ot({data:[]}),f=St(null),p=St(!1);Gi(async()=>{await ss(),await m(a,r),new IntersectionObserver(e=>{e.forEach(e=>{M(p,e.isIntersecting,!0)})},{root:document.getElementById(`bleh`)}).observe(z(f))});let m=(e,t)=>{let n=[],r=c(e,t);for(let e=0;e<r;e++)n.push({date:-1,appt:[],display:!1});for(let r=0;r<s(e,t);r++)n.push({date:r+1,appt:[],display:!0});for(let i of Y.appointments)i.month==e&&i.year==t&&n[i.date-1+r].appt.push(i);let i=(z(l)+r)%7;for(let e=0;e<7-i;e++)n.push({date:-1,appt:[],display:!1});d.data.push(n)},h=St(!1);Qt(()=>{z(p)&&(z(h)||(M(h,!0),m((a+z(o))%12,r+Math.floor((z(o)+a)/12)),Tt(o),setTimeout(()=>{M(h,!1)},25)))});let g=(e,t,n)=>{console.log(`Focusing!`,e),Y.focusAppt=e,Y.focusAppt.month=t,Y.focusAppt.day=n,fo(`/calendar/focus`)};var _=js(),v=N(_),y=e=>{var t=As();Mr(t,21,()=>({length:z(o)}),Ar,(e,t,n)=>{var o=ks(),l=P(o),f=N(l),p=N(f);D(f),D(l);var m=F(l,2);Mr(m,20,()=>[`S`,`M`,`T`,`W`,`T`,`F`,`S`],Ar,(e,t)=>{var n=ws(),r=N(n),i=N(r,!0);D(r),D(n),I(()=>U(i,t)),H(e,n)}),D(m);var h=F(m,2);Mr(h,17,()=>({length:Math.ceil((s((a+n)%12,r+Math.floor((n+a)/12))+c((a+n)%12,r+Math.floor((n+a)/12)))/7)}),Ar,(e,t,r,o)=>{var s=Os();Mr(s,21,()=>d.data[n].slice(r*7,r*7+7),Ar,(e,t,o)=>{var s=Ds();G(s,`for`,`p${n}a${r}l${o}`);var c=N(s),l=e=>{var s=Es(),c=P(s);G(c,`id`,`p${n}a${r}l${o}`),c.__click=()=>g(z(t),(a+n)%12,o),c.textContent=`p${n}a${r}`;var l=F(c,2),u=N(l),d=N(u),f=N(d,!0);D(d),D(u),D(l);var p=F(l,2);Mr(p,21,()=>z(t).appt.toSorted((e,t)=>{let n=new Date(e.year,e.month,e.date,Math.floor(e.time/60),e.time%60),r=new Date(t.year,t.month,t.date,Math.floor(t.time/60),t.time%60),i=new Date,a=n-i,o=r-i;return a>o?1:a<o?-1:0}),Ar,(e,t)=>{var n=Ts(),r=N(n),i=F(r,2),a=N(i,!0);D(i),D(n),I(e=>{Zr(r,e),U(a,z(t).clientName)},[()=>z(t).timeUntil.includes(`For`)?`background-color: var(--main-color);`:z(t).timeUntil==`Done`?`background-color: var(--fail-color);`:``]),H(e,n)}),D(p),I(()=>{Zr(u,z(t).date==i&&n==0?`background-color: var(--main-color);`:``),U(f,z(t).date)}),H(e,s)};Dr(c,e=>{z(t).display&&e(l)}),D(s),I(()=>Yr(s,1,`calItem ${z(t).display?`highlight`:``}`,`svelte-llck0d`)),H(e,s)}),D(s),H(e,s)}),I(e=>U(p,`${u[(a+n)%12]??``} ${e??``}`),[()=>r+Math.floor((n+a)/12)]),H(e,o)}),D(t),H(e,t)};Dr(v,e=>{d.data.length!=0&&e(y)});var b=F(v,2);Ei(b,e=>M(f,e),()=>z(f)),D(_),H(e,_),A()}pr([`click`]);var Ns=()=>{$.notifications&&alert(`Printing may not work properly on mobile devices and certain browsers. Make sure you're on a computer and using chrome for best results.`),window.print()},Ps=async(e,t)=>{M(t,!0),await qn(),$.notifications&&alert(`Printing may not work properly on mobile devices and certain browsers. Make sure you're on a computer and using chrome for best results.`),window.print(),M(t,!1)},Fs=B(`<div class="timeBox svelte-1pa29vf"><h3 class="svelte-1pa29vf"> </h3></div>`),Is=(e,t,n,r)=>t(z(n).appt,z(r).name,z(n).start),Ls=B(`<div class="row svelte-1pa29vf"><p style="margin: 0px" class="svelte-1pa29vf"> </p></div>`),Rs=B(`<div class="row svelte-1pa29vf" style="min-height: 25px"></div>`),zs=B(`<div class="col svelte-1pa29vf"><div class="colHeader svelte-1pa29vf"><p class="svelte-1pa29vf"> </p></div> <!></div>`),Bs=B(`<div class="headerRow noPrint"><h1> </h1></div> <div class="control noPrint svelte-1pa29vf"><button class="noPrint nextButton svelte-1pa29vf"><!> Print</button> <button class="noPrint nextButton svelte-1pa29vf"><!> Print Blank Sheet</button></div> <div class="timeDisplay svelte-1pa29vf"><div class="timeRow svelte-1pa29vf"><div class="timeBox svelte-1pa29vf"></div> <!></div> <div class="apptArea svelte-1pa29vf"></div></div>`,1),Vs=B(`<div class="error"><h1> <!></h1> <p>Something went wrong... <a href="/#/">Go back</a> to the main page</p></div>`),Hs=B(`<div class="main" id="print"><!></div>`);function Us(e,t){k(t,!0);let n=e=>{let t=[],n=0,r=0;for(let i of e){let e=!0;for(let n of t)if(i.time>=n.time&&i.time<=n.time+n.maxSize+0){n.data.push(i),i.duration>n.maxSize&&(n.maxSize=i.duration),e=!1;break}e&&(i.time>n?r=0:r++,t.push({time:i.time,data:[i],offset:r,maxSize:i.duration})),i.time+i.duration>n&&(n=i.time+i.duration)}return t},r=mt(()=>n(Y.focusAppt.appt.toSorted((e,t)=>e.time<t.time?-1:e.time>t.time?1:0))),i=e=>e%10==1?`st`:e%10!=2&&e%10==3?`rd`:`th`,a=e=>{let t=``,n=Math.floor(e/60),r=e%60;return $.clock24hr||n>12&&(n-=12),t+=`${n}:${r<10?`0${r}`:r}`,t};Gi(async()=>{await us();let e=1e4;for(let t of z(r)){let n=t.time/1440*100;n<e&&(e=n)}});let o=e=>{let t=[];for(let e of Y.technicians){let n=[];for(let e=0;e<41;e++)n.push({size:1,appt:null,start:e*15});t.push({name:e.name,data:n})}for(let n of e.appt)for(let e of t)if(n.tech==e.name){let t=(n.time-570)/15,r=n.duration/15;e.data[t].appt=n,e.data[t].size=r,e.data.splice(t+1,r-1);break}return t},s=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],c=mt(()=>o(Y.focusAppt)),l=(e,t,n)=>{X.technician=t,X.date=Y.focusAppt.date,X.month=Y.focusAppt.month,X.startHours=Math.floor((n+570)/60),X.startMinutes=(n+570)%60,e==null?(X.endHours=Math.floor((n+570+45)/60),X.endMinutes=(n+570+45)%60,po(`/new`)):Uo(e)},u=St(!1);var d=Hs(),f=N(d),p=e=>{var t=Bs(),n=P(t),r=N(n),o=N(r);D(r),D(n);var d=F(n,2),f=N(d);f.__click=[Ns];var p=N(f);ha(p,{size:20}),we(),D(f);var m=F(f,2);m.__click=[Ps,u];var h=N(m);ha(h,{size:20}),we(),D(m),D(d);var g=F(d,2),_=N(g),v=F(N(_),2);Mr(v,16,()=>({length:41}),Ar,(e,t,n)=>{var r=Fs(),i=N(r),o=N(i,!0);D(i),D(r),I(e=>U(o,e),[()=>a(n*15+570)]),H(e,r)}),D(_);var y=F(_,2);Mr(y,21,()=>z(c),Ar,(e,t)=>{var n=zs(),r=N(n),i=N(r),a=N(i,!0);D(i),D(r);var o=F(r,2),s=e=>{var n=V(),r=P(n);Mr(r,17,()=>z(t).data,Ar,(e,n)=>{var r=Ls();r.__click=[Is,l,n,t];var i=N(r),a=N(i,!0);D(i),D(r),I(()=>{Zr(r,`min-height: ${z(n).size*25}px`),U(a,z(n).appt==null?``:z(n).appt.clientName)}),H(e,r)}),H(e,n)},c=e=>{var t=V(),n=P(t);Mr(n,16,()=>({length:41}),Ar,(e,t)=>{var n=Rs();H(e,n)}),H(e,t)};Dr(o,e=>{z(u)?e(c,!1):e(s)}),D(n),I(()=>U(a,z(t).name)),H(e,n)}),D(y),D(g),I(e=>U(o,`${s[Y.focusAppt.month]??``} ${Y.focusAppt.date??``}${e??``}`),[()=>i(Y.focusAppt.date)]),H(e,t)},m=e=>{var t=Vs(),n=N(t),r=N(n),i=F(r);la(i,{size:30}),D(n),we(2),D(t),I(e=>U(r,`${e??``}... `),[()=>Xo([`Zoinks`,`Uh Oh`,`Yikes`,`Oops`,`Gee Whiz`,`Jinkies`,`Jeepers`])]),H(e,t)};Dr(f,e=>{Y.focusAppt?e(p):e(m,!1)}),D(d),H(e,d),A()}pr([`click`]);var Ws=B(`<label><!> <div class="textContainer svelte-1trli7c"><p1 class="modelName"> </p1> <div class="inline svelte-1trli7c"><div class="styleExample svelte-1trli7c"></div> <div class="styleExample svelte-1trli7c"></div> <div class="styleExample svelte-1trli7c"></div> <div class="styleExample svelte-1trli7c"></div></div></div> <button class="invis">Load Theme</button></label>`),Gs=B(`<div class="main svelte-1trli7c"><div class="headerRow"><h1>Theme</h1></div> <div class="menu svelte-1trli7c"></div></div>`);function Ks(e,t){k(t,!1),Di();var n=Gs(),r=F(N(n),2);Mr(r,5,()=>Wo,Ar,(e,t,n)=>{var r=Ws();G(r,`for`,`chooseTheme${n}`);var i=N(r),a=e=>{va(e,{size:24})},o=e=>{pa(e,{size:24})};Dr(i,e=>{z(t).type==`light`?e(a):e(o,!1)});var s=F(i,2),c=N(s),l=N(c,!0);D(c);var u=F(c,2),d=N(u),f=F(d,2),p=F(f,2),m=F(p,2);D(u),D(s);var h=F(s,2);G(h,`id`,`chooseTheme${n}`),h.__click=()=>Yo(z(t),n),D(r),I(()=>{Yr(r,1,`modelCard themeCard ${Q.name==z(t).name?`selected`:``}`,`svelte-1trli7c`),U(l,z(t).name),Zr(d,`background-color: ${z(t).mainColor??``}; border: 2px solid ${z(t).textColor??``} !important;`),Zr(f,`background-color: ${z(t).dimMainColor??``}; border: 2px solid ${z(t).textColor??``} !important;`),Zr(p,`background-color: ${z(t).bgColor??``}; border: 2px solid ${z(t).textColor??``} !important;`),Zr(m,`background-color: ${z(t).inputColor??``}; border: 2px solid ${z(t).textColor??``} !important;`)}),H(e,r)}),D(r),D(n),H(e,n),A()}pr([`click`]);var qs=B(`<div class="main"><div class="error"><h1> <!></h1> <p>Page not found... <a href="/#/">Go back</a> to the main page</p></div></div>`);function Js(e,t){k(t,!1),Di();var n=qs(),r=N(n),i=N(r),a=N(i),o=F(a);la(o,{size:30}),D(i),we(2),D(r),D(n),I(e=>U(a,`${e??``}... `),[()=>Xo([`Zoinks`,`Uh Oh`,`Yikes`,`Oops`,`Gee Whiz`,`Jinkies`,`Jeepers`])]),H(e,n),A()}var Ys=(e,t)=>e.key===`Enter`&&t(`type`),Xs=(e,t)=>e.key===`Enter`&&t(1),Zs=(e,t)=>t(1),Qs=(e,t)=>t(2),$s=(e,t)=>t(3),ec=(e,t)=>t(4),tc=B(`<label class="item svelte-12d9voo"> </label> <button class="invis svelte-12d9voo">Select Pack</button>`,1),nc=B(`<label for="focus2"></label>`),rc=B(`<div class="main svelte-12d9voo"><div class="headerRow svelte-12d9voo"><h1 class="svelte-12d9voo">New Appointment</h1></div> <div class="appointmentGroup svelte-12d9voo"><div class="inputGroup svelte-12d9voo"><div class="inputRow svelte-12d9voo"><!> <input placeholder="Client Name..." class="svelte-12d9voo"/></div> <div class="spacer svelte-12d9voo"></div> <div class="inputRow svelte-12d9voo"><!> <input id="type" placeholder="Appointment Type..." class="svelte-12d9voo"/></div></div> <p class="invis svelte-12d9voo">These should be dropdown scroll wheel type things</p> <div class="inputGroup svelte-12d9voo"><div class="inputRow space svelte-12d9voo"><!> <p class="idkText svelte-12d9voo">Date</p> <label for="focus1" class="focusLabel svelte-12d9voo"><p class="svelte-12d9voo"> </p></label> <button class="invis svelte-12d9voo" id="focus1">Focus Calendar</button></div> <!> <div class="spacer svelte-12d9voo"></div> <div class="inputRow svelte-12d9voo"><!> <p class="idkText svelte-12d9voo">Start Time</p> <label for="focus2" class="focusLabel svelte-12d9voo"><p class="svelte-12d9voo"> </p></label> <button class="invis svelte-12d9voo" id="focus2">Focus Start Time</button></div> <!> <div class="spacer svelte-12d9voo"></div> <div class="inputRow svelte-12d9voo"><!> <p class="idkText svelte-12d9voo">End Time</p> <label for="focus3" class="focusLabel svelte-12d9voo"><p class="svelte-12d9voo"> </p></label> <button class="invis svelte-12d9voo" id="focus3">Focus End Time</button></div> <!> <div class="spacer svelte-12d9voo"></div> <div class="inputRow svelte-12d9voo"><!> <p class="idkText svelte-12d9voo">Technician</p> <label for="focus4" class="focusLabel svelte-12d9voo"><p class="svelte-12d9voo"> </p></label> <button class="invis svelte-12d9voo" id="focus4">Focus Technicians</button></div> <!></div> <div class="inputGroup svelte-12d9voo"><textarea placeholder="Additional Notes..." class="svelte-12d9voo"></textarea></div> <button class="nextButton svelte-12d9voo"><!> Add Appointment</button></div></div>`);function ic(e,t){k(t,!0);let n=St(-1);Gi(async()=>{await us()});let r=e=>e%10==1&&e!=11?`st`:e%10==2&&e!=12?`nd`:e%10==3&&e!=13?`rd`:`th`,i=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],a=e=>{document.getElementById(e).focus()},o=e=>{z(n)==e?M(n,-1):M(n,e,!0)},s=(e,t)=>{if($.clock24hr)return`${e}:${t<10?`0${t}`:t}`;if(e>=12){let n=e%12;return n==0&&(n=12),`${n}:${t<10?`0${t}`:t} PM`}else{let n=e%12;return n==0&&(n=12),`${n}:${t<10?`0${t}`:t} AM`}},c=()=>{let e=X.endHours*60+X.endMinutes,t=X.startHours*60+X.startMinutes;return e-t},l=async()=>{let e=c();if(e<0){ts(`fail`,`You cannot set an appointment to end before it starts`,5e3,la);return}let t=`${X.year}-${X.month+1<10?`0${X.month+1}`:X.month+1}-${X.date<10?`0${X.date}`:X.date} ${X.startHours<10?`0${X.startHours}`:X.startHours}:${X.startMinutes<10?`0${X.startMinutes}`:X.startMinutes}:00.123Z`;console.log(t);let n={startTime:t,duration:e,type:X.type,clientName:X.clientName,notes:X.notes,tech:X.technician};try{await ns.collection(`appointments`).create(n);let e=new Date;X.clientName=``,X.date=e.getDate(),X.month=e.getMonth(),X.notes=``,X.type=``,X.year=e.getFullYear(),X.startHours=12,X.startMinutes=0,X.endHours=12,X.endMinutes=45,ts(`success`,`Appointment created!`,5e3,na),po(`/`)}catch{ts(`fail`,`Something went wrong... Try again later`,5e3,la)}};var u=rc(),d=F(N(u),2),f=N(d),p=N(f),m=N(p);ba(m,{size:20});var h=F(m,2);ai(h),h.__keydown=[Ys,a],D(p);var g=F(p,4),_=N(g);da(_,{size:20});var v=F(_,2);ai(v),v.__keydown=[Xs,o],D(g),D(f);var y=F(f,4),b=N(y),x=N(b);ta(x,{size:20});var S=F(x,4),C=N(S),ee=N(C);D(C),D(S);var te=F(S,2);te.__click=[Zs,o],D(b);var ne=F(b,2),re=e=>{ko(e,{get year(){return X.year},set year(e){X.year=e},get month(){return X.month},set month(e){X.month=e},get date(){return X.date},set date(e){X.date=e}})};Dr(ne,e=>{z(n)==1&&e(re)});var w=F(ne,4),ie=N(w);oa(ie,{size:20});var ae=F(ie,4),oe=N(ae),se=N(oe,!0);D(oe),D(ae);var ce=F(ae,2);ce.__click=[Qs,o],D(w);var le=F(w,2),ue=e=>{Fo(e,{id:`pihudfgs`,get minutes(){return X.startMinutes},set minutes(e){X.startMinutes=e},get hours(){return X.startHours},set hours(e){X.startHours=e}})};Dr(le,e=>{z(n)==2&&e(ue)});var de=F(le,4),fe=N(de);sa(fe,{size:20});var pe=F(fe,4),me=N(pe),he=N(me,!0);D(me),D(pe);var ge=F(pe,2);ge.__click=[$s,o],D(de);var _e=F(de,2),ve=e=>{Fo(e,{id:`poihadfgiunsdf`,get minutes(){return X.endMinutes},set minutes(e){X.endMinutes=e},get hours(){return X.endHours},set hours(e){X.endHours=e}})};Dr(_e,e=>{z(n)==3&&e(ve)});var ye=F(_e,4),be=N(ye);ba(be,{size:20});var T=F(be,4),xe=N(T),E=N(xe,!0);D(xe),D(T);var Se=F(T,2);Se.__click=[ec,o],D(ye);var Ce=F(ye,2),Te=e=>{var t=nc();Mr(t,21,()=>Y.technicians,Ar,(e,t,n)=>{var r=tc(),i=P(r);G(i,`for`,`s${n}`);var a=N(i,!0);D(i);var o=F(i,2);G(o,`id`,`s${n}`),o.__click=()=>{X.technician=z(t).name},I(()=>U(a,z(t).name)),H(e,r)}),D(t),I(()=>Yr(t,1,`dropDown ${z(n)==4?`focused`:``}`,`svelte-12d9voo`)),bi(3,t,()=>xo,()=>({duration:$.animations?250:0})),H(e,t)};Dr(Ce,e=>{z(n)==4&&e(Te)}),D(y);var Ee=F(y,2),De=N(Ee);Ht(De),D(Ee);var Oe=F(Ee,2);Oe.__click=l;var ke=N(Oe);aa(ke,{size:20}),we(),D(Oe),D(d),D(u),I((e,t,n)=>{U(ee,`${i[X.month]??``} ${X.date??``}${e??``}. ${X.year??``}`),U(se,t),U(he,n),U(E,X.technician==``?`Select...`:X.technician)},[()=>r(X.date),()=>s(X.startHours,X.startMinutes),()=>s(X.endHours,X.endMinutes)]),Si(h,()=>X.clientName,e=>X.clientName=e),Si(v,()=>X.type,e=>X.type=e),Si(De,()=>X.notes,e=>X.notes=e),H(e,u),A()}pr([`keydown`,`click`]);var ac=async(e,t)=>{try{await ns.collection(`technicians`).create({name:z(t)}),ts(`success`,`Technician Added`,5e3,na),M(t,``)}catch{ts(`fail`,`Something went wrong!`,5e3,la)}},oc=(e,t,n)=>t(z(n)),sc=B(`<div class="focusLabel svelte-11sklj6"><p class="svelte-11sklj6"> </p> <button class="svelte-11sklj6"><!></button></div>`),cc=B(`<div class="main svelte-11sklj6"><div class="headerRow"><h1>Techs</h1></div> <div class="appointmentGroup svelte-11sklj6"><!> <div class="focusLabel svelte-11sklj6" style="background-color: var(--lighter-bg-color);"><input placeholder="New Technician..." class="svelte-11sklj6"/></div> <button class="nextButton svelte-11sklj6"><!> Add</button></div></div>`);function lc(e,t){k(t,!0);let n=async e=>{console.log(`deleting`);try{await ns.collection(`technicians`).delete(e.id)}catch{ts(`fail`,`Something went wrong!`,5e3,la)}};Gi(async()=>{await us()});let r=St(``);var i=cc(),a=F(N(i),2),o=N(a);Mr(o,17,()=>Y.technicians,Ar,(e,t)=>{var r=sc(),i=N(r),a=N(i,!0);D(i);var o=F(i,2);o.__click=[oc,n,t];var s=N(o);ya(s,{size:20}),D(o),D(r),I(()=>{U(a,z(t).name),Zr(o,$.animations?`transition: color .25s ease;`:``)}),H(e,r)});var s=F(o,2),c=N(s);ai(c),D(s);var l=F(s,2);l.__click=[ac,r];var u=N(l);aa(u,{size:20}),we(),D(l),D(a),D(i),Si(c,()=>z(r),e=>M(r,e)),H(e,i),A()}pr([`click`]);const uc={"/":Ms,"/settings":Cs,"/calendar":bs,"/calendar/focus":Us,"/new":ic,"/theme":Ks,"/apptView":Vo,"/users":lc,"*":Js};var dc=ki(()=>Y),fc=B(`<div class="smain svelte-1bhwpv3"><div class="optionGroup svelte-1bhwpv3"><div class="header svelte-1bhwpv3"><p class="svelte-1bhwpv3">KK 2000 Nails</p></div> <label for="home"><!> <p class="svelte-1bhwpv3">Home</p></label> <button class="invis" id="home">toHome</button> <label for="new"><!> <p class="svelte-1bhwpv3">New</p></label> <button class="invis" id="new">tonew</button> <label for="calendar"><!> <p class="svelte-1bhwpv3">Upcoming</p></label> <button class="invis" id="calendar">tocalendar</button> <label for="users"><!> <p class="svelte-1bhwpv3">Techs</p></label> <button class="invis" id="users">tocalendar</button></div> <div class="optionGroup svelte-1bhwpv3"><label for="theme"><!> <p class="svelte-1bhwpv3">Theme</p></label> <button class="invis" id="theme">totheme</button> <label for="settings"><!> <p class="svelte-1bhwpv3">Settings</p></label> <button class="invis" id="settings">tosettings</button></div></div>`);function pc(e,t){k(t,!1);let n=()=>zi(lo,`$location`,r),[r,i]=Bi();Di();var a=fc(),o=N(a),s=F(N(o),2),c=N(s);ua(c,{size:24}),we(2),D(s);var l=F(s,2);l.__click=()=>{dc(dc().sidebarToggle=!1),po(`/`)};var u=F(l,2),d=N(u);aa(d,{size:24}),we(2),D(u);var f=F(u,2);f.__click=()=>{dc(dc().sidebarToggle=!1),po(`/new`)};var p=F(f,2),m=N(p);ea(m,{size:24}),we(2),D(p);var h=F(p,2);h.__click=()=>{dc(dc().sidebarToggle=!1),po(`/calendar`)};var g=F(h,2),_=N(g);ba(_,{size:24}),we(2),D(g);var v=F(g,2);v.__click=()=>{dc(dc().sidebarToggle=!1),po(`/users`)},D(o);var y=F(o,2),b=N(y),x=N(b);ma(x,{size:24}),we(2),D(b);var S=F(b,2);S.__click=()=>{dc(dc().sidebarToggle=!1),po(`/theme`)};var C=F(S,2),ee=N(C);_a(ee,{size:24}),we(2),D(C);var te=F(C,2);te.__click=()=>{dc(dc().sidebarToggle=!1),po(`/settings`)},D(y),D(a),I(()=>{Yr(s,1,`option ${n()==`/`||n()==`/calendar/focus`?`highlighted`:``}`,`svelte-1bhwpv3`),Yr(u,1,`option ${n()==`/new`?`highlighted`:``}`,`svelte-1bhwpv3`),Yr(p,1,`option ${n()==`/calendar`?`highlighted`:``}`,`svelte-1bhwpv3`),Yr(g,1,`option ${n()==`/users`?`highlighted`:``}`,`svelte-1bhwpv3`),Yr(b,1,`option ${n()==`/theme`?`highlighted`:``}`,`svelte-1bhwpv3`),Yr(C,1,`option ${n()==`/settings`?`highlighted`:``}`,`svelte-1bhwpv3`)}),H(e,a),A(),i()}pr([`click`]);var mc=B(`<div><div class="iconContainer svelte-1n46o8q"><!></div> <p class="svelte-1n46o8q"> </p></div>`),hc=B(`<label class="blocker svelte-1n46o8q" for="toggleButton"></label>`),gc=B(`<button id="toggleButton"><!></button> <div class="popupArea svelte-1n46o8q"></div> <!> <div class="globalContainer svelte-1n46o8q"><div class="sidebarContainer desktop svelte-1n46o8q"><!></div> <div><!></div> <div class="contentContainer svelte-1n46o8q"><!></div></div>`,1);function _c(e,t){k(t,!0),Qt(()=>{let e={"--header-color":Q.headerColor,"--text-color":Q.textColor,"--main-color":Q.mainColor,"--light-main-color":Q.lightMainColor,"--dim-main-color":Q.dimMainColor,"--gray-color":Q.grayColor,"--input-color":Q.inputColor,"--bg-color":Q.bgColor,"--light-bg-color":Q.lightBgColor,"--lighter-bg-color":Q.lighterBgColor,"--lightest-bg-color":Q.lightestBgColor,"--fail-color":Q.fail};for(let[t,n]of Object.entries(e))document.documentElement.style.setProperty(t,`${n}`)}),Gi(async()=>{await qn(),Jo(),await ls(),await us(),ns.collection(`appointments`).subscribe(`*`,async e=>{(e.action==`create`||e.action==`update`)&&await ss()}),ns.collection(`technicians`).subscribe(`*`,async e=>{(e.action==`create`||e.action==`delete`)&&await us()})}),Ki(async()=>{ns.collection(`appointments`).unsubscribe(`*`),ns.collection(`technicians`).unsubscribe(`*`)}),setInterval(()=>{for(let e of Y.appointments)e.timeUntil=Qo(e)},6e4);var n=gc(),r=P(n);r.__click=()=>{Y.sidebarToggle=!Y.sidebarToggle};var i=N(r);fa(i,{style:`z-index: `,size:40}),D(r);var a=F(r,2);Mr(a,21,()=>$o,Ar,(e,t)=>{var n=mc(),r=N(n),i=N(r);Rr(i,()=>z(t).icon,(e,t)=>{t(e,{})}),D(r);var a=F(r,2),o=N(a,!0);D(a),D(n),I(()=>{Yr(n,1,`notification ${z(t).type??``}`,`svelte-1n46o8q`),U(o,z(t).content)}),bi(3,n,()=>bo,()=>({duration:$.animations?250:0,y:-20})),H(e,n)}),D(a);var o=F(a,2),s=e=>{var t=hc();bi(3,t,()=>yo,()=>({duration:$.animations?250:0})),H(e,t)};Dr(o,e=>{Y.sidebarToggle&&e(s)});var c=F(o,2),l=N(c),u=N(l);pc(u,{}),D(l);var d=F(l,2),f=N(d);pc(f,{}),D(d);var p=F(d,2),m=N(p);ho(m,{get routes(){return uc}}),D(p),D(c),I(()=>{Zr(r,Y.sidebarToggle?`color: var(--light-main-color);`:`var(--text-color);`),Yr(r,1,`toggleButton ${$.animations?`anims`:``}`,`svelte-1n46o8q`),Yr(d,1,`sidebarContainer mobile  ${$.animations?`anims`:``}`,`svelte-1n46o8q`),Zr(d,Y.sidebarToggle?``:`transform: translateX(calc(-1 * max(50%, 400px)));`)}),H(e,n),A()}pr([`click`]),Sr(_c,{target:document.getElementById(`app`)});