import { c as create_ssr_component, a as subscribe, p as onDestroy, v as validate_component, f as compute_rest_props, g as spread, h as escape_attribute_value, i as escape_object, e as escape, l as getContext, d as add_attribute, j as add_classes, m as missing_component, k as createEventDispatcher, s as setContext, b as each, o as compute_slots } from './ssr-563293b8.js';
import { s as settings } from './stores2-12b1cc25.js';
import { w as writable } from './index-eb362a87.js';

const globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M16.6123,2.2138a1.01,1.01,0,0,0-1.2427,0L1,13.4194l1.2427,1.5717L4,13.6209V26a2.0041,2.0041,0,0,0,2,2H26a2.0037,2.0037,0,0,0,2-2V13.63L29.7573,15,31,13.4282ZM18,26H14V18h4Zm2,0V18a2.0023,2.0023,0,0,0-2-2H14a2.002,2.002,0,0,0-2,2v8H6V12.0615l10-7.79,10,7.8005V26Z"></path></svg>`;
});
const Logout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M6,30H18a2.0023,2.0023,0,0,0,2-2V25H18v3H6V4H18V7h2V4a2.0023,2.0023,0,0,0-2-2H6A2.0023,2.0023,0,0,0,4,4V28A2.0023,2.0023,0,0,0,6,30Z"></path><path d="M20.586 20.586L24.172 17 10 17 10 15 24.172 15 20.586 11.414 22 10 28 16 22 22 20.586 20.586z"></path></svg>`;
});
const Settings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M27,16.76c0-.25,0-.5,0-.76s0-.51,0-.77l1.92-1.68A2,2,0,0,0,29.3,11L26.94,7a2,2,0,0,0-1.73-1,2,2,0,0,0-.64.1l-2.43.82a11.35,11.35,0,0,0-1.31-.75l-.51-2.52a2,2,0,0,0-2-1.61H13.64a2,2,0,0,0-2,1.61l-.51,2.52a11.48,11.48,0,0,0-1.32.75L7.43,6.06A2,2,0,0,0,6.79,6,2,2,0,0,0,5.06,7L2.7,11a2,2,0,0,0,.41,2.51L5,15.24c0,.25,0,.5,0,.76s0,.51,0,.77L3.11,18.45A2,2,0,0,0,2.7,21L5.06,25a2,2,0,0,0,1.73,1,2,2,0,0,0,.64-.1l2.43-.82a11.35,11.35,0,0,0,1.31.75l.51,2.52a2,2,0,0,0,2,1.61h4.72a2,2,0,0,0,2-1.61l.51-2.52a11.48,11.48,0,0,0,1.32-.75l2.42.82a2,2,0,0,0,.64.1,2,2,0,0,0,1.73-1L29.3,21a2,2,0,0,0-.41-2.51ZM25.21,24l-3.43-1.16a8.86,8.86,0,0,1-2.71,1.57L18.36,28H13.64l-.71-3.55a9.36,9.36,0,0,1-2.7-1.57L6.79,24,4.43,20l2.72-2.4a8.9,8.9,0,0,1,0-3.13L4.43,12,6.79,8l3.43,1.16a8.86,8.86,0,0,1,2.71-1.57L13.64,4h4.72l.71,3.55a9.36,9.36,0,0,1,2.7,1.57L25.21,8,27.57,12l-2.72,2.4a8.9,8.9,0,0,1,0,3.13L27.57,20Z"></path><path d="M16,22a6,6,0,1,1,6-6A5.94,5.94,0,0,1,16,22Zm0-10a3.91,3.91,0,0,0-4,4,3.91,3.91,0,0,0,4,4,3.91,3.91,0,0,0,4-4A3.91,3.91,0,0,0,16,12Z"></path></svg>`;
});
const ButtonSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "size"]);
  let { href = void 0 } = $$props;
  let { size = "default" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return ` ${href ? `<a${spread(
    [
      { href: escape_attribute_value(href) },
      {
        rel: escape_attribute_value($$restProps.target === "_blank" ? "noopener noreferrer" : void 0)
      },
      { role: "button" },
      escape_object($$restProps)
    ],
    {
      classes: "bx--skeleton bx--btn " + (size === "field" ? "bx--btn--field" : "") + " " + (size === "small" ? "bx--btn--sm" : "") + " " + (size === "lg" ? "bx--btn--lg" : "") + " " + (size === "xl" ? "bx--btn--xl" : "")
    }
  )}>${escape("")}</a>` : ` <div${spread([escape_object($$restProps)], {
    classes: "bx--skeleton bx--btn " + (size === "field" ? "bx--btn--field" : "") + " " + (size === "small" ? "bx--btn--sm" : "") + " " + (size === "lg" ? "bx--btn--lg" : "") + " " + (size === "xl" ? "bx--btn--xl" : "")
  })}></div>`}`;
});
const ButtonSkeleton$1 = ButtonSkeleton;
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hasIconOnly;
  let buttonProps;
  let $$restProps = compute_rest_props($$props, [
    "kind",
    "size",
    "expressive",
    "isSelected",
    "icon",
    "iconDescription",
    "tooltipAlignment",
    "tooltipPosition",
    "as",
    "skeleton",
    "disabled",
    "href",
    "tabindex",
    "type",
    "ref"
  ]);
  let $$slots = compute_slots(slots);
  let { kind = "primary" } = $$props;
  let { size = "default" } = $$props;
  let { expressive = false } = $$props;
  let { isSelected = false } = $$props;
  let { icon = void 0 } = $$props;
  let { iconDescription = void 0 } = $$props;
  let { tooltipAlignment = "center" } = $$props;
  let { tooltipPosition = "bottom" } = $$props;
  let { as = false } = $$props;
  let { skeleton = false } = $$props;
  let { disabled = false } = $$props;
  let { href = void 0 } = $$props;
  let { tabindex = "0" } = $$props;
  let { type = "button" } = $$props;
  let { ref = null } = $$props;
  const ctx = getContext("ComposedModal");
  if ($$props.kind === void 0 && $$bindings.kind && kind !== void 0)
    $$bindings.kind(kind);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.expressive === void 0 && $$bindings.expressive && expressive !== void 0)
    $$bindings.expressive(expressive);
  if ($$props.isSelected === void 0 && $$bindings.isSelected && isSelected !== void 0)
    $$bindings.isSelected(isSelected);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
  if ($$props.tooltipAlignment === void 0 && $$bindings.tooltipAlignment && tooltipAlignment !== void 0)
    $$bindings.tooltipAlignment(tooltipAlignment);
  if ($$props.tooltipPosition === void 0 && $$bindings.tooltipPosition && tooltipPosition !== void 0)
    $$bindings.tooltipPosition(tooltipPosition);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.skeleton === void 0 && $$bindings.skeleton && skeleton !== void 0)
    $$bindings.skeleton(skeleton);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  {
    if (ctx && ref) {
      ctx.declareRef(ref);
    }
  }
  hasIconOnly = icon && !$$slots.default;
  buttonProps = {
    type: href && !disabled ? void 0 : type,
    tabindex,
    disabled: disabled === true ? true : void 0,
    href,
    "aria-pressed": hasIconOnly && kind === "ghost" && !href ? isSelected : void 0,
    ...$$restProps,
    class: [
      "bx--btn",
      expressive && "bx--btn--expressive",
      (size === "small" && !expressive || size === "sm" && !expressive || size === "small" && !expressive) && "bx--btn--sm",
      size === "field" && !expressive || size === "md" && !expressive && "bx--btn--md",
      size === "field" && "bx--btn--field",
      size === "small" && "bx--btn--sm",
      size === "lg" && "bx--btn--lg",
      size === "xl" && "bx--btn--xl",
      kind && `bx--btn--${kind}`,
      disabled && "bx--btn--disabled",
      hasIconOnly && "bx--btn--icon-only",
      hasIconOnly && "bx--tooltip__trigger",
      hasIconOnly && "bx--tooltip--a11y",
      hasIconOnly && tooltipPosition && `bx--btn--icon-only--${tooltipPosition}`,
      hasIconOnly && tooltipAlignment && `bx--tooltip--align-${tooltipAlignment}`,
      hasIconOnly && isSelected && kind === "ghost" && "bx--btn--selected",
      $$restProps.class
    ].filter(Boolean).join(" ")
  };
  return ` ${skeleton ? `${validate_component(ButtonSkeleton$1, "ButtonSkeleton").$$render($$result, Object.assign({}, { href }, { size }, $$restProps, { style: hasIconOnly && "width: 3rem;" }), {}, {})}` : `${as ? `${slots.default ? slots.default({ props: buttonProps }) : ``}` : `${href && !disabled ? `  <a${spread([escape_object(buttonProps)], {})}${add_attribute("this", ref, 0)}>${hasIconOnly ? `<span${add_classes("bx--assistive-text".trim())}>${escape(iconDescription)}</span>` : ``} ${slots.default ? slots.default({}) : ``}${validate_component(icon || missing_component, "svelte:component").$$render(
    $$result,
    {
      "aria-hidden": "true",
      class: "bx--btn__icon",
      "aria-label": iconDescription
    },
    {},
    {}
  )}</a>` : `<button${spread([escape_object(buttonProps)], {})}${add_attribute("this", ref, 0)}>${hasIconOnly ? `<span${add_classes("bx--assistive-text".trim())}>${escape(iconDescription)}</span>` : ``} ${slots.default ? slots.default({}) : ``}${validate_component(icon || missing_component, "svelte:component").$$render(
    $$result,
    {
      "aria-hidden": "true",
      class: "bx--btn__icon",
      style: hasIconOnly ? "margin-left: 0" : void 0,
      "aria-label": iconDescription
    },
    {},
    {}
  )}</button>`}`}`}`;
});
const Button$1 = Button;
const WarningFilled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14C30,8.3,23.7,2,16,2z M14.9,8h2.2v11h-2.2V8z M16,25	c-0.8,0-1.5-0.7-1.5-1.5S15.2,22,16,22c0.8,0,1.5,0.7,1.5,1.5S16.8,25,16,25z"></path><path fill="none" d="M17.5,23.5c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5S15.2,22,16,22	C16.8,22,17.5,22.7,17.5,23.5z M17.1,8h-2.2v11h2.2V8z" data-icon-path="inner-path" opacity="0"></path></svg>`;
});
const WarningFilled$1 = WarningFilled;
const WarningAltFilled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path fill="none" d="M16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Zm-1.125-5h2.25V12h-2.25Z" data-icon-path="inner-path"></path><path d="M16.002,6.1714h-.004L4.6487,27.9966,4.6506,28H27.3494l.0019-.0034ZM14.875,12h2.25v9h-2.25ZM16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Z"></path><path d="M29,30H3a1,1,0,0,1-.8872-1.4614l13-25a1,1,0,0,1,1.7744,0l13,25A1,1,0,0,1,29,30ZM4.6507,28H27.3493l.002-.0033L16.002,6.1714h-.004L4.6487,27.9967Z"></path></svg>`;
});
const WarningAltFilled$1 = WarningAltFilled;
const ListBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "size",
    "type",
    "open",
    "light",
    "disabled",
    "invalid",
    "invalidText",
    "warn",
    "warnText"
  ]);
  let { size = void 0 } = $$props;
  let { type = "default" } = $$props;
  let { open = false } = $$props;
  let { light = false } = $$props;
  let { disabled = false } = $$props;
  let { invalid = false } = $$props;
  let { invalidText = "" } = $$props;
  let { warn = false } = $$props;
  let { warnText = "" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.invalidText === void 0 && $$bindings.invalidText && invalidText !== void 0)
    $$bindings.invalidText(invalidText);
  if ($$props.warn === void 0 && $$bindings.warn && warn !== void 0)
    $$bindings.warn(warn);
  if ($$props.warnText === void 0 && $$bindings.warnText && warnText !== void 0)
    $$bindings.warnText(warnText);
  return `<div${spread(
    [
      { role: "listbox" },
      { tabindex: "-1" },
      {
        "data-invalid": escape_attribute_value(invalid || void 0)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--list-box " + (size === "sm" ? "bx--list-box--sm" : "") + " " + (size === "xl" ? "bx--list-box--xl" : "") + " " + (type === "inline" ? "bx--list-box--inline" : "") + " " + (disabled ? "bx--list-box--disabled" : "") + " " + (open ? "bx--list-box--expanded" : "") + " " + (light ? "bx--list-box--light" : "") + " " + (!invalid && warn ? "bx--list-box--warning" : "")
    }
  )}>${slots.default ? slots.default({}) : ``}</div> ${invalid ? `<div${add_classes("bx--form-requirement".trim())}>${escape(invalidText)}</div>` : ``} ${!invalid && warn ? `<div${add_classes("bx--form-requirement".trim())}>${escape(warnText)}</div>` : ``}`;
});
const ListBox$1 = ListBox;
const ListBoxMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["id", "ref"]);
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { ref = null } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return `<div${spread(
    [
      { role: "listbox" },
      { id: "menu-" + escape(id, true) },
      escape_object($$restProps)
    ],
    {
      classes: "bx--list-box__menu"
    }
  )}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const ListBoxMenu$1 = ListBoxMenu;
const ChevronDown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"></path></svg>`;
});
const ChevronDown$1 = ChevronDown;
const ListBoxMenuIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let translationId;
  let description;
  let $$restProps = compute_rest_props($$props, ["open", "translationIds", "translateWithId"]);
  let { open = false } = $$props;
  const translationIds = { close: "close", open: "open" };
  let { translateWithId = (id) => defaultTranslations[id] } = $$props;
  const defaultTranslations = {
    [translationIds.close]: "Close menu",
    [translationIds.open]: "Open menu"
  };
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.translationIds === void 0 && $$bindings.translationIds && translationIds !== void 0)
    $$bindings.translationIds(translationIds);
  if ($$props.translateWithId === void 0 && $$bindings.translateWithId && translateWithId !== void 0)
    $$bindings.translateWithId(translateWithId);
  translationId = open ? translationIds.close : translationIds.open;
  description = translateWithId?.(translationId) ?? defaultTranslations[translationId];
  return ` <div${spread([escape_object($$restProps)], {
    classes: "bx--list-box__menu-icon " + (open ? "bx--list-box__menu-icon--open" : "")
  })}>${validate_component(ChevronDown$1, "ChevronDown").$$render(
    $$result,
    {
      "aria-label": description,
      title: description
    },
    {},
    {}
  )}</div>`;
});
const ListBoxMenuIcon$1 = ListBoxMenuIcon;
const ListBoxMenuItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isTruncated;
  let title;
  let $$restProps = compute_rest_props($$props, ["active", "highlighted", "disabled"]);
  let { active = false } = $$props;
  let { highlighted = false } = $$props;
  let { disabled = false } = $$props;
  let ref = null;
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.highlighted === void 0 && $$bindings.highlighted && highlighted !== void 0)
    $$bindings.highlighted(highlighted);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  isTruncated = ref?.offsetWidth < ref?.scrollWidth;
  title = isTruncated ? ref?.innerText : void 0;
  {
    if (highlighted && ref && !ref.matches(":hover")) {
      ref.scrollIntoView({ block: "nearest" });
    }
  }
  return `<div${spread(
    [
      { role: "option" },
      { tabindex: "-1" },
      {
        "aria-selected": escape_attribute_value(active)
      },
      {
        disabled: (disabled ? true : void 0) || null
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--list-box__menu-item " + (active ? "bx--list-box__menu-item--active" : "") + " " + (highlighted || active ? "bx--list-box__menu-item--highlighted" : "")
    }
  )}><div${add_attribute("title", title, 0)}${add_classes("bx--list-box__menu-item__option".trim())}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}</div></div>`;
});
const ListBoxMenuItem$1 = ListBoxMenuItem;
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inline;
  let selectedItem;
  let $$restProps = compute_rest_props($$props, [
    "items",
    "itemToString",
    "selectedId",
    "type",
    "direction",
    "size",
    "open",
    "light",
    "disabled",
    "titleText",
    "invalid",
    "invalidText",
    "warn",
    "warnText",
    "helperText",
    "label",
    "hideLabel",
    "translateWithId",
    "id",
    "name",
    "ref"
  ]);
  let { items = [] } = $$props;
  let { itemToString = (item) => item.text || item.id } = $$props;
  let { selectedId } = $$props;
  let { type = "default" } = $$props;
  let { direction = "bottom" } = $$props;
  let { size = void 0 } = $$props;
  let { open = false } = $$props;
  let { light = false } = $$props;
  let { disabled = false } = $$props;
  let { titleText = "" } = $$props;
  let { invalid = false } = $$props;
  let { invalidText = "" } = $$props;
  let { warn = false } = $$props;
  let { warnText = "" } = $$props;
  let { helperText = "" } = $$props;
  let { label = void 0 } = $$props;
  let { hideLabel = false } = $$props;
  let { translateWithId = void 0 } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = void 0 } = $$props;
  let { ref = null } = $$props;
  createEventDispatcher();
  let highlightedIndex = -1;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.itemToString === void 0 && $$bindings.itemToString && itemToString !== void 0)
    $$bindings.itemToString(itemToString);
  if ($$props.selectedId === void 0 && $$bindings.selectedId && selectedId !== void 0)
    $$bindings.selectedId(selectedId);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.titleText === void 0 && $$bindings.titleText && titleText !== void 0)
    $$bindings.titleText(titleText);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.invalidText === void 0 && $$bindings.invalidText && invalidText !== void 0)
    $$bindings.invalidText(invalidText);
  if ($$props.warn === void 0 && $$bindings.warn && warn !== void 0)
    $$bindings.warn(warn);
  if ($$props.warnText === void 0 && $$bindings.warnText && warnText !== void 0)
    $$bindings.warnText(warnText);
  if ($$props.helperText === void 0 && $$bindings.helperText && helperText !== void 0)
    $$bindings.helperText(helperText);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.translateWithId === void 0 && $$bindings.translateWithId && translateWithId !== void 0)
    $$bindings.translateWithId(translateWithId);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  inline = type === "inline";
  selectedItem = items.find((item) => item.id === selectedId);
  {
    if (!open) {
      highlightedIndex = -1;
    }
  }
  return ` <div${spread([escape_object($$restProps)], {
    classes: "bx--dropdown__wrapper bx--list-box__wrapper " + (inline ? "bx--dropdown__wrapper--inline" : "") + " " + (inline ? "bx--list-box__wrapper--inline" : "") + " " + (inline && invalid ? "bx--dropdown__wrapper--inline--invalid" : "")
  })}>${titleText ? `<label${add_attribute("for", id, 0)}${add_classes(("bx--label " + (disabled ? "bx--label--disabled" : "") + " " + (hideLabel ? "bx--visually-hidden" : "")).trim())}>${escape(titleText)}</label>` : ``} ${validate_component(ListBox$1, "ListBox").$$render(
    $$result,
    {
      role: void 0,
      type,
      size,
      name,
      "aria-label": $$props["aria-label"],
      class: "bx--dropdown \n      " + (direction === "top" && "bx--list-box--up") + " \n      " + (invalid && "bx--dropdown--invalid") + " \n      " + (!invalid && warn && "bx--dropdown--warning") + " \n      " + (open && "bx--dropdown--open") + "\n      " + (size === "sm" && "bx--dropdown--sm") + "\n      " + (size === "xl" && "bx--dropdown--xl") + "\n      " + (inline && "bx--dropdown--inline") + "\n      " + (disabled && "bx--dropdown--disabled") + "\n      " + (light && "bx--dropdown--light"),
      disabled,
      open,
      invalid,
      invalidText,
      light,
      warn,
      warnText
    },
    {},
    {
      default: () => {
        return `${invalid ? `${validate_component(WarningFilled$1, "WarningFilled").$$render($$result, { class: "bx--list-box__invalid-icon" }, {}, {})}` : ``} ${!invalid && warn ? `${validate_component(WarningAltFilled$1, "WarningAltFilled").$$render(
          $$result,
          {
            class: "bx--list-box__invalid-icon bx--list-box__invalid-icon--warning"
          },
          {},
          {}
        )}` : ``} <button type="button" tabindex="0"${add_attribute("aria-expanded", open, 0)} ${disabled ? "disabled" : ""}${add_attribute("translatewithid", translateWithId, 0)}${add_attribute("id", id, 0)}${add_classes("bx--list-box__field".trim())}${add_attribute("this", ref, 0)}><span${add_classes("bx--list-box__label".trim())}>${selectedItem ? `${escape(itemToString(selectedItem))}` : `${escape(label)}`}</span> ${validate_component(ListBoxMenuIcon$1, "ListBoxMenuIcon").$$render($$result, { translateWithId, open }, {}, {})}</button> ${open ? `${validate_component(ListBoxMenu$1, "ListBoxMenu").$$render($$result, { "aria-labelledby": id, id }, {}, {
          default: () => {
            return `${each(items, (item, i) => {
              return `${validate_component(ListBoxMenuItem$1, "ListBoxMenuItem").$$render(
                $$result,
                {
                  id: item.id,
                  active: selectedId === item.id,
                  highlighted: highlightedIndex === i,
                  disabled: item.disabled
                },
                {},
                {
                  default: () => {
                    return `${slots.default ? slots.default({ item, index: i }) : ` ${escape(itemToString(item))} `} `;
                  }
                }
              )}`;
            })}`;
          }
        })}` : ``}`;
      }
    }
  )} ${!inline && !invalid && !warn && helperText ? `<div${add_classes(("bx--form__helper-text " + (disabled ? "bx--form__helper-text--disabled" : "")).trim())}>${escape(helperText)}</div>` : ``}</div>`;
});
const Dropdown$1 = Dropdown;
function clearAll() {
  localStorage.clear();
}
const LocalStorage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { key = "local-storage-key" } = $$props;
  let { value = "" } = $$props;
  function clearItem() {
    localStorage.removeItem(key);
  }
  createEventDispatcher();
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.clearItem === void 0 && $$bindings.clearItem && clearItem !== void 0)
    $$bindings.clearItem(clearItem);
  if ($$props.clearAll === void 0 && $$bindings.clearAll && clearAll !== void 0)
    $$bindings.clearAll(clearAll);
  return ``;
});
const LocalStorage$1 = LocalStorage;
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let errorId;
  let $$restProps = compute_rest_props($$props, [
    "selected",
    "size",
    "inline",
    "light",
    "disabled",
    "id",
    "name",
    "invalid",
    "invalidText",
    "warn",
    "warnText",
    "helperText",
    "noLabel",
    "labelText",
    "hideLabel",
    "ref",
    "required"
  ]);
  let $defaultValue, $$unsubscribe_defaultValue;
  let $$unsubscribe_selectedValue;
  let $$unsubscribe_itemTypesByValue;
  let $defaultSelectId, $$unsubscribe_defaultSelectId;
  let { selected = void 0 } = $$props;
  let { size = void 0 } = $$props;
  let { inline = false } = $$props;
  let { light = false } = $$props;
  let { disabled = false } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = void 0 } = $$props;
  let { invalid = false } = $$props;
  let { invalidText = "" } = $$props;
  let { warn = false } = $$props;
  let { warnText = "" } = $$props;
  let { helperText = "" } = $$props;
  let { noLabel = false } = $$props;
  let { labelText = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { ref = null } = $$props;
  let { required = false } = $$props;
  createEventDispatcher();
  const selectedValue = writable(selected);
  $$unsubscribe_selectedValue = subscribe(selectedValue, (value) => value);
  const defaultSelectId = writable(null);
  $$unsubscribe_defaultSelectId = subscribe(defaultSelectId, (value) => $defaultSelectId = value);
  const defaultValue = writable(null);
  $$unsubscribe_defaultValue = subscribe(defaultValue, (value) => $defaultValue = value);
  const itemTypesByValue = writable({});
  $$unsubscribe_itemTypesByValue = subscribe(itemTypesByValue, (value) => value);
  setContext("Select", {
    selectedValue,
    setDefaultValue: (id2, value) => {
      if ($defaultValue === null) {
        defaultSelectId.set(id2);
        defaultValue.set(value);
      } else {
        if ($defaultSelectId === id2) {
          selectedValue.set(value);
        }
      }
      itemTypesByValue.update((types) => ({ ...types, [value]: typeof value }));
    }
  });
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.invalidText === void 0 && $$bindings.invalidText && invalidText !== void 0)
    $$bindings.invalidText(invalidText);
  if ($$props.warn === void 0 && $$bindings.warn && warn !== void 0)
    $$bindings.warn(warn);
  if ($$props.warnText === void 0 && $$bindings.warnText && warnText !== void 0)
    $$bindings.warnText(warnText);
  if ($$props.helperText === void 0 && $$bindings.helperText && helperText !== void 0)
    $$bindings.helperText(helperText);
  if ($$props.noLabel === void 0 && $$bindings.noLabel && noLabel !== void 0)
    $$bindings.noLabel(noLabel);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  errorId = `error-${id}`;
  {
    selectedValue.set(selected ?? $defaultValue);
  }
  $$unsubscribe_defaultValue();
  $$unsubscribe_selectedValue();
  $$unsubscribe_itemTypesByValue();
  $$unsubscribe_defaultSelectId();
  return `<div${spread([escape_object($$restProps)], { classes: "bx--form-item" })}><div${add_classes(("bx--select " + (inline ? "bx--select--inline" : "") + " " + (light ? "bx--select--light" : "") + " " + (invalid ? "bx--select--invalid" : "") + " " + (disabled ? "bx--select--disabled" : "") + " " + (warn ? "bx--select--warning" : "")).trim())}>${!noLabel ? `<label${add_attribute("for", id, 0)}${add_classes(("bx--label " + (hideLabel ? "bx--visually-hidden" : "") + " " + (disabled ? "bx--label--disabled" : "")).trim())}>${slots.labelText ? slots.labelText({}) : ` ${escape(labelText)} `}</label>` : ``} ${inline ? `<div${add_classes("bx--select-input--inline__wrapper".trim())}><div${add_attribute("data-invalid", invalid || void 0, 0)}${add_classes("bx--select-input__wrapper".trim())}><select${add_attribute("aria-describedby", invalid ? errorId : void 0, 0)}${add_attribute("aria-invalid", invalid || void 0, 0)} ${disabled || void 0 ? "disabled" : ""} ${required || void 0 ? "required" : ""}${add_attribute("id", id, 0)}${add_attribute("name", name, 0)}${add_classes(("bx--select-input " + (size === "sm" ? "bx--select-input--sm" : "") + " " + (size === "xl" ? "bx--select-input--xl" : "")).trim())}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}</select> ${validate_component(ChevronDown$1, "ChevronDown").$$render($$result, { class: "bx--select__arrow" }, {}, {})} ${invalid ? `${validate_component(WarningFilled$1, "WarningFilled").$$render($$result, { class: "bx--select__invalid-icon" }, {}, {})}` : ``}</div> ${invalid ? `<div${add_attribute("id", errorId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(invalidText)}</div>` : ``}</div> ${!invalid && !warn && helperText ? `<div${add_classes(("bx--form__helper-text " + (disabled ? "bx--form__helper-text--disabled" : "")).trim())}>${escape(helperText)}</div>` : ``}` : ``} ${!inline ? `<div${add_attribute("data-invalid", invalid || void 0, 0)}${add_classes("bx--select-input__wrapper".trim())}><select${add_attribute("id", id, 0)}${add_attribute("name", name, 0)}${add_attribute("aria-describedby", invalid ? errorId : void 0, 0)} ${disabled || void 0 ? "disabled" : ""} ${required || void 0 ? "required" : ""}${add_attribute("aria-invalid", invalid || void 0, 0)}${add_classes(("bx--select-input " + (size === "sm" ? "bx--select-input--sm" : "") + " " + (size === "xl" ? "bx--select-input--xl" : "")).trim())}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}</select> ${validate_component(ChevronDown$1, "ChevronDown").$$render($$result, { class: "bx--select__arrow" }, {}, {})} ${invalid ? `${validate_component(WarningFilled$1, "WarningFilled").$$render($$result, { class: "bx--select__invalid-icon" }, {}, {})}` : ``} ${!invalid && warn ? `${validate_component(WarningAltFilled$1, "WarningAltFilled").$$render(
    $$result,
    {
      class: "bx--select__invalid-icon bx--select__invalid-icon--warning"
    },
    {},
    {}
  )}` : ``}</div> ${!invalid && helperText ? `<div${add_classes(("bx--form__helper-text " + (disabled ? "bx--form__helper-text--disabled" : "")).trim())}>${escape(helperText)}</div>` : ``} ${invalid ? `<div${add_attribute("id", errorId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(invalidText)}</div>` : ``} ${!invalid && warn ? `<div${add_attribute("id", errorId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(warnText)}</div>` : ``}` : ``}</div></div>`;
});
const Select$1 = Select;
const SelectItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["value", "text", "hidden", "disabled"]);
  let { value = "" } = $$props;
  let { text = "" } = $$props;
  let { hidden = false } = $$props;
  let { disabled = false } = $$props;
  const id = "ccs-" + Math.random().toString(36);
  const ctx = getContext("Select") || getContext("TimePickerSelect");
  let selected = false;
  ctx.selectedValue.subscribe((currentValue) => {
    selected = currentValue === value;
  });
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0)
    $$bindings.hidden(hidden);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  {
    ctx?.setDefaultValue?.(id, value);
  }
  return `<option${add_attribute("value", value, 0)} ${disabled ? "disabled" : ""} ${hidden ? "hidden" : ""} ${selected ? "selected" : ""} class="${[escape($$restProps.class, true), "bx--select-option"].join(" ").trim()}"${add_attribute("style", $$restProps.style, 0)}>${escape(text || value)}</option>`;
});
const SelectItem$1 = SelectItem;
const Toggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "size",
    "toggled",
    "disabled",
    "labelA",
    "labelB",
    "labelText",
    "hideLabel",
    "id",
    "name"
  ]);
  let { size = "default" } = $$props;
  let { toggled = false } = $$props;
  let { disabled = false } = $$props;
  let { labelA = "Off" } = $$props;
  let { labelB = "On" } = $$props;
  let { labelText = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = void 0 } = $$props;
  const dispatch = createEventDispatcher();
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.toggled === void 0 && $$bindings.toggled && toggled !== void 0)
    $$bindings.toggled(toggled);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.labelA === void 0 && $$bindings.labelA && labelA !== void 0)
    $$bindings.labelA(labelA);
  if ($$props.labelB === void 0 && $$bindings.labelB && labelB !== void 0)
    $$bindings.labelB(labelB);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  {
    dispatch("toggle", { toggled });
  }
  return `  <div${spread(
    [
      escape_object($$restProps),
      {
        style: escape($$restProps["style"], true) + "; user-select: none"
      }
    ],
    { classes: "bx--form-item" }
  )}> <input role="switch" type="checkbox" ${toggled ? "checked" : ""} ${disabled ? "disabled" : ""}${add_attribute("id", id, 0)}${add_attribute("name", name, 0)}${add_classes(("bx--toggle-input " + (size === "sm" ? "bx--toggle-input--small" : "")).trim())}> <label${add_attribute(
    "aria-label",
    labelText ? void 0 : $$props["aria-label"] || "Toggle",
    0
  )}${add_attribute("for", id, 0)}${add_classes("bx--toggle-input__label".trim())}><span${add_classes((hideLabel ? "bx--visually-hidden" : "").trim())}>${slots.labelText ? slots.labelText({}) : ` ${escape(labelText)} `}</span> <span${add_attribute("style", hideLabel && "margin-top: 0", 0)}${add_classes("bx--toggle__switch".trim())}><span aria-hidden="true"${add_classes("bx--toggle__text--off".trim())}>${slots.labelA ? slots.labelA({}) : ` ${escape(labelA)} `}</span> <span aria-hidden="true"${add_classes("bx--toggle__text--on".trim())}>${slots.labelB ? slots.labelB({}) : ` ${escape(labelB)} `}</span></span></label></div>`;
});
const Toggle$1 = Toggle;
const { Object: Object_1 } = globals;
const Theme = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { theme = "white" } = $$props;
  let { tokens = {} } = $$props;
  let { persist = false } = $$props;
  let { persistKey = "theme" } = $$props;
  let { render = void 0 } = $$props;
  let { toggle = {
    themes: ["white", "g100"],
    labelA: "",
    labelB: "",
    labelText: "Dark mode",
    hideLabel: false
  } } = $$props;
  const themes = {
    white: "White",
    g10: "Gray 10",
    g80: "Gray 80",
    g90: "Gray 90",
    g100: "Gray 100"
  };
  const themeKeys = Object.keys(themes);
  let { select = {
    themes: themeKeys,
    labelText: "Themes",
    hideLabel: false
  } } = $$props;
  const dispatch = createEventDispatcher();
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.tokens === void 0 && $$bindings.tokens && tokens !== void 0)
    $$bindings.tokens(tokens);
  if ($$props.persist === void 0 && $$bindings.persist && persist !== void 0)
    $$bindings.persist(persist);
  if ($$props.persistKey === void 0 && $$bindings.persistKey && persistKey !== void 0)
    $$bindings.persistKey(persistKey);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0)
    $$bindings.render(render);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  if ($$props.select === void 0 && $$bindings.select && select !== void 0)
    $$bindings.select(select);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (typeof window !== "undefined") {
        Object.entries(tokens).forEach(([token, value]) => {
          document.documentElement.style.setProperty(`--cds-${token}`, value);
        });
        if (theme in themes) {
          document.documentElement.setAttribute("theme", theme);
          dispatch("update", { theme });
        } else {
          console.warn(`[Theme.svelte] invalid theme "${theme}". Value must be one of: ${JSON.stringify(Object.keys(themes))}`);
        }
      }
    }
    $$rendered = `${persist ? `${validate_component(LocalStorage$1, "LocalStorage").$$render(
      $$result,
      { key: persistKey, value: theme },
      {
        value: ($$value) => {
          theme = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} ${render === "toggle" ? `${validate_component(Toggle$1, "Toggle").$$render($$result, Object_1.assign({}, toggle, { toggled: theme === toggle.themes[1] }), {}, {})}` : `${render === "select" ? `${validate_component(Select$1, "Select").$$render(
      $$result,
      Object_1.assign({}, select, { selected: theme }),
      {
        selected: ($$value) => {
          theme = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(select.themes, (theme2) => {
            return `${validate_component(SelectItem$1, "SelectItem").$$render($$result, { value: theme2, text: themes[theme2] }, {}, {})}`;
          })}`;
        }
      }
    )}` : ``}`} ${slots.default ? slots.default({ theme }) : ``}`;
  } while (!$$settled);
  return $$rendered;
});
const Theme$1 = Theme;
const UserCtrlWidget = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $settings, $$unsubscribe_settings;
  $$unsubscribe_settings = subscribe(settings, (value) => $settings = value);
  let theme = "";
  const unsubscribe = settings.subscribe((value) => {
    theme = value.theme;
  });
  onDestroy(unsubscribe);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Theme$1, "Theme").$$render(
      $$result,
      { theme },
      {
        theme: ($$value) => {
          theme = $$value;
          $$settled = false;
        }
      },
      {}
    )}  <div>${validate_component(Button$1, "Button").$$render(
      $$result,
      {
        size: "field",
        iconDescription: "Home",
        icon: Home,
        href: "/"
      },
      {},
      {}
    )} ${validate_component(Button$1, "Button").$$render(
      $$result,
      {
        size: "field",
        iconDescription: "Settings",
        icon: Settings
      },
      {},
      {}
    )} ${validate_component(Button$1, "Button").$$render(
      $$result,
      {
        size: "field",
        iconDescription: "Logout",
        icon: Logout
      },
      {},
      {}
    )} ${validate_component(Dropdown$1, "Dropdown").$$render(
      $$result,
      {
        type: "inline",
        items: [
          { id: "white", text: "white" },
          { id: "g80", text: "dark" },
          { id: "g100", text: "black" }
        ],
        selectedId: $settings.theme
      },
      {
        selectedId: ($$value) => {
          $settings.theme = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>`;
  } while (!$$settled);
  $$unsubscribe_settings();
  return $$rendered;
});

export { Button$1 as B, ChevronDown$1 as C, Select$1 as S, UserCtrlWidget as U, WarningFilled$1 as W, SelectItem$1 as a, WarningAltFilled$1 as b };
//# sourceMappingURL=UserCtrlWidget-53169129.js.map
