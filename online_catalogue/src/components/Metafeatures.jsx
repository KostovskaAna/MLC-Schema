import React from 'react';
import { Grid, Typography } from '@mui/material';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import { StyledPaper, StyledPaperTitleTypography, StyledPaperContentTypography, BackgroundGrid } from './theme';
import InfoIcon from '@material-ui/icons/Info';


const Metafeatures = ({ theme }) => {
    // const { theme } = this.props; // Access the theme
    return (
        <React.Fragment >
            <BackgroundGrid container justifyContent="center" alignItems="center" spacing={2}>
                <Grid item xs={12}>
                    <br /> <br /> <br /> <br />
                </Grid>

                <Grid item xs={12} md={10} xl={8}>
                    <Typography style={{ display: 'flex', alignItems: 'center', color: theme.palette.text.primary }}>
                        <InfoIcon style={{ marginRight: '10px' }} />
                        For more insights into the metafeatures, explore further details&nbsp;<a style={{ color: theme.palette.text.primary }} target="_blank" rel="noopener noreferrer" href="https://onlinelibrary.wiley.com/doi/full/10.1002/int.22835">here</a>.
                    </Typography>
                </Grid>

                <Grid item key={33} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Bound </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            It represents the maximum number of labelsets that may exist in the dataset.
                            <BlockMath
                                math={
                                    "Bound(D)=2^{\\mathcal{|L|}}"
                                }
                            ></BlockMath>
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={8} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Attributes </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            This metric indicates the number of attributes or input features <InlineMath math={'|T|'} /> of the dataset.
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={32} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Average examples per labelset </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            This metric is calculated as the average number of instances associated with each labelset. It is defined as:
                            <BlockMath
                                math={
                                    "AL(D) = \\frac{|D|}{DL(D)}"
                                }
                            ></BlockMath>
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={50} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Average gain ratio </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            Average Gain Ratio obtains the average value of Gain Ratio values for all attributes and each label. Being <InlineMath math={'H()'} /> the entropy, the Gain Ratio is defined as:
                            <BlockMath
                                math={
                                    "GainRatio(\\lambda, t) = \\frac{(H(\\lambda)-H(\\lambda|t))}{H(t)}"
                                }
                            ></BlockMath>
                            <BlockMath
                                math={
                                    "AvgGainRatio(D) = \\frac{1}{|\\mathcal{L}|}\\frac{1}{|T|}\\sum_{i=1}^{|L|}\\sum_{j=1}^{|T|}GainRatio(\\lambda_{i}, t_{j})"
                                }
                            ></BlockMath>
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                

                <Grid item key={14} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Cardinality </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            Is defined as the mean number of labels associated for instance.
                            <BlockMath math={'Card(D) = \\frac{1}{|D|}\\sum_{i=1}^{|D|}{|l_i|}'} />
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={20} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> CVIR inter class</StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            It is defined as the coefficient of variation of IR inter-class. Being:
                            <InlineMath math={
                                '\\sigma_{IR_{InterClass}} = \\sqrt{\\frac{1}{|L|}\\sum_{i=1}^{|L|}{\\frac{(IR_{InterClass}(\\lambda_{i})-MeanIR_{InterClass})^2}{|L|-1}}}'
                            } /> the metric is defined as:
                            <BlockMath math={
                                'CVIR_{InterClass}(D) = \\frac{\\sigma_{IR_{InterClass}}}{MeanIR_{InterClass}}'
                            } />
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={1} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> DefaultAccuracy </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            This is the accuracy obtained when using the most frequent labels combination in the training set, without building any classifier.
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={15} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Density </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            Density is defined as cardinality divided by the number of labels. Thus, it relates the mean number of labels associated with each instance with the total number of labels. The density is a good metric to have an idea about the frequency of labels.
                            <BlockMath math={'Dens(D) = \\frac{Card(D)}{|L|}'} />
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={9} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Distinct labelsets </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            It is the number of label combination appearing in the dataset. Each combination can be represented as a binary vector, where the <InlineMath math={'i-th'} /> position is represented with an 1 or a 0 if the <InlineMath math={'i-th'} /> label is present or not. It is also called DistinctLabelsets(D) or <InlineMath math={'DL(D)'} />.
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={34} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5">  Diversity</StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            It represents the percentage of labelsets present in the dataset divided by the number of possible labelsets.
                            <BlockMath
                                math={
                                    "Diversity=\\frac{DL(D)}{Bound(D)}"
                                }
                            ></BlockMath>
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={10} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Instances </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            It indicates the number of instances <InlineMath math={'|D|'} /> of the dataset.
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={21} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Kurtosis cardinality </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            This metric applies the Kurtosis formula to the number of associated labels of each instance. The higher Kurtosis (<InlineMath math={'ku'} />) value, the higher the concentration of values near the mean of the distribution. If <InlineMath math={'ku > 0'} />, values are near to the mean, while if <InlineMath math={'ku < 0'} />  values are distant from the mean. To apply the kurtosis formula we need to calculate the second and the fourth moment of a distribution. We define the second and the fourth moment of the labels as:
                            <BlockMath math={
                                'm_2(D) = \\frac{1}{|D|}\\sum_{i=1}^{|D|}{(|l_{i}|-Card(D))^2}'
                            } />
                            <BlockMath math={
                                'm_4(D) = \\frac{1}{|D|}\\sum_{i=1}^{|D|}{(|l_{i}|-Card(D))^4}'
                            } />
                            The definition of the kurtosis is:
                            <BlockMath math={
                                'g_{ku}(D) = \\frac{m_{4}}{(m_{2}^2)}-3'
                            } />
                            Finally the definition for the Kurtosis cardinality is:
                            <BlockMath math={
                                'Kurtosis(D) = \\frac{(|D|-1)}{(|D|-2)(|D|-3)} \\ ((|D|+1)g_{ku}(D)+6)'
                            } />
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={11} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Labels </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            It indicates the number of labels or output features <InlineMath math={'|L|'} /> of the dataset.
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={12} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> LxIxF </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            Labels X Instances X Features (LxIxF) is a metric proposed useful for measuring the complexity of the dataset regarding to the number of labels, instances and attributes.
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={22} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Max IR inter class </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            This metric returns the maximum value of IR inter-class, which corresponds to the most imbalanced label.
                            <BlockMath math={
                                'MaxIR_{InterClass}{D} = \\argmax{\\lambda \\in \\mathcal{L}}{IR_{InterClass}(\\lambda)}'
                            } />
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={23} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Max IR intra class </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            This metric returns the maximum value of IR intra-class, which corresponds to the IR value of the most imbalanced label.
                            <BlockMath math={
                                'MaxIR_{IntraClass}{D} = \\argmax{\\lambda \\in \\mathcal{L}}{IR_{IntraClass}(\\lambda)}'
                            } />
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={24} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Max IR per labelset </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            This metric returns the maximum value of IR per labelset, which corresponds to the IR value of the most imbalanced labelset.
                            <BlockMath math={
                                'MaxIR_{InterClass}{D} = \\argmax{\\lambda \\in \\mathcal{L}}{IR_{InterClass}(\\lambda)}'
                            } />
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={39} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Mean examples per labelset" </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            This metric is calculated as the average number of instances associated with each labelset. It is defined as:
                            <BlockMath
                                math={
                                    "AL(D) = \\frac{|D|}{DL(D)}"
                                }
                            ></BlockMath>
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>


                <Grid item key={52} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Mean of entropies of nominal attributes </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            It calculates the entropy of each nominal attribute. For that, it is considered that an attribute <InlineMath math={'t^c'} /> has the values <InlineMath math={'t_1^c, t_2^c, \\dots , t_m^c'} />. Thus, <InlineMath math={'|H(t^c) = -\\sum_{i=1}^{m}{p(t_i^c)log(p(t_i^c))}'} /> returns the entropy of a nominal attribute, where <InlineMath math={'t_i^c'} />  is each of the possible values that <InlineMath math={'t'} />  can take. The mean entropy is defined as:

                            <BlockMath
                                math={
                                    "MeanEntropy(T^c)) = \\frac{1}{|T_c|}\\sum_{i=1}{|T_c|}{H(t_i^c)}"
                                }
                            ></BlockMath>
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={25} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Mean of IR inter class </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            The IR (Imbalance Ratio) inter-class measures the degree of imbalance among labels. IR inter-class for a specific label is obtained dividing the number of positive examples of most frequent label by the number of positive examples of the current label. Thus, the mean IR inter-class is defined as the average value for all labels.
                            <BlockMath
                                math={
                                    "IR_{InterClass}(\\lambda) =  \\frac{\\argmax{\\lambda^{'} \\in \\mathcal{L}}{Freq(\\lambda^{'})}}{Freq(\\lambda)}"
                                }

                            />
                            <BlockMath
                                math={
                                    "MeanIR_{InterClass} = \\frac{1}{|L|} \\sum_{i=1}^{|L|}{IR_{InterClass}(\\lambda_{i})}"
                                }

                            />
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={26} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Mean of IR intra class </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            IR intra-class measures the degree of imbalance inside the label. For a specific label, IR intra-class is calculated dividing the number of examples of the majority value of the class by the number of examples of the minority value. Thereby, the mean of IR intra-class is defined as the average value for all the labels. Being
                            <InlineMath
                                math={
                                    'Max(\\lambda) = \\argmax{}\\{Count(\\lambda), |D| - Count(\\lambda)\\}'
                                }
                            />a function returning the number of instances of the majority value of the label, either the number of instances that have associated the label or the number of instances that not have it, and
                            <InlineMath
                                math={
                                    'Min(\\lambda) = \\argmin{}{Count(\\lambda), |D| - Count(\\lambda)}'
                                }
                            /> the number of instances of the minority value.
                            <BlockMath
                                math={
                                    "IR_{intra-class} = \\frac{Max(\\lambda)}{Min(\\lambda)} "
                                }
                            />
                            <BlockMath
                                math={
                                    "MeanIR_{IntraClass} = \\frac{1}{|L|} \\sum_{i=1}^{|L|}{IR_{IntraClass}(\\lambda_{i})}"
                                }
                            />
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={27} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Mean of IR per labelset </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            The IR per labelset is defined in the same way that IR inter-class, but instead of for each label, it is calculated for each labelset. It is calculated dividing the number of instances associated with the most frequent labelset by the number of instances of the current labelset.
                            <BlockMath
                                math={
                                    "IR_{labelset}(\\lambda) = \\frac{\\argmax{\\lambda^{'} \\in DL(D)}{Freq(\\lambda^{'})}}{Freq(\\lambda)}"
                                }
                            />
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={53} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Mean of kurtosis </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            This metric calculates the Kurtosis for each numeric attribute and then, it calculates the average.  <br></br>So, the mean of Kurtosis for numeric attributes <InlineMath math={'T^n'} />  is is defined as:
                            <BlockMath
                                math={
                                    "MeanKurtosis(T^n) =  \\frac{1}{|T^n|}\\sum_{j=1}^{|T^n|}Kurtosis(t_i^n)"
                                }
                            ></BlockMath>
                            The definition of the kurtosis is:
                            <BlockMath
                                math={
                                    'Kurtosis(t^n) = \\frac{(|t^n|-1)}{(|t^n|-2)(|t^n|-3)}((|t^n|+1)g_{ku}(t^n)+6)'
                                }
                            />
                            <BlockMath
                                math={
                                    "m_2(t^n) = \\frac{1}{t^n}\\sum_{i=1}^{|t^n|}{(t^n-Mean(t^n))^2}"
                                }
                            ></BlockMath>
                            <BlockMath
                                math={
                                    "m_4(t^n) = \\frac{1}{t^n}\\sum_{i=1}^{|t^n|}{(t^n-Mean(t^n))^4}"
                                }
                            ></BlockMath>

                            <BlockMath
                                math={
                                    "g_{ku}(t^n) = \\frac{m_{4}}{(m_{2}^2)}-3"
                                }
                            ></BlockMath>

                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={54} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Mean of mean of numeric attributes </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            This metric calculates the mean of means of all numeric attributes. Being <InlineMath math={'Mean(t^{n}) = \\frac{1}{|T^{n}|}\\sum_{j=1}^{t_j^{n}}'} /> <InlineMath math={'t_{j}^{n}'} /> the mean for a numeric attribute, the metric is defined as:
                            <BlockMath
                                math={
                                    "MeanOfMean_{numeric}(D) = \\frac{1}{|T^n|}\\sum_{j=1}^{|T^n|}Mean(t_i^n)"
                                }
                            ></BlockMath>
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={55} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Mean of skewness of numeric attributes </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            It calculates the mean of skewness of numeric attributes. The skewness for numeric attributes is defined as:
                            <BlockMath
                                math={
                                    "Skewness(t^n) = \\frac{(|t^n|)}{(|t^n|-1)(|t^n|-2)}*\\sum_{i=1}^{|t^n|}\\frac{(t^n-Mean(t^n))^3}{\\sigma(t^n)^3}"
                                }
                            ></BlockMath>
                            <BlockMath
                                math={
                                    "\\sigma(t^n)^3 = [\\frac{1}{|t^n|-1}\\sum_{i=1}^{|t^n|}{(t^n-Mean(t^n))^3}]^\\frac{3}{2}"
                                }
                            ></BlockMath>
                            <BlockMath
                                math={
                                    "MeanSkewness(T^n) =  \\frac{1}{|T^n|}\\sum_{j=1}^{|T^n|}Skewness(t_i^n)"
                                }
                            ></BlockMath>
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={56} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5">Mean of standard deviation of numeric attributes </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            This metric calculates the average of standard deviations of all numeric attributes. Being <InlineMath math={'\\sigma(t^n)'} /> the standard deviation of the values of a numeric attribute, the metric is defined as:
                            <BlockMath
                                math={
                                    "MeanOfStd_{numeric}(D) = \\frac{1}{|T^n|}\\sum_{j=1}^{|T^n|}\\sigma(t_i^n)"
                                }
                            ></BlockMath>
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>
























                <Grid item key={2} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> TotalDistinctClasses </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            Number of total distinct classes found in both the training and test sets.
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={3} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> UnseenInTrain </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            The number of label combinations appearing in the test set only.
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={4} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> RatioTrainToPower </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            Ratio of distinct classes found in the training set to the total number of possible label combinations
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={5} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> RatioTestToPower </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            Ratio of distinct classes found in the test to the total number of possible label combinations.
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={6} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> RatioUnseenToTest </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            The ratio of label combinations appearing in the test set only.
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={13} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5">Ratio of number of instances to the number of attributes </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            It calculates the proportion between the number of instances and the number of attributes. It is useful to know the complexity of the dataset. Thus, if the metric value is under 1, it indicates that the number of attributes is greater than the number of instances, while if it is greater than 1, the number of instances is greater than the number of attributes.
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>





                <Grid item key={16} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Minimal, maximal and mean of entropy of labels </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            This metrics returns the minimum, maximum and mean of entropies of labels.  As each label can take 1 and 0 values, the frequency ofthe label is taken as the probability of being 1, and 1 minus the frequency the probability of being 0. Thus, the entropy for a label is defined as:
                            <BlockMath math={'H(\\lambda) = - [Freq(\\lambda)*\\log_{2}{Freq(\\lambda} \\ + (1-Freq(\\lambda))*(\\log_{2}{1-Freq(\\lambda})]'} />
                            The greater the entropy is, the more uniform the distribution of label values is. So, the metrics of minimal, maximal and mean of entropies of labels are defined as:
                            <BlockMath math={'MinEntropyLabels(D) = \\argmin{\\lambda},  \\lambda \\in \\mathcal{L} '} />
                            <BlockMath math={'MaxEntropyLabels(D) = \\argmax{\\lambda},  \\lambda \\in \\mathcal{L}  '} />
                            <BlockMath math={' MeanEntropyLabels(D) =  \\frac{1}{|L|}\\sum_{i=1}^{|L|}{H(l_i)}   '} />
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>



                <Grid item key={19} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Standard deviation of label cardinality </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            It calculates the standard deviation of the number of labels associated with each instance. Being Card(D) the mean number of labels associated with each instance, the metric is defined as:
                            <BlockMath math={'StdvCard(D) = \\sqrt{\\frac{1}{|D|}\\sum_{i=1}^{|D|}{(|l_i|-Card(D)})^2}”'} />
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>









                <Grid item key={28} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5">  Mean of standard deviation of IR intra class</StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >StyledPaperTitleTypography
                            It computes the mean of the standard deviations intra-class of each label. The standard deviation intra-class is defined taking into account the number of positive instances for the label (instances that have the label associated), <InlineMath math={'L^{p}'} /> and negative instances (instances that have not the label associated), <InlineMath math={'L^{n}'} />.
                            <BlockMath
                                math={
                                    "Std_{intraClass}(\\lambda) =  \\sqrt{{\\frac{(L_{i}^{p}- \\frac{nInstances}{2})^2+(L_{i}^{n}- \\frac{nInstances}{2})^2}{2}}}"
                                }
                            />
                            <BlockMath
                                math={
                                    "MeanStd_{intraC}(D) =  \\frac{1}{DL(D)}\\sum_{l \\in DL(D)=1}IR_{lset}(l)"
                                }
                            />
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={29} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Proportion of maxim label combination (PMax) </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            This metric calculates the proportion of instances associated with the most frequent labelset. If this metric has high values, it is considered label skew, i.e. there is a high number of instances that have associated the most frequent labelset.
                            <BlockMath
                                math={
                                    "PMax(D) = \\argmax{l \\in DL(D)}\\frac{|l|}{|D|}"
                                }
                            />
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={30} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Proportion of unique label combination (PUniq) </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            It measures the proportion of labelsets that are only associated with an instance, divided by the number of instances of the dataset.
                            <BlockMath
                                math={
                                    "PUniq(D) = \\frac{|l \\subseteq DL(D) : |l|=1|}{|D|}"
                                }
                            />
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={31} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Skewness cardinality </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            It measures the skewness of the number of labels associated with each instance, using the skewness metric. If skewness value is greater than 0, values are biased to the right, while if the value is negative, they are biased to the left.
                            Skewness cardinality is defined as:
                            <BlockMath
                                math={
                                    "Skewness(D) = \\frac{(|D|)}{(|D|-1)(|D|-2)}* \\sum_{i=1}^{|D|}\\frac{(|l_{i}|-Card(D))^3}{\\sigma^3}"
                                }
                            /> where
                            <BlockMath
                                math={
                                    "\\sigma^3 = [\\frac{1}{|D|-1}\\sum_{i=1}^{|D|}{(|l_{i}|-Card(D))^3}]^\\frac{3}{2}"
                                }
                            ></BlockMath>

                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>







                <Grid item key={35} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5">Number of labelsets up to 2 examples </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            This metric returns the number of labelsets appearing the up to 2 times in the dataset.
                            <BlockMath
                                math={
                                    "NumLabelsetsUpTo2(D) = |l \\subseteq \\mathcal{L}: |l| \\leq 2|"
                                }
                            ></BlockMath>
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={36} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5">Number of labelsets up to 5 examples </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            This metric returns the number of labelsets appearing the up to 5 times in the dataset.
                            <BlockMath
                                math={
                                    "NumLabelsetsUpTo5(D) = |l \\subseteq \\mathcal{L}: |l| \\leq 5|"
                                }
                            ></BlockMath>
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={37} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Number of labelsets up to 10 examples </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            This metric returns the number of labelsets appearing the up to 10 times in the dataset.
                            <BlockMath
                                math={
                                    "NumLabelsetsUpTo10(D) = |l \\subseteq \\mathcal{L}: |l| \\leq 10|"
                                }
                            ></BlockMath>
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={38} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Number of labelsets up to 50 examples </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            This metric returns the number of labelsets appearing the up to 50 times in the dataset.
                            <BlockMath
                                math={
                                    "NumLabelsetsUpTo50(D) = |l \\subseteq \\mathcal{L}: |l| \\leq 50|"
                                }
                            ></BlockMath>
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>




                <Grid item key={40} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Number of unconditionally dependent label pairs by chi-square test </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            This metric represents the number of pairs of labels unconditionally dependent that reject the null hypothesis of the Chi-square test at
                            99 % confidence. It is defined as:
                            <BlockMath
                                math={
                                    "DependentLabelP airsChiSquare(D) =  {Count(\\lambda_{i}, \\lambda_{j}):\\chi^2(\\lambda_{i}, \\lambda_{j}) \\geq 6.635 }"
                                }
                            ></BlockMath>
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={41} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Proportion of distinct labelsets </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            This metric calculates the proportion between the number of distinct labelsets and the number of instances of the dataset.
                            <BlockMath
                                math={
                                    "Proportion of distinct labelsets(D) = \\frac{DL(D)}{|D|}"
                                }
                            ></BlockMath>
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={42} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Ratio of number of labelsets up to 2 examples </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            It returns the ratio of labelsets appearing the up to 2 times in the dataset.
                            <BlockMath
                                math={
                                    "RatiolsetsUpTo2(D) = \\ \\frac{NumLabelsetsUpTo2(D)}{DistinctLabelsets(D)}"
                                }
                            ></BlockMath>
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={43} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Ratio of number of labelsets up to 5 examples </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            It returns the ratio of labelsets appearing the up to 5 times in the dataset.
                            <BlockMath
                                math={
                                    "RatiolsetsUpTo5(D) = \\ \\frac{NumLabelsetsUpTo5(D)}{DistinctLabelsets(D)}"
                                }
                            ></BlockMath>
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={44} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Ratio of number of labelsets up to 10 examples </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            It returns the ratio of labelsets appearing the up to 10 times in the dataset.
                            <BlockMath
                                math={
                                    "RatiolsetsUpTo10(D) = \\ \\frac{NumLabelsetsUpTo10(D)}{DistinctLabelsets(D)}"
                                }
                            ></BlockMath>
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={45} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Ratio of number of labelsets up to 50 examples </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            It returns the ratio of labelsets appearing the up to 50 times in the dataset.
                            <BlockMath
                                math={
                                    "RatiolsetsUpTo50(D) = \\ \\frac{NumLabelsetsUpTo50(D)}{DistinctLabelsets(D)}"
                                }
                            ></BlockMath>
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={46} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Ratio of unconditionally dependent label pairs by chi-square test </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            It returns the proportion of pairs of labels dependent at 99 % confidence
                            divided by the number of existing pairs.
                            <BlockMath
                                math={
                                    "rDep = \\ RatioDependentLPairsChiSquare(D) = \\ DependentLPairsChiSquare(D)(\\frac{|L||L-1|}{2})^{(-1)}"
                                }
                            ></BlockMath>
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>


                <Grid item key={47} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> SCUMBLE </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            This metric aims to quantify the variation of the imbalance among labels of each instance. It is based on Atkinson index and IR inter-class. While the former is a metric to evaluate inequalities among individuals in a population, the latter measures the degree of imbalance of the dataset. To calculate the Atkinson index, each instance is considered as a population and each active label as an individual. If label $\lambda_i$ is active in the instance <InlineMath math={'d'} />, then <InlineMath math={'IRd(\\lambda_i) = IRInterClass(\\lambda_i)'} />, and 0 otherwise. Being <InlineMath math={'IRd'} /> the average value of <InlineMath math={'IRInterClass(\\lambda_i)'} /> of the labels associated with the instance <InlineMath math={'d'} />, the metric is defined as:
                            <BlockMath
                                math={
                                    "SCUMBLE(D) = \\frac{1}{|D|}\\sum_{d=1}^{|D|}[1-\\frac{1}{\\bar{IR_{d}}}(\\prod_{i=1}^{|L|}IR_{d\\lambda_{i}})^\\frac{1}{|\\mathcal{L}|}]"
                                }
                            ></BlockMath>
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={48} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Standard deviation of examples per labelset </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            It calculates the standard deviation of the number of examples per labelset, defined as:
                            <BlockMath
                                math={
                                    "StdvExamplesLabelset(D)  =  \\sqrt{\\frac{1}{DL(D)}\\sum_{i=1}^{|DL(D)|}{(|l_i|-AL(D))^2}}"
                                }
                            ></BlockMath>
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={49} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Number of unique labelsets </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            It returns the number of labelsets that are only associated with an instance
                            of the dataset.
                            <BlockMath
                                math={
                                    "UniqueLabelsets(D) = |l \\subseteq DL(D) : |l| = 1|"
                                }
                            ></BlockMath>
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>



                <Grid item key={51} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Number of binary attributes </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            It calculates the number of binary attributes <InlineMath math={'|T^b|'} /> of the dataset.
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>





                <Grid item key={57} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Number of nominal attributes </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            It calculates the number of nominal or categorical attributes <InlineMath math={'|T^c|'} /> of the dataset.
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={58} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Number of numeric attributes</StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            It calculates the number of numeric attributes <InlineMath math={'|T^n|'} /> of the dataset.
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={59} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5">Proportion of binary attributes </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            It calculates the ratio of binary attributes regarding to the total number of attributes.
                            <BlockMath
                                math={
                                    "ProportionBinary(D) = \\frac{|T^b|}{|T|}"
                                }
                            ></BlockMath>
                        </StyledPaperContentTypography>

                    </StyledPaper>
                </Grid>

                <Grid item key={60} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Proportion of nominal attributes </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            It calculates the ratio of categorical attributes regarding to the total number of attributes.
                            <BlockMath
                                math={
                                    'ProportionCategorical(D) = \\frac{|T^c|}{|T|}'
                                }
                            ></BlockMath>
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={61} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Proportion of numeric attributes </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            It calculates the ratio of numeric attributes regarding to the total number of attributes.
                            <BlockMath
                                math={
                                    'ProportionNumeric(D) = \\frac{|T^n|}{|T|}'
                                }
                            ></BlockMath>
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>

                <Grid item key={62} xs={12} md={10} xl={8} style={{ textAlign: 'center' }}>
                    <StyledPaper>
                        <StyledPaperTitleTypography variant="h5"> Proportion of numeric attributes with outliers </StyledPaperTitleTypography>
                        <StyledPaperContentTypography variant="body2" >
                            It represents the proportion of numeric attributes with outliers. The outliers  are values that behave in a different way from the majority. This value is defined in <InlineMath math={'[0, 1)'} /> interval, and the higher value, the greater the number of outliers. For an attribute <InlineMath math={'t^{n}'} /> a list of numeric values sorted in ascending order
                            <InlineMath math={'t^{n} = t_1^{n}, t_2^{n} \\dots t_m^{n}; 1 \\leq m \\leq |t^n|'} /> is defined. From this list, a new list <InlineMath math={'r^n \\subseteq t^n'} /> is created, removing extreme values. nTrim is the number of to remove at each extreme <InlineMath math={'nTrim=\\frac{\\alpha}{2}'} />. Using <InlineMath math={'\\alpha=0.05'} />, the new list <InlineMath math={'r^n'} /> is obtained as:
                            <BlockMath
                                math={
                                    'r^n = t_{nTrim}^n, t_{nTrim-1}^n \\dots t_{|T^n|-nTrim}^n'
                                }
                            ></BlockMath>
                            Then, the variance of both sets is calculated, and as <InlineMath math={'V(r^n) < V (t^n)'} /> the ratio is calculated as:

                            <BlockMath
                                math={
                                    'Ratio(t^n) = \\frac{V(r^n)}{V(T^n)}'
                                }
                            ></BlockMath>
                            If the ratio is below 0.7, $t^n$ is considered to have anomalies.To calculate the proportion of attributes with outliers, first the number of numeric attributes with outliers is calculated, and then it is divided by the total number of numeric attributes.
                            <BlockMath
                                math={
                                    'Count_{outliers}(T^n) = |t^{n}: Ratio(t^n) < 0.7|'
                                }
                            ></BlockMath>
                            <BlockMath
                                math={
                                    'Ratio_{outliers}(T^n) = \\frac{Count_{outliers}(T^n)}{|T^n|}'
                                }
                            ></BlockMath>
                        </StyledPaperContentTypography>
                    </StyledPaper>
                </Grid>












                <Grid item xs={12} md={10} xl={8}>
                    <br /> <br /> <br />
                </Grid>
            </BackgroundGrid >
        </React.Fragment >
    );
};

export default Metafeatures;
