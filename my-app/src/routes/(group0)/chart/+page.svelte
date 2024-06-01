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

</script>

<h1>charts</h1>
<h2>Tag uses barchart</h2>
<svg {width} {height}  color="black" ><rect {width} {height} fill="lightgray"></rect>
    {#each data.allTags as dat, i}
    <rect
        fill={dat.color}
        x={0}
        y={yScale(i)}
        width={xScale(dat.count)}
        height={yScale.bandwidth()}
        in:fly|global={{ x: -200, duration: 1000, delay: i * 50 }} 
    />
    <text class="barlabel" x=5 y={yScale(i)+yScale.bandwidth()*0.8}>{dat.name.toString()}</text>
    {/each}
    <Axis {innerHeight} {margin} scale={xScale} position="bottom" />
    <text x={innerWidth * 0.4} y={innerHeight + 35}>Count</text>
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