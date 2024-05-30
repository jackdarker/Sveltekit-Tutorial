<script>
    import { select, selectAll } from "d3-selection";
    import { axisBottom, axisLeft } from "d3-axis";
    /**
	 * @type {any}
	 */
     export let innerHeight;
    /**
	 * @type {any}
	 */
     export let margin;
    /**
	 * @type {any}
	 */
    export let position;
    /**
	 * @type {any}
	 */
     export let scale;
    /**
	 * @type {string}
	 */
    let transform;
    /**
	 * @type {SVGGElement}
	 */
    let g;
    $: {
      select(g).selectAll("*").remove();
      let axis;
      switch (position) {
        case "bottom":
          axis = axisBottom(scale).tickSizeOuter(0);
          transform = `translate(0, ${innerHeight})`;
          break;
        case "left":
          axis = axisLeft(scale).tickSizeOuter(0);
          transform = `translate(${margin}, 0)`;
      }
      select(g).call(axis);
    }
</script>
  
<g class="axis" bind:this={g} {transform} />