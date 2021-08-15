---
title: Privacy-Preserving Machine Learning Workshop 2021
headerTitle: PPML 2021
headerInfoDate: August 15, 2021
layout: default
redirect_from: "/"
---

## Affiliated Event: The 3rd Privacy-Preserving Machine Learning Workshop 2021

### About

Artificial intelligence is progressing rapidly. Systems based on machine learning algorithms approach and sometimes even exceed the abilities of human experts. Applications of machine learning involve almost every aspect of our lives, from health care and DNA sequence classification, to financial markets, computer networks and many more. Machine learning algorithms perform better when being exposed to more and more data, but such data is not always accessible due to privacy constraints. Can we train machine learning algorithms on confidential data without ever being exposed to it? Can my model classify your sample without ever seeing it?

The workshop aims to strengthen collaborations among the machine learning and cryptography communities. The scope includes privacy preserving techniques for training, inference, and disclosure. The workshop will consist of few invited talks, together with contributed talks.

### Date of Event
August 15, 2021 (Sunday)

### Registration
The workshop is an affiliated event of [CRYPTO 2021](https://crypto.iacr.org/2021/). To register to the workshop, please register to CRYPTO 2021, and mark in the registration form the PPML workshop. Please read [the participation guidelines](https://crypto.iacr.org/2021/participation.php).

### Location

#### **Zoom. Links will be provided [here](https://crypto.iacr.org/2021/affiliated.php).**


### (Confirmed) Invited Speakers

- [Yuval Ishai](https://www.cs.technion.ac.il/~yuvali/) (Technion)
- [Brendan McMahan](https://research.google/people/author35837/) (Google Research)
- [Nicolas Papernot](https://www.papernot.fr) (University of Toronto)
- [Vinod Vaikuntanathan](http://people.csail.mit.edu/vinodv/) (MIT)


### (Tentative) Program

The time displayed is in UTC.


<div markdown="0">
    {% include program.html programURL='2021/assets/program.json' %}
</div>

<p>&nbsp;</p>


### Abstracts -- Invited Speakers

#### **Yuval Ishai:** New Techniques for Efficient Secure Computation
**Abstract:**
The explosive growth of interest in privacy-preserving ML motivates new techniques for efficient secure computation. In this talk I will survey recent techniques that were developed in the context of general-purpose secure computation but can be particularly appealing for ML-related applications:

- Using function secret sharing for fast secure computation of simple nonlinear functions in an offline-online setting. This applies in particular to ReLU and other popular activation functions;

- Using pseudorandom correlation generators for "silent" secure generation of useful sources of correlated randomness, including random oblivious transfers and (authenticated) multiplication triples;

- Using fully linear zero-knowledge proof systems for practical "semi-honest to malicious" compilers with sublinear additive communication overhead.

<p>&nbsp;</p>


#### **Adria Gascon, Peter Kairouz, Kallista (Kaylee) Bonawitz:** Privacy in Federated Learning at Scale

**Abstract:**
In this talk we will review some of the privacy aspects of a federated learning system, and present recent advances in cryptographic solutions that enable deployments of secure aggregation and distributed differential privacy at scale.


<p>&nbsp;</p>


#### **Vinod Vaikuntanathan:**     Secure Computation and PPML: Progress and Challenges.


<p>&nbsp;</p>

#### **Nicolas Papernot:**  What can we learn from cryptography to develop more trustworthy ML?

**Abstract:**
The attack surface of machine learning is large: training data can be poisoned, predictions manipulated using adversarial examples, models exploited to reveal sensitive information contained in training data, etc. This is in large parts due to the absence of security and privacy considerations in the design of ML algorithms. In this talk, we show that by drawing inspiration from ideas common in the crypto community, we can make principled progress towards more trustworthy ML. We will give examples including work on data privacy, model ownership, and integrity verification for the training algorithm.


<p>&nbsp;</p>



### Abstracts -- Contributed Talks

#### Cerebro: A Platform for Multi-Party Cryptographic Collaborative Learning

Wenting Zheng; Ryan Deng; Weikeng Chen; Raluca Ada Popa; Aurojit Panda; Ion Stoica

CMU; MIT; UC Berkeley; UC Berkeley; NYU; UC Berkeley

**Abstract:**
Many organizations need large amounts of high-quality data for their applications, and one way to acquire such data is via combining datasets from multiple parties. Since these organizations often own sensitive data that cannot be shared in the clear with others due to policy regulation and business competition, there is increased interest in utilizing secure multi-party computation (MPC). MPC allows multiple parties to jointly compute a function without revealing their inputs to each other.

We present Cerebro, an end-to-end collaborative learning platform that enables parties to compute learning tasks without sharing plaintext data. By taking an end-to-end approach to the system design, Cerebro allows multiple parties with complex economic relationships to safely collaborate on machine learning computation through the use of release policies and auditing, while also enabling users to achieve good performance without manually navigating the complex performance tradeoffs between MPC protocols.


#### Fighting COVID-19 in the Dark: End-to-End Methodology for Improved Inference Using Homomorphically Encrypted DNN

Moran Baruch; Lev Greenberg; Guy Moshowich

IBM Research, Bar Ilan University; IBM Research; IBM Research

**Abstract:**
The ability to run deep neural networks (DNN) while adhering to privacy regulations in untrusted cloud environments is becoming quite critical for various industries such as healthcare, finance, and retail. One interesting approach for secure prediction is Homomorphic Encryption (HE), which enables secure predictions over encrypted data.
However, HE comes with a significant computation and communication overhead that limits its adoption in practical applications.

In this paper we consider the CKKS HE scheme because of its efficiency in arithmetic computations. Running AI applications over this scheme is a prolific field of research, and this work leverages recent advancements in usability and speed.
Because CKKS supports only addition and multiplication, implementing non-polynomial operators such as ReLU is challenging.
As a result, transforming a DNN to a CKKS-compatible model that can run over this scheme with minimal accuracy degradation is not a trivial task.


In this work we present a structured methodology to train an efficient CKKS-compatible model based on a pretrained model, with minimal degradation in accuracy, using new techniques for this task such as trainable activation functions and Knowledge Distillation.
In this work we present a structured methodology to train an efficient CKKS-compatible model based on a pretrained model, with minimal degradation in accuracy, using new techniques for this task such as trainable activation functions and Knowledge Distillation.
As a case study, we chose the task of detecting COVID-19 in both chest X-ray and CT datasets as well as the classical CIFAR10. We evaluated the proposed methodology on AlexNet and Resnet18 by showing trade-offs between efficiency and accuracy of the generated models.

#### Secure Quantized Training for Deep Learning

Marcel Keller; Ke Sun

CSIRO's Data61; CSIRO's Data61

**Abstract:**
We have implemented training of neural networks in secure multi-party
computation (MPC) using quantization commonly used in the said
setting. To the best of our knowledge, we are the first to present an
MNIST classifier purely trained in MPC that comes within 0.2 percent
of the accuracy of the same convolutional neural network trained via
plaintext computation. More concretely, we have trained a network with
two convolution and two dense layers to 99.2% accuracy in 25
epochs. This took 3.5 hours in our MPC implementation (under one hour
for 99% accuracy).

#### MUSE: Secure Inference Resilient to Malicious Clients

Ryan Lehmkuhl; Pratyush Mishra; Akshayaram Srinivasan; Raluca Ada Popa

UC Berkeley; UC Berkeley; Tata Institute of Fundamental Research; UC Berkeley

**Abstract:**
The increasing adoption of machine learning inference in applications has led to a corresponding increase in concerns surrounding the privacy guarantees offered by existing mechanisms for inference. Such concerns have motivated the construction of efficient secure inference protocols that allow parties to perform inference without revealing their sensitive information. Recently, there has been a proliferation of such proposals, rapidly improving efficiency. However, most of these protocols assume that the client is semi-honest, that is, the client does not deviate from the protocol; yet in practice, clients are many, have varying incentives, and can behave arbitrarily.

To demonstrate that a malicious client can completely break the security of semi-honest protocols, we first develop a new model-extraction attack against many state-of-the-art secure inference protocols. Our attack enables a malicious client to learn model weights with 22×-312× fewer queries than the best black-box model-extraction attack and scales to much deeper networks.

Motivated by the severity of our attack, we design and implement MUSE, an efficient two-party secure inference protocol resilient to malicious clients. MUSE introduces a novel cryptographic protocol for conditional disclosure of secrets to switch between authenticated additive secret shares and garbled circuit labels, and an improved Beaver's triple generation procedure which is 8×-12.5× faster than existing techniques.

These protocols allow MUSE to push a majority of its cryptographic overhead into a preprocessing phase: compared to the equivalent semi-honest protocol (which is close to state-of-the-art), MUSE's online phase is only 1.7×-2.2× slower and uses 1.4× more communication. Overall, MUSE is 13.4×-21× faster and uses 2×-3.6× less communication than existing secure inference protocols which defend against malicious clients.

#### SIRNN: A Math Library for Secure RNN Inference

Deevashwer Rathee; Mayank Rathee; Rahul Kranti Kiran Goli; Divya Gupta; Rahul Sharma; Nishanth Chandran; Aseem Rastogi


Microsoft Research, UC Berkeley; Microsoft Research, UC Berkeley; Microsoft Research; Microsoft Research; Microsoft Research; Microsoft Research; Microsoft Research

**Abstract:**
Complex machine learning (ML) inference algorithms like recurrent neural networks (RNNs) use standard functions from math libraries like exponentiation, sigmoid, tanh, and reciprocal of square root. Although prior work on secure 2-party inference provides specialized protocols for convolutional neural networks (CNNs), existing secure implementations of these math operators rely on generic 2-party computation (2PC) protocols that suffer from high communication.
We provide new specialized 2PC protocols for math functions that crucially rely on lookup-tables and mixed-bitwidths to address this performance overhead; our protocols for math functions communicate up to 423x less data than prior work.
Furthermore, our math implementations are numerically precise, which ensures that the secure implementations preserve model accuracy of cleartext.
We build on top of our novel protocols to build SIRNN, a library for end-to-end secure 2-party DNN inference, that provides the first secure implementations of an RNN operating on time series sensor data, an RNN operating on speech data, and a state-of-the-art ML architecture that combines CNNs and RNNs for identifying all heads present in images. Our evaluation
shows that SIRNN achieves up to three orders of magnitude of performance improvement when compared to inference of these models using an existing state-of-the-art 2PC framework.

#### Differential Privacy for Text Analytics via Natural Text Sanitization

Xiang Yue; Minxin Du; Tianhao Wang; Yaliang Li; Huan Sun; Sherman S. M. Chow

The Ohio State University; The Chinese University of Hong Kong; Carnegie Mellon University; Alibaba Group; The Ohio State University; The Chinese University of Hong Kong

**Abstract:**
Texts convey sophisticated knowledge. However, texts also convey sensitive information. Despite the success of general-purpose language models and domain-specific mechanisms with differential privacy (DP), existing text sanitization mechanisms still provide low utility, as cursed by the high-dimensional text representation. The companion issue of utilizing sanitized texts for downstream analytics is also under-explored. This paper takes a direct approach to text sanitization. Our insight is to consider both sensitivity and similarity via our new local DP notion. The sanitized texts also contribute to our sanitization-aware pretraining and fine-tuning, enabling privacy-preserving natural language processing over the BERT language model with promising utility. Surprisingly, the high utility does not boost up the success rate of inference attacks.


#### ABY2.0: Improved Mixed-Protocol Secure Two-Party Computation with Applications to Privacy Preserving Machine Learning

Arpita Patra; Thomas Schneider; Ajith Suresh; Hossein Yalame

Indian Institute of Science; TU Darmstadt; Indian Institute of Science; TU Darmstadt

**Abstract:**
Secure Multi-party Computation (MPC) allows a set of mutually distrusting parties to jointly evaluate a function on their private inputs while maintaining input privacy. In this work, we improve semi-honest secure two-party computation (2PC) over rings, with a focus on the efficiency of the online phase. We propose an efficient mixed-protocol framework by extending our techniques to multi-input multiplication gates without inflating the online communication, i.e., it remains independent of the fan-in. Along the way, we construct efficient protocols for several PPML primitives such as scalar product, matrix multiplication, comparison, and maxpool. The online communication of our scalar product is two ring elements irrespective of the vector dimension, which is a feature achieved for the first time in the Privacy-preserving Machine Learning (PPML) literature.

The practicality of our new set of protocols is showcased with Biometric Matching and Privacy-preserving Machine Learning (PPML). Most notably, for PPML, we implement and benchmark training and inference of Logistic Regression and Neural Networks over LAN and WAN networks. For training, we improve online runtime (both for LAN and WAN) over SecureML (Mohassel et al., IEEE S\&P'17) in the range 1.5x--6.1x, while for inference, the improvements are in the range of 2.5x--754.3x.

#### Secure Poisson Regression

Mahimna Kelkar; Phi Hung Le; Mariana Raykova; Karn Seth

Cornell Tech, Cornell University; George Mason University; Google; Google

**Abstract:**
We introduce the first construction for secure two-party computation of Poisson regression, which enables two parties who hold shares of the input samples to learn only the resulting Poisson model while protecting the privacy of the inputs.

Our construction relies on new protocols for secure fixed-point exponentiation and correlated matrix multiplications. Our secure exponentiation construction avoids expensive bit decomposition and achieves orders of magnitude improvement in both online and offline costs over state of the art works. As a result, the dominant cost for our secure Poisson regression are matrix multiplications with one fixed matrix. We introduce a new technique, called correlated Beaver triples, which enables many such multiplications at the cost of roughly one matrix multiplication. This further brings down the cost of secure Poisson regression.

We implement our constructions and show their extreme efficiency. Our secure exponentiation for 20-bit fractional precision takes less than 0.07ms. One iteration of Poisson regression on a dataset with 10,000 samples with 1000 binary features, requires 9.91s offline time, 23.73s online computation and 7.28MB communication. For several real datasets this translates into training that takes seconds and only a couple of MB communication.

#### Improved Multi-Party Fixed-Point Multiplication

Saikrishna Badrinarayanan; Eysa Lee; Peihan Miao; Peter Rindal

Visa Research; Northeastern University; University of Illinois at Chicago; Visa Research

**Abstract:**
Machine learning is widely used for a range of applications and is increasingly offered as a service by major technology companies. However, the required massive data collection raises privacy concerns during both training and inference. Privacy-preserving machine learning aims to solve this problem. In this setting, a collection of servers secret share their data and use secure multi-party computation to train and evaluate models on the joint data. All prior work focussed on the scenario where the number of servers is two or three. In this work, we study the problem where there are N >= 3 servers amongst whom the data is secret shared.

A key component of machine learning algorithms is to perform fixed-point multiplication with truncation of secret shared decimal values. In this work, we design new protocols for multi-party secure fixed-point multiplication where each of the N parties have one share each of the two values to be multiplied and receive one share of the product at the end of the protocol. We consider three forms of secret sharing - replicated, Shamir, and additive, and design an efficient protocol secure in the presence of a semi-honest adversary for each of the forms. Our protocols are more communication efficient than all prior work on performing multi-party fixed-point multiplication. Additionally, for replicated secret sharing, we design another efficient protocol that is secure in the presence of a malicious adversary. Finally, we leverage our fixed-point multiplication protocols to design secure multi-party computation (MPC) protocols for arbitrary arithmetic circuits that have addition and fixed-point multiplication with truncation gates. All our protocols are proven secure using a standard simulation based security definition. Our protocols for replicated and Shamir sharing work in the presence of an honest majority of parties while the one for additive sharing can tolerate a dishonest majority as well.

#### Privacy-preserving machine learning for support vector machines

Daniel Cabarcas; Hernán D. Vanegas; Daniel E. Escudero

Universidad Nacional de Colombia; Universidad Nacional de Colombia; Aarhus University

**Abstract:**
The recent availability of data and the increase of computational power makes machine learning an attractive tool for scientists and engineers.
However, the increasing amount of available information demands security measures for protecting for sensitive data. To achieve this goal, multi-party computation techniques can be used, which enable a group of parties to jointly compute a given function while keeping the information provided by each party hidden. In this work, we study how to use multi-party computation in order to train support vector machines from both a theoretical and a practical perspective, including a complexity analysis of different algorithms that can be used for this goal, together with a full-fledged implementation in the MP-SPDZ framework for MPC.

Our results show that multi-party computation is a viable solution for the task of training SVMs securely, obtaining considerable efficiency and little-to-none degradation of accuracy with respect to a cleartext implementation, although different considerations like dataset dimension and network quality must be taken into account for the applicability of these techniques in different contexts. In this work we discuss these considerations, along with some other practicalities necessary for the applicability of these techniques in realistic scenarios.

#### NeuraCrypt is not private

Nicholas Carlini; Sanjam Garg; Somesh Jha; Saeed Mahloujifar; Mohammad Mahmoody; Florian Tramer

Google; UC Berkeley and NTT Research; University of Wisconsin; Princeton University; University of Virginia; Stanford University and Google

**Abstract:**
NeuraCrypt (Yara et al. arXiv 2021) is an algorithm that converts a sensitive dataset to
an encoded dataset so that
(1) it is still possible to train machine learning models on
the encoded data, but
(2) an adversary who has access only to the encoded dataset can
not learn much about the original sensitive dataset.
We break NeuraCrypt's privacy claims, by perfectly solving the authors' public challenge, and by showing that NeuraCrypt does not satisfy
the formal privacy definitions posed in the original paper.
Our attack consists of a series of boosting steps that,
coupled with various design flaws,
turns a 1% attack advantage into a 100% complete break of the scheme.


### Call for Contributed Talks

There will be a session of contributed talks. Since the conference is on zoom, the contributed talks will be shorter this year (10 minutes at most).

We encourage submissions exploring a range of techniques and applications for privacy preserving machine learning, including, but not limited to:

- Multiparty computation
- Homomorphic encryption
- Differential privacy
- Adversarial machine learning
- Model stealing
- Fairness and accountability
- Federated Learning
- Synthetic data generation




**Submission site:**
The submission site is available [here](https://secure.iacr.org/websubrev/ppml2021/submit/)

**Submission deadline:**
Thursday, July 22nd, 2021, 11:59pm EST.


**Notifications:**
Sunday, August 1st, 2021.



Submissions must comply with the following rules:
- We encourage submitting full papers. Abstracts can also be provided.
- Submissions must be non-anonymous and must clearly specify which author will give the talk.
- The submission should provide sufficient detail to explain what the talk will be about.
- As the workshop does not have formal proceedings, we accept contributed talk proposals which correspond to papers that are under submission or already published elsewhere (parallel submissions are allowed).

The committee will follow COI standards according to the IACR policy. Contributed Talks Committee members are allowed to submit as well.

### Contributed Talks Committee

- [Adi Akavia](https://sites.google.com/view/akavia) (University of Haifa)
- [Gilad Asharov](http://www.cs.biu.ac.il/~asharog) (Bar-Ilan University)
- [Carsten Baum](http://carstenbaum.com) (Aarhus University)
- [Elette Boyle](https://cs.idc.ac.il/~elette/) (IDC)
- [Vipul Goyal](https://www.cs.cmu.edu/~goyal/) (CMU and NTT)
- [Mohammad Mahmoody](https://www.cs.virginia.edu/~mohammad/) (University of Virginia (UVA))
- [Sahar Mazloom](http://mason.gmu.edu/~sseyedma/index.html) (JPM AI Research)
- [Rafail Ostrovsky](http://web.cs.ucla.edu/~rafail/) (UCLA)
- [Antigoni Polychroniadou](https://antigonip.github.io/) (JP Morgan AI Research)
- [Gil Segev](https://www.gilsegev.net) (Hebrew University)





### Organizers

- [Gilad Asharov](http://www.cs.biu.ac.il/~asharog) (Bar-Ilan University)
- [Rafail Ostrovsky](http://web.cs.ucla.edu/~rafail/) (UCLA)
- [Antigoni Polychroniadou](https://antigonip.github.io/) (JP Morgan AI Research)

Contact email: [CRYPTO.PPML@gmail.com](mailto:CRYPTO.PPML@gmail.com)
