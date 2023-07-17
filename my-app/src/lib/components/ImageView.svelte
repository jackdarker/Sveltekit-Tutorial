<script>
	import { fly } from 'svelte/transition';
	import { cubicOut, quintOut } from 'svelte/easing';

	export let tall = false;
	export let shrink = false;
	export let art = '';
	export let subtitle = 'Click anywhere to dismiss';
	export let onclick = click;
	onclick = onclick||click;
	let clicked = false;
	function click(e){
		clicked = true;  
	}
	function onKeyDown(e) {
		if (e.key === 'Escape') {
			clicked = false;
		}
	}
</script>

<button
	class="card"
	class:tall
	class:shrink
	style="background-image:url(../art/{art})"
	aria-label={art}
	on:click={onclick}
	on:keypress={onclick}
/>
<div class="footer">{art}</div>

<svelte:window on:keydown={onKeyDown} />
<!-- this changes windowtitle
<svelte:head>
	{#if clicked}
		<title>afn · {art}</title>
	{:else}
		<title>afn</title>
	{/if}
</svelte:head>
-->
{#if clicked === true}
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<div
		class="img-modal" 
		tabindex="0"
		on:click={() => (clicked = false)}
		on:keypress={() => (clicked = false)}
		in:fly={{ y: 50, easing: quintOut, duration: 750 }}
		out:fly={{ y: 50, easing: cubicOut, duration: 300 }}
	>
		<h3>{art}</h3>
		<img src="art/{art}" alt={art} />
		<h6>{subtitle}</h6>
	</div>
{/if}

<style lang="scss">
	.flex-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.footer{
		justify-self: center;
	}
	.card {
		position: relative;
		border: none;
		padding: none;
		height: 100%;
		width: 100%;
		border-radius: 4px;
		overflow: hidden;
		background: var(--neutral-one);
		transition: all 0.3s var(--bezier-one);
		cursor: pointer;
		font-size: 0;
		user-select: none;
		background-size:contain;
		background-position: center;
		background-repeat: no-repeat;
		-webkit-transform: translate3d(0, 0, 1px);
		-webkit-backface-visibility: hidden;

		&:hover {
			transform: translateY(-1px);
			box-shadow: 0px 15px 25px -10px rgba(0, 0, 0, 0.25);
		}

		@media screen and (max-width: 868px) {
			border-radius: 0;
		}
	}

	.img-modal {
		background-blend-mode: overlay;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: fixed;
		text-align: center;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		height: 200vh;
		width: 100vw;
		z-index: 20;
		cursor: pointer;
		user-select: none;
		background-color: #0a0808bb;
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
    }
	img {
		max-height: 83vh;
		height: auto;
		max-width: 86vw;
		border-radius: 2vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.tall {
	grid-row: span 2 / auto;
	}

	@media only screen and (max-width: 1153px) {
		.shrink {
			grid-row: span 1 / auto;
			background-position: top;
		}
	}
</style>