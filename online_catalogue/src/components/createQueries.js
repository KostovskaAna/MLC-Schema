import { rangeFilter } from './utils.js'

export function getMethodsQuery() {
    return `
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

        select distinct ?algorithm_name
        where {
        ?dataset rdf:type <http://www.ontodm.com/OntoDM-core/OntoDM_000175> .
        ?dataset <http://www.ontodm.com/OntoDM-core/ontoexp_0074> ?algorithm_name.
        }
    `
}

export function getDatasetsQuery() {
    return `
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
        
        select ?dataset_label
        where {
        ?dataset rdf:type <http://www.ontodm.com/OntoDM-core/OntoDM_000144> .
        ?dataset rdfs:label ?dataset_labela_arff .
        FILTER (!regex(?dataset_label, "predicted") && !regex(?dataset_label, "fold") && !regex(?dataset_label, "train") && !regex(?dataset_label, "test")) .
        BIND(REPLACE(?dataset_labela_arff , ".arff", "", "i") AS ?dataset_label) .
        }
    `
}

export function getPerformanceQueryTrainTest(datasetFilterString, algorithmFilterString) {
    return `
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                
        SELECT ?datasetLabel ?Algorithm (group_concat( concat(?evaluationMeasureClassLabel , ":", ?value) ;separator=";") as ?EvaluationMeasures) ?model
        WHERE {
            select *
            where {
                ?trainTestDatasetAssignment <http://purl.obolibrary.org/obo/OBI_0000293> ?dataset. #filtering by dataset
                ?dataset rdfs:label ?datasetLabelArff .
                ${datasetFilterString}
                ?trainTestDatasetAssignment <http://www.obofoundry.org/ro/ro.owl#precedes> ?predictiveModelTrainTestEvaluationWorkflowExecution .
                MINUS {
                    ?oneFoldTestTwoFoldTrainDatasetAssigment <http://www.obofoundry.org/ro/ro.owl#precedes> ?predictiveModelTrainTestEvaluationWorkflowExecution. 
                    ?oneFoldTestTwoFoldTrainDatasetAssigment rdf:type <http://www.ontodm.com/OntoDM-core/ontoexp_0068>.
                }
                ?predictiveModelTrainTestEvaluationWorkflowExecution <http://purl.obolibrary.org/obo/BFO_0000051> ?predictiveModelingAlgorithmExecution.
                ?predictiveModelingAlgorithmExecution rdf:type <http://www.ontodm.com/OntoDM-core/OntoDM_000175> .
                ?predictiveModelingAlgorithmExecution <http://www.ontodm.com/OntoDM-core/ontoexp_0074> ?Algorithm . #filtering by althorithm
                ${algorithmFilterString}
                ?predictiveModelingAlgorithmExecution <http://purl.obolibrary.org/obo/OBI_0000299> ?predictiveModel.
                ?predictiveModel <http://www.ontodm.com/OntoDM-core/ontoexp_0072> ?model.
                ?predictiveModelTestSetEvaluationCalculation rdf:type <http://www.ontodm.com/OntoDM-core/ontoexp_0064>.
                ?predictiveModelTrainTestEvaluationWorkflowExecution <http://purl.obolibrary.org/obo/BFO_0000051> ?predictiveModelTestSetEvaluationCalculation.
                ?predictiveModelTestSetEvaluationCalculation <http://purl.obolibrary.org/obo/BFO_0000051> ?evaluationMeasureCalculation.
                ?evaluationMeasureCalculation <http://purl.obolibrary.org/obo/OBI_0000308> ?evaluationMeasureCalculationImplementation .
                ?evaluationMeasureCalculationImplementation <http://purl.obolibrary.org/obo/OBI_0000294> ?evaluationMeasure .
                ?evaluationMeasure rdf:type ?evaluationMeasureClass .
                ?evaluationMeasureClass rdfs:label ?evaluationMeasureClassLabel .
                ?evaluationMeasure <http://www.ontodm.com/OntoDT#OntoDT_0000240>  ?value.
                BIND(REPLACE(?datasetLabelArff , ".arff", "")  AS ?datasetLabel ).
            } order by (lcase(?evaluationMeasureClassLabel)) 
        }
        GROUP BY ?datasetLabel ?Algorithm ?model
        ORDER BY ?datasetLabel ?Algorithm
    `
}

export function getPerformanceQueryFolds(foldsFilterString, datasetFilterString, methodFilterString) {
    return `
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

        SELECT ?datasetLabel ?Algorithm (group_concat( concat(?evaluationMeasureClassLabel , ":", ?value) ;separator=";") as ?EvaluationMeasures) ?model ?TunedParameters ?Fold
        WHERE {
            select distinct ?datasetLabel ?Algorithm ?evaluationMeasureClassLabel ?value ?TunedParameters ?Fold ?model
            where { 
                ?foldTestFoldTrainDatasetAssignment rdf:type <http://www.ontodm.com/OntoDM-core/ontoexp_0068>.
                ?foldTestFoldTrainDatasetAssignment <http://purl.obolibrary.org/obo/OBI_0000299> ?foldTest.
                ?foldTest <http://purl.obolibrary.org/obo/OBI_0000316> ?foldRole .
                ?foldRole rdf:type <http://www.ontodm.com/OntoDM-core/ontoexp_0028> .
                ?foldTest rdfs:label ?Fold.
                ${foldsFilterString}
                ?foldTestFoldTrainDatasetAssignment <http://www.obofoundry.org/ro/ro.owl#precedes> ?predictiveModelTrainTestEvaluationWorkflowExecution .
                ?predictiveModelTrainTestEvaluationWorkflowExecution <http://www.obofoundry.org/ro/ro.owl#preceded_by> ?trainTestDatasetAssignment .
                ?trainTestDatasetAssignment <http://purl.obolibrary.org/obo/OBI_0000293> ?dataset . 
                ?dataset rdfs:label ?datasetLabelArff . 
                BIND(REPLACE(?datasetLabelArff , ".arff", "") AS ?datasetLabel ).
                ${datasetFilterString}
                ?predictiveModelTrainTestEvaluationWorkflowExecution <http://purl.obolibrary.org/obo/BFO_0000051> ?predictiveModelingAlgorithmExecution.
                ?predictiveModelingAlgorithmExecution <http://www.ontodm.com/OntoDM-core/ontoexp_0074> ?Algorithm. 	
                ?predictiveModelingAlgorithmExecution <http://purl.obolibrary.org/obo/OBI_0000299> ?predictiveModel.
                ${methodFilterString}
                ?predictiveModel <http://www.ontodm.com/OntoDM-core/ontoexp_0072> ?model.
                ?predictiveModelingAlgorithmExecution <http://www.obofoundry.org/ro/ro.owl#precedes> ?predictiveModelExecutionOnTestSet. 
                ?predictiveModelExecutionOnTestSet <http://www.obofoundry.org/ro/ro.owl#precedes> ?predictiveModelTestSetEvaluationCalculation.
                ?predictiveModelTestSetEvaluationCalculation <http://purl.obolibrary.org/obo/BFO_0000051> ?evaluationMeasuresCalculation.
                ?evaluationMeasuresCalculation <http://purl.obolibrary.org/obo/OBI_0000308> ?predictiveModelingEvaluationCalculationImplementation.
                ?predictiveModelingEvaluationCalculationImplementation <http://purl.obolibrary.org/obo/OBI_0000294> ?evaluationMeasure. 
                ?evaluationMeasure <http://www.ontodm.com/OntoDT#OntoDT_0000240> ?value.
                ?evaluationMeasure rdf:type ?evaluationMeasureClass .
                ?evaluationMeasureClass rdfs:label ?evaluationMeasureClassLabel .
                ?predictiveModelTrainTestEvaluationWorkflowExecution rdfs:label ?TunedParameters.
            }
            order by (lcase(?evaluationMeasureClassLabel))
        }
        GROUP BY ?datasetLabel ?Algorithm ?model ?TunedParameters ?Fold
        ORDER BY ?datasetLabel ?Algorithm ?Fold
    `
}

export function getPerformanceQueryFoldsAggregated(datasetFilterString, methodFilterString) {
    return `
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>		
    
    SELECT ?datasetLabel ?Algorithm (group_concat( concat(?evaluationMeasureClassLabel , ":", ?value) ;separator=";") as ?EvaluationMeasures) ?model ?TunedParameters ?Fold
    WHERE {
        select *
        where {
            ?foldTestFoldTrainDatasetAssignment <http://www.obofoundry.org/ro/ro.owl#precedes> ?predictiveModelTrainTestEvaluationWorkflowExecution .
            ?foldTestFoldTrainDatasetAssignment rdf:type <http://www.ontodm.com/OntoDM-core/ontoexp_0068>.
            ?foldTestFoldTrainDatasetAssignment <http://purl.obolibrary.org/obo/OBI_0000299> ?foldTest. 									
            ?foldTest rdf:type <http://www.ontodm.com/OntoDM-core/OntoDM_000144>. 		
            ?foldTest rdfs:label ?Fold.
            FILTER (regex(?Fold, "1_test")). 	
            ?trainTestDatasetAssignment <http://purl.obolibrary.org/obo/OBI_0000293> ?dataset.
            ?dataset rdfs:label ?datasetLabelArff .
            BIND(REPLACE(?datasetLabelArff , ".arff", "")  AS ?datasetLabel ).
            ${datasetFilterString}
            ?trainTestDatasetAssignment <http://www.obofoundry.org/ro/ro.owl#precedes> ?predictiveModelTrainTestEvaluationWorkflowExecution .
            ?predictiveModelTrainTestEvaluationWorkflowExecution <http://purl.obolibrary.org/obo/BFO_0000051> ?predictiveModelingAlgorithmExecution.
            ?predictiveModelingAlgorithmExecution <http://www.ontodm.com/OntoDM-core/ontoexp_0074> ?Algorithm .
            ${methodFilterString}
            ?predictiveModelingAlgorithmExecution <http://purl.obolibrary.org/obo/OBI_0000299> ?predictiveModel.
            ?predictiveModel <http://www.ontodm.com/OntoDM-core/ontoexp_0072> ?model.
            ?predictiveModelTrainTestEvaluationWorkflowExecution <http://purl.obolibrary.org/obo/BFO_0000051> ?predictiveModelTestSetEvaluationCalculation. 
            ?predictiveModelTestSetEvaluationCalculation rdf:type <http://www.ontodm.com/OntoDM-core/ontoexp_0064>. 
            ?predictiveModelTestSetEvaluationCalculation <http://purl.obolibrary.org/obo/BFO_0000051> ?evaluationMeasureCalculation. 
            ?evaluationMeasureCalculation <http://purl.obolibrary.org/obo/OBI_0000308> ?predictiveModellingEvaluationCalculation. 
            ?predictiveModellingEvaluationCalculation <http://purl.obolibrary.org/obo/OBI_0000294> ?EvaluationMeasure.
            ?EvaluationMeasure rdfs:label ?NFoldEvaluationMeasureLabel.
            ?EvaluationMeasure <http://purl.obolibrary.org/obo/OBI_0000295> ?NFoldCrossValidationEvaluationCalculation.
            ?NFoldCrossValidationEvaluationCalculation <http://purl.obolibrary.org/obo/OBI_0000299> ?NFoldAvgEvaluationMeasure.
            ?NFoldAvgEvaluationMeasure <http://www.ontodm.com/OntoDT#OntoDT_0000240> ?value.
            ?evaluationMeasureCalculation rdfs:label ?evaluationMeasure_label.
            ?evaluationMeasureCalculation rdf:type ?evaluationMeasureClass .
            ?predictiveModelTrainTestEvaluationWorkflowExecution rdfs:label ?TunedParameters.
            ?evaluationMeasureClass rdfs:label ?evaluationMeasureClassLabel .		
        } order by (lcase(?evaluationMeasureClassLabel))}
    GROUP BY ?datasetLabel ?Algorithm ?model ?TunedParameters ?Fold
    ORDER BY ?datasetLabel ?Algorithm`
}

export function getPlotQueryTrainTest(selectedMeasures, filterSelectedDatasets, methodFilterString, orderString) {
    return `
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            
    SELECT distinct ?Algorithm ?datasetLabel ?value ?evaluationMeasureClassLabel 
    WHERE {
        ?trainTestDatasetAssignment <http://purl.obolibrary.org/obo/OBI_0000293> ?dataset.
        ?dataset rdfs:label ?datasetLabelArff .
        BIND(REPLACE(?datasetLabelArff , ".arff", "")  AS ?datasetLabel ).
        ${filterSelectedDatasets}
        ?trainTestDatasetAssignment <http://www.obofoundry.org/ro/ro.owl#precedes> ?predictiveModelTrainTestEvaluationWorkflowExecution .
        MINUS {
            ?oneFoldTestTwoFoldTrainDatasetAssigment <http://www.obofoundry.org/ro/ro.owl#precedes> ?predictiveModelTrainTestEvaluationWorkflowExecution. 
            ?oneFoldTestTwoFoldTrainDatasetAssigment rdf:type <http://www.ontodm.com/OntoDM-core/ontoexp_0068>.
        }
        ?predictiveModelTrainTestEvaluationWorkflowExecution <http://purl.obolibrary.org/obo/BFO_0000051> ?predictiveModelingAlgorithmExecution.
        ?predictiveModelingAlgorithmExecution rdf:type <http://www.ontodm.com/OntoDM-core/OntoDM_000175> .
        ?predictiveModelingAlgorithmExecution <http://www.ontodm.com/OntoDM-core/ontoexp_0074> ?Algorithm .
        ${methodFilterString} 
        ?predictiveModelTrainTestEvaluationWorkflowExecution <http://purl.obolibrary.org/obo/BFO_0000051> ?predictiveModelTestSetEvaluationCalculation.
        ?predictiveModelTestSetEvaluationCalculation rdf:type <http://www.ontodm.com/OntoDM-core/ontoexp_0064> .
        ?predictiveModelTestSetEvaluationCalculation <http://purl.obolibrary.org/obo/BFO_0000051> ?evaluationMeasureCalculation.
        ?evaluationMeasureCalculation <http://purl.obolibrary.org/obo/OBI_0000308> ?evaluationMeasureCalculationImplementation .
        ?evaluationMeasureCalculationImplementation <http://purl.obolibrary.org/obo/OBI_0000294> ?evaluationMeasure .
        ?evaluationMeasure rdf:type ?evaluationMeasureClass .
        ?evaluationMeasureClass rdfs:label ?evaluationMeasureClassLabel .
        ${selectedMeasures} 
        ?evaluationMeasure <http://www.ontodm.com/OntoDT#OntoDT_0000240>  ?value.
    }
    ORDER BY ${orderString}
    `
}

export function getPlotQueryFoldsAgregated(selectedMeasures, filterSelectedDatasets, orderString) {
    return `
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
	PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

    select distinct ?Algorithm ?datasetLabel ?value ?NFoldEvaluationMeasureLabel
        where { 
            ?foldTestFoldTrainDatasetAssignment rdf:type <http://www.ontodm.com/OntoDM-core/ontoexp_0068>.
            ?foldTestFoldTrainDatasetAssignment rdfs:label ?foldTestFoldTrainDatasetAssignmentLabel.
            # FILTER contains (?foldTestFoldTrainDatasetAssignmentLabel,"_2_fold_test_1_3_fold_train_dataset_assignment")
            ?foldTestFoldTrainDatasetAssignment <http://www.obofoundry.org/ro/ro.owl#precedes> ?predictiveModelTrainTestEvaluationWorkflowExecution .
            ?predictiveModelTrainTestEvaluationWorkflowExecution <http://www.obofoundry.org/ro/ro.owl#preceded_by> ?trainTestDatasetAssignment .
            ?trainTestDatasetAssignment <http://purl.obolibrary.org/obo/OBI_0000293> ?dataset .
            ?dataset rdfs:label ?datasetLabelArff . 
            BIND(REPLACE(?datasetLabelArff , ".arff", "") AS ?datasetLabel ).
            ${filterSelectedDatasets}
            ?predictiveModelTrainTestEvaluationWorkflowExecution <http://purl.obolibrary.org/obo/BFO_0000051> ?predictiveModelingAlgorithmExecution.
            ?predictiveModelingAlgorithmExecution <http://www.ontodm.com/OntoDM-core/ontoexp_0074> ?Algorithm.             
            ?predictiveModelingAlgorithmExecution <http://www.obofoundry.org/ro/ro.owl#precedes> ?predictiveModelExecutionOnTestSet. 
            ?predictiveModelExecutionOnTestSet <http://www.obofoundry.org/ro/ro.owl#precedes> ?predictiveModelTestSetEvaluationCalculation.
            ?predictiveModelTestSetEvaluationCalculation <http://purl.obolibrary.org/obo/BFO_0000051> ?evaluationMeasuresCalculation.
            ?evaluationMeasuresCalculation <http://purl.obolibrary.org/obo/OBI_0000308> ?predictiveModelingEvaluationCalculationImplementation.
            ?predictiveModelingEvaluationCalculationImplementation <http://purl.obolibrary.org/obo/OBI_0000294> ?evaluationMeasure. 
            ?evaluationMeasure rdf:type ?evaluationMeasureClass.
            ?evaluationMeasureClass rdfs:label ?evaluationMeasureClassLabel .
            FILTER(?evaluationMeasureClassLabel in (${selectedMeasures})) .
            ?evaluationMeasure <http://purl.obolibrary.org/obo/OBI_0000295> ?NFoldCrossValidationEvaluationCalculation.
            ?NFoldCrossValidationEvaluationCalculation <http://purl.obolibrary.org/obo/OBI_0000299> ?NFoldAvgEvaluationMeasure.
            ?NFoldAvgEvaluationMeasure  <http://www.ontodm.com/OntoDT#OntoDT_0000240> ?value.
            ?NFoldAvgEvaluationMeasure rdfs:label ?NFoldEvaluationMeasureLabel.
        }
        GROUP BY ?NFoldEvaluationMeasureLabel
        ORDER BY ${orderString}  
`

}

export function getDatasetsWithoutFilter() {
    return `
        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> 
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        PREFIX OntoDM: <http://www.ontodm.com/OntoDM-core/>
        PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
        SELECT DISTINCT ?dsetInstance ?datasetLabel ?numTargets ?numDescriptive ?numInstances ?hasMissingValues
        WHERE {
          ?dsetInstance rdf:type ?dsetClass .
          ?dsetClass rdfs:subClassOf <http://www.ontodm.com/OntoDM-core/OntoDM_000144> .
          ?dsetInstance rdfs:label ?datasetLabel .
          ?dsetInstance <http://ontodm.com/SemanticAnnotation#numOfTargets> ?numTargets .
          ?dsetInstance <http://ontodm.com/SemanticAnnotation#numOfDescriptiveFeatures> ?numDescriptive .
          ?dsetInstance <http://ontodm.com/SemanticAnnotation#numberOfInstances> ?numInstances . 
          ?dsetInstance <http://ontodm.com/SemanticAnnotation#hasMissingValues> ?hasMissingValues . 
          FILTER(?hasMissingValues in (false, true))
          ?dsInstance <http://purl.obolibrary.org/obo/IAO_0000136> ?dsetInstance .
          ?dsInstance rdf:type ?datasetClass .
          ?datasetClass rdfs:subClassOf <http://www.ontodm.com/OntoDM-core/OntoDM_400000> .
          ?datasetClass rdfs:subClassOf ?datasetSuperClass .
          ?datasetSuperClass rdfs:label ?datasetSuperClassLabel .
          FILTER( ?datasetSuperClassLabel IN ('data specification'@en)).
        }
        ORDER BY LCASE(?datasetLabel)
      `
}

export function getDatasetsWithFilter(mappings, missingValuesSpec, numberOfDescriptiveFeatures, numberOfTargetFeatures) {
    const datasetSpecificationLabelString = "'multi-label classification dataset'@en";
    const metaFeaturesStr = mappings.map((metaFeature, index) => {
        return `(?mfLabel = '${metaFeature.key}' && ${rangeFilter(metaFeature.range, "xsd:float(?mfValue)")})`;
    }).join(" || ");

    const mappingsFilter = mappings.length > 0 ?
        `
            {
                select (count(?mfInstance) as ?mf) ?dsetInstance
                where {
                    ?dsetInstance <http://purl.obolibrary.org/obo/RO_0000086> ?mfInstance .
                    ?mfInstance <http://www.ontodm.com/OntoDT#OntoDT_0000240> ?mfValue .
                    ?mfInstance <http://ontodm.com/SemanticAnnotation#typeName> ?mfLabel .
                    FILTER(${metaFeaturesStr}).
                }
                group by ?dsetInstance
            }
            filter (?mf = ${mappings.length}) .` : "";

    let missingValuesFilter = ''
    if (missingValuesSpec === 'both')
        missingValuesFilter = "FILTER(?hasMissingValues in (false, true))"
    else if (missingValuesSpec === 'withoutMissing') {
        missingValuesFilter = "FILTER(?hasMissingValues=false)";
    }
    else {
        missingValuesFilter = `FILTER(?hasMissingValues=true)`;
    }

    const descriptiveFeaturesFilter = (numberOfDescriptiveFeatures !== undefined && numberOfDescriptiveFeatures !== '')
        ? `FILTER(${rangeFilter(numberOfDescriptiveFeatures, '?numDescriptive')})`
        : "";

    const targetFeaturesFilter = (numberOfTargetFeatures !== undefined && numberOfDescriptiveFeatures !== '')
        ? `FILTER(${rangeFilter(numberOfTargetFeatures, '?numTargets')})`
        : "";

    return `
        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        PREFIX OntoDM: <http://www.ontodm.com/OntoDM-core/>
        PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
        SELECT DISTINCT ?dsetInstance ?datasetLabel ?numTargets ?numDescriptive ?numInstances ?hasMissingValues
        WHERE {
            ?dsetInstance rdf:type ?dsetClass .
            ?dsetClass rdfs:subClassOf <http://www.ontodm.com/OntoDM-core/OntoDM_000144> .
            ?dsetInstance rdfs:label ?datasetLabel .
            ?dsetInstance <http://ontodm.com/SemanticAnnotation#numOfTargets> ?numTargets .
            ?dsetInstance <http://ontodm.com/SemanticAnnotation#numOfDescriptiveFeatures> ?numDescriptive .
            ?dsetInstance <http://ontodm.com/SemanticAnnotation#numberOfInstances> ?numInstances .
            ?dsetInstance <http://ontodm.com/SemanticAnnotation#hasMissingValues> ?hasMissingValues .
            ${mappingsFilter}
            ${missingValuesFilter}
            ${descriptiveFeaturesFilter}
            ${targetFeaturesFilter}
            ?dsInstance <http://purl.obolibrary.org/obo/IAO_0000136> ?dsetInstance .
            ?dsInstance rdf:type ?datasetClass .
            ?datasetClass rdfs:subClassOf <http://www.ontodm.com/OntoDM-core/OntoDM_400000> .
            ?datasetClass rdfs:subClassOf ?datasetSuperClass .
            ?datasetSuperClass rdfs:label ?datasetSuperClassLabel .
            FILTER(?datasetSuperClassLabel IN (${datasetSpecificationLabelString})).
        }
        ORDER BY LCASE(?datasetLabel)
    `;
}


export function getDatasetsWithFilterMeta(mappings, withoutMissing, numberOfDescriptiveFeatures, numberOfTargetFeatures) {
    var datasetSpecificationLabelString = "'multi-label classification dataset'@en"
    const metaFeaturesStr = mappings.map((metaFeature, index) => {
        return `(?mfLabel = '${metaFeature.key}' && ${rangeFilter(metaFeature.range, "xsd:float(?mfValue)")})`;
    }).join(" || ");

    const mappingsFilter = mappings.length > 0 ? `
        {
            select (count(?mfInstance) as ?mf) ?dsetInstance
            where {
                ?dsetInstance <http://purl.obolibrary.org/obo/RO_0000086> ?mfInstance .
                ?mfInstance <http://www.ontodm.com/OntoDT#OntoDT_0000240> ?mfValue .
                ?mfInstance <http://ontodm.com/SemanticAnnotation#typeName> ?mfLabel .
                FILTER(${metaFeaturesStr}).
            }
            group by ?dsetInstance
        }
        filter (?mf = ${mappings.length}) .
    ` : "";

    const missingValuesFilter = withoutMissing === undefined
        ? "FILTER(?hasMissingValues in (false, true))\n"
        : `FILTER(?hasMissingValues=${!withoutMissing})\n`;

    const descriptiveFeaturesFilter = numberOfDescriptiveFeatures !== undefined
        ? `FILTER(${rangeFilter(numberOfDescriptiveFeatures, '?numDescriptive')})\n`
        : "";

    const targetFeaturesFilter = numberOfTargetFeatures !== undefined
        ? `FILTER(${rangeFilter(numberOfTargetFeatures, '?numTargets')})\n`
        : "";


    return `
      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
      PREFIX OntoDM: <http://www.ontodm.com/OntoDM-core/>
      PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
      SELECT DISTINCT ?dsetInstance ?datasetLabel ?mfLabel ?mfValue
      WHERE {
        ?dsetInstance rdf:type ?dsetClass .
        ?dsetClass rdfs:subClassOf <http://www.ontodm.com/OntoDM-core/OntoDM_000144> .
        ?dsetInstance rdfs:label ?datasetLabel .
        ?dsetInstance <http://ontodm.com/SemanticAnnotation#numOfTargets> ?numTargets .
        ?dsetInstance <http://ontodm.com/SemanticAnnotation#numOfDescriptiveFeatures> ?numDescriptive .
        ?dsetInstance <http://ontodm.com/SemanticAnnotation#numberOfInstances> ?numInstances .
        ?dsetInstance <http://ontodm.com/SemanticAnnotation#hasMissingValues> ?hasMissingValues .
        ${mappingsFilter}
        ${missingValuesFilter}
        ${descriptiveFeaturesFilter}
        ${targetFeaturesFilter}
        ?dsInstance <http://purl.obolibrary.org/obo/IAO_0000136> ?dsetInstance .
        ?dsInstance rdf:type ?datasetClass .
        ?datasetClass rdfs:subClassOf <http://www.ontodm.com/OntoDM-core/OntoDM_400000> .
        ?datasetClass rdfs:subClassOf ?datasetSuperClass .
        ?datasetSuperClass rdfs:label ?datasetSuperClassLabel .
        FILTER(?datasetSuperClassLabel IN (${datasetSpecificationLabelString})).
        ?dsetInstance <http://purl.obolibrary.org/obo/RO_0000086> ?mfInstance .
        ?mfInstance <http://www.ontodm.com/OntoDT#OntoDT_0000240> ?mfValue .
        ?mfInstance <http://ontodm.com/SemanticAnnotation#typeName> ?mfLabel .
      }
      ORDER BY LCASE(?datasetLabel)
    `;
}