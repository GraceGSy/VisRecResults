<script>
	import * as d3 from 'd3'
	// import AttributesBar from './AttributesBar.svelte'
	// import VersionRecommendations from './VersionRecommendations.svelte'
	// import VersionConstraintSolver from './VersionConstraintSolver.svelte'
	// import VersionGranularRecommendations from './VersionGranularRecommendations.svelte'
	import Results from './Results.svelte'

	import ResultsUMAP from './ResultsUMAP.svelte'

	let versionChoice = "results"
	// let versionChoice = null

	// let version = 'granularLearner'

	// let participant = null

	// // for constraintSolver = participant ID 1
	// // for constraintLearner = participant ID 2
	// // for granularLearner = participant ID 16
	// let participantOrder = ['constraintSolver', 'constraintLearner',
	// 						'constraintSolver', 'constraintSolver',
	// 						'constraintSolver', 'constraintLearner',
	// 						'constraintSolver', 'constraintLearner',
	// 						'constraintLearner', 'constraintSolver',
	// 						'constraintLearner', 'constraintLearner',
	// 						'granularLearner', 'granularLearner',
	// 						'granularLearner', 'granularLearner',
							// 'granularLearner', 'granularLearner']

	// let gender = null
	// let ageRange = null
	// let tools = null
	// let experience = null

	// let allParticipantInfo = {}
	// let start = false
	// let start = false

	// let rand = -1;
	// function getRand() {
	// 	fetch("./classifier/api?param1=1&param1=2")
	// }

	// let selectedAttributes = []
	// let promise = loadData();

	// function getType(row) {
	// 	const result = {}

	// 	for (let attr of Object.keys(row)) {
	// 		const value = row[attr]
	// 		if (isNaN(parseFloat(value))) {
	// 			result[attr] ='string'
	// 		} else {
	// 			result[attr] ='number'
	// 		}
	// 	}

	// 	return result
	// }

	// function dataPreprocessor(d) {
	// 	let result = {}
	// 	for (let i = 0; i < d3.keys(d).length; i++) {
	// 		let variableName = d3.keys(d)[i]
	// 		if (variableName === 'tconst' || variableName === "title" || variableName === 'year') {}
	// 		else if (variableName === 'type' || variableName === "genre") {
	// 			result[variableName] = d3.values(d)[i]
	// 		}
	// 		else {
	// 			result[variableName] = +d3.values(d)[i]
	// 		}
	// 	}
	//     return result
	// }

	// async function loadData() {
	// 	const dataset = await d3.csv(`movies.csv`, dataPreprocessor)

	// 	// console.log(dataset)

	// 	const firstRow = dataset[0]

	// 	const types = getType(firstRow)

	// 	return {"dataset":dataset, "types":types}
	// }

	// function updateAttributes(event) {
	// 	let attribute = event.detail.attribute
		
	// 	if (selectedAttributes.includes(attribute)) {}
	// 	else {
	// 		selectedAttributes.push(attribute)
	// 		selectedAttributes = selectedAttributes
	// 	}
	// }

	// function load() {
	// 	// if (participant) {
	// 	// 	start = true
	// 	// }

	// 	// Uncomment for study
	// 	if (participant && gender && ageRange && ageRange != "<18" && experience) {
	// 		allParticipantInfo = {"age": ageRange,
	// 							  "gender": gender,
	// 							  "tools": tools,
	// 							  "experience": experience}
	// 		start = true
	// 	}
	// }
</script>

<div style="padding: '20px'">
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