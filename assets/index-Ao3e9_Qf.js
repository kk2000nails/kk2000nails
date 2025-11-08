(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=Array.isArray,t=Array.prototype.indexOf,n=Array.from;Object.keys;var r=Object.defineProperty,i=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyDescriptors,o=Object.prototype,s=Array.prototype,c=Object.getPrototypeOf,l=Object.isExtensible;function u(e){return typeof e==`function`}const d=()=>{};function f(e){return e()}function p(e){for(var t=0;t<e.length;t++)e[t]()}function m(){var e,t;return{promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}}function h(e,t){if(Array.isArray(e))return e;if(t===void 0||!(Symbol.iterator in e))return Array.from(e);let n=[];for(let r of e)if(n.push(r),n.length===t)break;return n}const g=1024,_=2048,v=4096,y=8192,b=65536,x=1<<19,S=1<<20,C=1<<21,ee=1<<23,te=Symbol(`$state`),ne=Symbol(`legacy props`),re=Symbol(``),w=new class extends Error{name=`StaleReactionError`;message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function ie(e){throw Error(`https://svelte.dev/e/lifecycle_outside_component`)}function ae(){throw Error(`https://svelte.dev/e/async_derived_orphan`)}function oe(e){throw Error(`https://svelte.dev/e/effect_in_teardown`)}function se(){throw Error(`https://svelte.dev/e/effect_in_unowned_derived`)}function ce(e){throw Error(`https://svelte.dev/e/effect_orphan`)}function le(){throw Error(`https://svelte.dev/e/effect_update_depth_exceeded`)}function ue(e){throw Error(`https://svelte.dev/e/lifecycle_legacy_only`)}function de(e){throw Error(`https://svelte.dev/e/props_invalid_value`)}function fe(){throw Error(`https://svelte.dev/e/state_descriptors_fixed`)}function pe(){throw Error(`https://svelte.dev/e/state_prototype_fixed`)}function me(){throw Error(`https://svelte.dev/e/state_unsafe_mutation`)}function he(){throw Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`)}const ge={},T=Symbol();function _e(e){console.warn(`https://svelte.dev/e/hydration_mismatch`)}function ve(){console.warn(`https://svelte.dev/e/select_multiple_invalid_value`)}function ye(){console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`)}let E=!1;function be(e){E=e}let D;function xe(e){if(e===null)throw _e(),ge;return D=e}function Se(){return xe(Lt(D))}function O(e){if(E){if(Lt(D)!==null)throw _e(),ge;D=e}}function Ce(e=1){if(E){for(var t=e,n=D;t--;)n=Lt(n);D=n}}function we(e=!0){for(var t=0,n=D;;){if(n.nodeType===8){var r=n.data;if(r===`]`){if(t===0)return n;--t}else (r===`[`||r===`[!`)&&(t+=1)}var i=Lt(n);e&&n.remove(),n=i}}function Te(e){if(!e||e.nodeType!==8)throw _e(),ge;return e.data}function Ee(e){return e===this.v}function De(e,t){return e==e?e!==t||typeof e==`object`&&!!e||typeof e==`function`:t==t}function Oe(e){return!De(e,this.v)}let ke=!1;function Ae(){ke=!0}let k=null;function je(e){k=e}function A(e,t=!1,n){k={p:k,c:null,e:null,s:e,x:null,l:ke&&!t?{s:null,u:null,$:[]}:null}}function j(e){var t=k,n=t.e;if(n!==null){t.e=null;for(var r of n)Qt(r)}return e!==void 0&&(t.x=e),k=t.p,e??{}}function Me(){return!ke||k!==null&&k.l===null}var Ne=[];function Pe(){var e=Ne;Ne=[],p(e)}function Fe(e){if(Ne.length===0&&!Je){var t=Ne;queueMicrotask(()=>{t===Ne&&Pe()})}Ne.push(e)}function Ie(){for(;Ne.length>0;)Pe()}var Le=new WeakMap;function Re(e){var t=z;if(t===null)return R.f|=ee,e;if(t.f&32768)ze(e,t);else{if(!(t.f&128))throw!t.parent&&e instanceof Error&&Be(e),e;t.b.error(e)}}function ze(e,t){for(;t!==null;){if(t.f&128)try{t.b.error(e);return}catch(t){e=t}t=t.parent}throw e instanceof Error&&Be(e),e}function Be(e){let t=Le.get(e);t&&(r(e,`message`,{value:t.message}),r(e,`stack`,{value:t.stack}))}var Ve=new Set;let M=null,He=null,Ue=null,We=new Set;var Ge=[],Ke=null,qe=!1;let Je=!1;var Ye=class e{current=new Map;#previous=new Map;#callbacks=new Set;#pending=0;#deferred=null;#render_effects=[];#effects=[];#block_effects=[];#dirty_effects=[];#maybe_dirty_effects=[];skipped_effects=new Set;process(e){Ge=[],He=null,this.apply();for(let t of e)this.#traverse_effect_tree(t);if(this.#pending===0){var t=Ue;this.#commit();var n=this.#render_effects,r=this.#effects;this.#render_effects=[],this.#effects=[],this.#block_effects=[],He=this,M=null,Ue=t,et(n),et(r),He=null,this.#deferred?.resolve()}else this.#defer_effects(this.#render_effects),this.#defer_effects(this.#effects),this.#defer_effects(this.#block_effects);Ue=null}#traverse_effect_tree(e){e.f^=g;for(var t=e.first;t!==null;){var n=t.f,r=(n&96)!=0;if(!(r&&n&1024||n&8192||this.skipped_effects.has(t))&&t.fn!==null){r?t.f^=g:n&4?this.#effects.push(t):Bn(t)&&(t.f&16&&this.#block_effects.push(t),Gn(t));var i=t.first;if(i!==null){t=i;continue}}var a=t.parent;for(t=t.next;t===null&&a!==null;)t=a.next,a=a.parent}}#defer_effects(e){for(let t of e)(t.f&2048?this.#dirty_effects:this.#maybe_dirty_effects).push(t),Xn(t,g);e.length=0}capture(e,t){this.#previous.has(e)||this.#previous.set(e,t),this.current.set(e,e.v),Ue?.set(e,e.v)}activate(){M=this}deactivate(){M=null,Ue=null}flush(){if(Ge.length>0){if(this.activate(),Ze(),M!==null&&M!==this)return}else this.#pending===0&&this.#commit();this.deactivate();for(let e of We)if(We.delete(e),e(),M!==null)break}#commit(){for(let e of this.#callbacks)e();if(this.#callbacks.clear(),Ve.size>1){this.#previous.clear();let e=!0;for(let t of Ve){if(t===this){e=!1;continue}let n=[];for(let[r,i]of this.current){if(t.current.has(r))if(e&&i!==t.current.get(r))t.current.set(r,i);else continue;n.push(r)}if(n.length===0)continue;let r=[...t.current.keys()].filter(e=>!this.current.has(e));if(r.length>0){for(let e of n)tt(e,r);if(Ge.length>0){M=t,t.apply();for(let e of Ge)t.#traverse_effect_tree(e);Ge=[],t.deactivate()}}}M=null}Ve.delete(this)}increment(){this.#pending+=1}decrement(){--this.#pending;for(let e of this.#dirty_effects)Xn(e,_),rt(e);for(let e of this.#maybe_dirty_effects)Xn(e,v),rt(e);this.flush()}add_callback(e){this.#callbacks.add(e)}settled(){return(this.#deferred??=m()).promise}static ensure(){if(M===null){let t=M=new e;Ve.add(M),Je||e.enqueue(()=>{M===t&&t.flush()})}return M}static enqueue(e){Fe(e)}apply(){}};function Xe(e){var t=Je;Je=!0;try{var n;for(e&&(M!==null&&Ze(),n=e());;){if(Ie(),Ge.length===0&&(M?.flush(),Ge.length===0))return Ke=null,n;Ze()}}finally{Je=t}}function Ze(){var e=xn;qe=!0;try{var t=0;for(Sn(!0);Ge.length>0;){var n=Ye.ensure();t++>1e3&&Qe(),n.process(Ge),yt.clear()}}finally{qe=!1,Sn(e),Ke=null}}function Qe(){try{le()}catch(e){ze(e,Ke)}}let $e=null;function et(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if(!(r.f&24576)&&Bn(r)&&($e=[],Gn(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null&&r.ac===null?mn(r):r.fn=null),$e?.length>0)){yt.clear();for(let e of $e)Gn(e);$e=[]}}$e=null}}function tt(e,t){if(e.reactions!==null)for(let n of e.reactions){let e=n.f;e&2?tt(n,t):e&4194320&&nt(n,t)&&(Xn(n,_),rt(n))}}function nt(e,t){if(e.deps!==null){for(let n of e.deps)if(t.includes(n)||n.f&2&&nt(n,t))return!0}return!1}function rt(e){for(var t=Ke=e;t.parent!==null;){t=t.parent;var n=t.f;if(qe&&t===z&&n&16)return;if(n&96){if(!(n&1024))return;t.f^=g}}Ge.push(t)}function it(e){let t=0,n=bt(0),r;return()=>{Yt()&&(B(n),on(()=>(t===0&&(r=Jn(()=>e(()=>Tt(n)))),t+=1,()=>{Fe(()=>{--t,t===0&&(r?.(),r=void 0,Tt(n))})})))}}var at=x|65664;function ot(e,t,n){new st(e,t,n)}var st=class{parent;#pending=!1;#anchor;#hydrate_open=E?D:null;#props;#children;#effect;#main_effect=null;#pending_effect=null;#failed_effect=null;#offscreen_fragment=null;#local_pending_count=0;#pending_count=0;#is_creating_fallback=!1;#effect_pending=null;#effect_pending_update=()=>{this.#effect_pending&&Ct(this.#effect_pending,this.#local_pending_count)};#effect_pending_subscriber=it(()=>(this.#effect_pending=bt(this.#local_pending_count),()=>{this.#effect_pending=null}));constructor(e,t,n){this.#anchor=e,this.#props=t,this.#children=n,this.parent=z.b,this.#pending=!!this.#props.pending,this.#effect=sn(()=>{if(z.b=this,E){let e=this.#hydrate_open;Se(),e.nodeType===8&&e.data===`[!`?this.#hydrate_pending_content():this.#hydrate_resolved_content()}else{try{this.#main_effect=cn(()=>n(this.#anchor))}catch(e){this.error(e)}this.#pending_count>0?this.#show_pending_snippet():this.#pending=!1}},at),E&&(this.#anchor=D)}#hydrate_resolved_content(){try{this.#main_effect=cn(()=>this.#children(this.#anchor))}catch(e){this.error(e)}this.#pending=!1}#hydrate_pending_content(){let e=this.#props.pending;e&&(this.#pending_effect=cn(()=>e(this.#anchor)),Ye.enqueue(()=>{this.#main_effect=this.#run(()=>(Ye.ensure(),cn(()=>this.#children(this.#anchor)))),this.#pending_count>0?this.#show_pending_snippet():(hn(this.#pending_effect,()=>{this.#pending_effect=null}),this.#pending=!1)}))}is_pending(){return this.#pending||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#props.pending}#run(e){var t=z,n=R,r=k;Dn(this.#effect),En(this.#effect),je(this.#effect.ctx);try{return e()}catch(e){return Re(e),null}finally{Dn(t),En(n),je(r)}}#show_pending_snippet(){let e=this.#props.pending;this.#main_effect!==null&&(this.#offscreen_fragment=document.createDocumentFragment(),bn(this.#main_effect,this.#offscreen_fragment)),this.#pending_effect===null&&(this.#pending_effect=cn(()=>e(this.#anchor)))}#update_pending_count(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#update_pending_count(e);return}this.#pending_count+=e,this.#pending_count===0&&(this.#pending=!1,this.#pending_effect&&hn(this.#pending_effect,()=>{this.#pending_effect=null}),this.#offscreen_fragment&&=(this.#anchor.before(this.#offscreen_fragment),null),Fe(()=>{Ye.ensure().flush()}))}update_pending_count(e){this.#update_pending_count(e),this.#local_pending_count+=e,We.add(this.#effect_pending_update)}get_effect_pending(){return this.#effect_pending_subscriber(),B(this.#effect_pending)}error(e){var t=this.#props.onerror;let n=this.#props.failed;if(this.#is_creating_fallback||!t&&!n)throw e;this.#main_effect&&=(fn(this.#main_effect),null),this.#pending_effect&&=(fn(this.#pending_effect),null),this.#failed_effect&&=(fn(this.#failed_effect),null),E&&(xe(this.#hydrate_open),Ce(),xe(we()));var r=!1,i=!1;let a=()=>{if(r){ye();return}r=!0,i&&he(),Ye.ensure(),this.#local_pending_count=0,this.#failed_effect!==null&&hn(this.#failed_effect,()=>{this.#failed_effect=null}),this.#pending=this.has_pending_snippet(),this.#main_effect=this.#run(()=>(this.#is_creating_fallback=!1,cn(()=>this.#children(this.#anchor)))),this.#pending_count>0?this.#show_pending_snippet():this.#pending=!1};var o=R;try{En(null),i=!0,t?.(e,a),i=!1}catch(e){ze(e,this.#effect&&this.#effect.parent)}finally{En(o)}n&&Fe(()=>{this.#failed_effect=this.#run(()=>{this.#is_creating_fallback=!0;try{return cn(()=>{n(this.#anchor,()=>e,()=>a)})}catch(e){return ze(e,this.#effect.parent),null}finally{this.#is_creating_fallback=!1}})})}};function ct(e,t,n){let r=Me()?dt:mt;if(t.length===0){n(e.map(r));return}var i=M,a=z,o=lt(),s=E;Promise.all(t.map(e=>ft(e))).then(t=>{o();try{n([...e.map(r),...t])}catch(e){a.f&16384||ze(e,a)}s&&be(!1),i?.deactivate(),ut()}).catch(e=>{ze(e,a)})}function lt(){var e=z,t=R,n=k,r=M,i=E;if(i)var a=D;return function(){Dn(e),En(t),je(n),r?.activate(),i&&(be(!0),xe(a))}}function ut(){Dn(null),En(null),je(null)}function dt(e){var t=2|_,n=R!==null&&R.f&2?R:null;return z===null||n!==null&&n.f&256?t|=256:z.f|=x,{ctx:k,deps:null,effects:null,equals:Ee,f:t,fn:e,reactions:null,rv:0,v:T,wv:0,parent:n??z,ac:null}}function ft(e,t){let n=z;n===null&&ae();var r=n.b,i=void 0,a=bt(T),o=!R,s=new Map;return an(()=>{var t=m();i=t.promise;try{Promise.resolve(e()).then(t.resolve,t.reject).then(ut)}catch(e){t.reject(e),ut()}var n=M,c=r.is_pending();o&&(r.update_pending_count(1),c||(n.increment(),s.get(n)?.reject(w),s.delete(n),s.set(n,t)));let l=(e,t=void 0)=>{if(c||n.activate(),t)t!==w&&(a.f|=ee,Ct(a,t));else{a.f&8388608&&(a.f^=ee),Ct(a,e);for(let[e,t]of s){if(s.delete(e),e===n)break;t.reject(w)}}o&&(r.update_pending_count(-1),c||n.decrement())};t.promise.then(l,e=>l(null,e||`unknown`))}),Xt(()=>{for(let e of s.values())e.reject(w)}),new Promise(e=>{function t(n){function r(){n===i?e(a):t(i)}n.then(r,r)}t(i)})}function pt(e){let t=dt(e);return kn(t),t}function mt(e){let t=dt(e);return t.equals=Oe,t}function ht(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)fn(t[n])}}function gt(e){for(var t=e.parent;t!==null;){if(!(t.f&2))return t;t=t.parent}return null}function _t(e){var t,n=z;Dn(gt(e));try{ht(e),t=Hn(e)}finally{Dn(n)}return t}function vt(e){var t=_t(e);if(e.equals(t)||(e.v=t,e.wv=zn()),!Cn)if(Ue!==null)Ue.set(e,e.v);else{var n=(Rn||e.f&256)&&e.deps!==null?v:g;Xn(e,n)}}const yt=new Map;function bt(e,t){return{f:0,v:e,reactions:null,equals:Ee,rv:0,wv:0}}function xt(e,t){let n=bt(e,t);return kn(n),n}function St(e,t=!1,n=!0){let r=bt(e);return t||(r.equals=Oe),ke&&n&&k!==null&&k.l!==null&&(k.l.s??=[]).push(r),r}function N(e,t,n=!1){R!==null&&(!Tn||R.f&131072)&&Me()&&R.f&4325394&&!On?.includes(e)&&me();let r=n?Dt(t):t;return Ct(e,r)}function Ct(e,t){if(!e.equals(t)){var n=e.v;Cn?yt.set(e,t):yt.set(e,n),e.v=t,Ye.ensure().capture(e,n),e.f&2&&(e.f&2048&&_t(e),Xn(e,e.f&256?v:g)),e.wv=zn(),Et(e,_),Me()&&z!==null&&z.f&1024&&!(z.f&96)&&(Mn===null?Nn([e]):Mn.push(e))}return t}function wt(e,t=1){var n=B(e),r=t===1?n++:n--;return N(e,n),r}function Tt(e){N(e,e.v+1)}function Et(e,t){var n=e.reactions;if(n!==null)for(var r=Me(),i=n.length,a=0;a<i;a++){var o=n[a],s=o.f;if(!(!r&&o===z)){var c=(s&_)===0;c&&Xn(o,t),s&2?Et(o,v):c&&(s&16&&$e!==null&&$e.push(o),rt(o))}}}function Dt(t){if(typeof t!=`object`||!t||te in t)return t;let n=c(t);if(n!==o&&n!==s)return t;var r=new Map,a=e(t),l=xt(0),u=null,d=In,f=e=>{if(In===d)return e();var t=R,n=In;En(null),Ln(d);var r=e();return En(t),Ln(n),r};return a&&r.set(`length`,xt(t.length,u)),new Proxy(t,{defineProperty(e,t,n){(!(`value`in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&fe();var i=r.get(t);return i===void 0?i=f(()=>{var e=xt(n.value,u);return r.set(t,e),e}):N(i,n.value,!0),!0},deleteProperty(e,t){var n=r.get(t);if(n===void 0){if(t in e){let e=f(()=>xt(T,u));r.set(t,e),Tt(l)}}else N(n,T),Tt(l);return!0},get(e,n,a){if(n===te)return t;var o=r.get(n),s=n in e;if(o===void 0&&(!s||i(e,n)?.writable)&&(o=f(()=>{var t=Dt(s?e[n]:T);return xt(t,u)}),r.set(n,o)),o!==void 0){var c=B(o);return c===T?void 0:c}return Reflect.get(e,n,a)},getOwnPropertyDescriptor(e,t){var n=Reflect.getOwnPropertyDescriptor(e,t);if(n&&`value`in n){var i=r.get(t);i&&(n.value=B(i))}else if(n===void 0){var a=r.get(t),o=a?.v;if(a!==void 0&&o!==T)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return n},has(e,t){if(t===te)return!0;var n=r.get(t),a=n!==void 0&&n.v!==T||Reflect.has(e,t);return(n!==void 0||z!==null&&(!a||i(e,t)?.writable))&&(n===void 0&&(n=f(()=>{var n=a?Dt(e[t]):T;return xt(n,u)}),r.set(t,n)),B(n)===T)?!1:a},set(e,t,n,o){var s=r.get(t),c=t in e;if(a&&t===`length`)for(var d=n;d<s.v;d+=1){var p=r.get(d+``);p===void 0?d in e&&(p=f(()=>xt(T,u)),r.set(d+``,p)):N(p,T)}if(s===void 0)(!c||i(e,t)?.writable)&&(s=f(()=>xt(void 0,u)),N(s,Dt(n)),r.set(t,s));else{c=s.v!==T;var m=f(()=>Dt(n));N(s,m)}var h=Reflect.getOwnPropertyDescriptor(e,t);if(h?.set&&h.set.call(o,n),!c){if(a&&typeof t==`string`){var g=r.get(`length`),_=Number(t);Number.isInteger(_)&&_>=g.v&&N(g,_+1)}Tt(l)}return!0},ownKeys(e){B(l);var t=Reflect.ownKeys(e).filter(e=>{var t=r.get(e);return t===void 0||t.v!==T});for(var[n,i]of r)i.v!==T&&!(n in e)&&t.push(n);return t},setPrototypeOf(){pe()}})}function Ot(e){try{if(typeof e==`object`&&e&&te in e)return e[te]}catch{}return e}function kt(e,t){return Object.is(Ot(e),Ot(t))}var At,jt,Mt,Nt;function Pt(){if(At===void 0){At=window,document,jt=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;Mt=i(t,`firstChild`).get,Nt=i(t,`nextSibling`).get,l(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),l(n)&&(n.__t=void 0)}}function Ft(e=``){return document.createTextNode(e)}function It(e){return Mt.call(e)}function Lt(e){return Nt.call(e)}function P(e,t){if(!E)return It(e);var n=It(D);if(n===null)n=D.appendChild(Ft());else if(t&&n.nodeType!==3){var r=Ft();return n?.before(r),xe(r),r}return xe(n),n}function F(e,t=!1){if(!E){var n=It(e);return n instanceof Comment&&n.data===``?Lt(n):n}if(t&&D?.nodeType!==3){var r=Ft();return D?.before(r),xe(r),r}return D}function I(e,t=1,n=!1){let r=E?D:e;for(var i;t--;)i=r,r=Lt(r);if(!E)return r;if(n&&r?.nodeType!==3){var a=Ft();return r===null?i?.after(a):r.before(a),xe(a),a}return xe(r),r}function Rt(e){e.textContent=``}function zt(){return!1}function Bt(e,t){if(t){let t=document.body;e.autofocus=!0,Fe(()=>{document.activeElement===t&&e.focus()})}}function Vt(e){E&&It(e)!==null&&Rt(e)}var Ht=!1;function Ut(){Ht||(Ht=!0,document.addEventListener(`reset`,e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(let t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function Wt(e){var t=R,n=z;En(null),Dn(null);try{return e()}finally{En(t),Dn(n)}}function Gt(e,t,n,r=n){e.addEventListener(t,()=>Wt(n));let i=e.__on_r;i?e.__on_r=()=>{i(),r(!0)}:e.__on_r=()=>r(!0),Ut()}function Kt(e){z===null&&R===null&&ce(e),R!==null&&R.f&256&&z===null&&se(),Cn&&oe(e)}function qt(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function Jt(e,t,n,r=!0){var i=z;i!==null&&i.f&8192&&(e|=y);var a={ctx:k,deps:null,nodes_start:null,nodes_end:null,f:e|_,first:null,fn:t,last:null,next:null,parent:i,b:i&&i.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(n)try{Gn(a),a.f|=32768}catch(e){throw fn(a),e}else t!==null&&rt(a);if(r){var o=a;if(n&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&!(o.f&524288)&&(o=o.first),o!==null&&(o.parent=i,i!==null&&qt(o,i),R!==null&&R.f&2&&!(e&64))){var s=R;(s.effects??=[]).push(o)}}return a}function Yt(){return R!==null&&!Tn}function Xt(e){let t=Jt(8,null,!1);return Xn(t,g),t.teardown=e,t}function Zt(e){Kt(`$effect`);var t=z.f;if(!R&&t&32&&!(t&32768)){var n=k;(n.e??=[]).push(e)}else return Qt(e)}function Qt(e){return Jt(4|S,e,!1)}function $t(e){return Kt(`$effect.pre`),Jt(8|S,e,!0)}function en(e){Ye.ensure();let t=Jt(64|x,e,!0);return(e={})=>new Promise(n=>{e.outro?hn(t,()=>{fn(t),n(void 0)}):(fn(t),n(void 0))})}function tn(e){return Jt(4,e,!1)}function nn(e,t){var n=k,r={effect:null,ran:!1,deps:e};n.l.$.push(r),r.effect=on(()=>{e(),!r.ran&&(r.ran=!0,Jn(t))})}function rn(){var e=k;on(()=>{for(var t of e.l.$){t.deps();var n=t.effect;n.f&1024&&Xn(n,v),Bn(n)&&Gn(n),t.ran=!1}})}function an(e){return Jt(4194304|x,e,!0)}function on(e,t=0){return Jt(8|t,e,!0)}function L(e,t=[],n=[]){ct(t,n,t=>{Jt(8,()=>e(...t.map(B)),!0)})}function sn(e,t=0){return Jt(16|t,e,!0)}function cn(e,t=!0){return Jt(32|x,e,!0,t)}function ln(e){var t=e.teardown;if(t!==null){let e=Cn,n=R;wn(!0),En(null);try{t.call(null)}finally{wn(e),En(n)}}}function un(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){let e=n.ac;e!==null&&Wt(()=>{e.abort(w)});var r=n.next;n.f&64?n.parent=null:fn(n,t),n=r}}function dn(e){for(var t=e.first;t!==null;){var n=t.next;t.f&32||fn(t),t=n}}function fn(e,t=!0){var n=!1;(t||e.f&262144)&&e.nodes_start!==null&&e.nodes_end!==null&&(pn(e.nodes_start,e.nodes_end),n=!0),un(e,t&&!n),Wn(e,0),Xn(e,16384);var r=e.transitions;if(r!==null)for(let e of r)e.stop();ln(e);var i=e.parent;i!==null&&i.first!==null&&mn(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function pn(e,t){for(;e!==null;){var n=e===t?null:Lt(e);e.remove(),e=n}}function mn(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function hn(e,t,n=!0){var r=[];_n(e,r,!0),gn(r,()=>{n&&fn(e),t&&t()})}function gn(e,t){var n=e.length;if(n>0){var r=()=>--n||t();for(var i of e)i.out(r)}else t()}function _n(e,t,n){if(!(e.f&8192)){if(e.f^=y,e.transitions!==null)for(let r of e.transitions)(r.is_global||n)&&t.push(r);for(var r=e.first;r!==null;){var i=r.next,a=(r.f&65536)!=0||(r.f&32)!=0;_n(r,t,a?n:!1),r=i}}}function vn(e){yn(e,!0)}function yn(e,t){if(e.f&8192){e.f^=y,e.f&1024||(Xn(e,_),rt(e));for(var n=e.first;n!==null;){var r=n.next,i=(n.f&65536)!=0||(n.f&32)!=0;yn(n,i?t:!1),n=r}if(e.transitions!==null)for(let n of e.transitions)(n.is_global||t)&&n.in()}}function bn(e,t){for(var n=e.nodes_start,r=e.nodes_end;n!==null;){var i=n===r?null:Lt(n);t.append(n),n=i}}let xn=!1;function Sn(e){xn=e}let Cn=!1;function wn(e){Cn=e}let R=null,Tn=!1;function En(e){R=e}let z=null;function Dn(e){z=e}let On=null;function kn(e){R!==null&&(On===null?On=[e]:On.push(e))}var An=null,jn=0;let Mn=null;function Nn(e){Mn=e}let Pn=1;var Fn=0;let In=Fn;function Ln(e){In=e}let Rn=!1;function zn(){return++Pn}function Bn(e){var t=e.f;if(t&2048)return!0;if(t&4096){var n=e.deps,r=(t&256)!=0;if(n!==null){var i,a,o=(t&512)!=0,s=r&&z!==null&&!Rn,c=n.length;if((o||s)&&(z===null||!(z.f&16384))){var l=e,u=l.parent;for(i=0;i<c;i++)a=n[i],(o||!a?.reactions?.includes(l))&&(a.reactions??=[]).push(l);o&&(l.f^=512),s&&u!==null&&!(u.f&256)&&(l.f^=256)}for(i=0;i<c;i++)if(a=n[i],Bn(a)&&vt(a),a.wv>e.wv)return!0}(!r||z!==null&&!Rn)&&Xn(e,g)}return!1}function Vn(e,t,n=!0){var r=e.reactions;if(r!==null&&!On?.includes(e))for(var i=0;i<r.length;i++){var a=r[i];a.f&2?Vn(a,t,!1):t===a&&(n?Xn(a,_):a.f&1024&&Xn(a,v),rt(a))}}function Hn(e){var t=An,n=jn,r=Mn,i=R,a=Rn,o=On,s=k,c=Tn,l=In,u=e.f;An=null,jn=0,Mn=null,Rn=(u&256)!=0&&(Tn||!xn||R===null),R=u&96?null:e,On=null,je(e.ctx),Tn=!1,In=++Fn,e.ac!==null&&(Wt(()=>{e.ac.abort(w)}),e.ac=null);try{e.f|=C;var d=e.fn,f=d(),p=e.deps;if(An!==null){var m;if(Wn(e,jn),p!==null&&jn>0)for(p.length=jn+An.length,m=0;m<An.length;m++)p[jn+m]=An[m];else e.deps=p=An;if(!Rn||u&2&&e.reactions!==null)for(m=jn;m<p.length;m++)(p[m].reactions??=[]).push(e)}else p!==null&&jn<p.length&&(Wn(e,jn),p.length=jn);if(Me()&&Mn!==null&&!Tn&&p!==null&&!(e.f&6146))for(m=0;m<Mn.length;m++)Vn(Mn[m],e);return i!==null&&i!==e&&(Fn++,Mn!==null&&(r===null?r=Mn:r.push(...Mn))),e.f&8388608&&(e.f^=ee),f}catch(e){return Re(e)}finally{e.f^=C,An=t,jn=n,Mn=r,R=i,Rn=a,On=o,je(s),Tn=c,In=l}}function Un(e,n){let r=n.reactions;if(r!==null){var i=t.call(r,e);if(i!==-1){var a=r.length-1;a===0?r=n.reactions=null:(r[i]=r[a],r.pop())}}r===null&&n.f&2&&(An===null||!An.includes(n))&&(Xn(n,v),n.f&768||(n.f^=512),ht(n),Wn(n,0))}function Wn(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Un(e,n[r])}function Gn(e){var t=e.f;if(!(t&16384)){Xn(e,g);var n=z,r=xn;z=e,xn=!0;try{t&16?dn(e):un(e),ln(e);var i=Hn(e);e.teardown=typeof i==`function`?i:null,e.wv=Pn}finally{xn=r,z=n}}}async function Kn(){await Promise.resolve(),Xe()}function B(e){var t=(e.f&2)!=0;if(null?.add(e),R!==null&&!Tn){if(!(z!==null&&z.f&16384)&&!On?.includes(e)){var n=R.deps;if(R.f&2097152)e.rv<Fn&&(e.rv=Fn,An===null&&n!==null&&n[jn]===e?jn++:An===null?An=[e]:(!Rn||!An.includes(e))&&An.push(e));else{(R.deps??=[]).push(e);var r=e.reactions;r===null?e.reactions=[R]:r.includes(R)||r.push(R)}}}else if(t&&e.deps===null&&e.effects===null){var i=e,a=i.parent;a!==null&&!(a.f&256)&&(i.f^=256)}if(Cn){if(yt.has(e))return yt.get(e);if(t){i=e;var o=i.v;return(!(i.f&1024)&&i.reactions!==null||qn(i))&&(o=_t(i)),yt.set(i,o),o}}else if(t){if(i=e,Ue?.has(i))return Ue.get(i);Bn(i)&&vt(i)}if(Ue?.has(e))return Ue.get(e);if(e.f&8388608)throw e.v;return e.v}function qn(e){if(e.v===T)return!0;if(e.deps===null)return!1;for(let t of e.deps)if(yt.has(t)||t.f&2&&qn(t))return!0;return!1}function Jn(e){var t=Tn;try{return Tn=!0,e()}finally{Tn=t}}var Yn=~(v|3072);function Xn(e,t){e.f=e.f&Yn|t}function Zn(e){if(!(typeof e!=`object`||!e||e instanceof EventTarget)){if(te in e)Qn(e);else if(!Array.isArray(e))for(let t in e){let n=e[t];typeof n==`object`&&n&&te in n&&Qn(n)}}}function Qn(e,t=new Set){if(typeof e==`object`&&e&&!(e instanceof EventTarget)&&!t.has(e)){for(let n in t.add(e),e instanceof Date&&e.getTime(),e)try{Qn(e[n],t)}catch{}let n=c(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){let t=a(n);for(let n in t){let r=t[n].get;if(r)try{r.call(e)}catch{}}}}}function $n(e){return e.endsWith(`capture`)&&e!==`gotpointercapture`&&e!==`lostpointercapture`}var er=[`beforeinput`,`click`,`change`,`dblclick`,`contextmenu`,`focusin`,`focusout`,`input`,`keydown`,`keyup`,`mousedown`,`mousemove`,`mouseout`,`mouseover`,`mouseup`,`pointerdown`,`pointermove`,`pointerout`,`pointerover`,`pointerup`,`touchend`,`touchmove`,`touchstart`];function tr(e){return er.includes(e)}var nr=`allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback`.split(`.`),rr={formnovalidate:`formNoValidate`,ismap:`isMap`,nomodule:`noModule`,playsinline:`playsInline`,readonly:`readOnly`,defaultvalue:`defaultValue`,defaultchecked:`defaultChecked`,srcobject:`srcObject`,novalidate:`noValidate`,allowfullscreen:`allowFullscreen`,disablepictureinpicture:`disablePictureInPicture`,disableremoteplayback:`disableRemotePlayback`};function ir(e){return e=e.toLowerCase(),rr[e]??e}[...nr];var ar=[`touchstart`,`touchmove`];function or(e){return ar.includes(e)}var sr=[`textarea`,`script`,`style`,`title`];function cr(e){return sr.includes(e)}const lr=new Set,ur=new Set;function dr(e,t,n,r={}){function i(e){if(r.capture||mr.call(t,e),!e.cancelBubble)return Wt(()=>n?.call(this,e))}return e.startsWith(`pointer`)||e.startsWith(`touch`)||e===`wheel`?Fe(()=>{t.addEventListener(e,i,r)}):t.addEventListener(e,i,r),i}function fr(e){for(var t=0;t<e.length;t++)lr.add(e[t]);for(var n of ur)n(e)}var pr=null;function mr(t){var n=this,i=n.ownerDocument,a=t.type,o=t.composedPath?.()||[],s=o[0]||t.target;pr=t;var c=0,l=pr===t&&t.__root;if(l){var u=o.indexOf(l);if(u!==-1&&(n===document||n===window)){t.__root=n;return}var d=o.indexOf(n);if(d===-1)return;u<=d&&(c=u)}if(s=o[c]||t.target,s!==n){r(t,`currentTarget`,{configurable:!0,get(){return s||i}});var f=R,p=z;En(null),Dn(null);try{for(var m,h=[];s!==null;){var g=s.assignedSlot||s.parentNode||s.host||null;try{var _=s[`__`+a];if(_!=null&&(!s.disabled||t.target===s))if(e(_)){var[v,...y]=_;v.apply(s,[t,...y])}else _.call(s,t)}catch(e){m?h.push(e):m=e}if(t.cancelBubble||g===n||g===null)break;s=g}if(m){for(let e of h)queueMicrotask(()=>{throw e});throw m}}finally{t.__root=n,delete t.currentTarget,En(f),Dn(p)}}}function hr(e){var t=document.createElement(`template`);return t.innerHTML=e.replaceAll(`<!>`,`<!---->`),t.content}function gr(e,t){var n=z;n.nodes_start===null&&(n.nodes_start=e,n.nodes_end=t)}function V(e,t){var n=(t&1)!=0,r=(t&2)!=0,i,a=!e.startsWith(`<!>`);return()=>{if(E)return gr(D,null),D;i===void 0&&(i=hr(a?e:`<!>`+e),n||(i=It(i)));var t=r||jt?document.importNode(i,!0):i.cloneNode(!0);if(n){var o=It(t),s=t.lastChild;gr(o,s)}else gr(t,t);return t}}function _r(e,t,n=`svg`){var r=!e.startsWith(`<!>`),i=(t&1)!=0,a=`<${n}>${r?e:`<!>`+e}</${n}>`,o;return()=>{if(E)return gr(D,null),D;if(!o){var e=hr(a),t=It(e);if(i)for(o=document.createDocumentFragment();It(t);)o.appendChild(It(t));else o=It(t)}var n=o.cloneNode(!0);if(i){var r=It(n),s=n.lastChild;gr(r,s)}else gr(n,n);return n}}function vr(e,t){return _r(e,t,`svg`)}function H(){if(E)return gr(D,null),D;var e=document.createDocumentFragment(),t=document.createComment(``),n=Ft();return e.append(t,n),gr(t,n),e}function U(e,t){if(E){z.nodes_end=D,Se();return}e!==null&&e.before(t)}let yr=!0;function br(e){yr=e}function W(e,t){var n=t==null?``:typeof t==`object`?t+``:t;n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=n+``)}function xr(e,t){return Cr(e,t)}var Sr=new Map;function Cr(e,{target:t,anchor:r,props:i={},events:a,context:o,intro:s=!0}){Pt();var c=new Set,l=e=>{for(var n=0;n<e.length;n++){var r=e[n];if(!c.has(r)){c.add(r);var i=or(r);t.addEventListener(r,mr,{passive:i});var a=Sr.get(r);a===void 0?(document.addEventListener(r,mr,{passive:i}),Sr.set(r,1)):Sr.set(r,a+1)}}};l(n(lr)),ur.add(l);var u=void 0,d=en(()=>{var n=r??t.appendChild(Ft());return ot(n,{pending:()=>{}},t=>{if(o){A({});var n=k;n.c=o}if(a&&(i.$$events=a),E&&gr(t,null),yr=s,u=e(t,i)||{},yr=!0,E&&(z.nodes_end=D,D===null||D.nodeType!==8||D.data!==`]`))throw _e(),ge;o&&j()}),()=>{for(var e of c){t.removeEventListener(e,mr);var i=Sr.get(e);--i===0?(document.removeEventListener(e,mr),Sr.delete(e)):Sr.set(e,i)}ur.delete(l),n!==r&&n.parentNode?.removeChild(n)}});return wr.set(u,d),u}var wr=new WeakMap,Tr=class{anchor;#batches=new Map;#onscreen=new Map;#offscreen=new Map;#transition=!0;constructor(e,t=!0){this.anchor=e,this.#transition=t}#commit=()=>{var e=M;if(this.#batches.has(e)){var t=this.#batches.get(e),n=this.#onscreen.get(t);if(n)vn(n);else{var r=this.#offscreen.get(t);r&&(this.#onscreen.set(t,r.effect),this.#offscreen.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),n=r.effect)}for(let[t,n]of this.#batches){if(this.#batches.delete(t),t===e)break;let r=this.#offscreen.get(n);r&&(fn(r.effect),this.#offscreen.delete(n))}for(let[e,r]of this.#onscreen){if(e===t)continue;let i=()=>{if(Array.from(this.#batches.values()).includes(e)){var t=document.createDocumentFragment();bn(r,t),t.append(Ft()),this.#offscreen.set(e,{effect:r,fragment:t})}else fn(r);this.#onscreen.delete(e)};this.#transition||!n?hn(r,i,!1):i()}}};ensure(e,t){var n=M,r=zt();if(t&&!this.#onscreen.has(e)&&!this.#offscreen.has(e))if(r){var i=document.createDocumentFragment(),a=Ft();i.append(a),this.#offscreen.set(e,{effect:cn(()=>t(a)),fragment:i})}else this.#onscreen.set(e,cn(()=>t(this.anchor)));if(this.#batches.set(n,e),r){for(let[t,r]of this.#onscreen)t===e?n.skipped_effects.delete(r):n.skipped_effects.add(r);for(let[t,r]of this.#offscreen)t===e?n.skipped_effects.delete(r.effect):n.skipped_effects.add(r.effect);n.add_callback(this.#commit)}else E&&(this.anchor=D),this.#commit()}};function Er(e,t,n=!1){E&&Se();var r=new Tr(e),i=n?b:0;function a(t,n){if(E){let a=Te(e)===`[!`;if(t===a){var i=we();xe(i),r.anchor=i,be(!1),r.ensure(t,n),be(!0);return}}r.ensure(t,n)}sn(()=>{var e=!1;t((t,n=!0)=>{e=!0,a(n,t)}),e||a(!1,null)},i)}let Dr=null;function Or(e){Dr=e}function kr(e,t){return t}function Ar(e,t,n){for(var r=e.items,i=[],a=t.length,o=0;o<a;o++)_n(t[o].e,i,!0);var s=a>0&&i.length===0&&n!==null;if(s){var c=n.parentNode;Rt(c),c.append(n),r.clear(),Ir(e,t[0].prev,t[a-1].next)}gn(i,()=>{for(var n=0;n<a;n++){var i=t[n];s||(r.delete(i.k),Ir(e,i.prev,i.next)),fn(i.e,!s)}})}function jr(t,r,i,a,o,s=null){var c=t,l={flags:r,items:new Map,first:null};if(r&4){var u=t;c=E?xe(It(u)):u.appendChild(Ft())}E&&Se();var d=null,f=!1,p=new Map,m=mt(()=>{var t=i();return e(t)?t:t==null?[]:n(t)}),h,g;function _(){Mr(g,h,l,p,c,o,r,a,i),s!==null&&(h.length===0?d?vn(d):d=cn(()=>s(c)):d!==null&&hn(d,()=>{d=null}))}sn(()=>{g??=z,h=B(m);var e=h.length;if(f&&e===0)return;f=e===0;let t=!1;if(E&&Te(c)===`[!`!=(e===0)&&(c=we(),xe(c),be(!1),t=!0),E){for(var n=null,u,v=0;v<e;v++){if(D.nodeType===8&&D.data===`]`){c=D,t=!0,be(!1);break}var y=h[v],b=a(y,v);u=Pr(D,l,n,null,y,b,v,o,r,i),l.items.set(b,u),n=u}e>0&&xe(we())}if(E)e===0&&s&&(d=cn(()=>s(c)));else if(zt()){var x=new Set,S=M;for(v=0;v<e;v+=1){y=h[v],b=a(y,v);var C=l.items.get(b)??p.get(b);C?r&3&&Nr(C,y,v,r):(u=Pr(null,l,null,null,y,b,v,o,r,i,!0),p.set(b,u)),x.add(b)}for(let[e,t]of l.items)x.has(e)||S.skipped_effects.add(t.e);S.add_callback(_)}else _();t&&be(!0),B(m)}),E&&(c=D)}function Mr(e,t,r,i,a,o,s,c,l){var u=(s&8)!=0,d=(s&3)!=0,f=t.length,p=r.items,m=r.first,h,g=null,_,v=[],y=[],b,x,S,C;if(u)for(C=0;C<f;C+=1)b=t[C],x=c(b,C),S=p.get(x),S!==void 0&&(S.a?.measure(),(_??=new Set).add(S));for(C=0;C<f;C+=1){if(b=t[C],x=c(b,C),S=p.get(x),S===void 0){var ee=i.get(x);if(ee!==void 0){i.delete(x),p.set(x,ee);var te=g?g.next:m;Ir(r,g,ee),Ir(r,ee,te),Fr(ee,te,a),g=ee}else{var ne=m?m.e.nodes_start:a;g=Pr(ne,r,g,g===null?r.first:g.next,b,x,C,o,s,l)}p.set(x,g),v=[],y=[],m=g.next;continue}if(d&&Nr(S,b,C,s),S.e.f&8192&&(vn(S.e),u&&(S.a?.unfix(),(_??=new Set).delete(S))),S!==m){if(h!==void 0&&h.has(S)){if(v.length<y.length){var re=y[0],w;g=re.prev;var ie=v[0],ae=v[v.length-1];for(w=0;w<v.length;w+=1)Fr(v[w],re,a);for(w=0;w<y.length;w+=1)h.delete(y[w]);Ir(r,ie.prev,ae.next),Ir(r,g,ie),Ir(r,ae,re),m=re,g=ae,--C,v=[],y=[]}else h.delete(S),Fr(S,m,a),Ir(r,S.prev,S.next),Ir(r,S,g===null?r.first:g.next),Ir(r,g,S),g=S;continue}for(v=[],y=[];m!==null&&m.k!==x;)m.e.f&8192||(h??=new Set).add(m),y.push(m),m=m.next;if(m===null)continue;S=m}v.push(S),g=S,m=S.next}if(m!==null||h!==void 0){for(var oe=h===void 0?[]:n(h);m!==null;)m.e.f&8192||oe.push(m),m=m.next;var se=oe.length;if(se>0){var ce=s&4&&f===0?a:null;if(u){for(C=0;C<se;C+=1)oe[C].a?.measure();for(C=0;C<se;C+=1)oe[C].a?.fix()}Ar(r,oe,ce)}}u&&Fe(()=>{if(_!==void 0)for(S of _)S.a?.apply()}),e.first=r.first&&r.first.e,e.last=g&&g.e;for(var le of i.values())fn(le.e);i.clear()}function Nr(e,t,n,r){r&1&&Ct(e.v,t),r&2?Ct(e.i,n):e.i=n}function Pr(e,t,n,r,i,a,o,s,c,l,u){var d=Dr,f=(c&1)!=0,p=(c&16)==0,m=f?p?St(i,!1,!1):bt(i):i,h=c&2?bt(o):o,g={i:h,v:m,k:a,a:null,e:null,prev:n,next:r};Dr=g;try{return e===null&&document.createDocumentFragment().append(e=Ft()),g.e=cn(()=>s(e,m,h,l),E),g.e.prev=n&&n.e,g.e.next=r&&r.e,n===null?u||(t.first=g):(n.next=g,n.e.next=g.e),r!==null&&(r.prev=g,r.e.prev=g.e),g}finally{Dr=d}}function Fr(e,t,n){for(var r=e.next?e.next.e.nodes_start:n,i=t?t.e.nodes_start:n,a=e.e.nodes_start;a!==null&&a!==r;){var o=Lt(a);i.before(a),a=o}}function Ir(e,t,n){t===null?e.first=n:(t.next=n,t.e.next=n&&n.e),n!==null&&(n.prev=t,n.e.prev=t&&t.e)}function G(e,t,...n){var r=new Tr(e);sn(()=>{let e=t()??null;r.ensure(e,e&&(t=>e(t,...n)))},b)}function Lr(e,t,n){E&&Se();var r=new Tr(e);sn(()=>{var e=t()??null;r.ensure(e,e&&(t=>n(t,e)))},b)}function Rr(e,t,n,r,i,a){let o=E;E&&Se();var s=null;E&&D.nodeType===1&&(s=D,Se());var c=E?D:e,l=Dr,u=new Tr(c,!1);sn(()=>{let e=t()||null;var a=i?i():n||e===`svg`?`http://www.w3.org/2000/svg`:null;if(e===null){u.ensure(null,null),br(!0);return}return u.ensure(e,t=>{var n=Dr;if(Or(l),e){if(s=E?s:a?document.createElementNS(a,e):document.createElement(e),gr(s,s),r){E&&cr(e)&&s.append(document.createComment(``));var i=E?It(s):s.appendChild(Ft());E&&(i===null?be(!1):xe(i)),r(s,i)}z.nodes_end=s,t.before(s)}Or(n),E&&xe(t)}),br(!0),()=>{e&&br(!1)}},b),Xt(()=>{br(!0)}),o&&(be(!0),xe(c))}function zr(e,t){var n=void 0,r;sn(()=>{n!==(n=t())&&(r&&=(fn(r),null),n&&(r=cn(()=>{tn(()=>n(e))})))})}function Br(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Br(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function Vr(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Br(e))&&(r&&(r+=` `),r+=t);return r}function Hr(e){return typeof e==`object`?Vr(e):e??``}var Ur=[...` 	
\r\f\xA0\v﻿`];function Wr(e,t,n){var r=e==null?``:``+e;if(t&&(r=r?r+` `+t:t),n){for(var i in n)if(n[i])r=r?r+` `+i:i;else if(r.length)for(var a=i.length,o=0;(o=r.indexOf(i,o))>=0;){var s=o+a;(o===0||Ur.includes(r[o-1]))&&(s===r.length||Ur.includes(r[s]))?r=(o===0?``:r.substring(0,o))+r.substring(s+1):o=s}}return r===``?null:r}function Gr(e,t=!1){var n=t?` !important;`:`;`,r=``;for(var i in e){var a=e[i];a!=null&&a!==``&&(r+=` `+i+`: `+a+n)}return r}function Kr(e){return e[0]!==`-`||e[1]!==`-`?e.toLowerCase():e}function qr(e,t){if(t){var n=``,r,i;if(Array.isArray(t)?(r=t[0],i=t[1]):r=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,``).trim();var a=!1,o=0,s=!1,c=[];r&&c.push(...Object.keys(r).map(Kr)),i&&c.push(...Object.keys(i).map(Kr));var l=0,u=-1;let t=e.length;for(var d=0;d<t;d++){var f=e[d];if(s?f===`/`&&e[d-1]===`*`&&(s=!1):a?a===f&&(a=!1):f===`/`&&e[d+1]===`*`?s=!0:f===`"`||f===`'`?a=f:f===`(`?o++:f===`)`&&o--,!s&&a===!1&&o===0){if(f===`:`&&u===-1)u=d;else if(f===`;`||d===t-1){if(u!==-1){var p=Kr(e.substring(l,u).trim());if(!c.includes(p)){f!==`;`&&d++;var m=e.substring(l,d).trim();n+=` `+m+`;`}}l=d+1,u=-1}}}}return r&&(n+=Gr(r)),i&&(n+=Gr(i,!0)),n=n.trim(),n===``?null:n}return e==null?null:String(e)}function Jr(e,t,n,r,i,a){var o=e.__className;if(E||o!==n||o===void 0){var s=Wr(n,r,a);(!E||s!==e.getAttribute(`class`))&&(s==null?e.removeAttribute(`class`):t?e.className=s:e.setAttribute(`class`,s)),e.__className=n}else if(a&&i!==a)for(var c in a){var l=!!a[c];(i==null||l!==!!i[c])&&e.classList.toggle(c,l)}return a}function Yr(e,t={},n,r){for(var i in n){var a=n[i];t[i]!==a&&(n[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,r))}}function Xr(e,t,n,r){var i=e.__style;if(E||i!==t){var a=qr(t,r);(!E||a!==e.getAttribute(`style`))&&(a==null?e.removeAttribute(`style`):e.style.cssText=a),e.__style=t}else r&&(Array.isArray(r)?(Yr(e,n?.[0],r[0]),Yr(e,n?.[1],r[1],`important`)):Yr(e,n,r));return r}function Zr(t,n,r=!1){if(t.multiple){if(n==null)return;if(!e(n))return ve();for(var i of t.options)i.selected=n.includes($r(i));return}for(i of t.options){var a=$r(i);if(kt(a,n)){i.selected=!0;return}}(!r||n!==void 0)&&(t.selectedIndex=-1)}function Qr(e){var t=new MutationObserver(()=>{Zr(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`value`]}),Xt(()=>{t.disconnect()})}function $r(e){return`__value`in e?e.__value:e.value}const ei=Symbol(`class`),ti=Symbol(`style`);var ni=Symbol(`is custom element`),ri=Symbol(`is html`);function ii(e){if(E){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute(`value`)){var n=e.value;K(e,`value`,null),e.value=n}if(e.hasAttribute(`checked`)){var r=e.checked;K(e,`checked`,null),e.checked=r}}};e.__on_r=n,Fe(n),Ut()}}function ai(e,t){t?e.hasAttribute(`selected`)||e.setAttribute(`selected`,``):e.removeAttribute(`selected`)}function K(e,t,n,r){var i=ci(e);E&&(i[t]=e.getAttribute(t),t===`src`||t===`srcset`||t===`href`&&e.nodeName===`LINK`)||i[t]!==(i[t]=n)&&(t===`loading`&&(e[re]=n),n==null?e.removeAttribute(t):typeof n!=`string`&&ui(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function oi(e,t,n,r,i=!1,a=!1){if(E&&i&&e.tagName===`INPUT`){var o=e;(o.type===`checkbox`?`defaultChecked`:`defaultValue`)in n||ii(o)}var s=ci(e),c=s[ni],l=!s[ri];let u=E&&c;u&&be(!1);var d=t||{},f=e.tagName===`OPTION`;for(var p in t)p in n||(n[p]=null);n.class?n.class=Hr(n.class):(r||n[ei])&&(n.class=null),n[ti]&&(n.style??=null);var m=ui(e);for(let i in n){let o=n[i];if(f&&i===`value`&&o==null){e.value=e.__value=``,d[i]=o;continue}if(i===`class`){var h=e.namespaceURI===`http://www.w3.org/1999/xhtml`;Jr(e,h,o,r,t?.[ei],n[ei]),d[i]=o,d[ei]=n[ei];continue}if(i===`style`){Xr(e,o,t?.[ti],n[ti]),d[i]=o,d[ti]=n[ti];continue}var g=d[i];if(!(o===g&&!(o===void 0&&e.hasAttribute(i)))){d[i]=o;var _=i[0]+i[1];if(_!==`$$`)if(_===`on`){let t={},n=`$$`+i,r=i.slice(2);var v=tr(r);if($n(r)&&(r=r.slice(0,-7),t.capture=!0),!v&&g){if(o!=null)continue;e.removeEventListener(r,d[n],t),d[n]=null}if(o!=null)if(v)e[`__${r}`]=o,fr([r]);else{function a(e){d[i].call(this,e)}d[n]=dr(r,e,a,t)}else v&&(e[`__${r}`]=void 0)}else if(i===`style`)K(e,i,o);else if(i===`autofocus`)Bt(e,!!o);else if(!c&&(i===`__value`||i===`value`&&o!=null))e.value=e.__value=o;else if(i===`selected`&&f)ai(e,o);else{var y=i;l||(y=ir(y));var b=y===`defaultValue`||y===`defaultChecked`;if(o==null&&!c&&!b)if(s[i]=null,y===`value`||y===`checked`){let n=e,r=t===void 0;if(y===`value`){let e=n.defaultValue;n.removeAttribute(y),n.defaultValue=e,n.value=n.__value=r?e:null}else{let e=n.defaultChecked;n.removeAttribute(y),n.defaultChecked=e,n.checked=r?e:!1}}else e.removeAttribute(i);else b||m.includes(y)&&(c||typeof o!=`string`)?(e[y]=o,y in s&&(s[y]=T)):typeof o!=`function`&&K(e,y,o,a)}}}return u&&be(!0),d}function si(e,t,n=[],r=[],i,a=!1,o=!1){ct(n,r,n=>{var r=void 0,s={},c=e.nodeName===`SELECT`,l=!1;if(sn(()=>{var u=t(...n.map(B)),d=oi(e,r,u,i,a,o);l&&c&&`value`in u&&Zr(e,u.value);for(let e of Object.getOwnPropertySymbols(s))u[e]||fn(s[e]);for(let t of Object.getOwnPropertySymbols(u)){var f=u[t];t.description===`@attach`&&(!r||f!==r[t])&&(s[t]&&fn(s[t]),s[t]=cn(()=>zr(e,()=>f))),d[t]=f}r=d}),c){var u=e;tn(()=>{Zr(u,r.value,!0),Qr(u)})}l=!0})}function ci(e){return e.__attributes??={[ni]:e.nodeName.includes(`-`),[ri]:e.namespaceURI===`http://www.w3.org/1999/xhtml`}}var li=new Map;function ui(e){var t=e.getAttribute(`is`)||e.nodeName,n=li.get(t);if(n)return n;li.set(t,n=[]);for(var r,i=e,o=Element.prototype;o!==i;){for(var s in r=a(i),r)r[s].set&&n.push(s);i=c(i)}return n}var di=()=>performance.now();const fi={tick:e=>requestAnimationFrame(e),now:()=>di(),tasks:new Set};function pi(){let e=fi.now();fi.tasks.forEach(t=>{t.c(e)||(fi.tasks.delete(t),t.f())}),fi.tasks.size!==0&&fi.tick(pi)}function mi(e){let t;return fi.tasks.size===0&&fi.tick(pi),{promise:new Promise(n=>{fi.tasks.add(t={c:e,f:n})}),abort(){fi.tasks.delete(t)}}}function hi(e,t){Wt(()=>{e.dispatchEvent(new CustomEvent(t))})}function gi(e){if(e===`float`)return`cssFloat`;if(e===`offset`)return`cssOffset`;if(e.startsWith(`--`))return e;let t=e.split(`-`);return t.length===1?t[0]:t[0]+t.slice(1).map(e=>e[0].toUpperCase()+e.slice(1)).join(``)}function _i(e){let t={},n=e.split(`;`);for(let e of n){let[n,r]=e.split(`:`);if(!n||r===void 0)break;let i=gi(n.trim());t[i]=r.trim()}return t}var vi=e=>e;function yi(e,t,n,r){var i=(e&1)!=0,a=(e&2)!=0,o=i&&a,s=(e&4)!=0,c=o?`both`:i?`in`:`out`,l,u=t.inert,d=t.style.overflow,f,p;function m(){return Wt(()=>l??=n()(t,r?.()??{},{direction:c}))}var h={is_global:s,in(){if(t.inert=u,!i){p?.abort(),p?.reset?.();return}a||f?.abort(),hi(t,`introstart`),f=bi(t,m(),p,1,()=>{hi(t,`introend`),f?.abort(),f=l=void 0,t.style.overflow=d})},out(e){if(!a){e?.(),l=void 0;return}t.inert=!0,hi(t,`outrostart`),p=bi(t,m(),f,0,()=>{hi(t,`outroend`),e?.()})},stop:()=>{f?.abort(),p?.abort()}},g=z;if((g.transitions??=[]).push(h),i&&yr){var _=s;if(!_){for(var v=g.parent;v&&v.f&65536;)for(;(v=v.parent)&&!(v.f&16););_=!v||(v.f&32768)!=0}_&&tn(()=>{Jn(()=>h.in())})}}function bi(e,t,n,r,i){var a=r===1;if(u(t)){var o,s=!1;return Fe(()=>{if(!s){var c=t({direction:a?`in`:`out`});o=bi(e,c,n,r,i)}}),{abort:()=>{s=!0,o?.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(n?.deactivate(),!t?.duration)return i(),{abort:d,deactivate:d,reset:d,t:()=>r};let{delay:c=0,css:l,tick:f,easing:p=vi}=t;var m=[];if(a&&n===void 0&&(f&&f(0,1),l)){var h=_i(l(0,1));m.push(h,h)}var g=()=>1-r,_=e.animate(m,{duration:c,fill:`forwards`});return _.onfinish=()=>{_.cancel();var a=n?.t()??1-r;n?.abort();var o=r-a,s=t.duration*Math.abs(o),c=[];if(s>0){var u=!1;if(l)for(var d=Math.ceil(s/(1e3/60)),m=0;m<=d;m+=1){var h=a+o*p(m/d),v=_i(l(h,1-h));c.push(v),u||=v.overflow===`hidden`}u&&(e.style.overflow=`hidden`),g=()=>{var e=_.currentTime;return a+o*p(e/s)},f&&mi(()=>{if(_.playState!==`running`)return!1;var e=g();return f(e,1-e),!0})}_=e.animate(c,{duration:s,fill:`forwards`}),_.onfinish=()=>{g=()=>r,f?.(r,1-r),i()}},{abort:()=>{_&&(_.cancel(),_.effect=null,_.onfinish=d)},deactivate:()=>{i=d},reset:()=>{r===0&&f?.(1,0)},t:()=>g()}}function xi(e,t,n=t){var r=new WeakSet;Gt(e,`input`,async i=>{var a=i?e.defaultValue:e.value;if(a=Si(e)?Ci(a):a,n(a),M!==null&&r.add(M),await Kn(),a!==(a=t())){var o=e.selectionStart,s=e.selectionEnd,c=e.value.length;if(e.value=a??``,s!==null){var l=e.value.length;o===s&&s===c&&l>c?(e.selectionStart=l,e.selectionEnd=l):(e.selectionStart=o,e.selectionEnd=Math.min(s,l))}}}),(E&&e.defaultValue!==e.value||Jn(t)==null&&e.value)&&(n(Si(e)?Ci(e.value):e.value),M!==null&&r.add(M)),on(()=>{var n=t();if(e===document.activeElement){var i=He??M;if(r.has(i))return}Si(e)&&n===Ci(e.value)||e.type===`date`&&!n&&!e.value||n!==e.value&&(e.value=n??``)})}function Si(e){var t=e.type;return t===`number`||t===`range`}function Ci(e){return e===``?null:+e}function wi(e,t){return e===t||e?.[te]===t}function Ti(e={},t,n,r){return tn(()=>{var i,a;return on(()=>{i=a,a=r?.()||[],Jn(()=>{e!==n(...a)&&(t(e,...a),i&&wi(n(...i),e)&&t(null,...i))})}),()=>{Fe(()=>{a&&wi(n(...a),e)&&t(null,...a)})}}),e}function Ei(e=!1){let t=k,n=t.l.u;if(!n)return;let r=()=>Zn(t.s);if(e){let e=0,n={},i=dt(()=>{let r=!1,i=t.s;for(let e in i)i[e]!==n[e]&&(n[e]=i[e],r=!0);return r&&e++,e});r=()=>B(i)}n.b.length&&$t(()=>{Di(t,r),p(n.b)}),Zt(()=>{let e=Jn(()=>n.m.map(f));return()=>{for(let t of e)typeof t==`function`&&t()}}),n.a.length&&Zt(()=>{Di(t,r),p(n.a)})}function Di(e,t){if(e.l.s)for(let t of e.l.s)B(t);t()}function Oi(e){var t=bt(0);return function(){return arguments.length===1?(N(t,B(t)+1),arguments[0]):(B(t),e())}}function ki(t,n){var r=t.$$events?.[n.type];for(var i of e(r)?r.slice():r==null?[]:[r])i.call(this,n)}function Ai(e,t,n){if(e==null)return t(void 0),n&&n(void 0),d;let r=Jn(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}var ji=[];function Mi(e,t){return{subscribe:Ni(e,t).subscribe}}function Ni(e,t=d){let n=null,r=new Set;function i(t){if(De(e,t)&&(e=t,n)){let t=!ji.length;for(let t of r)t[1](),ji.push(t,e);if(t){for(let e=0;e<ji.length;e+=2)ji[e][0](ji[e+1]);ji.length=0}}}function a(t){i(t(e))}function o(o,s=d){let c=[o,s];return r.add(c),r.size===1&&(n=t(i,a)||d),o(e),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:i,update:a,subscribe:o}}function Pi(e,t,n){let r=!Array.isArray(e),i=r?[e]:e;if(!i.every(Boolean))throw Error(`derived() expects stores as input, got a falsy value`);let a=t.length<2;return Mi(n,(e,n)=>{let o=!1,s=[],c=0,l=d,u=()=>{if(c)return;l();let i=t(r?s[0]:s,e,n);a?e(i):l=typeof i==`function`?i:d},f=i.map((e,t)=>Ai(e,e=>{s[t]=e,c&=~(1<<t),o&&u()},()=>{c|=1<<t}));return o=!0,u(),function(){p(f),l(),o=!1}})}function Fi(e){let t;return Ai(e,e=>t=e)(),t}var Ii=!1,Li=Symbol();function Ri(e,t,n){let r=n[t]??={store:null,source:St(void 0),unsubscribe:d};if(r.store!==e&&!(Li in n))if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=d;else{var i=!0;r.unsubscribe=Ai(e,e=>{i?r.source.v=e:N(r.source,e)}),i=!1}return e&&Li in n?Fi(e):B(r.source)}function zi(){let e={};function t(){Xt(()=>{for(var t in e)e[t].unsubscribe();r(e,Li,{enumerable:!1,value:!0})})}return[e,t]}function Bi(e){var t=Ii;try{return Ii=!1,[e(),Ii]}finally{Ii=t}}var Vi={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function q(e,t,n){return new Proxy({props:e,exclude:t},Vi)}var Hi={get(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(u(r)&&(r=r()),typeof r==`object`&&r&&t in r)return r[t]}},set(e,t,n){let r=e.props.length;for(;r--;){let a=e.props[r];u(a)&&(a=a());let o=i(a,t);if(o&&o.set)return o.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(u(r)&&(r=r()),typeof r==`object`&&r&&t in r){let e=i(r,t);return e&&!e.configurable&&(e.configurable=!0),e}}},has(e,t){if(t===te||t===ne)return!1;for(let n of e.props)if(u(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){let t=[];for(let n of e.props)if(u(n)&&(n=n()),n){for(let e in n)t.includes(e)||t.push(e);for(let e of Object.getOwnPropertySymbols(n))t.includes(e)||t.push(e)}return t}};function J(...e){return new Proxy({props:e},Hi)}function Ui(e,t,n,r){var a=!ke||(n&2)!=0,o=(n&8)!=0,s=(n&16)!=0,c=r,l=!0,u=()=>(l&&(l=!1,c=s?Jn(r):r),c),d;if(o){var f=te in e||ne in e;d=i(e,t)?.set??(f&&t in e?n=>e[t]=n:void 0)}var p,m=!1;o?[p,m]=Bi(()=>e[t]):p=e[t],p===void 0&&r!==void 0&&(p=u(),d&&(a&&de(t),d(p)));var h=a?()=>{var n=e[t];return n===void 0?u():(l=!0,n)}:()=>{var n=e[t];return n!==void 0&&(c=void 0),n===void 0?c:n};if(a&&!(n&4))return h;if(d){var g=e.$$legacy;return(function(e,t){return arguments.length>0?((!a||!t||g||m)&&d(t?h():e),e):h()})}var _=!1,v=(n&1?dt:mt)(()=>(_=!1,h()));o&&B(v);var y=z;return(function(e,t){if(arguments.length>0){let n=t?B(v):a&&o?Dt(e):e;return N(v,n),_=!0,c!==void 0&&(c=n),e}return Cn&&_||y.f&16384?v.v:B(v)})}function Wi(e){k===null&&ie(`onMount`),ke&&k.l!==null?Yi(k).m.push(e):Zt(()=>{let t=Jn(e);if(typeof t==`function`)return t})}function Gi(e){k===null&&ie(`onDestroy`),Wi(()=>()=>Jn(e))}function Ki(e,t,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:r})}function qi(){let t=k;return t===null&&ie(`createEventDispatcher`),(n,r,i)=>{let a=t.s.$$events?.[n];if(a){let o=e(a)?a.slice():[a],s=Ki(n,r,i);for(let e of o)e.call(t.x,s);return!s.defaultPrevented}return!0}}function Ji(e){k===null&&ie(`afterUpdate`),k.l===null&&ue(`afterUpdate`),Yi(k).a.push(e)}function Yi(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}typeof window<`u`&&((window.__svelte??={}).v??=new Set).add(`5`);var Xi={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":2,"stroke-linecap":`round`,"stroke-linejoin":`round`},Zi=vr(`<svg><!><!></svg>`);function Y(e,t){A(t,!0);let n=Ui(t,`color`,3,`currentColor`),r=Ui(t,`size`,3,24),i=Ui(t,`strokeWidth`,3,2),a=Ui(t,`absoluteStrokeWidth`,3,!1),o=Ui(t,`iconNode`,19,()=>[]),s=q(t,[`$$slots`,`$$events`,`$$legacy`,`name`,`color`,`size`,`strokeWidth`,`absoluteStrokeWidth`,`iconNode`,`children`]);var c=Zi();si(c,e=>({...Xi,...s,width:r(),height:r(),stroke:n(),"stroke-width":e,class:[`lucide-icon lucide`,t.name&&`lucide-${t.name}`,t.class]}),[()=>a()?Number(i())*24/Number(r()):i()]);var l=P(c);jr(l,17,o,kr,(e,t)=>{var n=pt(()=>h(B(t),2));let r=()=>B(n)[0],i=()=>B(n)[1];var a=H(),o=F(a);Rr(o,r,!0,(e,t)=>{si(e,()=>({...i()}))}),U(e,a)});var u=I(l);G(u,()=>t.children??d),O(c),U(e,c),j()}function Qi(e,t){A(t,!0);
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
let n=q(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M11 14h1v4`}],[`path`,{d:`M16 2v4`}],[`path`,{d:`M3 10h18`}],[`path`,{d:`M8 2v4`}],[`rect`,{x:`3`,y:`4`,width:`18`,height:`18`,rx:`2`}]];Y(e,J({name:`calendar-1`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=H(),i=F(r);G(i,()=>t.children??d),U(e,r)},$$slots:{default:!0}})),j()}function $i(e,t){A(t,!0);
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
let n=q(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M8 2v4`}],[`path`,{d:`M16 2v4`}],[`rect`,{width:`18`,height:`18`,x:`3`,y:`4`,rx:`2`}],[`path`,{d:`M3 10h18`}],[`path`,{d:`M8 14h.01`}],[`path`,{d:`M12 14h.01`}],[`path`,{d:`M16 14h.01`}],[`path`,{d:`M8 18h.01`}],[`path`,{d:`M12 18h.01`}],[`path`,{d:`M16 18h.01`}]];Y(e,J({name:`calendar-days`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=H(),i=F(r);G(i,()=>t.children??d),U(e,r)},$$slots:{default:!0}})),j()}function ea(e,t){A(t,!0);
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
let n=q(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M8 2v4`}],[`path`,{d:`M16 2v4`}],[`rect`,{width:`18`,height:`18`,x:`3`,y:`4`,rx:`2`}],[`path`,{d:`M3 10h18`}]];Y(e,J({name:`calendar`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=H(),i=F(r);G(i,()=>t.children??d),U(e,r)},$$slots:{default:!0}})),j()}function ta(e,t){A(t,!0);
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
let n=q(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M20 6 9 17l-5-5`}]];Y(e,J({name:`check`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=H(),i=F(r);G(i,()=>t.children??d),U(e,r)},$$slots:{default:!0}})),j()}function na(e,t){A(t,!0);
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
let n=q(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`m15 18-6-6 6-6`}]];Y(e,J({name:`chevron-left`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=H(),i=F(r);G(i,()=>t.children??d),U(e,r)},$$slots:{default:!0}})),j()}function ra(e,t){A(t,!0);
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
let n=q(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`m9 18 6-6-6-6`}]];Y(e,J({name:`chevron-right`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=H(),i=F(r);G(i,()=>t.children??d),U(e,r)},$$slots:{default:!0}})),j()}function ia(e,t){A(t,!0);
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
let n=q(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`circle`,{cx:`12`,cy:`12`,r:`10`}],[`path`,{d:`M8 12h8`}],[`path`,{d:`M12 8v8`}]];Y(e,J({name:`circle-plus`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=H(),i=F(r);G(i,()=>t.children??d),U(e,r)},$$slots:{default:!0}})),j()}function aa(e,t){A(t,!0);
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
let n=q(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M12 6v6l2-4`}],[`circle`,{cx:`12`,cy:`12`,r:`10`}]];Y(e,J({name:`clock-1`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=H(),i=F(r);G(i,()=>t.children??d),U(e,r)},$$slots:{default:!0}})),j()}function oa(e,t){A(t,!0);
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
let n=q(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M12 6v6l-4-2`}],[`circle`,{cx:`12`,cy:`12`,r:`10`}]];Y(e,J({name:`clock-10`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=H(),i=F(r);G(i,()=>t.children??d),U(e,r)},$$slots:{default:!0}})),j()}function sa(e,t){A(t,!0);
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
let n=q(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M12 6v6l4 2`}],[`circle`,{cx:`12`,cy:`12`,r:`10`}]];Y(e,J({name:`clock`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=H(),i=F(r);G(i,()=>t.children??d),U(e,r)},$$slots:{default:!0}})),j()}function ca(e,t){A(t,!0);
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
let n=q(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M12.409 5.824c-.702.792-1.15 1.496-1.415 2.166l2.153 2.156a.5.5 0 0 1 0 .707l-2.293 2.293a.5.5 0 0 0 0 .707L12 15`}],[`path`,{d:`M13.508 20.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.677.6.6 0 0 0 .818.001A5.5 5.5 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5z`}]];Y(e,J({name:`heart-crack`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=H(),i=F(r);G(i,()=>t.children??d),U(e,r)},$$slots:{default:!0}})),j()}function la(e,t){A(t,!0);
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
let n=q(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`}],[`path`,{d:`M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`}]];Y(e,J({name:`house`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=H(),i=F(r);G(i,()=>t.children??d),U(e,r)},$$slots:{default:!0}})),j()}function ua(e,t){A(t,!0);
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
let n=q(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M13 5h8`}],[`path`,{d:`M13 12h8`}],[`path`,{d:`M13 19h8`}],[`path`,{d:`m3 17 2 2 4-4`}],[`rect`,{x:`3`,y:`4`,width:`6`,height:`6`,rx:`1`}]];Y(e,J({name:`list-todo`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=H(),i=F(r);G(i,()=>t.children??d),U(e,r)},$$slots:{default:!0}})),j()}function da(e,t){A(t,!0);
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
let n=q(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M4 5h16`}],[`path`,{d:`M4 12h16`}],[`path`,{d:`M4 19h16`}]];Y(e,J({name:`menu`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=H(),i=F(r);G(i,()=>t.children??d),U(e,r)},$$slots:{default:!0}})),j()}function fa(e,t){A(t,!0);
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
let n=q(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`}]];Y(e,J({name:`moon`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=H(),i=F(r);G(i,()=>t.children??d),U(e,r)},$$slots:{default:!0}})),j()}function pa(e,t){A(t,!0);
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
let n=q(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z`}],[`path`,{d:`m5 2 5 5`}],[`path`,{d:`M2 13h15`}],[`path`,{d:`M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z`}]];Y(e,J({name:`paint-bucket`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=H(),i=F(r);G(i,()=>t.children??d),U(e,r)},$$slots:{default:!0}})),j()}function ma(e,t){A(t,!0);
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
let n=q(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`m21 21-4.34-4.34`}],[`circle`,{cx:`11`,cy:`11`,r:`8`}]];Y(e,J({name:`search`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=H(),i=F(r);G(i,()=>t.children??d),U(e,r)},$$slots:{default:!0}})),j()}function ha(e,t){A(t,!0);
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
let n=q(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M14 17H5`}],[`path`,{d:`M19 7h-9`}],[`circle`,{cx:`17`,cy:`17`,r:`3`}],[`circle`,{cx:`7`,cy:`7`,r:`3`}]];Y(e,J({name:`settings-2`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=H(),i=F(r);G(i,()=>t.children??d),U(e,r)},$$slots:{default:!0}})),j()}function ga(e,t){A(t,!0);
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
let n=q(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`circle`,{cx:`12`,cy:`12`,r:`4`}],[`path`,{d:`M12 2v2`}],[`path`,{d:`M12 20v2`}],[`path`,{d:`m4.93 4.93 1.41 1.41`}],[`path`,{d:`m17.66 17.66 1.41 1.41`}],[`path`,{d:`M2 12h2`}],[`path`,{d:`M20 12h2`}],[`path`,{d:`m6.34 17.66-1.41 1.41`}],[`path`,{d:`m19.07 4.93-1.41 1.41`}]];Y(e,J({name:`sun`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=H(),i=F(r);G(i,()=>t.children??d),U(e,r)},$$slots:{default:!0}})),j()}function _a(e,t){A(t,!0);
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
let n=q(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`}],[`path`,{d:`M3 6h18`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`}]];Y(e,J({name:`trash`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=H(),i=F(r);G(i,()=>t.children??d),U(e,r)},$$slots:{default:!0}})),j()}function va(e,t){A(t,!0);
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
let n=q(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`}],[`circle`,{cx:`12`,cy:`7`,r:`4`}]];Y(e,J({name:`user`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=H(),i=F(r);G(i,()=>t.children??d),U(e,r)},$$slots:{default:!0}})),j()}var ya=class e extends Error{constructor(t){super(`ClientResponseError`),this.url=``,this.status=0,this.response={},this.isAbort=!1,this.originalError=null,Object.setPrototypeOf(this,e.prototype),typeof t==`object`&&t&&(this.url=typeof t.url==`string`?t.url:``,this.status=typeof t.status==`number`?t.status:0,this.isAbort=!!t.isAbort,this.originalError=t.originalError,t.response!==null&&typeof t.response==`object`?this.response=t.response:t.data!==null&&typeof t.data==`object`?this.response=t.data:this.response={}),this.originalError||t instanceof e||(this.originalError=t),typeof DOMException<`u`&&t instanceof DOMException&&(this.isAbort=!0),this.name=`ClientResponseError `+this.status,this.message=this.response?.message,this.message||(this.isAbort?this.message=`The request was autocancelled. You can find more info in https://github.com/pocketbase/js-sdk#auto-cancellation.`:this.originalError?.cause?.message?.includes(`ECONNREFUSED ::1`)?this.message=`Failed to connect to the PocketBase server. Try changing the SDK URL from localhost to 127.0.0.1 (https://github.com/pocketbase/js-sdk/issues/21).`:this.message=`Something went wrong.`),this.cause=this.originalError}get data(){return this.response}toJSON(){return{...this}}},ba=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function xa(e,t){let n={};if(typeof e!=`string`)return n;let r=Object.assign({},t||{}).decode||Ca,i=0;for(;i<e.length;){let t=e.indexOf(`=`,i);if(t===-1)break;let a=e.indexOf(`;`,i);if(a===-1)a=e.length;else if(a<t){i=e.lastIndexOf(`;`,t-1)+1;continue}let o=e.slice(i,t).trim();if(n[o]===void 0){let i=e.slice(t+1,a).trim();i.charCodeAt(0)===34&&(i=i.slice(1,-1));try{n[o]=r(i)}catch{n[o]=i}}i=a+1}return n}function Sa(e,t,n){let r=Object.assign({},n||{}),i=r.encode||wa;if(!ba.test(e))throw TypeError(`argument name is invalid`);let a=i(t);if(a&&!ba.test(a))throw TypeError(`argument val is invalid`);let o=e+`=`+a;if(r.maxAge!=null){let e=r.maxAge-0;if(isNaN(e)||!isFinite(e))throw TypeError(`option maxAge is invalid`);o+=`; Max-Age=`+Math.floor(e)}if(r.domain){if(!ba.test(r.domain))throw TypeError(`option domain is invalid`);o+=`; Domain=`+r.domain}if(r.path){if(!ba.test(r.path))throw TypeError(`option path is invalid`);o+=`; Path=`+r.path}if(r.expires){if(!function(e){return Object.prototype.toString.call(e)===`[object Date]`||e instanceof Date}(r.expires)||isNaN(r.expires.valueOf()))throw TypeError(`option expires is invalid`);o+=`; Expires=`+r.expires.toUTCString()}if(r.httpOnly&&(o+=`; HttpOnly`),r.secure&&(o+=`; Secure`),r.priority)switch(typeof r.priority==`string`?r.priority.toLowerCase():r.priority){case`low`:o+=`; Priority=Low`;break;case`medium`:o+=`; Priority=Medium`;break;case`high`:o+=`; Priority=High`;break;default:throw TypeError(`option priority is invalid`)}if(r.sameSite)switch(typeof r.sameSite==`string`?r.sameSite.toLowerCase():r.sameSite){case!0:o+=`; SameSite=Strict`;break;case`lax`:o+=`; SameSite=Lax`;break;case`strict`:o+=`; SameSite=Strict`;break;case`none`:o+=`; SameSite=None`;break;default:throw TypeError(`option sameSite is invalid`)}return o}function Ca(e){return e.indexOf(`%`)===-1?e:decodeURIComponent(e)}function wa(e){return encodeURIComponent(e)}var Ta=typeof navigator<`u`&&navigator.product===`ReactNative`||typeof global<`u`&&global.HermesInternal,Ea;function Da(e){if(e)try{let t=decodeURIComponent(Ea(e.split(`.`)[1]).split(``).map((function(e){return`%`+(`00`+e.charCodeAt(0).toString(16)).slice(-2)})).join(``));return JSON.parse(t)||{}}catch{}return{}}function Oa(e,t=0){let n=Da(e);return!(Object.keys(n).length>0&&(!n.exp||n.exp-t>Date.now()/1e3))}Ea=typeof atob!=`function`||Ta?e=>{let t=String(e).replace(/=+$/,``);if(t.length%4==1)throw Error(`'atob' failed: The string to be decoded is not correctly encoded.`);for(var n,r,i=0,a=0,o=``;r=t.charAt(a++);~r&&(n=i%4?64*n+r:r,i++%4)&&(o+=String.fromCharCode(255&n>>(-2*i&6))))r=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`.indexOf(r);return o}:atob;var ka=`pb_auth`,Aa=class{constructor(){this.baseToken=``,this.baseModel=null,this._onChangeCallbacks=[]}get token(){return this.baseToken}get record(){return this.baseModel}get model(){return this.baseModel}get isValid(){return!Oa(this.token)}get isSuperuser(){let e=Da(this.token);return e.type==`auth`&&(this.record?.collectionName==`_superusers`||!this.record?.collectionName&&e.collectionId==`pbc_3142635823`)}get isAdmin(){return console.warn(`Please replace pb.authStore.isAdmin with pb.authStore.isSuperuser OR simply check the value of pb.authStore.record?.collectionName`),this.isSuperuser}get isAuthRecord(){return console.warn(`Please replace pb.authStore.isAuthRecord with !pb.authStore.isSuperuser OR simply check the value of pb.authStore.record?.collectionName`),Da(this.token).type==`auth`&&!this.isSuperuser}save(e,t){this.baseToken=e||``,this.baseModel=t||null,this.triggerChange()}clear(){this.baseToken=``,this.baseModel=null,this.triggerChange()}loadFromCookie(e,t=ka){let n=xa(e||``)[t]||``,r={};try{r=JSON.parse(n),(typeof r!=`object`||Array.isArray(r))&&(r={})}catch{}this.save(r.token||``,r.record||r.model||null)}exportToCookie(e,t=ka){let n={secure:!0,sameSite:!0,httpOnly:!0,path:`/`},r=Da(this.token);n.expires=r?.exp?new Date(1e3*r.exp):new Date(`1970-01-01`),e=Object.assign({},n,e);let i={token:this.token,record:this.record?JSON.parse(JSON.stringify(this.record)):null},a=Sa(t,JSON.stringify(i),e),o=typeof Blob<`u`?new Blob([a]).size:a.length;if(i.record&&o>4096){i.record={id:i.record?.id,email:i.record?.email};let n=[`collectionId`,`collectionName`,`verified`];for(let e in this.record)n.includes(e)&&(i.record[e]=this.record[e]);a=Sa(t,JSON.stringify(i),e)}return a}onChange(e,t=!1){return this._onChangeCallbacks.push(e),t&&e(this.token,this.record),()=>{for(let t=this._onChangeCallbacks.length-1;t>=0;t--)if(this._onChangeCallbacks[t]==e)return delete this._onChangeCallbacks[t],void this._onChangeCallbacks.splice(t,1)}}triggerChange(){for(let e of this._onChangeCallbacks)e&&e(this.token,this.record)}},ja=class extends Aa{constructor(e=`pocketbase_auth`){super(),this.storageFallback={},this.storageKey=e,this._bindStorageEvent()}get token(){return(this._storageGet(this.storageKey)||{}).token||``}get record(){let e=this._storageGet(this.storageKey)||{};return e.record||e.model||null}get model(){return this.record}save(e,t){this._storageSet(this.storageKey,{token:e,record:t}),super.save(e,t)}clear(){this._storageRemove(this.storageKey),super.clear()}_storageGet(e){if(typeof window<`u`&&window?.localStorage){let t=window.localStorage.getItem(e)||``;try{return JSON.parse(t)}catch{return t}}return this.storageFallback[e]}_storageSet(e,t){if(typeof window<`u`&&window?.localStorage){let n=t;typeof t!=`string`&&(n=JSON.stringify(t)),window.localStorage.setItem(e,n)}else this.storageFallback[e]=t}_storageRemove(e){typeof window<`u`&&window?.localStorage&&window.localStorage?.removeItem(e),delete this.storageFallback[e]}_bindStorageEvent(){typeof window<`u`&&window?.localStorage&&window.addEventListener&&window.addEventListener(`storage`,(e=>{if(e.key!=this.storageKey)return;let t=this._storageGet(this.storageKey)||{};super.save(t.token||``,t.record||t.model||null)}))}},Ma=class{constructor(e){this.client=e}},Na=class extends Ma{async getAll(e){return e=Object.assign({method:`GET`},e),this.client.send(`/api/settings`,e)}async update(e,t){return t=Object.assign({method:`PATCH`,body:e},t),this.client.send(`/api/settings`,t)}async testS3(e=`storage`,t){return t=Object.assign({method:`POST`,body:{filesystem:e}},t),this.client.send(`/api/settings/test/s3`,t).then((()=>!0))}async testEmail(e,t,n,r){return r=Object.assign({method:`POST`,body:{email:t,template:n,collection:e}},r),this.client.send(`/api/settings/test/email`,r).then((()=>!0))}async generateAppleClientSecret(e,t,n,r,i,a){return a=Object.assign({method:`POST`,body:{clientId:e,teamId:t,keyId:n,privateKey:r,duration:i}},a),this.client.send(`/api/settings/apple/generate-client-secret`,a)}},Pa=[`requestKey`,`$cancelKey`,`$autoCancel`,`fetch`,`headers`,`body`,`query`,`params`,`cache`,`credentials`,`headers`,`integrity`,`keepalive`,`method`,`mode`,`redirect`,`referrer`,`referrerPolicy`,`signal`,`window`];function Fa(e){if(e)for(let t in e.query=e.query||{},e)Pa.includes(t)||(e.query[t]=e[t],delete e[t])}function Ia(e){let t=[];for(let n in e){let r=encodeURIComponent(n),i=Array.isArray(e[n])?e[n]:[e[n]];for(let e of i)e=La(e),e!==null&&t.push(r+`=`+e)}return t.join(`&`)}function La(e){return e==null?null:e instanceof Date?encodeURIComponent(e.toISOString().replace(`T`,` `)):typeof e==`object`?encodeURIComponent(JSON.stringify(e)):encodeURIComponent(e)}var Ra=class extends Ma{constructor(){super(...arguments),this.clientId=``,this.eventSource=null,this.subscriptions={},this.lastSentSubscriptions=[],this.maxConnectTimeout=15e3,this.reconnectAttempts=0,this.maxReconnectAttempts=1/0,this.predefinedReconnectIntervals=[200,300,500,1e3,1200,1500,2e3],this.pendingConnects=[]}get isConnected(){return!!this.eventSource&&!!this.clientId&&!this.pendingConnects.length}async subscribe(e,t,n){if(!e)throw Error(`topic must be set.`);let r=e;if(n){Fa(n=Object.assign({},n));let e=`options=`+encodeURIComponent(JSON.stringify({query:n.query,headers:n.headers}));r+=(r.includes(`?`)?`&`:`?`)+e}let i=function(e){let n=e,r;try{r=JSON.parse(n?.data)}catch{}t(r||{})};return this.subscriptions[r]||(this.subscriptions[r]=[]),this.subscriptions[r].push(i),this.isConnected?this.subscriptions[r].length===1?await this.submitSubscriptions():this.eventSource?.addEventListener(r,i):await this.connect(),async()=>this.unsubscribeByTopicAndListener(e,i)}async unsubscribe(e){let t=!1;if(e){let n=this.getSubscriptionsByTopic(e);for(let e in n)if(this.hasSubscriptionListeners(e)){for(let t of this.subscriptions[e])this.eventSource?.removeEventListener(e,t);delete this.subscriptions[e],t||=!0}}else this.subscriptions={};this.hasSubscriptionListeners()?t&&await this.submitSubscriptions():this.disconnect()}async unsubscribeByPrefix(e){let t=!1;for(let n in this.subscriptions)if((n+`?`).startsWith(e)){t=!0;for(let e of this.subscriptions[n])this.eventSource?.removeEventListener(n,e);delete this.subscriptions[n]}t&&(this.hasSubscriptionListeners()?await this.submitSubscriptions():this.disconnect())}async unsubscribeByTopicAndListener(e,t){let n=!1,r=this.getSubscriptionsByTopic(e);for(let e in r){if(!Array.isArray(this.subscriptions[e])||!this.subscriptions[e].length)continue;let r=!1;for(let n=this.subscriptions[e].length-1;n>=0;n--)this.subscriptions[e][n]===t&&(r=!0,delete this.subscriptions[e][n],this.subscriptions[e].splice(n,1),this.eventSource?.removeEventListener(e,t));r&&(this.subscriptions[e].length||delete this.subscriptions[e],n||this.hasSubscriptionListeners(e)||(n=!0))}this.hasSubscriptionListeners()?n&&await this.submitSubscriptions():this.disconnect()}hasSubscriptionListeners(e){if(this.subscriptions=this.subscriptions||{},e)return!!this.subscriptions[e]?.length;for(let e in this.subscriptions)if(this.subscriptions[e]?.length)return!0;return!1}async submitSubscriptions(){if(this.clientId)return this.addAllSubscriptionListeners(),this.lastSentSubscriptions=this.getNonEmptySubscriptionKeys(),this.client.send(`/api/realtime`,{method:`POST`,body:{clientId:this.clientId,subscriptions:this.lastSentSubscriptions},requestKey:this.getSubscriptionsCancelKey()}).catch((e=>{if(!e?.isAbort)throw e}))}getSubscriptionsCancelKey(){return`realtime_`+this.clientId}getSubscriptionsByTopic(e){let t={};for(let n in e=e.includes(`?`)?e:e+`?`,this.subscriptions)(n+`?`).startsWith(e)&&(t[n]=this.subscriptions[n]);return t}getNonEmptySubscriptionKeys(){let e=[];for(let t in this.subscriptions)this.subscriptions[t].length&&e.push(t);return e}addAllSubscriptionListeners(){if(this.eventSource)for(let e in this.removeAllSubscriptionListeners(),this.subscriptions)for(let t of this.subscriptions[e])this.eventSource.addEventListener(e,t)}removeAllSubscriptionListeners(){if(this.eventSource)for(let e in this.subscriptions)for(let t of this.subscriptions[e])this.eventSource.removeEventListener(e,t)}async connect(){if(!(this.reconnectAttempts>0))return new Promise(((e,t)=>{this.pendingConnects.push({resolve:e,reject:t}),this.pendingConnects.length>1||this.initConnect()}))}initConnect(){this.disconnect(!0),clearTimeout(this.connectTimeoutId),this.connectTimeoutId=setTimeout((()=>{this.connectErrorHandler(Error(`EventSource connect took too long.`))}),this.maxConnectTimeout),this.eventSource=new EventSource(this.client.buildURL(`/api/realtime`)),this.eventSource.onerror=e=>{this.connectErrorHandler(Error(`Failed to establish realtime connection.`))},this.eventSource.addEventListener(`PB_CONNECT`,(e=>{this.clientId=e?.lastEventId,this.submitSubscriptions().then((async()=>{let e=3;for(;this.hasUnsentSubscriptions()&&e>0;)e--,await this.submitSubscriptions()})).then((()=>{for(let e of this.pendingConnects)e.resolve();this.pendingConnects=[],this.reconnectAttempts=0,clearTimeout(this.reconnectTimeoutId),clearTimeout(this.connectTimeoutId);let t=this.getSubscriptionsByTopic(`PB_CONNECT`);for(let n in t)for(let r of t[n])r(e)})).catch((e=>{this.clientId=``,this.connectErrorHandler(e)}))}))}hasUnsentSubscriptions(){let e=this.getNonEmptySubscriptionKeys();if(e.length!=this.lastSentSubscriptions.length)return!0;for(let t of e)if(!this.lastSentSubscriptions.includes(t))return!0;return!1}connectErrorHandler(e){if(clearTimeout(this.connectTimeoutId),clearTimeout(this.reconnectTimeoutId),!this.clientId&&!this.reconnectAttempts||this.reconnectAttempts>this.maxReconnectAttempts){for(let t of this.pendingConnects)t.reject(new ya(e));this.pendingConnects=[],this.disconnect();return}this.disconnect(!0);let t=this.predefinedReconnectIntervals[this.reconnectAttempts]||this.predefinedReconnectIntervals[this.predefinedReconnectIntervals.length-1];this.reconnectAttempts++,this.reconnectTimeoutId=setTimeout((()=>{this.initConnect()}),t)}disconnect(e=!1){if(this.clientId&&this.onDisconnect&&this.onDisconnect(Object.keys(this.subscriptions)),clearTimeout(this.connectTimeoutId),clearTimeout(this.reconnectTimeoutId),this.removeAllSubscriptionListeners(),this.client.cancelRequest(this.getSubscriptionsCancelKey()),this.eventSource?.close(),this.eventSource=null,this.clientId=``,!e){this.reconnectAttempts=0;for(let e of this.pendingConnects)e.resolve();this.pendingConnects=[]}}},za=class extends Ma{decode(e){return e}async getFullList(e,t){if(typeof e==`number`)return this._getFullList(e,t);let n=500;return(t=Object.assign({},e,t)).batch&&(n=t.batch,delete t.batch),this._getFullList(n,t)}async getList(e=1,t=30,n){return(n=Object.assign({method:`GET`},n)).query=Object.assign({page:e,perPage:t},n.query),this.client.send(this.baseCrudPath,n).then((e=>(e.items=e.items?.map((e=>this.decode(e)))||[],e)))}async getFirstListItem(e,t){return(t=Object.assign({requestKey:`one_by_filter_`+this.baseCrudPath+`_`+e},t)).query=Object.assign({filter:e,skipTotal:1},t.query),this.getList(1,1,t).then((e=>{if(!e?.items?.length)throw new ya({status:404,response:{code:404,message:`The requested resource wasn't found.`,data:{}}});return e.items[0]}))}async getOne(e,t){if(!e)throw new ya({url:this.client.buildURL(this.baseCrudPath+`/`),status:404,response:{code:404,message:`Missing required record id.`,data:{}}});return t=Object.assign({method:`GET`},t),this.client.send(this.baseCrudPath+`/`+encodeURIComponent(e),t).then((e=>this.decode(e)))}async create(e,t){return t=Object.assign({method:`POST`,body:e},t),this.client.send(this.baseCrudPath,t).then((e=>this.decode(e)))}async update(e,t,n){return n=Object.assign({method:`PATCH`,body:t},n),this.client.send(this.baseCrudPath+`/`+encodeURIComponent(e),n).then((e=>this.decode(e)))}async delete(e,t){return t=Object.assign({method:`DELETE`},t),this.client.send(this.baseCrudPath+`/`+encodeURIComponent(e),t).then((()=>!0))}_getFullList(e=500,t){(t||={}).query=Object.assign({skipTotal:1},t.query);let n=[],r=async i=>this.getList(i,e||500,t).then((e=>{let t=e.items;return n=n.concat(t),t.length==e.perPage?r(i+1):n}));return r(1)}};function Ba(e,t,n,r){let i=r!==void 0;return i||n!==void 0?i?(console.warn(e),t.body=Object.assign({},t.body,n),t.query=Object.assign({},t.query,r),t):Object.assign(t,n):t}function Va(e){e._resetAutoRefresh?.()}var Ha=class extends za{constructor(e,t){super(e),this.collectionIdOrName=t}get baseCrudPath(){return this.baseCollectionPath+`/records`}get baseCollectionPath(){return`/api/collections/`+encodeURIComponent(this.collectionIdOrName)}get isSuperusers(){return this.collectionIdOrName==`_superusers`||this.collectionIdOrName==`_pbc_2773867675`}async subscribe(e,t,n){if(!e)throw Error(`Missing topic.`);if(!t)throw Error(`Missing subscription callback.`);return this.client.realtime.subscribe(this.collectionIdOrName+`/`+e,t,n)}async unsubscribe(e){return e?this.client.realtime.unsubscribe(this.collectionIdOrName+`/`+e):this.client.realtime.unsubscribeByPrefix(this.collectionIdOrName)}async getFullList(e,t){if(typeof e==`number`)return super.getFullList(e,t);let n=Object.assign({},e,t);return super.getFullList(n)}async getList(e=1,t=30,n){return super.getList(e,t,n)}async getFirstListItem(e,t){return super.getFirstListItem(e,t)}async getOne(e,t){return super.getOne(e,t)}async create(e,t){return super.create(e,t)}async update(e,t,n){return super.update(e,t,n).then((e=>{if(this.client.authStore.record?.id===e?.id&&(this.client.authStore.record?.collectionId===this.collectionIdOrName||this.client.authStore.record?.collectionName===this.collectionIdOrName)){let t=Object.assign({},this.client.authStore.record.expand),n=Object.assign({},this.client.authStore.record,e);t&&(n.expand=Object.assign(t,e.expand)),this.client.authStore.save(this.client.authStore.token,n)}return e}))}async delete(e,t){return super.delete(e,t).then((t=>(!t||this.client.authStore.record?.id!==e||this.client.authStore.record?.collectionId!==this.collectionIdOrName&&this.client.authStore.record?.collectionName!==this.collectionIdOrName||this.client.authStore.clear(),t)))}authResponse(e){let t=this.decode(e?.record||{});return this.client.authStore.save(e?.token,t),Object.assign({},e,{token:e?.token||``,record:t})}async listAuthMethods(e){return e=Object.assign({method:`GET`,fields:`mfa,otp,password,oauth2`},e),this.client.send(this.baseCollectionPath+`/auth-methods`,e)}async authWithPassword(e,t,n){let r;n=Object.assign({method:`POST`,body:{identity:e,password:t}},n),this.isSuperusers&&(r=n.autoRefreshThreshold,delete n.autoRefreshThreshold,n.autoRefresh||Va(this.client));let i=await this.client.send(this.baseCollectionPath+`/auth-with-password`,n);return i=this.authResponse(i),r&&this.isSuperusers&&function(e,t,n,r){Va(e);let i=e.beforeSend,a=e.authStore.record,o=e.authStore.onChange(((t,n)=>{(!t||n?.id!=a?.id||(n?.collectionId||a?.collectionId)&&n?.collectionId!=a?.collectionId)&&Va(e)}));e._resetAutoRefresh=function(){o(),e.beforeSend=i,delete e._resetAutoRefresh},e.beforeSend=async(a,o)=>{let s=e.authStore.token;if(o.query?.autoRefresh)return i?i(a,o):{url:a,sendOptions:o};let c=e.authStore.isValid;if(c&&Oa(e.authStore.token,t))try{await n()}catch{c=!1}c||await r();let l=o.headers||{};for(let t in l)if(t.toLowerCase()==`authorization`&&s==l[t]&&e.authStore.token){l[t]=e.authStore.token;break}return o.headers=l,i?i(a,o):{url:a,sendOptions:o}}}(this.client,r,(()=>this.authRefresh({autoRefresh:!0})),(()=>this.authWithPassword(e,t,Object.assign({autoRefresh:!0},n)))),i}async authWithOAuth2Code(e,t,n,r,i,a,o){let s={method:`POST`,body:{provider:e,code:t,codeVerifier:n,redirectURL:r,createData:i}};return s=Ba(`This form of authWithOAuth2Code(provider, code, codeVerifier, redirectURL, createData?, body?, query?) is deprecated. Consider replacing it with authWithOAuth2Code(provider, code, codeVerifier, redirectURL, createData?, options?).`,s,a,o),this.client.send(this.baseCollectionPath+`/auth-with-oauth2`,s).then((e=>this.authResponse(e)))}authWithOAuth2(...e){if(e.length>1||typeof e?.[0]==`string`)return console.warn(`PocketBase: This form of authWithOAuth2() is deprecated and may get removed in the future. Please replace with authWithOAuth2Code() OR use the authWithOAuth2() realtime form as shown in https://pocketbase.io/docs/authentication/#oauth2-integration.`),this.authWithOAuth2Code(e?.[0]||``,e?.[1]||``,e?.[2]||``,e?.[3]||``,e?.[4]||{},e?.[5]||{},e?.[6]||{});let t=e?.[0]||{},n=null;t.urlCallback||(n=Ua(void 0));let r=new Ra(this.client);function i(){n?.close(),r.unsubscribe()}let a={},o=t.requestKey;return o&&(a.requestKey=o),this.listAuthMethods(a).then((e=>{let a=e.oauth2.providers.find((e=>e.name===t.provider));if(!a)throw new ya(Error(`Missing or invalid provider "${t.provider}".`));let s=this.client.buildURL(`/api/oauth2-redirect`),c=o?this.client.cancelControllers?.[o]:void 0;return c&&(c.signal.onabort=()=>{i()}),new Promise((async(e,o)=>{try{await r.subscribe(`@oauth2`,(async n=>{let l=r.clientId;try{if(!n.state||l!==n.state)throw Error(`State parameters don't match.`);if(n.error||!n.code)throw Error(`OAuth2 redirect error or missing code: `+n.error);let r=Object.assign({},t);delete r.provider,delete r.scopes,delete r.createData,delete r.urlCallback,c?.signal?.onabort&&(c.signal.onabort=null);let i=await this.authWithOAuth2Code(a.name,n.code,a.codeVerifier,s,t.createData,r);e(i)}catch(e){o(new ya(e))}i()}));let l={state:r.clientId};t.scopes?.length&&(l.scope=t.scopes.join(` `));let u=this._replaceQueryParams(a.authURL+s,l);await(t.urlCallback||function(e){n?n.location.href=e:n=Ua(e)})(u)}catch(e){i(),o(new ya(e))}}))})).catch((e=>{throw i(),e}))}async authRefresh(e,t){let n={method:`POST`};return n=Ba(`This form of authRefresh(body?, query?) is deprecated. Consider replacing it with authRefresh(options?).`,n,e,t),this.client.send(this.baseCollectionPath+`/auth-refresh`,n).then((e=>this.authResponse(e)))}async requestPasswordReset(e,t,n){let r={method:`POST`,body:{email:e}};return r=Ba(`This form of requestPasswordReset(email, body?, query?) is deprecated. Consider replacing it with requestPasswordReset(email, options?).`,r,t,n),this.client.send(this.baseCollectionPath+`/request-password-reset`,r).then((()=>!0))}async confirmPasswordReset(e,t,n,r,i){let a={method:`POST`,body:{token:e,password:t,passwordConfirm:n}};return a=Ba(`This form of confirmPasswordReset(token, password, passwordConfirm, body?, query?) is deprecated. Consider replacing it with confirmPasswordReset(token, password, passwordConfirm, options?).`,a,r,i),this.client.send(this.baseCollectionPath+`/confirm-password-reset`,a).then((()=>!0))}async requestVerification(e,t,n){let r={method:`POST`,body:{email:e}};return r=Ba(`This form of requestVerification(email, body?, query?) is deprecated. Consider replacing it with requestVerification(email, options?).`,r,t,n),this.client.send(this.baseCollectionPath+`/request-verification`,r).then((()=>!0))}async confirmVerification(e,t,n){let r={method:`POST`,body:{token:e}};return r=Ba(`This form of confirmVerification(token, body?, query?) is deprecated. Consider replacing it with confirmVerification(token, options?).`,r,t,n),this.client.send(this.baseCollectionPath+`/confirm-verification`,r).then((()=>{let t=Da(e),n=this.client.authStore.record;return n&&!n.verified&&n.id===t.id&&n.collectionId===t.collectionId&&(n.verified=!0,this.client.authStore.save(this.client.authStore.token,n)),!0}))}async requestEmailChange(e,t,n){let r={method:`POST`,body:{newEmail:e}};return r=Ba(`This form of requestEmailChange(newEmail, body?, query?) is deprecated. Consider replacing it with requestEmailChange(newEmail, options?).`,r,t,n),this.client.send(this.baseCollectionPath+`/request-email-change`,r).then((()=>!0))}async confirmEmailChange(e,t,n,r){let i={method:`POST`,body:{token:e,password:t}};return i=Ba(`This form of confirmEmailChange(token, password, body?, query?) is deprecated. Consider replacing it with confirmEmailChange(token, password, options?).`,i,n,r),this.client.send(this.baseCollectionPath+`/confirm-email-change`,i).then((()=>{let t=Da(e),n=this.client.authStore.record;return n&&n.id===t.id&&n.collectionId===t.collectionId&&this.client.authStore.clear(),!0}))}async listExternalAuths(e,t){return this.client.collection(`_externalAuths`).getFullList(Object.assign({},t,{filter:this.client.filter(`recordRef = {:id}`,{id:e})}))}async unlinkExternalAuth(e,t,n){let r=await this.client.collection(`_externalAuths`).getFirstListItem(this.client.filter(`recordRef = {:recordId} && provider = {:provider}`,{recordId:e,provider:t}));return this.client.collection(`_externalAuths`).delete(r.id,n).then((()=>!0))}async requestOTP(e,t){return t=Object.assign({method:`POST`,body:{email:e}},t),this.client.send(this.baseCollectionPath+`/request-otp`,t)}async authWithOTP(e,t,n){return n=Object.assign({method:`POST`,body:{otpId:e,password:t}},n),this.client.send(this.baseCollectionPath+`/auth-with-otp`,n).then((e=>this.authResponse(e)))}async impersonate(e,t,n){(n=Object.assign({method:`POST`,body:{duration:t}},n)).headers=n.headers||{},n.headers.Authorization||(n.headers.Authorization=this.client.authStore.token);let r=new ro(this.client.baseURL,new Aa,this.client.lang),i=await r.send(this.baseCollectionPath+`/impersonate/`+encodeURIComponent(e),n);return r.authStore.save(i?.token,this.decode(i?.record||{})),r}_replaceQueryParams(e,t={}){let n=e,r=``;e.indexOf(`?`)>=0&&(n=e.substring(0,e.indexOf(`?`)),r=e.substring(e.indexOf(`?`)+1));let i={},a=r.split(`&`);for(let e of a){if(e==``)continue;let t=e.split(`=`);i[decodeURIComponent(t[0].replace(/\+/g,` `))]=decodeURIComponent((t[1]||``).replace(/\+/g,` `))}for(let e in t)t.hasOwnProperty(e)&&(t[e]==null?delete i[e]:i[e]=t[e]);for(let e in r=``,i)i.hasOwnProperty(e)&&(r!=``&&(r+=`&`),r+=encodeURIComponent(e.replace(/%20/g,`+`))+`=`+encodeURIComponent(i[e].replace(/%20/g,`+`)));return r==``?n:n+`?`+r}};function Ua(e){if(typeof window>`u`||!window?.open)throw new ya(Error(`Not in a browser context - please pass a custom urlCallback function.`));let t=1024,n=768,r=window.innerWidth,i=window.innerHeight;t=t>r?r:t,n=n>i?i:n;let a=r/2-t/2,o=i/2-n/2;return window.open(e,`popup_window`,`width=`+t+`,height=`+n+`,top=`+o+`,left=`+a+`,resizable,menubar=no`)}var Wa=class extends za{get baseCrudPath(){return`/api/collections`}async import(e,t=!1,n){return n=Object.assign({method:`PUT`,body:{collections:e,deleteMissing:t}},n),this.client.send(this.baseCrudPath+`/import`,n).then((()=>!0))}async getScaffolds(e){return e=Object.assign({method:`GET`},e),this.client.send(this.baseCrudPath+`/meta/scaffolds`,e)}async truncate(e,t){return t=Object.assign({method:`DELETE`},t),this.client.send(this.baseCrudPath+`/`+encodeURIComponent(e)+`/truncate`,t).then((()=>!0))}},Ga=class extends Ma{async getList(e=1,t=30,n){return(n=Object.assign({method:`GET`},n)).query=Object.assign({page:e,perPage:t},n.query),this.client.send(`/api/logs`,n)}async getOne(e,t){if(!e)throw new ya({url:this.client.buildURL(`/api/logs/`),status:404,response:{code:404,message:`Missing required log id.`,data:{}}});return t=Object.assign({method:`GET`},t),this.client.send(`/api/logs/`+encodeURIComponent(e),t)}async getStats(e){return e=Object.assign({method:`GET`},e),this.client.send(`/api/logs/stats`,e)}},Ka=class extends Ma{async check(e){return e=Object.assign({method:`GET`},e),this.client.send(`/api/health`,e)}},qa=class extends Ma{getUrl(e,t,n={}){return console.warn(`Please replace pb.files.getUrl() with pb.files.getURL()`),this.getURL(e,t,n)}getURL(e,t,n={}){if(!t||!e?.id||!e?.collectionId&&!e?.collectionName)return``;let r=[];r.push(`api`),r.push(`files`),r.push(encodeURIComponent(e.collectionId||e.collectionName)),r.push(encodeURIComponent(e.id)),r.push(encodeURIComponent(t));let i=this.client.buildURL(r.join(`/`));if(Object.keys(n).length){!1===n.download&&delete n.download;let e=new URLSearchParams(n);i+=(i.includes(`?`)?`&`:`?`)+e}return i}async getToken(e){return e=Object.assign({method:`POST`},e),this.client.send(`/api/files/token`,e).then((e=>e?.token||``))}},Ja=class extends Ma{async getFullList(e){return e=Object.assign({method:`GET`},e),this.client.send(`/api/backups`,e)}async create(e,t){return t=Object.assign({method:`POST`,body:{name:e}},t),this.client.send(`/api/backups`,t).then((()=>!0))}async upload(e,t){return t=Object.assign({method:`POST`,body:e},t),this.client.send(`/api/backups/upload`,t).then((()=>!0))}async delete(e,t){return t=Object.assign({method:`DELETE`},t),this.client.send(`/api/backups/${encodeURIComponent(e)}`,t).then((()=>!0))}async restore(e,t){return t=Object.assign({method:`POST`},t),this.client.send(`/api/backups/${encodeURIComponent(e)}/restore`,t).then((()=>!0))}getDownloadUrl(e,t){return console.warn(`Please replace pb.backups.getDownloadUrl() with pb.backups.getDownloadURL()`),this.getDownloadURL(e,t)}getDownloadURL(e,t){return this.client.buildURL(`/api/backups/${encodeURIComponent(t)}?token=${encodeURIComponent(e)}`)}},Ya=class extends Ma{async getFullList(e){return e=Object.assign({method:`GET`},e),this.client.send(`/api/crons`,e)}async run(e,t){return t=Object.assign({method:`POST`},t),this.client.send(`/api/crons/${encodeURIComponent(e)}`,t).then((()=>!0))}};function Xa(e){return typeof Blob<`u`&&e instanceof Blob||typeof File<`u`&&e instanceof File||typeof e==`object`&&!!e&&e.uri&&(typeof navigator<`u`&&navigator.product===`ReactNative`||typeof global<`u`&&global.HermesInternal)}function Za(e){return e&&(e.constructor?.name===`FormData`||typeof FormData<`u`&&e instanceof FormData)}function Qa(e){for(let t in e){let n=Array.isArray(e[t])?e[t]:[e[t]];for(let e of n)if(Xa(e))return!0}return!1}var $a=/^[\-\.\d]+$/;function eo(e){if(typeof e!=`string`)return e;if(e==`true`)return!0;if(e==`false`)return!1;if((e[0]===`-`||e[0]>=`0`&&e[0]<=`9`)&&$a.test(e)){let t=+e;if(``+t===e)return t}return e}var to=class extends Ma{constructor(){super(...arguments),this.requests=[],this.subs={}}collection(e){return this.subs[e]||(this.subs[e]=new no(this.requests,e)),this.subs[e]}async send(e){let t=new FormData,n=[];for(let e=0;e<this.requests.length;e++){let r=this.requests[e];if(n.push({method:r.method,url:r.url,headers:r.headers,body:r.json}),r.files)for(let n in r.files){let i=r.files[n]||[];for(let r of i)t.append(`requests.`+e+`.`+n,r)}}return t.append(`@jsonPayload`,JSON.stringify({requests:n})),e=Object.assign({method:`POST`,body:t},e),this.client.send(`/api/batch`,e)}},no=class{constructor(e,t){this.requests=[],this.requests=e,this.collectionIdOrName=t}upsert(e,t){t=Object.assign({body:e||{}},t);let n={method:`PUT`,url:`/api/collections/`+encodeURIComponent(this.collectionIdOrName)+`/records`};this.prepareRequest(n,t),this.requests.push(n)}create(e,t){t=Object.assign({body:e||{}},t);let n={method:`POST`,url:`/api/collections/`+encodeURIComponent(this.collectionIdOrName)+`/records`};this.prepareRequest(n,t),this.requests.push(n)}update(e,t,n){n=Object.assign({body:t||{}},n);let r={method:`PATCH`,url:`/api/collections/`+encodeURIComponent(this.collectionIdOrName)+`/records/`+encodeURIComponent(e)};this.prepareRequest(r,n),this.requests.push(r)}delete(e,t){t=Object.assign({},t);let n={method:`DELETE`,url:`/api/collections/`+encodeURIComponent(this.collectionIdOrName)+`/records/`+encodeURIComponent(e)};this.prepareRequest(n,t),this.requests.push(n)}prepareRequest(e,t){if(Fa(t),e.headers=t.headers,e.json={},e.files={},t.query!==void 0){let n=Ia(t.query);n&&(e.url+=(e.url.includes(`?`)?`&`:`?`)+n)}let n=t.body;for(let t in Za(n)&&(n=function(e){let t={};return e.forEach(((e,n)=>{if(n===`@jsonPayload`&&typeof e==`string`)try{let n=JSON.parse(e);Object.assign(t,n)}catch(e){console.warn(`@jsonPayload error:`,e)}else t[n]===void 0?t[n]=eo(e):(Array.isArray(t[n])||(t[n]=[t[n]]),t[n].push(eo(e)))})),t}(n)),n){let r=n[t];if(Xa(r))e.files[t]=e.files[t]||[],e.files[t].push(r);else if(Array.isArray(r)){let n=[],i=[];for(let e of r)Xa(e)?n.push(e):i.push(e);if(n.length>0&&n.length==r.length){e.files[t]=e.files[t]||[];for(let r of n)e.files[t].push(r)}else if(e.json[t]=i,n.length>0){let r=t;t.startsWith(`+`)||t.endsWith(`+`)||(r+=`+`),e.files[r]=e.files[r]||[];for(let t of n)e.files[r].push(t)}}else e.json[t]=r}}},ro=class{get baseUrl(){return this.baseURL}set baseUrl(e){this.baseURL=e}constructor(e=`/`,t,n=`en-US`){this.cancelControllers={},this.recordServices={},this.enableAutoCancellation=!0,this.baseURL=e,this.lang=n,t?this.authStore=t:typeof window<`u`&&window.Deno?this.authStore=new Aa:this.authStore=new ja,this.collections=new Wa(this),this.files=new qa(this),this.logs=new Ga(this),this.settings=new Na(this),this.realtime=new Ra(this),this.health=new Ka(this),this.backups=new Ja(this),this.crons=new Ya(this)}get admins(){return this.collection(`_superusers`)}createBatch(){return new to(this)}collection(e){return this.recordServices[e]||(this.recordServices[e]=new Ha(this,e)),this.recordServices[e]}autoCancellation(e){return this.enableAutoCancellation=!!e,this}cancelRequest(e){return this.cancelControllers[e]&&(this.cancelControllers[e].abort(),delete this.cancelControllers[e]),this}cancelAllRequests(){for(let e in this.cancelControllers)this.cancelControllers[e].abort();return this.cancelControllers={},this}filter(e,t){if(!t)return e;for(let n in t){let r=t[n];switch(typeof r){case`boolean`:case`number`:r=``+r;break;case`string`:r=`'`+r.replace(/'/g,`\\'`)+`'`;break;default:r=r===null?`null`:r instanceof Date?`'`+r.toISOString().replace(`T`,` `)+`'`:`'`+JSON.stringify(r).replace(/'/g,`\\'`)+`'`}e=e.replaceAll(`{:`+n+`}`,r)}return e}getFileUrl(e,t,n={}){return console.warn(`Please replace pb.getFileUrl() with pb.files.getURL()`),this.files.getURL(e,t,n)}buildUrl(e){return console.warn(`Please replace pb.buildUrl() with pb.buildURL()`),this.buildURL(e)}buildURL(e){let t=this.baseURL;return typeof window>`u`||!window.location||t.startsWith(`https://`)||t.startsWith(`http://`)||(t=window.location.origin?.endsWith(`/`)?window.location.origin.substring(0,window.location.origin.length-1):window.location.origin||``,this.baseURL.startsWith(`/`)||(t+=window.location.pathname||`/`,t+=t.endsWith(`/`)?``:`/`),t+=this.baseURL),e&&(t+=t.endsWith(`/`)?``:`/`,t+=e.startsWith(`/`)?e.substring(1):e),t}async send(e,t){t=this.initSendOptions(e,t);let n=this.buildURL(e);if(this.beforeSend){let e=Object.assign({},await this.beforeSend(n,t));e.url!==void 0||e.options!==void 0?(n=e.url||n,t=e.options||t):Object.keys(e).length&&(t=e,console?.warn&&console.warn("Deprecated format of beforeSend return: please use `return { url, options }`, instead of `return options`."))}if(t.query!==void 0){let e=Ia(t.query);e&&(n+=(n.includes(`?`)?`&`:`?`)+e),delete t.query}return this.getHeader(t.headers,`Content-Type`)==`application/json`&&t.body&&typeof t.body!=`string`&&(t.body=JSON.stringify(t.body)),(t.fetch||fetch)(n,t).then((async e=>{let n={};try{n=await e.json()}catch{}if(this.afterSend&&(n=await this.afterSend(e,n,t)),e.status>=400)throw new ya({url:e.url,status:e.status,data:n});return n})).catch((e=>{throw new ya(e)}))}initSendOptions(e,t){if((t=Object.assign({method:`GET`},t)).body=function(e){if(typeof FormData>`u`||e===void 0||typeof e!=`object`||!e||Za(e)||!Qa(e))return e;let t=new FormData;for(let n in e){let r=e[n];if(r!==void 0)if(typeof r!=`object`||Qa({data:r})){let e=Array.isArray(r)?r:[r];for(let r of e)t.append(n,r)}else{let e={};e[n]=r,t.append(`@jsonPayload`,JSON.stringify(e))}}return t}(t.body),Fa(t),t.query=Object.assign({},t.params,t.query),t.requestKey===void 0&&(!1===t.$autoCancel||!1===t.query.$autoCancel?t.requestKey=null:(t.$cancelKey||t.query.$cancelKey)&&(t.requestKey=t.$cancelKey||t.query.$cancelKey)),delete t.$autoCancel,delete t.query.$autoCancel,delete t.$cancelKey,delete t.query.$cancelKey,this.getHeader(t.headers,`Content-Type`)!==null||Za(t.body)||(t.headers=Object.assign({},t.headers,{"Content-Type":`application/json`})),this.getHeader(t.headers,`Accept-Language`)===null&&(t.headers=Object.assign({},t.headers,{"Accept-Language":this.lang})),this.authStore.token&&this.getHeader(t.headers,`Authorization`)===null&&(t.headers=Object.assign({},t.headers,{Authorization:this.authStore.token})),this.enableAutoCancellation&&t.requestKey!==null){let n=t.requestKey||(t.method||`GET`)+e;delete t.requestKey,this.cancelRequest(n);let r=new AbortController;this.cancelControllers[n]=r,t.signal=r.signal}return t}getHeader(e,t){for(let n in e||={},t=t.toLowerCase(),e)if(n.toLowerCase()==t)return e[n];return null}};Ae();function io(e,t){if(e instanceof RegExp)return{keys:!1,pattern:e};var n,r,i,a,o=[],s=``,c=e.split(`/`);for(c[0]||c.shift();i=c.shift();)n=i[0],n===`*`?(o.push(`wild`),s+=`/(.*)`):n===`:`?(r=i.indexOf(`?`,1),a=i.indexOf(`.`,1),o.push(i.substring(1,~r?r:~a?a:i.length)),s+=~r&&!~a?`(?:/([^/]+?))?`:`/([^/]+?)`,~a&&(s+=(~r?`?`:``)+`\\`+i.substring(a))):s+=`/`+i;return{keys:o,pattern:RegExp(`^`+s+(t?`(?=$|/)`:`/?$`),`i`)}}function ao(){let e=window.location.href.indexOf(`#/`),t=e>-1?window.location.href.substr(e+1):`/`,n=t.indexOf(`?`),r=``;return n>-1&&(r=t.substr(n+1),t=t.substr(0,n)),{location:t,querystring:r}}const oo=Mi(null,function(e){e(ao());let t=()=>{e(ao())};return window.addEventListener(`hashchange`,t,!1),function(){window.removeEventListener(`hashchange`,t,!1)}}),so=Pi(oo,e=>e.location);Pi(oo,e=>e.querystring);const co=Ni(void 0);async function lo(e){if(!e||e.length<1||e.charAt(0)!=`/`&&e.indexOf(`#/`)!==0)throw Error(`Invalid parameter location`);await Kn(),history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=(e.charAt(0)==`#`?``:`#`)+e}async function uo(e){if(!e||e.length<1||e.charAt(0)!=`/`&&e.indexOf(`#/`)!==0)throw Error(`Invalid parameter location`);await Kn();let t=(e.charAt(0)==`#`?``:`#`)+e;try{let e={...history.state};delete e.__svelte_spa_router_scrollX,delete e.__svelte_spa_router_scrollY,window.history.replaceState(e,void 0,t)}catch{console.warn("Caught exception while replacing the current page. If you're running this in the Svelte REPL, please note that the `replace` method might not work in this environment.")}window.dispatchEvent(new Event(`hashchange`))}function fo(e){e?window.scrollTo(e.__svelte_spa_router_scrollX,e.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function po(e,t){A(t,!1);let n=Ui(t,`routes`,24,()=>({})),r=Ui(t,`prefix`,8,``),i=Ui(t,`restoreScrollState`,8,!1);class a{constructor(e,t){if(!t||typeof t!=`function`&&(typeof t!=`object`||t._sveltesparouter!==!0))throw Error(`Invalid component object`);if(!e||typeof e==`string`&&(e.length<1||e.charAt(0)!=`/`&&e.charAt(0)!=`*`)||typeof e==`object`&&!(e instanceof RegExp))throw Error(`Invalid value for "path" argument - strings must start with / or *`);let{pattern:n,keys:r}=io(e);this.path=e,typeof t==`object`&&t._sveltesparouter===!0?(this.component=t.component,this.conditions=t.conditions||[],this.userData=t.userData,this.props=t.props||{}):(this.component=()=>Promise.resolve(t),this.conditions=[],this.props={}),this._pattern=n,this._keys=r}match(e){if(r()){if(typeof r()==`string`)if(e.startsWith(r()))e=e.substr(r().length)||`/`;else return null;else if(r()instanceof RegExp){let t=e.match(r());if(t&&t[0])e=e.substr(t[0].length)||`/`;else return null}}let t=this._pattern.exec(e);if(t===null)return null;if(this._keys===!1)return t;let n={},i=0;for(;i<this._keys.length;){try{n[this._keys[i]]=decodeURIComponent(t[i+1]||``)||null}catch{n[this._keys[i]]=null}i++}return n}async checkConditions(e){for(let t=0;t<this.conditions.length;t++)if(!await this.conditions[t](e))return!1;return!0}}let o=[];n()instanceof Map?n().forEach((e,t)=>{o.push(new a(t,e))}):Object.keys(n()).forEach(e=>{o.push(new a(e,n()[e]))});let s=St(null),c=St(null),l=St({}),u=qi();async function d(e,t){await Kn(),u(e,t)}let f=null,p=null;i()&&(p=e=>{f=e.state&&(e.state.__svelte_spa_router_scrollY||e.state.__svelte_spa_router_scrollX)?e.state:null},window.addEventListener(`popstate`,p),Ji(()=>{fo(f)}));let m=null,h=null,g=oo.subscribe(async e=>{m=e;let t=0;for(;t<o.length;){let n=o[t].match(e.location);if(!n){t++;continue}let r={route:o[t].path,location:e.location,querystring:e.querystring,userData:o[t].userData,params:n&&typeof n==`object`&&Object.keys(n).length?n:null};if(!await o[t].checkConditions(r)){N(s,null),h=null,d(`conditionsFailed`,r);return}d(`routeLoading`,Object.assign({},r));let i=o[t].component;if(h!=i){i.loading?(N(s,i.loading),h=i,N(c,i.loadingParams),N(l,{}),d(`routeLoaded`,Object.assign({},r,{component:B(s),name:B(s).name,params:B(c)}))):(N(s,null),h=null);let t=await i();if(e!=m)return;N(s,t&&t.default||t),h=i}n&&typeof n==`object`&&Object.keys(n).length?N(c,n):N(c,null),N(l,o[t].props),d(`routeLoaded`,Object.assign({},r,{component:B(s),name:B(s).name,params:B(c)})).then(()=>{co.set(B(c))});return}N(s,null),h=null,co.set(void 0)});Gi(()=>{g(),p&&window.removeEventListener(`popstate`,p)}),nn(()=>Zn(i()),()=>{history.scrollRestoration=i()?`manual`:`auto`}),rn(),Ei();var _=H(),v=F(_),y=e=>{var n=H(),r=F(n);Lr(r,()=>B(s),(e,n)=>{n(e,J({get params(){return B(c)}},()=>B(l),{$$events:{routeEvent(e){ki.call(this,t,e)}}}))}),U(e,n)},b=e=>{var n=H(),r=F(n);Lr(r,()=>B(s),(e,n)=>{n(e,J(()=>B(l),{$$events:{routeEvent(e){ki.call(this,t,e)}}}))}),U(e,n)};Er(v,e=>{B(c)?e(y):e(b,!1)}),U(e,_),j()}let X=Dt({sidebarToggle:!1,appointments:[],homeNotification:!1,focusAppt:null});var mo=new Date;let Z=Dt({clientName:``,type:``,date:mo.getDate(),month:mo.getMonth(),year:mo.getFullYear(),notes:``}),Q=Dt({clientName:``,type:``,startHours:12,startMinutes:0,endHours:12,endMinutes:45,date:mo.getDate(),month:mo.getMonth(),year:mo.getFullYear(),notes:``,id:``}),ho=e=>{Q.clientName=e.clientName,Q.type=e.type,Q.startHours=Math.floor(e.time/60),Q.startMinutes=e.time%60,Q.endHours=Math.floor((e.time+e.duration)/60),Q.endMinutes=(e.time+e.duration)%60,Q.date=e.date,Q.month=e.month,Q.year=e.year,Q.notes=e.notes,Q.id=e.id,uo(`/apptView`)},$=Dt({name:`Default`,headerColor:`#f8f8f8`,textColor:`#c9c9c9`,mainColor:`#018d6c`,lightMainColor:`#00ad85ff`,dimMainColor:`#006e55ff`,grayColor:`#2f2f2f`,inputColor:`#006e5580`,bgColor:`#0f0f0f`,lightBgColor:`#181818`,lighterBgColor:`#232323`,lightestBgColor:`#2e2e2e`,fail:`#a52100`,index:0});const go=[{name:`Default`,type:`dark`,headerColor:`#f8f8f8`,textColor:`#c9c9c9`,mainColor:`#018d6c`,lightMainColor:`#00ad85ff`,dimMainColor:`#006e55ff`,grayColor:`#2f2f2f`,inputColor:`#006e5580`,bgColor:`#0f0f0f`,lightBgColor:`#181818`,lighterBgColor:`#232323`,lightestBgColor:`#2e2e2e`,fail:`#a52100`},{name:`Matcha`,type:`dark`,headerColor:`#e1e6f8ff`,textColor:`#cdd6f4`,mainColor:`#60995aff`,lightMainColor:`#7cca76ff`,dimMainColor:`#53884eff`,grayColor:`#313244`,inputColor:`#53884e80`,bgColor:`#1e1e2e`,lightBgColor:`#242436ff`,lighterBgColor:`#2e2e46ff`,lightestBgColor:`#393957ff`,fail:`#df6174ff`},{name:`Ocean`,type:`dark`,headerColor:`#f0f2fdff`,textColor:`#e3e7ffff`,mainColor:`#5966d6ff`,lightMainColor:`#7482f2ff`,dimMainColor:`#4a56b3ff`,grayColor:`#2e2f44ff`,inputColor:`#4a56b380`,bgColor:`#191a2c`,lightBgColor:`#202136ff`,lighterBgColor:`#2b2c46ff`,lightestBgColor:`#383a5eff`,fail:`#d94f5cff`},{name:`Sunset`,type:`dark`,headerColor:`#fffdfbff`,textColor:`#ffeedd`,mainColor:`#ff7f50ff`,lightMainColor:`#ff9e70ff`,dimMainColor:`#e36b44ff`,grayColor:`#403b3dff`,inputColor:`#e36b4480`,bgColor:`#1b1b24`,lightBgColor:`#232330ff`,lighterBgColor:`#2d2d3bff`,lightestBgColor:`#3f3f57ff`,fail:`#bb0a0aff`},{name:`Regal`,type:`dark`,headerColor:`#e9e1f8ff`,textColor:`#d5cdeaff`,mainColor:`#a678dfff`,lightMainColor:`#c29cf2ff`,dimMainColor:`#8a5fd1ff`,grayColor:`#343046ff`,inputColor:`#8a5fd180`,bgColor:`#1d1a26ff`,lightBgColor:`#242032ff`,lighterBgColor:`#2b263fff`,lightestBgColor:`#332e4cff`,fail:`#df6174ff`},{name:`Forest`,type:`dark`,headerColor:`#e4f2e1ff`,textColor:`#d2e8d0ff`,mainColor:`#5aa469ff`,lightMainColor:`#74c282ff`,dimMainColor:`#4b8f59ff`,grayColor:`#2f3b33ff`,inputColor:`#5aa46980`,bgColor:`#1c241eff`,lightBgColor:`#232c25ff`,lighterBgColor:`#29352dff`,lightestBgColor:`#313f37ff`,fail:`#df6174ff`},{name:`Light`,type:`light`,headerColor:`#020202`,textColor:`#080808`,mainColor:`#018d6c`,lightMainColor:`#00ad85`,dimMainColor:`#006e55`,grayColor:`#2f2f2f`,inputColor:`#006e5580`,bgColor:`#f8f8f8`,lightBgColor:`#e8e8e8`,lighterBgColor:`#dedede`,lightestBgColor:`#d1d1d1ff`,fail:`#a52100`},{name:`Sandstone`,type:`light`,headerColor:`#1d1b18ff`,textColor:`#2d2925`,mainColor:`#d2a679ff`,lightMainColor:`#e6bf95ff`,dimMainColor:`#b8906aff`,grayColor:`#dad4cfff`,inputColor:`#b8906a80`,bgColor:`#fdfaf6`,lightBgColor:`#f6f0ebff`,lighterBgColor:`#ece2daff`,lightestBgColor:`#d3b59fff`,fail:`#ff0000ff`},{name:`Skyline`,type:`light`,headerColor:`#0a1a2fff`,textColor:`#14213d`,mainColor:`#0077b6`,lightMainColor:`#00b4d8`,dimMainColor:`#005f8a`,grayColor:`#b0c4de`,inputColor:`#0077b680`,bgColor:`#d6dce2ff`,lightBgColor:`#beccd6ff`,lighterBgColor:`#99afc2ff`,lightestBgColor:`#8fb2c9ff`,fail:`#d62828ff`},{name:`Peach`,type:`light`,headerColor:`#3d0c02ff`,textColor:`#432818`,mainColor:`#f9844a`,lightMainColor:`#f6aa1c`,dimMainColor:`#e36414`,grayColor:`#c9b5aaff`,inputColor:`#e3641480`,bgColor:`#fff5ec`,lightBgColor:`#ffebd8`,lighterBgColor:`#fde2c8`,lightestBgColor:`#f9d8b6`,fail:`#db0028ff`},{name:`Mint`,type:`light`,headerColor:`#1a2e1aff`,textColor:`#243424`,mainColor:`#5bb98c`,lightMainColor:`#84d9ab`,dimMainColor:`#449970`,grayColor:`#cfd8d3ff`,inputColor:`#5bb98c80`,bgColor:`#f4fff9`,lightBgColor:`#e7f8ef`,lighterBgColor:`#d9efe4`,lightestBgColor:`#cce6d8`,fail:`#d81e1eff`}];var _o=`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-=!@#$%^&*()_+\`~,./<>?;':"[]{}\\|`;const vo=()=>{let e=``;for(let t=0;t<10;t++)e+=_o[wo(0,94)];return e};let yo=Dt({clock24hr:!1,animations:!0,notifications:!0});const bo=()=>{let e={clock24hr:yo.clock24hr,animations:yo.animations,notifications:yo.notifications,colorIndex:$.index};localStorage.setItem(`settings`,JSON.stringify(e))},xo=async()=>{let e=JSON.parse(await localStorage.getItem(`settings`));if(e==null){console.log(`No Settings :(`);return}yo.clock24hr=e.clock24hr,yo.animations=e.animations,yo.notifications=e.notifications,$.index=e.colorIndex,So(go[e.colorIndex],$.index)},So=(e,t)=>{$.name=e.name,$.headerColor=e.headerColor,$.textColor=e.textColor,$.mainColor=e.mainColor,$.lightMainColor=e.lightMainColor,$.dimMainColor=e.dimMainColor,$.grayColor=e.grayColor,$.inputColor=e.inputColor,$.bgColor=e.bgColor,$.lightBgColor=e.lightBgColor,$.lighterBgColor=e.lighterBgColor,$.lightestBgColor=e.lightestBgColor,$.fail=e.fail,$.index=t,bo()},Co=e=>{let t=Math.floor(Math.random()*e.length);return e[t]},wo=(e,t)=>Math.floor(Math.random()*(t-e+1)+e),To=e=>{let t=(new Date(e.year,e.month,e.date,Math.floor(e.time/60),e.time%60)-new Date)/6e4,n=t/1440,r=t/60,i=t%60;return t+e.duration<0?(X.homeNotification=!0,`Done`):n>=1?Math.floor(n)==1?`In 1 Day`:`In ${Math.floor(n)} Days`:r>=1?Math.ceil(r)==1?i>1?`In ${Math.floor(r)} Hour, ${Math.floor(i)} Minutes`:Math.ceil(i)==1?`In ${Math.floor(r)} Hour, 1 Minute`:`In ${Math.floor(r)} Hour`:i>1?`In ${Math.floor(r)} Hours, ${Math.floor(i)} Minutes`:Math.ceil(i)==1?`In ${Math.floor(r)} Hours, 1 Minute`:`In ${Math.floor(r)} Hours`:i>0?i>2?`In ${Math.ceil(i)} Minutes`:`In ${Math.ceil(i)} Minute`:`For ${Math.floor(i+e.duration)} More Minutes`};let Eo=Dt([]);const Do=e=>{let t=Eo.indexOf(e);Eo.splice(t,1)},Oo=(e,t,n,r)=>{if(!yo.notifications)return;let i={type:e,content:t,icon:r,id:vo()};Eo.push(i),setTimeout(()=>{Do(i)},n)},ko=new ro(`https://georgeeggers.xyz`);var Ao=(e,t,n)=>new Date(n,e-1,t).getDay();const jo=async()=>{for(let e of X.appointments)e.timeUntil==`Done`&&await ko.collection(`appointments`).delete(e.id);Oo(`success`,`Expired appointments deleted!`,5e3,ta),await Mo()},Mo=async()=>{X.appointments=[],await Po();for(let e of X.appointments)e.timeUntil=To(e)},No=e=>{let[t,n]=e.startTime.split(` `),[r,i,a]=t.split(`-`),[o,s,c]=n.split(`:`),l=parseInt(o)*60+parseInt(s);return{clientName:e.clientName,type:e.type,time:l,day:Ao(i,a,r),date:parseInt(a),month:parseInt(i)-1,year:parseInt(r),duration:e.duration,timeUntil:``,notes:e.notes,id:e.id}},Po=async()=>{let e=await ko.collection(`appointments`).getFullList({sort:`-created`});for(let t of e)X.appointments.push(No(t))};var Fo=V(`<div class="headerRow svelte-l9fi92"><h1>Upcoming</h1></div>`),Io=V(`<div class="error"><h1> <!></h1> <p>No appointments listed. Try refreshing, or scheduling a new appointment</p></div>`),Lo=V(`<label for="deleteDone" class="deleteButton svelte-l9fi92"><!> <p class="svelte-l9fi92">Delete Completed Appointments</p></label> <button class="invis" id="deleteDone">Delete Done</button>`,1),Ro=V(`<div class="item svelte-l9fi92"><p style="font-size: 16px;" class="svelte-l9fi92"> </p></div>`),zo=(e,t)=>ho(B(t)),Bo=V(`<label class="appointment svelte-l9fi92"><div class="appointmentHeader svelte-l9fi92"><h1 class="svelte-l9fi92"><!> </h1> <h1 class="svelte-l9fi92"> </h1></div> <div class="info svelte-l9fi92"><div class="item svelte-l9fi92"><!> <p class="svelte-l9fi92"> </p></div> <div class="item svelte-l9fi92"><!> <p class="svelte-l9fi92"> </p></div> <div class="item svelte-l9fi92"><!> <p class="svelte-l9fi92"> </p></div> <!></div></label> <button class="invis"></button>`,1),Vo=V(`<h1>No appointment matches your search</h1>`),Ho=V(`<div class="search svelte-l9fi92"><!> <input type="text" placeholder="Search for appointment..." class="svelte-l9fi92"/></div> <!> <!>`,1),Uo=V(`<div class="main svelte-l9fi92"><div class="mainContainer svelte-l9fi92"><!> <div class="upcoming svelte-l9fi92"><!></div></div></div>`);function Wo(e,t){A(t,!0);let n=[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`],r=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],i=e=>e%10==1&&e!=11?`st`:e%10==2&&e!=12?`nd`:e%10==3&&e!=13?`rd`:`th`,a=e=>`${r[e.month]} ${e.date}${i(e.date)}, ${e.year}`,o=xt(``),s=e=>{let t=e.clientName.toLowerCase(),i=e.type.toLowerCase(),a=n[e.day].toLowerCase(),s=r[e.month].toLowerCase(),c=e.notes;for(let e of B(o).split(` `).filter(Boolean)){let n=e.toLowerCase();if(!(t.includes(n)||i.includes(n)||a.includes(n)||s.includes(n)||c.includes(n)))return!1}return B(o),!0},c=pt(()=>X.appointments.filter(e=>s(e)).toSorted((e,t)=>{let n=new Date(e.year,e.month,e.date,Math.floor(e.time/60),e.time%60),r=new Date(t.year,t.month,t.date,Math.floor(t.time/60),t.time%60),i=new Date,a=n-i,o=r-i;return a>o?1:a<o?-1:0})),l=e=>{let t=n[e.day]+` from `,r=Math.floor(e.time/60),i=e.time%60,a=Math.floor((e.time+e.duration)/60),o=(e.time+e.duration)%60;return yo.clock24hr?(t+=`${r}:${i<10?`0${i}`:i} to `,t+=`${a}:${o<10?`0${o}`:o}`):(r>12&&(r-=12),a>12&&(a-=12),t+=`${r}:${i<10?`0${i}`:i} to `,t+=`${a}:${o<10?`0${o}`:o}`),t},u=pt(()=>{for(let e of X.appointments)if(e.timeUntil==`Done`)return!0;return!1});var d=Uo(),f=P(d),p=P(f),m=e=>{var t=Fo();U(e,t)},h=e=>{var t=Io(),n=P(t),r=P(n),i=I(r);ca(i,{size:30}),O(n),Ce(2),O(t),L(e=>W(r,`${e??``}... `),[()=>Co([`Zoinks`,`Uh Oh`,`Yikes`,`Oops`,`Gee Whiz`,`Jinkies`,`Jeepers`])]),U(e,t)};Er(p,e=>{X.appointments.length==0?e(h,!1):e(m)});var g=I(p,2),_=P(g),v=e=>{var t=Ho(),n=F(t),r=P(n);ma(r,{size:20});var i=I(r,2);ii(i),O(n);var s=I(n,2),d=e=>{var t=Lo(),n=F(t),r=P(n);_a(r,{size:20}),Ce(2),O(n);var i=I(n,2);i.__click=function(...e){jo?.apply(this,e)},U(e,t)};Er(s,e=>{B(u)&&e(d)});var f=I(s,2),p=e=>{var t=H(),n=F(t);jr(n,17,()=>B(c),kr,(e,t,n)=>{var r=Bo(),i=F(r);K(i,`for`,`view${n}`);var o=P(i),s=P(o),c=P(s);va(c,{size:24});var u=I(c);O(s);var d=I(s,2),f=P(d,!0);O(d),O(o);var p=I(o,2),m=P(p),h=P(m);ua(h,{size:18});var g=I(h,2),_=P(g,!0);O(g),O(m);var v=I(m,2),y=P(v);sa(y,{size:18});var b=I(y,2),x=P(b,!0);O(b),O(v);var S=I(v,2),C=P(S);Qi(C,{size:18});var ee=I(C,2),te=P(ee,!0);O(ee),O(S);var ne=I(S,2),re=e=>{var n=Ro(),r=P(n),i=P(r,!0);O(r),O(n),L(()=>W(i,B(t).notes)),U(e,n)};Er(ne,e=>{B(t).notes.length>=1&&e(re)}),O(p),O(i);var w=I(i,2);w.__click=[zo,t],K(w,`id`,`view${n}`),w.textContent=`View ${n}`,L((e,n,r)=>{W(u,` ${B(t).clientName??``}`),Xr(d,e),W(f,B(t).timeUntil),W(_,B(t).type),W(x,n),W(te,r)},[()=>B(t).timeUntil.includes(`For`)?`color: var(--main-color);`:B(t).timeUntil==`Done`?`color: var(--fail-color);`:``,()=>l(B(t)),()=>a(B(t))]),U(e,r)}),U(e,t)},m=e=>{var t=Vo();U(e,t)};Er(f,e=>{B(c).length>0?e(p):e(m,!1)}),xi(i,()=>B(o),e=>N(o,e)),U(e,t)};Er(_,e=>{X.appointments.length!=0&&e(v)}),O(g),O(f),O(d),U(e,d),j()}fr([`click`]);var Go=Oi(()=>yo),Ko=V(`<div class="main svelte-1xel5aa"><div class="headerRow"><h1>Settings</h1></div> <div class="settingsMenu svelte-1xel5aa"><div class="row svelte-1xel5aa"><div class="text svelte-1xel5aa"><p class="header svelte-1xel5aa">24 Hour Times</p> <p class="content svelte-1xel5aa">Toggle the times to display in military time or standard time</p></div> <label for="toggleClock"><div></div></label> <button id="toggleClock" class="invis">Toggle 24HR Time</button></div> <div class="row svelte-1xel5aa"><div class="text svelte-1xel5aa"><p class="header svelte-1xel5aa">Animations</p> <p class="content svelte-1xel5aa">Controls animations across the app</p></div> <label for="toggleAnim"><div></div></label> <button id="toggleAnim" class="invis">Toggle Animations</button></div> <div class="row svelte-1xel5aa"><div class="text svelte-1xel5aa"><p class="header svelte-1xel5aa">Notifications</p> <p class="content svelte-1xel5aa">Controls all popup and push notifications</p></div> <label for="toggleNotif"><div></div></label> <button id="toggleNotif" class="invis">Toggle Notifications</button></div></div></div>`);function qo(e,t){A(t,!1),Ei();var n=Ko(),r=I(P(n),2),i=P(r),a=I(P(i),2),o=P(a);O(a);var s=I(a,2);s.__click=()=>{Go(Go().clock24hr=!Go().clock24hr),bo()},O(i);var c=I(i,2),l=I(P(c),2),u=P(l);O(l);var d=I(l,2);d.__click=()=>{Go(Go().animations=!Go().animations),bo()},O(c);var f=I(c,2),p=I(P(f),2),m=P(p);O(p);var h=I(p,2);h.__click=()=>{Go(Go().notifications=!Go().notifications),bo()},O(f),O(r),O(n),L(()=>{Jr(a,1,`toggle ${Go().animations?`anims`:``}`,`svelte-1xel5aa`),Xr(a,Go().clock24hr?`background-color: var(--main-color);`:`background-color: var(--lighter-bg-color);`),Jr(o,1,`toggleBody ${Go().animations?`anims`:``}`,`svelte-1xel5aa`),Xr(o,Go().clock24hr?`left: calc(100% - 25px);`:`left: 5px;`),Jr(l,1,`toggle ${Go().animations?`anims`:``}`,`svelte-1xel5aa`),Xr(l,Go().animations?`background-color: var(--main-color);`:`background-color: var(--lighter-bg-color);`),Jr(u,1,`toggleBody ${Go().animations?`anims`:``}`,`svelte-1xel5aa`),Xr(u,Go().animations?`left: calc(100% - 25px);`:`left: 5px;`),Jr(p,1,`toggle ${Go().animations?`anims`:``}`,`svelte-1xel5aa`),Xr(p,Go().notifications?`background-color: var(--main-color);`:`background-color: var(--lighter-bg-color);`),Jr(m,1,`toggleBody ${Go().animations?`anims`:``}`,`svelte-1xel5aa`),Xr(m,Go().notifications?`left: calc(100% - 25px);`:`left: 5px;`)}),U(e,n),j()}fr([`click`]);var Jo=V(`<div class="calItem svelte-llck0d" style="min-height: 0px; padding-bottom: 20px; justify-content: center; display: flex;"><p style="font-weight: bold; font-size: 22px;" class="svelte-llck0d"> </p></div>`),Yo=V(`<div class="appt svelte-llck0d"><div class="dot svelte-llck0d"></div> <p class="text svelte-llck0d"> </p></div>`),Xo=V(`<button class="invis svelte-llck0d"></button> <div class="calInfo svelte-llck0d" style="font-weight: bold;"><div class="infoDot svelte-llck0d"><p class="svelte-llck0d"> </p></div></div> <div class="calData svelte-llck0d"></div>`,1),Zo=V(`<label><!></label>`),Qo=V(`<div class="calRow svelte-llck0d"></div>`),$o=V(`<div class="headerRow"><h1> </h1></div> <div class="calRow svelte-llck0d" style="border-top: none;"></div> <!>`,1),es=V(`<div class="calendar svelte-llck0d"></div>`),ts=V(`<div class="main" id="bleh"><!> <div id="loadMore" class="svelte-llck0d"></div></div>`);function ns(e,t){A(t,!0);let n=new Date,r=Dt(n.getFullYear()),i=Dt(n.getDate()),a=Dt(n.getMonth()),o=xt(1),s=(e,t)=>new Date(t,e+1,0).getDate(),c=(e,t)=>new Date(t,e,1).getDay(),l=pt(()=>s(a,r)),u=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],d=Dt({data:[]}),f=xt(null),p=xt(!1);Wi(async()=>{await Kn(),m(a,r),new IntersectionObserver(e=>{e.forEach(e=>{N(p,e.isIntersecting,!0)})},{root:document.getElementById(`bleh`)}).observe(B(f))});let m=(e,t)=>{let n=[],r=c(e,t);for(let e=0;e<r;e++)n.push({date:-1,appt:[],display:!1});for(let r=0;r<s(e,t);r++)n.push({date:r+1,appt:[],display:!0});for(let i of X.appointments)i.month==e&&i.year==t&&n[i.date-1+r].appt.push(i);let i=(B(l)+r)%7;for(let e=0;e<7-i;e++)n.push({date:-1,appt:[],display:!1});d.data.push(n)},h=xt(!1);Zt(()=>{B(p)&&(B(h)||(N(h,!0),m((a+B(o))%12,r+Math.floor((B(o)+a)/12)),wt(o),setTimeout(()=>{N(h,!1)},25)))});let g=(e,t,n)=>{if(e.appt.length==0){Z.month=t,console.log(e),Z.date=e.date,uo(`/new`);return}X.focusAppt=e,X.focusAppt.month=u[t],X.focusAppt.day=n,lo(`/calendar/focus`)};var _=ts(),v=P(_),y=e=>{var t=es();jr(t,21,()=>({length:B(o)}),kr,(e,t,n)=>{var o=$o(),l=F(o),f=P(l),p=P(f);O(f),O(l);var m=I(l,2);jr(m,20,()=>[`S`,`M`,`T`,`W`,`T`,`F`,`S`],kr,(e,t)=>{var n=Jo(),r=P(n),i=P(r,!0);O(r),O(n),L(()=>W(i,t)),U(e,n)}),O(m);var h=I(m,2);jr(h,17,()=>({length:Math.ceil((s((a+n)%12,r+Math.floor((n+a)/12))+c((a+n)%12,r+Math.floor((n+a)/12)))/7)}),kr,(e,t,r,o)=>{var s=Qo();jr(s,21,()=>d.data[n].slice(r*7,r*7+7),kr,(e,t,o)=>{var s=Zo();K(s,`for`,`p${n}a${r}l${o}`);var c=P(s),l=e=>{var s=Xo(),c=F(s);K(c,`id`,`p${n}a${r}l${o}`),c.__click=()=>g(B(t),(a+n)%12,o),c.textContent=`p${n}a${r}`;var l=I(c,2),u=P(l),d=P(u),f=P(d,!0);O(d),O(u),O(l);var p=I(l,2);jr(p,21,()=>B(t).appt.toSorted((e,t)=>{let n=new Date(e.year,e.month,e.date,Math.floor(e.time/60),e.time%60),r=new Date(t.year,t.month,t.date,Math.floor(t.time/60),t.time%60),i=new Date,a=n-i,o=r-i;return a>o?1:a<o?-1:0}),kr,(e,t)=>{var n=Yo(),r=P(n),i=I(r,2),a=P(i,!0);O(i),O(n),L(e=>{Xr(r,e),W(a,B(t).clientName)},[()=>B(t).timeUntil.includes(`For`)?`background-color: var(--main-color);`:B(t).timeUntil==`Done`?`background-color: var(--fail-color);`:``]),U(e,n)}),O(p),L(()=>{Xr(u,B(t).date==i&&n==0?`background-color: var(--main-color);`:``),W(f,B(t).date)}),U(e,s)};Er(c,e=>{B(t).display&&e(l)}),O(s),L(()=>Jr(s,1,`calItem ${B(t).display?`highlight`:``}`,`svelte-llck0d`)),U(e,s)}),O(s),U(e,s)}),L(e=>W(p,`${u[(a+n)%12]??``} ${e??``}`),[()=>r+Math.floor((n+a)/12)]),U(e,o)}),O(t),U(e,t)};Er(v,e=>{d.data.length!=0&&e(y)});var b=I(v,2);Ti(b,e=>N(f,e),()=>B(f)),O(_),U(e,_),j()}fr([`click`]);var rs=V(`<h3 class="svelte-1pa29vf"> </h3> <h4 class="svelte-1pa29vf"> </h4>`,1),os=V(`<div class="apptInfo svelte-1pa29vf"><div class="icon svelte-1pa29vf"><!></div> <p class="apptTime svelte-1pa29vf"> </p></div>`),ss=(e,t)=>ho(B(t)),cs=V(`<label class="appt svelte-1pa29vf"><p class="apptHeader svelte-1pa29vf"> </p> <!></label> <button class="invis">View appointment</button>`,1),ls=V(`<div class="row svelte-1pa29vf"></div>`),us=V(`<div class="headerRow"><h1> </h1></div> <div class="timeDisplay svelte-1pa29vf"><div class="timeRow svelte-1pa29vf"></div> <div class="apptArea svelte-1pa29vf"><!> <!></div></div>`,1),ds=V(`<div class="error"><h1> <!></h1> <p>Something went wrong... <a href="/#/">Go back</a> to the main page</p></div>`),fs=V(`<div class="main" id="main"><!></div>`);function ps(e,t){A(t,!0);let n=e=>{let t=[],n=0,r=0;for(let i of e){let e=!0;for(let n of t)if(i.time>=n.time&&i.time<=n.time+n.maxSize+0){n.data.push(i),i.duration>n.maxSize&&(n.maxSize=i.duration),e=!1;break}e&&(i.time>n?r=0:r++,t.push({time:i.time,data:[i],offset:r,maxSize:i.duration})),i.time+i.duration>n&&(n=i.time+i.duration)}return t},r=pt(()=>n(X.focusAppt.appt.toSorted((e,t)=>e.time<t.time?-1:e.time>t.time?1:0))),i=e=>e%10==1?`st`:e%10!=2&&e%10==3?`rd`:`th`,a=e=>{let t=``,n=Math.floor(e.time/60),r=e.time%60,i=Math.floor((e.time+e.duration)/60),a=(e.time+e.duration)%60;return yo.clock24hr?(t+=`${n}:${r<10?`0${r}`:r} - `,t+=`${i}:${a<10?`0${a}`:a}`):(n>12&&(n-=12),i>12&&(i-=12),t+=`${n}:${r<10?`0${r}`:r} - `,t+=`${i}:${a<10?`0${a}`:a}`),t},o=e=>{let t=``,n=Math.floor(e/60),r=e%60;return yo.clock24hr||n>12&&(n-=12),t+=`${n}:${r<10?`0${r}`:r}`,t};Wi(()=>{let e=1e4;for(let t of B(r)){let n=t.time/1440*100;n<e&&(e=n)}if(e+=10,e>0){let t=document.getElementById(`main`);t.scrollTop=e/100*(t.scrollHeight-t.clientHeight)}});var s=fs(),c=P(s),l=e=>{var t=us(),n=F(t),s=P(n),c=P(s);O(s),O(n);var l=I(n,2),u=P(l);jr(u,20,()=>({length:24}),kr,(e,t,n)=>{var r=rs(),i=F(r),a=P(i,!0);O(i);var s=I(i,2),c=P(s,!0);O(s),L((e,t)=>{W(a,e),W(c,t)},[()=>o(n*60),()=>o(n*60+30)]),U(e,r)}),O(u);var d=I(u,2),f=P(d);jr(f,17,()=>B(r),kr,(e,t,n)=>{var r=H(),i=F(r);jr(i,17,()=>B(t).data,kr,(e,r,i)=>{let o=pt(()=>B(r).time/1440*100),s=pt(()=>B(r).duration/1440*100),c=pt(()=>100/B(t).data.length);var l=cs(),u=F(l);K(u,`for`,`r${n}a${i}`);var d=P(u),f=P(d,!0);O(d);var p=I(d,2),m=e=>{var t=os(),n=P(t),i=P(n);sa(i,{size:18}),O(n);var o=I(n,2),s=P(o,!0);O(o),O(t),L(e=>W(s,e),[()=>a(B(r))]),U(e,t)};Er(p,e=>{B(r).duration>=45&&e(m)}),O(u);var h=I(u,2);K(h,`id`,`r${n}a${i}`),h.__click=[ss,r],L(()=>{Xr(u,`z-index: ${n}; top: ${B(o)??``}%; left: calc(${B(c)*i}% + ${B(t).offset*12}px - ${B(t).offset*12/B(t).data.length*i}px + 10px); height: ${B(s)??``}%; width: calc(${B(c)??``}%  - ${B(t).offset*12/B(t).data.length}px - 10px);`),W(f,B(r).clientName)}),U(e,l)}),U(e,r)});var p=I(f,2);jr(p,16,()=>({length:48}),kr,(e,t)=>{var n=ls();U(e,n)}),O(d),O(l),L(e=>W(c,`${X.focusAppt.month??``} ${X.focusAppt.date??``}${e??``}`),[()=>i(X.focusAppt.date)]),U(e,t)},u=e=>{var t=ds(),n=P(t),r=P(n),i=I(r);ca(i,{size:30}),O(n),Ce(2),O(t),L(e=>W(r,`${e??``}... `),[()=>Co([`Zoinks`,`Uh Oh`,`Yikes`,`Oops`,`Gee Whiz`,`Jinkies`,`Jeepers`])]),U(e,t)};Er(c,e=>{X.focusAppt?e(l):e(u,!1)}),O(s),U(e,s),j()}fr([`click`]);var ms=V(`<label><!> <div class="textContainer svelte-1trli7c"><p1 class="modelName"> </p1> <div class="inline svelte-1trli7c"><div class="styleExample svelte-1trli7c"></div> <div class="styleExample svelte-1trli7c"></div> <div class="styleExample svelte-1trli7c"></div> <div class="styleExample svelte-1trli7c"></div></div></div> <button class="invis">Load Theme</button></label>`),hs=V(`<div class="main svelte-1trli7c"><div class="headerRow"><h1>Theme</h1></div> <div class="menu svelte-1trli7c"></div></div>`);function gs(e,t){A(t,!1),Ei();var n=hs(),r=I(P(n),2);jr(r,5,()=>go,kr,(e,t,n)=>{var r=ms();K(r,`for`,`chooseTheme${n}`);var i=P(r),a=e=>{ga(e,{size:24})},o=e=>{fa(e,{size:24})};Er(i,e=>{B(t).type==`light`?e(a):e(o,!1)});var s=I(i,2),c=P(s),l=P(c,!0);O(c);var u=I(c,2),d=P(u),f=I(d,2),p=I(f,2),m=I(p,2);O(u),O(s);var h=I(s,2);K(h,`id`,`chooseTheme${n}`),h.__click=()=>So(B(t),n),O(r),L(()=>{Jr(r,1,`modelCard themeCard ${$.name==B(t).name?`selected`:``}`,`svelte-1trli7c`),W(l,B(t).name),Xr(d,`background-color: ${B(t).mainColor??``}; border: 2px solid ${B(t).textColor??``} !important;`),Xr(f,`background-color: ${B(t).dimMainColor??``}; border: 2px solid ${B(t).textColor??``} !important;`),Xr(p,`background-color: ${B(t).bgColor??``}; border: 2px solid ${B(t).textColor??``} !important;`),Xr(m,`background-color: ${B(t).inputColor??``}; border: 2px solid ${B(t).textColor??``} !important;`)}),U(e,r)}),O(r),O(n),U(e,n),j()}fr([`click`]);var _s=V(`<div class="main"><div class="error"><h1> <!></h1> <p>Page not found... <a href="/#/">Go back</a> to the main page</p></div></div>`);function vs(e,t){A(t,!1),Ei();var n=_s(),r=P(n),i=P(r),a=P(i),o=I(a);ca(o,{size:30}),O(i),Ce(2),O(r),O(n),L(e=>W(a,`${e??``}... `),[()=>Co([`Zoinks`,`Uh Oh`,`Yikes`,`Oops`,`Gee Whiz`,`Jinkies`,`Jeepers`])]),U(e,n),j()}var ys=e=>e;function bs(e){let t=e-1;return t*t*t+1}function xs(e){let t=typeof e==`string`&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||`px`]:[e,`px`]}function Ss(e,{delay:t=0,duration:n=400,easing:r=ys}={}){let i=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:r,css:e=>`opacity: ${e*i}`}}function Cs(e,{delay:t=0,duration:n=400,easing:r=bs,x:i=0,y:a=0,opacity:o=0}={}){let s=getComputedStyle(e),c=+s.opacity,l=s.transform===`none`?``:s.transform,u=c*(1-o),[d,f]=xs(i),[p,m]=xs(a);return{delay:t,duration:n,easing:r,css:(e,t)=>`
			transform: ${l} translate(${(1-e)*d}${f}, ${(1-e)*p}${m});
			opacity: ${c-u*t}`}}function ws(e,{delay:t=0,duration:n=400,easing:r=bs,axis:i=`y`}={}){let a=getComputedStyle(e),o=+a.opacity,s=i===`y`?`height`:`width`,c=parseFloat(a[s]),l=i===`y`?[`top`,`bottom`]:[`left`,`right`],u=l.map(e=>`${e[0].toUpperCase()}${e.slice(1)}`),d=parseFloat(a[`padding${u[0]}`]),f=parseFloat(a[`padding${u[1]}`]),p=parseFloat(a[`margin${u[0]}`]),m=parseFloat(a[`margin${u[1]}`]),h=parseFloat(a[`border${u[0]}Width`]),g=parseFloat(a[`border${u[1]}Width`]);return{delay:t,duration:n,easing:r,css:e=>`overflow: hidden;opacity: ${Math.min(e*20,1)*o};${s}: ${e*c}px;padding-${l[0]}: ${e*d}px;padding-${l[1]}: ${e*f}px;margin-${l[0]}: ${e*p}px;margin-${l[1]}: ${e*m}px;border-${l[0]}-width: ${e*h}px;border-${l[1]}-width: ${e*g}px;min-${s}: 0`}}var Ts=(e,t)=>t(-1),Es=(e,t)=>t(1),Ds=(e,t,n)=>{t(B(n))},Os=V(`<button class="invis svelte-iqhn23">Select</button>`),ks=V(`<label><p class="svelte-iqhn23"> </p></label> <!>`,1),As=V(`<div class="calRow svelte-iqhn23"></div>`),js=V(`<div class="main svelte-iqhn23"><div class="topRow svelte-iqhn23"><div class="monthSelector svelte-iqhn23"><label class="arrowPicker svelte-iqhn23" for="leftMonth"><!></label> <button id="leftMonth" class="invis svelte-iqhn23">Go Left</button> <p class="svelte-iqhn23"> </p> <label class="arrowPicker svelte-iqhn23" for="rightMonth"><!></label> <button id="rightMonth" class="invis svelte-iqhn23">Go Right</button></div> <div class="yearSelector svelte-iqhn23"><input type="text" class="svelte-iqhn23"/></div></div> <div class="calendar svelte-iqhn23"><!></div></div>`);function Ms(e,t){A(t,!1);let n=Ui(t,`month`,12),r=Ui(t,`year`,12),i=Ui(t,`date`,12),a=(e,t)=>new Date(t,e+1,0).getDate(),o=(e,t)=>{let n=a(e,t),r=s(e,t),i=Math.ceil((r+n)/7),o=i*7-(r+n),c=[];for(let e=0;e<r;e++)c.push(-1);for(let e=0;e<n;e++)c.push(e+1);for(let e=0;e<o;e++)c.push(-1);return{rows:i,data:c}},s=(e,t)=>new Date(t,e,1).getDay(),c=e=>{i(1),n((12+n()+e)%12)},l=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`];Ei();var u=js(),d=P(u),f=P(d),p=P(f),m=P(p);na(m,{size:22}),O(p);var h=I(p,2);h.__click=[Ts,c];var g=I(h,2),_=P(g,!0);O(g);var v=I(g,2),y=P(v);ra(y,{size:22}),O(v);var b=I(v,2);b.__click=[Es,c],O(f);var x=I(f,2),S=P(x);ii(S),O(x),O(d);var C=I(d,2),ee=P(C),te=e=>{let t=mt(()=>(Zn(n()),Zn(r()),Jn(()=>o(n(),r()))));var a=H(),s=F(a);jr(s,1,()=>(Zn(B(t)),Jn(()=>({length:B(t).rows}))),kr,(e,n,r)=>{var a=As();jr(a,4,()=>({length:7}),kr,(e,n,a,o)=>{let s=mt(()=>(Zn(B(t)),Jn(()=>B(t).data[r*7+a])));var c=ks(),l=F(c),u=P(l),d=P(u,!0);O(u),O(l);var f=I(l,2),p=e=>{var t=Os();t.__click=[Ds,i,s],L(()=>K(t,`id`,`select${B(s)??``}`)),U(e,t)};Er(f,e=>{B(s)!=-1&&e(p)}),L(()=>{Jr(l,1,`date ${B(s)==-1?``:`selectable`}`,`svelte-iqhn23`),Xr(l,i()==B(s)?`background-color: var(--main-color);`:``),K(l,`for`,`select${B(s)??``}`),Xr(u,B(s)==-1?`opacity: 0.5;`:``),W(d,B(s)==-1?`-`:B(s))}),U(e,c)}),O(a),U(e,a)}),U(e,a)};Er(ee,e=>{n()!=null&&r()!=null&&e(te)}),O(C),O(u),L(()=>W(_,(Zn(n()),Jn(()=>l[n()])))),xi(S,r),yi(3,u,()=>ws,()=>({duration:yo.animations?500:0})),U(e,u),j()}fr([`click`]);var Ns=(e,t)=>t(-1),Ps=(e,t)=>t(1),Fs=(e,t)=>t(-5),Is=(e,t)=>t(5),Ls=V(`<div class="timePicker svelte-1ea1iw"><label class="arrowPicker svelte-1ea1iw"><!></label> <p class="svelte-1ea1iw"> </p> <label class="arrowPicker svelte-1ea1iw"><!></label> <button class="invis">Left Hour</button> <button class="invis">Right Hour</button> <p class="svelte-1ea1iw">:</p> <label class="arrowPicker svelte-1ea1iw"><!></label> <p class="svelte-1ea1iw"> </p> <label class="arrowPicker svelte-1ea1iw"><!></label> <button class="invis">Left Min</button> <button class="invis">Right Min</button></div>`);function Rs(e,t){A(t,!1);let n=Ui(t,`minutes`,12),r=Ui(t,`hours`,12),i=Ui(t,`id`,8),a=e=>{r((24+r()+e)%24)},o=e=>{n((60+n()+e)%60)};Ei();var s=Ls(),c=P(s),l=P(c);na(l,{size:22}),O(c);var u=I(c,2),d=P(u,!0);O(u);var f=I(u,2),p=P(f);ra(p,{size:22}),O(f);var m=I(f,2);m.__click=[Ns,a];var h=I(m,2);h.__click=[Ps,a];var g=I(h,4),_=P(g);na(_,{size:22}),O(g);var v=I(g,2),y=P(v,!0);O(v);var b=I(v,2),x=P(b);ra(x,{size:22}),O(b);var S=I(b,2);S.__click=[Fs,o];var C=I(S,2);C.__click=[Is,o],O(s),L(()=>{K(c,`for`,`leftStartHour${i()??``}`),W(d,r()<10?`0${r()}`:r()),K(f,`for`,`rightStartHour${i()??``}`),K(m,`id`,`leftStartHour${i()??``}`),K(h,`id`,`rightStartHour${i()??``}`),K(g,`for`,`leftStartMin${i()??``}`),W(y,n()<10?`0${n()}`:n()),K(b,`for`,`rightStartMin${i()??``}`),K(S,`id`,`leftStartMin${i()??``}`),K(C,`id`,`rightStartMin${i()??``}`)}),yi(3,s,()=>ws,()=>({duration:yo.animations?250:0})),U(e,s),j()}fr([`click`]);var zs=(e,t)=>e.key===`Enter`&&t(`type`),Bs=(e,t)=>e.key===`Enter`&&t(1),Vs=(e,t)=>t(1),Hs=(e,t)=>t(2),Us=(e,t)=>t(3),Ws=V(`<div class="main svelte-12d9voo"><div class="headerRow svelte-12d9voo"><h1 class="svelte-12d9voo">New Appointment</h1></div> <div class="appointmentGroup svelte-12d9voo"><div class="inputGroup svelte-12d9voo"><div class="inputRow svelte-12d9voo"><!> <input placeholder="Client Name..." class="svelte-12d9voo"/></div> <div class="spacer svelte-12d9voo"></div> <div class="inputRow svelte-12d9voo"><!> <input id="type" placeholder="Appointment Type..." class="svelte-12d9voo"/></div></div> <p class="invis svelte-12d9voo">These should be dropdown scroll wheel type things</p> <div class="inputGroup svelte-12d9voo"><div class="inputRow space svelte-12d9voo"><!> <p class="idkText svelte-12d9voo">Date</p> <label for="focus1" class="focusLabel svelte-12d9voo"><p class="svelte-12d9voo"> </p></label> <button class="invis svelte-12d9voo" id="focus1">Focus Calendar</button></div> <!> <div class="spacer svelte-12d9voo"></div> <div class="inputRow svelte-12d9voo"><!> <p class="idkText svelte-12d9voo">Start Time</p> <label for="focus2" class="focusLabel svelte-12d9voo"><p class="svelte-12d9voo"> </p></label> <button class="invis svelte-12d9voo" id="focus2">Focus Start Time</button></div> <!> <div class="spacer svelte-12d9voo"></div> <div class="inputRow svelte-12d9voo"><!> <p class="idkText svelte-12d9voo">End Time</p> <label for="focus3" class="focusLabel svelte-12d9voo"><p class="svelte-12d9voo"> </p></label> <button class="invis svelte-12d9voo" id="focus3">Focus End Time</button></div> <!></div> <div class="inputGroup svelte-12d9voo"><textarea placeholder="Additional Notes..." class="svelte-12d9voo"></textarea></div> <button class="nextButton svelte-12d9voo"><!> Add Appointment</button></div></div>`);function Gs(e,t){A(t,!0);let n=xt(-1),r=xt(0),i=xt(12),a=xt(45),o=xt(12),s=e=>e%10==1&&e!=11?`st`:e%10==2&&e!=12?`nd`:e%10==3&&e!=13?`rd`:`th`,c=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],l=e=>{document.getElementById(e).focus()},u=e=>{B(n)==e?N(n,-1):N(n,e,!0)},d=(e,t)=>{if(yo.clock24hr)return`${e}:${t<10?`0${t}`:t}`;if(e>=12){let n=e%12;return n==0&&(n=12),`${n}:${t<10?`0${t}`:t} PM`}else{let n=e%12;return n==0&&(n=12),`${n}:${t<10?`0${t}`:t} AM`}},f=()=>{let e=B(o)*60+B(a),t=B(i)*60+B(r);return e-t},p=async()=>{let e=f();if(e<0){Oo(`fail`,`You cannot set an appointment to end before it starts`,5e3,ca);return}let t=`${Z.year}-${Z.month+1<10?`0${Z.month+1}`:Z.month+1}-${Z.date<10?`0${Z.date}`:Z.date} ${B(i)<10?`0${B(i)}`:B(i)}:${B(r)<10?`0${B(r)}`:B(r)}:00.123Z`;console.log(t);let n={startTime:t,duration:e,type:Z.type,clientName:Z.clientName,notes:Z.notes};try{await ko.collection(`appointments`).create(n);let e=new Date;Z.clientName=``,Z.date=e.getDate(),Z.month=e.getMonth(),Z.notes=``,Z.type=``,Z.year=e.getFullYear(),Oo(`success`,`Appointment created!`,5e3,ta),uo(`/`)}catch{Oo(`fail`,`Something went wrong... Try again later`,5e3,ca)}};var m=Ws(),h=I(P(m),2),g=P(h),_=P(g),v=P(_);va(v,{size:20});var y=I(v,2);ii(y),y.__keydown=[zs,l],O(_);var b=I(_,4),x=P(b);ua(x,{size:20});var S=I(x,2);ii(S),S.__keydown=[Bs,u],O(b),O(g);var C=I(g,4),ee=P(C),te=P(ee);ea(te,{size:20});var ne=I(te,4),re=P(ne),w=P(re);O(re),O(ne);var ie=I(ne,2);ie.__click=[Vs,u],O(ee);var ae=I(ee,2),oe=e=>{Ms(e,{get year(){return Z.year},set year(e){Z.year=e},get month(){return Z.month},set month(e){Z.month=e},get date(){return Z.date},set date(e){Z.date=e}})};Er(ae,e=>{B(n)==1&&e(oe)});var se=I(ae,4),ce=P(se);aa(ce,{size:20});var le=I(ce,4),ue=P(le),de=P(ue,!0);O(ue),O(le);var fe=I(le,2);fe.__click=[Hs,u],O(se);var pe=I(se,2),me=e=>{Rs(e,{id:`pihudfgs`,get minutes(){return B(r)},set minutes(e){N(r,e,!0)},get hours(){return B(i)},set hours(e){N(i,e,!0)}})};Er(pe,e=>{B(n)==2&&e(me)});var he=I(pe,4),ge=P(he);oa(ge,{size:20});var T=I(ge,4),_e=P(T),ve=P(_e,!0);O(_e),O(T);var ye=I(T,2);ye.__click=[Us,u],O(he);var E=I(he,2),be=e=>{Rs(e,{id:`poihadfgiunsdf`,get minutes(){return B(a)},set minutes(e){N(a,e,!0)},get hours(){return B(o)},set hours(e){N(o,e,!0)}})};Er(E,e=>{B(n)==3&&e(be)}),O(C);var D=I(C,2),xe=P(D);Vt(xe),O(D);var Se=I(D,2);Se.__click=p;var we=P(Se);ia(we,{size:20}),Ce(),O(Se),O(h),O(m),L((e,t,n)=>{W(w,`${c[Z.month]??``} ${Z.date??``}${e??``}. ${Z.year??``}`),W(de,t),W(ve,n)},[()=>s(Z.date),()=>d(B(i),B(r)),()=>d(B(o),B(a))]),xi(y,()=>Z.clientName,e=>Z.clientName=e),xi(S,()=>Z.type,e=>Z.type=e),xi(xe,()=>Z.notes,e=>Z.notes=e),U(e,m),j()}fr([`keydown`,`click`]);var Ks=(e,t)=>{N(t,!0),setTimeout(()=>{N(t,!1)},5e3)},qs=V(`<button class="nextButton svelte-xd7gyz" id="check"><!> Delete</button>`),Js=V(`<button class="nextButton svelte-xd7gyz" id="check"><!> You sure?</button>`),Ys=V(`<div class="main svelte-xd7gyz"><div class="headerRow svelte-xd7gyz"><h1 class="svelte-xd7gyz"> </h1></div> <div class="appointmentGroup svelte-xd7gyz"><div class="inputGroup svelte-xd7gyz"><div class="inputRow svelte-xd7gyz"><!> <input placeholder="Client Name..." class="svelte-xd7gyz"/></div> <div class="spacer svelte-xd7gyz"></div> <div class="inputRow svelte-xd7gyz"><!> <input id="type" placeholder="Appointment Type..." class="svelte-xd7gyz"/></div></div> <p class="invis svelte-xd7gyz">These should be dropdown scroll wheel type things</p> <div class="inputGroup svelte-xd7gyz"><div class="inputRow space svelte-xd7gyz"><!> <p class="idkText svelte-xd7gyz">Date</p> <label for="focus1" class="focusLabel svelte-xd7gyz"><p class="svelte-xd7gyz"> </p></label></div> <!> <div class="spacer svelte-xd7gyz"></div> <div class="inputRow svelte-xd7gyz"><!> <p class="idkText svelte-xd7gyz">Start Time</p> <label for="focus2" class="focusLabel svelte-xd7gyz"><p class="svelte-xd7gyz"> </p></label></div> <!> <div class="spacer svelte-xd7gyz"></div> <div class="inputRow svelte-xd7gyz"><!> <p class="idkText svelte-xd7gyz">End Time</p> <label for="focus3" class="focusLabel svelte-xd7gyz"><p class="svelte-xd7gyz"> </p></label></div> <!></div> <div class="inputGroup svelte-xd7gyz"><textarea placeholder="Additional Notes..." class="svelte-xd7gyz"></textarea></div> <div class="buttonRow svelte-xd7gyz"><!> <button class="nextButton svelte-xd7gyz"><!> Save</button></div></div></div>`);function Xs(e,t){A(t,!0);let n=xt(!1),r=e=>e%10==1&&e!=11?`st`:e%10==2&&e!=12?`nd`:e%10==3&&e!=13?`rd`:`th`,i=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],a=(e,t)=>{if(yo.clock24hr)return`${e}:${t<10?`0${t}`:t}`;if(e>=12){let n=e%12;return n==0&&(n=12),`${n}:${t<10?`0${t}`:t} PM`}else{let n=e%12;return n==0&&(n=12),`${n}:${t<10?`0${t}`:t} AM`}},o=()=>{let e=Q.endHours*60+Q.endMinutes,t=Q.startHours*60+Q.startMinutes;return e-t},s=async()=>{let e=o();if(e<0){Oo(`fail`,`You cannot set an appointment to end before it starts`,5e3,ca);return}let t=`${Q.year}-${Q.month+1<10?`0${Q.month+1}`:Q.month+1}-${Q.date<10?`0${Q.date}`:Q.date} ${Q.startHours<10?`0${Q.startHours}`:Q.startHours}:${Q.startMinutes<10?`0${Q.startMinutes}`:Q.startMinutes}:00.123Z`;console.log(t);let n={startTime:t,duration:e,type:Q.type,clientName:Q.clientName,notes:Q.notes};try{await ko.collection(`appointments`).update(Q.id,n);let e=new Date;Q.clientName=``,Q.date=e.getDate(),Q.month=e.getMonth(),Q.notes=``,Q.type=``,Q.year=e.getFullYear(),Oo(`success`,`Appointment Updated!`,5e3,ta),uo(`/`)}catch{Oo(`fail`,`Something went wrong... Try again later`,5e3,ca)}},c=async()=>{try{await ko.collection(`appointments`).delete(Q.id);let e=new Date;Q.clientName=``,Q.date=e.getDate(),Q.month=e.getMonth(),Q.notes=``,Q.type=``,Q.year=e.getFullYear(),Oo(`success`,`Appointment Deleted!`,5e3,ta),await Mo(),uo(`/`)}catch{Oo(`fail`,`Something went wrong... Try again later`,5e3,ca)}};var l=Ys(),u=P(l),d=P(u),f=P(d,!0);O(d),O(u);var p=I(u,2),m=P(p),h=P(m),g=P(h);va(g,{size:20});var _=I(g,2);ii(_),O(h);var v=I(h,4),y=P(v);ua(y,{size:20});var b=I(y,2);ii(b),O(v),O(m);var x=I(m,4),S=P(x),C=P(S);ea(C,{size:20});var ee=I(C,4),te=P(ee),ne=P(te);O(te),O(ee),O(S);var re=I(S,2);Ms(re,{get year(){return Q.year},set year(e){Q.year=e},get month(){return Q.month},set month(e){Q.month=e},get date(){return Q.date},set date(e){Q.date=e}});var w=I(re,4),ie=P(w);aa(ie,{size:20});var ae=I(ie,4),oe=P(ae),se=P(oe,!0);O(oe),O(ae),O(w);var ce=I(w,2);Rs(ce,{id:`pihudfgs`,get minutes(){return Q.startMinutes},set minutes(e){Q.startMinutes=e},get hours(){return Q.startHours},set hours(e){Q.startHours=e}});var le=I(ce,4),ue=P(le);oa(ue,{size:20});var de=I(ue,4),fe=P(de),pe=P(fe,!0);O(fe),O(de),O(le);var me=I(le,2);Rs(me,{id:`poihadfgiunsdf`,get minutes(){return Q.endMinutes},set minutes(e){Q.endMinutes=e},get hours(){return Q.endHours},set hours(e){Q.endHours=e}}),O(x);var he=I(x,2),ge=P(he);Vt(ge),O(he);var T=I(he,2),_e=P(T),ve=e=>{var t=qs();t.__click=[Ks,n];var r=P(t);_a(r,{size:20}),Ce(),O(t),U(e,t)},ye=e=>{var t=Js();t.__click=c;var n=P(t);_a(n,{size:20}),Ce(),O(t),U(e,t)};Er(_e,e=>{B(n)?e(ye,!1):e(ve)});var E=I(_e,2);E.__click=s;var be=P(E);ia(be,{size:20}),Ce(),O(E),O(T),O(p),O(l),L((e,t,n)=>{W(f,Q.clientName),W(ne,`${i[Q.month]??``} ${Q.date??``}${e??``}. ${Q.year??``}`),W(se,t),W(pe,n)},[()=>r(Q.date),()=>a(Q.startHours,Q.startMinutes),()=>a(Q.endHours,Q.endMinutes)]),xi(_,()=>Q.clientName,e=>Q.clientName=e),xi(b,()=>Q.type,e=>Q.type=e),xi(ge,()=>Q.notes,e=>Q.notes=e),U(e,l),j()}fr([`click`]);const Zs={"/":Wo,"/settings":qo,"/calendar":ns,"/calendar/focus":ps,"/new":Gs,"/theme":gs,"/apptView":Xs,"*":vs};var Qs=Oi(()=>X),$s=V(`<div class="notification svelte-1bhwpv3"></div>`),ec=V(`<div class="smain svelte-1bhwpv3"><div class="optionGroup svelte-1bhwpv3"><div class="header svelte-1bhwpv3"><p class="svelte-1bhwpv3">KK 2000 Nails</p></div> <label for="home"><!> <p class="svelte-1bhwpv3">Home</p> <!></label> <button class="invis" id="home">toHome</button> <label for="new"><!> <p class="svelte-1bhwpv3">New</p></label> <button class="invis" id="new">tonew</button> <label for="calendar"><!> <p class="svelte-1bhwpv3">Calendar</p></label> <button class="invis" id="calendar">tocalendar</button></div> <div class="optionGroup svelte-1bhwpv3"><label for="theme"><!> <p class="svelte-1bhwpv3">Theme</p></label> <button class="invis" id="theme">totheme</button> <label for="settings"><!> <p class="svelte-1bhwpv3">Settings</p></label> <button class="invis" id="settings">tosettings</button></div></div>`);function tc(e,t){A(t,!1);let n=()=>Ri(so,`$location`,r),[r,i]=zi();Ei();var a=ec(),o=P(a),s=I(P(o),2),c=P(s);la(c,{size:24});var l=I(c,4),u=e=>{var t=$s();yi(3,t,()=>Ss,()=>({duration:250})),U(e,t)};Er(l,e=>{Qs().homeNotification&&e(u)}),O(s);var d=I(s,2);d.__click=()=>{Qs(Qs().sidebarToggle=!1),Qs(Qs().homeNotification=!1),uo(`/`)};var f=I(d,2),p=P(f);ia(p,{size:24}),Ce(2),O(f);var m=I(f,2);m.__click=()=>{Qs(Qs().sidebarToggle=!1),uo(`/new`)};var h=I(m,2),g=P(h);$i(g,{size:24}),Ce(2),O(h);var _=I(h,2);_.__click=()=>{Qs(Qs().sidebarToggle=!1),uo(`/calendar`)},O(o);var v=I(o,2),y=P(v),b=P(y);pa(b,{size:24}),Ce(2),O(y);var x=I(y,2);x.__click=()=>{Qs(Qs().sidebarToggle=!1),uo(`/theme`)};var S=I(x,2),C=P(S);ha(C,{size:24}),Ce(2),O(S);var ee=I(S,2);ee.__click=()=>{Qs(Qs().sidebarToggle=!1),uo(`/settings`)},O(v),O(a),L(()=>{Jr(s,1,`option ${n()==`/`?`highlighted`:``}`,`svelte-1bhwpv3`),Jr(f,1,`option ${n()==`/new`?`highlighted`:``}`,`svelte-1bhwpv3`),Jr(h,1,`option ${n()==`/calendar`||n()==`/calendar/focus`?`highlighted`:``}`,`svelte-1bhwpv3`),Jr(y,1,`option ${n()==`/theme`?`highlighted`:``}`,`svelte-1bhwpv3`),Jr(S,1,`option ${n()==`/settings`?`highlighted`:``}`,`svelte-1bhwpv3`)}),U(e,a),j(),i()}fr([`click`]);var nc=V(`<div class="dotNotification svelte-1n46o8q"></div>`),rc=V(`<div><div class="iconContainer svelte-1n46o8q"><!></div> <p class="svelte-1n46o8q"> </p></div>`),ic=V(`<label class="blocker svelte-1n46o8q" for="toggleButton"></label>`),ac=V(`<button id="toggleButton"><!></button> <!> <div class="popupArea svelte-1n46o8q"></div> <!> <div class="globalContainer svelte-1n46o8q"><div class="sidebarContainer desktop svelte-1n46o8q"><!></div> <div><!></div> <div class="contentContainer svelte-1n46o8q"><!></div></div>`,1);function oc(e,t){A(t,!0),Zt(()=>{let e={"--header-color":$.headerColor,"--text-color":$.textColor,"--main-color":$.mainColor,"--light-main-color":$.lightMainColor,"--dim-main-color":$.dimMainColor,"--gray-color":$.grayColor,"--input-color":$.inputColor,"--bg-color":$.bgColor,"--light-bg-color":$.lightBgColor,"--lighter-bg-color":$.lighterBgColor,"--lightest-bg-color":$.lightestBgColor,"--fail-color":$.fail};for(let[t,n]of Object.entries(e))document.documentElement.style.setProperty(t,`${n}`)}),Wi(async()=>{xo(),await Mo(),ko.collection(`appointments`).subscribe(`*`,async e=>{if(e.action==`create`){console.log(`This is doing stuff!`);let t=No(e.record);X.appointments.push(t),t.timeUntil=To(t)}else e.action==`update`&&await Mo()})}),Gi(async()=>{ko.collection(`appointments`).unsubscribe(`*`)}),setInterval(()=>{for(let e of X.appointments)e.timeUntil=To(e)},6e4);var n=ac(),r=F(n);r.__click=()=>{X.sidebarToggle=!X.sidebarToggle};var i=P(r);da(i,{style:`z-index: `,size:40}),O(r);var a=I(r,2),o=e=>{var t=nc();yi(3,t,()=>Ss,()=>({duration:yo.animations?250:0})),U(e,t)};Er(a,e=>{X.homeNotification&&e(o)});var s=I(a,2);jr(s,21,()=>Eo,kr,(e,t)=>{var n=rc(),r=P(n),i=P(r);Lr(i,()=>B(t).icon,(e,t)=>{t(e,{})}),O(r);var a=I(r,2),o=P(a,!0);O(a),O(n),L(()=>{Jr(n,1,`notification ${B(t).type??``}`,`svelte-1n46o8q`),W(o,B(t).content)}),yi(3,n,()=>Cs,()=>({duration:yo.animations?250:0,y:-20})),U(e,n)}),O(s);var c=I(s,2),l=e=>{var t=ic();yi(3,t,()=>Ss,()=>({duration:yo.animations?250:0})),U(e,t)};Er(c,e=>{X.sidebarToggle&&e(l)});var u=I(c,2),d=P(u),f=P(d);tc(f,{}),O(d);var p=I(d,2),m=P(p);tc(m,{}),O(p);var h=I(p,2),g=P(h);po(g,{get routes(){return Zs}}),O(h),O(u),L(()=>{Xr(r,X.sidebarToggle?`color: var(--light-main-color);`:`var(--text-color);`),Jr(r,1,`toggleButton ${yo.animations?`anims`:``}`,`svelte-1n46o8q`),Jr(p,1,`sidebarContainer mobile  ${yo.animations?`anims`:``}`,`svelte-1n46o8q`),Xr(p,X.sidebarToggle?``:`transform: translateX(calc(-1 * max(50%, 400px)));`)}),U(e,n),j()}fr([`click`]),xr(oc,{target:document.getElementById(`app`)});