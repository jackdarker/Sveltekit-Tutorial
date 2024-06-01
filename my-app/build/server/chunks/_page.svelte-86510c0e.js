import { c as create_ssr_component, d as add_attribute, b as each, v as validate_component, e as escape } from './ssr-563293b8.js';
import { scaleBand, scaleLinear } from 'd3';
import { A as Axis } from './Axis-35a6bceb.js';

const css = {
  code: ".barlabel.svelte-1ma1z4z{fill:lightcoral;stroke:lightcoral;stroke-width:1;font-family:sans-serif;font-size:30px;font-weight:bold}",
  map: null
};
const width = 400, height = 400;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let yScale;
  let xScale;
  let { data } = $$props;
  let dataset = [1, 2, 3, 4, 3, 1];
  const margin = { top: 20, bottom: 40, left: 40, right: 20 };
  const innerHeight = height - margin.top - margin.bottom, innerWidth = width - margin.left - margin.right;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  yScale = scaleBand().domain(dataset.map(function(d, i) {
    return i;
  })).range([0, height]).paddingInner(0.1);
  xScale = scaleLinear().domain([0, 10]).range([0, width]);
  return `<h1 data-svelte-h="svelte-1dqibt5">charts</h1> <h2 data-svelte-h="svelte-xl3zsz">Tag uses barchart</h2> <svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} color="black"><rect${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} fill="lightgray"></rect>${each(data.allTags, (dat, i) => {
    return `<rect${add_attribute("fill", dat.color, 0)}${add_attribute("x", 0, 0)}${add_attribute("y", yScale(i), 0)}${add_attribute("width", xScale(dat.count), 0)}${add_attribute("height", yScale.bandwidth(), 0)}></rect> <text class="barlabel svelte-1ma1z4z" x="5"${add_attribute("y", yScale(i) + yScale.bandwidth() * 0.8, 0)}>${escape(dat.name.toString())}</text>`;
  })}${validate_component(Axis, "Axis").$$render(
    $$result,
    {
      innerHeight,
      margin,
      scale: xScale,
      position: "bottom"
    },
    {},
    {}
  )}<text${add_attribute("x", innerWidth * 0.4, 0)}${add_attribute("y", innerHeight + 35, 0)}>Count</text></svg>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-86510c0e.js.map
