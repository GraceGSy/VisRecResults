<script>
	import * as d3 from 'd3'
	// import AttributesBar from './AttributesBar.svelte'
	// import VersionRecommendations from './VersionRecommendations.svelte'
	// import VersionConstraintSolver from './VersionConstraintSolver.svelte'
	// import VersionGranularRecommendations from './VersionGranularRecommendations.svelte'
	import Results from './Results.svelte'

	import ResultsUMAP from './ResultsUMAP.svelte'

	let versionChoice = "results"
</script>

<div id="main" style="padding: '20px'">
	<ResultsUMAP />
	<!-- <Results /> -->
</div>

<style>
	#main {
		display: flex;
		flex-direction: row
	}

	#chooseVersion {
		width: 100vw;
		padding: 150px 0px 150px 0px;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: scroll
	}

	#demographics {}

	#versioning {
		display: flex;
		padding: 10px 0px 20px 20px;
	}

	#toolsInput {
		width: 100%;
	}

	.versionOption {
		margin-right: 20px;
	}

	.inputBox {
		margin-bottom: 10px
	}

	.inputContent {
		margin-top: 25px;
		margin-bottom: 10px
	}

	#beginButton {
		margin-top: 25px;
	}
</style>