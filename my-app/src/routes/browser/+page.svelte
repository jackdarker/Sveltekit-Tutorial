<script>
	import ImageView from '$lib/components/ImageView.svelte';
</script>

<div class="grid-container">
	<div class="grid">
		<ImageView art="Icon.1_01" />
		<ImageView art="Icon.1_02" />
		<ImageView art="Icon.1_03" tall />
		<ImageView art="Icon.1_04" />
		<ImageView art="Icon.1_05" tall />
		<ImageView art="Icon.1_06" tall />
		<ImageView
			art="flandre"
			tall
			shrink
			commission
			subtitle="Commissioned by Kevin T. · Do not use"
		/>
		<ImageView art="ribbons" tall />
		<ImageView art="asumi" />
		<ImageView art="doodle" />
	</div>
</div>
<style lang="scss">
	.grid {
		gap: 0.8rem;
		grid-auto-rows: 230px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		width: min(90%, 72rem);

		@media screen and (max-width: 600px) {
			grid-auto-rows: 125px;
		}

		@media screen and (max-width: 868px) {
			width: min(100%, 75rem);
			gap: 0.2rem;
			grid-template-columns: 1fr 1fr 1fr;
		}

	}

	.grid-container {
		display: flex;
		justify-content: center;
		margin-bottom: 4rem;
	}
</style>