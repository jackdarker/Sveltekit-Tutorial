import { c as create_ssr_component, a as subscribe, v as validate_component, f as compute_rest_props, g as spread, i as escape_object, d as add_attribute, j as add_classes, e as escape, h as escape_attribute_value } from './ssr-563293b8.js';
import './stores2-12b1cc25.js';
import { p as page } from './stores-394f2dce.js';
import './index-eb362a87.js';

const Loading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let spinnerRadius;
  let $$restProps = compute_rest_props($$props, ["small", "active", "withOverlay", "description", "id"]);
  let { small = false } = $$props;
  let { active = true } = $$props;
  let { withOverlay = true } = $$props;
  let { description = "Active loading indicator" } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  if ($$props.small === void 0 && $$bindings.small && small !== void 0)
    $$bindings.small(small);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.withOverlay === void 0 && $$bindings.withOverlay && withOverlay !== void 0)
    $$bindings.withOverlay(withOverlay);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  spinnerRadius = small ? "42" : "44";
  return `${withOverlay ? `<div${spread([escape_object($$restProps)], {
    classes: "bx--loading-overlay " + (!active ? "bx--loading-overlay--stop" : "")
  })}><div aria-atomic="true"${add_attribute("aria-labelledby", id, 0)}${add_attribute("aria-live", active ? "assertive" : "off", 0)}${add_classes(("bx--loading " + (small ? "bx--loading--small" : "") + " " + (!active ? "bx--loading--stop" : "")).trim())}> <label${add_attribute("id", id, 0)}${add_classes("bx--visually-hidden".trim())}>${escape(description)}</label> <svg viewBox="0 0 100 100"${add_classes("bx--loading__svg".trim())}><title>${escape(description)}</title>${small ? `<circle cx="50%" cy="50%"${add_attribute("r", spinnerRadius, 0)}${add_classes("bx--loading__background".trim())}></circle>` : ``}<circle cx="50%" cy="50%"${add_attribute("r", spinnerRadius, 0)}${add_classes("bx--loading__stroke".trim())}></circle></svg></div></div>` : `<div${spread(
    [
      { "aria-atomic": "true" },
      {
        "aria-labelledby": escape_attribute_value(id)
      },
      {
        "aria-live": escape_attribute_value(active ? "assertive" : "off")
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--loading " + (small ? "bx--loading--small" : "") + " " + (!active ? "bx--loading--stop" : "")
    }
  )}> <label${add_attribute("id", id, 0)}${add_classes("bx--visually-hidden".trim())}>${escape(description)}</label> <svg viewBox="0 0 100 100"${add_classes("bx--loading__svg".trim())}><title>${escape(description)}</title>${small ? `<circle cx="50%" cy="50%"${add_attribute("r", spinnerRadius, 0)}${add_classes("bx--loading__background".trim())}></circle>` : ``}<circle cx="50%" cy="50%"${add_attribute("r", spinnerRadius, 0)}${add_classes("bx--loading__stroke".trim())}></circle></svg></div>`}`;
});
const Loading$1 = Loading;
const css = {
  code: ".viewContainer.svelte-179tqpd{background-color:var(--secondaryColour);color:var(--secondaryAccent);padding:0.5em;color:var(--primaryAccent);margin:1em;display:inline-block;width:90%}.restrictsize.svelte-179tqpd{max-width:100%;max-height:90vH}#imglist > table > thead{visibility:collapse}#imglist > table > tbody > tr > td{padding:0px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { post = {
    "postID": 11,
    "name": "Anonymous ",
    "subject": "gthaeg",
    "posterID": null,
    "dateTime": "2023-07-02 15:13:37",
    "fileName": "",
    "postText": "egte",
    "fileExt": "jpeg",
    "replyToID": null
  } } = $$props;
  post.fileName = decodeURIComponent($page.url.searchParams.get("item") || "");
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${`${validate_component(Loading$1, "Loading").$$render($$result, {}, {}, {})}`}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-65d9136c.js.map
