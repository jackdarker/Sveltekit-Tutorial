<script>
    import {  selectAll,select,scaleBand, scaleLinear,extent, curveNatural,line,max } from "d3"; //using features from https://d3js.org/
    import { onMount } from "svelte";
    import { fly,fade } from "svelte/transition";
    
    //see https://dev.to/learners/make-a-scatter-plot-with-svelte-and-d3-56md
    import Axis from "$lib/components/Axis.svelte";
    export let data;  //see page.server.js#load

    let visible=true;
    let dataset = [1.0,2.0,3.0,4.0,3.0,1.0];
    let datasetXY = [[0,1],[1,2],[2,3],[3,4],[4,3]];
    /*onMount(async () => {
      dataset = await csv("data/population_data.csv").then((data) => {return data.slice(0, 10);});
    });*/
    const margin = { top: 20, bottom: 40, left: 40, right: 20 };
    const width = 400,height = 400;
    const innerHeight = height - margin.top - margin.bottom,
        innerWidth = width - margin.left - margin.right;

    $: yScale = scaleBand()
    .domain(dataset.map(function(d,i){return(i);}))
    .range([0, height]).paddingInner(0.1); 
    //creates a function that assigns a value to a band
    //requires $: because need to reevaluate after data was loaded 

    $: xScale = scaleLinear().domain([0, 10]).range([0, width]); 
    //creates afunction that calculates width by data-value

    $: xScaleXY  =  scaleLinear()
    .domain(extent(datasetXY, (d)  =>  d[0]))
    .range([0, innerWidth]);

    $: yScaleXY  =  scaleLinear()
        .domain(extent(datasetXY, (d)  =>  d[1]))
        .range([innerHeight, 0]);

    $: line_gen = line().curve(curveNatural)
        .x((d) => xScaleXY(d[0]))
        .y((d) => yScaleXY(d[1]))(datasetXY);
    //linegenerator to connect datapoints

    //select("h1").on("click", (event) => alert(event))
    //select(document.body).style("background", "blue");
</script>

<nav>
	<a href="/">home</a>
	<a href="/about">about</a>
</nav>

<h1>about</h1>
<p>this is the about page.</p>
<p></p>
<h1>charts test</h1>
<p>Some charts drawn in SVG +D3</p>
<h2>simple barchart</h2>
<label>
	<input type="checkbox" bind:checked={visible} />
	visible
</label><br>
<svg {width} {height}><rect {width} {height} fill="lightgray"></rect>
    {#each dataset as dat, i}
    <rect
        fill="blue"
        x={0}
        y={yScale(i)}
        width={xScale(dat)}
        height={yScale.bandwidth()}
        onclick="alert({dat})"
        onmouseover="alert({dat})"
        in:fly|global={{ x: 200, duration: 1000, delay: i * 500 }} 
    />
    <text class="barlabel" x=5 y={yScale(i)+yScale.bandwidth()*0.8}>{dat.toString()}</text>
    {/each}
    <!-- fly|global otherwise the animation would not play when page is opened --> 
    <!-- <circle fill="red" cx=40 cy=40 r=10></circle>-->
</svg>
<h2>simple linechart</h2>
<svg {width} {height}  color="black" >
    <!-- color="black" because axis use currentColor -->
    <rect {width} {height} fill="lightgray"></rect>
        <g transform={`translate(${margin.left},${margin.top})`}>
          <Axis {innerHeight} {margin} scale={xScaleXY} position="bottom" />
          <text x={innerWidth * 0.4} y={innerHeight + 35}>Timestamp</text>
          <Axis {innerHeight} {margin} scale={yScaleXY} position="left" />
          <text transform={`translate(${-28},${innerHeight *0.6}) rotate(-90)`}>Temperature</text>
          <path d={line_gen} />
          {#if visible}{#each datasetXY as dat, i}
            <circle fill="red" r="4"
                cx={xScaleXY(dat[0])}
                cy={yScaleXY(dat[1])}
            />
            {/each}{/if}
        </g>
</svg>

<style>
    path { /* line graph */
        fill: transparent; 
      stroke: rgb(18, 153, 90);
      stroke-width: 2.5;
      stroke-linejoin: round;
    }
    .barlabel {
    fill: lightcoral;
    stroke: lightcoral;
    stroke-width: 1;
    font-family: sans-serif;
    font-size: 30px; 
    font-weight: bold;
    }
  </style>