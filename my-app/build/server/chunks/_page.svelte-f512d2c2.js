import { c as create_ssr_component, d as add_attribute, b as each, v as validate_component, e as escape } from './ssr-563293b8.js';
import { scaleBand, scaleLinear, extent, line, curveNatural } from 'd3';
import { A as Axis } from './Axis-35a6bceb.js';

const css = {
  code: "path.svelte-8r53nb{fill:transparent;stroke:rgb(18, 153, 90);stroke-width:2.5;stroke-linejoin:round}.barlabel.svelte-8r53nb{fill:lightcoral;stroke:lightcoral;stroke-width:1;font-family:sans-serif;font-size:30px;font-weight:bold}",
  map: null
};
const width = 400, height = 400;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let yScale;
  let xScale;
  let xScaleXY;
  let yScaleXY;
  let line_gen;
  let { data } = $$props;
  let visible = true;
  let dataset = [1, 2, 3, 4, 3, 1];
  let datasetXY = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 3]];
  const margin = { top: 20, bottom: 40, left: 40, right: 20 };
  const innerHeight = height - margin.top - margin.bottom, innerWidth = width - margin.left - margin.right;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  yScale = scaleBand().domain(dataset.map(function(d, i) {
    return i;
  })).range([0, height]).paddingInner(0.1);
  xScale = scaleLinear().domain([0, 10]).range([0, width]);
  xScaleXY = scaleLinear().domain(extent(datasetXY, (d) => d[0])).range([0, innerWidth]);
  yScaleXY = scaleLinear().domain(extent(datasetXY, (d) => d[1])).range([innerHeight, 0]);
  line_gen = line().curve(curveNatural).x((d) => xScaleXY(d[0])).y((d) => yScaleXY(d[1]))(datasetXY);
  return `<nav data-svelte-h="svelte-xj1woj"><a href="/">home</a> <a href="/about">about</a></nav> <h1 data-svelte-h="svelte-t7i5gh">about</h1> <p data-svelte-h="svelte-ql1lf9">this is the about page.</p> <p></p> <h1 data-svelte-h="svelte-1rmfwjn">charts test</h1> <p data-svelte-h="svelte-uq9uei">Some charts drawn in SVG +D3</p> <h2 data-svelte-h="svelte-13xep79">simple barchart</h2> <label><input type="checkbox"${add_attribute("checked", visible, 1)}>
	visible
</label><br> <svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}><rect${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} fill="lightgray"></rect>${each(dataset, (dat, i) => {
    return `<rect fill="blue"${add_attribute("x", 0, 0)}${add_attribute("y", yScale(i), 0)}${add_attribute("width", xScale(dat), 0)}${add_attribute("height", yScale.bandwidth(), 0)} onclick="${"alert(" + escape(dat, true) + ")"}" onmouseover="${"alert(" + escape(dat, true) + ")"}"></rect> <text class="barlabel svelte-8r53nb" x="5"${add_attribute("y", yScale(i) + yScale.bandwidth() * 0.8, 0)}>${escape(dat.toString())}</text>`;
  })}</svg> <h2 data-svelte-h="svelte-62epsu">simple linechart</h2> <svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} color="black"><rect${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} fill="lightgray"></rect><g${add_attribute("transform", `translate(${margin.left},${margin.top})`, 0)}>${validate_component(Axis, "Axis").$$render(
    $$result,
    {
      innerHeight,
      margin,
      scale: xScaleXY,
      position: "bottom"
    },
    {},
    {}
  )}<text${add_attribute("x", innerWidth * 0.4, 0)}${add_attribute("y", innerHeight + 35, 0)}>Timestamp</text>${validate_component(Axis, "Axis").$$render(
    $$result,
    {
      innerHeight,
      margin,
      scale: yScaleXY,
      position: "left"
    },
    {},
    {}
  )}<text${add_attribute("transform", `translate(${-28},${innerHeight * 0.6}) rotate(-90)`, 0)}>Temperature</text><path${add_attribute("d", line_gen, 0)} class="svelte-8r53nb"></path>${`${each(datasetXY, (dat, i) => {
    return ` <circle fill="red" r="4"${add_attribute("cx", xScaleXY(dat[0]), 0)}${add_attribute("cy", yScaleXY(dat[1]), 0)}></circle> `;
  })}`}</g></svg>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f512d2c2.js.map
