<script>
	import * as d3 from 'd3'
	import UMAP from "./UMAP.svelte"

	let promise = loadData();

	async function loadData() {
		const dataset = await d3.json(`umap_coords.json`)

		let dataset_by_participant = []

		let count = 0

		let participant = []

		while (count < dataset.length) {
			participant.push(dataset[count])

			count++

			if (count % 5 == 0) {
				dataset_by_participant.push(participant)
				participant = []
			}
		}

		// console.log()

		return [dataset, dataset_by_participant]
	}

</script>

<div id="overall">
	{#await promise}
		<p>...loading</p>
	{:then data}
		<UMAP dataset={data[0]} />
	{/await}
</div>
