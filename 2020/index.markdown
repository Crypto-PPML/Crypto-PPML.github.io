---
title: Privacy-Preserving Machine Learning Workshop 2020
headerTitle: PPML 2020
headerInfoDate: August 16, 2020
layout: default
redirect_from: "/"
---

## Affiliated Event: The 2nd Privacy-Preserving Machine Learning Workshop 2020

### About

Artificial intelligence is progressing rapidly. Systems based on machine learning algorithms approach and sometimes even exceed the abilities of human experts. Applications of machine learning involve almost every aspect of our lives, from health care and DNA sequence classification, to financial markets, computer networks and many more. Machine learning algorithms perform better when being exposed to more and more data, but such data is not always accessible due to privacy constraints. Can we train machine learning algorithms on confidential data without ever being exposed to it? Can my model classify your sample without ever seeing it?

The workshop aims to strengthen collaborations among the machine learning and cryptography communities. The scope includes privacy preserving techniques for training, inference, and disclosure. The workshop will consist of few invited talks, together with contributed talks. 

### Date of Event
August 16, 2020 (Sunday)

### Registration
The workshop is an affiliated event of [CRYPTO 2020](https://crypto.iacr.org/2020/). To register to the workshop, please register to CRYPTO 2020, and mark in the registration form the PPML workshop. Please read [the participation guidelines](https://crypto.iacr.org/2020/participation.php).

### Location

#### **Zoom. Links will be provided [here](https://crypto.iacr.org/2020/affiliated.php).**


*All lectures appear in [YouTube](https://www.youtube.com/watch?v=WicRo6SLpCQ&list=PLeeS-3Ml-rpqtfdQWOAawf3_G-0qwTgQ9&index=1)*


### (Confirmed) Invited Speakers 

- Shafi Goldwasser (UC Berkeley)
- Mohammad Mahmoody (University of Virginia)
- Ilya Mironov (Facebook AI)
- Ramesh Raskar (MIT Media Lab)

### (Tentative) Program

The time displayed is in UTC. Abstracts are given below.


<div markdown="0">
    {% include program.html programURL='2020/assets/program.json' %}
</div>

<p>&nbsp;</p>

### Abstracts -- Invited Speakers

#### **Ramesh Raskar (MIT):** Split Learning: Benefits of API style distributed private machine learning among untrusted parties for low power or asynchronous training and inference

**Abstract:**
TBD

#### **Ilya Mironov (Facebook AI):** Crypto and ML: Just getting started

**Abstract:**
We will survey the recent history of remarkably fruitful interaction between machine learning and cryptography, starting with the definition of differential privacy, its relaxations, and applications. We will talk about the progress in making MPC accessible to machine learning practitioners and the unexpected power of anonymous channels. Throughout the talk we will be highlighting open problems and outstanding challenges.

#### **Shafi Goldwasser (UC Berkley):** Trustworthy ML: Etudes in Robustness and Privacy

**Abstract:**

#### **Mohammad Mahmoody (University of Virginia):** Connections between cryptographic coin flipping and adversarially robust learning

**Abstract:**
Classical learning algorithms are designed for benign settings in which normally generated samples are fed to a learning algorithm, and that model is later tested on normal instances sampled from the same distributions. With massive deployment of learning systems in daily life, it is even more important to understand the robustness of learning algorithms to adversarial behavior.

In this talk, we show a connection between training-time attacks (aka, data poisoning attacks) in learning and the well studied problem of collective coin flipping (CCF) in cryptography. In particular, suppose the training data is partitioned into n sequential batches (e.g., the i th batch could be the data coming from the i th party in the i th round in an n round protocol). Then, for any deterministic learning rule that produces a model, and any arbitrary bad property B defined over the space of produced models, there is an adversary who only changes about sqrt(n) of the input batches and can increase the probability of B from any non-negligible amount to ~1. The bad property B could model anything, e.g., B=1 if the model h gives a particular label (desired by the adversary) on a particular instance, allowing the result to be applicable to a broad setting. At a technical level, our proof goes through a novel computational variant of the well-known measure concentration in product probability spaces that might be of independent interest.

Based on joint works with Omid Etesami and Saeed Mahloujifar (appeared in ALT'2019 and SODA'20).

<p>&nbsp;</p>

### Abstracts -- Contributed Talks

#### Privacy-Preserving Decision Tree Training and Prediction


Adi Akavia; Max Leibovich; Yehezkel S. Resheff; Roey Ron; Moni Shahar; Margarita Vald

University of Haifa, Israel; University of Haifa, Israel; Intuit Inc., Israel; Intuit Inc., Israel; Facebook Inc., Israel; Tel-Aviv University and Intuit Inc., Israel

**Abstract:**
In the era of cloud computing and machine learning, data has become a highly valuable resource. Recent history has shown that the benefits brought forth by this data driven culture come at a cost of potential data leakage. Such breaches have a devastating impact on individuals and industry, and lead the community to seek privacy preserving solutions. 
A promising approach is to utilize Fully Homomorphic Encryption ($\FHE$) to enable machine learning over encrypted data, thus providing resiliency against information leakage. However, computing over encrypted data incurs a high computational overhead, thus requiring the redesign of algorithms, in an ``$\FHE$-friendly" manner, to maintain their practicality. 

In this work we focus on the ever-popular tree based methods (e.g., boosting, random forests), and propose a new privacy-preserving solution to training and prediction for trees. Our solution employs a low-degree approximation for the step-function together with a lightweight interactive protocol, to replace components of the vanilla algorithm that are costly over encrypted data. Our protocols for decision trees achieve practical usability demonstrated on standard UCI datasets, encrypted with fully homomorphic encryption. In addition, the communication complexity of our protocols is independent of the tree size and dataset size in prediction and training, respectively, which significantly improves on prior works.

<p>&nbsp;</p>


#### Fairness in the Eyes of the Data: Certifying Machine-Learning Models

Shahar Segal; Yossi Adi; Benny Pinkas; Carsten Baum; Chaya Ganesh; Joseph Keshet

Tel Aviv University; Bar Ilan University; Bar Ilan University; Aarhus University; IISc Bangalore; Bar Ilan University

**Abstract:** 
We present a framework that allows to certify the fairness degree of a model based on an interactive and privacy-preserving test. The framework verifies any trained model, regardless of its training process and architecture. Thus, it allows us to evaluate any deep learning model on multiple fairness definitions empirically. We tackle two scenarios, where either the test data is privately available only to the tester or is publicly known in advance, even to the model creator. We investigate the soundness of the proposed approach using theoretical analysis and present statistical guarantees for the interactive test. Finally, we provide a cryptographic technique to automate fairness testing and certified inference with only black-box access to the model at hand while hiding the participants' sensitive data.

<p>&nbsp;</p>

#### CryptoSPN: Expanding PPML beyond Neural Networks

Amos Treiber; Alejandro Molina; Christian Weinert; Thomas Schneider; Kristian Kersting

TU Darmstadt; TU Darmstadt; TU Darmstadt; TU Darmstadt; TU Darmstadt

**Abstract:**
The ubiquitous deployment of machine learning (ML) technologies has certainly improved many applications but also raised challenging privacy concerns, as sensitive client data is usually processed remotely at the discretion of a service provider. Therefore, privacy-preserving machine learning (PPML) aims at providing privacy using techniques such as secure multi-party computation (SMPC).

Recent years have seen a rapid influx of cryptographic frameworks that steadily improve performance as well as usability, pushing PPML towards practice. However, as it is mainly driven by the crypto community, the PPML toolkit so far is mostly restricted to well-known neural networks. Unfortunately, deep probabilistic models rising in the ML community that can deal with a wide range of probabilistic queries and offer tractability guarantees are severely underrepresented. Due to a lack of interdisciplinary collaboration, PPML is missing such important trends, ultimately hindering the adoption of privacy technology.

In this work, we significantly expand the PPML toolkit beyond neural networks by introducing CryptoSPN, a framework for privacy-preserving inference of sum-product networks (SPNs). SPNs are deep probabilistic models at the sweet-spot between expressivity and tractability, allowing for a range of exact queries in linear time. In an interdisciplinary effort, we combine techniques from both ML and cryptography to allow for efficient, privacy-preserving SPN inference via SMPC.

We provide CryptoSPN as open source and seamlessly integrate it into the SPFlow library (Molina et al., arXiv 2019) for practical use by ML experts. Our evaluation on a broad range of SPNs demonstrates that CryptoSPN achieves highly efficient and accurate inference within seconds for medium-sized SPNs.

<p>&nbsp;</p>

#### Delphi: Cryptographic Inference for Neural Networks

Pratyush Mishra; Ryan Lehmkuhl; Akshayaram Srinivasan; Wenting Zheng; Raluca Ada Popa

UC Berkeley; UC Berkeley; UC Berkeley; UC Berkeley; UC Berkeley

**Abstract:**
Many companies provide neural network prediction services to users for a wide range of applications. However, current prediction systems compromise one party's privacy: either the user has to send sensitive inputs to the service provider for classification, or the service provider must store its proprietary neural networks on the user's device. The former harms the personal privacy of the user, while the latter reveals the service provider's proprietary model.

We design, implement, and evaluate Delphi, a secure prediction system that allows two parties to execute neural network inference without revealing either party's data. Delphi approaches the problem by simultaneously co-designing cryptography and machine learning. We first design a hybrid cryptographic protocol that improves upon the communication and computation costs over prior work. Second, we develop a planner that automatically generates neural network architecture configurations that navigate the performance-accuracy trade-offs of our hybrid protocol. Together, these techniques allow us to achieve a 22x improvement in online prediction latency compared to the state-of-the-art prior work.


<p>&nbsp;</p>

#### ACCO: Algebraic Computation with COmparison

Xiaoqi Duan; Vipul Goyal; Hanjun Li; Rafail Ostrovsky; Antigoni Polychroniadou; Yifan Song

Tsinghua University; Carnegie Mellon University; Carnegie Mellon University; University of California, Los Angeles; J.P. Morgan AI Research; Carnegie Mellon University

**Abstract:**
In this work, we introduce ACCO: a secure computation engine for securely computing algebraic circuits that also natively support gates for secure comparison and secure integer truncation. We use ACCO to build an information theoretic privacy preserving machine learning system where a set of parties collaboratively train regression models in the presence of a malicious adversary. We report an implementation of our system and compare the performance against Helen, the work of Zheng, Popa, Gonzalez and Stoica (SP’19). Our system offers a 73x speedup (for the million song dataset with 90 features) over Helen.

<p>&nbsp;</p>

#### MP2ML: A Mixed-Protocol Machine Learning Framework for Private Inference

Fabian Boemer; Rosario Cammarota; Daniel Demmler; Thomas Schneider; Hossein Yalame

Intel AI; Intel Labs; University of Hamburg; TU Darmstadt; TU Darmstadt

**Abstract:**
Privacy-preserving machine learning (PPML) has many applications,
from medical image classification and anomaly detection to
financial analysis. nGraph-HE enables data scientists to perform
private inference of deep learning (DL) models trained using popular
frameworks such as TensorFlow. nGraph-HE computes linear
layers using the CKKS homomorphic encryption (HE) scheme. The
non-polynomial activation functions, such as MaxPool and ReLU,
are evaluated in the clear by the data owner who obtains the intermediate
feature maps. This leaks the feature maps to the data owner
from which it may be possible to deduce the DL model weights.
As a result, such protocols may not be suitable for deployment,
especially when the DL model is intellectual property.
In this work, we present MP2ML, a machine learning framework
which integrates nGraph-HE and the secure two-party computation
framework ABY, to overcome the limitations of leaking the
intermediate feature maps to the data owner. We introduce a novel
scheme for the conversion between CKKS and secure multi-party
computation to execute DL inference while maintaining the privacy
of both the input data and model weights. MP2ML is compatible
with popular DL frameworks such as TensorFlow that can infer pretrained
neural networks with native ReLU activations. We benchmark
MP2ML on the CryptoNets network with ReLU activations,
on which it achieves a throughput of 33.3 images/s and an accuracy
of 98.6%. This throughput matches the previous state-of-the-art
work, even though our protocol is more accurate and scalable.


<p>&nbsp;</p>

#### CrypTFlow2: Practical 2-Party Secure Inference

Deevashwer Rathee; Mayank Rathee; Nishant Kumar; Nishanth Chandran; Divya Gupta; Aseem Rastogi; Rahul Sharma

Microsoft Research India; Microsoft Research India; Microsoft Research India; Microsoft Research India; Microsoft Research India; Microsoft Research India; Microsoft Research India

**Abstract:**
We present CrypTFlow2, a cryptographic library for secure inference over realistic Deep Neural Networks (DNNs) using secure 2-party computation. CrypTFlow2 protocols are both correct -- i.e., their outputs are bitwise equivalent to the cleartext execution -- and efficient -- they outperform the state-of-the-art protocols in both latency and scale. At the core of CrypTFlow2, we have new 2PC protocols for secure comparison and division, designed carefully to balance round and communication complexity for secure inference tasks. Using CrypTFlow2, we present the first secure inference over ImageNet-scale DNNs like ResNet50 and DenseNet121. These DNNs are at least an order of magnitude larger than those considered in the prior work of 2-party DNN inference. Even on the benchmarks considered by prior work, CrypTFlow2 requires an order of magnitude less communication and 20X-30X less time than the state-of-the-art.

<p>&nbsp;</p>

#### Data Oblivious Algorithms for Multicores

Vijaya Ramachandran; Elaine Shi

UT Austin; Cornell

**Abstract:**
As secure processors such as Intel SGX (with hyperthreading) become widely adopted, there is a growing appetite for private analytics on big data. Most prior works on data-oblivious algorithms adopt the classical PRAM model to capture parallelism. However, it is widely understood that PRAM does not best capture realistic multicore processors, nor does it reflect parallel programming models adopted in practice.

In this paper, we initiate the study of parallel data oblivious algorithms on realistic multicores, best captured by the binary fork-join model of computation. We first show that data-oblivious sorting can be accomplished by a binary fork-join algorithm with optimal total work and optimal (cache-oblivious) cache complexity, and in O(log n log log n) span (i.e., parallel
time) that matches the best-known insecure algorithm. Using our sorting algorithm as a core primitive, we show how to data-obliviously simulate general PRAM algorithms in the binary fork-join model with non-trivial efficiency. We also present results for several applications including list ranking, Euler tour, tree contraction, connected components, and minimum spanning forest. For a subset of these applications, our data-oblivious algorithms asymptotically
outperform the best known insecure algorithms. For other applications, we show data oblivious algorithms whose performance bounds match the best known insecure algorithms. 

Complementing these asymptotically efficient results, we present a practical variant of our sorting algorithm that is self-contained and potentially implementable. It has optimal caching cost, and it is only a log log n factor off from optimal work and about a log n factor off in terms of span; moreover, it achieves small constant factors in its bounds.

<p>&nbsp;</p>

#### De-Anonymizing Text by Fingerprinting Language Generation

Zhen Sun; Roei Schuster; Vitaly Shmatikov

Cornell University; Tel Aviv University, Cornell Tech; Cornell Tech

**Abstract:**
Components of machine learning systems are not (yet) perceived as security hotspots. Secure coding practices, such as ensuring that no execution paths depend on confidential inputs, have not yet been adopted by ML developers. We initiate the study of code security of ML systems by investigating how nucleus sampling---a popular approach for generating text, used for applications such as auto-completion---unwittingly leaks texts typed by users. Our main result is that the series of nucleus sizes for many natural English word sequences is a unique fingerprint. We then show how an attacker can infer typed text by measuring these fingerprints via a suitable side channel (e.g., cache access times), explain how this attack could help de-anonymize anonymous texts, and discuss defenses.


<p>&nbsp;</p>

#### Humpty Dumpty: Controlling Word Meanings via Corpus Poisoning
Roei Schuster; Tal Schuster; Yoav Meri; Vitaly Shmatikov
Tel Aviv University, Cornell Tech; CSAIL / MIT; ; Cornell Tech

**Abstract:**
Word embeddings, i.e., low-dimensional vector representations such as GloVe and SGNS, encode word “meaning” in the sense that distances between words’ vectors correspond to their semantic proximity. This enables transfer learning of semantics for a variety of natural language processing tasks. Word embeddings are typically trained on large public corpora such as Wikipedia or Twitter. We demonstrate that an attacker who can modify the corpus on which the embedding is trained can control the “meaning” of new and existing words by changing their locations in the embedding space. We develop an explicit expression over corpus features that serves as a proxy for distance between words and establish a causative relationship between its values and embedding distances. We then show how to use this relationship for two adversarial objectives: (1) make a word a top-ranked neighbor of another word, and (2) move a word from one semantic cluster to another.
An attack on the embedding can affect diverse downstream tasks, demonstrating for the first time the power of data poisoning in transfer learning scenarios. We use this attack to manipulate query expansion in information retrieval systems such as resume search, make certain names more or less visible to named entity recognition models, and cause new words to be translated to a particular target word regardless of the language. Finally, we show how the attacker can generate linguistically likely corpus modifications, thus fooling defenses that attempt to filter implausible sentences from the corpus using a language model.

<p>&nbsp;</p>

#### Crypto-Oriented Neural Architecture Design

Avital Shafran; Gil Segev; Shmuel Peleg; Yedid Hoshen
The Hebrew University of Jerusalem

**Abstract:**
As neural networks revolutionize many applications, significant privacy conflicts between model users and providers emerge. The cryptography community developed a variety of techniques for secure computation to address such privacy issues. As generic techniques for secure computation are typically prohibitively ineffective, many efforts focus on optimizing their underlying cryptographic tools. Differently, we propose to optimize the initial design of crypto-oriented neural architectures and provide a novel Partial Activation layer. The proposed layer is much faster for secure computation. Evaluating our method on three state-of-the-art architectures (SqueezeNet, ShuffleNetV2, and MobileNetV2) demonstrates significant improvement to the efficiency of secure inference on common evaluation metrics.

<p>&nbsp;</p>


### Call for Contributed Talks

We encourage submissions exploring a range of techniques for privacy preserving machine learning, including, but not limited to:

- Multiparty computation
- Homomorphic encryption
- Differential privacy
- Adversarial machine learning
- Model stealing
- Fairness and accountability


**Submission site:** [https://secure.iacr.org/websubrev/privAI2020/submit/](https://secure.iacr.org/websubrev/privAI2020/submit/)

**Submission deadline:** August 2nd, 2020.

**Notifications:** August 6th, 2020.



Submissions must comply with the following rules:
- Submissions can be full papers, abstracts (maximum 2 pages), or the expected presentation slides.
- Submissions must be non-anonymous and must clearly specify which author will give the talk.
- The submission should provide sufficient detail to explain what the talk will be about.
- As the workshop does not have formal proceedings, we accept contributed talk proposals which correspond to papers that are under submission or already published elsewhere (parallel submissions are allowed). 

The committee will follow COI standards according to the IACR policy. Contributed Talks Committee members are allowed to submit as well. 

### Contributed Talks Committee 

- Adi Akavia (Haifa University)
- Gilad Asharov (Bar-Ilan University)
- Carsten Baum (Aarhus University)
- Vipul Goyal (Carnegie Mellon University)
- Rafail Ostrovsky (UCLA) 
- Antigoni Polychroniadou (JP Morgan AI Research)
- Gil Segev (Hebrew University)
- Muthu Venkitasubramaniam (University of Rochester)





### Organizers

- [Gilad Asharov](http://www.cs.biu.ac.il/~asharog) (Bar-Ilan University) 
- [Rafail Ostrovsky](http://web.cs.ucla.edu/~rafail/) (UCLA) 
- [Antigoni Polychroniadou](https://antigonip.github.io/) (JP Morgan AI Research)

Contact email: [CRYPTO.PPML.2020@gmail.com](mailto:CRYPTO.PPML.2020@gmail.com)




