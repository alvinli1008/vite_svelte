import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, a as space, b as attr, c as insert, d as append, n as noop, f as detach, o as onMount, g as onDestroy, h as beforeUpdate, j as afterUpdate } from "./vendor.073fb418.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var app = "";
var App_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let main;
  let div0;
  let div0_style_value;
  let t0;
  let div1;
  let t1;
  let div2;
  return {
    c() {
      main = element("main");
      div0 = element("div");
      t0 = space();
      div1 = element("div");
      t1 = space();
      div2 = element("div");
      div2.textContent = "Hello world!";
      attr(div0, "class", "container_bg svelte-1rb6mwl");
      attr(div0, "style", div0_style_value = ctx[0] ? "opacity: 1" : "");
      attr(div1, "class", "container_mask svelte-1rb6mwl");
      attr(div2, "class", "text-[#30354D] tw-z-10");
      attr(main, "class", "container svelte-1rb6mwl");
    },
    m(target, anchor) {
      insert(target, main, anchor);
      append(main, div0);
      append(main, t0);
      append(main, div1);
      append(main, t1);
      append(main, div2);
    },
    p(ctx2, [dirty]) {
      if (dirty & 1 && div0_style_value !== (div0_style_value = ctx2[0] ? "opacity: 1" : "")) {
        attr(div0, "style", div0_style_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(main);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let visible = false;
  onMount(() => {
    console.log("onMount");
  });
  onDestroy(() => {
    console.log("onDestroy");
  });
  beforeUpdate(() => {
    console.log("beforeUpdate");
  });
  afterUpdate(() => {
    console.log("afterUpdate");
    setTimeout(() => {
      $$invalidate(0, visible = true);
    }, 0);
  });
  return [visible];
}
class App extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
new App({
  target: document.getElementById("app")
});
