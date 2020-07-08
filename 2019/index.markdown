---
title: Privacy-Preserving Machine Learning Workshop 2019
headerTitle: PPML 2019
headerInfoDate: August 18, 2019
layout: default
---

## Affiliated Event: Privacy-Preserving Machine Learning Workshop 2019

### About

Artificial intelligence is progressing rapidly. Systems based on machine learning algorithms approach and sometimes even exceed the abilities of human experts. Applications of machine learning involve almost every aspect of our lives, from health care and DNA sequence classification, to financial markets, computer networks and many more. Machine learning algorithms perform better when being exposed to more and more data, but such data is not always accessible due to privacy constraints. Can we train machine learning algorithms on confidential data without ever being exposed to it? Can my model classify your sample without ever seeing it?

The workshop aims to strengthen collaborations among the machine learning and cryptography communities. The scope includes privacy preserving techniques for training, inference, and disclosure. The workshop will consist of few invited talks, together with contributed talks. 

### Date of Event
August 18, 2019 (Sunday)


### Location

Corwin East [(Google Maps)](https://goo.gl/maps/VonsA22AmK1EYode6)

### Program

Abstracts appear on the bottom of the page. 

The program is available also as [PDF](https://crypto.iacr.org/2019/affevents/ppml/medias/program.pdf)


<div markdown="0">
    {% include program.html programURL='2019/assets/program.json' %}
</div>


### Invited Speakers 


#### Guy Rothblum (Weizmann Institute Of Science)
**Fairness in Automated Classification: A Foundational Perspective**  

*Abstract:*    
The increasing reach of algorithmic classification and decision making into   
our daily lives — from advertising to candidate filtering for jobs to incarceration  
— has given rise to an explosion of research into the ethics embodied by these   
algorithms; in a word, are they “fair”? But what is fairness? Can we test for it?   
Can we achieve it? Are there limits?

The burgeoning theoretical study of algorithmic fairness attempts to tackle  
these challenges. This talk will give a brief survey about some of this progress  
and the many challenges that remain.

Based on joint works with Cynthia Dwork, Úrsula Hébert-Johnson,  
Michael P. Kim, Omer Reingold and Gal Yona.

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

#### Vitaley Shmatlikov (Cornell Tech)
**Unwanted Machine Learning**  

*Abstract:*  
Modern machine learning models exhibit amazing accuracy on tasks from  
image classification to natural-language processing, but accuracy does  
not tell the entire story of what these models have learned.  Does a  
model memorize and leak its training data?  Does it "accidentally"  
learn privacy-violating tasks uncorrelated with its training objective?  
Can it hide a backdoor introduced by an adversary?  All of these are  
examples of unwanted learning, which we need to understand and mitigate  
in order to solve security and privacy problems in today's AI.	  
Modern machine learning models exhibit amazing accuracy on tasks from  
image classification to natural-language processing, but accuracy does  
not tell the entire story of what these models have learned.  Does a  
model memorize and leak its training data?  Does it "accidentally"  
learn privacy-violating tasks uncorrelated with its training objective?  
Can it hide a backdoor introduced by an adversary?  All of these are  
examples of unwanted learning, which we need to understand and mitigate  
in order to solve security and privacy problems in today's AI.	  
  
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

#### Kristin Lauter (Microsoft Research)
**Private AI**
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

### Survey 

#### **A Survey on Deep Learning Techniques for Privacy-Preserving** 
Harry Chandra Tanuwidjaja; Rakyong Choi; Kwangjo Kim  
(KAIST; KAIST; KAIST)  
*Abstract:*   
There are challenges and issues when machine learning algorithm needs to access highly  
sensitive data for the training process. In order to address these issues, several privacy-preserving  
deep learning techniques, including Secure Multi-Party Computation and Homomorphic Encryption  
in Neural Network have been developed. There are also several methods to modify the Neural Network,  
so that it can be used in privacy-preserving environment. However, there is trade-off between privacy   
and performance among various techniques. In this paper, we want to discuss state-of-the-art of   
Privacy-Preserving Deep Learning, evaluate all methods, compare pros and cons of each approach,   
and address challenges and issues in the field of privacy-preserving by deep learning.
  
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

### Contributed Talks

#### **CrptFllow: Secure Tensorflow Inference**
Nishanth Chandran; Nishant Kumar Mayank Rathee; Divya Gupta; Aseem Rastogi; Rahul Sharma  
(Microsoft Research)  

*Abstract:*   
We present CrypTFlow, a first of its kind system that converts TensorFlow inference code into Secure  
Multi-party Computation (MPC) protocols at the push of a button. To do this, we build three components.  
Our first component, Athos, is an end-to-end compiler from Tensorflow to a variety of semi-honest MPC  
protocols. The second component, Porthos, is an improved semi-honest 3PC protocol that provides   
significant speedups for TensorFlow like applications. Finally, to provide malicious secure MPC protocols,  
our third component, Aramis,  is a compiler that uses secure enclaves to convert any semi-honest MPC  
protocol into an MPC protocol that provides malicious security. The security of the protocols output by   
Aramis relies only on the integrity provided by the enclaves,  and not on the confidentiality.   
We experimentally demonstrate the power of our system by showing the secure inference  of real-world  
neural networks such as ResNet50, DenseNet121, and SqueezeNet over the ImageNet dataset with maximum  
running times of about 30 seconds (for semi-honest security) and about two minutes (for malicious security).   
Moreover, our system, through the use of a new "crypto-aware" float-to-fixed compiler, exhibits either negligible  
loss,  or sometimes even improvements, in the inference accuracy over the plaintext floating-point counterparts  
of these networks.  

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

#### **CHET: An Optimizing Compiler for Fully-Homomorphic Neural-Network Inferencing**
 
Roshan Dathathri; Olli Saarikivi; Hao Chen; Kim Laine; Kristin Lauter; Saeed Maleki; Madanlal Musuvathi; Todd Mytkowicz  
(University of Texas at Austin and Microsoft Research)  
	
*Abstract:*   
Fully Homomorphic Encryption (FHE) refers to a set of encryption schemes  
that allow computations on encrypted data without  
requiring a secret key. Recent cryptographic advances have pushed FHE  
into the realm of practical applications. However, programming these  
applications remains a huge challenge, as it requires  
cryptographic domain expertise to ensure correctness, security, and  
performance.  
  
	
CHET is a domain-specific optimizing compiler designed to make the task of  
programming FHE applications easier. Motivated by the need to perform  
neural network inference on encrypted medical and financial data, CHET  
supports a domain-specific language for specifying tensor circuits. It automates many of  
the laborious and error prone tasks of encoding such circuits  
homomorphically, including encryption parameter selection to guarantee  
security and accuracy of the computation, determining efficient tensor  
layouts, and performing scheme-specific optimizations.  
  
	
Our evaluation on a collection of popular neural networks shows that  
CHET generates homomorphic circuits that outperform expert-tuned  
circuits and makes it easy to switch across different encryption  
schemes. We demonstrate its scalability by evaluating it on a version of  
SqueezeNet, which to the best of our knowledge, is the deepest neural  
network to be evaluated homomorphically.  

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;


#### **Foundations of Differentially Oblivious Algorithms**
T-H. Hubert Chan; Kai-Min Chung; Bruce Maggs; Elaine Shi  
(University of Hong-Kong; IIS Academia Sinica; Duke University; Cornell University)  

*Abstract:*   
It is well-known that a program's memory access pattern can leak information about its input. To thwart such leakage,  
most existing works adopt the solution of oblivious RAM (ORAM) simulation. Such a notion has stimulated much debate.  
Some have argued that the notion of ORAM is too strong, and suffers from a logarithmic lower bound on simulation overhead.  
Despite encouraging progress in designing efficient ORAM algorithms, it would nonetheless be desirable to avoid the oblivious  
simulation overhead. Others have argued that obliviousness, without protection of length-leakage, is too weak, and have  
demonstrated examples where entire databases can be reconstructed merely from length-leakage.

Inspired by the elegant notion of differential privacy, we initiate the study of a new notion of access pattern privacy,   
which we call "(ϵ,δ)-differential obliviousness''. We separate the notion of (ϵ,δ)-differential obliviousness from classical  
obliviousness by considering several fundamental algorithmic abstractions including sorting small-length keys, merging  
two sorted lists, and range query data structures (akin to binary search trees). We show that by adopting differential  
obliviousness  with reasonable choices of ϵ and δ, not only can one circumvent several impossibilities pertaining   
to the classical obliviousness notion,  but also in several cases, obtain meaningful privacy with little overhead   
relative to the non-private baselines (i.e., having privacy "almost for free'').  On the other hand, we show that for  
very demanding choices of ϵ and δ, the same lower bounds for oblivious algorithms would  be preserved for  
(ϵ,δ)-differential obliviousness.

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;



#### **Garbled Neural Networks are Practical**
Marshall Ball; Brent Carmer; Tal Malkin; Mike Rosulek; Nichole Schimanski   
(Columbia University; Galois, Inc; Columbia University; Oregon State University; Galois, Inc)  
	
*Abstract:*   
We show that garbled circuits offer a practical choice for secure evaluation of neural network classifiers,   
comparable with complex,  specialized protocols using less robust assumptions, many rounds of interaction,  
and/or tailor-made neural networks. In particular,   we develop a scheme for garbling ``off the shelf'' pre-trained  
neural networks, where the only model preprocessing required is a mild discretization step as opposed   
to requiring a specialized SFE-friendly model to be independently trained. Moreover, as our solution is  a garbling  
scheme, it inherits a much more diverse range of applications than non-garbling-based solutions, perhaps most notably,   
efficient compilers for the malicious setting.  
  
At the protocol level, we start with the garbling scheme of Ball, Malkin, and Rosulek (ACM CCS 2016) for arithmetic  
circuits and  introduce new optimizations for modern neural network activation functions. We develop   
fancygarbling, the first implementation  of the BMR16 garbling scheme along with our new optimizations,  
as part of heavily optimized garbled-circuits tool that is driven by a TensorFlow classifier description.    

We evaluate our constructions on a wide range of neural networks. We find that our approach is up to   
100x more efficient than straight-forward boolean garbling. It is also roughly 40% more efficient than  
DeepSecure (Rouhani et al., DAC 2018), a recent garbled-circuit-based approach for secure neural   
network evaluation, which incorporates significant optimization techniques for boolean circuits.   
Furthermore, our approach provides competitive performance tradeoffs (efficiency and latency vs. communication)  
also when compared with non-garbled-circuit approaches.  

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;


#### **Helen: Maliciously Secure Coopetitive Learning for Linear Models**
Wenting Zheng; Raluca Ada Popa; Joseph E. Gonzalez; Ion Stoica  
(UC Berkeley; UC Berkeley; UC Berkeley; UC Berkeley)  

*Abstract:*   
Many organizations wish to collaboratively train machine learning models on their combined datasets for a common benefit  
(e.g., better medical research, or fraud detection). However, they often cannot share their plaintext datasets due to privacy  
concerns and/or business competition. In this paper, we design and build Helen, a system that allows multiple parties to train  
a linear model without revealing their data, a setting we call coopetitive learning. Compared to prior secure training systems,  
Helen protects against a much stronger adversary who is malicious and can compromise m - 1 out of m parties. Our evaluation  
shows that Helen can achieve up to five orders of magnitude of performance improvement when compared to training using  
an existing state-of-the-art secure multi-party computation framework.  

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;


####**How to trade Efficiency and Accuracy using Fault-Tolerant Computations over the Reals**
Ran Cohen; Jonathan Frankle; Shafi Goldwasser; Hayim Shaul; Vinod Vaikuntanathan  
(Boston University and Northeastern University; MIT; UC Berkeley; IDC Herzliya; MIT)  
	
*Abstract:*   
Recent years have witnessed improvements of several orders of magnitude in the implementations of   
homomorphic  encryption (HE) schemes, leading to the development of numerous HE libraries and a  
growing number of use-cases.  One of the influential improvements is due to the HEAAN scheme of  
Cheon et al. (Asiacrypt'17) that achieved a dramatic speedup in certain homomorphic arithmetic   
operations by allowing the encryption noise to overflow and corrupt some of  the underlying plaintext's  
bits. For certain machine learning motivated computations, this loss of accuracy does not impede  
the usefulness of the computation.
  
	
An interesting question is whether the speedup approach of HEAAN can be obtained without the  
loss of accuracy incurred. We address this question by viewing the error in HEAAN for a single  
arithmetic operation as a noisy gate and employing an approach inspired by fault-tolerant  
computation of Boolean circuits going back to von Neumann (Automata Studies'56) to  
overcome the noise in each gate.
  
	
We show how to compile arithmetic circuits with noisy gates and noisy inputs in a way that keeps  
the variance of the accumulated error under control and its expectation at zero. When using HEAAN  
to homomorphically evaluate arithmetic circuits that were compiled with this compiler, we   
demonstrate a tradeoff between the efficiency of the compiled computation and its accuracy.  
  
	
We show that for a class of computations, our compiled circuit will perform better than best known  
errorless HE schemes  as well as the basic HEAAN approach. As a test case, we implement Welford's  
algorithm for computing the variance of  streaming data, and compare an homomorphic evaluation   
using HEAAN of the "standard" circuit for this task with the  compiled circuit. Our results indicate   
that for the same precision level, using the compiler outperforms the standard  approach both in  
terms of memory and running time. For example, for a stream of 45 values, the standard approach    
required 60 GigaBytes, whereas the compiled circuit required only 2 GigaBytes.  

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;


#### **Secure Evaluation of Quantized Neural Networks** 
Anders Dalskov; Daniel Escudero; Marcel Keller  
(Aarhus University; Aarhus University; Data61)
	
*Abstract:*   
Machine Learning is increasingly being used to solve real-life problems. However, a question that still seems more or less unaddressed  
in practice, is how to perform secure inference; i.e., figure out what a model has to say about an input, without revealing any information  
about the result or input to the model owner, and without revealing any information about the model to the input owner.  
  
	
We present evidence towards solving this issue. By leveraging techniques from the area of quantization in Machine Learning,   
we show that it is possible to evaluate models with tens of layers and million of parameters in just seconds using standard tools from MPC.  
  
Moreover, by focusing on making the MPC protocol work with existing quantization schemes, we can make use of existing frameworks   
like Tensorflow to develop, train and convert models that will be compatible with our protocol.  

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;



#### **Partially Encrypted Machine Learning using Functional Encryption**
Théo Ryffel; Edouard Dufour-Sans; Romain Gay; Francis Bach; David Pointcheval  
 (ENS, INRIA; ENS; ENS, UC Berkeley; INRIA, ENS; ENS, INRIA)  
	 
*Abstract:*   
Machine learning on encrypted data has received a lot of attention thanks to recent breakthroughs  
in homomorphic encryption and secure multi-party computation. It allows outsourcing computation  
to untrusted servers without sacrificing privacy of sensitive data.  
We propose a practical framework to perform partially encrypted and privacy-preserving predictions  
which combines adversarial training and functional encryption. We first present a new functional encryption  
scheme to efficiently compute quadratic functions so that the data owner controls what can be computed  
but is not involved in the calculation: it provides a decryption key which allows one to learn a specific function  
evaluation of some encrypted data.  
We then show how to use it in machine learning to partially encrypt neural networks with quadratic activation   
functions at evaluation time, and we provide a thorough analysis of the information leaks based on  
indistinguishability of data items of the same label.  
Last, since most encryption schemes cannot deal with the last thresholding operation used for classification,  
we propose a training method to prevent selected sensitive features from leaking, which adversarially optimizes  
the network against an adversary trying to identify these features. This is interesting for several existing works   
using partially encrypted machine learning as it comes with little reduction on the model's accuracy and   
significantly  improves data privacy.

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;


#### **Improving the Adaptability of Differential Privacy**

  Mugunthan Vaikkunth, Wanyi Xiao, Lalana Kagal

  (MIT)

*Abstract:*   
Differential privacy is a mathematical technique that provides strong theoretical privacy guarantees by ensuring statistical   
indistinguishability of individuals in a dataset. It has become the de -acto framework for providing privacy-preserving  
data analysis over statistical datasets.  Differential privacy has garnered significant attention from researchers and   
privacy experts due to its strong privacy guarantees.  However, the lack of flexibility due to the lack of configurable   
parameters in existing mechanisms, the accuracy loss caused by the noise added,  and the problems with choosing a  
suitable value of the privacy parameter, ε, have prevented its widespread adoption in the industry.   
  
	
In this paper, we address these issues. Furthermore, the standard approach to preserve differential privacy has been   
to add Laplacian noise  to the output of queries. We propose new probability distributions and noise adding mechanisms   
that preserve ε-differential privacy  and (ε,δ)- differential privacy. The distributions can be observed as an asymmetric Laplacian  
distribution and a generalized truncated  Laplacian distribution. We show that the proposed mechanisms add optimal noise  
in a global context, conditional upon technical lemmas.  In addition, we also show that the proposed mechanisms have greater  
adaptability than the standard Laplacian mechanism as there is more  than one parameter to adjust. We also show that the  
generalized truncated Laplacian mechanism performs better than the optimal Gaussian mechanism. The presented mechanisms  
are useful as they enable data controllers to fine-tune the perturbation to meet the distortion requirements  of the use case.   
The second issue addressed in this paper is to identify an optimal value of ε and specify bounds on it. ε is used to quantify    
the privacy risk posed by revealing statistics calculated on private and sensitive data. Though it has an intuitive theoretical  
explanation,  choosing an appropriate value is non-trivial. We present a systematic and methodical way to calculate ε once  
the necessary constraints are given.  In order to derive the context- specific optimal values and an upper bound for ε,  
we use the confidence probability approach, Chebyshev’s inequality,  and McDiarmid’s inequality
  
	  
	


### Call for Contributed Talks

We encourage submissions exploring a range of techniques for privacy preserving machine learning, including, but not limited to:

-  Multiparty computation
- Homomorphic encryption
- Differential privacy
- Adversarial machine learning
- Model stealing
- Fairness and accountability

**Submission site:** https://secure.iacr.org/websubrev/privAI2019/submit/index.php

**Submission deadline:** June 15, 2019.

**Notifications:** June 21, 2019.


Submissions must comply with the following rules:
- Submissions can be full papers, abstracts (maximum 2 pages), or the expected presentation slides.
- Submissions must be non-anonymous and must clearly specify which author will give the talk.
- The submission should provide sufficient detail to explain what the talk will be about.
- As the workshop does not have formal proceedings, we accept contributed talk proposals which correspond to papers that are under submission or already published elsewhere.

## Organizers

- Gilad Asharov (JP Morgan AI Research) 
- Rafail Ostrovsky (UCLA) 
- Antigoni Polychroniadou (JP Morgan AI Research)

Contact email: [CRYPTO.PPML.2019@gmail.com](mailto:CRYPTO.PPML.2019@gmail.com)

