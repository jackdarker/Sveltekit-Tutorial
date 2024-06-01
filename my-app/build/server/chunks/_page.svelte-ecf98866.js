import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape, b as each, f as compute_rest_props, g as spread, h as escape_attribute_value, i as escape_object } from './ssr-563293b8.js';
import './stores2-12b1cc25.js';
import { p as page } from './stores-394f2dce.js';
import { U as UserCtrlWidget, B as Button$1, S as Select$1, a as SelectItem$1 } from './UserCtrlWidget-53169129.js';
import { S as Search$1, a as Tag$1, F as Form$1, T as TextInput$1 } from './TextInput-ad73aca8.js';
import './index-eb362a87.js';

const ChevronLeft = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M10 16L20 6 21.4 7.4 12.8 16 21.4 24.6 20 26z"></path></svg>`;
});
const Save = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M27.71,9.29l-5-5A1,1,0,0,0,22,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V10A1,1,0,0,0,27.71,9.29ZM12,6h8v4H12Zm8,20H12V18h8Zm2,0V18a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2v8H6V6h4v4a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V6.41l4,4V26Z"></path></svg>`;
});
const Undo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M20,10H7.8149l3.5874-3.5859L10,5,4,11,10,17l1.4023-1.4146L7.8179,12H20a6,6,0,0,1,0,12H12v2h8a8,8,0,0,0,0-16Z"></path></svg>`;
});
const css = {
  code: ".myForm.svelte-ncv9u{margin:0.5em;padding:0.5em;border-style:solid;border-width:2px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const redirectTo = decodeURIComponent($page.url.searchParams.get("from") || "");
  let { data } = $$props;
  let search = "", modified = false;
  let locAssignedTags = [];
  let locUnassignedTags = [];
  function afterReload(_data) {
    locAssignedTags = [];
    locUnassignedTags = [];
    let tag, index;
    for (var i = 0; i < _data.myTags.length; i++) {
      locAssignedTags.push(_data.myTags[i]);
    }
    for (var i = 0; i < _data.allTags.length; i++) {
      tag = _data.allTags[i];
      index = locAssignedTags.findIndex((e) => {
        return e.id === tag.id;
      });
      if (index < 0)
        locUnassignedTags.push(tag);
    }
    locAssignedTags = locAssignedTags;
    locUnassignedTags = locUnassignedTags;
    modified = false;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      afterReload(data);
    }
    $$rendered = `${validate_component(UserCtrlWidget, "UserCtrlWidget").$$render($$result, {}, {}, {})} <hr> <div>${validate_component(Button$1, "Button").$$render(
      $$result,
      {
        size: "field",
        iconDescription: "Back",
        icon: ChevronLeft,
        href: redirectTo
      },
      {},
      {}
    )} ${validate_component(Button$1, "Button").$$render(
      $$result,
      {
        disabled: !modified,
        size: "field",
        iconDescription: "Save",
        icon: Save
      },
      {},
      {}
    )} ${validate_component(Button$1, "Button").$$render(
      $$result,
      {
        disabled: !modified,
        size: "field",
        iconDescription: "Undo",
        icon: Undo
      },
      {},
      {}
    )} <span>Editing ${escape(data.item.name)}</span></div> <div class="myForm svelte-ncv9u"><div><p data-svelte-h="svelte-1fw8fpw">Unassigned Tags</p>${validate_component(Search$1, "Search").$$render(
      $$result,
      { size: "sm", autocomplete: "on", search },
      {
        search: ($$value) => {
          search = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${each(locUnassignedTags, (tag, i) => {
      return `${validate_component(Tag$1, "Tag").$$render(
        $$result,
        {
          id: tag.id,
          type: tag.color,
          style: "background-color:" + tag.color + ";",
          interactive: true
        },
        {},
        {
          default: () => {
            return `${escape(tag.name)}`;
          }
        }
      )}`;
    })}</div></div> <div class="myForm svelte-ncv9u"><div><p data-svelte-h="svelte-2p88vh">Assigned Tags</p> ${each(locAssignedTags, (tag, i) => {
      return `${validate_component(Tag$1, "Tag").$$render(
        $$result,
        {
          id: tag.id,
          type: tag.color,
          style: "background-color:" + tag.color + ";",
          interactive: true
        },
        {},
        {
          default: () => {
            return `${escape(tag.name)}`;
          }
        }
      )}`;
    })}</div></div> <div class="myForm svelte-ncv9u">${validate_component(Form$1, "Form").$$render($$result, { method: "POST", action: "?/create" }, {}, {
      default: () => {
        return `<label>create/modify a tag:
        ${validate_component(TextInput$1, "TextInput").$$render(
          $$result,
          {
            inline: "true",
            labelText: "Name",
            name: "id",
            autocomplete: "off"
          },
          {},
          {}
        )} ${validate_component(TextInput$1, "TextInput").$$render(
          $$result,
          {
            inline: "true",
            labelText: "New-Name",
            name: "newname",
            autocomplete: "off"
          },
          {},
          {}
        )} ${validate_component(Select$1, "Select").$$render(
          $$result,
          {
            inline: "true",
            labelText: "color",
            name: "group"
          },
          {},
          {
            default: () => {
              return `${each(data.tagGroups, (group, i) => {
                return `${validate_component(SelectItem$1, "SelectItem").$$render($$result, { value: group.id, text: group.name }, {}, {})}`;
              })}`;
            }
          }
        )} <input type="submit"></label>`;
      }
    })}</div> <div class="myForm svelte-ncv9u">${validate_component(Form$1, "Form").$$render(
      $$result,
      {
        name: "myForm",
        method: "POST",
        action: "?/delete"
      },
      {},
      {
        default: () => {
          return `<label>delete a tag:
        ${validate_component(TextInput$1, "TextInput").$$render($$result, { name: "id", autocomplete: "off" }, {}, {})}<input type="submit"></label>`;
        }
      }
    )}</div> ${validate_component(Form$1, "Form").$$render(
      $$result,
      {
        name: "myForm2",
        method: "POST",
        action: "?/delete",
        hidden: true
      },
      {},
      {
        default: () => {
          return `<label data-svelte-h="svelte-1634ybc">delete a tag:
        <input name="id" autocomplete="off"></label>`;
        }
      }
    )} ${validate_component(Form$1, "Form").$$render(
      $$result,
      {
        name: "assignForm",
        id: "assignForm",
        method: "POST",
        enctype: "multipart/form-data",
        action: "?/assign",
        hidden: true
      },
      {},
      {
        default: () => {
          return `<input name="idlist" autocomplete="off">`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ecf98866.js.map
