import { c as create_ssr_component, v as validate_component, e as escape, a as subscribe, b as each, n as null_to_empty, d as add_attribute, f as compute_rest_props, g as spread, h as escape_attribute_value, i as escape_object, j as add_classes, k as createEventDispatcher, s as setContext, m as missing_component, l as getContext } from './ssr-563293b8.js';
import './stores2-12b1cc25.js';
import { w as writable } from './index-eb362a87.js';
import { T as TextInput$1, F as Form$1, S as Search$1, a as Tag$1 } from './TextInput-ad73aca8.js';
import { B as Button$1, U as UserCtrlWidget, C as ChevronDown$1, S as Select$1, a as SelectItem$1 } from './UserCtrlWidget-53169129.js';
import { p as page } from './stores-394f2dce.js';

const TagEdit$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M29.707 7.293l-3-3a.9994.9994 0 00-1.414 0L16 13.5859V18h4.4141L29.707 8.707A.9994.9994 0 0029.707 7.293zM19.5859 16H18V14.4141l5-5L24.5859 11zM26 9.5859L24.4141 8 26 6.4141 27.5859 8zM10 14a4 4 0 114-4A4.0045 4.0045 0 0110 14zm0-6a2 2 0 101.998 2.0044A2.002 2.002 0 0010 8z"></path><path d="M27.0059,14.2354l-1.4141,1.414L28,18.0576,18.0579,28,4,13.9414V4h9.9417l4.4067,4.4067,1.4141-1.4145-4.407-4.4063A2,2,0,0,0,13.9414,2H4A2,2,0,0,0,2,4v9.9414a2,2,0,0,0,.5857,1.4141L16.6436,29.4146a2.001,2.001,0,0,0,2.8286,0l9.9424-9.9424a2.001,2.001,0,0,0,0-2.8286Z"></path></svg>`;
});
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate" || key === "on_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const ContentSwitcher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentIndex;
  let switches;
  let $$restProps = compute_rest_props($$props, ["selectedIndex", "size"]);
  let { selectedIndex = 0 } = $$props;
  let { size = void 0 } = $$props;
  const dispatch = createEventDispatcher();
  const currentId = writable(null);
  setContext("ContentSwitcher", {
    currentId,
    add: ({ id, text, selected }) => {
      if (selected) {
        selectedIndex = switches.length;
      }
      switches = [...switches, { id, text, selected }];
    },
    update: (id) => {
      selectedIndex = switches.map(({ id: id2 }) => id2).indexOf(id);
    },
    change: (direction) => {
      let index = currentIndex + direction;
      if (index < 0) {
        index = switches.length - 1;
      } else if (index >= switches.length) {
        index = 0;
      }
      selectedIndex = index;
    }
  });
  if ($$props.selectedIndex === void 0 && $$bindings.selectedIndex && selectedIndex !== void 0)
    $$bindings.selectedIndex(selectedIndex);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  currentIndex = -1;
  switches = [];
  {
    if (switches[currentIndex]) {
      dispatch("change", currentIndex);
      currentId.set(switches[currentIndex].id);
    }
  }
  return `  <div${spread([{ role: "tablist" }, escape_object($$restProps)], {
    classes: "bx--content-switcher " + (size === "sm" ? "bx--content-switcher--sm" : "") + " " + (size === "xl" ? "bx--content-switcher--xl" : "")
  })}>${slots.default ? slots.default({}) : ``}</div>`;
});
const ContentSwitcher$1 = ContentSwitcher;
const Switch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["text", "selected", "disabled", "id", "ref"]);
  let { text = "Provide text" } = $$props;
  let { selected = false } = $$props;
  let { disabled = false } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { ref = null } = $$props;
  const ctx = getContext("ContentSwitcher");
  ctx.add({ id, text, selected });
  ctx.currentId.subscribe(($) => {
    selected = $ === id;
  });
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return ` <button${spread(
    [
      { type: "button" },
      { role: "tab" },
      {
        tabindex: escape_attribute_value(selected ? "0" : "-1")
      },
      {
        "aria-selected": escape_attribute_value(selected)
      },
      { disabled: disabled || null },
      { id: escape_attribute_value(id) },
      escape_object($$restProps)
    ],
    {
      classes: "bx--content-switcher-btn " + (selected ? "bx--content-switcher--selected" : "")
    }
  )}${add_attribute("this", ref, 0)}><span${add_classes("bx--content-switcher__label".trim())}>${slots.default ? slots.default({}) : `${escape(text)}`}</span></button>`;
});
const Switch$1 = Switch;
const CaretRight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M12 8L22 16 12 24z"></path></svg>`;
});
const CaretRight$1 = CaretRight;
const CaretLeft = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M20 24L10 16 20 8z"></path></svg>`;
});
const CaretLeft$1 = CaretLeft;
const Pagination = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let totalPages;
  let selectItems;
  let backButtonDisabled;
  let forwardButtonDisabled;
  let $$restProps = compute_rest_props($$props, [
    "page",
    "totalItems",
    "disabled",
    "forwardText",
    "backwardText",
    "itemsPerPageText",
    "itemText",
    "itemRangeText",
    "pageInputDisabled",
    "pageSizeInputDisabled",
    "pageSize",
    "pageSizes",
    "pagesUnknown",
    "pageText",
    "pageRangeText",
    "id"
  ]);
  let { page: page2 = 1 } = $$props;
  let { totalItems = 0 } = $$props;
  let { disabled = false } = $$props;
  let { forwardText = "Next page" } = $$props;
  let { backwardText = "Previous page" } = $$props;
  let { itemsPerPageText = "Items per page:" } = $$props;
  let { itemText = (min, max) => `${min}–${max} item${max === 1 ? "" : "s"}` } = $$props;
  let { itemRangeText = (min, max, total) => `${min}–${max} of ${total} item${max === 1 ? "" : "s"}` } = $$props;
  let { pageInputDisabled = false } = $$props;
  let { pageSizeInputDisabled = false } = $$props;
  let { pageSize = 10 } = $$props;
  let { pageSizes = [10] } = $$props;
  let { pagesUnknown = false } = $$props;
  let { pageText = (page3) => `page ${page3}` } = $$props;
  let { pageRangeText = (current, total) => `of ${total} page${total === 1 ? "" : "s"}` } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  const dispatch = createEventDispatcher();
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.totalItems === void 0 && $$bindings.totalItems && totalItems !== void 0)
    $$bindings.totalItems(totalItems);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.forwardText === void 0 && $$bindings.forwardText && forwardText !== void 0)
    $$bindings.forwardText(forwardText);
  if ($$props.backwardText === void 0 && $$bindings.backwardText && backwardText !== void 0)
    $$bindings.backwardText(backwardText);
  if ($$props.itemsPerPageText === void 0 && $$bindings.itemsPerPageText && itemsPerPageText !== void 0)
    $$bindings.itemsPerPageText(itemsPerPageText);
  if ($$props.itemText === void 0 && $$bindings.itemText && itemText !== void 0)
    $$bindings.itemText(itemText);
  if ($$props.itemRangeText === void 0 && $$bindings.itemRangeText && itemRangeText !== void 0)
    $$bindings.itemRangeText(itemRangeText);
  if ($$props.pageInputDisabled === void 0 && $$bindings.pageInputDisabled && pageInputDisabled !== void 0)
    $$bindings.pageInputDisabled(pageInputDisabled);
  if ($$props.pageSizeInputDisabled === void 0 && $$bindings.pageSizeInputDisabled && pageSizeInputDisabled !== void 0)
    $$bindings.pageSizeInputDisabled(pageSizeInputDisabled);
  if ($$props.pageSize === void 0 && $$bindings.pageSize && pageSize !== void 0)
    $$bindings.pageSize(pageSize);
  if ($$props.pageSizes === void 0 && $$bindings.pageSizes && pageSizes !== void 0)
    $$bindings.pageSizes(pageSizes);
  if ($$props.pagesUnknown === void 0 && $$bindings.pagesUnknown && pagesUnknown !== void 0)
    $$bindings.pagesUnknown(pagesUnknown);
  if ($$props.pageText === void 0 && $$bindings.pageText && pageText !== void 0)
    $$bindings.pageText(pageText);
  if ($$props.pageRangeText === void 0 && $$bindings.pageRangeText && pageRangeText !== void 0)
    $$bindings.pageRangeText(pageRangeText);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      dispatch("update", { pageSize, page: page2 });
    }
    totalPages = Math.max(Math.ceil(totalItems / pageSize), 1);
    selectItems = Array.from({ length: totalPages }, (_, i) => i);
    backButtonDisabled = disabled || page2 === 1;
    forwardButtonDisabled = disabled || page2 === totalPages;
    $$rendered = `<div${spread([{ id: escape_attribute_value(id) }, escape_object($$restProps)], { classes: "bx--pagination" })}><div${add_classes("bx--pagination__left".trim())}>${!pageSizeInputDisabled ? `<label id="${"bx--pagination-select-" + escape(id, true) + "-count-label"}" for="${"bx--pagination-select-" + escape(id, true)}"${add_classes("bx--pagination__text".trim())}>${escape(itemsPerPageText)}</label> ${validate_component(Select$1, "Select").$$render(
      $$result,
      {
        id: "bx--pagination-select-" + id,
        class: "bx--select__item-count",
        hideLabel: true,
        noLabel: true,
        inline: true,
        selected: pageSize
      },
      {
        selected: ($$value) => {
          pageSize = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(pageSizes, (size, i) => {
            return `${validate_component(SelectItem$1, "SelectItem").$$render($$result, { value: size, text: size.toString() }, {}, {})}`;
          })}`;
        }
      }
    )}` : ``} <span${add_classes((!pageSizeInputDisabled ? "bx--pagination__text" : "").trim())}>${pagesUnknown ? `${escape(itemText(pageSize * (page2 - 1) + 1, page2 * pageSize))}` : `${escape(itemRangeText(Math.min(pageSize * (page2 - 1) + 1, totalItems), Math.min(page2 * pageSize, totalItems), totalItems))}`}</span></div> <div${add_classes("bx--pagination__right".trim())}>${!pageInputDisabled ? `${validate_component(Select$1, "Select").$$render(
      $$result,
      {
        id: "bx--pagination-select-" + (id + 2),
        class: "bx--select__page-number",
        labelText: "Page number, of " + totalPages + " pages",
        inline: true,
        hideLabel: true,
        selected: page2
      },
      {
        selected: ($$value) => {
          page2 = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(selectItems, (size, i) => {
            return `${validate_component(SelectItem$1, "SelectItem").$$render(
              $$result,
              {
                value: size + 1,
                text: (size + 1).toString()
              },
              {},
              {}
            )}`;
          })}`;
        }
      }
    )} <span${add_classes("bx--pagination__text".trim())}>${pagesUnknown ? `${escape(pageText(page2))}` : `${escape(pageRangeText(page2, totalPages))}`}</span>` : ``} ${validate_component(Button$1, "Button").$$render(
      $$result,
      {
        kind: "ghost",
        tooltipAlignment: "center",
        tooltipPosition: "top",
        icon: CaretLeft$1,
        iconDescription: backwardText,
        disabled: backButtonDisabled,
        class: "bx--pagination__button bx--pagination__button--backward " + (backButtonDisabled ? "bx--pagination__button--no-index" : "")
      },
      {},
      {}
    )} ${validate_component(Button$1, "Button").$$render(
      $$result,
      {
        kind: "ghost",
        tooltipAlignment: "end",
        tooltipPosition: "top",
        icon: CaretRight$1,
        iconDescription: forwardText,
        disabled: forwardButtonDisabled,
        class: "bx--pagination__button bx--pagination__button--forward " + (forwardButtonDisabled ? "bx--pagination__button--no-index" : "")
      },
      {},
      {}
    )}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const Pagination$1 = Pagination;
const ExpandableTile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "expanded",
    "light",
    "tileMaxHeight",
    "tilePadding",
    "tileCollapsedIconText",
    "tileExpandedIconText",
    "tileExpandedLabel",
    "tileCollapsedLabel",
    "tabindex",
    "id",
    "ref"
  ]);
  let { expanded = false } = $$props;
  let { light = false } = $$props;
  let { tileMaxHeight = 0 } = $$props;
  let { tilePadding = 0 } = $$props;
  let { tileCollapsedIconText = "Interact to expand Tile" } = $$props;
  let { tileExpandedIconText = "Interact to collapse Tile" } = $$props;
  let { tileExpandedLabel = "" } = $$props;
  let { tileCollapsedLabel = "" } = $$props;
  let { tabindex = "0" } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { ref = null } = $$props;
  let refAbove = null;
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0)
    $$bindings.expanded(expanded);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.tileMaxHeight === void 0 && $$bindings.tileMaxHeight && tileMaxHeight !== void 0)
    $$bindings.tileMaxHeight(tileMaxHeight);
  if ($$props.tilePadding === void 0 && $$bindings.tilePadding && tilePadding !== void 0)
    $$bindings.tilePadding(tilePadding);
  if ($$props.tileCollapsedIconText === void 0 && $$bindings.tileCollapsedIconText && tileCollapsedIconText !== void 0)
    $$bindings.tileCollapsedIconText(tileCollapsedIconText);
  if ($$props.tileExpandedIconText === void 0 && $$bindings.tileExpandedIconText && tileExpandedIconText !== void 0)
    $$bindings.tileExpandedIconText(tileExpandedIconText);
  if ($$props.tileExpandedLabel === void 0 && $$bindings.tileExpandedLabel && tileExpandedLabel !== void 0)
    $$bindings.tileExpandedLabel(tileExpandedLabel);
  if ($$props.tileCollapsedLabel === void 0 && $$bindings.tileCollapsedLabel && tileCollapsedLabel !== void 0)
    $$bindings.tileCollapsedLabel(tileCollapsedLabel);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return ` <button${spread(
    [
      { type: "button" },
      { id: escape_attribute_value(id) },
      {
        "aria-expanded": escape_attribute_value(expanded)
      },
      {
        tabindex: escape_attribute_value(tabindex)
      },
      {
        title: escape_attribute_value(expanded ? tileExpandedIconText : tileCollapsedIconText)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--tile bx--tile--expandable " + (expanded ? "bx--tile--is-expanded" : "") + " " + (light ? "bx--tile--light" : ""),
      styles: {
        "max-height": expanded ? "none" : `${tileMaxHeight + tilePadding}px`
      }
    }
  )}${add_attribute("this", ref, 0)}><div><div${add_classes("bx--tile-content".trim())}${add_attribute("this", refAbove, 0)}><span${add_classes("bx--tile-content__above-the-fold".trim())}>${slots.above ? slots.above({}) : ``}</span></div> <div${add_classes("bx--tile__chevron".trim())}><span>${escape(expanded ? tileExpandedLabel : tileCollapsedLabel)}</span> ${validate_component(ChevronDown$1, "ChevronDown").$$render($$result, {}, {}, {})}</div> <div${add_classes("bx--tile-content".trim())}><span${add_classes("bx--tile-content__below-the-fold".trim())}>${slots.below ? slots.below({}) : ``}</span></div></div></button>`;
});
const ExpandableTile$1 = ExpandableTile;
const Information = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M17 22L17 14 13 14 13 16 15 16 15 22 12 22 12 24 20 24 20 22 17 22zM16 8a1.5 1.5 0 101.5 1.5A1.5 1.5 0 0016 8z"></path><path d="M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4Z"></path></svg>`;
});
const Information$1 = Information;
const Tooltip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let buttonProps;
  let $$restProps = compute_rest_props($$props, [
    "align",
    "direction",
    "open",
    "hideIcon",
    "icon",
    "iconDescription",
    "iconName",
    "tabindex",
    "tooltipId",
    "triggerId",
    "triggerText",
    "ref",
    "refTooltip",
    "refIcon"
  ]);
  let { align = "center" } = $$props;
  let { direction = "bottom" } = $$props;
  let { open = false } = $$props;
  let { hideIcon = false } = $$props;
  let { icon = Information$1 } = $$props;
  let { iconDescription = "" } = $$props;
  let { iconName = "" } = $$props;
  let { tabindex = "0" } = $$props;
  let { tooltipId = "ccs-" + Math.random().toString(36) } = $$props;
  let { triggerId = "ccs-" + Math.random().toString(36) } = $$props;
  let { triggerText = "" } = $$props;
  let { ref = null } = $$props;
  let { refTooltip = null } = $$props;
  let { refIcon = null } = $$props;
  const dispatch = createEventDispatcher();
  const tooltipOpen = writable(open);
  setContext("Tooltip", { tooltipOpen });
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.hideIcon === void 0 && $$bindings.hideIcon && hideIcon !== void 0)
    $$bindings.hideIcon(hideIcon);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
  if ($$props.iconName === void 0 && $$bindings.iconName && iconName !== void 0)
    $$bindings.iconName(iconName);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  if ($$props.tooltipId === void 0 && $$bindings.tooltipId && tooltipId !== void 0)
    $$bindings.tooltipId(tooltipId);
  if ($$props.triggerId === void 0 && $$bindings.triggerId && triggerId !== void 0)
    $$bindings.triggerId(triggerId);
  if ($$props.triggerText === void 0 && $$bindings.triggerText && triggerText !== void 0)
    $$bindings.triggerText(triggerText);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.refTooltip === void 0 && $$bindings.refTooltip && refTooltip !== void 0)
    $$bindings.refTooltip(refTooltip);
  if ($$props.refIcon === void 0 && $$bindings.refIcon && refIcon !== void 0)
    $$bindings.refIcon(refIcon);
  {
    tooltipOpen.set(open);
  }
  {
    dispatch(open ? "open" : "close");
  }
  buttonProps = {
    role: "button",
    "aria-haspopup": "true",
    id: hideIcon ? triggerId : void 0,
    class: hideIcon ? "bx--tooltip__label" : "bx--tooltip__trigger",
    "aria-expanded": open,
    "aria-describedby": open ? tooltipId : void 0,
    "aria-labelledby": triggerText ? triggerId : void 0,
    "aria-label": triggerText ? void 0 : iconDescription,
    tabindex,
    style: hideIcon ? $$restProps.style : void 0
  };
  return ` <div${spread(
    [
      escape_object($$restProps),
      {
        style: escape(open ? "z-index: 1;" : "", true) + escape($$restProps.style, true) + "; position: relative;"
      }
    ],
    {}
  )}>${!hideIcon ? `<div${add_attribute("id", triggerId, 0)}${add_classes("bx--tooltip__label".trim())}${add_attribute("this", ref, 0)}>${slots.triggerText ? slots.triggerText({}) : `${escape(triggerText)}`}  <div${spread(
    [
      escape_object(buttonProps),
      {
        "aria-describedby": escape_attribute_value(tooltipId)
      }
    ],
    {}
  )}${add_attribute("this", refIcon, 0)}>${slots.icon ? slots.icon({}) : ` ${validate_component(icon || missing_component, "svelte:component").$$render($$result, { name: iconName }, {}, {})} `}</div></div>` : ` <div${spread(
    [
      escape_object(buttonProps),
      {
        "aria-describedby": escape_attribute_value(tooltipId)
      }
    ],
    {}
  )}${add_attribute("this", ref, 0)}>${slots.triggerText ? slots.triggerText({}) : `${escape(triggerText)}`}</div>`} ${open ? ` <div${add_attribute("id", tooltipId, 0)}${add_attribute("data-floating-menu-direction", direction, 0)}${add_classes(("bx--tooltip " + (open ? "bx--tooltip--shown" : "") + " " + (direction === "top" ? "bx--tooltip--top" : "") + " " + (direction === "right" ? "bx--tooltip--right" : "") + " " + (direction === "bottom" ? "bx--tooltip--bottom" : "") + " " + (direction === "left" ? "bx--tooltip--left" : "") + " " + (align === "center" ? "bx--tooltip--align-center" : "") + " " + (align === "start" ? "bx--tooltip--align-start" : "") + " " + (align === "end" ? "bx--tooltip--align-end" : "")).trim())}${add_attribute("this", refTooltip, 0)}><span${add_classes("bx--tooltip__caret".trim())}></span>   <div tabindex="-1" role="dialog"${add_classes("bx--tooltip__content".trim())}>${slots.default ? slots.default({}) : ``}</div></div>` : ``}</div>`;
});
const Tooltip$1 = Tooltip;
const CaretDown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M24 12L16 22 8 12z"></path></svg>`;
});
const CaretDown$1 = CaretDown;
const TreeViewNode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $activeNodeId, $$unsubscribe_activeNodeId;
  let $selectedNodeIds, $$unsubscribe_selectedNodeIds;
  let { leaf = false } = $$props;
  let { id = "" } = $$props;
  let { text = "" } = $$props;
  let { disabled = false } = $$props;
  let { icon = void 0 } = $$props;
  let ref = null;
  let refLabel = null;
  const { activeNodeId, selectedNodeIds, clickNode, selectNode, focusNode } = getContext("TreeView");
  $$unsubscribe_activeNodeId = subscribe(activeNodeId, (value) => $activeNodeId = value);
  $$unsubscribe_selectedNodeIds = subscribe(selectedNodeIds, (value) => $selectedNodeIds = value);
  if ($$props.leaf === void 0 && $$bindings.leaf && leaf !== void 0)
    $$bindings.leaf(leaf);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  $$unsubscribe_activeNodeId();
  $$unsubscribe_selectedNodeIds();
  return ` <li role="treeitem"${add_attribute("id", id, 0)}${add_attribute("tabindex", disabled ? void 0 : -1, 0)}${add_attribute("aria-current", id === $activeNodeId || void 0, 0)}${add_attribute("aria-selected", disabled ? void 0 : $selectedNodeIds.includes(id), 0)}${add_attribute("aria-disabled", disabled, 0)}${add_classes(("bx--tree-node bx--tree-leaf-node " + (id === $activeNodeId ? "bx--tree-node--active" : "") + " " + ($selectedNodeIds.includes(id) ? "bx--tree-node--selected" : "") + " " + (disabled ? "bx--tree-node--disabled" : "") + " " + (icon ? "bx--tree-node--with-icon" : "")).trim())}${add_attribute("this", ref, 0)}><div${add_classes("bx--tree-node__label".trim())}${add_attribute("this", refLabel, 0)}>${validate_component(icon || missing_component, "svelte:component").$$render($$result, { class: "bx--tree-node__icon" }, {}, {})} ${escape(text)}</div></li>`;
});
const TreeViewNode$1 = TreeViewNode;
const TreeViewNodeList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let expanded;
  let $expandedNodeIds, $$unsubscribe_expandedNodeIds;
  let $activeNodeId, $$unsubscribe_activeNodeId;
  let $selectedNodeIds, $$unsubscribe_selectedNodeIds;
  let { children = [] } = $$props;
  let { root = false } = $$props;
  let { id = "" } = $$props;
  let { text = "" } = $$props;
  let { disabled = false } = $$props;
  let { icon = void 0 } = $$props;
  let ref = null;
  let refLabel = null;
  const { activeNodeId, selectedNodeIds, expandedNodeIds, clickNode, selectNode, expandNode, focusNode, toggleNode } = getContext("TreeView");
  $$unsubscribe_activeNodeId = subscribe(activeNodeId, (value) => $activeNodeId = value);
  $$unsubscribe_selectedNodeIds = subscribe(selectedNodeIds, (value) => $selectedNodeIds = value);
  $$unsubscribe_expandedNodeIds = subscribe(expandedNodeIds, (value) => $expandedNodeIds = value);
  if ($$props.children === void 0 && $$bindings.children && children !== void 0)
    $$bindings.children(children);
  if ($$props.root === void 0 && $$bindings.root && root !== void 0)
    $$bindings.root(root);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  expanded = $expandedNodeIds.includes(id);
  $$unsubscribe_expandedNodeIds();
  $$unsubscribe_activeNodeId();
  $$unsubscribe_selectedNodeIds();
  return `${root ? `${each(children, (child) => {
    return `${Array.isArray(child.children) ? `${validate_component(TreeViewNodeList, "svelte:self").$$render($$result, Object.assign({}, child), {}, {})}` : `${validate_component(TreeViewNode$1, "TreeViewNode").$$render($$result, Object.assign({}, { leaf: true }, child), {}, {})}`}`;
  })}` : ` <li role="treeitem"${add_attribute("id", id, 0)}${add_attribute("tabindex", disabled ? void 0 : -1, 0)}${add_attribute("aria-current", id === $activeNodeId || void 0, 0)}${add_attribute("aria-selected", disabled ? void 0 : $selectedNodeIds.includes(id), 0)}${add_attribute("aria-disabled", disabled, 0)}${add_attribute("aria-expanded", expanded, 0)}${add_classes(("bx--tree-node bx--tree-parent-node " + (id === $activeNodeId ? "bx--tree-node--active" : "") + " " + ($selectedNodeIds.includes(id) ? "bx--tree-node--selected" : "") + " " + (disabled ? "bx--tree-node--disabled" : "") + " " + (icon ? "bx--tree-node--with-icon" : "")).trim())}${add_attribute("this", ref, 0)}><div${add_classes("bx--tree-node__label".trim())}${add_attribute("this", refLabel, 0)}>  <span ${disabled ? "disabled" : ""}${add_classes("bx--tree-parent-node__toggle".trim())}>${validate_component(CaretDown$1, "CaretDown").$$render(
    $$result,
    {
      class: "bx--tree-parent-node__toggle-icon " + (expanded && "bx--tree-parent-node__toggle-icon--expanded")
    },
    {},
    {}
  )}</span> <span${add_classes("bx--tree-node__label__details".trim())}>${validate_component(icon || missing_component, "svelte:component").$$render($$result, { class: "bx--tree-node__icon" }, {}, {})} ${escape(text)}</span></div> ${expanded ? `<ul role="group"${add_classes("bx--tree-node__children".trim())}>${each(children, (child) => {
    return `${Array.isArray(child.children) ? `${validate_component(TreeViewNodeList, "svelte:self").$$render($$result, Object.assign({}, child), {}, {})}` : `${validate_component(TreeViewNode$1, "TreeViewNode").$$render($$result, Object.assign({}, { leaf: true }, child), {}, {})}`}`;
  })}</ul>` : ``}</li>`}`;
});
const TreeViewNodeList$1 = TreeViewNodeList;
const TreeView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let nodes;
  let nodeIds;
  let $$restProps = compute_rest_props($$props, [
    "children",
    "activeId",
    "selectedIds",
    "expandedIds",
    "size",
    "labelText",
    "hideLabel",
    "expandAll",
    "collapseAll",
    "expandNodes",
    "collapseNodes"
  ]);
  let { children = [] } = $$props;
  let { activeId = "" } = $$props;
  let { selectedIds = [] } = $$props;
  let { expandedIds = [] } = $$props;
  let { size = "default" } = $$props;
  let { labelText = "" } = $$props;
  let { hideLabel = false } = $$props;
  function expandAll() {
    expandedIds = [...nodeIds];
  }
  function collapseAll() {
    expandedIds = [];
  }
  function expandNodes(filterNode = (node) => false) {
    expandedIds = nodes.filter((node) => filterNode(node) || node.children?.some((child) => filterNode(child) && child.children)).map((node) => node.id);
  }
  function collapseNodes(filterNode = (node) => true) {
    expandedIds = nodes.filter((node) => expandedIds.includes(node.id) && !filterNode(node)).map((node) => node.id);
  }
  const dispatch = createEventDispatcher();
  const labelId = `label-${Math.random().toString(36)}`;
  const activeNodeId = writable(activeId);
  const selectedNodeIds = writable(selectedIds);
  const expandedNodeIds = writable(expandedIds);
  let ref = null;
  setContext("TreeView", {
    activeNodeId,
    selectedNodeIds,
    expandedNodeIds,
    clickNode: (node) => {
      activeId = node.id;
      selectedIds = [node.id];
      dispatch("select", node);
    },
    selectNode: (node) => {
      selectedIds = [node.id];
    },
    expandNode: (node, expanded) => {
      if (expanded) {
        expandedIds = [...expandedIds, node.id];
      } else {
        expandedIds = expandedIds.filter((_id) => _id !== node.id);
      }
    },
    focusNode: (node) => dispatch("focus", node),
    toggleNode: (node) => dispatch("toggle", node)
  });
  function traverse(children2) {
    let nodes2 = [];
    children2.forEach((node) => {
      nodes2.push(node);
      if (Array.isArray(node.children)) {
        nodes2 = [...nodes2, ...traverse(node.children)];
      }
    });
    return nodes2;
  }
  if ($$props.children === void 0 && $$bindings.children && children !== void 0)
    $$bindings.children(children);
  if ($$props.activeId === void 0 && $$bindings.activeId && activeId !== void 0)
    $$bindings.activeId(activeId);
  if ($$props.selectedIds === void 0 && $$bindings.selectedIds && selectedIds !== void 0)
    $$bindings.selectedIds(selectedIds);
  if ($$props.expandedIds === void 0 && $$bindings.expandedIds && expandedIds !== void 0)
    $$bindings.expandedIds(expandedIds);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.expandAll === void 0 && $$bindings.expandAll && expandAll !== void 0)
    $$bindings.expandAll(expandAll);
  if ($$props.collapseAll === void 0 && $$bindings.collapseAll && collapseAll !== void 0)
    $$bindings.collapseAll(collapseAll);
  if ($$props.expandNodes === void 0 && $$bindings.expandNodes && expandNodes !== void 0)
    $$bindings.expandNodes(expandNodes);
  if ($$props.collapseNodes === void 0 && $$bindings.collapseNodes && collapseNodes !== void 0)
    $$bindings.collapseNodes(collapseNodes);
  nodes = traverse(children);
  nodeIds = nodes.map((node) => node.id);
  {
    activeNodeId.set(activeId);
  }
  {
    selectedNodeIds.set(selectedIds);
  }
  {
    expandedNodeIds.set(expandedIds);
  }
  return `${!hideLabel ? ` <label${add_attribute("id", labelId, 0)}${add_classes("bx--label".trim())}>${slots.labelText ? slots.labelText({}) : `${escape(labelText)}`}</label>` : ``}  <ul${spread(
    [
      escape_object($$restProps),
      { role: "tree" },
      {
        "aria-label": escape_attribute_value(hideLabel ? labelText : void 0)
      },
      {
        "aria-labelledby": escape_attribute_value(!hideLabel ? labelId : void 0)
      },
      {
        "aria-multiselectable": escape_attribute_value(selectedIds.length > 1 || void 0)
      }
    ],
    {
      classes: "bx--tree " + (size === "default" ? "bx--tree--default" : "") + " " + (size === "compact" ? "bx--tree--compact" : "")
    }
  )}${add_attribute("this", ref, 0)}>${validate_component(TreeViewNodeList$1, "TreeViewNodeList").$$render($$result, { root: true, children }, {}, {})}</ul>`;
});
const TreeView$1 = TreeView;
const goto = /* @__PURE__ */ client_method("goto");
async function loadImage(imgElement, file, thumb) {
  const myImage = document.querySelector(imgElement);
  if (!myImage)
    return;
  if (file === "") {
    myImage.src = "";
    return;
  }
  const url = "/api?op=file" + (thumb ? "&thumb=" + thumb.toString() : "") + "&file=" + encodeURIComponent(file);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error, status = ${response.status}`);
  } else {
    const blob = await response.blob();
    myImage.src = URL.createObjectURL(blob);
    myImage.onload = () => {
      URL.revokeObjectURL(myImage.src);
    };
  }
}
async function loadDirectory(path) {
  let data = {};
  const response = await fetch("/api?op=dir&path=" + encodeURIComponent(path));
  if (!response.ok) {
    throw new Error(`HTTP error, status = ${response.status}`);
  } else {
    data = await response.json();
  }
  return data;
}
const ROOT_ID = "_ROOT_";
function _onselectdir(detail) {
  console.log("select", detail);
}
function _onsearch(detail) {
  console.log("search", detail);
}
const Search_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onselectdir = _onselectdir } = $$props;
  let { onsearch = _onsearch } = $$props;
  let activeId = "";
  let selectedIds = [];
  let children = [], dirlookup = {}, nodesToLoad = [];
  let selectedIndex = 0;
  let searchterm = "";
  function updateDirTree(dirtree, updateID) {
    let node;
    if (updateID === "") {
      children = [
        {
          id: ROOT_ID,
          text: ROOT_ID,
          children: dirtree
        }
      ];
    } else {
      node = dirlookup[updateID];
      node.children = dirtree.length === 0 ? null : dirtree;
    }
    for (var i = 0; i < dirtree.length; i++) {
      let sub = dirtree[i];
      sub.children = [];
      dirlookup[sub.id] = sub;
      nodesToLoad.push(sub.id);
    }
    if (nodesToLoad.length > 0) {
      loadDir(nodesToLoad.shift());
    } else {
      children = children;
    }
  }
  function loadDir(path) {
    loadDirectory(path).then(function(response) {
      updateDirTree(response.dirs, path);
    }).catch((error) => {
      console.error(error);
    }).finally(() => {
    });
  }
  if ($$props.onselectdir === void 0 && $$bindings.onselectdir && onselectdir !== void 0)
    $$bindings.onselectdir(onselectdir);
  if ($$props.onsearch === void 0 && $$bindings.onsearch && onsearch !== void 0)
    $$bindings.onsearch(onsearch);
  if ($$props.loadDir === void 0 && $$bindings.loadDir && loadDir !== void 0)
    $$bindings.loadDir(loadDir);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<aside> ${validate_component(ContentSwitcher$1, "ContentSwitcher").$$render(
      $$result,
      { size: "sm", selectedIndex },
      {
        selectedIndex: ($$value) => {
          selectedIndex = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Switch$1, "Switch").$$render($$result, { title: "search for tags", text: "Tags" }, {}, {})} ${validate_component(Switch$1, "Switch").$$render(
            $$result,
            {
              title: "search directorys",
              text: "Directorys"
            },
            {},
            {}
          )}`;
        }
      }
    )} ${selectedIndex === 0 ? `${validate_component(Form$1, "Form").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Search$1, "Search").$$render(
          $$result,
          {
            placeholder: "Search catalog...",
            value: searchterm
          },
          {
            value: ($$value) => {
              searchterm = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}` : `${validate_component(Form$1, "Form").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(TreeView$1, "TreeView").$$render(
          $$result,
          {
            id: "DirTree",
            children,
            activeId,
            selectedIds
          },
          {
            activeId: ($$value) => {
              activeId = $$value;
              $$settled = false;
            },
            selectedIds: ($$value) => {
              selectedIds = $$value;
              $$settled = false;
            }
          },
          {}
        )} `;
      }
    })}`}</aside>`;
  } while (!$$settled);
  return $$rendered;
});
const css$4 = {
  code: "#drop_zone.svelte-1sjmien{border:2px solid lightgray}",
  map: null
};
const UploadWidget = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { path = "" } = $$props;
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  $$result.css.add(css$4);
  return `<div id="drop_zone" class="svelte-1sjmien"><p>Drag image here to upload to &quot;${escape(path)}&quot;.</p></div> ${validate_component(Form$1, "Form").$$render(
    $$result,
    {
      id: "uploadItem",
      action: "?/upload",
      method: "post",
      enctype: "multipart/form-data",
      hidden: true
    },
    {},
    {
      default: () => {
        return `<input type="file" name="file" id="file" accept="image/*">${validate_component(Button$1, "Button").$$render($$result, { type: "submit" }, {}, {
          default: () => {
            return `Submit`;
          }
        })}`;
      }
    }
  )}`;
});
const css$3 = {
  code: '.wrapper.svelte-j2aa3r.svelte-j2aa3r{min-height:100vh;max-height:calc(100vH);overflow:overlay;display:grid;grid:"hd hd"\r\n            "hd2 hd2"\r\n            "sd sd"\r\n            "main main"\r\n            "main main" \r\n            "ft ft"\r\n            / 1fr 1fr}@media(min-width: 40em){.wrapper.svelte-j2aa3r.svelte-j2aa3r{grid:"hd2 hd2 hd hd" 50px\r\n              "sd  main main main"   minmax(0, 1fr)\r\n              "sd ft ft ft" min-content\r\n              / 1fr  1fr  1fr  1fr}}.header.svelte-j2aa3r.svelte-j2aa3r{grid-area:hd}.header2.svelte-j2aa3r.svelte-j2aa3r{grid-area:hd2}.footer.svelte-j2aa3r.svelte-j2aa3r{grid-area:ft}.content.svelte-j2aa3r.svelte-j2aa3r{grid-area:main;min-height:0;min-width:0;justify-self_:center}.sidebar.svelte-j2aa3r.svelte-j2aa3r{grid-area:sd;max-height:calc(100vH);overflow:overlay}.wrapper.svelte-j2aa3r>div.overlay.svelte-j2aa3r{z-index:10;grid-column:main-start / main-end;grid-row:hd-start / ft-end;border:4px solid rgb(92, 148, 13);background-color:rgba(92, 148, 13, 0.4);color:rgb(92, 148, 13);font-size:150%}',
  map: null
};
const LyHeaderSidebarMain = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="wrapper svelte-j2aa3r"><div class="header2 svelte-j2aa3r">${slots.header2 ? slots.header2({}) : ``}</div> <div class="header svelte-j2aa3r">${slots.header ? slots.header({}) : ``}</div> <div class="sidebar svelte-j2aa3r">${slots.sidebar ? slots.sidebar({}) : ``}</div> <div class="content svelte-j2aa3r">${slots.content ? slots.content({}) : ``}</div> <div class="footer svelte-j2aa3r">${slots.footer ? slots.footer({}) : ``}</div> <div class="overlay svelte-j2aa3r" hidden data-svelte-h="svelte-11owo7p">Overlay style=&quot;min-height: 0; max-height: calc(100vH); overflow: overlay;&quot;</div> </div>`;
});
const css$2 = {
  code: ".content.svelte-1imrxs0{margin:1em}",
  map: null
};
const TagEdit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$2);
  $$unsubscribe_page();
  return `<div class="content svelte-1imrxs0">${validate_component(Button$1, "Button").$$render(
    $$result,
    {
      icon: TagEdit$1,
      iconDescription: "Edit tags",
      size: "field",
      href: "/tagger?item=" + encodeURIComponent(data.picturename) + "&from=" + encodeURIComponent($page.url)
    },
    {},
    {}
  )} ${each(data.tags, (tag, i) => {
    return `${validate_component(Tag$1, "Tag").$$render(
      $$result,
      {
        id: tag.id,
        type: tag.color,
        style: "background-color:" + tag.color + ";"
      },
      {},
      {
        default: () => {
          return `${escape(tag.name)}`;
        }
      }
    )}`;
  })} </div>`;
});
const css$1 = {
  code: ".flex-container.svelte-1fbfnyb.svelte-1fbfnyb{display:flex;justify-content:center;border:2px dotted}.grid-vertical.svelte-1fbfnyb.svelte-1fbfnyb{width:100%;display:grid;grid-template-columns:1fr;grid-template-rows:repeat(auto-fill, 15em);grid-auto-flow:dense;padding:0.5em}.card.svelte-1fbfnyb.svelte-1fbfnyb{padding:0.5em}.card.svelte-1fbfnyb>img.svelte-1fbfnyb{max-width:100%;max-height:14em}.grid-horizontal.svelte-1fbfnyb.svelte-1fbfnyb{width:100%;display:grid;grid-template-rows:1fr;grid-template-columns:repeat(auto-fill, 15em);grid-auto-flow:dense}",
  map: null
};
function _onclick(e) {
  console.log("clcik");
}
function _onpage(page2) {
  console.log("newpage" + page2);
}
const ThumbsList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { design = "right" } = $$props;
  let { onclick = _onclick } = $$props;
  let { onpage = _onpage } = $$props;
  let { data } = $$props;
  let rows = [];
  let current_page = 1;
  let per_page = 1;
  let total = 0;
  let loading = true, mounted = false;
  function changePage(data2) {
    loading = true;
    per_page = data2.thumbs.per_page;
    current_page = data2.thumbs.current_page;
    data2.thumbs.from;
    data2.thumbs.to;
    total = data2.thumbs.total;
    data2.thumbs.last_page;
    rows = data2.thumbs.rows;
    loading = false;
    for (var i = 0; mounted; i++) {
      let row = rows[i];
      if (row && !row.isDir) {
        loadImage("#img" + i, rows[i].fileName, 196);
      }
    }
  }
  if ($$props.design === void 0 && $$bindings.design && design !== void 0)
    $$bindings.design(design);
  if ($$props.onclick === void 0 && $$bindings.onclick && onclick !== void 0)
    $$bindings.onclick(onclick);
  if ($$props.onpage === void 0 && $$bindings.onpage && onpage !== void 0)
    $$bindings.onpage(onpage);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      changePage(data);
    }
    $$rendered = `${design === "bottom" ? `<div class="flex-container svelte-1fbfnyb" id="Paginator"> ${validate_component(Pagination$1, "Pagination").$$render(
      $$result,
      {
        pageSize: per_page,
        totalItems: total,
        pageSizeInputDisabled: true,
        page: current_page
      },
      {
        page: ($$value) => {
          current_page = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : ``} <div id="Thumbslist" class="${escape(
      null_to_empty(design === "vertical" || design === "left" || design === "right" ? "grid-vertical" : "grid-horizontal"),
      true
    ) + " svelte-1fbfnyb"}">${loading ? `<p data-svelte-h="svelte-qeejp2">loading...</p>` : ``} ${rows.length ? each(rows, (row, i) => {
      return `<div class="card svelte-1fbfnyb"><img${add_attribute("id", "img" + i, 0)} src=""${add_attribute("alt", row.fileName, 0)} class="svelte-1fbfnyb"> <p>${escape(row.name)}</p>  </div>`;
    }) : `<h5 class="text-center" data-svelte-h="svelte-1y7aml9">no results</h5>`}</div> ${design !== "bottom" ? `<div class="flex-container svelte-1fbfnyb" id="Paginator"> ${validate_component(Pagination$1, "Pagination").$$render(
      $$result,
      {
        pageSize: per_page,
        totalItems: total,
        pageSizeInputDisabled: true,
        page: current_page
      },
      {
        page: ($$value) => {
          current_page = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
const css = {
  code: ".content.svelte-ycwz2z{overflow:overlay;height:100%;max-height:100%}.medsize.svelte-ycwz2z{max-height:100%;max-width:100%}.content.svelte-ycwz2z{padding:1em}",
  map: null
};
const Layout_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let { data } = $$props;
  let searchComp;
  let importing = false, search = "";
  let picturename = "", pictureID = -1, old_per_page = 0;
  function onSelectDir(detail) {
    const replaceState = false;
    const pageNo = 1;
    const path = encodeURIComponent(detail.id);
    search = "";
    goto(`/browser/${pageNo}?item=${encodeURIComponent(picturename)}&path=${path}&page=${pageNo}&per_page=${data.thumbs.per_page}`, { replaceState, invalidateAll: true });
  }
  function onSearch(detail) {
    const replaceState = false;
    const pageNo = 1;
    search = detail;
    goto(
      `/browser/${pageNo}?search=${search}&path=${""}&page=${pageNo}&per_page=${data.thumbs.per_page}`,
      /*data.thumbs.path*/
      { replaceState, invalidateAll: true }
    );
  }
  function onthumb(e) {
    const replaceState = false;
    picturename = e.currentTarget.alt;
    goto(`/browser/${data.thumbs.current_page}?search=${search}&item=${encodeURIComponent(picturename)}&path=${data.thumbs.path}&page=${data.thumbs.current_page}&per_page=${data.thumbs.per_page}`, { replaceState, invalidateAll: false });
  }
  function loadItem(_data) {
    pictureID = _data.thumbs.itemId, picturename = _data.thumbs.item;
    return;
  }
  async function routeToPage(_pageNo) {
    const replaceState = false;
    let pageNo = _pageNo, THUMB_SIZE = 200;
    let _pag = document ? document.getElementById("Thumbslist") : null;
    if (_pag) {
      if (_pag.children[0])
        THUMB_SIZE = _pag.children[0].offsetWidth;
      data.thumbs.per_page = Math.max(1, Math.trunc(_pag.clientWidth / THUMB_SIZE));
      if (old_per_page && old_per_page != data.thumbs.per_page) {
        pageNo = _pageNo * old_per_page / data.thumbs.per_page;
      }
      old_per_page = data.thumbs.per_page;
    }
    goto(`/browser/${pageNo}?item=${encodeURIComponent(picturename)}&path=${data.thumbs.path}&page=${pageNo}&per_page=${data.thumbs.per_page}`, { replaceState, invalidateAll: true });
  }
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      loadItem(data);
    }
    $$rendered = `${validate_component(LyHeaderSidebarMain, "Layout").$$render($$result, {}, {}, {
      footer: () => {
        return `${validate_component(ThumbsList, "ThumbsList").$$render(
          $$result,
          {
            slot: "footer",
            design: "top",
            onclick: onthumb,
            data,
            onpage: routeToPage
          },
          {},
          {}
        )}`;
      },
      content: () => {
        return `<div class="content svelte-ycwz2z" slot="content" style="display: flex"> <div><img class="medsize svelte-ycwz2z" id="img" src="" alt=""> <p>(${escape(pictureID)}) ${escape(picturename)}</p> ${pictureID > 0 ? `${validate_component(TagEdit, "TagEdit").$$render(
          $$result,
          {
            data: {
              picturename,
              pictureID,
              tags: data.thumbs.itemTags
            }
          },
          {},
          {}
        )}` : `${validate_component(Tooltip$1, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `Tags not editable as image is located in directory but not in database. Use import first.`;
          }
        })}`}</div></div>`;
      },
      sidebar: () => {
        return `<span slot="sidebar">${validate_component(Search_1, "Search").$$render(
          $$result,
          {
            onselectdir: onSelectDir,
            onsearch: onSearch,
            this: searchComp
          },
          {
            this: ($$value) => {
              searchComp = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${`${validate_component(ExpandableTile$1, "ExpandableTile").$$render($$result, { style: "padding-bottom:0.5em" }, {}, {
          below: () => {
            return `<div slot="below">${validate_component(UploadWidget, "UploadWidget").$$render($$result, { path: data.thumbs.path }, {}, {})} <p data-svelte-h="svelte-1mo0jky">or import existing files from...</p> <form id="import" action="?/import" method="post" enctype="multipart/form-data"> ${validate_component(TextInput$1, "TextInput").$$render(
              $$result,
              {
                name: "dir",
                autocomplete: "off",
                value: data.thumbs.path,
                readonly: true
              },
              {},
              {}
            )} ${validate_component(Button$1, "Button").$$render(
              $$result,
              {
                size: "field",
                type: "submit",
                disabled: importing
              },
              {},
              {
                default: () => {
                  return `import Dir`;
                }
              }
            )}</form></div>`;
          },
          above: () => {
            return `<div slot="above" data-svelte-h="svelte-vns09k">Import files...</div>`;
          }
        })} ${validate_component(ExpandableTile$1, "ExpandableTile").$$render($$result, { style: "padding-bottom:0.5em" }, {}, {
          below: () => {
            return `<div slot="below"><form id="createDir" action="?/createDir" method="post" enctype="multipart/form-data"> ${validate_component(TextInput$1, "TextInput").$$render(
              $$result,
              {
                name: "dir",
                autocomplete: "off",
                value: data.thumbs.path
              },
              {},
              {}
            )} ${validate_component(Button$1, "Button").$$render(
              $$result,
              {
                size: "field",
                type: "submit",
                disabled: importing
              },
              {},
              {
                default: () => {
                  return `create Dir`;
                }
              }
            )}</form></div>`;
          },
          above: () => {
            return `<div slot="above" data-svelte-h="svelte-19sostv">Create directory...</div>`;
          }
        })}`}</span>`;
      },
      header2: () => {
        return `${validate_component(UserCtrlWidget, "UserCtrl").$$render($$result, { slot: "header2" }, {}, {})}`;
      },
      default: () => {
        return `   ${slots.default ? slots.default({}) : ``}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});

export { Layout_1 as default };
//# sourceMappingURL=_layout.svelte-f0d3af6f.js.map
