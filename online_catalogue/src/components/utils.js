// gets the query and retuns the list of data from the query
import { domain_dataset_list, unit_dataset_list, exampleData, metaFeaturesMLC } from './dataOptions.js'
// works when query reutns only one column
export async function getList(reqURL, query) {
	var list = [];
	// request URL
	var req = reqURL + encodeURIComponent(query)

	await fetch(req).then((data) => data.text())
		.then(data => {
			for (let i = 0; i < data.split('<literal>').length; i++) {
				list[i] = data.split('<literal>')[i].split('</literal>')[0];
			}
			list.shift();
			list.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })); // sort
		})
		.catch("error", (err) => {
			console.log(err)
		})

	return list;
}

export function hasERROR(range) {
	const regex = new RegExp(/^(\d+(\.\d)?\d*(-\d+(\.\d)?\d*)?|[><]=?\d+(\.\d)?\d*)$/)
	if (range !== '') {
		return (regex.test(range)) ? false : true
	}
	else {
		return false
	}
}

export function disableNewMapping(mappings) {
	var num = mappings.length;
	if (num > 0 && (mappings[num - 1].key === "" || mappings[num - 1].range === "" || /^(\d+(\.\d)?\d*(-\d+(\.\d)?\d*)?|[><]=?\d+(\.\d)?\d*)$/.test(mappings[num - 1].range) === false)) return true;
	return false;
}

export function createFilterString(selectedItems, filterName, isRegex = false) {
	if (selectedItems.length > 0) {
		const labels = selectedItems.map(item => isRegex ? item : `"${item}"`).join(', ');
		return `Filter (${filterName} in (${labels})).`;
	}
	return "";
}

export function parseTunedParameters(record) {
	let evaluationParameters = record.TunedParameters.value
	evaluationParameters = evaluationParameters.replace(record.datasetLabel.value, "").replace(record.Algorithm.value, "").replace("_predictive_model_train_test_evaluation_workflow_execution", "").substr(1);
	evaluationParameters = evaluationParameters.substr(1, evaluationParameters.length - 3);

	const wordArray = evaluationParameters.split("_");
	const isDigitStart = (str) => /^\d/.test(str);
	const parsed_str = wordArray.map((word, i) => {
		if (i === 0) return word; // Return the first word as is.
		if (isDigitStart(word))
			return ": " + word; // Add a colon if the word starts with a digit.
		else
			return (isDigitStart(wordArray[i - 1]) ? ", " : " ") + word; // Add a comma if the previous word starts with a digit, otherwise add a space.	
	}).join("");
	return parsed_str
}

export function getFilteredDatasetsByDomain(selectedDomains) {
	let datasets_list = []
	for (let i = 0; i < selectedDomains.length; i++) {
		let selectedDomain = selectedDomains[i]
		let datasets_domain_array = domain_dataset_list[selectedDomain]
		datasets_list = datasets_list.concat(datasets_domain_array)
	}
	var unique_datasets = datasets_list.filter((v, i, a) => a.indexOf(v) === i);
	return unique_datasets
}

export function getFilteredDatasetsByUnit(selectedUnits) {
	let datasets_list = []
	for (let i = 0; i < selectedUnits.length; i++) {
		let selectedUnit = selectedUnits[i]
		let datasets_unit_array = unit_dataset_list[selectedUnit]
		datasets_list = datasets_list.concat(datasets_unit_array)
	}
	var unique_datasets = datasets_list.filter((v, i, a) => a.indexOf(v) === i);
	return unique_datasets
}

export function isDatasetMatch(datasetJson, rexp) {
	return Object.keys(datasetJson).some(key => rexp.exec(datasetJson[key]));
}

export function getFilteredDatasetsByText(textToFilter) {
	let words = textToFilter ? textToFilter.split(",") : [];
	let datasets_array = [];
	for (let j = 0; j < words.length; j++) {
		let word = words[j].trim();
		let rexp = new RegExp(word, 'i');
		for (let i = 0; i < exampleData.length; i++) {
			let datasetJson = exampleData[i];
			let datasetName = datasetJson['name'];
			if (isDatasetMatch(datasetJson, rexp)) {
				datasets_array.push(datasetName);
			}
		}
	}

	return datasets_array;
}

export function rangeFilter(item, key) {
	if (item.match(/\d+-\d+/)) {
		var numbers = item.split("-"); //range
		return key + ">=" + numbers[0] + "&&" + key + "<=" + numbers[1];
	}
	else
		if (item.match(/^\d+/g)) {
			return key + "=" + item; //one number
		}
		else {
			return key + item;  //rest (<, >, >=, <=)
		}
}



export function shouldIncludeAfterFiltering(element, filteredDatasets, textFilteredDatasets, filteredDatasetsUnit) {
	if ((filteredDatasets.length == 0 && textFilteredDatasets.length == 0 && filteredDatasetsUnit == 0)
		||
		(
			filteredDatasets.length != 0 && textFilteredDatasets.length != 0 && filteredDatasetsUnit.length != 0 &&
			filteredDatasets.includes(element.datasetLabel.value.split(":")[1].split("-MLC")[0]) &&
			textFilteredDatasets.includes(element.datasetLabel.value.split(":")[1].split("-MLC")[0]) &&
			filteredDatasetsUnit.includes(element.datasetLabel.value.split(":")[1].split("-MLC")[0])
		)
		||
		(
			filteredDatasets.length != 0 && textFilteredDatasets.length == 0 && filteredDatasetsUnit.length == 0 &&
			filteredDatasets.includes(element.datasetLabel.value.split(":")[1].split("-MLC")[0])
		)
		||
		(
			filteredDatasets.length == 0 && textFilteredDatasets.length != 0 && filteredDatasetsUnit.length == 0 &&
			textFilteredDatasets.includes(element.datasetLabel.value.split(":")[1].split("-MLC")[0])
		)
		||
		(
			filteredDatasets.length == 0 && textFilteredDatasets.length == 0 && filteredDatasetsUnit.length != 0 &&
			filteredDatasetsUnit.includes(element.datasetLabel.value.split(":")[1].split("-MLC")[0])
		)
		||
		(
			filteredDatasets.length != 0 && textFilteredDatasets.length != 0 && filteredDatasetsUnit.length == 0 &&
			filteredDatasets.includes(element.datasetLabel.value.split(":")[1].split("-MLC")[0]) &&
			textFilteredDatasets.includes(element.datasetLabel.value.split(":")[1].split("-MLC")[0])
		)
		||
		(
			filteredDatasets.length == 0 && textFilteredDatasets.length != 0 && filteredDatasetsUnit.length != 0 &&
			textFilteredDatasets.includes(element.datasetLabel.value.split(":")[1].split("-MLC")[0]) &&
			filteredDatasetsUnit.includes(element.datasetLabel.value.split(":")[1].split("-MLC")[0])
		)
		||
		(
			filteredDatasets.length != 0 && textFilteredDatasets.length == 0 && filteredDatasetsUnit.length != 0 &&
			filteredDatasets.includes(element.datasetLabel.value.split(":")[1].split("-MLC")[0]) &&
			filteredDatasetsUnit.includes(element.datasetLabel.value.split(":")[1].split("-MLC")[0])
		)
	)
		return true
	else
		return false

}

export function formatResArrayWithFilter(res, filteredDatasetsDomain, textFilteredDatasets, filteredDatasetsUnit) {
	var newArray = [];
	res.results.bindings.forEach(element => {
		if (shouldIncludeAfterFiltering(element, filteredDatasetsDomain, textFilteredDatasets, filteredDatasetsUnit))
			newArray.push({
				datasetLabel: element.datasetLabel.value.split(":")[1].split("-MLC")[0],
				numInstances: element.numInstances.value,
				numTargets: element.numTargets.value,
				numDescriptive: element.numDescriptive.value,
				hasMissingValues: element.hasMissingValues.value,
				dsetInstance: element.dsetInstance.value
			})

	});
	return newArray;
}

export function formatResArrayWithFilterMeta(res, filteredDatasetsDomain, textFilteredDatasets, filteredDatasetsUnit) {
	let newMetaFeaturesPlotData = {}
	for (let i = 0; i < metaFeaturesMLC.length; i++) {
		newMetaFeaturesPlotData[metaFeaturesMLC[i]] = []
	}
	let dsNames = []
	res.results.bindings.forEach(element => {
		if (shouldIncludeAfterFiltering(element, filteredDatasetsDomain, textFilteredDatasets, filteredDatasetsUnit)) {
			var datasetLabel = element.datasetLabel.value.split(":")[1].split("-MLC")[0];
			if (!dsNames.includes(datasetLabel)) dsNames.push(datasetLabel);
			var mfLabel = element.mfLabel.value;
			var mfValue = element.mfValue.value;
			newMetaFeaturesPlotData[mfLabel].push(parseFloat(mfValue));
		}
	});
	return { 'metaFeaturesPlotData': newMetaFeaturesPlotData, 'dsNames': dsNames };
}


export function processDataBoxViolinPlot(data, typeOfPlot) {
	var traces = []
	var trace_data = []
	var trace_datasets = []
	var lastAlgorithm = undefined
	for (let i = 0; i < data.results.bindings.length; i++) {
		var record = data.results.bindings[i];
		const currentAlgorithm = record.Algorithm.value;
		const currentValue = record.value.value;
		const currentDataset = record.datasetLabel.value

		if (lastAlgorithm === undefined) {
			trace_data.push(currentValue)
			trace_datasets.push(currentDataset)
			lastAlgorithm = currentAlgorithm
		}
		else if (lastAlgorithm !== currentAlgorithm) {
			traces.push({
				y: trace_data,
				name: lastAlgorithm,
				text: trace_datasets,
				type: typeOfPlot,
				boxpoints: 'all',
				// jitter: 0.5,
				whiskerwidth: 0.2,
				fillcolor: 'cls',
				marker: { size: 2 },
				line: { width: 1 }
			})
			trace_data = [currentValue]
			trace_datasets = [currentDataset]
			lastAlgorithm = currentAlgorithm
		} else if (i < data.results.bindings.length - 1) {
			trace_data.push(currentValue)
			trace_datasets.push(currentDataset)
			lastAlgorithm = currentAlgorithm
		}
		else {
			traces.push({
				y: trace_data,
				name: currentAlgorithm,
				text: trace_datasets,
				type: typeOfPlot,
				boxpoints: 'all',
				// jitter: 0.5,
				whiskerwidth: 0.2,
				fillcolor: 'cls',
				marker: { size: 2 },
				line: { width: 1 }
			})
		}
	}
	return traces
}

export function processDataRadarPlot(data) {
	var traces = []
	var trace_data = []
	var trace_algos = []
	var lastEvaluationMeasure = undefined
	for (let i = 0; i < data.results.bindings.length; i++) {
		var record = data.results.bindings[i];
		const currentAlgorithm = record.Algorithm.value;
		const currentValue = record.value.value;
		const currentEvaluationMeasure = record.evaluationMeasureClassLabel.value;

		if (lastEvaluationMeasure === undefined || lastEvaluationMeasure === currentEvaluationMeasure) {  // Add data to the current trace
			trace_data.push(currentValue);
			trace_algos.push(currentAlgorithm);
			lastEvaluationMeasure = currentEvaluationMeasure;
		} else {  // Push the completed trace and start a new one
			traces.push({
				type: 'scatterpolar',
				r: trace_data,
				theta: trace_algos,
				name: lastEvaluationMeasure,
				fill: 'toself',
				marker: { size: 2 },
				line: { width: 1 }
			});
			trace_data = [currentValue];
			trace_algos = [currentAlgorithm];
			lastEvaluationMeasure = currentEvaluationMeasure;
		}
	}
	// Add the last trace if there is remaining data
	if (trace_data.length > 0 && trace_algos.length > 0) {
		traces.push({
			type: 'scatterpolar',
			r: trace_data,
			theta: trace_algos,
			name: lastEvaluationMeasure,
			fill: 'toself',
			marker: { size: 2 },
			line: { width: 1 }
		});
	}
	return traces
}

function getUniqueDatasets(records) {
	var unique_datasets_list = []
	for (let i = 0; i < records.length; i++) {
		if (!unique_datasets_list.includes(records[i].datasetLabel.value)) {
			unique_datasets_list.push(records[i].datasetLabel.value)
		}
	}
	return unique_datasets_list
}

function getUniqueAlgorithm(records) {
	var unique_algos_list = []
	for (let i = 0; i < records.length; i++) {
		if (!unique_algos_list.includes(records[i].Algorithm.value)) {
			unique_algos_list.push(records[i].Algorithm.value)
		}
	}
	return unique_algos_list
}

export function processDataHeatmapPlot(data, evaluationMeasure) {
	var unique_datasets = getUniqueDatasets(data.results.bindings)
	var unique_algos = getUniqueAlgorithm(data.results.bindings)
	var perf_data = {};
	for (let i = 0; i < unique_datasets.length; i++) {
		perf_data[unique_datasets[i]] = new Array(unique_algos.length).fill(undefined);
	}
	for (let i = 0; i < data.results.bindings.length; i++) {
		let record = data.results.bindings[i]
		let algo_index = unique_algos.indexOf(record.Algorithm.value)
		perf_data[record.datasetLabel.value][algo_index] = parseFloat(record.value.value)
	}
	let ranked_data = {}
	for (const dataset of Object.keys(perf_data)) {
		ranked_data[dataset] = rankArray(perf_data[dataset], evaluationMeasure)
	}
	var ranks = Array.from({ length: unique_algos.length }, () => Array(unique_algos.length).fill(0));
	for (let algo_id = 0; algo_id < unique_algos.length; algo_id++) {
		for (let rank = 1; rank <= unique_algos.length; rank++) {
			ranks[algo_id][rank - 1] = getRank(ranked_data, algo_id, rank)
		}
	}
	ranks = transposeMatrix(ranks)
	return [
		{
			z: ranks,
			x: unique_algos,
			y: Array.from({ length: 26 }, (_, i) => String(i + 1)), // Labels for the y-axis, from 1 to 26
			type: 'heatmap'
		}
	]
}

export function processScatterMeasuresData(data, selectedDataset, selectedMeasures) {
	data = data.results.bindings
	var traces = []
	var trace_vals = []
	var trace_method = []
	var lastMeasure = undefined
	for (let i = 0; i < data.length; i++) {
		let element = data[i]
		let currentAlgo = element.Algorithm.value
		let currentMeasure = element.evaluationMeasureClassLabel.value
		let currentValue = parseFloat(element.value.value)
		if (lastMeasure == undefined || currentMeasure === lastMeasure) {
			trace_vals.push(currentValue)
			trace_method.push(currentAlgo)
			lastMeasure = currentMeasure
		}
		else {
			traces.push({
				x: trace_method,
				y: trace_vals,
				mode: selectedMeasures < 4 ? 'lines+markers' : 'lines',
				type: 'scatter',
				name: lastMeasure
			})
			trace_vals = [currentValue]
			trace_method = [currentAlgo]
			lastMeasure = currentMeasure
		}
	}
	// Add the last trace if there is remaining data
	if (trace_vals.length > 0 && trace_method.length > 0) {
		traces.push({
			x: trace_method,
			y: trace_vals,
			mode: selectedMeasures < 4 ? 'lines+markers' : 'lines',
			type: 'scatter',
			name: lastMeasure
		});
	}
	return traces
}

export function processScatterMethodsData(data, selectedDataset, selectedMethods) {
	data = data.results.bindings
	console.log(data)
	var traces = []
	var trace_vals = []
	var trace_measure = []
	var lastMethod = undefined
	for (let i = 0; i < data.length; i++) {
		let element = data[i]
		let currentAlgo = element.Algorithm.value
		let currentMeasure = element.evaluationMeasureClassLabel.value
		let currentValue = parseFloat(element.value.value)
		if (lastMethod == undefined || currentAlgo === lastMethod) {
			trace_vals.push(currentValue)
			trace_measure.push(currentMeasure)
			lastMethod = currentAlgo
		}
		else {
			traces.push({
				x: trace_measure,
				y: trace_vals,
				mode: selectedMethods < 4 ? 'lines+markers' : 'lines',
				type: 'scatter',
				name: lastMethod
			})
			trace_vals = [currentValue]
			trace_measure = [currentMeasure]
			lastMethod = currentAlgo
		}
	}
	// Add the last trace if there is remaining data
	if (trace_vals.length > 0 && trace_measure.length > 0) {
		traces.push({
			x: trace_measure,
			y: trace_vals,
			mode: selectedMethods < 4 ? 'lines+markers' : 'lines',
			type: 'scatter',
			name: lastMethod
		})
	}
	return traces
}

function getRank(ranked_data, algo_id, rank) {
	var cnt = 0
	for (const dataset of Object.keys(ranked_data)) {
		if (ranked_data[dataset][algo_id] === rank) {
			cnt = cnt + 1
		}
	}
	return cnt
}

function transposeMatrix(matrix) {
	return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}

function rankArray(arr, evaluationMeasure) {
	const measuresForLowestBest = ["hamming loss example-based", "ranking loss", "one error", "training time", "testing time"];

	let higherIsBetter = measuresForLowestBest.includes(evaluationMeasure) ? false : true

	// Filter out undefined values and map original indices
	const filteredWithIndex = arr
		.map((value, index) => ({ value, index }))
		.filter(item => item.value !== undefined);

	// Sort the filtered array based on value
	filteredWithIndex.sort((a, b) => higherIsBetter ? b.value - a.value : a.value - b.value);

	// Create a new array to store ranks
	let ranks = new Array(arr.length);

	// Assign ranks to the original array elements
	filteredWithIndex.forEach((item, rank) => {
		ranks[item.index] = rank + 1; // rank + 1 because rank should start from 1
	});

	return ranks;
}

