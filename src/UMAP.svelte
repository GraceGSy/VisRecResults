<script>
	import * as d3 from "d3"

	export let dataset = []

	var margin = {top: 30, right: 30, bottom: 30, left: 30},
	    width = 660 - margin.left - margin.right,
	    height = 660 - margin.top - margin.bottom;

	// append the svg object to the body of the page
	var svg = d3.select("#umap")
		.append("svg")
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
		.append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	// Add X axis
	var x = d3.scaleLinear()
		.domain(d3.extent(dataset, d => d[1][0]))
		.range([ width, 0 ]);
	svg.append("g")
		.attr("class", "axisBottom")
		.attr("transform", "translate(0," + height + ")")
		.call(d3.axisBottom(x).ticks(3));
	svg.append("g")
		.attr("class", "axisTop")
		.call(d3.axisTop(x).ticks(0));

	// Add Y axis
	var y = d3.scaleLinear()
		.domain(d3.extent(dataset, d => d[1][1]))
		.range([ height, 0]);
	svg.append("g")
		.call(d3.axisLeft(y).ticks(3));
	svg.append("g")
		.attr("transform", `translate(${width}, 0)`)
		.call(d3.axisRight(y).ticks(0));

	// Add dots
	svg.append('g')
		.selectAll("dot")
		.data(dataset)
		.enter()
		.append("circle")
			.attr("cx", function (d) { return x(d[1][0]); } )
			.attr("cy", function (d) { return y(d[1][1]); } )
			.attr("r", 5)
			.style("fill", function (d) { 
			  	let system = d[2]

			  	if (system == 'constraintSolver') {
			  		return 'blue'
			  	} else if (system == 'constraintLearner') {
			  		return 'green'
			  	} else {
			  		return 'red'
			  	}
		})
		.attr("cursor", "pointer")
		.on('mouseover', function (d, i) {
        	vegaEmbed(`#hovervis`, i[0], {actions:false})
        });

</script>

<div>
	
</div>

<style>
	.toggle {
		display: flex;
    	flex-wrap: wrap;
	}

	.attribute {
		margin-bottom: 5px;
		display: flex;
	    font-size: 12px;
	    width: auto;
	    cursor: pointer;
	}

	.attributeLeft {
		border-radius: 12px 0px 0px 12px;
    	border: steelblue solid 2px;
    	align-content: middle;
    	padding: 0px 5px 1px 10px;
	}

	.attributeRight {
		border-radius: 0px 12px 12px 0px;
    	border-style: solid solid solid hidden;
	    border-color: steelblue;
	    border-width: 2px;
    	align-content: middle;
    	padding: 0px 10px 1px 5px;
	}

	.more {
		background-color: #cde09b;
		margin-right: 0.5em;
	}

	.less {
		background-color: #e0a99b;
		margin-right: 0.5em;
	}

	.default {
		/*background-color: #f4f4f4;*/
		margin-right: 0.5em;
	}
</style>