export let virtuosoReqURL = "http://95.87.154.192:8890/sparql/?default-graph-uri=http%3A%2F%2Flocalhost%3A8890%2FMLCBenchmark&&Content-Type='application/json'&query="
export let fusekiReqURL = "http://semantichub.ijs.si/fuseki/MLC-datasets/query?query="

export let Datasets = [
  '', 'ABPM', 'Arabic200', 'bibtex', 'birds', 'cal500', 'CHD_49', 'corel5k', 'delicious',
  'emotions', 'enron', 'flags', 'foodtruck', 'genbase', 'GnegativeGO', 'GnegativePseACC',
  'GpositiveGO', 'GpositivePseAAC', 'HumanGO', 'HumanPseAAC', 'langlog', 'medical', 'ng20',
  'oshumed', 'PlantGO', 'PlantPseAAC', 'proteins_human', 'proteins_plant', 'proteins_virus',
  'reutersk500', 'scene', 'slashdot', 'stackex_chess', 'stackex_cs', 'stackex_philosphy',
  'tmc2007_500', 'VirusGO', 'Virus_PseAAC', 'Water_quality', 'yeast', 'Yelp'
]

export let Methods_dict = [
  {
    "name": 'AdaBoost',
    "Abbreviation": "Ada300",
    "paperLink": "https://link.springer.com/article/10.1023/A:1007649029923",
    "authors": "Robert E. Schapire, Yoram Singer",
  },
  {
    "name": 'Back-propagation Neural Networks',
    "Abbreviation": "BPNN",
    "paperLink": "https://arxiv.org/abs/1502.05988",
    "authors": "Jesse Read, Fernando Perez-Cruz",
  },
  {
    "name": 'Binary Relevance',
    "Abbreviation": "BR",
    "paperLink": "https://www.researchgate.net/publication/273859036_Multi-Label_Classification_An_Overview",
    "authors": "Grigorios Tsoumakas, Ioannis Katakis",
    "doi_link": "http://dx.doi.org/10.4018/jdwm.2007070101"
  },
  {
    "name": 'Classifier Chains',
    "Abbreviation": "CC",
    "paperLink": "https://www.cs.waikato.ac.nz/~eibe/pubs/chains.pdf",
    "authors": "Jesse Read, Bernhard Pfahringer, Geoff Holmes, Eibe Frank",
  },
  {
    "name": 'Ensemble of Chi-dep',
    "Abbreviation": "CDE",
    "paperLink": "https://www.researchgate.net/publication/236005696_Identification_of_label_dependencies_for_multi-label_classification",
    "authors": "Lena Tenenboim, Lior Rokach, Bracha Shapira"
  },
  {
    "name": 'Conditional Dependency Network',
    "Abbreviation": "CDN",
    "paperLink": "https://www.ijcai.org/Proceedings/11/Papers/220.pdf",
    "authors": "Yuhong Guo, Suicheng Gu",
  },
  {
    "name": 'Cost-Sensitive Multi-label Embedding',
    "Abbreviation": "CLEMS",
    "paperLink": "https://khhuang.me/docs/ecml2017clems.pdf",
    "authors": "Kuan-Hao Huang, Hsuan-Tien Lin",
  },
  {
    "name": 'Calibrated Label Ranking',
    "Abbreviation": "CLR",
    "paperLink": "https://cs.uni-paderborn.de/fileadmin-eim/informatik/fg/is/Publications/ml08.pdf",
    "authors": "Johannes Fürnkranz, Eyke Hüllermeier, Eneldo Loza Mencía, Klaus Brinker",
  },
  {
    "name": 'Deep Belief Networks',
    "Abbreviation": "DEEP",
    "paperLink": "https://arxiv.org/abs/1502.05988",
    "authors": "Jesse Read, Fernando Perez-Cruz",
  },
  {
    "name": 'Ensembles of Binary Relevance',
    "Abbreviation": "EBRJ48",
    "paperLink": "https://www.cs.waikato.ac.nz/~eibe/pubs/chains.pdf",
    "authors": "Jesse Read, Bernhard Pfahringer, Geoff Holmes, Eibe Frank"
  },
  {
    "name": 'Ensembles of Classifier Chains with J48',
    "Abbreviation": "ECCJ48",
    "paperLink": "https://www.cs.waikato.ac.nz/~eibe/pubs/chains.pdf",
    "authors": "Jesse Read, Bernhard Pfahringer, Geoff Holmes, Eibe Frank"
  },
  {
    "name": 'Ensemble of Pruned Sets',
    "Abbreviation": "EPS",
    "paperLink": "https://researchcommons.waikato.ac.nz/bitstream/handle/10289/8077/Multi-label.pdf?sequence=1&isAllowed=y",
    "authors": "Jesse Read, Bernhard Pfahringer, Geoff Holmes",
  },
  {
    "name": 'Hierarchy of Multi-label Classifiers',
    "Abbreviation": "HOMER",
    "paperLink": "http://www.ecmlpkdd2008.org/files/pdf/workshops/mmd/4.pdf",
    "authors": "Grigorios Tsoumakas, Ioannis Katakis, Ioannis Vlahavas",
  },
  {
    "name": 'Label Powerset',
    "Abbreviation": "LP",
    "paperLink": "https://arxiv.org/abs/1502.05988",
    "authors": "Jesse Read, Fernando Perez-Cruz",
  },
  {
    "name": 'Meta Binary Relevance',
    "Abbreviation": "MBR",
    "paperLink": "https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=5e7dc496af5a0210e2d5f99af83351a882408c51",
    "authors": "Grigorios Tsoumakas, Anastasios Dimou, Eleftherios Spyromitros, Vasileio Mezaris, Ioannis Kompatsiaris, Ioannis Vlahavas",
  },
  {
    "name": 'Multi-label Adaptive Resonance Associative Map',
    "Abbreviation": "MLARM",
    "paperLink": "https://www.semanticscholar.org/paper/ART-Based-Neural-Networks-for-Multi-label-Sapozhnikova/170075b3b8632142d706d29b31b0cea05f692508",
    "authors": "Elena P. Sapozhnikova",
  },
  {
    "name": 'Twin Multi-Label Support Vector Machine',
    "Abbreviation": "MLTSVM",
    "paperLink": "https://www.researchgate.net/publication/324223477_MLTSVM-A_novel_twin_support_vector_machine_to_multi-label_learning",
    "authors": "Wei-Jie Chen, Yuanhai Shao, Chunna Li, Naiyang Deng",
  },
  {
    "name": 'Multi-label k Nearest Neighbor',
    "Abbreviation": "MLkNN",
    "paperLink": "https://www.researchgate.net/publication/4196695_A_k-nearest_neighbor_based_algorithm_for_multi-label_classification",
    "authors": "Min-Ling Zhang, Zhi-Hua Zhou",
  },
  {
    "name": 'Predictive Clustering Trees',
    "Abbreviation": "PCT",
    "paperLink": "https://www.researchgate.net/publication/1955186_Top-Down_Induction_of_Clustering_Trees",
    "authors": "Hendrik Blockeel, Luc De Raedt, Jan Ramon",
  },
  {
    "name": 'Pruned Sets',
    "Abbreviation": "PSt",
    "paperLink": "https://researchcommons.waikato.ac.nz/bitstream/handle/10289/8077/Multi-label.pdf?sequence=1&isAllowed=y",
    "authors": "Jesse Read, Bernhard Pfahringer, Geoff Holmes",
  },
  {
    "name": 'Random k Labelsets',
    "Abbreviation": "RAkEL",
    "paperLink": "https://ieeexplore.ieee.org/document/5567103",
    "authors": "Grigorios Tsoumakas, Ioannis Katakis, I. Vlahavas",
  },
  {
    "name": 'Binary Relevance with Random Forest of Decision Trees',
    "Abbreviation": "RFDTBR",
    "paperLink": "https://www.cs.waikato.ac.nz/~eibe/pubs/chains.pdf",
    "authors": "Jesse Read, Bernhard Pfahringer, Geoff Holmes, Eibe Frank"
  },
  {
    "name": 'Random Forest of Predictive Clustering Trees',
    "Abbreviation": "RFPCT",
    "paperLink": "source",
    "authors": "Dragi Kocev",
    "doi": "https://kt.ijs.si/DragiKocev/wikipage/lib/exe/fetch.php?media=2011_kocev_thesis_final.pdf"
  },
  {
    "name": 'Random Subspace for Multi-label Classification',
    "Abbreviation": "RSMLCC",
    "paperLink": "source",
    "authors": "Scalable Multi-label Classification",
    "doi": "Jesse Read"
  },
  {
    "name": 'Subset Mapper',
    "Abbreviation": "SSM",
    "paperLink": "https://www.face-rec.org/algorithms/Boosting-Ensemble/decision-theoretic_generalization.pdf",
    "authors": "Yoav Freund and Robert E. Schapire",
  },
  {
    "name": 'Triple Random Ensemble',
    "Abbreviation": "TREMLC",
    "paperLink": "https://ieeexplore.ieee.org/document/5693281",
    "authors": "Gulisong Nasierding, Abbas Z. Kouzani, Grigorios Tsoumakas",
  }
]

export let Methods = [
  '', 'Ada300', 'BPNN', 'BR', 'CC', 'CDE', 'CDN', 'CLEMS', 'CLR', 'DEEP1', 'DEEP4',
  'EBRJ48', 'ECCJ48', 'EPS', 'HOMER', 'LP', 'MBR', 'MLARM', 'MLTSVM', 'MLkNN', 'PCT',
  'PSt', 'RAkEL2', 'RFDTBR', 'RFPCT', 'RSMLCC', 'SSM', 'TREMLC', 'TREMLCnew'
]

export let Methods_v2 = [
  'Ada300', 'BPNN', 'BR', 'CC', 'CDE', 'CDN', 'CLEMS', 'CLR', 'DEEP1', 'DEEP4',
  'EBRJ48', 'ECCJ48', 'EPS', 'HOMER', 'LP', 'MBR', 'MLARM', 'MLTSVM', 'MLkNN', 'PCT',
  'PSt', 'RAkEL2', 'RFDTBR', 'RFPCT', 'RSMLCC', 'SSM', 'TREMLC', 'TREMLCnew'
]

export let Measures = [
  '', 'ACCURACY example-based', 'AUCROC MACRO', 'AUCROC MICRO', 'AUCROC SAMPLES',
  'AUCROC WEIGHTED', 'AUPRC MACRO', 'AUPRC MICRO', 'AUPRC SAMPLE', 'AUPRC WEIGHTED',
  'COVARAGE', 'F1 example based', 'HAMMING LOSS example based',
  'LABEL RANKING AVERAGE PRECISION', 'LABEL RANKING LOSS', 'MACRO F1', 'MACRO PRECISION',
  'MACRO RECALL', 'MICRO F1', 'MICRO PRECISION', 'MICRO RECALL', 'ONE ERROR',
  'PRECISION example based', 'RECALL example based', 'SUBSET ACCURACY', 'WEIGHTED F1',
  'WEIGHTED PRECISION', 'WEIGHTED RECALL', 'ZERO ONE LOSS', 'testTime', 'timeForEval',
  'trainTime'
]
export let domains = [
  "Text", "Text/Web Page", "Text/Reports", "Text/Legislation", "Text/Forum", "Text/Email",
  "Text/Short texts", "Medical", "Multimedia", "Multimedia/Image", "Multimedia/Music",
  "Multimedia/Video", "Bioinformatics", "Chemistry"
]

export let units = [
  "text document", "image", "patient information", "audio recording", "protein",
  "water samples", "questionnaire response", "video recording", "short text documents"
]


export let evaluationMeasureList = [
  'accuracy example-based', 'AUPRC', 'AUROC', 'average precision', 'coverage', 'F1-score example-based',
  'hamming loss example-based', 'macro F1-score', 'macro precision', 'macro recall', 'micro F1-score',
  'micro precision', 'micro recall', 'one error', 'precision example-based', 'ranking loss',
  'recall example-based', 'subset accuracy', 'testing time', 'training time'
]

export let evaluationMeasureListTrainTest = [
  'accuracy example-based', 'AUPRC', 'AUROC', 'average precision', 'coverage', 'F1-score example-based',
  'hamming loss example-based', 'macro F1-score', 'macro precision', 'macro recall', 'micro F1-score',
  'micro precision', 'micro recall', 'one error', 'precision example-based', 'ranking loss',
  'recall example-based', 'subset accuracy', 'testing time', 'training time'
]

export let evaluationMeasureListFolds = [
  'accuracy example-based', 'AUPRC', 'AUROC', 'average precision', 'coverage', 'F1-score example-based',
  'hamming loss example-based', 'macro F1-score', 'macro precision', 'macro recall', 'micro F1-score',
  'micro precision', 'micro recall', 'one error', 'precision example-based', 'ranking loss',
  'recall example-based', 'subset accuracy'
]


export let dataset_unit = {
  "3sources_bbc1000": "text document",
  "3sources_guardian1000": "text document",
  "3sources_intern3000": "text document",
  "3sources_reuters1000": "text document",
  "ABPM": "patient information",
  "Arabic1000": "text document",
  "Arabic200": "text document",
  "Arabic2000": "text document",
  "Arabic3000": "text document",
  "Arabic4000": "text document",
  "Arabic500": "text document",
  "bibtex": "text document",
  "birds": "audio recording",
  "bookmarks": "text document",
  "cal500": "audio recording",
  "CHD_49": "patient information",
  "corel16k001": "image",
  "corel16k002": "image",
  "corel16k003": "image",
  "corel16k004": "image",
  "corel16k005": "image",
  "corel16k006": "image",
  "corel16k007": "image",
  "corel16k008": "image",
  "corel16k009": "image",
  "corel16k010": "image",
  "corel5k": "image",
  "delicious": "text document",
  "emotions": "audio recording",
  "enron": "text document",
  "EukaryoteGO": "protein",
  "EukaryotePseAAC": "protein",
  "eurlexdc": "text document",
  "eurlexev": "text document",
  "eurloexsm": "text document",
  "foodtruck": "questionnaire response",
  "genbase": "protein",
  "GnegativeGO": "protein",
  "GnegativePseACC": "protein",
  "GpositiveGO": "protein",
  "GpositivePseAAC": "protein",
  "HumanGO": "protein",
  "HumanPseAAC": "protein",
  "Image": "image",
  "imdb": "text document",
  "langlog": "text document",
  "mediamill": "video recording",
  "medical": "text document",
  "ng20": "text document",
  "nuswide_BoW": "image",
  "nuswide_VLAD": "image",
  "ohsumed": "text document",
  "PlantGO": "protein",
  "PlantPseAAC": "protein",
  "proteins_humans": "protein",
  "proteins_plants": "protein",
  "proteins_virus": "protein",
  "rcv1sub1": "text document",
  "rcv1sub2": "text document",
  "rcv1sub3": "text document",
  "rcv1sub4": "text document",
  "rcv1sub5": "text document",
  "reutersk500": "text document",
  "scene": "image",
  "Slashdot": "text document",
  "stackex_chemistry": "text document",
  "stackex_chess": "text document",
  "stackex_coffee": "text document",
  "stackex_cs": "text document",
  "stackex_philosophy": "text document",
  "tmc2007_500": "text document",
  "tmc2007": "text document",
  "twitterEmotions": "short text documents",
  "Virus_PseAAC": "protein",
  "VirusGO": "protein",
  "Water_quality": "water samples",
  "yahoo_arts": "text document",
  "yahoo_business": "text document",
  "yahoo_computer": "text document",
  "yahoo_education": "text document",
  "yahoo_entertainment": "text document",
  "yahoo_health": "text document",
  "yahoo_recreation": "text document",
  "yahoo_reference": "text document",
  "yahoo_science": "text document",
  "yahoo_social": "text document",
  "yahoo_society": "text document",
  "yeast": "protein",
  "Yelp": "text document"
}

export let dataset_domain = {
  "3sources_bbc1000": "Text/Web Page",
  "3sources_guardian1000": "Text/Web Page",
  "3sources_intern3000": "Text/Web Page",
  "3sources_reuters1000": "Text/Web Page",
  "ABPM": "Medical",
  "Arabic1000": "Text/Web Page",
  "Arabic200": "Text/Web Page",
  "Arabic2000": "Text/Web Page",
  "Arabic3000": "Text/Web Page",
  "Arabic4000": "Text/Web Page",
  "Arabic500": "Text/Web Page",
  "CHD_49": "Medical",
  "EukaryoteGO": "Bioinformatics",
  "EukaryotePseAAC": "Bioinformatics",
  "GnegativeGO": "Bioinformatics",
  "GnegativePseACC": "Bioinformatics",
  "GpositiveGO": "Bioinformatics",
  "GpositivePseAAC": "Bioinformatics",
  "HumanGO": "Bioinformatics",
  "HumanPseAAC": "Bioinformatics",
  "Image": "Multimedia/Image",
  "PlantGO": "Bioinformatics",
  "PlantPseAAC": "Bioinformatics",
  "Slashdot": "Text/Web Page",
  "VirusGO": "Bioinformatics",
  "Virus_PseAAC": "Bioinformatics",
  "Water_quality": "Chemistry",
  "Yelp": "Text/Reports",
  "bibtex": "Text/Web Page",
  "birds": "Multimedia/Music",
  "bookmarks": "Text/Web Page",
  "cal500": "Multimedia/Music",
  "corel16k001": "Multimedia/Image",
  "corel16k002": "Multimedia/Image",
  "corel16k003": "Multimedia/Image",
  "corel16k004": "Multimedia/Image",
  "corel16k005": "Multimedia/Image",
  "corel16k006": "Multimedia/Image",
  "corel16k007": "Multimedia/Image",
  "corel16k008": "Multimedia/Image",
  "corel16k009": "Multimedia/Image",
  "corel16k010": "Multimedia/Image",
  "corel5k": "Multimedia/Image",
  "delicious": "Text/Web Page",
  "emotions": "Multimedia/Music",
  "enron": "Text/Email",
  "eurlexdc": "Text/Legislation",
  "eurlexev": "Text/Legislation",
  "eurloexsm": "Text/Legislation",
  "foodtruck": "Text/Reports",
  "genbase": "Bioinformatics",
  "imdb": "Text/Forum",
  "langlog": "Text/Forum",
  "mediamill": "Multimedia/Video",
  "medical": "Text/Reports",
  "ng20": "Text/Web Page",
  "nuswide_BoW": "Multimedia/Image",
  "nuswide_VLAD": "Multimedia/Image",
  "ohsumed": "Text/Reports",
  "proteins_humans": "Bioinformatics",
  "proteins_plants": "Bioinformatics",
  "proteins_virus": "Bioinformatics",
  "rcv1sub1": "Text/Web Page",
  "rcv1sub2": "Text/Web Page",
  "rcv1sub3": "Text/Web Page",
  "rcv1sub4": "Text/Web Page",
  "rcv1sub5": "Text/Web Page",
  "reutersk500": "Text/Web Page",
  "scene": "Multimedia/Image",
  "stackex_chemistry": "Text/Web Page",
  "stackex_chess": "Text/Web Page",
  "stackex_coffee": "Text/Web Page",
  "stackex_cs": "Text/Web Page",
  "stackex_philosophy": "Text/Web Page",
  "tmc2007": "Text/Reports",
  "tmc2007_500": "Text/Reports",
  "twitterEmotions": "Text/Short texts",
  "yahoo_arts": "Text/Web Page",
  "yahoo_business": "Text/Web Page",
  "yahoo_computer": "Text/Web Page",
  "yahoo_education": "Text/Web Page",
  "yahoo_entertainment": "Text/Web Page",
  "yahoo_health": "Text/Web Page",
  "yahoo_recreation": "Text/Web Page",
  "yahoo_reference": "Text/Web Page",
  "yahoo_science": "Text/Web Page",
  "yahoo_social": "Text/Web Page",
  "yahoo_society": "Text/Web Page",
  "yeast": "Bioinformatics"
}

export let unit_dataset_list = {
  "text document": ["3sources_bbc1000", "3sources_guardian1000", "3sources_intern3000", "3sources_reuters1000", "Arabic1000", "Arabic200", "Arabic2000", "Arabic3000", "Arabic4000", "Arabic500", "bibtex", "bookmarks", "delicious", "enron", "eurlexdc", "eurlexev", "eurloexsm", "imdb", "langlog", "medical", "ng20", "ohsumed", "rcv1sub1", "rcv1sub2", "rcv1sub3", "rcv1sub4", "rcv1sub5", "reutersk500", "Slashdot", "stackex_chemistry", "stackex_chess", "stackex_coffee", "stackex_cs", "stackex_philosophy", "tmc2007_500", "tmc2007", "yahoo_arts", "yahoo_business", "yahoo_computer", "yahoo_education", "yahoo_entertainment", "yahoo_health", "yahoo_recreation", "yahoo_reference", "yahoo_science", "yahoo_social", "yahoo_society", "Yelp"],
  "image": ["corel16k001", "corel16k002", "corel16k003", "corel16k004", "corel16k005", "corel16k006", "corel16k007", "corel16k008", "corel16k009", "corel16k010", "corel5k", "Image", "nuswide_BoW", "nuswide_VLAD", "scene"],
  "patient information": ["ABPM", "CHD_49"],
  "audio recording": ["birds", "cal500", "emotions"],
  "protein": ["EukaryoteGO", "EukaryotePseAAC", "GnegativeGO", "GnegativePseACC", "GpositiveGO", "GpositivePseAAC", "HumanGO", "HumanPseAAC", "yeast", "PlantGO", "PlantPseAAC", "proteins_humans", "proteins_plants", "proteins_virus", "Virus_PseAAC", "VirusGO"],
  "water samples": ["Water_quality"],
  "questionnaire response": ["foodtruck"],
  "video recording": ["mediamill"],
  "short text documents": ["twitterEmotions"]
}

export let domain_dataset_list = {
  "Text": ["3sources_bbc1000", "3sources_guardian1000", "3sources_intern3000", "3sources_reuters1000", "Arabic1000", "Arabic200", "Arabic2000", "Arabic3000", "Arabic4000", "Arabic500", "delicious", "rcv1sub1", "rcv1sub2", "rcv1sub3", "rcv1sub4", "rcv1sub5", "reutersk500", "ng20", "Slashdot", "bibtex", "bookmarks", "stackex_chemistry", "stackex_chess", "stackex_coffee", "stackex_cs", "stackex_philosophy", "yahoo_arts", "yahoo_business", "yahoo_computer", "yahoo_education", "yahoo_entertainment", "yahoo_health", "yahoo_recreation", "yahoo_reference", "yahoo_science", "yahoo_social", "yahoo_society", "medical", "ohsumed", "foodtruck", "Yelp", "tmc2007", "tmc2007_500", "eurlexdc", "eurlexev", "eurloexsm", "imdb", "langlog", "enron", "twitterEmotions"],
  "Text/Web Page": ["3sources_bbc1000", "3sources_guardian1000", "3sources_intern3000", "3sources_reuters1000", "Arabic1000", "Arabic200", "Arabic2000", "Arabic3000", "Arabic4000", "Arabic500", "delicious", "rcv1sub1", "rcv1sub2", "rcv1sub3", "rcv1sub4", "rcv1sub5", "reutersk500", "ng20", "Slashdot", "bibtex", "bookmarks", "stackex_chemistry", "stackex_chess", "stackex_coffee", "stackex_cs", "stackex_philosophy", "yahoo_arts", "yahoo_business", "yahoo_computer", "yahoo_education", "yahoo_entertainment", "yahoo_health", "yahoo_recreation", "yahoo_reference", "yahoo_science", "yahoo_social", "yahoo_society"],
  "Medical": ["ABPM", "CHD_49"],
  "Multimedia": ["Image", "scene", "nuswide_BoW", "nuswide_VLAD", "corel16k001", "corel16k002", "corel16k003", "corel16k004", "corel16k005", "corel16k006", "corel16k007", "corel16k008", "corel16k009", "corel16k010", "corel5k", "cal500", "emotions", "birds", "mediamill"],
  "Bioinformatics": ["EukaryoteGO", "EukaryotePseAAC", "GnegativeGO", "GnegativePseACC", "GpositiveGO", "GpositivePseAAC", "HumanGO", "HumanPseAAC", "yeast", "proteins_humans", "proteins_plants", "proteins_virus", "genbase", "VirusGO", "Virus_PseAAC", "PlantGO", "PlantPseAAC"],
  "Multimedia/Image": ["Image", "scene", "nuswide_BoW", "nuswide_VLAD", "corel16k001", "corel16k002", "corel16k003", "corel16k004", "corel16k005", "corel16k006", "corel16k007", "corel16k008", "corel16k009", "corel16k010", "corel5k"],
  "Text/Reports": ["medical", "ohsumed", "foodtruck", "Yelp", "tmc2007", "tmc2007_500"],
  "Multimedia/Music": ["cal500", "emotions", "birds"],
  "Text/Legislation": ["eurlexdc", "eurlexev", "eurloexsm"],
  "Text/Forum": ["imdb", "langlog"],
  "Chemistry": ["Water_quality"],
  "Text/Email": ["enron"],
  "Multimedia/Video": ["mediamill"],
  "Text/Short texts": ["twitterEmotions"]
}


export let metaFeaturesMLC = [
  "DefaultAccuracy", "TotalDistinctClasses", "UnseenInTrain", "RatioTrainToPower", "RatioTestToPower",
  "RatioTotalToPower", "RatioUnseenToTest", "Attributes", "Distinct labelsets", "Instances", "Labels",
  "LxIxF", "Ratio of number of instances to the number of attributes", "Cardinality", "Density", "Maximal entropy of labels",
  "Mean of entropies of labels", "Minimal entropy of labels", "Standard deviation of label cardinality",
  "CVIR inter class", "Kurtosis cardinality", "Max IR inter class", "Max IR intra class", "Max IR per labelset",
  "Mean of IR inter class", "Mean of IR intra class", "Mean of IR per labelset", "Mean of standard deviation of IR intra class",
  "Proportion of maxim label combination (PMax)", "Proportion of unique label combination (PUniq)", "Skewness cardinality",
  "Average examples per labelset", "Bound", "Diversity", "Number of labelsets up to 10 examples", "Number of labelsets up to 2 examples",
  "Number of labelsets up to 50 examples", "Number of labelsets up to 5 examples", "Mean examples per labelset",
  "Number of unconditionally dependent label pairs by chi-square test", "Proportion of distinct labelsets",
  "Ratio of number of labelsets up to 10 examples", "Ratio of number of labelsets up to 2 examples",
  "Ratio of number of labelsets up to 50 examples", "Ratio of number of labelsets up to 5 examples",
  "Ratio of unconditionally dependent label pairs by chi-square test", "SCUMBLE", "Standard deviation of examples per labelset",
  "Number of unique labelsets", "Average gain ratio", "Number of binary attributes", "Mean of entropies of nominal attributes",
  "Mean of kurtosis", "Mean of mean of numeric attributes", "Mean of skewness of numeric attributes",
  "Mean of standard deviation of numeric attributes", "Number of nominal attributes", "Number of numeric attributes",
  "Proportion of binary attributes", "Proportion of nominal attributes", "Proportion of numeric attributes",
  "Proportion of numeric attributes with outliers",
  'Average absolute correlation between numeric attributes'
]

export let exampleData = [{ "description": "Yahoo is a multi-label dataset from the text domain. The text is from Web pages linked from the yahoo.com domain. The features are given in BoW format. The labels represent different subcategories relevant for the topic. There are 11 categories for this collection including: arts, buisiness, computer, education, entertainment, health, recreation, reference, science, social and society.", "name": "yahoo_health", "creator": "Naonori Ueda,Kazumi Saito", "keywords": "Multi-label classification", "license": "na", "domain": "Text/Web Page" }, { "creator": "Barnard Kobus,Jordan Michael", "description": "Corel16k010 is a dataset from the multimedia domain. The samples represent Corel images. Each image is segmented using the Normalized Cuts method. Each image is represented with the 8 largest segments. The segments are then clustered into regions and described with 40 features each. The features represent visual properties such as size, position, color, texture and shape. The features represent whether the region is present or not in a particular image. The labels are word description of the region. ", "keywords": "Multi-label classification", "name": "corel16k010", "license": "na", "domain": "Multimedia/Image" }, { "name": "3_sources_Reuters", "description": "3_sources is a collection of 4 multi-label datasets. It is collected from 3 news sources: BBC, Reuters and The Guardian. In total 948 news articles are covering 416 news stories. Some of the stories report on the same issues. It is a dataset primarily constructed for the problem of multi-view learning. The feature preprocessing includes stemming using Porter algorithm, stop-words removal and low term frequency filtering (count < 3).Each story is annotated with one or more of the six topical labels: business, entertainment, health, politics, sport, technology.", "keywords": "multi-label classification", "creator": "Derek Greene,Padraig Cunningham", "license": "na", "domain": "Text/Web Page" }, { "keywords": "multi-label classification", "description": "3_sources is a collection of 4 multi-label datasets. It is collected from 3 news sources: BBC, Reuteres and The Gurdian. In total there are 948 news articles covering 416 news stories. Some of the stories report on same issues. It is a dataset primarly constriucted for the problem of multi-view learning. The feature preprocessign includesstemming using Porter algorithm, stop-words removal and low term frequency filtering (count <3 ).Each story is annotated with one or more of the six topical labels: business, entertainment, health, politics, sport, technology. ", "creator": "Derek Greene,Padraig Cunningham", "name": "3_sources-bbc1000", "license": "na", "domain": "Text/Web Page" }, { "name": "Slashdot", "keywords": "Multi-label classification", "description": "Slashdot is a dataset that belong to text domain. It consists of BoW representation of articles obtained from the website $slashdot.org$. The labels represent different subject categories such as hardware, mobile, news, interviews, games etc.", "creator": "\tJesse Read,Eibe Frank", "license": "na", "domain": "Text/Web Page" }, { "keywords": "Multi-label classification", "description": "Corel16k006 is a dataset from the multimedia domain. The samples represent Corel images. Each image is segmented using the Normalized Cuts method. Each image is represented with the 8 largest segments. The segments are then clustered into regions and described with 40 features each. The features represent visual properties such as size, position, color, texture and shape. The features represent whether the region is present or not in a particular image. The labels are word description of the region. ", "creator": "Barnard Kobus,Jordan Michael", "name": "corel16k006", "license": "na", "domain": "Multimedia/Image" }, { "description": "Yahoo is a multi-label dataset from the text domain. The text is from Web pages linked from the yahoo.com domain. The features are given in BoW format. The labels represent different subcategories relevant for the topic. There are 11 categories for this collection including: arts, buisiness, computer, education, entertainment, health, recreation, reference, science, social and society.", "name": "yahoo_arts", "creator": "Naonori Ueda,Kazumi Saito", "keywords": "Multi-label classification", "license": "na", "domain": "Text/Web Page" }, { "description": "HumanPseAAC is a dataset from the area of bioinformatics.  It describes the task of predicting sub-cellular locations of proteins in organism according to their sequences. However, compared to GO datasets it represents the protein samples using pseudo amino acid composition including 20 amino-acid, 20 pseudo-amino acid and 400 dipeptide components. The labels are the subcellular locations where a protein may appear. These numbers are different depending on the organism at interest.", "name": "HumanPseAAC", "keywords": "Multi-label classification,Dimensionality reduction,Feature extraction,Principal component analysis,Hilbert\u2013Schmidt independence criterion,Eigenvalue problem", "creator": "Jianhua Xu,Chengyu Sun", "license": "na", "domain": "Bioinformatics" }, { "description": "Yahoo is a multi-label dataset from the text domain. The text is from Web pages linked from the yahoo.com domain. The features are given in BoW format. The labels represent different subcategories relevant for the topic. There are 11 categories for this collection including: arts, buisiness, computer, education, entertainment, health, recreation, reference, science, social and society.", "name": "yahoo_education", "creator": "Naonori Ueda,Kazumi Saito", "keywords": "Multi-label classification", "license": "na", "domain": "Text/Web Page" }, { "creator": "Jianhua Xu,Chengyu Sun", "description": "PlantGO dataset is a dataset from the area of bioinformatics. It describes the task of predicting sub-cellular locations of proteins in different organisms according to their protein sequences. The software \"BLAST\" (Basic local alignment search tool) is applied to each protein sequence from the Swiss-Prot database. The homologous proteins that have great pairwise sequence identity are collected into sets with accession numbers. Each of those accession numbers is matched with the Gene Ontology (GO) database. Then a binary feature vector is constructed such that if GO number is present the element in the vector representing the protein has the value of 1, otherwise 0. The labels are the sub-cellular locations where a protein may appear. These numbers are different depending on the organism at interest.", "name": "PlantGO", "keywords": "Multi-label classification,Dimensionality reduction,Feature extraction,Principal component analysis,Hilbert\u2013Schmidt independence criterion,Eigenvalue problem", "license": "na", "domain": "Bioinformatics" }, { "description": "Yelp} is dataset from the text domain. It is concerned with the classification of reviews from customers for restaurants into relevant categories. There are two groups of features, star ratings (represented by binary variables) and textual features consisting of unigrams, bigrams and trigrams. The textual features are extracted in such a way that after downcasing all the words and removing special characters the unigrams, bigrams and trigrams are extracted and their frequency among reviews is recorded. Only the ones that have their frequency above the threshold of 300 are preserved. The labels represent the abstractions the review refers to. The meaning of the label-sets is a multiple of Food, Service, Ambiance, Deals/Discounts, Worthiness.", "keywords": "Multi-label classification", "creator": "Hitesh Sajnani,\tCristina Videira Lopes", "name": "Yelp", "license": "na", "domain": "Text/Reports" }, { "name": "foodtruck", "creator": "Adriano Rivolli,Andre de Carvalho", "keywords": "Food truck recommendation,Recommendation system,Multilabel classification,Multi-label dataset", "description": "Foodtruck is a dataset obtained from a survey conducted with 400 subjects. It represents the personal preferences of the people when ordering food from food trucks.  The attributes represent objective questions about users' profile and their habits and preferences related to food trucks. To use the nominal features they are encoded as one hot vector. Some examples of the features are hygiene, taste, expenses, day period of preference, takeout option, gender, age group etc. The labels are the 12 food types offered: Arabic, fitness, Brazilian, Japanese, gourmet, Mexican, Chinese, healthy, snacks, street, Italian and sweets desserts.", "license": "na", "domain": "Text/Reports" }, { "creator": "Andre Elisseeff a,Jason Weston", "description": "Yeast is a dataset from the domain of biology. The data represent micro-array expressions and phylogeny profiles of genes. The labels can be multiple of the following functional groups: metabolism, energy, transcription, protein synthesis, protein destination, cell growth, transport facilitation, cell transport, cellular biogenesis, ionic homeostasis, cellular organization, transportable elements, cell death and ageing and cell communication. So, the task is to predict the function of a gene using its micro-array expression.", "keywords": "Multi-label classification", "name": "yeast", "license": "na", "domain": "Bioinformatics" }, { "name": "imdb", "creator": "Jesse Read,Eibe Frank", "keywords": "Multi-label classification", "description": "IMDB dataset is a multi-label dataset derived from a freely plot descriptions of movies. The labels represent the different geners a movie can be assigned to.The features are BoW representation of the plot descriptions. ", "license": "na", "domain": "Text/Forum" }, { "description": "Mediamill dataset for generic video indexing, which was extracted tom the TRECVID 2005/2006 benchmark. It belongs to the multimedia domain.The training dataset contains 85 hours of international broadcast news data categorized into 101 labels and each video instance is represented as a 120-dimensional feature vector of numeric features.", "creator": "Cees G. M. Snoek,Jan-Mark Geusebroek", "keywords": "Multi-label classification", "name": "mediamill", "license": "na", "domain": "Multimedia/Video" }, { "creator": "Throsten Joachims", "name": "ohsumed", "keywords": "Support Vector Machine,Radial Basic Function,Text Categorization,Irrelevant Feature,Linear Threshold Function", "description": "Ohsumed  is a dataset from text domain. It is a subset from the MEDLINE database, which is a bibliographic database of peer-reviews of medical literature. The features are BoW representation of the words appearing in the reports. The labels represent 23 medical categories of cardiovascular disease. ", "license": "na", "domain": "Text/Reports" }, { "name": "VirusGO", "description": "GnegativeGO dataset is a dataset from the area of bioinformatics. It describes the task of predicting sub-cellular locations of proteins in different organisms according to their protein sequences. The software \"BLAST\" (Basic local alignment search tool) is applied to each protein sequence from the Swiss-Prot database. The homologous proteins that have great pairwise sequence identity are collected into sets with accession numbers. Each of those accession numbers is matched with the Gene Ontology (GO) database. Then a binary feature vector is constructed such that if GO number is present the element in the vector representing the protein has the value of 1, otherwise 0. The labels are the sub-cellular locations where a protein may appear. These numbers are different depending on the organism at interest.", "creator": "Jianhua Xu,Chengyu Sun", "keywords": "Multi-label classification,Dimensionality reduction,Feature extraction,Principal component analysis,Hilbert\u2013Schmidt independence criterion,Eigenvalue problem", "license": "na", "domain": "Bioinformatics" }, { "description": "Yahoo is a multi-label dataset from the text domain. The text is from Web pages linked from the yahoo.com domain. The features are given in BoW format. The labels represent different subcategories relevant for the topic. There are 11 categories for this collection including: arts, buisiness, computer, education, entertainment, health, recreation, reference, science, social and society.", "name": "yahoo_social", "creator": "Naonori Ueda,Kazumi Saito", "keywords": "Multi-label classification", "license": "na", "domain": "Text/Web Page" }, { "creator": "Derek Greene,Padraig Cunningham", "keywords": "multi-label classification", "name": "3_sources-gurdian1000", "description": "3_sources is a collection of 4 multi-label datasets. It is collected from 3 news sources: BBC, Reuteres and The Gurdian. In total there are 948 news articles covering 416 news stories. Some of the stories report on same issues. It is a dataset primarly constriucted for the problem of multi-view learning. The feature preprocessign includesstemming using Porter algorithm, stop-words removal and low term frequency filtering (count <3 ).Each story is annotated with one or more of the six topical labels: business, entertainment, health, politics, sport, technology. ", "license": "na", "domain": "Text/Web Page" }, { "keywords": "Multi-label classification", "creator": "Barnard Kobus,Jordan Michael", "name": "corel16k007", "description": "Corel16k007 is a dataset from the multimedia domain. The samples represent Corel images. Each image is segmented using the Normalized Cuts method. Each image is represented with the 8 largest segments. The segments are then clustered into regions and described with 40 features each. The features represent visual properties such as size, position, color, texture and shape. The features represent whether the region is present or not in a particular image. The labels are word description of the region. ", "license": "na", "domain": "Multimedia/Image" }, { "keywords": "Coronary Heart Disease,Traditional Chinese Medicine,Test Instance,Forecast Accuracy,Forecast Result", "name": "CHD_49", "description": "CHD is a dataset from the medical domain. It describes the problem of diagnosing coronary heart disease via traditional Chinese medicine approaches. The features represent the presence or absence of different symptoms accessed via feelings of cold or warm, sweating, head, body, chest, urine etc. The labels represent the 6 commonly-used patterns, including deficiency of heart qi syndrome, deficiency of heart yang syndrome, deficiency of heart yin syndrome, qi stagnation syndrome, turbid phlegm syndrome, and blood stasis syndrome.", "creator": "Guo-Ping Liu,Yi-Qin Wang", "license": "na", "domain": "Medical" }, { "name": "stackex_chemistry", "description": "Stackex chemistry is a dataset that originate from one of the 6 stackex different forums. In this study the forums of computer science, chess and philosophy are used. The features are given in term-frequency of the words per forum post. These datasets belong to text domain. The labels represent the different topics related to the posts.The datasets are independent among different forums.", "creator": "Francisco Charte,Francisco Herrera", "keywords": "Machine Learning,Multi-label classification", "license": "na", "domain": "Text/Web Page" }, { "name": "eurlexsm", "keywords": "Multi-label classification", "creator": "Eneldo Loza Menc\u00eda,Johannes F\u00fcrnkranz", "description": "EurLex-sm dataset is a multi-label dataset derived from a freely accessibly repositroy for Eurpoean Union law texts. It includes 19596 documents related to secondary lawand international agreements. Regarding the legal form the acts are moslty decisions, regulations, directives and agreements. Each of the document is assigned with several EUROVOC tags. The feature construction and preprocessing is done as follows: the text is extracted from the HTML documents, excluding HTML tags, bibliograpghic notes or other additional information. The text is thantokenized into lower case, stop words are excluded and the porter stemmer algortihm is used. The words are projeted into the vector space model using TF-IDF term weighting. The first 5000 features are selected to reduce the memory requirments. ", "license": "na", "domain": "Text/Legislation" }, { "keywords": "Machine Learning,Classification System,Categorization,Text Processing", "description": "Arabic200 is a dataset obtained from Russia Today in Arabic news portal. It consists of news articles distributed in 40 categories. The features are numeric. There are multiple variants of the dataset available with 200, 500, 1000, 2000, 3000, 4000 features. The variant with 200 features is used in the experiments. ", "name": "Arabic200", "creator": "Bassam Al-Salemi,Shahrul Azman Mohd Noah", "license": "https://creativecommons.org/licenses/by/4.0/", "domain": "Text/Web Page" }, { "description": "Birds is a dataset representing the problem of bird species classification from acoustic recordings. In one recording multiple species may appear. After obtaining the raw audio signals, the signals are filtered and segmented. From each of the segments, various features from time and frequency domain are extracted. The labels represent if a type of bird is present in the particular instance. It belongs to the multimedia domain in the subcategory audio.", "name": "birds", "keywords": "Multi-label classification", "creator": "Forrest Briggs,Xiaoli Z. Fern", "license": "na", "domain": "Multimedia/Music" }, { "description": "3_sources is a collection of 4 multi-label datasets. It is collected from 3 news sources: BBC, Reuteres and The Gurdian. In total there are 948 news articles covering 416 news stories. Some of the stories report on same issues. It is a dataset primarly constriucted for the problem of multi-view learning. The feature preprocessign includesstemming using Porter algorithm, stop-words removal and low term frequency filtering (count <3 ).Each story is annotated with one or more of the six topical labels: business, entertainment, health, politics, sport, technology. ", "keywords": "multi-label classification", "name": "3_sources-intern3000", "creator": "Derek Greene,Padraig Cunningham", "license": "na", "domain": "Text/Web Page" }, { "name": "nuswide_vlad", "description": "It differs from nuswide_BoW approach in the way how the local features calculated from the images are calculated. Instead of using the BoW representation the VLAD representation that encodes higher-order statistics, compared to BoW, of the distribution of features to visual words. The preprocessing procedure further involves power and L2 normalization as a manual way of preprocessing the images. The preprocessing procedure generates 128 features and there are 81 labels.", "keywords": "Multi-label classification,Image retrieval,indexing,image classification", "creator": "Grigorios Tsoumakas,Ioannis Vlahavas", "license": "na", "domain": "Multimedia/Image" }, { "description": "Stackex cs is a dataset that originate from one of the 6 stackex different forums. In this study the forums of computer science, chess and philosophy are used. The features are given in term-frequency of the words per forum post. These datasets belong to text domain. The labels represent the different topics related to the posts.The datasets are independent among different forums.", "creator": "Francisco Charte,Francisco Herrera", "name": "stackexs_cs", "keywords": "Machine Learning,Multi-label classification", "license": "na", "domain": "Text/Web Page" }, { "keywords": "multi-label classification,emotion intensity,valence,arousal,dominance,basic emotions,crowdsourcing,sentiment analysis", "description": "Twitter emotions dataset is a dataset of tweets labeled with 1-11 relevant emotions. The emotions are generated using a BWS (Best-worst scaling) voting schema. The meaning of the labels are anger anticipation, disgust, fear, joy, love, optimism, pessimism, sadness, surprise, and trust. Furthermore, different. The features are obtained with BoW representation from the presence and absence of the different words across tweets.", "creator": "Mohammad Saif,Kiritchenko Svetlana", "name": "twitter_emotions", "license": "na", "domain": "Text/Short texts" }, { "keywords": "Multi-label classification,Dimensionality reduction,Feature extraction,Principal component analysis,Hilbert\u2013Schmidt independence criterion,Eigenvalue problem", "creator": "Jianhua Xu,Chengyu Sun", "description": "GnegativeGO dataset is a dataset from the area of bioinformatics. It describes the task of predicting sub-cellular locations of proteins in different organisms according to their protein sequences. The software \"BLAST\" (Basic local alignment search tool) is applied to each protein sequence from the Swiss-Prot database. The homologous proteins that have great pairwise sequence identity are collected into sets with accession numbers. Each of those accession numbers is matched with the Gene Ontology (GO) database. Then a binary feature vector is constructed such that if GO number is present the element in the vector representing the protein has the value of 1, otherwise 0. The labels are the sub-cellular locations where a protein may appear. These numbers are different depending on the organism at interest.", "name": "GnegativeGO", "license": "na", "domain": "Bioinformatics" }, { "creator": "Bassam Al-Salemi,Shahrul Azman Mohd Noah", "description": "Arabic200 is a dataset obtained from Russia Today in Arabic news portal. It consists of news articles distributed in 40 categories. The features are numeric. There are multiple variants of the dataset available with 200, 500, 1000, 2000, 3000, 4000 features. The variant with 200 features is used in the experiments. ", "name": "Arabic4000", "keywords": "Machine Learning,Classification System,Categorization,Text Processing", "license": "https://creativecommons.org/licenses/by/4.0/", "domain": "Text/Web Page" }, { "description": "Cal 500 is a dataset from the multimedia domain, from the subcategory of audio. Each feature is calculated by analyzing a short-time series of the audio signal using various time-series generated features from the audio signal, obtained by human annotators. The targets represent various aspects of music composition such as the emotional level of the song, the music genre, the instruments present in the recording etc.", "name": "cal500", "creator": "Douglas Turnbull,Gert Lanckriet", "keywords": "Audio annotation and retrieval,music information retrieval,semantic music analysis", "license": "na", "domain": "Multimedia/Music" }, { "description": "Water Quality is dataset containing descriptions about the biological properties of a river. The features represent the different concentration of chemical components, such as biological oxygen demand, electrical conductivity, chemical oxygen demand, concentrations of different elements and compounds, water temperature and total hardness. The labels are represented by 14 taxa present at the sampling sites and their density. This dataset belongs to the domain of chemistry.", "creator": "Hendrik Blockeel,Saso Dzeroski", "name": "Water_quality", "keywords": "Chemical Oxygen Demand,Biological Oxygen Demand,River Water Quality,Inductive Logic Programming,Inductive Logic Programming System", "license": "na", "domain": "Chemistry" }, { "creator": "Jianhua Xu,Chengyu Sun", "keywords": "Multi-label classification,Dimensionality reduction,Feature extraction,Principal component analysis,Hilbert\u2013Schmidt independence criterion,Eigenvalue problem", "description": "VirusPseAAC is a dataset from the area of bioinformatics.  It describes the task of predicting sub-cellular locations of proteins in organism according to their sequences. However, compared to GO datasets it represents the protein samples using pseudo amino acid composition including 20 amino-acid, 20 pseudo-amino acid and 400 dipeptide components. The labels are the subcellular locations where a protein may appear. These numbers are different depending on the organism at interest.", "name": "VirusPseAAC", "license": "na", "domain": "Bioinformatics" }, { "description": "GnegativeGO dataset is a dataset from the area of bioinformatics. It describes the task of predicting sub-cellular locations of proteins in different organisms according to their protein sequences. The software \"BLAST\" (Basic local alignment search tool) is applied to each protein sequence from the Swiss-Prot database. The homologous proteins that have great pairwise sequence identity are collected into sets with accession numbers. Each of those accession numbers is matched with the Gene Ontology (GO) database. Then a binary feature vector is constructed such that if GO number is present the element in the vector representing the protein has the value of 1, otherwise 0. The labels are the sub-cellular locations where a protein may appear. These numbers are different depending on the organism at interest.", "keywords": "Multi-label classification,Dimensionality reduction,Feature extraction,Principal component analysis,Hilbert\u2013Schmidt independence criterion,Eigenvalue problem", "creator": "Jianhua Xu,Chengyu Sun", "name": "GpositiveGO", "license": "na", "domain": "Bioinformatics" }, { "creator": "David D. Lewis,Fan Li", "description": "RCV1 is a multi-label dataset from the text domain. The features are given in TD-IDF weighthin schema. The output labels can be organized into hierarchy. There are 5 versions of this dataset.", "keywords": "Multi-label classification", "name": "rcv1sub1", "license": "na", "domain": "Text/Web Page" }, { "name": "genbase", "description": "Genbase is a dataset that contains protein sequences and its functional family labels. Since a protein sequence can have multiple functions the problem can be defined as a MLC task. Each protein sequence is mapped to an attribute vector. Since each protein sequence contains some motifs thus it can be represented as a set of 1's and 0's depending on the presence or absence of the motif in the sequence. The labels are grouped in the 10 most common families.  The labels are the classes: oxidoreductases, isomerases, cytokines and growth factors, structural proteins, receptors, DNA or RNA associated proteins, transferals, protein secretion and chaperoned, hydrolysis. GenMiner is used as a tool to prepare the data. ", "keywords": "Classification Algorithm,Weight Vote,Sequential Minimal Optimization,Classifier Selection,Protein Classification", "creator": "Diplaris Sotiris,Ioannis Vlahavas", "license": "na", "domain": "Bioinformatics" }, { "name": "Eukaryote_PSEACC", "description": "Eukaryote_PSEACC is a dataset from the area of bioinformatics.  It describes the task of predicting subcellular locations of proteins in organism according to their sequences. However, compared to GO datasets it represents the protein samples using a pseudo amino acid composition including 20 amino-acid, 20 pseudo-amino acid and 400 dipeptide components. The labels are the subcellular locations where a protein may appear. These numbers are different depending on the organism at interest.", "keywords": "Multi-label classification,Dimensionality reduction,Feature extraction,Principal component analysis,Hilbert\u2013Schmidt independence criterion,Eigenvalue problem", "creator": "Jianhua Xu,Chengyu Sun", "license": "na", "domain": "Bioinformatics" }, { "name": "bibtex", "keywords": "Multi-label classification", "creator": "Ioannis Katakis,Ioannis Vlahavas", "description": "Bibtex is a dataset from the text domain. It emerges from the social bookmarking and publication-sharing system Bibsonomy. The data is stored and organized in BibTeX entries. The labels represent the different tags a user can assign to their BibTeX submission to the system.", "license": "na", "domain": "Text/Web Page" }, { "description": "Corel16k001 is a dataset from the multimedia domain. The samples represent Corel images. Each image is segmented using the Normalized Cuts method. Each image is represented with the 8 largest segments. The segments are then clustered into regions and described with 40 features each. The features represent visual properties such as size, position, color, texture and shape. The features represent whether the region is present or not in a particular image. The labels are word description of the region. ", "creator": "Barnard Kobus,Jordan Michael", "name": "corel16k001", "keywords": "Multi-label classification", "license": "na", "domain": "Multimedia/Image" }, { "keywords": "Multi-label classification,Dimensionality reduction,Feature extraction,Principal component analysis,Hilbert\u2013Schmidt independence criterion,Eigenvalue problem", "description": "HumanGO dataset is a dataset from the area of bioinformatics. It describes the task of predicting sub-cellular locations of proteins in different organisms according to their protein sequences. The software \"BLAST\" (Basic local alignment search tool) is applied to each protein sequence from the Swiss-Prot database. The homologous proteins that have great pairwise sequence identity are collected into sets with accession numbers. Each of those accession numbers is matched with the Gene Ontology (GO) database. Then a binary feature vector is constructed such that if GO number is present the element in the vector representing the protein has the value of 1, otherwise 0. The labels are the sub-cellular locations where a protein may appear. These numbers are different depending on the organism at interest.", "name": "HumanGO", "creator": "Jianhua Xu,Chengyu Sun", "license": "na", "domain": "Bioinformatics" }, { "creator": "Koby Crammer,Partha Pratim Talukdar", "description": "Medical is a dataset composed of medical records, thus belongs to the group of text domain. The features are BoW representation of the datasets. The labels represent 45 possible tag disease.", "keywords": "Multi-label classification", "name": "medical", "license": "na", "domain": "Text/Reports" }, { "description": "Yahoo is a multi-label dataset from the text domain. The text is from Web pages linked from the yahoo.com domain. The features are given in BoW format. The labels represent different subcategories relevant for the topic. There are 11 categories for this collection including: arts, buisiness, computer, education, entertainment, health, recreation, reference, science, social and society.", "name": "yahoo_business", "creator": "Naonori Ueda,Kazumi Saito", "keywords": "Multi-label classification", "license": "na", "domain": "Text/Web Page" }, { "keywords": "Image understanding,Semantic scene classification,Multi-label training,Multi-label evaluation,Image organization,Cross-training,Jaccard similarity", "description": "scene} is one of the most popular datasets from the multimedia domain, belonging to the subcategory of images. It provides a very intuitive way to depict the aim of MLC. The dataset is about the classification of different scenes on an image. There are a total of 6 labels beach, sunset, fall foliage, field, mountain and urban. The images are described with 294 features derived from LUV space. ", "creator": "Matthew Boutell,Christopher M Brown", "name": "scene", "license": "na", "domain": "Multimedia/Image" }, { "keywords": "Multi-label classification", "description": "EurLex-DC dataset is a multi-label dataset derived from a freely accessibly repositroy for Eurpoean Union law texts. It includes 19596 documents related to secondary lawand international agreements. Regarding the legal form the acts are moslty decisions, regulations, directives and agreements. Each of the document is assigned with several directory codes. The feature construction and preprocessing is done as follows: the text is extracted from the HTML documents, excluding HTML tags, bibliograpghic notes or other additional information. The text is thantokenized into lower case, stop words are excluded and the porter stemmer algortihm is used. The words are projeted into the vector space model using TF-IDF term weighting. The first 5000 features are selected to reduce the memory requirments. ", "creator": "Eneldo Loza Menc\u00eda,Johannes F\u00fcrnkranz", "name": "eurlexdc", "license": "na", "domain": "Text/Legislation" }, { "name": "Tmc2007", "description": "Tmc2007 is a dataset containing Aviation Safety Reporting textual data. The texts are free text reports, obtained by crew members about various events during a flight. The features are given in a BoW form. There are 49060.The labels represent the various events that may occur during the flight.", "keywords": "Data mining,Information analysis,Aerospace testing,Text mining,Functional analysis,Data analysis,Sensor systems,Thermal sensors,Manufacturing processes", "creator": "Ashok K. Srivastava,B. Zane-Ulman", "license": "na", "domain": "Text/Reports" }, { "creator": "Francisco Charte,Francisco Herrera", "description": "Stackex philosophy is a dataset that originate from one of the 6 stackex different forums. In this study the forums of computer science, chess and philosophy are used. The features are given in term-frequency of the words per forum post. These datasets belong to text domain. The labels represent the different topics related to the posts.The datasets are independent among different forums.", "name": "stackex_philosophy", "keywords": "Machine Learning,Multi-label classification", "license": "na", "domain": "Text/Web Page" }, { "name": "nuswide_bow", "description": " The dataset includes (1) 269,648 images and the associated tags from Flickr, with a total of 5,018 unique tags; (2) six types of low-level features extracted from these images, including 64-D color histogram, 144-D color correlogram, 73-D edge direction histogram, 128-D wavelet texture, 225-D block-wise color moments extracted over 5x5 fixed grid partitions, and 500-D bag of words based on SIFT descriptions; and (3) ground-truth for 81 concepts that can be used for evaluation", "keywords": "Multi-label classification", "creator": "Tat-Seng Chua,Yantao Zheng", "license": "na", "domain": "Multimedia/Image" }, { "creator": "David D. Lewis,Fan Li", "description": "RCV1 is a multi-label dataset from the text domain. The features are given in TD-IDF weighthin schema. The output labels can be organized into hierarchy. There are 5 versions of this dataset.", "keywords": "Multi-label classification", "name": "rcv1sub3", "license": "na", "domain": "Text/Web Page" }, { "keywords": "Multi-label classification,Dimensionality reduction,Feature extraction,Principal component analysis,Hilbert\u2013Schmidt independence criterion,Eigenvalue problem", "description": "PlantPseAAC is a dataset from the area of bioinformatics.  It describes the task of predicting sub-cellular locations of proteins in organism according to their sequences. However, compared to GO datasets it represents the protein samples using pseudo amino acid composition including 20 amino-acid, 20 pseudo-amino acid and 400 dipeptide components. The labels are the subcellular locations where a protein may appear. These numbers are different depending on the organism at interest.", "creator": "Jianhua Xu,Chengyu Sun", "name": "PlantPseAAC", "license": "na", "domain": "Bioinformatics" }, { "description": "This is a multi-label datasets consisting of bookmark entries from the Bibsonomy system. The bookmark files contain metadata for bookmark items like the URL of the web page, a description of the web page, etc.The fetures are given in BoW format. The labels represent different tags relevant for a bookmark entry. ", "keywords": "Multi-label classification", "creator": "Grigorios Tsoumakas,Ioannis Vlahavas", "name": "bookmarks", "license": "na", "domain": "Text/Web Page" }, { "description": "Corel16k002 is a dataset from the multimedia domain. The samples represent Corel images. Each image is segmented using the Normalized Cuts method. Each image is represented with the 8 largest segments. The segments are then clustered into regions and described with 40 features each. The features represent visual properties such as size, position, color, texture and shape. The features represent whether the region is present or not in a particular image. The labels are word description of the region. ", "creator": "Barnard Kobus,Jordan Michael", "name": "corel16k002", "keywords": "Multi-label classification", "license": "na", "domain": "Multimedia/Image" }, { "creator": "Hang Zhou,Hong-Bin Shen", "description": "Proteins datasets are set of 3 datasets from the area of bioinformatics. They describe the problem of sub-cellular localization. As input are taken the sequence descriptors of the proteins for  humans, virus, plant. The calculation of the features is done with the \"propy\" library. The library takes as input the protein sequences and uses the default settings of the methods used to extract the features. The features describe structural and physio-chemical properties of the proteins and some of them include amino acid compositions, dipeptide compositions, transition, Moran auto-correlation, distributions, sequence-order-coupling numbers etc.", "name": "proteins_virus", "keywords": "Machine Learning,Multi-label classification", "license": "na", "domain": "Bioinformatics" }, { "name": "proteins_plants", "description": "Proteins datasets are set of 3 datasets from the area of bioinformatics. They describe the problem of sub-cellular localization. As input are taken the sequence descriptors of the proteins for  humans, virus, plant. The calculation of the features is done with the \"propy\" library. The library takes as input the protein sequences and uses the default settings of the methods used to extract the features. The features describe structural and physio-chemical properties of the proteins and some of them include amino acid compositions, dipeptide compositions, transition, Moran auto-correlation, distributions, sequence-order-coupling numbers etc.", "creator": "Hang Zhou,Hong-Bin Shen", "keywords": "Machine Learning,Multi-label classification", "license": "na", "domain": "Bioinformatics" }, { "description": "Yahoo is a multi-label dataset from the text domain. The text is from Web pages linked from the yahoo.com domain. The features are given in BoW format. The labels represent different subcategories relevant for the topic. There are 11 categories for this collection including: arts, buisiness, computer, education, entertainment, health, recreation, reference, science, social and society.", "name": "yahoo_recreation", "creator": "Naonori Ueda,Kazumi Saito", "keywords": "Multi-label classification", "license": "na", "domain": "Text/Web Page" }, { "description": "Corel16k003 is a dataset from the multimedia domain. The samples represent Corel images. Each image is segmented using the Normalized Cuts method. Each image is represented with the 8 largest segments. The segments are then clustered into regions and described with 40 features each. The features represent visual properties such as size, position, color, texture and shape. The features represent whether the region is present or not in a particular image. The labels are word description of the region. ", "creator": "Barnard Kobus,Jordan Michael", "keywords": "Multi-label classification", "name": "corel16k003", "license": "na", "domain": "Multimedia/Image" }, { "name": "Arabic1000", "creator": "Bassam Al-Salemi,Shahrul Azman Mohd Noah", "keywords": "Machine Learning,Classification System,Categorization,Text Processing", "description": "Arabic200 is a dataset obtained from Russia Today in Arabic news portal. It consists of news articles distributed in 40 categories. The features are numeric. There are multiple variants of the dataset available with 200, 500, 1000, 2000, 3000, 4000 features. The variant with 200 features is used in the experiments. ", "license": "https://creativecommons.org/licenses/by/4.0/", "domain": "Text/Web Page" }, { "creator": "Read, Jesse", "description": "Reuters k500 is a dataset originate from Reuters RCV1 corpus. Since the RCV1 corpus posses around 46000 features, applying feature selection technique reduces the number of features to 500. The features are given in tf-idf format.Since the labels in the corpus have a hierarchical structure in order to be used in the MLC setting the hierarchy is flattened.", "keywords": "Multi-label classification", "name": "reutersk500", "license": "na", "domain": "Text/Web Page" }, { "creator": "David D. Lewis,Fan Li", "description": "RCV1 is a multi-label dataset from the text domain. The features are given in TD-IDF weighthin schema. The output labels can be organized into hierarchy. There are 5 versions of this dataset.", "keywords": "Multi-label classification", "name": "rcv1sub2", "license": "na", "domain": "Text/Web Page" }, { "creator": "Bryan Klimt,Yiming Yang", "name": "enron", "description": "Enron is a dataset containing e-mail messages from the Enron corpus. It belongs to the group of text domain. The features are represented in BoW format. The targets represent different topics being considered. For example company strategy, legal advice, humour etc.", "keywords": "Multi-label classification", "license": "na", "domain": "Text/Email" }, { "description": "Yahoo is a multi-label dataset from the text domain. The text is from Web pages linked from the yahoo.com domain. The features are given in BoW format. The labels represent different subcategories relevant for the topic. There are 11 categories for this collection including: arts, buisiness, computer, education, entertainment, health, recreation, reference, science, social and society.", "name": "yahoo_entertainment", "creator": "Naonori Ueda,Kazumi Saito", "keywords": "Multi-label classification", "license": "na", "domain": "Text/Web Page" }, { "description": "Stackex coffee is a dataset that originate from one of the 6 stackex different forums. In this study the forums of computer science, chess and philosophy are used. The features are given in term-frequency of the words per forum post. These datasets belong to text domain. The labels represent the different topics related to the posts.The datasets are independent among different forums.", "name": "stackex_coffee", "creator": "Francisco Charte,Francisco Herrera", "keywords": "Machine Learning,Multi-label classification", "license": "na", "domain": "Text/Web Page" }, { "name": "Eukaryote_GO", "description": "Eukaryote_GO dataset is a dataset from the area of bioinformatics. It describes the task of predicting sub-cellular locations of proteins in different organisms according to their protein sequences. The software \"BLAST\" (Basic local alignment search tool) is applied to each protein sequence from the Swiss-Prot database. The homologous proteins that have great pairwise sequence identity are collected into sets with accession numbers. Each of those accession numbers is matched with the Gene Ontology (GO) database. Then a binary feature vector is constructed such that if GO number is present the element in the vector representing the protein has the value of 1, otherwise 0. The labels are the sub-cellular locations where a protein may appear. These numbers are different depending on the organism at interest.", "keywords": "Multi-label classification,Dimensionality reduction,Feature extraction,Principal component analysis,Hilbert\u2013Schmidt independence criterion,Eigenvalue problem", "creator": "Jianhua Xu,Chengyu Sun", "license": "na", "domain": "Bioinformatics" }, { "name": "stackexs_chess", "keywords": "Machine Learning,Multi-label classification", "description": "Stackex chess is a dataset that originate from one of the 6 stackex different forums. In this study the forums of computer science, chess and philosophy are used. The features are given in term-frequency of the words per forum post. These datasets belong to text domain. The labels represent the different topics related to the posts.The datasets are independent among different forums.", "creator": "Francisco Charte,Francisco Herrera", "license": "na", "domain": "Text/Web Page" }, { "keywords": "Multi-label classification", "creator": "Pinar Duygulu Sahin,David Forsyth", "description": "Corel5k is a dataset from the multimedia domain. The samples represent Corel images. Each image is segmented using the Normalized Cuts method. The segments are then clustered into regions and described with 33 features each. For each image, there are 5-10 regions describing them. The features represent whether the region is present or not in a particular image. The labels are word description of the region. ", "name": "corel5k", "license": "na", "domain": "Multimedia/Image" }, { "creator": "David D. Lewis,Fan Li", "description": "RCV1 is a multi-label dataset from the text domain. The features are given in TD-IDF weighthin schema. The output labels can be organized into hierarchy. There are 5 versions of this dataset.", "keywords": "Multi-label classification", "name": "rcv1sub5", "license": "na", "domain": "Text/Web Page" }, { "description": "Delicious  is a dataset from the text domain. The data is extracted from $del.icio.us$ social bookmarking site on the 1st of April 2007. It contains textual data of web pages alongside with their tags. The words appearing on the pages are given in a BoW representation. The labels represent the different tags that can appear on the bookmarking site.", "creator": "Grigorios Tsoumakas,Ioannis Vlahavas", "name": "delicious", "keywords": "Multi-label classification", "license": "na", "domain": "Text/Web Page" }, { "description": "Ng20 is a dataset containing news data. The features are given in a BoW representation. The labels represent different topics such as politics, cars, religion, space etc.", "creator": "Ken Lang", "name": "ng20", "keywords": "Multi-label classification", "license": "na", "domain": "Text/Web Page" }, { "name": "GnegativePseAAC", "keywords": "Multi-label classification,Dimensionality reduction,Feature extraction,Principal component analysis,Hilbert\u2013Schmidt independence criterion,Eigenvalue problem", "creator": "Jianhua Xu,Chengyu Sun", "description": "GnegativePseAAC is a dataset from the area of bioinformatics.  It describes the task of predicting sub-cellular locations of proteins in organism according to their sequences. However, compared to GO datasets it represents the protein samples using pseudo amino acid composition including 20 amino-acid, 20 pseudo-amino acid and 400 dipeptide components. The labels are the subcellular locations where a protein may appear. These numbers are different depending on the organism at interest.", "license": "na", "domain": "Bioinformatics" }, { "keywords": "Multi-label classification", "name": "corel16k004", "description": "Corel16k004 is a dataset from the multimedia domain. The samples represent Corel images. Each image is segmented using the Normalized Cuts method. Each image is represented with the 8 largest segments. The segments are then clustered into regions and described with 40 features each. The features represent visual properties such as size, position, color, texture and shape. The features represent whether the region is present or not in a particular image. The labels are word description of the region. ", "creator": "Barnard Kobus,Jordan Michael", "license": "na", "domain": "Multimedia/Image" }, { "description": "Arabic200 is a dataset obtained from Russia Today in Arabic news portal. It consists of news articles distributed in 40 categories. The features are numeric. There are multiple variants of the dataset available with 200, 500, 1000, 2000, 3000, 4000 features. The variant with 200 features is used in the experiments. ", "creator": "Bassam Al-Salemi,Shahrul Azman Mohd Noah", "name": "Arabic3000", "keywords": "Machine Learning,Classification System,Categorization,Text Processing", "license": "https://creativecommons.org/licenses/by/4.0/", "domain": "Text/Web Page" }, { "name": "emotions", "description": "Emotions is a dataset from the multimedia domain. It describes the relationship between music and emotions based on the Tellegen-Watson-Clarks model of mood. The obtained sound signals are used to calculate temporal and timber features. The labels represent 6 main emotions a music piece provides: amazed-surprised, happy-pleased, relaxing-calm, quite-still, sad-lonely, and angry-fearful. ", "keywords": "Audio Data,Music Information Retrieval,Audio Sample Musical,Recording Ontology Graph", "creator": "Alicja Wieczorkowska,Zbigniew W. Ras", "license": "na", "domain": "Multimedia/Music" }, { "keywords": "Machine Learning,Multi-label classification", "name": "proteins_humans", "description": "Proteins datasets are set of 3 datasets from the area of bioinformatics. They describe the problem of sub-cellular localization. As input are taken the sequence descriptors of the proteins for  humans, virus, plant. The calculation of the features is done with the \"propy\" library. The library takes as input the protein sequences and uses the default settings of the methods used to extract the features. The features describe structural and physio-chemical properties of the proteins and some of them include amino acid compositions, dipeptide compositions, transition, Moran auto-correlation, distributions, sequence-order-coupling numbers etc.", "creator": "Hang Zhou,Hong-Bin Shen", "license": "na", "domain": "Bioinformatics" }, { "description": "Yahoo is a multi-label dataset from the text domain. The text is from Web pages linked from the yahoo.com domain. The features are given in BoW format. The labels represent different subcategories relevant for the topic. There are 11 categories for this collection including: arts, buisiness, computer, education, entertainment, health, recreation, reference, science, social and society.", "name": "yahoo_computer", "creator": "Naonori Ueda,Kazumi Saito", "keywords": "Multi-label classification", "license": "na", "domain": "Text/Web Page" }, { "description": "Yahoo is a multi-label dataset from the text domain. The text is from Web pages linked from the yahoo.com domain. The features are given in BoW format. The labels represent different subcategories relevant for the topic. There are 11 categories for this collection including: arts, buisiness, computer, education, entertainment, health, recreation, reference, science, social and society.", "name": "yahoo_reference", "creator": "Naonori Ueda,Kazumi Saito", "keywords": "Multi-label classification", "license": "na", "domain": "Text/Web Page" }, { "creator": "Read, Jesse", "name": "lanlog", "keywords": "Multi-label classification", "description": "Longlog  is a dataset from the text domain. It consists of various topics relating to predominantly English language, obtained from Language Log Forum. The dataset is given in BoW format. There are 75 labels representing different aspects for the language, for example, punctuation, humour, errors, administration, negation etc.", "license": "na", "domain": "Text/Forum" }, { "description": "Yahoo is a multi-label dataset from the text domain. The text is from Web pages linked from the yahoo.com domain. The features are given in BoW format. The labels represent different subcategories relevant for the topic. There are 11 categories for this collection including: arts, buisiness, computer, education, entertainment, health, recreation, reference, science, social and society.", "name": "yahoo_society", "creator": "Naonori Ueda,Kazumi Saito", "keywords": "Multi-label classification", "license": "na", "domain": "Text/Web Page" }, { "name": "corel16k008", "keywords": "Multi-label classification", "description": "Corel16k008 is a dataset from the multimedia domain. The samples represent Corel images. Each image is segmented using the Normalized Cuts method. Each image is represented with the 8 largest segments. The segments are then clustered into regions and described with 40 features each. The features represent visual properties such as size, position, color, texture and shape. The features represent whether the region is present or not in a particular image. The labels are word description of the region. ", "creator": "Barnard Kobus,Jordan Michael", "license": "na", "domain": "Multimedia/Image" }, { "name": "eurlexev", "creator": "Eneldo Loza Menc\u00eda,Johannes F\u00fcrnkranz", "keywords": "Multi-label classification", "description": "EurLex-ev dataset is a multi-label dataset derived from a freely accessibly repositroy for Eurpoean Union law texts. It includes 19596 documents related to secondary lawand international agreements. Regarding the legal form the acts are moslty decisions, regulations, directives and agreements. Each of the document is assigned with several EUROVOC tags. The feature construction and preprocessing is done as follows: the text is extracted from the HTML documents, excluding HTML tags, bibliograpghic notes or other additional information. The text is thantokenized into lower case, stop words are excluded and the porter stemmer algortihm is used. The words are projeted into the vector space model using TF-IDF term weighting. The first 5000 features are selected to reduce the memory requirments. ", "license": "na", "domain": "Text/Legislation" }, { "name": "image", "description": "This dataset is composed by 2,000 images. Concretely, each color image is firstly converted to the CIE Luv space, which is a more perceptually uniform color space such that perceived color differences correspond closely to Euclidean distances in this color space. After that, the image is divided into 49 blocks using a 7\u00d77 grid, where in each block the first and second moments (mean and variance) of each band are computed, corresponding to a low-resolution image and to computationally inexpensive texture features respectively. Finally, each image is transformed into a 49\u00d73\u00d72 = 294-dimensional feature vector.", "keywords": "Machine learning,Multi-label learning,Lazy learning,K-nearest neighbor,Functional genomics,Natural scene classification,Text categorization", "creator": "Min-Ling Zhang,Zhi-Hua Zhou", "license": "na", "domain": "Multimedia/Image" }, { "creator": "Barnard Kobus,Jordan Michael", "description": "Corel16k009 is a dataset from the multimedia domain. The samples represent Corel images. Each image is segmented using the Normalized Cuts method. Each image is represented with the 8 largest segments. The segments are then clustered into regions and described with 40 features each. The features represent visual properties such as size, position, color, texture and shape. The features represent whether the region is present or not in a particular image. The labels are word description of the region. ", "name": "corel16k009", "keywords": "Multi-label classification", "license": "na", "domain": "Multimedia/Image" }, { "name": "GpositivePseAAC", "keywords": "Multi-label classification,Dimensionality reduction,Feature extraction,Principal component analysis,Hilbert\u2013Schmidt independence criterion,Eigenvalue problem", "creator": "Jianhua Xu,Chengyu Sun", "description": "GpositivePseAAC is a dataset from the area of bioinformatics.  It describes the task of predicting sub-cellular locations of proteins in organism according to their sequences. However, compared to GO datasets it represents the protein samples using pseudo amino acid composition including 20 amino-acid, 20 pseudo-amino acid and 400 dipeptide components. The labels are the subcellular locations where a protein may appear. These numbers are different depending on the organism at interest.", "license": "na", "domain": "Bioinformatics" }, { "description": "Yahoo is a multi-label dataset from the text domain. The text is from Web pages linked from the yahoo.com domain. The features are given in BoW format. The labels represent different subcategories relevant for the topic. There are 11 categories for this collection including: arts, buisiness, computer, education, entertainment, health, recreation, reference, science, social and society.", "name": "yahoo_science", "creator": "Naonori Ueda,Kazumi Saito", "keywords": "Multi-label classification", "license": "na", "domain": "Text/Web Page" }, { "name": "tmc2007_500", "description": "Tmc2007 500  is a dataset containing Aviation Safety Reporting textual data. The texts are free text reports, obtained by crew members about various events during a flight. The features are given in a BoW form. This version of the dataset has reduced description space from 49060 to 500.The labels represent the various events that may occur during the flight.", "creator": "Ashok K. Srivastava,B. Zane-Ulman", "keywords": "Data mining,Information analysis,Aerospace testing,Text mining,Functional analysis,Data analysis,Sensor systems,Thermal sensors,Manufacturing processes", "license": "na", "domain": "Text/Reports" }, { "creator": "Barnard Kobus,Jordan Michael", "name": "corel16k005", "keywords": "Multi-label classification", "description": "Corel16k005 is a dataset from the multimedia domain. The samples represent Corel images. Each image is segmented using the Normalized Cuts method. Each image is represented with the 8 largest segments. The segments are then clustered into regions and described with 40 features each. The features represent visual properties such as size, position, color, texture and shape. The features represent whether the region is present or not in a particular image. The labels are word description of the region. ", "license": "na", "domain": "Multimedia/Image" }, { "name": "Arabic2000", "description": "Arabic200 is a dataset obtained from Russia Today in Arabic news portal. It consists of news articles distributed in 40 categories. The features are numeric. There are multiple variants of the dataset available with 200, 500, 1000, 2000, 3000, 4000 features. The variant with 200 features is used in the experiments. ", "keywords": "Machine Learning,Classification System,Categorization,Text Processing", "creator": "Bassam Al-Salemi,Shahrul Azman Mohd Noah", "license": "https://creativecommons.org/licenses/by/4.0/", "domain": "Text/Web Page" }, { "description": "Arabic200 is a dataset obtained from Russia Today in Arabic news portal. It consists of news articles distributed in 40 categories. The features are numeric. There are multiple variants of the dataset available with 200, 500, 1000, 2000, 3000, 4000 features. The variant with 200 features is used in the experiments. ", "keywords": "Machine Learning,Classification System,Categorization,Text Processing", "name": "Arabic500", "creator": "Bassam Al-Salemi,Shahrul Azman Mohd Noah", "license": "https://creativecommons.org/licenses/by/4.0/", "domain": "Text/Web Page" }, { "keywords": "Amboulutray Blood Preassure", "description": "ABPM is a dataset with 33 features and 6 labels. The dataset has 270 records of blood pressure measurements from patients in a duration of 24 hours. The features represent general information for the patients as gender, age, weight, height, but also various statistical features obtained from the diastolic and systolic load values. The labels represent the presence and absence of validity, morning surge, blood pressure load, blood pressure variability, pulse pressure and circadian rhythm.", "creator": "Khalida Douibi,Mohammed Amine Chikh", "name": "ABPM", "license": "https://creativecommons.org/licenses/by-nc/3.0/", "domain": "Medical" }, { "creator": "David D. Lewis,Fan Li", "description": "RCV1 is a multi-label dataset from the text domain. The features are given in TD-IDF weighthin schema. The output labels can be organized into hierarchy. There are 5 versions of this dataset.", "keywords": "Multi-label classification", "name": "rcv1sub4", "license": "na", "domain": "Text/Web Page" }]