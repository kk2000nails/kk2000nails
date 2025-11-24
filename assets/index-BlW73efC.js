(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=Array.isArray,t=Array.prototype.indexOf,n=Array.from;Object.keys;var r=Object.defineProperty,i=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyDescriptors,o=Object.prototype,s=Array.prototype,c=Object.getPrototypeOf,l=Object.isExtensible;function u(e){return typeof e==`function`}const d=()=>{};function f(e){return e()}function p(e){for(var t=0;t<e.length;t++)e[t]()}function m(){var e,t;return{promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}}function h(e,t){if(Array.isArray(e))return e;if(t===void 0||!(Symbol.iterator in e))return Array.from(e);let n=[];for(let r of e)if(n.push(r),n.length===t)break;return n}const g=1024,_=2048,v=4096,y=8192,b=65536,x=1<<19,S=1<<20,C=1<<21,ee=1<<23,te=Symbol(`$state`),ne=Symbol(`legacy props`),re=Symbol(``),ie=new class extends Error{name=`StaleReactionError`;message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function ae(e){throw Error(`https://svelte.dev/e/lifecycle_outside_component`)}function oe(){throw Error(`https://svelte.dev/e/async_derived_orphan`)}function se(e){throw Error(`https://svelte.dev/e/effect_in_teardown`)}function ce(){throw Error(`https://svelte.dev/e/effect_in_unowned_derived`)}function le(e){throw Error(`https://svelte.dev/e/effect_orphan`)}function ue(){throw Error(`https://svelte.dev/e/effect_update_depth_exceeded`)}function de(e){throw Error(`https://svelte.dev/e/lifecycle_legacy_only`)}function fe(e){throw Error(`https://svelte.dev/e/props_invalid_value`)}function pe(){throw Error(`https://svelte.dev/e/state_descriptors_fixed`)}function me(){throw Error(`https://svelte.dev/e/state_prototype_fixed`)}function he(){throw Error(`https://svelte.dev/e/state_unsafe_mutation`)}function ge(){throw Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`)}const _e={},ve=Symbol();function ye(e){console.warn(`https://svelte.dev/e/hydration_mismatch`)}function be(){console.warn(`https://svelte.dev/e/select_multiple_invalid_value`)}function xe(){console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`)}let w=!1;function Se(e){w=e}let T;function Ce(e){if(e===null)throw ye(),_e;return T=e}function we(){return Ce(zt(T))}function E(e){if(w){if(zt(T)!==null)throw ye(),_e;T=e}}function Te(e=1){if(w){for(var t=e,n=T;t--;)n=zt(n);T=n}}function Ee(e=!0){for(var t=0,n=T;;){if(n.nodeType===8){var r=n.data;if(r===`]`){if(t===0)return n;--t}else (r===`[`||r===`[!`)&&(t+=1)}var i=zt(n);e&&n.remove(),n=i}}function De(e){if(!e||e.nodeType!==8)throw ye(),_e;return e.data}function Oe(e){return e===this.v}function ke(e,t){return e==e?e!==t||typeof e==`object`&&!!e||typeof e==`function`:t==t}function Ae(e){return!ke(e,this.v)}let je=!1;function Me(){je=!0}let D=null;function Ne(e){D=e}function O(e,t=!1,n){D={p:D,c:null,e:null,s:e,x:null,l:je&&!t?{s:null,u:null,$:[]}:null}}function k(e){var t=D,n=t.e;if(n!==null){t.e=null;for(var r of n)en(r)}return e!==void 0&&(t.x=e),D=t.p,e??{}}function Pe(){return!je||D!==null&&D.l===null}var Fe=[];function Ie(){var e=Fe;Fe=[],p(e)}function Le(e){if(Fe.length===0&&!Xe){var t=Fe;queueMicrotask(()=>{t===Fe&&Ie()})}Fe.push(e)}function Re(){for(;Fe.length>0;)Ie()}var ze=new WeakMap;function Be(e){var t=L;if(t===null)return I.f|=ee,e;if(t.f&32768)Ve(e,t);else{if(!(t.f&128))throw!t.parent&&e instanceof Error&&He(e),e;t.b.error(e)}}function Ve(e,t){for(;t!==null;){if(t.f&128)try{t.b.error(e);return}catch(t){e=t}t=t.parent}throw e instanceof Error&&He(e),e}function He(e){let t=ze.get(e);t&&(r(e,`message`,{value:t.message}),r(e,`stack`,{value:t.stack}))}var Ue=new Set;let A=null,We=null,Ge=null,Ke=new Set;var qe=[],Je=null,Ye=!1;let Xe=!1;var Ze=class e{current=new Map;#previous=new Map;#callbacks=new Set;#pending=0;#deferred=null;#render_effects=[];#effects=[];#block_effects=[];#dirty_effects=[];#maybe_dirty_effects=[];skipped_effects=new Set;process(e){qe=[],We=null,this.apply();for(let t of e)this.#traverse_effect_tree(t);if(this.#pending===0){var t=Ge;this.#commit();var n=this.#render_effects,r=this.#effects;this.#render_effects=[],this.#effects=[],this.#block_effects=[],We=this,A=null,Ge=t,nt(n),nt(r),We=null,this.#deferred?.resolve()}else this.#defer_effects(this.#render_effects),this.#defer_effects(this.#effects),this.#defer_effects(this.#block_effects);Ge=null}#traverse_effect_tree(e){e.f^=g;for(var t=e.first;t!==null;){var n=t.f,r=(n&96)!=0;if(!(r&&n&1024||n&8192||this.skipped_effects.has(t))&&t.fn!==null){r?t.f^=g:n&4?this.#effects.push(t):Hn(t)&&(t.f&16&&this.#block_effects.push(t),qn(t));var i=t.first;if(i!==null){t=i;continue}}var a=t.parent;for(t=t.next;t===null&&a!==null;)t=a.next,a=a.parent}}#defer_effects(e){for(let t of e)(t.f&2048?this.#dirty_effects:this.#maybe_dirty_effects).push(t),Qn(t,g);e.length=0}capture(e,t){this.#previous.has(e)||this.#previous.set(e,t),this.current.set(e,e.v),Ge?.set(e,e.v)}activate(){A=this}deactivate(){A=null,Ge=null}flush(){if(qe.length>0){if(this.activate(),$e(),A!==null&&A!==this)return}else this.#pending===0&&this.#commit();this.deactivate();for(let e of Ke)if(Ke.delete(e),e(),A!==null)break}#commit(){for(let e of this.#callbacks)e();if(this.#callbacks.clear(),Ue.size>1){this.#previous.clear();let e=!0;for(let t of Ue){if(t===this){e=!1;continue}let n=[];for(let[r,i]of this.current){if(t.current.has(r))if(e&&i!==t.current.get(r))t.current.set(r,i);else continue;n.push(r)}if(n.length===0)continue;let r=[...t.current.keys()].filter(e=>!this.current.has(e));if(r.length>0){for(let e of n)rt(e,r);if(qe.length>0){A=t,t.apply();for(let e of qe)t.#traverse_effect_tree(e);qe=[],t.deactivate()}}}A=null}Ue.delete(this)}increment(){this.#pending+=1}decrement(){--this.#pending;for(let e of this.#dirty_effects)Qn(e,_),at(e);for(let e of this.#maybe_dirty_effects)Qn(e,v),at(e);this.flush()}add_callback(e){this.#callbacks.add(e)}settled(){return(this.#deferred??=m()).promise}static ensure(){if(A===null){let t=A=new e;Ue.add(A),Xe||e.enqueue(()=>{A===t&&t.flush()})}return A}static enqueue(e){Le(e)}apply(){}};function Qe(e){var t=Xe;Xe=!0;try{var n;for(e&&(A!==null&&$e(),n=e());;){if(Re(),qe.length===0&&(A?.flush(),qe.length===0))return Je=null,n;$e()}}finally{Xe=t}}function $e(){var e=Cn;Ye=!0;try{var t=0;for(wn(!0);qe.length>0;){var n=Ze.ensure();t++>1e3&&et(),n.process(qe),xt.clear()}}finally{Ye=!1,wn(e),Je=null}}function et(){try{ue()}catch(e){Ve(e,Je)}}let tt=null;function nt(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if(!(r.f&24576)&&Hn(r)&&(tt=[],qn(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null&&r.ac===null?gn(r):r.fn=null),tt?.length>0)){xt.clear();for(let e of tt)qn(e);tt=[]}}tt=null}}function rt(e,t){if(e.reactions!==null)for(let n of e.reactions){let e=n.f;e&2?rt(n,t):e&4194320&&it(n,t)&&(Qn(n,_),at(n))}}function it(e,t){if(e.deps!==null){for(let n of e.deps)if(t.includes(n)||n.f&2&&it(n,t))return!0}return!1}function at(e){for(var t=Je=e;t.parent!==null;){t=t.parent;var n=t.f;if(Ye&&t===L&&n&16)return;if(n&96){if(!(n&1024))return;t.f^=g}}qe.push(t)}function ot(e){let t=0,n=St(0),r;return()=>{Zt()&&(R(n),cn(()=>(t===0&&(r=Xn(()=>e(()=>Dt(n)))),t+=1,()=>{Le(()=>{--t,t===0&&(r?.(),r=void 0,Dt(n))})})))}}var st=x|65664;function ct(e,t,n){new lt(e,t,n)}var lt=class{parent;#pending=!1;#anchor;#hydrate_open=w?T:null;#props;#children;#effect;#main_effect=null;#pending_effect=null;#failed_effect=null;#offscreen_fragment=null;#local_pending_count=0;#pending_count=0;#is_creating_fallback=!1;#effect_pending=null;#effect_pending_update=()=>{this.#effect_pending&&Tt(this.#effect_pending,this.#local_pending_count)};#effect_pending_subscriber=ot(()=>(this.#effect_pending=St(this.#local_pending_count),()=>{this.#effect_pending=null}));constructor(e,t,n){this.#anchor=e,this.#props=t,this.#children=n,this.parent=L.b,this.#pending=!!this.#props.pending,this.#effect=ln(()=>{if(L.b=this,w){let e=this.#hydrate_open;we(),e.nodeType===8&&e.data===`[!`?this.#hydrate_pending_content():this.#hydrate_resolved_content()}else{try{this.#main_effect=un(()=>n(this.#anchor))}catch(e){this.error(e)}this.#pending_count>0?this.#show_pending_snippet():this.#pending=!1}},st),w&&(this.#anchor=T)}#hydrate_resolved_content(){try{this.#main_effect=un(()=>this.#children(this.#anchor))}catch(e){this.error(e)}this.#pending=!1}#hydrate_pending_content(){let e=this.#props.pending;e&&(this.#pending_effect=un(()=>e(this.#anchor)),Ze.enqueue(()=>{this.#main_effect=this.#run(()=>(Ze.ensure(),un(()=>this.#children(this.#anchor)))),this.#pending_count>0?this.#show_pending_snippet():(_n(this.#pending_effect,()=>{this.#pending_effect=null}),this.#pending=!1)}))}is_pending(){return this.#pending||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#props.pending}#run(e){var t=L,n=I,r=D;kn(this.#effect),On(this.#effect),Ne(this.#effect.ctx);try{return e()}catch(e){return Be(e),null}finally{kn(t),On(n),Ne(r)}}#show_pending_snippet(){let e=this.#props.pending;this.#main_effect!==null&&(this.#offscreen_fragment=document.createDocumentFragment(),Sn(this.#main_effect,this.#offscreen_fragment)),this.#pending_effect===null&&(this.#pending_effect=un(()=>e(this.#anchor)))}#update_pending_count(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#update_pending_count(e);return}this.#pending_count+=e,this.#pending_count===0&&(this.#pending=!1,this.#pending_effect&&_n(this.#pending_effect,()=>{this.#pending_effect=null}),this.#offscreen_fragment&&=(this.#anchor.before(this.#offscreen_fragment),null),Le(()=>{Ze.ensure().flush()}))}update_pending_count(e){this.#update_pending_count(e),this.#local_pending_count+=e,Ke.add(this.#effect_pending_update)}get_effect_pending(){return this.#effect_pending_subscriber(),R(this.#effect_pending)}error(e){var t=this.#props.onerror;let n=this.#props.failed;if(this.#is_creating_fallback||!t&&!n)throw e;this.#main_effect&&=(mn(this.#main_effect),null),this.#pending_effect&&=(mn(this.#pending_effect),null),this.#failed_effect&&=(mn(this.#failed_effect),null),w&&(Ce(this.#hydrate_open),Te(),Ce(Ee()));var r=!1,i=!1;let a=()=>{if(r){xe();return}r=!0,i&&ge(),Ze.ensure(),this.#local_pending_count=0,this.#failed_effect!==null&&_n(this.#failed_effect,()=>{this.#failed_effect=null}),this.#pending=this.has_pending_snippet(),this.#main_effect=this.#run(()=>(this.#is_creating_fallback=!1,un(()=>this.#children(this.#anchor)))),this.#pending_count>0?this.#show_pending_snippet():this.#pending=!1};var o=I;try{On(null),i=!0,t?.(e,a),i=!1}catch(e){Ve(e,this.#effect&&this.#effect.parent)}finally{On(o)}n&&Le(()=>{this.#failed_effect=this.#run(()=>{this.#is_creating_fallback=!0;try{return un(()=>{n(this.#anchor,()=>e,()=>a)})}catch(e){return Ve(e,this.#effect.parent),null}finally{this.#is_creating_fallback=!1}})})}};function ut(e,t,n){let r=Pe()?pt:gt;if(t.length===0){n(e.map(r));return}var i=A,a=L,o=dt(),s=w;Promise.all(t.map(e=>mt(e))).then(t=>{o();try{n([...e.map(r),...t])}catch(e){a.f&16384||Ve(e,a)}s&&Se(!1),i?.deactivate(),ft()}).catch(e=>{Ve(e,a)})}function dt(){var e=L,t=I,n=D,r=A,i=w;if(i)var a=T;return function(){kn(e),On(t),Ne(n),r?.activate(),i&&(Se(!0),Ce(a))}}function ft(){kn(null),On(null),Ne(null)}function pt(e){var t=2|_,n=I!==null&&I.f&2?I:null;return L===null||n!==null&&n.f&256?t|=256:L.f|=x,{ctx:D,deps:null,effects:null,equals:Oe,f:t,fn:e,reactions:null,rv:0,v:ve,wv:0,parent:n??L,ac:null}}function mt(e,t){let n=L;n===null&&oe();var r=n.b,i=void 0,a=St(ve),o=!I,s=new Map;return sn(()=>{var t=m();i=t.promise;try{Promise.resolve(e()).then(t.resolve,t.reject).then(ft)}catch(e){t.reject(e),ft()}var n=A,c=r.is_pending();o&&(r.update_pending_count(1),c||(n.increment(),s.get(n)?.reject(ie),s.delete(n),s.set(n,t)));let l=(e,t=void 0)=>{if(c||n.activate(),t)t!==ie&&(a.f|=ee,Tt(a,t));else{a.f&8388608&&(a.f^=ee),Tt(a,e);for(let[e,t]of s){if(s.delete(e),e===n)break;t.reject(ie)}}o&&(r.update_pending_count(-1),c||n.decrement())};t.promise.then(l,e=>l(null,e||`unknown`))}),Qt(()=>{for(let e of s.values())e.reject(ie)}),new Promise(e=>{function t(n){function r(){n===i?e(a):t(i)}n.then(r,r)}t(i)})}function ht(e){let t=pt(e);return jn(t),t}function gt(e){let t=pt(e);return t.equals=Ae,t}function _t(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)mn(t[n])}}function vt(e){for(var t=e.parent;t!==null;){if(!(t.f&2))return t;t=t.parent}return null}function yt(e){var t,n=L;kn(vt(e));try{_t(e),t=Wn(e)}finally{kn(n)}return t}function bt(e){var t=yt(e);if(e.equals(t)||(e.v=t,e.wv=Vn()),!Tn)if(Ge!==null)Ge.set(e,e.v);else{var n=(Bn||e.f&256)&&e.deps!==null?v:g;Qn(e,n)}}const xt=new Map;function St(e,t){return{f:0,v:e,reactions:null,equals:Oe,rv:0,wv:0}}function Ct(e,t){let n=St(e,t);return jn(n),n}function wt(e,t=!1,n=!0){let r=St(e);return t||(r.equals=Ae),je&&n&&D!==null&&D.l!==null&&(D.l.s??=[]).push(r),r}function j(e,t,n=!1){I!==null&&(!Dn||I.f&131072)&&Pe()&&I.f&4325394&&!An?.includes(e)&&he();let r=n?kt(t):t;return Tt(e,r)}function Tt(e,t){if(!e.equals(t)){var n=e.v;Tn?xt.set(e,t):xt.set(e,n),e.v=t,Ze.ensure().capture(e,n),e.f&2&&(e.f&2048&&yt(e),Qn(e,e.f&256?v:g)),e.wv=Vn(),Ot(e,_),Pe()&&L!==null&&L.f&1024&&!(L.f&96)&&(Pn===null?Fn([e]):Pn.push(e))}return t}function Et(e,t=1){var n=R(e),r=t===1?n++:n--;return j(e,n),r}function Dt(e){j(e,e.v+1)}function Ot(e,t){var n=e.reactions;if(n!==null)for(var r=Pe(),i=n.length,a=0;a<i;a++){var o=n[a],s=o.f;if(!(!r&&o===L)){var c=(s&_)===0;c&&Qn(o,t),s&2?Ot(o,v):c&&(s&16&&tt!==null&&tt.push(o),at(o))}}}function kt(t){if(typeof t!=`object`||!t||te in t)return t;let n=c(t);if(n!==o&&n!==s)return t;var r=new Map,a=e(t),l=Ct(0),u=null,d=Rn,f=e=>{if(Rn===d)return e();var t=I,n=Rn;On(null),zn(d);var r=e();return On(t),zn(n),r};return a&&r.set(`length`,Ct(t.length,u)),new Proxy(t,{defineProperty(e,t,n){(!(`value`in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&pe();var i=r.get(t);return i===void 0?i=f(()=>{var e=Ct(n.value,u);return r.set(t,e),e}):j(i,n.value,!0),!0},deleteProperty(e,t){var n=r.get(t);if(n===void 0){if(t in e){let e=f(()=>Ct(ve,u));r.set(t,e),Dt(l)}}else j(n,ve),Dt(l);return!0},get(e,n,a){if(n===te)return t;var o=r.get(n),s=n in e;if(o===void 0&&(!s||i(e,n)?.writable)&&(o=f(()=>{var t=kt(s?e[n]:ve);return Ct(t,u)}),r.set(n,o)),o!==void 0){var c=R(o);return c===ve?void 0:c}return Reflect.get(e,n,a)},getOwnPropertyDescriptor(e,t){var n=Reflect.getOwnPropertyDescriptor(e,t);if(n&&`value`in n){var i=r.get(t);i&&(n.value=R(i))}else if(n===void 0){var a=r.get(t),o=a?.v;if(a!==void 0&&o!==ve)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return n},has(e,t){if(t===te)return!0;var n=r.get(t),a=n!==void 0&&n.v!==ve||Reflect.has(e,t);return(n!==void 0||L!==null&&(!a||i(e,t)?.writable))&&(n===void 0&&(n=f(()=>{var n=a?kt(e[t]):ve;return Ct(n,u)}),r.set(t,n)),R(n)===ve)?!1:a},set(e,t,n,o){var s=r.get(t),c=t in e;if(a&&t===`length`)for(var d=n;d<s.v;d+=1){var p=r.get(d+``);p===void 0?d in e&&(p=f(()=>Ct(ve,u)),r.set(d+``,p)):j(p,ve)}if(s===void 0)(!c||i(e,t)?.writable)&&(s=f(()=>Ct(void 0,u)),j(s,kt(n)),r.set(t,s));else{c=s.v!==ve;var m=f(()=>kt(n));j(s,m)}var h=Reflect.getOwnPropertyDescriptor(e,t);if(h?.set&&h.set.call(o,n),!c){if(a&&typeof t==`string`){var g=r.get(`length`),_=Number(t);Number.isInteger(_)&&_>=g.v&&j(g,_+1)}Dt(l)}return!0},ownKeys(e){R(l);var t=Reflect.ownKeys(e).filter(e=>{var t=r.get(e);return t===void 0||t.v!==ve});for(var[n,i]of r)i.v!==ve&&!(n in e)&&t.push(n);return t},setPrototypeOf(){me()}})}function At(e){try{if(typeof e==`object`&&e&&te in e)return e[te]}catch{}return e}function jt(e,t){return Object.is(At(e),At(t))}var Mt,Nt,Pt,Ft;function It(){if(Mt===void 0){Mt=window,document,Nt=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;Pt=i(t,`firstChild`).get,Ft=i(t,`nextSibling`).get,l(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),l(n)&&(n.__t=void 0)}}function Lt(e=``){return document.createTextNode(e)}function Rt(e){return Pt.call(e)}function zt(e){return Ft.call(e)}function M(e,t){if(!w)return Rt(e);var n=Rt(T);if(n===null)n=T.appendChild(Lt());else if(t&&n.nodeType!==3){var r=Lt();return n?.before(r),Ce(r),r}return Ce(n),n}function N(e,t=!1){if(!w){var n=Rt(e);return n instanceof Comment&&n.data===``?zt(n):n}if(t&&T?.nodeType!==3){var r=Lt();return T?.before(r),Ce(r),r}return T}function P(e,t=1,n=!1){let r=w?T:e;for(var i;t--;)i=r,r=zt(r);if(!w)return r;if(n&&r?.nodeType!==3){var a=Lt();return r===null?i?.after(a):r.before(a),Ce(a),a}return Ce(r),r}function Bt(e){e.textContent=``}function Vt(){return!1}function Ht(e,t){if(t){let t=document.body;e.autofocus=!0,Le(()=>{document.activeElement===t&&e.focus()})}}function Ut(e){w&&Rt(e)!==null&&Bt(e)}var Wt=!1;function Gt(){Wt||(Wt=!0,document.addEventListener(`reset`,e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(let t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function Kt(e){var t=I,n=L;On(null),kn(null);try{return e()}finally{On(t),kn(n)}}function qt(e,t,n,r=n){e.addEventListener(t,()=>Kt(n));let i=e.__on_r;i?e.__on_r=()=>{i(),r(!0)}:e.__on_r=()=>r(!0),Gt()}function Jt(e){L===null&&I===null&&le(e),I!==null&&I.f&256&&L===null&&ce(),Tn&&se(e)}function Yt(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function Xt(e,t,n,r=!0){var i=L;i!==null&&i.f&8192&&(e|=y);var a={ctx:D,deps:null,nodes_start:null,nodes_end:null,f:e|_,first:null,fn:t,last:null,next:null,parent:i,b:i&&i.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(n)try{qn(a),a.f|=32768}catch(e){throw mn(a),e}else t!==null&&at(a);if(r){var o=a;if(n&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&!(o.f&524288)&&(o=o.first),o!==null&&(o.parent=i,i!==null&&Yt(o,i),I!==null&&I.f&2&&!(e&64))){var s=I;(s.effects??=[]).push(o)}}return a}function Zt(){return I!==null&&!Dn}function Qt(e){let t=Xt(8,null,!1);return Qn(t,g),t.teardown=e,t}function $t(e){Jt(`$effect`);var t=L.f;if(!I&&t&32&&!(t&32768)){var n=D;(n.e??=[]).push(e)}else return en(e)}function en(e){return Xt(4|S,e,!1)}function tn(e){return Jt(`$effect.pre`),Xt(8|S,e,!0)}function nn(e){Ze.ensure();let t=Xt(64|x,e,!0);return(e={})=>new Promise(n=>{e.outro?_n(t,()=>{mn(t),n(void 0)}):(mn(t),n(void 0))})}function rn(e){return Xt(4,e,!1)}function an(e,t){var n=D,r={effect:null,ran:!1,deps:e};n.l.$.push(r),r.effect=cn(()=>{e(),!r.ran&&(r.ran=!0,Xn(t))})}function on(){var e=D;cn(()=>{for(var t of e.l.$){t.deps();var n=t.effect;n.f&1024&&Qn(n,v),Hn(n)&&qn(n),t.ran=!1}})}function sn(e){return Xt(4194304|x,e,!0)}function cn(e,t=0){return Xt(8|t,e,!0)}function F(e,t=[],n=[]){ut(t,n,t=>{Xt(8,()=>e(...t.map(R)),!0)})}function ln(e,t=0){return Xt(16|t,e,!0)}function un(e,t=!0){return Xt(32|x,e,!0,t)}function dn(e){var t=e.teardown;if(t!==null){let e=Tn,n=I;En(!0),On(null);try{t.call(null)}finally{En(e),On(n)}}}function fn(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){let e=n.ac;e!==null&&Kt(()=>{e.abort(ie)});var r=n.next;n.f&64?n.parent=null:mn(n,t),n=r}}function pn(e){for(var t=e.first;t!==null;){var n=t.next;t.f&32||mn(t),t=n}}function mn(e,t=!0){var n=!1;(t||e.f&262144)&&e.nodes_start!==null&&e.nodes_end!==null&&(hn(e.nodes_start,e.nodes_end),n=!0),fn(e,t&&!n),Kn(e,0),Qn(e,16384);var r=e.transitions;if(r!==null)for(let e of r)e.stop();dn(e);var i=e.parent;i!==null&&i.first!==null&&gn(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function hn(e,t){for(;e!==null;){var n=e===t?null:zt(e);e.remove(),e=n}}function gn(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function _n(e,t,n=!0){var r=[];yn(e,r,!0),vn(r,()=>{n&&mn(e),t&&t()})}function vn(e,t){var n=e.length;if(n>0){var r=()=>--n||t();for(var i of e)i.out(r)}else t()}function yn(e,t,n){if(!(e.f&8192)){if(e.f^=y,e.transitions!==null)for(let r of e.transitions)(r.is_global||n)&&t.push(r);for(var r=e.first;r!==null;){var i=r.next,a=(r.f&65536)!=0||(r.f&32)!=0;yn(r,t,a?n:!1),r=i}}}function bn(e){xn(e,!0)}function xn(e,t){if(e.f&8192){e.f^=y,e.f&1024||(Qn(e,_),at(e));for(var n=e.first;n!==null;){var r=n.next,i=(n.f&65536)!=0||(n.f&32)!=0;xn(n,i?t:!1),n=r}if(e.transitions!==null)for(let n of e.transitions)(n.is_global||t)&&n.in()}}function Sn(e,t){for(var n=e.nodes_start,r=e.nodes_end;n!==null;){var i=n===r?null:zt(n);t.append(n),n=i}}let Cn=!1;function wn(e){Cn=e}let Tn=!1;function En(e){Tn=e}let I=null,Dn=!1;function On(e){I=e}let L=null;function kn(e){L=e}let An=null;function jn(e){I!==null&&(An===null?An=[e]:An.push(e))}var Mn=null,Nn=0;let Pn=null;function Fn(e){Pn=e}let In=1;var Ln=0;let Rn=Ln;function zn(e){Rn=e}let Bn=!1;function Vn(){return++In}function Hn(e){var t=e.f;if(t&2048)return!0;if(t&4096){var n=e.deps,r=(t&256)!=0;if(n!==null){var i,a,o=(t&512)!=0,s=r&&L!==null&&!Bn,c=n.length;if((o||s)&&(L===null||!(L.f&16384))){var l=e,u=l.parent;for(i=0;i<c;i++)a=n[i],(o||!a?.reactions?.includes(l))&&(a.reactions??=[]).push(l);o&&(l.f^=512),s&&u!==null&&!(u.f&256)&&(l.f^=256)}for(i=0;i<c;i++)if(a=n[i],Hn(a)&&bt(a),a.wv>e.wv)return!0}(!r||L!==null&&!Bn)&&Qn(e,g)}return!1}function Un(e,t,n=!0){var r=e.reactions;if(r!==null&&!An?.includes(e))for(var i=0;i<r.length;i++){var a=r[i];a.f&2?Un(a,t,!1):t===a&&(n?Qn(a,_):a.f&1024&&Qn(a,v),at(a))}}function Wn(e){var t=Mn,n=Nn,r=Pn,i=I,a=Bn,o=An,s=D,c=Dn,l=Rn,u=e.f;Mn=null,Nn=0,Pn=null,Bn=(u&256)!=0&&(Dn||!Cn||I===null),I=u&96?null:e,An=null,Ne(e.ctx),Dn=!1,Rn=++Ln,e.ac!==null&&(Kt(()=>{e.ac.abort(ie)}),e.ac=null);try{e.f|=C;var d=e.fn,f=d(),p=e.deps;if(Mn!==null){var m;if(Kn(e,Nn),p!==null&&Nn>0)for(p.length=Nn+Mn.length,m=0;m<Mn.length;m++)p[Nn+m]=Mn[m];else e.deps=p=Mn;if(!Bn||u&2&&e.reactions!==null)for(m=Nn;m<p.length;m++)(p[m].reactions??=[]).push(e)}else p!==null&&Nn<p.length&&(Kn(e,Nn),p.length=Nn);if(Pe()&&Pn!==null&&!Dn&&p!==null&&!(e.f&6146))for(m=0;m<Pn.length;m++)Un(Pn[m],e);return i!==null&&i!==e&&(Ln++,Pn!==null&&(r===null?r=Pn:r.push(...Pn))),e.f&8388608&&(e.f^=ee),f}catch(e){return Be(e)}finally{e.f^=C,Mn=t,Nn=n,Pn=r,I=i,Bn=a,An=o,Ne(s),Dn=c,Rn=l}}function Gn(e,n){let r=n.reactions;if(r!==null){var i=t.call(r,e);if(i!==-1){var a=r.length-1;a===0?r=n.reactions=null:(r[i]=r[a],r.pop())}}r===null&&n.f&2&&(Mn===null||!Mn.includes(n))&&(Qn(n,v),n.f&768||(n.f^=512),_t(n),Kn(n,0))}function Kn(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Gn(e,n[r])}function qn(e){var t=e.f;if(!(t&16384)){Qn(e,g);var n=L,r=Cn;L=e,Cn=!0;try{t&16?pn(e):fn(e),dn(e);var i=Wn(e);e.teardown=typeof i==`function`?i:null,e.wv=In}finally{Cn=r,L=n}}}async function Jn(){await Promise.resolve(),Qe()}function R(e){var t=(e.f&2)!=0;if(null?.add(e),I!==null&&!Dn){if(!(L!==null&&L.f&16384)&&!An?.includes(e)){var n=I.deps;if(I.f&2097152)e.rv<Ln&&(e.rv=Ln,Mn===null&&n!==null&&n[Nn]===e?Nn++:Mn===null?Mn=[e]:(!Bn||!Mn.includes(e))&&Mn.push(e));else{(I.deps??=[]).push(e);var r=e.reactions;r===null?e.reactions=[I]:r.includes(I)||r.push(I)}}}else if(t&&e.deps===null&&e.effects===null){var i=e,a=i.parent;a!==null&&!(a.f&256)&&(i.f^=256)}if(Tn){if(xt.has(e))return xt.get(e);if(t){i=e;var o=i.v;return(!(i.f&1024)&&i.reactions!==null||Yn(i))&&(o=yt(i)),xt.set(i,o),o}}else if(t){if(i=e,Ge?.has(i))return Ge.get(i);Hn(i)&&bt(i)}if(Ge?.has(e))return Ge.get(e);if(e.f&8388608)throw e.v;return e.v}function Yn(e){if(e.v===ve)return!0;if(e.deps===null)return!1;for(let t of e.deps)if(xt.has(t)||t.f&2&&Yn(t))return!0;return!1}function Xn(e){var t=Dn;try{return Dn=!0,e()}finally{Dn=t}}var Zn=~(v|3072);function Qn(e,t){e.f=e.f&Zn|t}function $n(e){if(!(typeof e!=`object`||!e||e instanceof EventTarget)){if(te in e)er(e);else if(!Array.isArray(e))for(let t in e){let n=e[t];typeof n==`object`&&n&&te in n&&er(n)}}}function er(e,t=new Set){if(typeof e==`object`&&e&&!(e instanceof EventTarget)&&!t.has(e)){for(let n in t.add(e),e instanceof Date&&e.getTime(),e)try{er(e[n],t)}catch{}let n=c(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){let t=a(n);for(let n in t){let r=t[n].get;if(r)try{r.call(e)}catch{}}}}}function tr(e){return e.endsWith(`capture`)&&e!==`gotpointercapture`&&e!==`lostpointercapture`}var nr=[`beforeinput`,`click`,`change`,`dblclick`,`contextmenu`,`focusin`,`focusout`,`input`,`keydown`,`keyup`,`mousedown`,`mousemove`,`mouseout`,`mouseover`,`mouseup`,`pointerdown`,`pointermove`,`pointerout`,`pointerover`,`pointerup`,`touchend`,`touchmove`,`touchstart`];function rr(e){return nr.includes(e)}var ir=`allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback`.split(`.`),ar={formnovalidate:`formNoValidate`,ismap:`isMap`,nomodule:`noModule`,playsinline:`playsInline`,readonly:`readOnly`,defaultvalue:`defaultValue`,defaultchecked:`defaultChecked`,srcobject:`srcObject`,novalidate:`noValidate`,allowfullscreen:`allowFullscreen`,disablepictureinpicture:`disablePictureInPicture`,disableremoteplayback:`disableRemotePlayback`};function or(e){return e=e.toLowerCase(),ar[e]??e}[...ir];var sr=[`touchstart`,`touchmove`];function cr(e){return sr.includes(e)}var lr=[`textarea`,`script`,`style`,`title`];function ur(e){return lr.includes(e)}const dr=new Set,fr=new Set;function pr(e,t,n,r={}){function i(e){if(r.capture||gr.call(t,e),!e.cancelBubble)return Kt(()=>n?.call(this,e))}return e.startsWith(`pointer`)||e.startsWith(`touch`)||e===`wheel`?Le(()=>{t.addEventListener(e,i,r)}):t.addEventListener(e,i,r),i}function mr(e){for(var t=0;t<e.length;t++)dr.add(e[t]);for(var n of fr)n(e)}var hr=null;function gr(t){var n=this,i=n.ownerDocument,a=t.type,o=t.composedPath?.()||[],s=o[0]||t.target;hr=t;var c=0,l=hr===t&&t.__root;if(l){var u=o.indexOf(l);if(u!==-1&&(n===document||n===window)){t.__root=n;return}var d=o.indexOf(n);if(d===-1)return;u<=d&&(c=u)}if(s=o[c]||t.target,s!==n){r(t,`currentTarget`,{configurable:!0,get(){return s||i}});var f=I,p=L;On(null),kn(null);try{for(var m,h=[];s!==null;){var g=s.assignedSlot||s.parentNode||s.host||null;try{var _=s[`__`+a];if(_!=null&&(!s.disabled||t.target===s))if(e(_)){var[v,...y]=_;v.apply(s,[t,...y])}else _.call(s,t)}catch(e){m?h.push(e):m=e}if(t.cancelBubble||g===n||g===null)break;s=g}if(m){for(let e of h)queueMicrotask(()=>{throw e});throw m}}finally{t.__root=n,delete t.currentTarget,On(f),kn(p)}}}function _r(e){var t=document.createElement(`template`);return t.innerHTML=e.replaceAll(`<!>`,`<!---->`),t.content}function vr(e,t){var n=L;n.nodes_start===null&&(n.nodes_start=e,n.nodes_end=t)}function z(e,t){var n=(t&1)!=0,r=(t&2)!=0,i,a=!e.startsWith(`<!>`);return()=>{if(w)return vr(T,null),T;i===void 0&&(i=_r(a?e:`<!>`+e),n||(i=Rt(i)));var t=r||Nt?document.importNode(i,!0):i.cloneNode(!0);if(n){var o=Rt(t),s=t.lastChild;vr(o,s)}else vr(t,t);return t}}function yr(e,t,n=`svg`){var r=!e.startsWith(`<!>`),i=(t&1)!=0,a=`<${n}>${r?e:`<!>`+e}</${n}>`,o;return()=>{if(w)return vr(T,null),T;if(!o){var e=_r(a),t=Rt(e);if(i)for(o=document.createDocumentFragment();Rt(t);)o.appendChild(Rt(t));else o=Rt(t)}var n=o.cloneNode(!0);if(i){var r=Rt(n),s=n.lastChild;vr(r,s)}else vr(n,n);return n}}function br(e,t){return yr(e,t,`svg`)}function B(){if(w)return vr(T,null),T;var e=document.createDocumentFragment(),t=document.createComment(``),n=Lt();return e.append(t,n),vr(t,n),e}function V(e,t){if(w){L.nodes_end=T,we();return}e!==null&&e.before(t)}let xr=!0;function Sr(e){xr=e}function H(e,t){var n=t==null?``:typeof t==`object`?t+``:t;n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=n+``)}function Cr(e,t){return Tr(e,t)}var wr=new Map;function Tr(e,{target:t,anchor:r,props:i={},events:a,context:o,intro:s=!0}){It();var c=new Set,l=e=>{for(var n=0;n<e.length;n++){var r=e[n];if(!c.has(r)){c.add(r);var i=cr(r);t.addEventListener(r,gr,{passive:i});var a=wr.get(r);a===void 0?(document.addEventListener(r,gr,{passive:i}),wr.set(r,1)):wr.set(r,a+1)}}};l(n(dr)),fr.add(l);var u=void 0,d=nn(()=>{var n=r??t.appendChild(Lt());return ct(n,{pending:()=>{}},t=>{if(o){O({});var n=D;n.c=o}if(a&&(i.$$events=a),w&&vr(t,null),xr=s,u=e(t,i)||{},xr=!0,w&&(L.nodes_end=T,T===null||T.nodeType!==8||T.data!==`]`))throw ye(),_e;o&&k()}),()=>{for(var e of c){t.removeEventListener(e,gr);var i=wr.get(e);--i===0?(document.removeEventListener(e,gr),wr.delete(e)):wr.set(e,i)}fr.delete(l),n!==r&&n.parentNode?.removeChild(n)}});return Er.set(u,d),u}var Er=new WeakMap,Dr=class{anchor;#batches=new Map;#onscreen=new Map;#offscreen=new Map;#transition=!0;constructor(e,t=!0){this.anchor=e,this.#transition=t}#commit=()=>{var e=A;if(this.#batches.has(e)){var t=this.#batches.get(e),n=this.#onscreen.get(t);if(n)bn(n);else{var r=this.#offscreen.get(t);r&&(this.#onscreen.set(t,r.effect),this.#offscreen.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),n=r.effect)}for(let[t,n]of this.#batches){if(this.#batches.delete(t),t===e)break;let r=this.#offscreen.get(n);r&&(mn(r.effect),this.#offscreen.delete(n))}for(let[e,r]of this.#onscreen){if(e===t)continue;let i=()=>{if(Array.from(this.#batches.values()).includes(e)){var t=document.createDocumentFragment();Sn(r,t),t.append(Lt()),this.#offscreen.set(e,{effect:r,fragment:t})}else mn(r);this.#onscreen.delete(e)};this.#transition||!n?_n(r,i,!1):i()}}};ensure(e,t){var n=A,r=Vt();if(t&&!this.#onscreen.has(e)&&!this.#offscreen.has(e))if(r){var i=document.createDocumentFragment(),a=Lt();i.append(a),this.#offscreen.set(e,{effect:un(()=>t(a)),fragment:i})}else this.#onscreen.set(e,un(()=>t(this.anchor)));if(this.#batches.set(n,e),r){for(let[t,r]of this.#onscreen)t===e?n.skipped_effects.delete(r):n.skipped_effects.add(r);for(let[t,r]of this.#offscreen)t===e?n.skipped_effects.delete(r.effect):n.skipped_effects.add(r.effect);n.add_callback(this.#commit)}else w&&(this.anchor=T),this.#commit()}};function Or(e,t,n=!1){w&&we();var r=new Dr(e),i=n?b:0;function a(t,n){if(w){let a=De(e)===`[!`;if(t===a){var i=Ee();Ce(i),r.anchor=i,Se(!1),r.ensure(t,n),Se(!0);return}}r.ensure(t,n)}ln(()=>{var e=!1;t((t,n=!0)=>{e=!0,a(n,t)}),e||a(!1,null)},i)}let kr=null;function Ar(e){kr=e}function jr(e,t){return t}function Mr(e,t,n){for(var r=e.items,i=[],a=t.length,o=0;o<a;o++)yn(t[o].e,i,!0);var s=a>0&&i.length===0&&n!==null;if(s){var c=n.parentNode;Bt(c),c.append(n),r.clear(),Rr(e,t[0].prev,t[a-1].next)}vn(i,()=>{for(var n=0;n<a;n++){var i=t[n];s||(r.delete(i.k),Rr(e,i.prev,i.next)),mn(i.e,!s)}})}function Nr(t,r,i,a,o,s=null){var c=t,l={flags:r,items:new Map,first:null};if(r&4){var u=t;c=w?Ce(Rt(u)):u.appendChild(Lt())}w&&we();var d=null,f=!1,p=new Map,m=gt(()=>{var t=i();return e(t)?t:t==null?[]:n(t)}),h,g;function _(){Pr(g,h,l,p,c,o,r,a,i),s!==null&&(h.length===0?d?bn(d):d=un(()=>s(c)):d!==null&&_n(d,()=>{d=null}))}ln(()=>{g??=L,h=R(m);var e=h.length;if(f&&e===0)return;f=e===0;let t=!1;if(w&&De(c)===`[!`!=(e===0)&&(c=Ee(),Ce(c),Se(!1),t=!0),w){for(var n=null,u,v=0;v<e;v++){if(T.nodeType===8&&T.data===`]`){c=T,t=!0,Se(!1);break}var y=h[v],b=a(y,v);u=Ir(T,l,n,null,y,b,v,o,r,i),l.items.set(b,u),n=u}e>0&&Ce(Ee())}if(w)e===0&&s&&(d=un(()=>s(c)));else if(Vt()){var x=new Set,S=A;for(v=0;v<e;v+=1){y=h[v],b=a(y,v);var C=l.items.get(b)??p.get(b);C?r&3&&Fr(C,y,v,r):(u=Ir(null,l,null,null,y,b,v,o,r,i,!0),p.set(b,u)),x.add(b)}for(let[e,t]of l.items)x.has(e)||S.skipped_effects.add(t.e);S.add_callback(_)}else _();t&&Se(!0),R(m)}),w&&(c=T)}function Pr(e,t,r,i,a,o,s,c,l){var u=(s&8)!=0,d=(s&3)!=0,f=t.length,p=r.items,m=r.first,h,g=null,_,v=[],y=[],b,x,S,C;if(u)for(C=0;C<f;C+=1)b=t[C],x=c(b,C),S=p.get(x),S!==void 0&&(S.a?.measure(),(_??=new Set).add(S));for(C=0;C<f;C+=1){if(b=t[C],x=c(b,C),S=p.get(x),S===void 0){var ee=i.get(x);if(ee!==void 0){i.delete(x),p.set(x,ee);var te=g?g.next:m;Rr(r,g,ee),Rr(r,ee,te),Lr(ee,te,a),g=ee}else{var ne=m?m.e.nodes_start:a;g=Ir(ne,r,g,g===null?r.first:g.next,b,x,C,o,s,l)}p.set(x,g),v=[],y=[],m=g.next;continue}if(d&&Fr(S,b,C,s),S.e.f&8192&&(bn(S.e),u&&(S.a?.unfix(),(_??=new Set).delete(S))),S!==m){if(h!==void 0&&h.has(S)){if(v.length<y.length){var re=y[0],ie;g=re.prev;var ae=v[0],oe=v[v.length-1];for(ie=0;ie<v.length;ie+=1)Lr(v[ie],re,a);for(ie=0;ie<y.length;ie+=1)h.delete(y[ie]);Rr(r,ae.prev,oe.next),Rr(r,g,ae),Rr(r,oe,re),m=re,g=oe,--C,v=[],y=[]}else h.delete(S),Lr(S,m,a),Rr(r,S.prev,S.next),Rr(r,S,g===null?r.first:g.next),Rr(r,g,S),g=S;continue}for(v=[],y=[];m!==null&&m.k!==x;)m.e.f&8192||(h??=new Set).add(m),y.push(m),m=m.next;if(m===null)continue;S=m}v.push(S),g=S,m=S.next}if(m!==null||h!==void 0){for(var se=h===void 0?[]:n(h);m!==null;)m.e.f&8192||se.push(m),m=m.next;var ce=se.length;if(ce>0){var le=s&4&&f===0?a:null;if(u){for(C=0;C<ce;C+=1)se[C].a?.measure();for(C=0;C<ce;C+=1)se[C].a?.fix()}Mr(r,se,le)}}u&&Le(()=>{if(_!==void 0)for(S of _)S.a?.apply()}),e.first=r.first&&r.first.e,e.last=g&&g.e;for(var ue of i.values())mn(ue.e);i.clear()}function Fr(e,t,n,r){r&1&&Tt(e.v,t),r&2?Tt(e.i,n):e.i=n}function Ir(e,t,n,r,i,a,o,s,c,l,u){var d=kr,f=(c&1)!=0,p=(c&16)==0,m=f?p?wt(i,!1,!1):St(i):i,h=c&2?St(o):o,g={i:h,v:m,k:a,a:null,e:null,prev:n,next:r};kr=g;try{return e===null&&document.createDocumentFragment().append(e=Lt()),g.e=un(()=>s(e,m,h,l),w),g.e.prev=n&&n.e,g.e.next=r&&r.e,n===null?u||(t.first=g):(n.next=g,n.e.next=g.e),r!==null&&(r.prev=g,r.e.prev=g.e),g}finally{kr=d}}function Lr(e,t,n){for(var r=e.next?e.next.e.nodes_start:n,i=t?t.e.nodes_start:n,a=e.e.nodes_start;a!==null&&a!==r;){var o=zt(a);i.before(a),a=o}}function Rr(e,t,n){t===null?e.first=n:(t.next=n,t.e.next=n&&n.e),n!==null&&(n.prev=t,n.e.prev=t&&t.e)}function U(e,t,...n){var r=new Dr(e);ln(()=>{let e=t()??null;r.ensure(e,e&&(t=>e(t,...n)))},b)}function zr(e,t,n){w&&we();var r=new Dr(e);ln(()=>{var e=t()??null;r.ensure(e,e&&(t=>n(t,e)))},b)}function Br(e,t,n,r,i,a){let o=w;w&&we();var s=null;w&&T.nodeType===1&&(s=T,we());var c=w?T:e,l=kr,u=new Dr(c,!1);ln(()=>{let e=t()||null;var a=i?i():n||e===`svg`?`http://www.w3.org/2000/svg`:null;if(e===null){u.ensure(null,null),Sr(!0);return}return u.ensure(e,t=>{var n=kr;if(Ar(l),e){if(s=w?s:a?document.createElementNS(a,e):document.createElement(e),vr(s,s),r){w&&ur(e)&&s.append(document.createComment(``));var i=w?Rt(s):s.appendChild(Lt());w&&(i===null?Se(!1):Ce(i)),r(s,i)}L.nodes_end=s,t.before(s)}Ar(n),w&&Ce(t)}),Sr(!0),()=>{e&&Sr(!1)}},b),Qt(()=>{Sr(!0)}),o&&(Se(!0),Ce(c))}function Vr(e,t){var n=void 0,r;ln(()=>{n!==(n=t())&&(r&&=(mn(r),null),n&&(r=un(()=>{rn(()=>n(e))})))})}function Hr(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Hr(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function Ur(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Hr(e))&&(r&&(r+=` `),r+=t);return r}function Wr(e){return typeof e==`object`?Ur(e):e??``}var Gr=[...` 	
\r\f\xA0\v﻿`];function Kr(e,t,n){var r=e==null?``:``+e;if(t&&(r=r?r+` `+t:t),n){for(var i in n)if(n[i])r=r?r+` `+i:i;else if(r.length)for(var a=i.length,o=0;(o=r.indexOf(i,o))>=0;){var s=o+a;(o===0||Gr.includes(r[o-1]))&&(s===r.length||Gr.includes(r[s]))?r=(o===0?``:r.substring(0,o))+r.substring(s+1):o=s}}return r===``?null:r}function qr(e,t=!1){var n=t?` !important;`:`;`,r=``;for(var i in e){var a=e[i];a!=null&&a!==``&&(r+=` `+i+`: `+a+n)}return r}function Jr(e){return e[0]!==`-`||e[1]!==`-`?e.toLowerCase():e}function Yr(e,t){if(t){var n=``,r,i;if(Array.isArray(t)?(r=t[0],i=t[1]):r=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,``).trim();var a=!1,o=0,s=!1,c=[];r&&c.push(...Object.keys(r).map(Jr)),i&&c.push(...Object.keys(i).map(Jr));var l=0,u=-1;let t=e.length;for(var d=0;d<t;d++){var f=e[d];if(s?f===`/`&&e[d-1]===`*`&&(s=!1):a?a===f&&(a=!1):f===`/`&&e[d+1]===`*`?s=!0:f===`"`||f===`'`?a=f:f===`(`?o++:f===`)`&&o--,!s&&a===!1&&o===0){if(f===`:`&&u===-1)u=d;else if(f===`;`||d===t-1){if(u!==-1){var p=Jr(e.substring(l,u).trim());if(!c.includes(p)){f!==`;`&&d++;var m=e.substring(l,d).trim();n+=` `+m+`;`}}l=d+1,u=-1}}}}return r&&(n+=qr(r)),i&&(n+=qr(i,!0)),n=n.trim(),n===``?null:n}return e==null?null:String(e)}function Xr(e,t,n,r,i,a){var o=e.__className;if(w||o!==n||o===void 0){var s=Kr(n,r,a);(!w||s!==e.getAttribute(`class`))&&(s==null?e.removeAttribute(`class`):t?e.className=s:e.setAttribute(`class`,s)),e.__className=n}else if(a&&i!==a)for(var c in a){var l=!!a[c];(i==null||l!==!!i[c])&&e.classList.toggle(c,l)}return a}function Zr(e,t={},n,r){for(var i in n){var a=n[i];t[i]!==a&&(n[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,r))}}function Qr(e,t,n,r){var i=e.__style;if(w||i!==t){var a=Yr(t,r);(!w||a!==e.getAttribute(`style`))&&(a==null?e.removeAttribute(`style`):e.style.cssText=a),e.__style=t}else r&&(Array.isArray(r)?(Zr(e,n?.[0],r[0]),Zr(e,n?.[1],r[1],`important`)):Zr(e,n,r));return r}function $r(t,n,r=!1){if(t.multiple){if(n==null)return;if(!e(n))return be();for(var i of t.options)i.selected=n.includes(ti(i));return}for(i of t.options){var a=ti(i);if(jt(a,n)){i.selected=!0;return}}(!r||n!==void 0)&&(t.selectedIndex=-1)}function ei(e){var t=new MutationObserver(()=>{$r(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`value`]}),Qt(()=>{t.disconnect()})}function ti(e){return`__value`in e?e.__value:e.value}const ni=Symbol(`class`),ri=Symbol(`style`);var ii=Symbol(`is custom element`),ai=Symbol(`is html`);function oi(e){if(w){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute(`value`)){var n=e.value;W(e,`value`,null),e.value=n}if(e.hasAttribute(`checked`)){var r=e.checked;W(e,`checked`,null),e.checked=r}}};e.__on_r=n,Le(n),Gt()}}function si(e,t){t?e.hasAttribute(`selected`)||e.setAttribute(`selected`,``):e.removeAttribute(`selected`)}function W(e,t,n,r){var i=ui(e);w&&(i[t]=e.getAttribute(t),t===`src`||t===`srcset`||t===`href`&&e.nodeName===`LINK`)||i[t]!==(i[t]=n)&&(t===`loading`&&(e[re]=n),n==null?e.removeAttribute(t):typeof n!=`string`&&fi(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function ci(e,t,n,r,i=!1,a=!1){if(w&&i&&e.tagName===`INPUT`){var o=e;(o.type===`checkbox`?`defaultChecked`:`defaultValue`)in n||oi(o)}var s=ui(e),c=s[ii],l=!s[ai];let u=w&&c;u&&Se(!1);var d=t||{},f=e.tagName===`OPTION`;for(var p in t)p in n||(n[p]=null);n.class?n.class=Wr(n.class):(r||n[ni])&&(n.class=null),n[ri]&&(n.style??=null);var m=fi(e);for(let i in n){let o=n[i];if(f&&i===`value`&&o==null){e.value=e.__value=``,d[i]=o;continue}if(i===`class`){var h=e.namespaceURI===`http://www.w3.org/1999/xhtml`;Xr(e,h,o,r,t?.[ni],n[ni]),d[i]=o,d[ni]=n[ni];continue}if(i===`style`){Qr(e,o,t?.[ri],n[ri]),d[i]=o,d[ri]=n[ri];continue}var g=d[i];if(!(o===g&&!(o===void 0&&e.hasAttribute(i)))){d[i]=o;var _=i[0]+i[1];if(_!==`$$`)if(_===`on`){let t={},n=`$$`+i,r=i.slice(2);var v=rr(r);if(tr(r)&&(r=r.slice(0,-7),t.capture=!0),!v&&g){if(o!=null)continue;e.removeEventListener(r,d[n],t),d[n]=null}if(o!=null)if(v)e[`__${r}`]=o,mr([r]);else{function a(e){d[i].call(this,e)}d[n]=pr(r,e,a,t)}else v&&(e[`__${r}`]=void 0)}else if(i===`style`)W(e,i,o);else if(i===`autofocus`)Ht(e,!!o);else if(!c&&(i===`__value`||i===`value`&&o!=null))e.value=e.__value=o;else if(i===`selected`&&f)si(e,o);else{var y=i;l||(y=or(y));var b=y===`defaultValue`||y===`defaultChecked`;if(o==null&&!c&&!b)if(s[i]=null,y===`value`||y===`checked`){let n=e,r=t===void 0;if(y===`value`){let e=n.defaultValue;n.removeAttribute(y),n.defaultValue=e,n.value=n.__value=r?e:null}else{let e=n.defaultChecked;n.removeAttribute(y),n.defaultChecked=e,n.checked=r?e:!1}}else e.removeAttribute(i);else b||m.includes(y)&&(c||typeof o!=`string`)?(e[y]=o,y in s&&(s[y]=ve)):typeof o!=`function`&&W(e,y,o,a)}}}return u&&Se(!0),d}function li(e,t,n=[],r=[],i,a=!1,o=!1){ut(n,r,n=>{var r=void 0,s={},c=e.nodeName===`SELECT`,l=!1;if(ln(()=>{var u=t(...n.map(R)),d=ci(e,r,u,i,a,o);l&&c&&`value`in u&&$r(e,u.value);for(let e of Object.getOwnPropertySymbols(s))u[e]||mn(s[e]);for(let t of Object.getOwnPropertySymbols(u)){var f=u[t];t.description===`@attach`&&(!r||f!==r[t])&&(s[t]&&mn(s[t]),s[t]=un(()=>Vr(e,()=>f))),d[t]=f}r=d}),c){var u=e;rn(()=>{$r(u,r.value,!0),ei(u)})}l=!0})}function ui(e){return e.__attributes??={[ii]:e.nodeName.includes(`-`),[ai]:e.namespaceURI===`http://www.w3.org/1999/xhtml`}}var di=new Map;function fi(e){var t=e.getAttribute(`is`)||e.nodeName,n=di.get(t);if(n)return n;di.set(t,n=[]);for(var r,i=e,o=Element.prototype;o!==i;){for(var s in r=a(i),r)r[s].set&&n.push(s);i=c(i)}return n}var pi=()=>performance.now();const mi={tick:e=>requestAnimationFrame(e),now:()=>pi(),tasks:new Set};function hi(){let e=mi.now();mi.tasks.forEach(t=>{t.c(e)||(mi.tasks.delete(t),t.f())}),mi.tasks.size!==0&&mi.tick(hi)}function gi(e){let t;return mi.tasks.size===0&&mi.tick(hi),{promise:new Promise(n=>{mi.tasks.add(t={c:e,f:n})}),abort(){mi.tasks.delete(t)}}}function _i(e,t){Kt(()=>{e.dispatchEvent(new CustomEvent(t))})}function vi(e){if(e===`float`)return`cssFloat`;if(e===`offset`)return`cssOffset`;if(e.startsWith(`--`))return e;let t=e.split(`-`);return t.length===1?t[0]:t[0]+t.slice(1).map(e=>e[0].toUpperCase()+e.slice(1)).join(``)}function yi(e){let t={},n=e.split(`;`);for(let e of n){let[n,r]=e.split(`:`);if(!n||r===void 0)break;let i=vi(n.trim());t[i]=r.trim()}return t}var bi=e=>e;function xi(e,t,n,r){var i=(e&1)!=0,a=(e&2)!=0,o=i&&a,s=(e&4)!=0,c=o?`both`:i?`in`:`out`,l,u=t.inert,d=t.style.overflow,f,p;function m(){return Kt(()=>l??=n()(t,r?.()??{},{direction:c}))}var h={is_global:s,in(){if(t.inert=u,!i){p?.abort(),p?.reset?.();return}a||f?.abort(),_i(t,`introstart`),f=Si(t,m(),p,1,()=>{_i(t,`introend`),f?.abort(),f=l=void 0,t.style.overflow=d})},out(e){if(!a){e?.(),l=void 0;return}t.inert=!0,_i(t,`outrostart`),p=Si(t,m(),f,0,()=>{_i(t,`outroend`),e?.()})},stop:()=>{f?.abort(),p?.abort()}},g=L;if((g.transitions??=[]).push(h),i&&xr){var _=s;if(!_){for(var v=g.parent;v&&v.f&65536;)for(;(v=v.parent)&&!(v.f&16););_=!v||(v.f&32768)!=0}_&&rn(()=>{Xn(()=>h.in())})}}function Si(e,t,n,r,i){var a=r===1;if(u(t)){var o,s=!1;return Le(()=>{if(!s){var c=t({direction:a?`in`:`out`});o=Si(e,c,n,r,i)}}),{abort:()=>{s=!0,o?.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(n?.deactivate(),!t?.duration)return i(),{abort:d,deactivate:d,reset:d,t:()=>r};let{delay:c=0,css:l,tick:f,easing:p=bi}=t;var m=[];if(a&&n===void 0&&(f&&f(0,1),l)){var h=yi(l(0,1));m.push(h,h)}var g=()=>1-r,_=e.animate(m,{duration:c,fill:`forwards`});return _.onfinish=()=>{_.cancel();var a=n?.t()??1-r;n?.abort();var o=r-a,s=t.duration*Math.abs(o),c=[];if(s>0){var u=!1;if(l)for(var d=Math.ceil(s/(1e3/60)),m=0;m<=d;m+=1){var h=a+o*p(m/d),v=yi(l(h,1-h));c.push(v),u||=v.overflow===`hidden`}u&&(e.style.overflow=`hidden`),g=()=>{var e=_.currentTime;return a+o*p(e/s)},f&&gi(()=>{if(_.playState!==`running`)return!1;var e=g();return f(e,1-e),!0})}_=e.animate(c,{duration:s,fill:`forwards`}),_.onfinish=()=>{g=()=>r,f?.(r,1-r),i()}},{abort:()=>{_&&(_.cancel(),_.effect=null,_.onfinish=d)},deactivate:()=>{i=d},reset:()=>{r===0&&f?.(1,0)},t:()=>g()}}function Ci(e,t,n=t){var r=new WeakSet;qt(e,`input`,async i=>{var a=i?e.defaultValue:e.value;if(a=wi(e)?Ti(a):a,n(a),A!==null&&r.add(A),await Jn(),a!==(a=t())){var o=e.selectionStart,s=e.selectionEnd,c=e.value.length;if(e.value=a??``,s!==null){var l=e.value.length;o===s&&s===c&&l>c?(e.selectionStart=l,e.selectionEnd=l):(e.selectionStart=o,e.selectionEnd=Math.min(s,l))}}}),(w&&e.defaultValue!==e.value||Xn(t)==null&&e.value)&&(n(wi(e)?Ti(e.value):e.value),A!==null&&r.add(A)),cn(()=>{var n=t();if(e===document.activeElement){var i=We??A;if(r.has(i))return}wi(e)&&n===Ti(e.value)||e.type===`date`&&!n&&!e.value||n!==e.value&&(e.value=n??``)})}function wi(e){var t=e.type;return t===`number`||t===`range`}function Ti(e){return e===``?null:+e}function Ei(e,t){return e===t||e?.[te]===t}function Di(e={},t,n,r){return rn(()=>{var i,a;return cn(()=>{i=a,a=r?.()||[],Xn(()=>{e!==n(...a)&&(t(e,...a),i&&Ei(n(...i),e)&&t(null,...i))})}),()=>{Le(()=>{a&&Ei(n(...a),e)&&t(null,...a)})}}),e}function Oi(e=!1){let t=D,n=t.l.u;if(!n)return;let r=()=>$n(t.s);if(e){let e=0,n={},i=pt(()=>{let r=!1,i=t.s;for(let e in i)i[e]!==n[e]&&(n[e]=i[e],r=!0);return r&&e++,e});r=()=>R(i)}n.b.length&&tn(()=>{ki(t,r),p(n.b)}),$t(()=>{let e=Xn(()=>n.m.map(f));return()=>{for(let t of e)typeof t==`function`&&t()}}),n.a.length&&$t(()=>{ki(t,r),p(n.a)})}function ki(e,t){if(e.l.s)for(let t of e.l.s)R(t);t()}function Ai(e){var t=St(0);return function(){return arguments.length===1?(j(t,R(t)+1),arguments[0]):(R(t),e())}}function ji(t,n){var r=t.$$events?.[n.type];for(var i of e(r)?r.slice():r==null?[]:[r])i.call(this,n)}function Mi(e,t,n){if(e==null)return t(void 0),n&&n(void 0),d;let r=Xn(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}var Ni=[];function Pi(e,t){return{subscribe:Fi(e,t).subscribe}}function Fi(e,t=d){let n=null,r=new Set;function i(t){if(ke(e,t)&&(e=t,n)){let t=!Ni.length;for(let t of r)t[1](),Ni.push(t,e);if(t){for(let e=0;e<Ni.length;e+=2)Ni[e][0](Ni[e+1]);Ni.length=0}}}function a(t){i(t(e))}function o(o,s=d){let c=[o,s];return r.add(c),r.size===1&&(n=t(i,a)||d),o(e),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:i,update:a,subscribe:o}}function Ii(e,t,n){let r=!Array.isArray(e),i=r?[e]:e;if(!i.every(Boolean))throw Error(`derived() expects stores as input, got a falsy value`);let a=t.length<2;return Pi(n,(e,n)=>{let o=!1,s=[],c=0,l=d,u=()=>{if(c)return;l();let i=t(r?s[0]:s,e,n);a?e(i):l=typeof i==`function`?i:d},f=i.map((e,t)=>Mi(e,e=>{s[t]=e,c&=~(1<<t),o&&u()},()=>{c|=1<<t}));return o=!0,u(),function(){p(f),l(),o=!1}})}function Li(e){let t;return Mi(e,e=>t=e)(),t}var Ri=!1,zi=Symbol();function Bi(e,t,n){let r=n[t]??={store:null,source:wt(void 0),unsubscribe:d};if(r.store!==e&&!(zi in n))if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=d;else{var i=!0;r.unsubscribe=Mi(e,e=>{i?r.source.v=e:j(r.source,e)}),i=!1}return e&&zi in n?Li(e):R(r.source)}function Vi(){let e={};function t(){Qt(()=>{for(var t in e)e[t].unsubscribe();r(e,zi,{enumerable:!1,value:!0})})}return[e,t]}function Hi(e){var t=Ri;try{return Ri=!1,[e(),Ri]}finally{Ri=t}}var Ui={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function G(e,t,n){return new Proxy({props:e,exclude:t},Ui)}var Wi={get(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(u(r)&&(r=r()),typeof r==`object`&&r&&t in r)return r[t]}},set(e,t,n){let r=e.props.length;for(;r--;){let a=e.props[r];u(a)&&(a=a());let o=i(a,t);if(o&&o.set)return o.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(u(r)&&(r=r()),typeof r==`object`&&r&&t in r){let e=i(r,t);return e&&!e.configurable&&(e.configurable=!0),e}}},has(e,t){if(t===te||t===ne)return!1;for(let n of e.props)if(u(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){let t=[];for(let n of e.props)if(u(n)&&(n=n()),n){for(let e in n)t.includes(e)||t.push(e);for(let e of Object.getOwnPropertySymbols(n))t.includes(e)||t.push(e)}return t}};function K(...e){return new Proxy({props:e},Wi)}function Gi(e,t,n,r){var a=!je||(n&2)!=0,o=(n&8)!=0,s=(n&16)!=0,c=r,l=!0,u=()=>(l&&(l=!1,c=s?Xn(r):r),c),d;if(o){var f=te in e||ne in e;d=i(e,t)?.set??(f&&t in e?n=>e[t]=n:void 0)}var p,m=!1;o?[p,m]=Hi(()=>e[t]):p=e[t],p===void 0&&r!==void 0&&(p=u(),d&&(a&&fe(t),d(p)));var h=a?()=>{var n=e[t];return n===void 0?u():(l=!0,n)}:()=>{var n=e[t];return n!==void 0&&(c=void 0),n===void 0?c:n};if(a&&!(n&4))return h;if(d){var g=e.$$legacy;return(function(e,t){return arguments.length>0?((!a||!t||g||m)&&d(t?h():e),e):h()})}var _=!1,v=(n&1?pt:gt)(()=>(_=!1,h()));o&&R(v);var y=L;return(function(e,t){if(arguments.length>0){let n=t?R(v):a&&o?kt(e):e;return j(v,n),_=!0,c!==void 0&&(c=n),e}return Tn&&_||y.f&16384?v.v:R(v)})}function Ki(e){D===null&&ae(`onMount`),je&&D.l!==null?Zi(D).m.push(e):$t(()=>{let t=Xn(e);if(typeof t==`function`)return t})}function qi(e){D===null&&ae(`onDestroy`),Ki(()=>()=>Xn(e))}function Ji(e,t,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:r})}function Yi(){let t=D;return t===null&&ae(`createEventDispatcher`),(n,r,i)=>{let a=t.s.$$events?.[n];if(a){let o=e(a)?a.slice():[a],s=Ji(n,r,i);for(let e of o)e.call(t.x,s);return!s.defaultPrevented}return!0}}function Xi(e){D===null&&ae(`afterUpdate`),D.l===null&&de(`afterUpdate`),Zi(D).a.push(e)}function Zi(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}typeof window<`u`&&((window.__svelte??={}).v??=new Set).add(`5`);var Qi={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":2,"stroke-linecap":`round`,"stroke-linejoin":`round`},$i=br(`<svg><!><!></svg>`);function q(e,t){O(t,!0);let n=Gi(t,`color`,3,`currentColor`),r=Gi(t,`size`,3,24),i=Gi(t,`strokeWidth`,3,2),a=Gi(t,`absoluteStrokeWidth`,3,!1),o=Gi(t,`iconNode`,19,()=>[]),s=G(t,[`$$slots`,`$$events`,`$$legacy`,`name`,`color`,`size`,`strokeWidth`,`absoluteStrokeWidth`,`iconNode`,`children`]);var c=$i();li(c,e=>({...Qi,...s,width:r(),height:r(),stroke:n(),"stroke-width":e,class:[`lucide-icon lucide`,t.name&&`lucide-${t.name}`,t.class]}),[()=>a()?Number(i())*24/Number(r()):i()]);var l=M(c);Nr(l,17,o,jr,(e,t)=>{var n=ht(()=>h(R(t),2));let r=()=>R(n)[0],i=()=>R(n)[1];var a=B(),o=N(a);Br(o,r,!0,(e,t)=>{li(e,()=>({...i()}))}),V(e,a)});var u=P(l);U(u,()=>t.children??d),E(c),V(e,c),k()}function ea(e,t){O(t,!0);
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
let n=G(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M11 14h1v4`}],[`path`,{d:`M16 2v4`}],[`path`,{d:`M3 10h18`}],[`path`,{d:`M8 2v4`}],[`rect`,{x:`3`,y:`4`,width:`18`,height:`18`,rx:`2`}]];q(e,K({name:`calendar-1`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=B(),i=N(r);U(i,()=>t.children??d),V(e,r)},$$slots:{default:!0}})),k()}function ta(e,t){O(t,!0);
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
let n=G(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M8 2v4`}],[`path`,{d:`M16 2v4`}],[`rect`,{width:`18`,height:`18`,x:`3`,y:`4`,rx:`2`}],[`path`,{d:`M3 10h18`}],[`path`,{d:`M8 14h.01`}],[`path`,{d:`M12 14h.01`}],[`path`,{d:`M16 14h.01`}],[`path`,{d:`M8 18h.01`}],[`path`,{d:`M12 18h.01`}],[`path`,{d:`M16 18h.01`}]];q(e,K({name:`calendar-days`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=B(),i=N(r);U(i,()=>t.children??d),V(e,r)},$$slots:{default:!0}})),k()}function na(e,t){O(t,!0);
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
let n=G(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M8 2v4`}],[`path`,{d:`M16 2v4`}],[`rect`,{width:`18`,height:`18`,x:`3`,y:`4`,rx:`2`}],[`path`,{d:`M3 10h18`}]];q(e,K({name:`calendar`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=B(),i=N(r);U(i,()=>t.children??d),V(e,r)},$$slots:{default:!0}})),k()}function ra(e,t){O(t,!0);
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
let n=G(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M20 6 9 17l-5-5`}]];q(e,K({name:`check`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=B(),i=N(r);U(i,()=>t.children??d),V(e,r)},$$slots:{default:!0}})),k()}function ia(e,t){O(t,!0);
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
let n=G(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`m15 18-6-6 6-6`}]];q(e,K({name:`chevron-left`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=B(),i=N(r);U(i,()=>t.children??d),V(e,r)},$$slots:{default:!0}})),k()}function aa(e,t){O(t,!0);
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
let n=G(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`m9 18 6-6-6-6`}]];q(e,K({name:`chevron-right`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=B(),i=N(r);U(i,()=>t.children??d),V(e,r)},$$slots:{default:!0}})),k()}function oa(e,t){O(t,!0);
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
let n=G(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`circle`,{cx:`12`,cy:`12`,r:`10`}],[`path`,{d:`M8 12h8`}],[`path`,{d:`M12 8v8`}]];q(e,K({name:`circle-plus`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=B(),i=N(r);U(i,()=>t.children??d),V(e,r)},$$slots:{default:!0}})),k()}function sa(e,t){O(t,!0);
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
let n=G(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M12 6v6l2-4`}],[`circle`,{cx:`12`,cy:`12`,r:`10`}]];q(e,K({name:`clock-1`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=B(),i=N(r);U(i,()=>t.children??d),V(e,r)},$$slots:{default:!0}})),k()}function ca(e,t){O(t,!0);
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
let n=G(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M12 6v6l-4-2`}],[`circle`,{cx:`12`,cy:`12`,r:`10`}]];q(e,K({name:`clock-10`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=B(),i=N(r);U(i,()=>t.children??d),V(e,r)},$$slots:{default:!0}})),k()}function la(e,t){O(t,!0);
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
let n=G(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M12 6v6l4 2`}],[`circle`,{cx:`12`,cy:`12`,r:`10`}]];q(e,K({name:`clock`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=B(),i=N(r);U(i,()=>t.children??d),V(e,r)},$$slots:{default:!0}})),k()}function ua(e,t){O(t,!0);
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
let n=G(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M12.409 5.824c-.702.792-1.15 1.496-1.415 2.166l2.153 2.156a.5.5 0 0 1 0 .707l-2.293 2.293a.5.5 0 0 0 0 .707L12 15`}],[`path`,{d:`M13.508 20.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.677.6.6 0 0 0 .818.001A5.5 5.5 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5z`}]];q(e,K({name:`heart-crack`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=B(),i=N(r);U(i,()=>t.children??d),V(e,r)},$$slots:{default:!0}})),k()}function da(e,t){O(t,!0);
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
let n=G(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`}],[`path`,{d:`M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`}]];q(e,K({name:`house`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=B(),i=N(r);U(i,()=>t.children??d),V(e,r)},$$slots:{default:!0}})),k()}function fa(e,t){O(t,!0);
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
let n=G(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M13 5h8`}],[`path`,{d:`M13 12h8`}],[`path`,{d:`M13 19h8`}],[`path`,{d:`m3 17 2 2 4-4`}],[`rect`,{x:`3`,y:`4`,width:`6`,height:`6`,rx:`1`}]];q(e,K({name:`list-todo`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=B(),i=N(r);U(i,()=>t.children??d),V(e,r)},$$slots:{default:!0}})),k()}function pa(e,t){O(t,!0);
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
let n=G(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M4 5h16`}],[`path`,{d:`M4 12h16`}],[`path`,{d:`M4 19h16`}]];q(e,K({name:`menu`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=B(),i=N(r);U(i,()=>t.children??d),V(e,r)},$$slots:{default:!0}})),k()}function ma(e,t){O(t,!0);
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
let n=G(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`}]];q(e,K({name:`moon`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=B(),i=N(r);U(i,()=>t.children??d),V(e,r)},$$slots:{default:!0}})),k()}function ha(e,t){O(t,!0);
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
let n=G(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z`}],[`path`,{d:`m5 2 5 5`}],[`path`,{d:`M2 13h15`}],[`path`,{d:`M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z`}]];q(e,K({name:`paint-bucket`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=B(),i=N(r);U(i,()=>t.children??d),V(e,r)},$$slots:{default:!0}})),k()}function ga(e,t){O(t,!0);
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
let n=G(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384`}]];q(e,K({name:`phone`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=B(),i=N(r);U(i,()=>t.children??d),V(e,r)},$$slots:{default:!0}})),k()}function _a(e,t){O(t,!0);
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
let n=G(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2`}],[`path`,{d:`M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6`}],[`rect`,{x:`6`,y:`14`,width:`12`,height:`8`,rx:`1`}]];q(e,K({name:`printer`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=B(),i=N(r);U(i,()=>t.children??d),V(e,r)},$$slots:{default:!0}})),k()}function va(e,t){O(t,!0);
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
let n=G(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`m21 21-4.34-4.34`}],[`circle`,{cx:`11`,cy:`11`,r:`8`}]];q(e,K({name:`search`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=B(),i=N(r);U(i,()=>t.children??d),V(e,r)},$$slots:{default:!0}})),k()}function ya(e,t){O(t,!0);
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
let n=G(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M14 17H5`}],[`path`,{d:`M19 7h-9`}],[`circle`,{cx:`17`,cy:`17`,r:`3`}],[`circle`,{cx:`7`,cy:`7`,r:`3`}]];q(e,K({name:`settings-2`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=B(),i=N(r);U(i,()=>t.children??d),V(e,r)},$$slots:{default:!0}})),k()}function ba(e,t){O(t,!0);
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
let n=G(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`circle`,{cx:`12`,cy:`12`,r:`4`}],[`path`,{d:`M12 2v2`}],[`path`,{d:`M12 20v2`}],[`path`,{d:`m4.93 4.93 1.41 1.41`}],[`path`,{d:`m17.66 17.66 1.41 1.41`}],[`path`,{d:`M2 12h2`}],[`path`,{d:`M20 12h2`}],[`path`,{d:`m6.34 17.66-1.41 1.41`}],[`path`,{d:`m19.07 4.93-1.41 1.41`}]];q(e,K({name:`sun`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=B(),i=N(r);U(i,()=>t.children??d),V(e,r)},$$slots:{default:!0}})),k()}function xa(e,t){O(t,!0);
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
let n=G(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`}],[`path`,{d:`M3 6h18`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`}]];q(e,K({name:`trash`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=B(),i=N(r);U(i,()=>t.children??d),V(e,r)},$$slots:{default:!0}})),k()}function Sa(e,t){O(t,!0);
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
let n=G(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`}],[`circle`,{cx:`12`,cy:`7`,r:`4`}]];q(e,K({name:`user`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=B(),i=N(r);U(i,()=>t.children??d),V(e,r)},$$slots:{default:!0}})),k()}var Ca=class e extends Error{constructor(t){super(`ClientResponseError`),this.url=``,this.status=0,this.response={},this.isAbort=!1,this.originalError=null,Object.setPrototypeOf(this,e.prototype),typeof t==`object`&&t&&(this.url=typeof t.url==`string`?t.url:``,this.status=typeof t.status==`number`?t.status:0,this.isAbort=!!t.isAbort,this.originalError=t.originalError,t.response!==null&&typeof t.response==`object`?this.response=t.response:t.data!==null&&typeof t.data==`object`?this.response=t.data:this.response={}),this.originalError||t instanceof e||(this.originalError=t),typeof DOMException<`u`&&t instanceof DOMException&&(this.isAbort=!0),this.name=`ClientResponseError `+this.status,this.message=this.response?.message,this.message||(this.isAbort?this.message=`The request was autocancelled. You can find more info in https://github.com/pocketbase/js-sdk#auto-cancellation.`:this.originalError?.cause?.message?.includes(`ECONNREFUSED ::1`)?this.message=`Failed to connect to the PocketBase server. Try changing the SDK URL from localhost to 127.0.0.1 (https://github.com/pocketbase/js-sdk/issues/21).`:this.message=`Something went wrong.`),this.cause=this.originalError}get data(){return this.response}toJSON(){return{...this}}},wa=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function Ta(e,t){let n={};if(typeof e!=`string`)return n;let r=Object.assign({},t||{}).decode||Da,i=0;for(;i<e.length;){let t=e.indexOf(`=`,i);if(t===-1)break;let a=e.indexOf(`;`,i);if(a===-1)a=e.length;else if(a<t){i=e.lastIndexOf(`;`,t-1)+1;continue}let o=e.slice(i,t).trim();if(n[o]===void 0){let i=e.slice(t+1,a).trim();i.charCodeAt(0)===34&&(i=i.slice(1,-1));try{n[o]=r(i)}catch{n[o]=i}}i=a+1}return n}function Ea(e,t,n){let r=Object.assign({},n||{}),i=r.encode||Oa;if(!wa.test(e))throw TypeError(`argument name is invalid`);let a=i(t);if(a&&!wa.test(a))throw TypeError(`argument val is invalid`);let o=e+`=`+a;if(r.maxAge!=null){let e=r.maxAge-0;if(isNaN(e)||!isFinite(e))throw TypeError(`option maxAge is invalid`);o+=`; Max-Age=`+Math.floor(e)}if(r.domain){if(!wa.test(r.domain))throw TypeError(`option domain is invalid`);o+=`; Domain=`+r.domain}if(r.path){if(!wa.test(r.path))throw TypeError(`option path is invalid`);o+=`; Path=`+r.path}if(r.expires){if(!function(e){return Object.prototype.toString.call(e)===`[object Date]`||e instanceof Date}(r.expires)||isNaN(r.expires.valueOf()))throw TypeError(`option expires is invalid`);o+=`; Expires=`+r.expires.toUTCString()}if(r.httpOnly&&(o+=`; HttpOnly`),r.secure&&(o+=`; Secure`),r.priority)switch(typeof r.priority==`string`?r.priority.toLowerCase():r.priority){case`low`:o+=`; Priority=Low`;break;case`medium`:o+=`; Priority=Medium`;break;case`high`:o+=`; Priority=High`;break;default:throw TypeError(`option priority is invalid`)}if(r.sameSite)switch(typeof r.sameSite==`string`?r.sameSite.toLowerCase():r.sameSite){case!0:o+=`; SameSite=Strict`;break;case`lax`:o+=`; SameSite=Lax`;break;case`strict`:o+=`; SameSite=Strict`;break;case`none`:o+=`; SameSite=None`;break;default:throw TypeError(`option sameSite is invalid`)}return o}function Da(e){return e.indexOf(`%`)===-1?e:decodeURIComponent(e)}function Oa(e){return encodeURIComponent(e)}var ka=typeof navigator<`u`&&navigator.product===`ReactNative`||typeof global<`u`&&global.HermesInternal,Aa;function ja(e){if(e)try{let t=decodeURIComponent(Aa(e.split(`.`)[1]).split(``).map((function(e){return`%`+(`00`+e.charCodeAt(0).toString(16)).slice(-2)})).join(``));return JSON.parse(t)||{}}catch{}return{}}function Ma(e,t=0){let n=ja(e);return!(Object.keys(n).length>0&&(!n.exp||n.exp-t>Date.now()/1e3))}Aa=typeof atob!=`function`||ka?e=>{let t=String(e).replace(/=+$/,``);if(t.length%4==1)throw Error(`'atob' failed: The string to be decoded is not correctly encoded.`);for(var n,r,i=0,a=0,o=``;r=t.charAt(a++);~r&&(n=i%4?64*n+r:r,i++%4)&&(o+=String.fromCharCode(255&n>>(-2*i&6))))r=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`.indexOf(r);return o}:atob;var Na=`pb_auth`,Pa=class{constructor(){this.baseToken=``,this.baseModel=null,this._onChangeCallbacks=[]}get token(){return this.baseToken}get record(){return this.baseModel}get model(){return this.baseModel}get isValid(){return!Ma(this.token)}get isSuperuser(){let e=ja(this.token);return e.type==`auth`&&(this.record?.collectionName==`_superusers`||!this.record?.collectionName&&e.collectionId==`pbc_3142635823`)}get isAdmin(){return console.warn(`Please replace pb.authStore.isAdmin with pb.authStore.isSuperuser OR simply check the value of pb.authStore.record?.collectionName`),this.isSuperuser}get isAuthRecord(){return console.warn(`Please replace pb.authStore.isAuthRecord with !pb.authStore.isSuperuser OR simply check the value of pb.authStore.record?.collectionName`),ja(this.token).type==`auth`&&!this.isSuperuser}save(e,t){this.baseToken=e||``,this.baseModel=t||null,this.triggerChange()}clear(){this.baseToken=``,this.baseModel=null,this.triggerChange()}loadFromCookie(e,t=Na){let n=Ta(e||``)[t]||``,r={};try{r=JSON.parse(n),(typeof r!=`object`||Array.isArray(r))&&(r={})}catch{}this.save(r.token||``,r.record||r.model||null)}exportToCookie(e,t=Na){let n={secure:!0,sameSite:!0,httpOnly:!0,path:`/`},r=ja(this.token);n.expires=r?.exp?new Date(1e3*r.exp):new Date(`1970-01-01`),e=Object.assign({},n,e);let i={token:this.token,record:this.record?JSON.parse(JSON.stringify(this.record)):null},a=Ea(t,JSON.stringify(i),e),o=typeof Blob<`u`?new Blob([a]).size:a.length;if(i.record&&o>4096){i.record={id:i.record?.id,email:i.record?.email};let n=[`collectionId`,`collectionName`,`verified`];for(let e in this.record)n.includes(e)&&(i.record[e]=this.record[e]);a=Ea(t,JSON.stringify(i),e)}return a}onChange(e,t=!1){return this._onChangeCallbacks.push(e),t&&e(this.token,this.record),()=>{for(let t=this._onChangeCallbacks.length-1;t>=0;t--)if(this._onChangeCallbacks[t]==e)return delete this._onChangeCallbacks[t],void this._onChangeCallbacks.splice(t,1)}}triggerChange(){for(let e of this._onChangeCallbacks)e&&e(this.token,this.record)}},Fa=class extends Pa{constructor(e=`pocketbase_auth`){super(),this.storageFallback={},this.storageKey=e,this._bindStorageEvent()}get token(){return(this._storageGet(this.storageKey)||{}).token||``}get record(){let e=this._storageGet(this.storageKey)||{};return e.record||e.model||null}get model(){return this.record}save(e,t){this._storageSet(this.storageKey,{token:e,record:t}),super.save(e,t)}clear(){this._storageRemove(this.storageKey),super.clear()}_storageGet(e){if(typeof window<`u`&&window?.localStorage){let t=window.localStorage.getItem(e)||``;try{return JSON.parse(t)}catch{return t}}return this.storageFallback[e]}_storageSet(e,t){if(typeof window<`u`&&window?.localStorage){let n=t;typeof t!=`string`&&(n=JSON.stringify(t)),window.localStorage.setItem(e,n)}else this.storageFallback[e]=t}_storageRemove(e){typeof window<`u`&&window?.localStorage&&window.localStorage?.removeItem(e),delete this.storageFallback[e]}_bindStorageEvent(){typeof window<`u`&&window?.localStorage&&window.addEventListener&&window.addEventListener(`storage`,(e=>{if(e.key!=this.storageKey)return;let t=this._storageGet(this.storageKey)||{};super.save(t.token||``,t.record||t.model||null)}))}},Ia=class{constructor(e){this.client=e}},La=class extends Ia{async getAll(e){return e=Object.assign({method:`GET`},e),this.client.send(`/api/settings`,e)}async update(e,t){return t=Object.assign({method:`PATCH`,body:e},t),this.client.send(`/api/settings`,t)}async testS3(e=`storage`,t){return t=Object.assign({method:`POST`,body:{filesystem:e}},t),this.client.send(`/api/settings/test/s3`,t).then((()=>!0))}async testEmail(e,t,n,r){return r=Object.assign({method:`POST`,body:{email:t,template:n,collection:e}},r),this.client.send(`/api/settings/test/email`,r).then((()=>!0))}async generateAppleClientSecret(e,t,n,r,i,a){return a=Object.assign({method:`POST`,body:{clientId:e,teamId:t,keyId:n,privateKey:r,duration:i}},a),this.client.send(`/api/settings/apple/generate-client-secret`,a)}},Ra=[`requestKey`,`$cancelKey`,`$autoCancel`,`fetch`,`headers`,`body`,`query`,`params`,`cache`,`credentials`,`headers`,`integrity`,`keepalive`,`method`,`mode`,`redirect`,`referrer`,`referrerPolicy`,`signal`,`window`];function za(e){if(e)for(let t in e.query=e.query||{},e)Ra.includes(t)||(e.query[t]=e[t],delete e[t])}function Ba(e){let t=[];for(let n in e){let r=encodeURIComponent(n),i=Array.isArray(e[n])?e[n]:[e[n]];for(let e of i)e=Va(e),e!==null&&t.push(r+`=`+e)}return t.join(`&`)}function Va(e){return e==null?null:e instanceof Date?encodeURIComponent(e.toISOString().replace(`T`,` `)):typeof e==`object`?encodeURIComponent(JSON.stringify(e)):encodeURIComponent(e)}var Ha=class extends Ia{constructor(){super(...arguments),this.clientId=``,this.eventSource=null,this.subscriptions={},this.lastSentSubscriptions=[],this.maxConnectTimeout=15e3,this.reconnectAttempts=0,this.maxReconnectAttempts=1/0,this.predefinedReconnectIntervals=[200,300,500,1e3,1200,1500,2e3],this.pendingConnects=[]}get isConnected(){return!!this.eventSource&&!!this.clientId&&!this.pendingConnects.length}async subscribe(e,t,n){if(!e)throw Error(`topic must be set.`);let r=e;if(n){za(n=Object.assign({},n));let e=`options=`+encodeURIComponent(JSON.stringify({query:n.query,headers:n.headers}));r+=(r.includes(`?`)?`&`:`?`)+e}let i=function(e){let n=e,r;try{r=JSON.parse(n?.data)}catch{}t(r||{})};return this.subscriptions[r]||(this.subscriptions[r]=[]),this.subscriptions[r].push(i),this.isConnected?this.subscriptions[r].length===1?await this.submitSubscriptions():this.eventSource?.addEventListener(r,i):await this.connect(),async()=>this.unsubscribeByTopicAndListener(e,i)}async unsubscribe(e){let t=!1;if(e){let n=this.getSubscriptionsByTopic(e);for(let e in n)if(this.hasSubscriptionListeners(e)){for(let t of this.subscriptions[e])this.eventSource?.removeEventListener(e,t);delete this.subscriptions[e],t||=!0}}else this.subscriptions={};this.hasSubscriptionListeners()?t&&await this.submitSubscriptions():this.disconnect()}async unsubscribeByPrefix(e){let t=!1;for(let n in this.subscriptions)if((n+`?`).startsWith(e)){t=!0;for(let e of this.subscriptions[n])this.eventSource?.removeEventListener(n,e);delete this.subscriptions[n]}t&&(this.hasSubscriptionListeners()?await this.submitSubscriptions():this.disconnect())}async unsubscribeByTopicAndListener(e,t){let n=!1,r=this.getSubscriptionsByTopic(e);for(let e in r){if(!Array.isArray(this.subscriptions[e])||!this.subscriptions[e].length)continue;let r=!1;for(let n=this.subscriptions[e].length-1;n>=0;n--)this.subscriptions[e][n]===t&&(r=!0,delete this.subscriptions[e][n],this.subscriptions[e].splice(n,1),this.eventSource?.removeEventListener(e,t));r&&(this.subscriptions[e].length||delete this.subscriptions[e],n||this.hasSubscriptionListeners(e)||(n=!0))}this.hasSubscriptionListeners()?n&&await this.submitSubscriptions():this.disconnect()}hasSubscriptionListeners(e){if(this.subscriptions=this.subscriptions||{},e)return!!this.subscriptions[e]?.length;for(let e in this.subscriptions)if(this.subscriptions[e]?.length)return!0;return!1}async submitSubscriptions(){if(this.clientId)return this.addAllSubscriptionListeners(),this.lastSentSubscriptions=this.getNonEmptySubscriptionKeys(),this.client.send(`/api/realtime`,{method:`POST`,body:{clientId:this.clientId,subscriptions:this.lastSentSubscriptions},requestKey:this.getSubscriptionsCancelKey()}).catch((e=>{if(!e?.isAbort)throw e}))}getSubscriptionsCancelKey(){return`realtime_`+this.clientId}getSubscriptionsByTopic(e){let t={};for(let n in e=e.includes(`?`)?e:e+`?`,this.subscriptions)(n+`?`).startsWith(e)&&(t[n]=this.subscriptions[n]);return t}getNonEmptySubscriptionKeys(){let e=[];for(let t in this.subscriptions)this.subscriptions[t].length&&e.push(t);return e}addAllSubscriptionListeners(){if(this.eventSource)for(let e in this.removeAllSubscriptionListeners(),this.subscriptions)for(let t of this.subscriptions[e])this.eventSource.addEventListener(e,t)}removeAllSubscriptionListeners(){if(this.eventSource)for(let e in this.subscriptions)for(let t of this.subscriptions[e])this.eventSource.removeEventListener(e,t)}async connect(){if(!(this.reconnectAttempts>0))return new Promise(((e,t)=>{this.pendingConnects.push({resolve:e,reject:t}),this.pendingConnects.length>1||this.initConnect()}))}initConnect(){this.disconnect(!0),clearTimeout(this.connectTimeoutId),this.connectTimeoutId=setTimeout((()=>{this.connectErrorHandler(Error(`EventSource connect took too long.`))}),this.maxConnectTimeout),this.eventSource=new EventSource(this.client.buildURL(`/api/realtime`)),this.eventSource.onerror=e=>{this.connectErrorHandler(Error(`Failed to establish realtime connection.`))},this.eventSource.addEventListener(`PB_CONNECT`,(e=>{this.clientId=e?.lastEventId,this.submitSubscriptions().then((async()=>{let e=3;for(;this.hasUnsentSubscriptions()&&e>0;)e--,await this.submitSubscriptions()})).then((()=>{for(let e of this.pendingConnects)e.resolve();this.pendingConnects=[],this.reconnectAttempts=0,clearTimeout(this.reconnectTimeoutId),clearTimeout(this.connectTimeoutId);let t=this.getSubscriptionsByTopic(`PB_CONNECT`);for(let n in t)for(let r of t[n])r(e)})).catch((e=>{this.clientId=``,this.connectErrorHandler(e)}))}))}hasUnsentSubscriptions(){let e=this.getNonEmptySubscriptionKeys();if(e.length!=this.lastSentSubscriptions.length)return!0;for(let t of e)if(!this.lastSentSubscriptions.includes(t))return!0;return!1}connectErrorHandler(e){if(clearTimeout(this.connectTimeoutId),clearTimeout(this.reconnectTimeoutId),!this.clientId&&!this.reconnectAttempts||this.reconnectAttempts>this.maxReconnectAttempts){for(let t of this.pendingConnects)t.reject(new Ca(e));this.pendingConnects=[],this.disconnect();return}this.disconnect(!0);let t=this.predefinedReconnectIntervals[this.reconnectAttempts]||this.predefinedReconnectIntervals[this.predefinedReconnectIntervals.length-1];this.reconnectAttempts++,this.reconnectTimeoutId=setTimeout((()=>{this.initConnect()}),t)}disconnect(e=!1){if(this.clientId&&this.onDisconnect&&this.onDisconnect(Object.keys(this.subscriptions)),clearTimeout(this.connectTimeoutId),clearTimeout(this.reconnectTimeoutId),this.removeAllSubscriptionListeners(),this.client.cancelRequest(this.getSubscriptionsCancelKey()),this.eventSource?.close(),this.eventSource=null,this.clientId=``,!e){this.reconnectAttempts=0;for(let e of this.pendingConnects)e.resolve();this.pendingConnects=[]}}},Ua=class extends Ia{decode(e){return e}async getFullList(e,t){if(typeof e==`number`)return this._getFullList(e,t);let n=500;return(t=Object.assign({},e,t)).batch&&(n=t.batch,delete t.batch),this._getFullList(n,t)}async getList(e=1,t=30,n){return(n=Object.assign({method:`GET`},n)).query=Object.assign({page:e,perPage:t},n.query),this.client.send(this.baseCrudPath,n).then((e=>(e.items=e.items?.map((e=>this.decode(e)))||[],e)))}async getFirstListItem(e,t){return(t=Object.assign({requestKey:`one_by_filter_`+this.baseCrudPath+`_`+e},t)).query=Object.assign({filter:e,skipTotal:1},t.query),this.getList(1,1,t).then((e=>{if(!e?.items?.length)throw new Ca({status:404,response:{code:404,message:`The requested resource wasn't found.`,data:{}}});return e.items[0]}))}async getOne(e,t){if(!e)throw new Ca({url:this.client.buildURL(this.baseCrudPath+`/`),status:404,response:{code:404,message:`Missing required record id.`,data:{}}});return t=Object.assign({method:`GET`},t),this.client.send(this.baseCrudPath+`/`+encodeURIComponent(e),t).then((e=>this.decode(e)))}async create(e,t){return t=Object.assign({method:`POST`,body:e},t),this.client.send(this.baseCrudPath,t).then((e=>this.decode(e)))}async update(e,t,n){return n=Object.assign({method:`PATCH`,body:t},n),this.client.send(this.baseCrudPath+`/`+encodeURIComponent(e),n).then((e=>this.decode(e)))}async delete(e,t){return t=Object.assign({method:`DELETE`},t),this.client.send(this.baseCrudPath+`/`+encodeURIComponent(e),t).then((()=>!0))}_getFullList(e=500,t){(t||={}).query=Object.assign({skipTotal:1},t.query);let n=[],r=async i=>this.getList(i,e||500,t).then((e=>{let t=e.items;return n=n.concat(t),t.length==e.perPage?r(i+1):n}));return r(1)}};function Wa(e,t,n,r){let i=r!==void 0;return i||n!==void 0?i?(console.warn(e),t.body=Object.assign({},t.body,n),t.query=Object.assign({},t.query,r),t):Object.assign(t,n):t}function Ga(e){e._resetAutoRefresh?.()}var Ka=class extends Ua{constructor(e,t){super(e),this.collectionIdOrName=t}get baseCrudPath(){return this.baseCollectionPath+`/records`}get baseCollectionPath(){return`/api/collections/`+encodeURIComponent(this.collectionIdOrName)}get isSuperusers(){return this.collectionIdOrName==`_superusers`||this.collectionIdOrName==`_pbc_2773867675`}async subscribe(e,t,n){if(!e)throw Error(`Missing topic.`);if(!t)throw Error(`Missing subscription callback.`);return this.client.realtime.subscribe(this.collectionIdOrName+`/`+e,t,n)}async unsubscribe(e){return e?this.client.realtime.unsubscribe(this.collectionIdOrName+`/`+e):this.client.realtime.unsubscribeByPrefix(this.collectionIdOrName)}async getFullList(e,t){if(typeof e==`number`)return super.getFullList(e,t);let n=Object.assign({},e,t);return super.getFullList(n)}async getList(e=1,t=30,n){return super.getList(e,t,n)}async getFirstListItem(e,t){return super.getFirstListItem(e,t)}async getOne(e,t){return super.getOne(e,t)}async create(e,t){return super.create(e,t)}async update(e,t,n){return super.update(e,t,n).then((e=>{if(this.client.authStore.record?.id===e?.id&&(this.client.authStore.record?.collectionId===this.collectionIdOrName||this.client.authStore.record?.collectionName===this.collectionIdOrName)){let t=Object.assign({},this.client.authStore.record.expand),n=Object.assign({},this.client.authStore.record,e);t&&(n.expand=Object.assign(t,e.expand)),this.client.authStore.save(this.client.authStore.token,n)}return e}))}async delete(e,t){return super.delete(e,t).then((t=>(!t||this.client.authStore.record?.id!==e||this.client.authStore.record?.collectionId!==this.collectionIdOrName&&this.client.authStore.record?.collectionName!==this.collectionIdOrName||this.client.authStore.clear(),t)))}authResponse(e){let t=this.decode(e?.record||{});return this.client.authStore.save(e?.token,t),Object.assign({},e,{token:e?.token||``,record:t})}async listAuthMethods(e){return e=Object.assign({method:`GET`,fields:`mfa,otp,password,oauth2`},e),this.client.send(this.baseCollectionPath+`/auth-methods`,e)}async authWithPassword(e,t,n){let r;n=Object.assign({method:`POST`,body:{identity:e,password:t}},n),this.isSuperusers&&(r=n.autoRefreshThreshold,delete n.autoRefreshThreshold,n.autoRefresh||Ga(this.client));let i=await this.client.send(this.baseCollectionPath+`/auth-with-password`,n);return i=this.authResponse(i),r&&this.isSuperusers&&function(e,t,n,r){Ga(e);let i=e.beforeSend,a=e.authStore.record,o=e.authStore.onChange(((t,n)=>{(!t||n?.id!=a?.id||(n?.collectionId||a?.collectionId)&&n?.collectionId!=a?.collectionId)&&Ga(e)}));e._resetAutoRefresh=function(){o(),e.beforeSend=i,delete e._resetAutoRefresh},e.beforeSend=async(a,o)=>{let s=e.authStore.token;if(o.query?.autoRefresh)return i?i(a,o):{url:a,sendOptions:o};let c=e.authStore.isValid;if(c&&Ma(e.authStore.token,t))try{await n()}catch{c=!1}c||await r();let l=o.headers||{};for(let t in l)if(t.toLowerCase()==`authorization`&&s==l[t]&&e.authStore.token){l[t]=e.authStore.token;break}return o.headers=l,i?i(a,o):{url:a,sendOptions:o}}}(this.client,r,(()=>this.authRefresh({autoRefresh:!0})),(()=>this.authWithPassword(e,t,Object.assign({autoRefresh:!0},n)))),i}async authWithOAuth2Code(e,t,n,r,i,a,o){let s={method:`POST`,body:{provider:e,code:t,codeVerifier:n,redirectURL:r,createData:i}};return s=Wa(`This form of authWithOAuth2Code(provider, code, codeVerifier, redirectURL, createData?, body?, query?) is deprecated. Consider replacing it with authWithOAuth2Code(provider, code, codeVerifier, redirectURL, createData?, options?).`,s,a,o),this.client.send(this.baseCollectionPath+`/auth-with-oauth2`,s).then((e=>this.authResponse(e)))}authWithOAuth2(...e){if(e.length>1||typeof e?.[0]==`string`)return console.warn(`PocketBase: This form of authWithOAuth2() is deprecated and may get removed in the future. Please replace with authWithOAuth2Code() OR use the authWithOAuth2() realtime form as shown in https://pocketbase.io/docs/authentication/#oauth2-integration.`),this.authWithOAuth2Code(e?.[0]||``,e?.[1]||``,e?.[2]||``,e?.[3]||``,e?.[4]||{},e?.[5]||{},e?.[6]||{});let t=e?.[0]||{},n=null;t.urlCallback||(n=qa(void 0));let r=new Ha(this.client);function i(){n?.close(),r.unsubscribe()}let a={},o=t.requestKey;return o&&(a.requestKey=o),this.listAuthMethods(a).then((e=>{let a=e.oauth2.providers.find((e=>e.name===t.provider));if(!a)throw new Ca(Error(`Missing or invalid provider "${t.provider}".`));let s=this.client.buildURL(`/api/oauth2-redirect`),c=o?this.client.cancelControllers?.[o]:void 0;return c&&(c.signal.onabort=()=>{i()}),new Promise((async(e,o)=>{try{await r.subscribe(`@oauth2`,(async n=>{let l=r.clientId;try{if(!n.state||l!==n.state)throw Error(`State parameters don't match.`);if(n.error||!n.code)throw Error(`OAuth2 redirect error or missing code: `+n.error);let r=Object.assign({},t);delete r.provider,delete r.scopes,delete r.createData,delete r.urlCallback,c?.signal?.onabort&&(c.signal.onabort=null);let i=await this.authWithOAuth2Code(a.name,n.code,a.codeVerifier,s,t.createData,r);e(i)}catch(e){o(new Ca(e))}i()}));let l={state:r.clientId};t.scopes?.length&&(l.scope=t.scopes.join(` `));let u=this._replaceQueryParams(a.authURL+s,l);await(t.urlCallback||function(e){n?n.location.href=e:n=qa(e)})(u)}catch(e){i(),o(new Ca(e))}}))})).catch((e=>{throw i(),e}))}async authRefresh(e,t){let n={method:`POST`};return n=Wa(`This form of authRefresh(body?, query?) is deprecated. Consider replacing it with authRefresh(options?).`,n,e,t),this.client.send(this.baseCollectionPath+`/auth-refresh`,n).then((e=>this.authResponse(e)))}async requestPasswordReset(e,t,n){let r={method:`POST`,body:{email:e}};return r=Wa(`This form of requestPasswordReset(email, body?, query?) is deprecated. Consider replacing it with requestPasswordReset(email, options?).`,r,t,n),this.client.send(this.baseCollectionPath+`/request-password-reset`,r).then((()=>!0))}async confirmPasswordReset(e,t,n,r,i){let a={method:`POST`,body:{token:e,password:t,passwordConfirm:n}};return a=Wa(`This form of confirmPasswordReset(token, password, passwordConfirm, body?, query?) is deprecated. Consider replacing it with confirmPasswordReset(token, password, passwordConfirm, options?).`,a,r,i),this.client.send(this.baseCollectionPath+`/confirm-password-reset`,a).then((()=>!0))}async requestVerification(e,t,n){let r={method:`POST`,body:{email:e}};return r=Wa(`This form of requestVerification(email, body?, query?) is deprecated. Consider replacing it with requestVerification(email, options?).`,r,t,n),this.client.send(this.baseCollectionPath+`/request-verification`,r).then((()=>!0))}async confirmVerification(e,t,n){let r={method:`POST`,body:{token:e}};return r=Wa(`This form of confirmVerification(token, body?, query?) is deprecated. Consider replacing it with confirmVerification(token, options?).`,r,t,n),this.client.send(this.baseCollectionPath+`/confirm-verification`,r).then((()=>{let t=ja(e),n=this.client.authStore.record;return n&&!n.verified&&n.id===t.id&&n.collectionId===t.collectionId&&(n.verified=!0,this.client.authStore.save(this.client.authStore.token,n)),!0}))}async requestEmailChange(e,t,n){let r={method:`POST`,body:{newEmail:e}};return r=Wa(`This form of requestEmailChange(newEmail, body?, query?) is deprecated. Consider replacing it with requestEmailChange(newEmail, options?).`,r,t,n),this.client.send(this.baseCollectionPath+`/request-email-change`,r).then((()=>!0))}async confirmEmailChange(e,t,n,r){let i={method:`POST`,body:{token:e,password:t}};return i=Wa(`This form of confirmEmailChange(token, password, body?, query?) is deprecated. Consider replacing it with confirmEmailChange(token, password, options?).`,i,n,r),this.client.send(this.baseCollectionPath+`/confirm-email-change`,i).then((()=>{let t=ja(e),n=this.client.authStore.record;return n&&n.id===t.id&&n.collectionId===t.collectionId&&this.client.authStore.clear(),!0}))}async listExternalAuths(e,t){return this.client.collection(`_externalAuths`).getFullList(Object.assign({},t,{filter:this.client.filter(`recordRef = {:id}`,{id:e})}))}async unlinkExternalAuth(e,t,n){let r=await this.client.collection(`_externalAuths`).getFirstListItem(this.client.filter(`recordRef = {:recordId} && provider = {:provider}`,{recordId:e,provider:t}));return this.client.collection(`_externalAuths`).delete(r.id,n).then((()=>!0))}async requestOTP(e,t){return t=Object.assign({method:`POST`,body:{email:e}},t),this.client.send(this.baseCollectionPath+`/request-otp`,t)}async authWithOTP(e,t,n){return n=Object.assign({method:`POST`,body:{otpId:e,password:t}},n),this.client.send(this.baseCollectionPath+`/auth-with-otp`,n).then((e=>this.authResponse(e)))}async impersonate(e,t,n){(n=Object.assign({method:`POST`,body:{duration:t}},n)).headers=n.headers||{},n.headers.Authorization||(n.headers.Authorization=this.client.authStore.token);let r=new so(this.client.baseURL,new Pa,this.client.lang),i=await r.send(this.baseCollectionPath+`/impersonate/`+encodeURIComponent(e),n);return r.authStore.save(i?.token,this.decode(i?.record||{})),r}_replaceQueryParams(e,t={}){let n=e,r=``;e.indexOf(`?`)>=0&&(n=e.substring(0,e.indexOf(`?`)),r=e.substring(e.indexOf(`?`)+1));let i={},a=r.split(`&`);for(let e of a){if(e==``)continue;let t=e.split(`=`);i[decodeURIComponent(t[0].replace(/\+/g,` `))]=decodeURIComponent((t[1]||``).replace(/\+/g,` `))}for(let e in t)t.hasOwnProperty(e)&&(t[e]==null?delete i[e]:i[e]=t[e]);for(let e in r=``,i)i.hasOwnProperty(e)&&(r!=``&&(r+=`&`),r+=encodeURIComponent(e.replace(/%20/g,`+`))+`=`+encodeURIComponent(i[e].replace(/%20/g,`+`)));return r==``?n:n+`?`+r}};function qa(e){if(typeof window>`u`||!window?.open)throw new Ca(Error(`Not in a browser context - please pass a custom urlCallback function.`));let t=1024,n=768,r=window.innerWidth,i=window.innerHeight;t=t>r?r:t,n=n>i?i:n;let a=r/2-t/2,o=i/2-n/2;return window.open(e,`popup_window`,`width=`+t+`,height=`+n+`,top=`+o+`,left=`+a+`,resizable,menubar=no`)}var Ja=class extends Ua{get baseCrudPath(){return`/api/collections`}async import(e,t=!1,n){return n=Object.assign({method:`PUT`,body:{collections:e,deleteMissing:t}},n),this.client.send(this.baseCrudPath+`/import`,n).then((()=>!0))}async getScaffolds(e){return e=Object.assign({method:`GET`},e),this.client.send(this.baseCrudPath+`/meta/scaffolds`,e)}async truncate(e,t){return t=Object.assign({method:`DELETE`},t),this.client.send(this.baseCrudPath+`/`+encodeURIComponent(e)+`/truncate`,t).then((()=>!0))}},Ya=class extends Ia{async getList(e=1,t=30,n){return(n=Object.assign({method:`GET`},n)).query=Object.assign({page:e,perPage:t},n.query),this.client.send(`/api/logs`,n)}async getOne(e,t){if(!e)throw new Ca({url:this.client.buildURL(`/api/logs/`),status:404,response:{code:404,message:`Missing required log id.`,data:{}}});return t=Object.assign({method:`GET`},t),this.client.send(`/api/logs/`+encodeURIComponent(e),t)}async getStats(e){return e=Object.assign({method:`GET`},e),this.client.send(`/api/logs/stats`,e)}},Xa=class extends Ia{async check(e){return e=Object.assign({method:`GET`},e),this.client.send(`/api/health`,e)}},Za=class extends Ia{getUrl(e,t,n={}){return console.warn(`Please replace pb.files.getUrl() with pb.files.getURL()`),this.getURL(e,t,n)}getURL(e,t,n={}){if(!t||!e?.id||!e?.collectionId&&!e?.collectionName)return``;let r=[];r.push(`api`),r.push(`files`),r.push(encodeURIComponent(e.collectionId||e.collectionName)),r.push(encodeURIComponent(e.id)),r.push(encodeURIComponent(t));let i=this.client.buildURL(r.join(`/`));if(Object.keys(n).length){!1===n.download&&delete n.download;let e=new URLSearchParams(n);i+=(i.includes(`?`)?`&`:`?`)+e}return i}async getToken(e){return e=Object.assign({method:`POST`},e),this.client.send(`/api/files/token`,e).then((e=>e?.token||``))}},Qa=class extends Ia{async getFullList(e){return e=Object.assign({method:`GET`},e),this.client.send(`/api/backups`,e)}async create(e,t){return t=Object.assign({method:`POST`,body:{name:e}},t),this.client.send(`/api/backups`,t).then((()=>!0))}async upload(e,t){return t=Object.assign({method:`POST`,body:e},t),this.client.send(`/api/backups/upload`,t).then((()=>!0))}async delete(e,t){return t=Object.assign({method:`DELETE`},t),this.client.send(`/api/backups/${encodeURIComponent(e)}`,t).then((()=>!0))}async restore(e,t){return t=Object.assign({method:`POST`},t),this.client.send(`/api/backups/${encodeURIComponent(e)}/restore`,t).then((()=>!0))}getDownloadUrl(e,t){return console.warn(`Please replace pb.backups.getDownloadUrl() with pb.backups.getDownloadURL()`),this.getDownloadURL(e,t)}getDownloadURL(e,t){return this.client.buildURL(`/api/backups/${encodeURIComponent(t)}?token=${encodeURIComponent(e)}`)}},$a=class extends Ia{async getFullList(e){return e=Object.assign({method:`GET`},e),this.client.send(`/api/crons`,e)}async run(e,t){return t=Object.assign({method:`POST`},t),this.client.send(`/api/crons/${encodeURIComponent(e)}`,t).then((()=>!0))}};function eo(e){return typeof Blob<`u`&&e instanceof Blob||typeof File<`u`&&e instanceof File||typeof e==`object`&&!!e&&e.uri&&(typeof navigator<`u`&&navigator.product===`ReactNative`||typeof global<`u`&&global.HermesInternal)}function to(e){return e&&(e.constructor?.name===`FormData`||typeof FormData<`u`&&e instanceof FormData)}function no(e){for(let t in e){let n=Array.isArray(e[t])?e[t]:[e[t]];for(let e of n)if(eo(e))return!0}return!1}var ro=/^[\-\.\d]+$/;function io(e){if(typeof e!=`string`)return e;if(e==`true`)return!0;if(e==`false`)return!1;if((e[0]===`-`||e[0]>=`0`&&e[0]<=`9`)&&ro.test(e)){let t=+e;if(``+t===e)return t}return e}var ao=class extends Ia{constructor(){super(...arguments),this.requests=[],this.subs={}}collection(e){return this.subs[e]||(this.subs[e]=new oo(this.requests,e)),this.subs[e]}async send(e){let t=new FormData,n=[];for(let e=0;e<this.requests.length;e++){let r=this.requests[e];if(n.push({method:r.method,url:r.url,headers:r.headers,body:r.json}),r.files)for(let n in r.files){let i=r.files[n]||[];for(let r of i)t.append(`requests.`+e+`.`+n,r)}}return t.append(`@jsonPayload`,JSON.stringify({requests:n})),e=Object.assign({method:`POST`,body:t},e),this.client.send(`/api/batch`,e)}},oo=class{constructor(e,t){this.requests=[],this.requests=e,this.collectionIdOrName=t}upsert(e,t){t=Object.assign({body:e||{}},t);let n={method:`PUT`,url:`/api/collections/`+encodeURIComponent(this.collectionIdOrName)+`/records`};this.prepareRequest(n,t),this.requests.push(n)}create(e,t){t=Object.assign({body:e||{}},t);let n={method:`POST`,url:`/api/collections/`+encodeURIComponent(this.collectionIdOrName)+`/records`};this.prepareRequest(n,t),this.requests.push(n)}update(e,t,n){n=Object.assign({body:t||{}},n);let r={method:`PATCH`,url:`/api/collections/`+encodeURIComponent(this.collectionIdOrName)+`/records/`+encodeURIComponent(e)};this.prepareRequest(r,n),this.requests.push(r)}delete(e,t){t=Object.assign({},t);let n={method:`DELETE`,url:`/api/collections/`+encodeURIComponent(this.collectionIdOrName)+`/records/`+encodeURIComponent(e)};this.prepareRequest(n,t),this.requests.push(n)}prepareRequest(e,t){if(za(t),e.headers=t.headers,e.json={},e.files={},t.query!==void 0){let n=Ba(t.query);n&&(e.url+=(e.url.includes(`?`)?`&`:`?`)+n)}let n=t.body;for(let t in to(n)&&(n=function(e){let t={};return e.forEach(((e,n)=>{if(n===`@jsonPayload`&&typeof e==`string`)try{let n=JSON.parse(e);Object.assign(t,n)}catch(e){console.warn(`@jsonPayload error:`,e)}else t[n]===void 0?t[n]=io(e):(Array.isArray(t[n])||(t[n]=[t[n]]),t[n].push(io(e)))})),t}(n)),n){let r=n[t];if(eo(r))e.files[t]=e.files[t]||[],e.files[t].push(r);else if(Array.isArray(r)){let n=[],i=[];for(let e of r)eo(e)?n.push(e):i.push(e);if(n.length>0&&n.length==r.length){e.files[t]=e.files[t]||[];for(let r of n)e.files[t].push(r)}else if(e.json[t]=i,n.length>0){let r=t;t.startsWith(`+`)||t.endsWith(`+`)||(r+=`+`),e.files[r]=e.files[r]||[];for(let t of n)e.files[r].push(t)}}else e.json[t]=r}}},so=class{get baseUrl(){return this.baseURL}set baseUrl(e){this.baseURL=e}constructor(e=`/`,t,n=`en-US`){this.cancelControllers={},this.recordServices={},this.enableAutoCancellation=!0,this.baseURL=e,this.lang=n,t?this.authStore=t:typeof window<`u`&&window.Deno?this.authStore=new Pa:this.authStore=new Fa,this.collections=new Ja(this),this.files=new Za(this),this.logs=new Ya(this),this.settings=new La(this),this.realtime=new Ha(this),this.health=new Xa(this),this.backups=new Qa(this),this.crons=new $a(this)}get admins(){return this.collection(`_superusers`)}createBatch(){return new ao(this)}collection(e){return this.recordServices[e]||(this.recordServices[e]=new Ka(this,e)),this.recordServices[e]}autoCancellation(e){return this.enableAutoCancellation=!!e,this}cancelRequest(e){return this.cancelControllers[e]&&(this.cancelControllers[e].abort(),delete this.cancelControllers[e]),this}cancelAllRequests(){for(let e in this.cancelControllers)this.cancelControllers[e].abort();return this.cancelControllers={},this}filter(e,t){if(!t)return e;for(let n in t){let r=t[n];switch(typeof r){case`boolean`:case`number`:r=``+r;break;case`string`:r=`'`+r.replace(/'/g,`\\'`)+`'`;break;default:r=r===null?`null`:r instanceof Date?`'`+r.toISOString().replace(`T`,` `)+`'`:`'`+JSON.stringify(r).replace(/'/g,`\\'`)+`'`}e=e.replaceAll(`{:`+n+`}`,r)}return e}getFileUrl(e,t,n={}){return console.warn(`Please replace pb.getFileUrl() with pb.files.getURL()`),this.files.getURL(e,t,n)}buildUrl(e){return console.warn(`Please replace pb.buildUrl() with pb.buildURL()`),this.buildURL(e)}buildURL(e){let t=this.baseURL;return typeof window>`u`||!window.location||t.startsWith(`https://`)||t.startsWith(`http://`)||(t=window.location.origin?.endsWith(`/`)?window.location.origin.substring(0,window.location.origin.length-1):window.location.origin||``,this.baseURL.startsWith(`/`)||(t+=window.location.pathname||`/`,t+=t.endsWith(`/`)?``:`/`),t+=this.baseURL),e&&(t+=t.endsWith(`/`)?``:`/`,t+=e.startsWith(`/`)?e.substring(1):e),t}async send(e,t){t=this.initSendOptions(e,t);let n=this.buildURL(e);if(this.beforeSend){let e=Object.assign({},await this.beforeSend(n,t));e.url!==void 0||e.options!==void 0?(n=e.url||n,t=e.options||t):Object.keys(e).length&&(t=e,console?.warn&&console.warn("Deprecated format of beforeSend return: please use `return { url, options }`, instead of `return options`."))}if(t.query!==void 0){let e=Ba(t.query);e&&(n+=(n.includes(`?`)?`&`:`?`)+e),delete t.query}return this.getHeader(t.headers,`Content-Type`)==`application/json`&&t.body&&typeof t.body!=`string`&&(t.body=JSON.stringify(t.body)),(t.fetch||fetch)(n,t).then((async e=>{let n={};try{n=await e.json()}catch{}if(this.afterSend&&(n=await this.afterSend(e,n,t)),e.status>=400)throw new Ca({url:e.url,status:e.status,data:n});return n})).catch((e=>{throw new Ca(e)}))}initSendOptions(e,t){if((t=Object.assign({method:`GET`},t)).body=function(e){if(typeof FormData>`u`||e===void 0||typeof e!=`object`||!e||to(e)||!no(e))return e;let t=new FormData;for(let n in e){let r=e[n];if(r!==void 0)if(typeof r!=`object`||no({data:r})){let e=Array.isArray(r)?r:[r];for(let r of e)t.append(n,r)}else{let e={};e[n]=r,t.append(`@jsonPayload`,JSON.stringify(e))}}return t}(t.body),za(t),t.query=Object.assign({},t.params,t.query),t.requestKey===void 0&&(!1===t.$autoCancel||!1===t.query.$autoCancel?t.requestKey=null:(t.$cancelKey||t.query.$cancelKey)&&(t.requestKey=t.$cancelKey||t.query.$cancelKey)),delete t.$autoCancel,delete t.query.$autoCancel,delete t.$cancelKey,delete t.query.$cancelKey,this.getHeader(t.headers,`Content-Type`)!==null||to(t.body)||(t.headers=Object.assign({},t.headers,{"Content-Type":`application/json`})),this.getHeader(t.headers,`Accept-Language`)===null&&(t.headers=Object.assign({},t.headers,{"Accept-Language":this.lang})),this.authStore.token&&this.getHeader(t.headers,`Authorization`)===null&&(t.headers=Object.assign({},t.headers,{Authorization:this.authStore.token})),this.enableAutoCancellation&&t.requestKey!==null){let n=t.requestKey||(t.method||`GET`)+e;delete t.requestKey,this.cancelRequest(n);let r=new AbortController;this.cancelControllers[n]=r,t.signal=r.signal}return t}getHeader(e,t){for(let n in e||={},t=t.toLowerCase(),e)if(n.toLowerCase()==t)return e[n];return null}};Me();function co(e,t){if(e instanceof RegExp)return{keys:!1,pattern:e};var n,r,i,a,o=[],s=``,c=e.split(`/`);for(c[0]||c.shift();i=c.shift();)n=i[0],n===`*`?(o.push(`wild`),s+=`/(.*)`):n===`:`?(r=i.indexOf(`?`,1),a=i.indexOf(`.`,1),o.push(i.substring(1,~r?r:~a?a:i.length)),s+=~r&&!~a?`(?:/([^/]+?))?`:`/([^/]+?)`,~a&&(s+=(~r?`?`:``)+`\\`+i.substring(a))):s+=`/`+i;return{keys:o,pattern:RegExp(`^`+s+(t?`(?=$|/)`:`/?$`),`i`)}}function lo(){let e=window.location.href.indexOf(`#/`),t=e>-1?window.location.href.substr(e+1):`/`,n=t.indexOf(`?`),r=``;return n>-1&&(r=t.substr(n+1),t=t.substr(0,n)),{location:t,querystring:r}}const uo=Pi(null,function(e){e(lo());let t=()=>{e(lo())};return window.addEventListener(`hashchange`,t,!1),function(){window.removeEventListener(`hashchange`,t,!1)}}),fo=Ii(uo,e=>e.location);Ii(uo,e=>e.querystring);const po=Fi(void 0);async function mo(e){if(!e||e.length<1||e.charAt(0)!=`/`&&e.indexOf(`#/`)!==0)throw Error(`Invalid parameter location`);await Jn(),history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=(e.charAt(0)==`#`?``:`#`)+e}async function ho(e){if(!e||e.length<1||e.charAt(0)!=`/`&&e.indexOf(`#/`)!==0)throw Error(`Invalid parameter location`);await Jn();let t=(e.charAt(0)==`#`?``:`#`)+e;try{let e={...history.state};delete e.__svelte_spa_router_scrollX,delete e.__svelte_spa_router_scrollY,window.history.replaceState(e,void 0,t)}catch{console.warn("Caught exception while replacing the current page. If you're running this in the Svelte REPL, please note that the `replace` method might not work in this environment.")}window.dispatchEvent(new Event(`hashchange`))}function go(e){e?window.scrollTo(e.__svelte_spa_router_scrollX,e.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function _o(e,t){O(t,!1);let n=Gi(t,`routes`,24,()=>({})),r=Gi(t,`prefix`,8,``),i=Gi(t,`restoreScrollState`,8,!1);class a{constructor(e,t){if(!t||typeof t!=`function`&&(typeof t!=`object`||t._sveltesparouter!==!0))throw Error(`Invalid component object`);if(!e||typeof e==`string`&&(e.length<1||e.charAt(0)!=`/`&&e.charAt(0)!=`*`)||typeof e==`object`&&!(e instanceof RegExp))throw Error(`Invalid value for "path" argument - strings must start with / or *`);let{pattern:n,keys:r}=co(e);this.path=e,typeof t==`object`&&t._sveltesparouter===!0?(this.component=t.component,this.conditions=t.conditions||[],this.userData=t.userData,this.props=t.props||{}):(this.component=()=>Promise.resolve(t),this.conditions=[],this.props={}),this._pattern=n,this._keys=r}match(e){if(r()){if(typeof r()==`string`)if(e.startsWith(r()))e=e.substr(r().length)||`/`;else return null;else if(r()instanceof RegExp){let t=e.match(r());if(t&&t[0])e=e.substr(t[0].length)||`/`;else return null}}let t=this._pattern.exec(e);if(t===null)return null;if(this._keys===!1)return t;let n={},i=0;for(;i<this._keys.length;){try{n[this._keys[i]]=decodeURIComponent(t[i+1]||``)||null}catch{n[this._keys[i]]=null}i++}return n}async checkConditions(e){for(let t=0;t<this.conditions.length;t++)if(!await this.conditions[t](e))return!1;return!0}}let o=[];n()instanceof Map?n().forEach((e,t)=>{o.push(new a(t,e))}):Object.keys(n()).forEach(e=>{o.push(new a(e,n()[e]))});let s=wt(null),c=wt(null),l=wt({}),u=Yi();async function d(e,t){await Jn(),u(e,t)}let f=null,p=null;i()&&(p=e=>{f=e.state&&(e.state.__svelte_spa_router_scrollY||e.state.__svelte_spa_router_scrollX)?e.state:null},window.addEventListener(`popstate`,p),Xi(()=>{go(f)}));let m=null,h=null,g=uo.subscribe(async e=>{m=e;let t=0;for(;t<o.length;){let n=o[t].match(e.location);if(!n){t++;continue}let r={route:o[t].path,location:e.location,querystring:e.querystring,userData:o[t].userData,params:n&&typeof n==`object`&&Object.keys(n).length?n:null};if(!await o[t].checkConditions(r)){j(s,null),h=null,d(`conditionsFailed`,r);return}d(`routeLoading`,Object.assign({},r));let i=o[t].component;if(h!=i){i.loading?(j(s,i.loading),h=i,j(c,i.loadingParams),j(l,{}),d(`routeLoaded`,Object.assign({},r,{component:R(s),name:R(s).name,params:R(c)}))):(j(s,null),h=null);let t=await i();if(e!=m)return;j(s,t&&t.default||t),h=i}n&&typeof n==`object`&&Object.keys(n).length?j(c,n):j(c,null),j(l,o[t].props),d(`routeLoaded`,Object.assign({},r,{component:R(s),name:R(s).name,params:R(c)})).then(()=>{po.set(R(c))});return}j(s,null),h=null,po.set(void 0)});qi(()=>{g(),p&&window.removeEventListener(`popstate`,p)}),an(()=>$n(i()),()=>{history.scrollRestoration=i()?`manual`:`auto`}),on(),Oi();var _=B(),v=N(_),y=e=>{var n=B(),r=N(n);zr(r,()=>R(s),(e,n)=>{n(e,K({get params(){return R(c)}},()=>R(l),{$$events:{routeEvent(e){ji.call(this,t,e)}}}))}),V(e,n)},b=e=>{var n=B(),r=N(n);zr(r,()=>R(s),(e,n)=>{n(e,K(()=>R(l),{$$events:{routeEvent(e){ji.call(this,t,e)}}}))}),V(e,n)};Or(v,e=>{R(c)?e(y):e(b,!1)}),V(e,_),k()}var vo=e=>e;function yo(e){let t=e-1;return t*t*t+1}function bo(e){let t=typeof e==`string`&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||`px`]:[e,`px`]}function xo(e,{delay:t=0,duration:n=400,easing:r=vo}={}){let i=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:r,css:e=>`opacity: ${e*i}`}}function So(e,{delay:t=0,duration:n=400,easing:r=yo,x:i=0,y:a=0,opacity:o=0}={}){let s=getComputedStyle(e),c=+s.opacity,l=s.transform===`none`?``:s.transform,u=c*(1-o),[d,f]=bo(i),[p,m]=bo(a);return{delay:t,duration:n,easing:r,css:(e,t)=>`
			transform: ${l} translate(${(1-e)*d}${f}, ${(1-e)*p}${m});
			opacity: ${c-u*t}`}}function Co(e,{delay:t=0,duration:n=400,easing:r=yo,axis:i=`y`}={}){let a=getComputedStyle(e),o=+a.opacity,s=i===`y`?`height`:`width`,c=parseFloat(a[s]),l=i===`y`?[`top`,`bottom`]:[`left`,`right`],u=l.map(e=>`${e[0].toUpperCase()}${e.slice(1)}`),d=parseFloat(a[`padding${u[0]}`]),f=parseFloat(a[`padding${u[1]}`]),p=parseFloat(a[`margin${u[0]}`]),m=parseFloat(a[`margin${u[1]}`]),h=parseFloat(a[`border${u[0]}Width`]),g=parseFloat(a[`border${u[1]}Width`]);return{delay:t,duration:n,easing:r,css:e=>`overflow: hidden;opacity: ${Math.min(e*20,1)*o};${s}: ${e*c}px;padding-${l[0]}: ${e*d}px;padding-${l[1]}: ${e*f}px;margin-${l[0]}: ${e*p}px;margin-${l[1]}: ${e*m}px;border-${l[0]}-width: ${e*h}px;border-${l[1]}-width: ${e*g}px;min-${s}: 0`}}var wo=(e,t)=>t(-1),To=(e,t)=>t(1),Eo=(e,t,n)=>{t(R(n))},Do=z(`<button class="invis svelte-iqhn23">Select</button>`),Oo=z(`<label><p class="svelte-iqhn23"> </p></label> <!>`,1),ko=z(`<div class="calRow svelte-iqhn23"></div>`),Ao=z(`<div class="main svelte-iqhn23"><div class="topRow svelte-iqhn23"><div class="monthSelector svelte-iqhn23"><label class="arrowPicker svelte-iqhn23" for="leftMonth"><!></label> <button id="leftMonth" class="invis svelte-iqhn23">Go Left</button> <p class="svelte-iqhn23"> </p> <label class="arrowPicker svelte-iqhn23" for="rightMonth"><!></label> <button id="rightMonth" class="invis svelte-iqhn23">Go Right</button></div> <div class="yearSelector svelte-iqhn23"><input type="text" class="svelte-iqhn23"/></div></div> <div class="calendar svelte-iqhn23"><!></div></div>`);function jo(e,t){O(t,!1);let n=Gi(t,`month`,12),r=Gi(t,`year`,12),i=Gi(t,`date`,12),a=(e,t)=>new Date(t,e+1,0).getDate(),o=(e,t)=>{let n=a(e,t),r=s(e,t),i=Math.ceil((r+n)/7),o=i*7-(r+n),c=[];for(let e=0;e<r;e++)c.push(-1);for(let e=0;e<n;e++)c.push(e+1);for(let e=0;e<o;e++)c.push(-1);return{rows:i,data:c}},s=(e,t)=>new Date(t,e,1).getDay(),c=e=>{i(1),n((12+n()+e)%12)},l=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`];Oi();var u=Ao(),d=M(u),f=M(d),p=M(f),m=M(p);ia(m,{size:22}),E(p);var h=P(p,2);h.__click=[wo,c];var g=P(h,2),_=M(g,!0);E(g);var v=P(g,2),y=M(v);aa(y,{size:22}),E(v);var b=P(v,2);b.__click=[To,c],E(f);var x=P(f,2),S=M(x);oi(S),E(x),E(d);var C=P(d,2),ee=M(C),te=e=>{let t=gt(()=>($n(n()),$n(r()),Xn(()=>o(n(),r()))));var a=B(),s=N(a);Nr(s,1,()=>($n(R(t)),Xn(()=>({length:R(t).rows}))),jr,(e,n,r)=>{var a=ko();Nr(a,4,()=>({length:7}),jr,(e,n,a,o)=>{let s=gt(()=>($n(R(t)),Xn(()=>R(t).data[r*7+a])));var c=Oo(),l=N(c),u=M(l),d=M(u,!0);E(u),E(l);var f=P(l,2),p=e=>{var t=Do();t.__click=[Eo,i,s],F(()=>W(t,`id`,`select${R(s)??``}`)),V(e,t)};Or(f,e=>{R(s)!=-1&&e(p)}),F(()=>{Xr(l,1,`date ${R(s)==-1?``:`selectable`}`,`svelte-iqhn23`),Qr(l,i()==R(s)?`background-color: var(--main-color);`:``),W(l,`for`,`select${R(s)??``}`),Qr(u,R(s)==-1?`opacity: 0.5;`:``),H(d,R(s)==-1?`-`:R(s))}),V(e,c)}),E(a),V(e,a)}),V(e,a)};Or(ee,e=>{n()!=null&&r()!=null&&e(te)}),E(C),E(u),F(()=>H(_,($n(n()),Xn(()=>l[n()])))),Ci(S,r),xi(3,u,()=>Co,()=>({duration:Q.animations?500:0})),V(e,u),k()}mr([`click`]);var Mo=(e,t)=>t(-1),No=(e,t)=>t(1),Po=(e,t)=>t(-15),Fo=(e,t)=>t(15),Io=z(`<div class="timePicker svelte-1ea1iw"><label class="arrowPicker svelte-1ea1iw"><!></label> <p class="svelte-1ea1iw"> </p> <label class="arrowPicker svelte-1ea1iw"><!></label> <button class="invis">Left Hour</button> <button class="invis">Right Hour</button> <p class="svelte-1ea1iw">:</p> <label class="arrowPicker svelte-1ea1iw"><!></label> <p class="svelte-1ea1iw"> </p> <label class="arrowPicker svelte-1ea1iw"><!></label> <button class="invis">Left Min</button> <button class="invis">Right Min</button></div>`);function Lo(e,t){O(t,!1);let n=Gi(t,`minutes`,12),r=Gi(t,`hours`,12),i=Gi(t,`id`,8),a=e=>{r((24+r()+e)%24)},o=e=>{n((60+n()+e)%60)};Oi();var s=Io(),c=M(s),l=M(c);ia(l,{size:22}),E(c);var u=P(c,2),d=M(u,!0);E(u);var f=P(u,2),p=M(f);aa(p,{size:22}),E(f);var m=P(f,2);m.__click=[Mo,a];var h=P(m,2);h.__click=[No,a];var g=P(h,4),_=M(g);ia(_,{size:22}),E(g);var v=P(g,2),y=M(v,!0);E(v);var b=P(v,2),x=M(b);aa(x,{size:22}),E(b);var S=P(b,2);S.__click=[Po,o];var C=P(S,2);C.__click=[Fo,o],E(s),F(()=>{W(c,`for`,`leftStartHour${i()??``}`),H(d,r()<10?`0${r()}`:r()),W(f,`for`,`rightStartHour${i()??``}`),W(m,`id`,`leftStartHour${i()??``}`),W(h,`id`,`rightStartHour${i()??``}`),W(g,`for`,`leftStartMin${i()??``}`),H(y,n()<10?`0${n()}`:n()),W(b,`for`,`rightStartMin${i()??``}`),W(S,`id`,`leftStartMin${i()??``}`),W(C,`id`,`rightStartMin${i()??``}`)}),xi(3,s,()=>Co,()=>({duration:Q.animations?250:0})),V(e,s),k()}mr([`click`]);var Ro=z(`<label class="item svelte-xd7gyz"> </label> <button class="invis svelte-xd7gyz">Select Pack</button>`,1),zo=(e,t)=>{j(t,!0),setTimeout(()=>{j(t,!1)},5e3)},Bo=z(`<button class="nextButton svelte-xd7gyz" id="check"><!> Delete</button>`),Vo=z(`<button class="nextButton svelte-xd7gyz" id="check"><!> You sure?</button>`),Ho=z(`<div class="main svelte-xd7gyz"><div class="headerRow svelte-xd7gyz"><h1 class="svelte-xd7gyz"> </h1></div> <div class="appointmentGroup svelte-xd7gyz"><div class="inputGroup svelte-xd7gyz"><div class="inputRow svelte-xd7gyz"><!> <input placeholder="Client Name..." class="svelte-xd7gyz"/></div> <div class="spacer svelte-xd7gyz"></div> <div class="inputRow svelte-xd7gyz"><!> <input id="phone" placeholder="Phone..." class="svelte-xd7gyz"/></div> <div class="spacer svelte-xd7gyz"></div> <div class="inputRow svelte-xd7gyz"><!> <input id="type" placeholder="Appointment Type..." class="svelte-xd7gyz"/></div></div> <p class="invis svelte-xd7gyz">These should be dropdown scroll wheel type things</p> <div class="inputGroup svelte-xd7gyz"><div class="inputRow space svelte-xd7gyz"><!> <p class="idkText svelte-xd7gyz">Date</p> <label for="focus1" class="focusLabel svelte-xd7gyz"><p class="svelte-xd7gyz"> </p></label></div> <!> <div class="spacer svelte-xd7gyz"></div> <div class="inputRow svelte-xd7gyz"><!> <p class="idkText svelte-xd7gyz">Start Time</p> <label for="focus2" class="focusLabel svelte-xd7gyz"><p class="svelte-xd7gyz"> </p></label></div> <!> <div class="spacer svelte-xd7gyz"></div> <div class="inputRow svelte-xd7gyz"><!> <p class="idkText svelte-xd7gyz">End Time</p> <label for="focus3" class="focusLabel svelte-xd7gyz"><p class="svelte-xd7gyz"> </p></label></div> <!> <div class="spacer svelte-xd7gyz"></div> <div class="inputRow svelte-xd7gyz"><!> <p class="idkText svelte-xd7gyz">Technician</p> <label for="focus4" class="focusLabel svelte-xd7gyz"><p class="svelte-xd7gyz"> </p></label></div> <label class="dropDown svelte-xd7gyz"></label></div> <div class="inputGroup svelte-xd7gyz"><textarea placeholder="Additional Notes..." class="svelte-xd7gyz"></textarea></div> <div class="buttonRow svelte-xd7gyz"><!> <button class="nextButton svelte-xd7gyz"><!> Save</button></div></div></div>`);function Uo(e,t){O(t,!0),Ki(async()=>{await fs()});let n=Ct(!1),r=e=>e%10==1&&e!=11?`st`:e%10==2&&e!=12?`nd`:e%10==3&&e!=13?`rd`:`th`,i=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],a=(e,t)=>{if(Q.clock24hr)return`${e}:${t<10?`0${t}`:t}`;if(e>=12){let n=e%12;return n==0&&(n=12),`${n}:${t<10?`0${t}`:t} PM`}else{let n=e%12;return n==0&&(n=12),`${n}:${t<10?`0${t}`:t} AM`}},o=()=>{let e=X.endHours*60+X.endMinutes,t=X.startHours*60+X.startMinutes;return e-t},s=async()=>{let e=o();if(e<0){rs(`fail`,`You cannot set an appointment to end before it starts`,5e3,ua);return}let t=`${X.year}-${X.month+1<10?`0${X.month+1}`:X.month+1}-${X.date<10?`0${X.date}`:X.date} ${X.startHours<10?`0${X.startHours}`:X.startHours}:${X.startMinutes<10?`0${X.startMinutes}`:X.startMinutes}:00.123Z`;console.log(t);let n={startTime:t,duration:e,type:X.type,clientName:X.clientName,notes:X.notes,tech:X.tech,phone:X.phone};try{await os.collection(`appointments`).update(X.id,n);let e=new Date;X.clientName=``,X.date=e.getDate(),X.month=e.getMonth(),X.notes=``,X.type=``,X.year=e.getFullYear(),rs(`success`,`Appointment Updated!`,5e3,ra),ho(`/`)}catch{rs(`fail`,`Something went wrong... Try again later`,5e3,ua)}},c=async()=>{try{await os.collection(`appointments`).delete(X.id);let e=new Date;X.clientName=``,X.date=e.getDate(),X.month=e.getMonth(),X.notes=``,X.type=``,X.year=e.getFullYear(),rs(`success`,`Appointment Deleted!`,5e3,ra),await ls(),ho(`/`)}catch{rs(`fail`,`Something went wrong... Try again later`,5e3,ua)}};var l=Ho(),u=M(l),d=M(u),f=M(d,!0);E(d),E(u);var p=P(u,2),m=M(p),h=M(m),g=M(h);Sa(g,{size:20});var _=P(g,2);oi(_),E(h);var v=P(h,4),y=M(v);ga(y,{size:20});var b=P(y,2);oi(b),E(v);var x=P(v,4),S=M(x);fa(S,{size:20});var C=P(S,2);oi(C),E(x),E(m);var ee=P(m,4),te=M(ee),ne=M(te);na(ne,{size:20});var re=P(ne,4),ie=M(re),ae=M(ie);E(ie),E(re),E(te);var oe=P(te,2);jo(oe,{get year(){return X.year},set year(e){X.year=e},get month(){return X.month},set month(e){X.month=e},get date(){return X.date},set date(e){X.date=e}});var se=P(oe,4),ce=M(se);sa(ce,{size:20});var le=P(ce,4),ue=M(le),de=M(ue,!0);E(ue),E(le),E(se);var fe=P(se,2);Lo(fe,{id:`pihudfgs`,get minutes(){return X.startMinutes},set minutes(e){X.startMinutes=e},get hours(){return X.startHours},set hours(e){X.startHours=e}});var pe=P(fe,4),me=M(pe);ca(me,{size:20});var he=P(me,4),ge=M(he),_e=M(ge,!0);E(ge),E(he),E(pe);var ve=P(pe,2);Lo(ve,{id:`poihadfgiunsdf`,get minutes(){return X.endMinutes},set minutes(e){X.endMinutes=e},get hours(){return X.endHours},set hours(e){X.endHours=e}});var ye=P(ve,4),be=M(ye);Sa(be,{size:20});var xe=P(be,4),w=M(xe),Se=M(w,!0);E(w),E(xe),E(ye);var T=P(ye,2);Nr(T,21,()=>J.technicians,jr,(e,t,n)=>{var r=Ro(),i=N(r);W(i,`for`,`s${n}`);var a=M(i,!0);E(i);var o=P(i,2);W(o,`id`,`s${n}`),o.__click=()=>{X.tech=R(t).name},F(()=>H(a,R(t).name)),V(e,r)}),E(T),E(ee);var Ce=P(ee,2),we=M(Ce);Ut(we),E(Ce);var Ee=P(Ce,2),De=M(Ee),Oe=e=>{var t=Bo();t.__click=[zo,n];var r=M(t);xa(r,{size:20}),Te(),E(t),V(e,t)},ke=e=>{var t=Vo();t.__click=c;var n=M(t);xa(n,{size:20}),Te(),E(t),V(e,t)};Or(De,e=>{R(n)?e(ke,!1):e(Oe)});var Ae=P(De,2);Ae.__click=s;var je=M(Ae);oa(je,{size:20}),Te(),E(Ae),E(Ee),E(p),E(l),F((e,t,n)=>{H(f,X.clientName),H(ae,`${i[X.month]??``} ${X.date??``}${e??``}. ${X.year??``}`),H(de,t),H(_e,n),H(Se,X.tech)},[()=>r(X.date),()=>a(X.startHours,X.startMinutes),()=>a(X.endHours,X.endMinutes)]),Ci(_,()=>X.clientName,e=>X.clientName=e),Ci(b,()=>X.phone,e=>X.phone=e),Ci(C,()=>X.type,e=>X.type=e),xi(3,T,()=>Co,()=>({duration:Q.animations?250:0})),Ci(we,()=>X.notes,e=>X.notes=e),V(e,l),k()}mr([`click`]);let J=kt({sidebarToggle:!1,appointments:[],technicians:[],focusAppt:null});var Wo=new Date;let Y=kt({clientName:``,type:``,date:Wo.getDate(),month:Wo.getMonth(),year:Wo.getFullYear(),notes:``,startHours:12,startMinutes:0,endHours:12,endMinutes:45,technician:``,phone:``}),X=kt({clientName:``,type:``,startHours:12,startMinutes:0,endHours:12,endMinutes:45,date:Wo.getDate(),month:Wo.getMonth(),year:Wo.getFullYear(),notes:``,tech:``,id:``,phone:``}),Go=e=>{X.clientName=e.clientName,X.type=e.type,X.startHours=Math.floor(e.time/60),X.startMinutes=e.time%60,X.endHours=Math.floor((e.time+e.duration)/60),X.endMinutes=(e.time+e.duration)%60,X.date=e.date,X.month=e.month,X.year=e.year,X.notes=e.notes,X.id=e.id,X.tech=e.tech,X.phone=e.phone,ho(`/apptView`)},Z=kt({name:`Light`,type:`light`,headerColor:`#020202`,textColor:`#080808`,mainColor:`#018d6c`,lightMainColor:`#00ad85`,dimMainColor:`#006e55`,grayColor:`#2f2f2f`,inputColor:`#006e5580`,bgColor:`#f8f8f8`,lightBgColor:`#e8e8e8`,lighterBgColor:`#dedede`,lightestBgColor:`#d1d1d1ff`,fail:`#a52100`,index:6});const Ko=[{name:`Dark`,type:`dark`,headerColor:`#f8f8f8`,textColor:`#c9c9c9`,mainColor:`#018d6c`,lightMainColor:`#00ad85ff`,dimMainColor:`#006e55ff`,grayColor:`#2f2f2f`,inputColor:`#006e5580`,bgColor:`#0f0f0f`,lightBgColor:`#181818`,lighterBgColor:`#232323`,lightestBgColor:`#2e2e2e`,fail:`#a52100`},{name:`Matcha`,type:`dark`,headerColor:`#e1e6f8ff`,textColor:`#cdd6f4`,mainColor:`#60995aff`,lightMainColor:`#7cca76ff`,dimMainColor:`#53884eff`,grayColor:`#313244`,inputColor:`#53884e80`,bgColor:`#1e1e2e`,lightBgColor:`#242436ff`,lighterBgColor:`#2e2e46ff`,lightestBgColor:`#393957ff`,fail:`#df6174ff`},{name:`Ocean`,type:`dark`,headerColor:`#f0f2fdff`,textColor:`#e3e7ffff`,mainColor:`#5966d6ff`,lightMainColor:`#7482f2ff`,dimMainColor:`#4a56b3ff`,grayColor:`#2e2f44ff`,inputColor:`#4a56b380`,bgColor:`#191a2c`,lightBgColor:`#202136ff`,lighterBgColor:`#2b2c46ff`,lightestBgColor:`#383a5eff`,fail:`#d94f5cff`},{name:`Sunset`,type:`dark`,headerColor:`#fffdfbff`,textColor:`#ffeedd`,mainColor:`#ff7f50ff`,lightMainColor:`#ff9e70ff`,dimMainColor:`#e36b44ff`,grayColor:`#403b3dff`,inputColor:`#e36b4480`,bgColor:`#1b1b24`,lightBgColor:`#232330ff`,lighterBgColor:`#2d2d3bff`,lightestBgColor:`#3f3f57ff`,fail:`#bb0a0aff`},{name:`Regal`,type:`dark`,headerColor:`#e9e1f8ff`,textColor:`#d5cdeaff`,mainColor:`#a678dfff`,lightMainColor:`#c29cf2ff`,dimMainColor:`#8a5fd1ff`,grayColor:`#343046ff`,inputColor:`#8a5fd180`,bgColor:`#1d1a26ff`,lightBgColor:`#242032ff`,lighterBgColor:`#2b263fff`,lightestBgColor:`#332e4cff`,fail:`#df6174ff`},{name:`Forest`,type:`dark`,headerColor:`#e4f2e1ff`,textColor:`#d2e8d0ff`,mainColor:`#5aa469ff`,lightMainColor:`#74c282ff`,dimMainColor:`#4b8f59ff`,grayColor:`#2f3b33ff`,inputColor:`#5aa46980`,bgColor:`#1c241eff`,lightBgColor:`#232c25ff`,lighterBgColor:`#29352dff`,lightestBgColor:`#313f37ff`,fail:`#df6174ff`},{name:`Light`,type:`light`,headerColor:`#020202`,textColor:`#080808`,mainColor:`#018d6c`,lightMainColor:`#00ad85`,dimMainColor:`#006e55`,grayColor:`#2f2f2f`,inputColor:`#006e5580`,bgColor:`#f8f8f8`,lightBgColor:`#e8e8e8`,lighterBgColor:`#dedede`,lightestBgColor:`#d1d1d1ff`,fail:`#a52100`},{name:`Sandstone`,type:`light`,headerColor:`#1d1b18ff`,textColor:`#2d2925`,mainColor:`#d2a679ff`,lightMainColor:`#e6bf95ff`,dimMainColor:`#b8906aff`,grayColor:`#dad4cfff`,inputColor:`#b8906a80`,bgColor:`#fdfaf6`,lightBgColor:`#f6f0ebff`,lighterBgColor:`#ece2daff`,lightestBgColor:`#d3b59fff`,fail:`#ff0000ff`},{name:`Skyline`,type:`light`,headerColor:`#0a1a2fff`,textColor:`#14213d`,mainColor:`#0077b6`,lightMainColor:`#00b4d8`,dimMainColor:`#005f8a`,grayColor:`#b0c4de`,inputColor:`#0077b680`,bgColor:`#d6dce2ff`,lightBgColor:`#beccd6ff`,lighterBgColor:`#99afc2ff`,lightestBgColor:`#8fb2c9ff`,fail:`#d62828ff`},{name:`Peach`,type:`light`,headerColor:`#3d0c02ff`,textColor:`#432818`,mainColor:`#f9844a`,lightMainColor:`#f6aa1c`,dimMainColor:`#e36414`,grayColor:`#c9b5aaff`,inputColor:`#e3641480`,bgColor:`#fff5ec`,lightBgColor:`#ffebd8`,lighterBgColor:`#fde2c8`,lightestBgColor:`#f9d8b6`,fail:`#db0028ff`},{name:`Mint`,type:`light`,headerColor:`#1a2e1aff`,textColor:`#243424`,mainColor:`#5bb98c`,lightMainColor:`#84d9ab`,dimMainColor:`#449970`,grayColor:`#cfd8d3ff`,inputColor:`#5bb98c80`,bgColor:`#f4fff9`,lightBgColor:`#e7f8ef`,lighterBgColor:`#d9efe4`,lightestBgColor:`#cce6d8`,fail:`#d81e1eff`}];var qo=`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-=!@#$%^&*()_+\`~,./<>?;':"[]{}\\|`;const Jo=()=>{let e=``;for(let t=0;t<10;t++)e+=qo[$o(0,94)];return e};let Q=kt({clock24hr:!1,animations:!0,notifications:!0,dotNotifications:!1});const Yo=()=>{let e={clock24hr:Q.clock24hr,animations:Q.animations,notifications:Q.notifications,dotNotifications:Q.dotNotifications,colorIndex:Z.index};localStorage.setItem(`settings`,JSON.stringify(e))},Xo=async()=>{let e=JSON.parse(await localStorage.getItem(`settings`));if(e==null){console.log(`No Settings :(`);return}Q.clock24hr=e.clock24hr,Q.animations=e.animations,Q.notifications=e.notifications,Q.dotNotifications=e.dotNotifications,Z.index=e.colorIndex,console.log(e.colorIndex),Zo(Ko[e.colorIndex],Z.index)},Zo=(e,t)=>{Z.name=e.name,Z.headerColor=e.headerColor,Z.textColor=e.textColor,Z.mainColor=e.mainColor,Z.lightMainColor=e.lightMainColor,Z.dimMainColor=e.dimMainColor,Z.grayColor=e.grayColor,Z.inputColor=e.inputColor,Z.bgColor=e.bgColor,Z.lightBgColor=e.lightBgColor,Z.lighterBgColor=e.lighterBgColor,Z.lightestBgColor=e.lightestBgColor,Z.fail=e.fail,Z.index=t,Yo()},Qo=e=>{let t=Math.floor(Math.random()*e.length);return e[t]},$o=(e,t)=>Math.floor(Math.random()*(t-e+1)+e),es=e=>{let t=(new Date(e.year,e.month,e.date,Math.floor(e.time/60),e.time%60)-new Date)/6e4,n=t/1440,r=t/60,i=t%60;return t+e.duration<0?`Done`:n>=1?Math.floor(n)==1?`In 1 Day`:`In ${Math.floor(n)} Days`:r>=1?Math.ceil(r)==1?i>1?`In ${Math.floor(r)} Hour, ${Math.floor(i)} Minutes`:Math.ceil(i)==1?`In ${Math.floor(r)} Hour, 1 Minute`:`In ${Math.floor(r)} Hour`:i>1?`In ${Math.floor(r)} Hours, ${Math.floor(i)} Minutes`:Math.ceil(i)==1?`In ${Math.floor(r)} Hours, 1 Minute`:`In ${Math.floor(r)} Hours`:i>0?i>2?`In ${Math.ceil(i)} Minutes`:`In ${Math.ceil(i)} Minute`:`For ${Math.floor(i+e.duration)} More Minutes`};let ts=kt([]);const ns=e=>{let t=ts.indexOf(e);ts.splice(t,1)},rs=(e,t,n,r)=>{if(!Q.notifications)return;let i={type:e,content:t,icon:r,id:Jo()};ts.push(i),setTimeout(()=>{ns(i)},n)},os=new so(`https://georgeeggers.xyz`);var ss=(e,t,n)=>new Date(n,e-1,t).getDay();const cs=async()=>{for(let e of J.appointments)e.timeUntil==`Done`&&await os.collection(`appointments`).delete(e.id);rs(`success`,`Expired appointments deleted!`,5e3,ra),await ls()},ls=async()=>{J.appointments.length=0,await ds();for(let e of J.appointments)e.timeUntil=es(e)},us=e=>{let[t,n]=e.startTime.split(` `),[r,i,a]=t.split(`-`),[o,s,c]=n.split(`:`),l=parseInt(o)*60+parseInt(s);return{clientName:e.clientName,type:e.type,time:l,day:ss(i,a,r),date:parseInt(a),month:parseInt(i)-1,year:parseInt(r),duration:e.duration,timeUntil:``,notes:e.notes,tech:e.tech,phone:e.phone,id:e.id}},ds=async()=>{let e=await os.collection(`appointments`).getFullList({sort:`-created`});for(let t of e)J.appointments.push(us(t))},fs=async()=>{J.technicians.length=0;let e=await os.collection(`technicians`).getFullList();for(let t of e)J.technicians.push(t)};var ps=z(`<div class="headerRow svelte-l9fi92"><h1>Upcoming</h1></div>`),ms=z(`<div class="error"><h1> <!></h1> <p>No appointments listed. Try refreshing, or scheduling a new appointment</p></div>`),hs=z(`<label for="deleteDone" class="deleteButton svelte-l9fi92"><!> <p class="svelte-l9fi92">Delete Completed Appointments</p></label> <button class="invis" id="deleteDone">Delete Done</button>`,1),gs=z(`<div class="item svelte-l9fi92"><p style="font-size: 16px;" class="svelte-l9fi92"> </p></div>`),_s=(e,t)=>Go(R(t)),vs=z(`<label class="appointment svelte-l9fi92"><div class="appointmentHeader svelte-l9fi92"><h1 class="svelte-l9fi92"><!> </h1> <h1 class="svelte-l9fi92"> </h1></div> <div class="info svelte-l9fi92"><div class="item svelte-l9fi92"><!> <p class="svelte-l9fi92"> </p></div> <div class="item svelte-l9fi92"><!> <p class="svelte-l9fi92"> </p></div> <div class="item svelte-l9fi92"><!> <p class="svelte-l9fi92"> </p></div> <div class="item svelte-l9fi92"><!> <p class="svelte-l9fi92"> </p></div> <div class="item svelte-l9fi92"><!> <p class="svelte-l9fi92"> </p></div> <!></div></label> <button class="invis"></button>`,1),ys=z(`<h1>No appointment matches your search</h1>`),bs=z(`<div class="search svelte-l9fi92"><!> <input type="text" placeholder="Search for appointment..." class="svelte-l9fi92"/></div> <!> <!>`,1),xs=z(`<div class="main svelte-l9fi92"><div class="mainContainer svelte-l9fi92"><!> <div class="upcoming svelte-l9fi92"><!></div></div></div>`);function Ss(e,t){O(t,!0);let n=[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`],r=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],i=e=>e%10==1&&e!=11?`st`:e%10==2&&e!=12?`nd`:e%10==3&&e!=13?`rd`:`th`,a=e=>`${r[e.month]} ${e.date}${i(e.date)}, ${e.year}`,o=Ct(``),s=e=>{let t=e.clientName.toLowerCase(),i=e.type.toLowerCase(),a=n[e.day].toLowerCase(),s=r[e.month].toLowerCase(),c=e.notes,l=e.tech.toLowerCase();for(let e of R(o).split(` `).filter(Boolean)){let n=e.toLowerCase();if(!(t.includes(n)||i.includes(n)||a.includes(n)||s.includes(n)||c.includes(n)||l.includes(n)))return!1}return R(o),!0},c=ht(()=>J.appointments.filter(e=>s(e)).toSorted((e,t)=>{let n=new Date(e.year,e.month,e.date,Math.floor(e.time/60),e.time%60),r=new Date(t.year,t.month,t.date,Math.floor(t.time/60),t.time%60),i=new Date,a=n-i,o=r-i;return a>o?1:a<o?-1:0})),l=e=>{let t=n[e.day]+` from `,r=Math.floor(e.time/60),i=e.time%60,a=Math.floor((e.time+e.duration)/60),o=(e.time+e.duration)%60;return Q.clock24hr?(t+=`${r}:${i<10?`0${i}`:i} to `,t+=`${a}:${o<10?`0${o}`:o}`):(r>12&&(r-=12),a>12&&(a-=12),t+=`${r}:${i<10?`0${i}`:i} to `,t+=`${a}:${o<10?`0${o}`:o}`),t},u=ht(()=>{for(let e of J.appointments)if(e.timeUntil==`Done`)return!0;return!1});var d=xs(),f=M(d),p=M(f),m=e=>{var t=ps();V(e,t)},h=e=>{var t=ms(),n=M(t),r=M(n),i=P(r);ua(i,{size:30}),E(n),Te(2),E(t),F(e=>H(r,`${e??``}... `),[()=>Qo([`Zoinks`,`Uh Oh`,`Yikes`,`Oops`,`Gee Whiz`,`Jinkies`,`Jeepers`])]),V(e,t)};Or(p,e=>{J.appointments.length==0?e(h,!1):e(m)});var g=P(p,2),_=M(g),v=e=>{var t=bs(),n=N(t),r=M(n);va(r,{size:20});var i=P(r,2);oi(i),E(n);var s=P(n,2),d=e=>{var t=hs(),n=N(t),r=M(n);xa(r,{size:20}),Te(2),E(n);var i=P(n,2);i.__click=function(...e){cs?.apply(this,e)},V(e,t)};Or(s,e=>{R(u)&&e(d)});var f=P(s,2),p=e=>{var t=B(),n=N(t);Nr(n,17,()=>R(c),jr,(e,t,n)=>{var r=vs(),i=N(r);W(i,`for`,`view${n}`);var o=M(i),s=M(o),c=M(s);Sa(c,{size:24});var u=P(c);E(s);var d=P(s,2),f=M(d,!0);E(d),E(o);var p=P(o,2),m=M(p),h=M(m);ga(h,{size:18});var g=P(h,2),_=M(g,!0);E(g),E(m);var v=P(m,2),y=M(v);fa(y,{size:18});var b=P(y,2),x=M(b,!0);E(b),E(v);var S=P(v,2),C=M(S);la(C,{size:18});var ee=P(C,2),te=M(ee,!0);E(ee),E(S);var ne=P(S,2),re=M(ne);ea(re,{size:18});var ie=P(re,2),ae=M(ie,!0);E(ie),E(ne);var oe=P(ne,2),se=M(oe);Sa(se,{size:18});var ce=P(se,2),le=M(ce,!0);E(ce),E(oe);var ue=P(oe,2),de=e=>{var n=gs(),r=M(n),i=M(r,!0);E(r),E(n),F(()=>H(i,R(t).notes)),V(e,n)};Or(ue,e=>{R(t).notes.length>=1&&e(de)}),E(p),E(i);var fe=P(i,2);fe.__click=[_s,t],W(fe,`id`,`view${n}`),fe.textContent=`View ${n}`,F((e,n,r)=>{H(u,` ${R(t).clientName??``}`),Qr(d,e),H(f,R(t).timeUntil),H(_,R(t).phone),H(x,R(t).type),H(te,n),H(ae,r),H(le,R(t).tech)},[()=>R(t).timeUntil.includes(`For`)?`color: var(--main-color);`:R(t).timeUntil==`Done`?`color: var(--fail-color);`:``,()=>l(R(t)),()=>a(R(t))]),V(e,r)}),V(e,t)},m=e=>{var t=ys();V(e,t)};Or(f,e=>{R(c).length>0?e(p):e(m,!1)}),Ci(i,()=>R(o),e=>j(o,e)),V(e,t)};Or(_,e=>{J.appointments.length!=0&&e(v)}),E(g),E(f),E(d),V(e,d),k()}mr([`click`]);var $=Ai(()=>Q),Cs=z(`<div class="main svelte-1xel5aa"><div class="headerRow"><h1>Settings</h1></div> <div class="settingsMenu svelte-1xel5aa"><div class="row svelte-1xel5aa"><div class="text svelte-1xel5aa"><p class="header svelte-1xel5aa">24 Hour Times</p> <p class="content svelte-1xel5aa">Toggle the times to display in military time or standard time</p></div> <label for="toggleClock"><div></div></label> <button id="toggleClock" class="invis">Toggle 24HR Time</button></div> <div class="row svelte-1xel5aa"><div class="text svelte-1xel5aa"><p class="header svelte-1xel5aa">Animations</p> <p class="content svelte-1xel5aa">Controls animations across the app</p></div> <label for="toggleAnim"><div></div></label> <button id="toggleAnim" class="invis">Toggle Animations</button></div> <div class="row svelte-1xel5aa"><div class="text svelte-1xel5aa"><p class="header svelte-1xel5aa">Notifications</p> <p class="content svelte-1xel5aa">Controls all popup and push notifications</p></div> <label for="toggleNotif"><div></div></label> <button id="toggleNotif" class="invis">Toggle Notifications</button></div> <div class="row svelte-1xel5aa"><div class="text svelte-1xel5aa"><p class="header svelte-1xel5aa">Calendar Dots</p> <p class="content svelte-1xel5aa">Determines if notification dots show up on the main calendar view, representing if there are clients lined up for that day</p></div> <label for="toggleDots"><div></div></label> <button id="toggleDots" class="invis">Toggle Dots</button></div></div></div>`);function ws(e,t){O(t,!1),Oi();var n=Cs(),r=P(M(n),2),i=M(r),a=P(M(i),2),o=M(a);E(a);var s=P(a,2);s.__click=()=>{$($().clock24hr=!$().clock24hr),Yo()},E(i);var c=P(i,2),l=P(M(c),2),u=M(l);E(l);var d=P(l,2);d.__click=()=>{$($().animations=!$().animations),Yo()},E(c);var f=P(c,2),p=P(M(f),2),m=M(p);E(p);var h=P(p,2);h.__click=()=>{$($().notifications=!$().notifications),Yo()},E(f);var g=P(f,2),_=P(M(g),2),v=M(_);E(_);var y=P(_,2);y.__click=()=>{$($().dotNotifications=!$().dotNotifications),Yo()},E(g),E(r),E(n),F(()=>{Xr(a,1,`toggle ${$().animations?`anims`:``}`,`svelte-1xel5aa`),Qr(a,$().clock24hr?`background-color: var(--main-color);`:`background-color: var(--lighter-bg-color);`),Xr(o,1,`toggleBody ${$().animations?`anims`:``}`,`svelte-1xel5aa`),Qr(o,$().clock24hr?`left: calc(100% - 25px);`:`left: 5px;`),Xr(l,1,`toggle ${$().animations?`anims`:``}`,`svelte-1xel5aa`),Qr(l,$().animations?`background-color: var(--main-color);`:`background-color: var(--lighter-bg-color);`),Xr(u,1,`toggleBody ${$().animations?`anims`:``}`,`svelte-1xel5aa`),Qr(u,$().animations?`left: calc(100% - 25px);`:`left: 5px;`),Xr(p,1,`toggle ${$().animations?`anims`:``}`,`svelte-1xel5aa`),Qr(p,$().notifications?`background-color: var(--main-color);`:`background-color: var(--lighter-bg-color);`),Xr(m,1,`toggleBody ${$().animations?`anims`:``}`,`svelte-1xel5aa`),Qr(m,$().notifications?`left: calc(100% - 25px);`:`left: 5px;`),Xr(_,1,`toggle ${$().animations?`anims`:``}`,`svelte-1xel5aa`),Qr(_,$().dotNotifications?`background-color: var(--main-color);`:`background-color: var(--lighter-bg-color);`),Xr(v,1,`toggleBody ${$().animations?`anims`:``}`,`svelte-1xel5aa`),Qr(v,$().dotNotifications?`left: calc(100% - 25px);`:`left: 5px;`)}),V(e,n),k()}mr([`click`]);var Ts=z(`<div class="calItem svelte-llck0d" style="min-height: 0px; padding-bottom: 20px; justify-content: center; display: flex;"><p style="font-weight: bold; font-size: 22px;" class="svelte-llck0d"> </p></div>`),Es=z(`<div class="appt svelte-llck0d"><div class="dot svelte-llck0d"></div> <p class="text svelte-llck0d"> </p></div>`),Ds=z(`<button class="invis svelte-llck0d"></button> <div class="calInfo svelte-llck0d" style="font-weight: bold;"><div class="infoDot svelte-llck0d"><p class="svelte-llck0d"> </p></div></div> <div class="calData svelte-llck0d"><!></div>`,1),Os=z(`<label><!></label>`),ks=z(`<div class="calRow svelte-llck0d"></div>`),As=z(`<div class="headerRow"><h1> </h1></div> <div class="calRow svelte-llck0d" style="border-top: none;"></div> <!>`,1),js=z(`<div class="calendar svelte-llck0d"></div>`),Ms=z(`<div class="main" id="bleh"><!> <div id="loadMore" class="svelte-llck0d"></div></div>`);function Ns(e,t){O(t,!0);let n=new Date,r=kt(n.getFullYear()),i=kt(n.getDate()),a=kt(n.getMonth()),o=Ct(1),s=(e,t)=>new Date(t,e+1,0).getDate(),c=(e,t)=>new Date(t,e,1).getDay(),l=ht(()=>s(a,r)),u=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],d=kt({data:[]}),f=Ct(null),p=Ct(!1);Ki(async()=>{await ls(),await m(a,r),new IntersectionObserver(e=>{e.forEach(e=>{j(p,e.isIntersecting,!0)})},{root:document.getElementById(`bleh`)}).observe(R(f))});let m=(e,t)=>{let n=[],r=c(e,t);for(let e=0;e<r;e++)n.push({date:-1,appt:[],display:!1});for(let r=0;r<s(e,t);r++)n.push({date:r+1,appt:[],display:!0});for(let i of J.appointments)i.month==e&&i.year==t&&n[i.date-1+r].appt.push(i);let i=(R(l)+r)%7;for(let e=0;e<7-i;e++)n.push({date:-1,appt:[],display:!1});d.data.push(n)},h=Ct(!1);$t(()=>{R(p)&&(R(h)||(j(h,!0),m((a+R(o))%12,r+Math.floor((R(o)+a)/12)),Et(o),setTimeout(()=>{j(h,!1)},25)))});let g=(e,t,n)=>{console.log(`Focusing!`,e),J.focusAppt=e,J.focusAppt.month=t,J.focusAppt.day=n,mo(`/calendar/focus`)};var _=Ms(),v=M(_),y=e=>{var t=js();Nr(t,21,()=>({length:R(o)}),jr,(e,t,n)=>{var o=As(),l=N(o),f=M(l),p=M(f);E(f),E(l);var m=P(l,2);Nr(m,20,()=>[`S`,`M`,`T`,`W`,`T`,`F`,`S`],jr,(e,t)=>{var n=Ts(),r=M(n),i=M(r,!0);E(r),E(n),F(()=>H(i,t)),V(e,n)}),E(m);var h=P(m,2);Nr(h,17,()=>({length:Math.ceil((s((a+n)%12,r+Math.floor((n+a)/12))+c((a+n)%12,r+Math.floor((n+a)/12)))/7)}),jr,(e,t,r,o)=>{var s=ks();Nr(s,21,()=>d.data[n].slice(r*7,r*7+7),jr,(e,t,o)=>{var s=Os();W(s,`for`,`p${n}a${r}l${o}`);var c=M(s),l=e=>{var s=Ds(),c=N(s);W(c,`id`,`p${n}a${r}l${o}`),c.__click=()=>g(R(t),(a+n)%12,o),c.textContent=`p${n}a${r}`;var l=P(c,2),u=M(l),d=M(u),f=M(d,!0);E(d),E(u),E(l);var p=P(l,2),m=M(p),h=e=>{var n=B(),r=N(n);Nr(r,17,()=>R(t).appt.toSorted((e,t)=>{let n=new Date(e.year,e.month,e.date,Math.floor(e.time/60),e.time%60),r=new Date(t.year,t.month,t.date,Math.floor(t.time/60),t.time%60),i=new Date,a=n-i,o=r-i;return a>o?1:a<o?-1:0}),jr,(e,t)=>{var n=Es(),r=M(n),i=P(r,2),a=M(i,!0);E(i),E(n),F(e=>{Qr(r,e),H(a,R(t).clientName)},[()=>R(t).timeUntil.includes(`For`)?`background-color: var(--main-color);`:R(t).timeUntil==`Done`?`background-color: var(--fail-color);`:``]),V(e,n)}),V(e,n)};Or(m,e=>{Q.dotNotifications&&e(h)}),E(p),F(()=>{Qr(u,R(t).date==i&&n==0?`background-color: var(--main-color);`:``),H(f,R(t).date)}),V(e,s)};Or(c,e=>{R(t).display&&e(l)}),E(s),F(()=>Xr(s,1,`calItem ${R(t).display?`highlight`:``}`,`svelte-llck0d`)),V(e,s)}),E(s),V(e,s)}),F(e=>H(p,`${u[(a+n)%12]??``} ${e??``}`),[()=>r+Math.floor((n+a)/12)]),V(e,o)}),E(t),V(e,t)};Or(v,e=>{d.data.length!=0&&e(y)});var b=P(v,2);Di(b,e=>j(f,e),()=>R(f)),E(_),V(e,_),k()}mr([`click`]);var Ps=()=>{Q.notifications&&alert(`Printing may not work properly on mobile devices and certain browsers. Make sure you're on a computer and using chrome for best results.`),window.print()},Fs=async(e,t)=>{j(t,!0),await Jn(),Q.notifications&&alert(`Printing may not work properly on mobile devices and certain browsers. Make sure you're on a computer and using chrome for best results.`),window.print(),j(t,!1)},Is=z(`<div class="timeBox svelte-1pa29vf"><h3 class="svelte-1pa29vf"> </h3></div>`),Ls=(e,t,n,r)=>t(R(n).appt,R(r).name,R(n).start),Rs=z(`<div class="row svelte-1pa29vf"><p style="margin: 0px" class="svelte-1pa29vf"> </p></div>`),zs=z(`<div class="row svelte-1pa29vf" style="min-height: 25px"></div>`),Bs=z(`<div class="col svelte-1pa29vf"><div class="colHeader svelte-1pa29vf"><p class="svelte-1pa29vf"> </p></div> <!></div>`),Vs=z(`<div class="headerRow noPrint"><h1> </h1></div> <div class="control noPrint svelte-1pa29vf"><button class="noPrint nextButton svelte-1pa29vf"><!> Print</button> <button class="noPrint nextButton svelte-1pa29vf"><!> Print Blank Sheet</button></div> <div class="timeDisplay svelte-1pa29vf"><div class="timeRow svelte-1pa29vf"><div class="timeBox svelte-1pa29vf"></div> <!></div> <div class="apptArea svelte-1pa29vf"></div></div>`,1),Hs=z(`<div class="error"><h1> <!></h1> <p>Something went wrong... <a href="/#/">Go back</a> to the main page</p></div>`),Us=z(`<div class="main" id="print"><!></div>`);function Ws(e,t){O(t,!0);let n=e=>{let t=[],n=0,r=0;for(let i of e){let e=!0;for(let n of t)if(i.time>=n.time&&i.time<=n.time+n.maxSize+0){n.data.push(i),i.duration>n.maxSize&&(n.maxSize=i.duration),e=!1;break}e&&(i.time>n?r=0:r++,t.push({time:i.time,data:[i],offset:r,maxSize:i.duration})),i.time+i.duration>n&&(n=i.time+i.duration)}return t},r=ht(()=>n(J.focusAppt.appt.toSorted((e,t)=>e.time<t.time?-1:e.time>t.time?1:0))),i=e=>e%10==1?`st`:e%10!=2&&e%10==3?`rd`:`th`,a=e=>{let t=``,n=Math.floor(e/60),r=e%60;return Q.clock24hr||n>12&&(n-=12),t+=`${n}:${r<10?`0${r}`:r}`,t};Ki(async()=>{await fs();let e=1e4;for(let t of R(r)){let n=t.time/1440*100;n<e&&(e=n)}});let o=e=>{let t=[];for(let e of J.technicians){let n=[];for(let e=0;e<41;e++)n.push({size:1,appt:null,start:e*15});t.push({name:e.name,data:n})}for(let n of e.appt)for(let e of t)if(n.tech==e.name){let t=(n.time-570)/15,r=n.duration/15;e.data[t].appt=n,e.data[t].size=r,e.data.splice(t+1,r-1);break}return t},s=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],c=ht(()=>o(J.focusAppt)),l=(e,t,n)=>{Y.technician=t,Y.date=J.focusAppt.date,Y.month=J.focusAppt.month,Y.startHours=Math.floor((n+570)/60),Y.startMinutes=(n+570)%60,e==null?(Y.endHours=Math.floor((n+570+45)/60),Y.endMinutes=(n+570+45)%60,ho(`/new`)):Go(e)},u=Ct(!1);var d=Us(),f=M(d),p=e=>{var t=Vs(),n=N(t),r=M(n),o=M(r);E(r),E(n);var d=P(n,2),f=M(d);f.__click=[Ps];var p=M(f);_a(p,{size:20}),Te(),E(f);var m=P(f,2);m.__click=[Fs,u];var h=M(m);_a(h,{size:20}),Te(),E(m),E(d);var g=P(d,2),_=M(g),v=P(M(_),2);Nr(v,16,()=>({length:41}),jr,(e,t,n)=>{var r=Is(),i=M(r),o=M(i,!0);E(i),E(r),F(e=>H(o,e),[()=>a(n*15+570)]),V(e,r)}),E(_);var y=P(_,2);Nr(y,21,()=>R(c),jr,(e,t)=>{var n=Bs(),r=M(n),i=M(r),a=M(i,!0);E(i),E(r);var o=P(r,2),s=e=>{var n=B(),r=N(n);Nr(r,17,()=>R(t).data,jr,(e,n)=>{var r=Rs();r.__click=[Ls,l,n,t];var i=M(r),a=M(i,!0);E(i),E(r),F(()=>{Qr(r,`min-height: ${R(n).size*25}px`),H(a,R(n).appt==null?``:R(n).appt.clientName)}),V(e,r)}),V(e,n)},c=e=>{var t=B(),n=N(t);Nr(n,16,()=>({length:41}),jr,(e,t)=>{var n=zs();V(e,n)}),V(e,t)};Or(o,e=>{R(u)?e(c,!1):e(s)}),E(n),F(()=>H(a,R(t).name)),V(e,n)}),E(y),E(g),F(e=>H(o,`${s[J.focusAppt.month]??``} ${J.focusAppt.date??``}${e??``}`),[()=>i(J.focusAppt.date)]),V(e,t)},m=e=>{var t=Hs(),n=M(t),r=M(n),i=P(r);ua(i,{size:30}),E(n),Te(2),E(t),F(e=>H(r,`${e??``}... `),[()=>Qo([`Zoinks`,`Uh Oh`,`Yikes`,`Oops`,`Gee Whiz`,`Jinkies`,`Jeepers`])]),V(e,t)};Or(f,e=>{J.focusAppt?e(p):e(m,!1)}),E(d),V(e,d),k()}mr([`click`]);var Gs=z(`<label><!> <div class="textContainer svelte-1trli7c"><p1 class="modelName"> </p1> <div class="inline svelte-1trli7c"><div class="styleExample svelte-1trli7c"></div> <div class="styleExample svelte-1trli7c"></div> <div class="styleExample svelte-1trli7c"></div> <div class="styleExample svelte-1trli7c"></div></div></div> <button class="invis">Load Theme</button></label>`),Ks=z(`<div class="main svelte-1trli7c"><div class="headerRow"><h1>Theme</h1></div> <div class="menu svelte-1trli7c"></div></div>`);function qs(e,t){O(t,!1),Oi();var n=Ks(),r=P(M(n),2);Nr(r,5,()=>Ko,jr,(e,t,n)=>{var r=Gs();W(r,`for`,`chooseTheme${n}`);var i=M(r),a=e=>{ba(e,{size:24})},o=e=>{ma(e,{size:24})};Or(i,e=>{R(t).type==`light`?e(a):e(o,!1)});var s=P(i,2),c=M(s),l=M(c,!0);E(c);var u=P(c,2),d=M(u),f=P(d,2),p=P(f,2),m=P(p,2);E(u),E(s);var h=P(s,2);W(h,`id`,`chooseTheme${n}`),h.__click=()=>Zo(R(t),n),E(r),F(()=>{Xr(r,1,`modelCard themeCard ${Z.name==R(t).name?`selected`:``}`,`svelte-1trli7c`),H(l,R(t).name),Qr(d,`background-color: ${R(t).mainColor??``}; border: 2px solid ${R(t).textColor??``} !important;`),Qr(f,`background-color: ${R(t).dimMainColor??``}; border: 2px solid ${R(t).textColor??``} !important;`),Qr(p,`background-color: ${R(t).bgColor??``}; border: 2px solid ${R(t).textColor??``} !important;`),Qr(m,`background-color: ${R(t).inputColor??``}; border: 2px solid ${R(t).textColor??``} !important;`)}),V(e,r)}),E(r),E(n),V(e,n),k()}mr([`click`]);var Js=z(`<div class="main"><div class="error"><h1> <!></h1> <p>Page not found... <a href="/#/">Go back</a> to the main page</p></div></div>`);function Ys(e,t){O(t,!1),Oi();var n=Js(),r=M(n),i=M(r),a=M(i),o=P(a);ua(o,{size:30}),E(i),Te(2),E(r),E(n),F(e=>H(a,`${e??``}... `),[()=>Qo([`Zoinks`,`Uh Oh`,`Yikes`,`Oops`,`Gee Whiz`,`Jinkies`,`Jeepers`])]),V(e,n),k()}var Xs=(e,t)=>e.key===`Enter`&&t(`phone`),Zs=(e,t)=>e.key===`Enter`&&t(`type`),Qs=(e,t)=>e.key===`Enter`&&t(1),$s=(e,t)=>t(1),ec=(e,t)=>t(2),tc=(e,t)=>t(3),nc=(e,t)=>t(4),rc=z(`<label class="item svelte-12d9voo"> </label> <button class="invis svelte-12d9voo">Select Pack</button>`,1),ic=z(`<label for="focus2"></label>`),ac=z(`<div class="main svelte-12d9voo"><div class="headerRow svelte-12d9voo"><h1 class="svelte-12d9voo">New Appointment</h1></div> <div class="appointmentGroup svelte-12d9voo"><div class="inputGroup svelte-12d9voo"><div class="inputRow svelte-12d9voo"><!> <input placeholder="Client Name..." class="svelte-12d9voo"/></div> <div class="spacer svelte-12d9voo"></div> <div class="inputRow svelte-12d9voo"><!> <input id="phone" placeholder="Phone..." class="svelte-12d9voo"/></div> <div class="spacer svelte-12d9voo"></div> <div class="inputRow svelte-12d9voo"><!> <input id="type" placeholder="Appointment Type..." class="svelte-12d9voo"/></div></div> <p class="invis svelte-12d9voo">These should be dropdown scroll wheel type things</p> <div class="inputGroup svelte-12d9voo"><div class="inputRow space svelte-12d9voo"><!> <p class="idkText svelte-12d9voo">Date</p> <label for="focus1" class="focusLabel svelte-12d9voo"><p class="svelte-12d9voo"> </p></label> <button class="invis svelte-12d9voo" id="focus1">Focus Calendar</button></div> <!> <div class="spacer svelte-12d9voo"></div> <div class="inputRow svelte-12d9voo"><!> <p class="idkText svelte-12d9voo">Start Time</p> <label for="focus2" class="focusLabel svelte-12d9voo"><p class="svelte-12d9voo"> </p></label> <button class="invis svelte-12d9voo" id="focus2">Focus Start Time</button></div> <!> <div class="spacer svelte-12d9voo"></div> <div class="inputRow svelte-12d9voo"><!> <p class="idkText svelte-12d9voo">End Time</p> <label for="focus3" class="focusLabel svelte-12d9voo"><p class="svelte-12d9voo"> </p></label> <button class="invis svelte-12d9voo" id="focus3">Focus End Time</button></div> <!> <div class="spacer svelte-12d9voo"></div> <div class="inputRow svelte-12d9voo"><!> <p class="idkText svelte-12d9voo">Technician</p> <label for="focus4" class="focusLabel svelte-12d9voo"><p class="svelte-12d9voo"> </p></label> <button class="invis svelte-12d9voo" id="focus4">Focus Technicians</button></div> <!></div> <div class="inputGroup svelte-12d9voo"><textarea placeholder="Additional Notes..." class="svelte-12d9voo"></textarea></div> <button class="nextButton svelte-12d9voo"><!> Add Appointment</button></div></div>`);function oc(e,t){O(t,!0);let n=Ct(-1);Ki(async()=>{await fs()});let r=e=>e%10==1&&e!=11?`st`:e%10==2&&e!=12?`nd`:e%10==3&&e!=13?`rd`:`th`,i=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],a=e=>{document.getElementById(e).focus()},o=e=>{R(n)==e?j(n,-1):j(n,e,!0)},s=(e,t)=>{if(Q.clock24hr)return`${e}:${t<10?`0${t}`:t}`;if(e>=12){let n=e%12;return n==0&&(n=12),`${n}:${t<10?`0${t}`:t} PM`}else{let n=e%12;return n==0&&(n=12),`${n}:${t<10?`0${t}`:t} AM`}},c=()=>{let e=Y.endHours*60+Y.endMinutes,t=Y.startHours*60+Y.startMinutes;return e-t},l=async()=>{let e=c();if(e<0){rs(`fail`,`You cannot set an appointment to end before it starts`,5e3,ua);return}let t=`${Y.year}-${Y.month+1<10?`0${Y.month+1}`:Y.month+1}-${Y.date<10?`0${Y.date}`:Y.date} ${Y.startHours<10?`0${Y.startHours}`:Y.startHours}:${Y.startMinutes<10?`0${Y.startMinutes}`:Y.startMinutes}:00.123Z`;console.log(t);let n={startTime:t,duration:e,type:Y.type,clientName:Y.clientName,notes:Y.notes,phone:Y.phone,tech:Y.technician};try{await os.collection(`appointments`).create(n);let e=new Date;Y.clientName=``,Y.date=e.getDate(),Y.month=e.getMonth(),Y.notes=``,Y.type=``,Y.year=e.getFullYear(),Y.startHours=12,Y.startMinutes=0,Y.endHours=12,Y.endMinutes=45,rs(`success`,`Appointment created!`,5e3,ra),ho(`/`)}catch{rs(`fail`,`Something went wrong... Try again later`,5e3,ua)}};var u=ac(),d=P(M(u),2),f=M(d),p=M(f),m=M(p);Sa(m,{size:20});var h=P(m,2);oi(h),h.__keydown=[Xs,a],E(p);var g=P(p,4),_=M(g);ga(_,{size:20});var v=P(_,2);oi(v),v.__keydown=[Zs,a],E(g);var y=P(g,4),b=M(y);fa(b,{size:20});var x=P(b,2);oi(x),x.__keydown=[Qs,o],E(y),E(f);var S=P(f,4),C=M(S),ee=M(C);na(ee,{size:20});var te=P(ee,4),ne=M(te),re=M(ne);E(ne),E(te);var ie=P(te,2);ie.__click=[$s,o],E(C);var ae=P(C,2),oe=e=>{jo(e,{get year(){return Y.year},set year(e){Y.year=e},get month(){return Y.month},set month(e){Y.month=e},get date(){return Y.date},set date(e){Y.date=e}})};Or(ae,e=>{R(n)==1&&e(oe)});var se=P(ae,4),ce=M(se);sa(ce,{size:20});var le=P(ce,4),ue=M(le),de=M(ue,!0);E(ue),E(le);var fe=P(le,2);fe.__click=[ec,o],E(se);var pe=P(se,2),me=e=>{Lo(e,{id:`pihudfgs`,get minutes(){return Y.startMinutes},set minutes(e){Y.startMinutes=e},get hours(){return Y.startHours},set hours(e){Y.startHours=e}})};Or(pe,e=>{R(n)==2&&e(me)});var he=P(pe,4),ge=M(he);ca(ge,{size:20});var _e=P(ge,4),ve=M(_e),ye=M(ve,!0);E(ve),E(_e);var be=P(_e,2);be.__click=[tc,o],E(he);var xe=P(he,2),w=e=>{Lo(e,{id:`poihadfgiunsdf`,get minutes(){return Y.endMinutes},set minutes(e){Y.endMinutes=e},get hours(){return Y.endHours},set hours(e){Y.endHours=e}})};Or(xe,e=>{R(n)==3&&e(w)});var Se=P(xe,4),T=M(Se);Sa(T,{size:20});var Ce=P(T,4),we=M(Ce),Ee=M(we,!0);E(we),E(Ce);var De=P(Ce,2);De.__click=[nc,o],E(Se);var Oe=P(Se,2),ke=e=>{var t=ic();Nr(t,21,()=>J.technicians,jr,(e,t,n)=>{var r=rc(),i=N(r);W(i,`for`,`s${n}`);var a=M(i,!0);E(i);var o=P(i,2);W(o,`id`,`s${n}`),o.__click=()=>{Y.technician=R(t).name},F(()=>H(a,R(t).name)),V(e,r)}),E(t),F(()=>Xr(t,1,`dropDown ${R(n)==4?`focused`:``}`,`svelte-12d9voo`)),xi(3,t,()=>Co,()=>({duration:Q.animations?250:0})),V(e,t)};Or(Oe,e=>{R(n)==4&&e(ke)}),E(S);var Ae=P(S,2),je=M(Ae);Ut(je),E(Ae);var Me=P(Ae,2);Me.__click=l;var D=M(Me);oa(D,{size:20}),Te(),E(Me),E(d),E(u),F((e,t,n)=>{H(re,`${i[Y.month]??``} ${Y.date??``}${e??``}. ${Y.year??``}`),H(de,t),H(ye,n),H(Ee,Y.technician==``?`Select...`:Y.technician)},[()=>r(Y.date),()=>s(Y.startHours,Y.startMinutes),()=>s(Y.endHours,Y.endMinutes)]),Ci(h,()=>Y.clientName,e=>Y.clientName=e),Ci(v,()=>Y.phone,e=>Y.phone=e),Ci(x,()=>Y.type,e=>Y.type=e),Ci(je,()=>Y.notes,e=>Y.notes=e),V(e,u),k()}mr([`keydown`,`click`]);var sc=async(e,t)=>{try{await os.collection(`technicians`).create({name:R(t)}),rs(`success`,`Technician Added`,5e3,ra),j(t,``)}catch{rs(`fail`,`Something went wrong!`,5e3,ua)}},cc=(e,t,n)=>t(R(n)),lc=z(`<div class="focusLabel svelte-11sklj6"><p class="svelte-11sklj6"> </p> <button class="svelte-11sklj6"><!></button></div>`),uc=z(`<div class="main svelte-11sklj6"><div class="headerRow"><h1>Techs</h1></div> <div class="appointmentGroup svelte-11sklj6"><!> <div class="focusLabel svelte-11sklj6" style="background-color: var(--lighter-bg-color);"><input placeholder="New Technician..." class="svelte-11sklj6"/></div> <button class="nextButton svelte-11sklj6"><!> Add</button></div></div>`);function dc(e,t){O(t,!0);let n=async e=>{console.log(`deleting`);try{await os.collection(`technicians`).delete(e.id)}catch{rs(`fail`,`Something went wrong!`,5e3,ua)}};Ki(async()=>{await fs()});let r=Ct(``);var i=uc(),a=P(M(i),2),o=M(a);Nr(o,17,()=>J.technicians,jr,(e,t)=>{var r=lc(),i=M(r),a=M(i,!0);E(i);var o=P(i,2);o.__click=[cc,n,t];var s=M(o);xa(s,{size:20}),E(o),E(r),F(()=>{H(a,R(t).name),Qr(o,Q.animations?`transition: color .25s ease;`:``)}),V(e,r)});var s=P(o,2),c=M(s);oi(c),E(s);var l=P(s,2);l.__click=[sc,r];var u=M(l);oa(u,{size:20}),Te(),E(l),E(a),E(i),Ci(c,()=>R(r),e=>j(r,e)),V(e,i),k()}mr([`click`]);const fc={"/":Ns,"/settings":ws,"/calendar":Ss,"/calendar/focus":Ws,"/new":oc,"/theme":qs,"/apptView":Uo,"/users":dc,"*":Ys};var pc=Ai(()=>J),mc=z(`<div class="smain svelte-1bhwpv3"><div class="optionGroup svelte-1bhwpv3"><div class="header svelte-1bhwpv3"><p class="svelte-1bhwpv3">KK 2000 Nails</p></div> <label for="home"><!> <p class="svelte-1bhwpv3">Home</p></label> <button class="invis" id="home">toHome</button> <label for="new"><!> <p class="svelte-1bhwpv3">New</p></label> <button class="invis" id="new">tonew</button> <label for="calendar"><!> <p class="svelte-1bhwpv3">Upcoming</p></label> <button class="invis" id="calendar">tocalendar</button> <label for="users"><!> <p class="svelte-1bhwpv3">Techs</p></label> <button class="invis" id="users">tocalendar</button></div> <div class="optionGroup svelte-1bhwpv3"><label for="theme"><!> <p class="svelte-1bhwpv3">Theme</p></label> <button class="invis" id="theme">totheme</button> <label for="settings"><!> <p class="svelte-1bhwpv3">Settings</p></label> <button class="invis" id="settings">tosettings</button></div></div>`);function hc(e,t){O(t,!1);let n=()=>Bi(fo,`$location`,r),[r,i]=Vi();Oi();var a=mc(),o=M(a),s=P(M(o),2),c=M(s);da(c,{size:24}),Te(2),E(s);var l=P(s,2);l.__click=()=>{pc(pc().sidebarToggle=!1),ho(`/`)};var u=P(l,2),d=M(u);oa(d,{size:24}),Te(2),E(u);var f=P(u,2);f.__click=()=>{pc(pc().sidebarToggle=!1),ho(`/new`)};var p=P(f,2),m=M(p);ta(m,{size:24}),Te(2),E(p);var h=P(p,2);h.__click=()=>{pc(pc().sidebarToggle=!1),ho(`/calendar`)};var g=P(h,2),_=M(g);Sa(_,{size:24}),Te(2),E(g);var v=P(g,2);v.__click=()=>{pc(pc().sidebarToggle=!1),ho(`/users`)},E(o);var y=P(o,2),b=M(y),x=M(b);ha(x,{size:24}),Te(2),E(b);var S=P(b,2);S.__click=()=>{pc(pc().sidebarToggle=!1),ho(`/theme`)};var C=P(S,2),ee=M(C);ya(ee,{size:24}),Te(2),E(C);var te=P(C,2);te.__click=()=>{pc(pc().sidebarToggle=!1),ho(`/settings`)},E(y),E(a),F(()=>{Xr(s,1,`option ${n()==`/`||n()==`/calendar/focus`?`highlighted`:``}`,`svelte-1bhwpv3`),Xr(u,1,`option ${n()==`/new`?`highlighted`:``}`,`svelte-1bhwpv3`),Xr(p,1,`option ${n()==`/calendar`?`highlighted`:``}`,`svelte-1bhwpv3`),Xr(g,1,`option ${n()==`/users`?`highlighted`:``}`,`svelte-1bhwpv3`),Xr(b,1,`option ${n()==`/theme`?`highlighted`:``}`,`svelte-1bhwpv3`),Xr(C,1,`option ${n()==`/settings`?`highlighted`:``}`,`svelte-1bhwpv3`)}),V(e,a),k(),i()}mr([`click`]);var gc=z(`<div><div class="iconContainer svelte-1n46o8q"><!></div> <p class="svelte-1n46o8q"> </p></div>`),_c=z(`<label class="blocker svelte-1n46o8q" for="toggleButton"></label>`),vc=z(`<button id="toggleButton"><!></button> <div class="popupArea svelte-1n46o8q"></div> <!> <div class="globalContainer svelte-1n46o8q"><div class="sidebarContainer desktop svelte-1n46o8q"><!></div> <div><!></div> <div class="contentContainer svelte-1n46o8q"><!></div></div>`,1);function yc(e,t){O(t,!0),$t(()=>{let e={"--header-color":Z.headerColor,"--text-color":Z.textColor,"--main-color":Z.mainColor,"--light-main-color":Z.lightMainColor,"--dim-main-color":Z.dimMainColor,"--gray-color":Z.grayColor,"--input-color":Z.inputColor,"--bg-color":Z.bgColor,"--light-bg-color":Z.lightBgColor,"--lighter-bg-color":Z.lighterBgColor,"--lightest-bg-color":Z.lightestBgColor,"--fail-color":Z.fail};for(let[t,n]of Object.entries(e))document.documentElement.style.setProperty(t,`${n}`)}),Ki(async()=>{await Jn(),Xo(),await ds(),await fs(),os.collection(`appointments`).subscribe(`*`,async e=>{(e.action==`create`||e.action==`update`)&&await ls()}),os.collection(`technicians`).subscribe(`*`,async e=>{(e.action==`create`||e.action==`delete`)&&await fs()})}),qi(async()=>{os.collection(`appointments`).unsubscribe(`*`),os.collection(`technicians`).unsubscribe(`*`)}),setInterval(()=>{for(let e of J.appointments)e.timeUntil=es(e)},6e4);var n=vc(),r=N(n);r.__click=()=>{J.sidebarToggle=!J.sidebarToggle};var i=M(r);pa(i,{style:`z-index: `,size:40}),E(r);var a=P(r,2);Nr(a,21,()=>ts,jr,(e,t)=>{var n=gc(),r=M(n),i=M(r);zr(i,()=>R(t).icon,(e,t)=>{t(e,{})}),E(r);var a=P(r,2),o=M(a,!0);E(a),E(n),F(()=>{Xr(n,1,`notification ${R(t).type??``}`,`svelte-1n46o8q`),H(o,R(t).content)}),xi(3,n,()=>So,()=>({duration:Q.animations?250:0,y:-20})),V(e,n)}),E(a);var o=P(a,2),s=e=>{var t=_c();xi(3,t,()=>xo,()=>({duration:Q.animations?250:0})),V(e,t)};Or(o,e=>{J.sidebarToggle&&e(s)});var c=P(o,2),l=M(c),u=M(l);hc(u,{}),E(l);var d=P(l,2),f=M(d);hc(f,{}),E(d);var p=P(d,2),m=M(p);_o(m,{get routes(){return fc}}),E(p),E(c),F(()=>{Qr(r,J.sidebarToggle?`color: var(--light-main-color);`:`var(--text-color);`),Xr(r,1,`toggleButton ${Q.animations?`anims`:``}`,`svelte-1n46o8q`),Xr(d,1,`sidebarContainer mobile  ${Q.animations?`anims`:``}`,`svelte-1n46o8q`),Qr(d,J.sidebarToggle?``:`transform: translateX(calc(-1 * max(50%, 400px)));`)}),V(e,n),k()}mr([`click`]),Cr(yc,{target:document.getElementById(`app`)});