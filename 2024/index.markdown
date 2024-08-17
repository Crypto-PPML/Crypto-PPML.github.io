---
title: Privacy-Preserving Machine Learning Workshop 2024
headerTitle: PPML 2024
headerInfoDate: August 18, 2024
layout: default
redirect_from: "/"
---

## Affiliated Event: The 6th Privacy-Preserving Machine Learning Workshop 2024

### About

Artificial intelligence is progressing rapidly. Systems based on machine learning algorithms approach and sometimes even exceed the abilities of human experts. Applications of machine learning involve almost every aspect of our lives, from health care and DNA sequence classification, to financial markets, computer networks and many more. Machine learning algorithms perform better when being exposed to more and more data, but such data is not always accessible due to privacy constraints. Can we train machine learning algorithms on confidential data without ever being exposed to it? Can my model classify your sample without ever seeing it?

The workshop aims to strengthen collaborations among the machine learning and cryptography communities. The scope includes privacy preserving techniques for training, inference, and disclosure. The workshop will consist of few invited talks, together with contributed talks.

### Date of Event
August 18, 2024 (Sunday)

### Registration
The workshop is an affiliated event of [CRYPTO 2024](https://crypto.iacr.org/2024/). To register to the workshop, please register to CRYPTO 2024, and mark in the registration form the PPML workshop.


### Location

#### MCC Theater, University of Santa Barbara, California

The workshop will be in-person.



### Invited Speakers

- Nishanth Chandran (Microsoft Research, India)
- Sanjam Garg (UC Berkley, USA)
- Kunal Talwar (Apple, USA)
More invited speakers will be added.

### (Tentative) Program


The time displayed is in Pacific Daylight Time (GMT-7).


<div markdown="0">
    {% include program.html programURL='2024/assets/program.json' %}
</div>

<p>&nbsp;</p>

### Abstracts -- Invited Speakers

#### **Sanjam Garg:** Publicly Detectable Watermarking for Language Models

**Abstract:**

We present a highly detectable, trustless watermarking scheme for LLMs: the detection algorithm contains no secret information, and it is executable by anyone. We embed a publicly-verifiable cryptographic signature into LLM output using rejection sampling. We prove that our scheme is cryptographically
correct, sound, and distortion-free. We make novel use of error-correction techniques to overcome periods
of low entropy, a barrier for all prior watermarking schemes. We implement our scheme and make empirical
measurements over open models in the 2.7B to 70B parameter range. Our experiments suggest that our
formal claims are met in practice.  

(Based on joint work with Jaiden Fairoze, Somesh Jha, Saeed Mahloujifar, Mohammad Mahmoody, and Mingyuan Wang)

<p>&nbsp;</p>


#### **Kunal Talwar:** Samplable Anonymous Aggregation for Private Federated Data Analysis

**Abstract:**

In this talk, I will revisit the problem of designing scalable protocols for private statistics and private federated learning when each device holds its private data. Locally differentially private algorithms require little trust but are provably limited in their utility. Centrally differentially private algorithms can allow significantly better utility but require a trusted curator. This gap has led to significant interest in the design and implementation of simple cryptographic primitives, that can allow central-like utility guarantees without having to trust a central server.

I will discuss a new primitive that allows for efficient implementation of several commonly used algorithms, and allows for privacy accounting that is close to that in the central setting without requiring the strong trust assumptions it entails. I will discuss a system architecture that implements the new primitive. Time permitting, I will also talk about Euclidean norm verification in this setting, and discuss some open questions.

Based on these joint works with several wonderful collaborators:
[https://arxiv.org/abs/2307.15017](https://arxiv.org/abs/2307.15017) and [https://arxiv.org/abs/2311.10237](https://arxiv.org/abs/2311.10237)

<p>&nbsp;</p>


#### **Nishanth Chandran:** Practical cryptographic solutions to secure inference and private benchmarking


**Abstract:**

Rapid advancements in machine learning have led to increased data silos with different stakeholders unwilling to share their sensitive data and proprietary models. These silos create barriers to offering inference-as-a-service or even being able to truly evaluate the quality of models. Theoretically, secure multi-party computation (MPC) can help overcome these barriers - however, much work is needed to make it practically deployable primarily in terms of handling scale, performance, and usability. In this talk, I will provide an overview of these challenges and present recent cryptographic techniques based on the paradigm of function secret sharing that help us build end-to-end MPC based solutions for secure inference as well as private benchmarking. Our work shows that, in certain settings, the overhead of MPC can be quite low - e.g., state-of-the-art models for vision tasks can be performed in real-time, while even billion parameter generative AI models can be executed securely in a few seconds.


<p>&nbsp;</p>


### Contributed Talks

#### How Private are DP-SGD Implementations?

Lynn Chua, Badih Ghazi, Pritish Kamath, Ravi Kumar, Pasin Manurangsi, Amer Sinha and Chiyuan Zhang

**Abstract:**

We demonstrate a substantial gap between the privacy guarantees of the Adaptive Batch Linear Queries (ABLQ) mechanism under different types of batch sampling: (i) Shuffling, and (ii) Poisson subsampling; the typical analysis of Differentially Private Stochastic Gradient Descent (DP-SGD) follows by interpreting it as a post-processing of ABLQ.
While shuffling-based DP-SGD is more commonly used in practical implementations, it has not been amenable to easy privacy analysis, either analytically or even numerically.
On the other hand, Poisson subsampling-based DP-SGD is challenging to scalably implement, but has a well-understood privacy analysis, with multiple open-source numerically tight privacy accountants available.
This has led to a common practice of using shuffling-based DP-SGD in practice, but using the privacy analysis for the corresponding Poisson subsampling version.
Our result shows that there can be a substantial gap between the privacy analysis when using the two types of batch sampling, and thus advises caution in reporting privacy parameters for DP-SGD.

<p>&nbsp;</p>

#### Mind the Privacy Unit! User-Level Differential Privacy for Language Model Fine-Tuning

Lynn Chua, Badih Ghazi, Yangsibo Huang, Pritish Kamath, Ravi Kumar, Daogao Liu, Pasin Manurangsi, Amer Sinha and Chiyuan Zhang

**Abstract:**

Large language models (LLMs) have emerged as powerful tools for tackling complex tasks across diverse domains, but they also raise privacy concerns when fine-tuned on sensitive data due to potential memorization. While differential privacy (DP) offers a promising solution by ensuring models are `almost indistinguishable' with or without any particular privacy unit, current evaluations on LLMs mostly treat each example (text sequence) as the privacy unit. This leads to uneven user privacy guarantees when contributions per user vary. We therefore study user-level DP motivated by applications where it necessary to ensure uniform privacy protection across users. We present a systematic evaluation of user-level DP for LLM fine-tuning on natural language generation tasks. Focusing on two mechanisms for achieving user-level DP guarantees, Group Privacy and User-wise DP-SGD, we investigate design choices like data selection strategies and parameter tuning for the best privacy-utility tradeoff.


<p>&nbsp;</p>


#### AITIA: Efficient Secure Computation of Bivariate Causal Discovery		

Truong Son Nguyen, Wang Lun, Evegenios Kornaropoulos and Ni Trieu


**Abstract:**

Causal discovery refers to the process of identifying and understanding the causal relationships between different variables or events in a system. This paper proposes the first two-party secure computation protocol -- \aitia -- for bivariate causal discovery, the fundamental building block of most advanced causal discovery protocols. The proposed protocol is based on optimized multi-party computation design choices and is secure in the semi-honest setting.

At the core of our approach is a new non-linear regression algorithm, BSGD-SVR, designed with the multi-party computation application in mind so as to achieve both high accuracy and low computation and communication costs.
Concretely, we lower the training complexity of the non-linear regression model from $\sim\mathcal{O}(N^3)$ to $\sim\mathcal{O}(N^2)$ where $N$ is the number of training samples.

We implement the \aitia using the CrypTen framework and assess its performance across various datasets. The empirical evaluation shows a significant speedup $3.6-340\times$ compared to the baseline approach.

<p>&nbsp;</p>

#### OPA : One-shot Private Aggregation with Single Client Interaction and its Applications to Federated Learning

Harish Karthikeyan and Antigoni Polychroniadou

**Abstract:**

Our work aims to minimize interaction in secure computation due to the high cost and challenges associated with communication rounds, particularly in scenarios with many clients. In this work, we revisit the problem of secure aggregation in the single-server setting where a single evaluation server can securely aggregate client-held individual inputs. Our key contribution is One-shot Private Aggregation (OPA) where clients speak only once (or even choose not to speak) per aggregation evaluation. Since every client communicates just once per aggregation, this streamlines the management of dropouts and dynamic participation of clients, contrasting with multi-round state-of-the-art protocols for each aggregation.
We initiate the study of OPA in several ways. First, we formalize the model and present a security definition. Second, we construct OPA protocols based on class groups, DCR, and LWR assumptions. Third, we demonstrate OPA with two applications: private stream aggregation and privacy-preserving federated learning. Specifically, OPA can be used as a key building block to enable privacy-preserving federated learning and critically, where client speaks once. This is a sharp departure from prior multi-round protocols whose study was initiated by Bonawitz et al. (CCS, 2017). Moreover, unlike the YOSO (You Only Speak Once) model for general secure computation, OPA eliminates complex committee selection protocols to achieve adaptive security. Beyond asymptotic improvements, OPA is practical, outperforming state-of-the-art solutions. We leverage OPA to develop a streaming variant named SOPA, serving as the building block for privacy-preserving federated learning. We utilize SOPA to construct logistic regression classifiers for two datasets.
A new distributed key homomorphic PRF is at the core of our construction of OPA. This key component addresses shortcomings observed in previous works that relied on DDH and LWR in the work of Boneh et al. (CRYPTO, 2013), marking it as an independent contribution to our work. Moreover, we also present new distributed key homomorphic PRFs based on class groups or DCR or the LWR assumption.

<p>&nbsp;</p>


#### Eureka: A General Framework for Black-box Differential Privacy Estimators

Yun Lu, Malik Magdon-Ismail, Yu Wei and Vassilis Zikas

**Abstract:**

Differential privacy (DP) is a key tool in privacy-preserving data analysis. Yet it remains challenging for non-privacy-experts to prove the DP of their algorithms. We propose a methodology for domain experts with limited data privacy background to empirically estimate the privacy of an {\em arbitrary} mechanism. Our Eureka moment is a new link---which we prove---between the problems of DP parameter-estimation and Bayes optimal classifiers in ML, which we believe can be of independent interest. Our estimator uses this link to achieve two desirable properties: (1) {\em black-box}, i.e., it does not require knowledge of the underlying mechanism, and (2) it has a theoretically-proven accuracy, depending on the underlying classifier used, allowing plug-and-play use of different classifiers.

More concretely, motivated by the impossibility of the above task for unrestricted input domains (which we prove), we introduce a natural, application-inspired relaxation of DP which we term {\em relative DP}. Intuitively, relative DP defines a mechanism's privacy relative to an input set $T$, circumventing the above impossibility when $T$ is finite. Importantly, it preserves the key intuitive privacy guarantee of DP while enjoying a number of desirable DP properties---scalability, composition, and robustness to post-processing. We then devise a black-box poly-time $(\epsilon,\delta)$-relative DP estimator for {\em any} poly-size $T$---the first privacy estimator to support mechanisms with large {\em output} spaces while having tight accuracy bounds. As a result of independent interest, we generalize our theory to develop the {\em first} {\em Distributional Differential Privacy} (DDP) estimator.

We benchmark our estimator in a proof-of-concept implementation. First, using kNN as the classifier we show that our method (1) produces a tight, analytically computed $(\epsilon, \delta)$-DP trade-off of low-dimensional Laplace and Gaussian mechanisms---the first to do so, (2) accurately estimates the privacy spectrum of DDP mechanisms, and (3) can verify a DP mechanism's implementations, e.g., Sparse Vector Technique, Noisy Histogram, and Noisy max. \diff{Our implementation and experiments demonstrate the potential of our framework, and highlight its computational bottlenecks in estimating DP, e.g., in terms of the size of $\delta$ and the data dimensionality. Our second, neural-network-based instantiation makes a first step in showing that our method can be extended to mechanisms with high-dimensional outputs.}

<p>&nbsp;</p>

#### Metric Differential Privacy at the User-Level

Jacob Imola, Amrita Roy Chowdhury and Kamalika Chaudhuri


**Abstract:**

Metric differential privacy (DP) provides heterogeneous privacy guarantees based on a distance between the pair of inputs. It is a widely popular notion of privacy since it captures the natural privacy semantics for many applications (such as, for location data) and results in better utility than standard DP. However, prior work in metric DP has primarily focused on the \textit{item-level} setting where every user only reports a single data item. A more realistic setting is that of user-level DP where each user contributes multiple items and privacy is then desired at the granularity of the user's \textit{entire} contribution. In this paper, we initiate the study of metric DP at the user-level. Specifically, we use the earth-mover's distance ($d_\textsf{EM}$) as our metric to obtain a notion of privacy as it captures both the magnitude and spatial aspects of changes in a user's data.

We make three main technical contributions. First, we design two novel mechanisms under $d_\textsf{EM}$-DP to answer linear queries and item-wise queries. Specifically, our analysis for the latter involves a generalization of the privacy amplification by shuffling result which may be of independent interest. Second, we provide a black-box reduction from the general unbounded to bounded $d_\textsf{EM}$-DP (size of the dataset is fixed and public) with a novel sampling based mechanism. Third, we show that our proposed mechanisms can provably provide improved utility over user-level DP, for certain types of linear queries and frequency estimation.


<p>&nbsp;</p>



#### Armadillo: Robust Secure Aggregation for Federated Learning with Input Validation

Yiping Ma, Yue Guo, Harish Karthikeyan and Antigoni Polychroniadou

**Abstract:**

Secure aggregation protocols allow a server to compute the sum of inputs from a set of clients, without learning anything beyond what the sum implies. This paper introduces Armadillo, a secure aggregation protocol for federated learning applications with input validation and robustness. More specifically, Armadillo achieves input validation by bounding the norms of input vectors and simultaneously ensures robustness by providing guaranteed output delivery—a feature absent in the majority of prior works. Additionally, it ensures privacy against a malicious server corrupting a subset of participating clients. Moreover, Armadillo significantly improves the round complexity of ACORN-robust, recent work by Bell et al. (USENIX Security ’23), from logarithmic rounds (to the number of clients) to only 4 rounds; notably, this is fewer rounds than several existing non-robust protocols.
Our experiments demonstrate that Armadillo incurs only a 35% computational overhead while achieving robustness when compared with ACORN-detect (Bell et al., USENIX Security ’23) which offers only input validation but not robustness.

<p>&nbsp;</p>

#### Sublinear Distributed Product Checks on Replicated Secret-Shared Data over Z2k without Ring Extensions

Yun Li, Daniel Escudero, Yufei Duan, Zhicong Huang, Cheng Hong, Chao Zhang and Yifan Song

**Abstract:**

Multiple works have designed or used maliciously secure honest majority MPC protocols over Z2k using replicated secret sharing (e.g. Koti et al. USENIX’21, and the references therein). A recent trend in the design of such MPC protocols is to first execute a semi-honest protocol, and then use a check that verifies the correctness of the computation requiring only sublinear amount of communication in terms of the circuit size. The so-called Galois ring extensions are needed in order to execute such checks over Z2k, but these rings incur incredibly high computation overheads, which completely undermine any potential benefits the ring Z2k had to begin with.

In this work we revisit the task of designing sublinear distributed product checks on replicated secret-shared data over Z2k among three parties with an honest majority. We present a novel technique for verifying the correctness of a set of multiplication (in fact, inner product) triples, involving a sublinear cost in terms of the amount of multiplications. Most importantly, unlike previous works, our tools entirely avoid Galois ring extensions, and only require computation over rings of the form Z2l. In terms of communication, our checks are 3∼5× lighter than existing checks using ring extensions, which is already quite remarkable. However, our most noticeable improvement is in terms of computation: avoiding extensions allows our checks to be 17.7∼44.2× better than previous approaches, for many parameter regimes of interest. Our experimental results show that checking a 10 million gate circuit with the 3PC protocol from (Boyle et al., CCS’19) takes about two minutes, while our approach takes only 2.82 seconds.

Finally, our techniques are not restricted to the three-party case, and we generalize them to replicated secret-sharing with an arbitrary number of parties n. Even though the share size in this scheme grows exponentially with n, prior works have used it for n = 4 or n = 5 — or even general n for feasibility results — and our distributed checks also represent improvements in these contexts.

<p>&nbsp;</p>


#### Willow: Secure Aggregation with One-Shot Clients

James Bell-Clark, Adrià Gascón, Baiyu Li, Mariana Raykova and Phillipp Schoppmann

**Abstract:**

A common drawback of secure vector summation protocols in the single-server model is that they impose at least one synchronization point between all clients contributing to the aggregation. This results in clients waiting on each other to advance through the rounds of the protocol, leading to large latency even if the protocol is computationally efficient. In this paper we propose protocols in the single-server model where clients contributing data to the aggregation send a single message to the server in an asynchronous fashion, i.e., without the need for synchronizing their reporting time with any other clients. Our approach is based on a committee of parties, called decryptors, that aid in the computation. Decryptors run a setup phase before data collection starts, and a decryption phase once it ends. Unlike existing committee-based protocols such as Flamingo (S&P 2023), the cost for committee members can be made sub-linear in the number of clients, and does not depend on the size of the input data. Our experimental evaluation shows that our protocol, even while enabling asynchronous client contributions, is competitive with the state of the art protocols that do not have that feature in both computation and communication.

<p>&nbsp;</p>

#### PRIVUS: Census Privacy System

Alexander Nicita and Steven Bellovin

**Abstract:**

Privus is a Python toolkit for census privacy, instantiated for five countries alongside two privacy libraries respectively for differential privacy and synthetic data generated via GANs. The Privus toolkit is designed to be both modular and extensible such that other countries' national censuses and other privacy libraries can be seamlessly added to Privus. Demonstration experiments comparing the accuracy and privacy trade-offs of various hyper-parameters of each privacy library are included in this paper. Much of the research in this paper has been inspired by the contested decision to apply differential privacy to the 2020 United States census algorithms, driven by the belief that additional exploratory research and software systems development can be a helpful force for understanding the nuances of applying privacy-preserving technologies to national censuses.


<p>&nbsp;</p>

#### Privacy-Preserving Large Language Model Inference via GPU-Accelerated Fully Homomorphic Encryption

Leo de Castro, Daniel Escudero and Antigoni Polychroniadou

**Abstract:**

As large language models (LLMs) become more ubiquitous, security concerns regarding sensitive queries grow. Due to the complexities of deploying these models, LLM evaluation is often outsourced to a third-party cloud, which leaks the clients' queries to this external provider. These queries could contain sensitive information such as intellectual property, medical information, and proprietary data. Protecting this data while maintaining the LLM's functionality is a major privacy challenge.
Fully homomorphic encryption (FHE) presents a natural solution to this problem: simply encrypt the query and evaluate the LLM homomorphically on the cloud machine. The result remains encrypted and can only be learned by the client who holds the secret key. There are two barriers to this solution: (1) FHE operations do not easily support the LLM activation functions and (2) FHE implementations remain too slow to evaluate an LLM in a reasonable time.

In this work, we address both of these barriers to present a fully encrypted version of GPT-2 with forward pass times over $150\times$ faster than the CPU baseline.
This result builds on two main technical contributions. First, we present the first open-sourced implementation of GPU-accelerated FHE as an extension to the popular OpenFHE library, achieving roughly $200\times$ performance improvement for many critical functions including bootstrapping. Second, we present novel and extensive experimental analysis of approximations of LLM activation functions to maintain accuracy while achieving this performance. We run extensive benchmarks using the HellaSwag, LAMBADA and ARC datasets, and our results show that the accuracy/perplexity degradation with respect to ``out-of-the-box'' GPT-2 is minimal.

<p>&nbsp;</p>


#### Distributed Matrix Mechanism for Federated Learning using Packed Secret Sharing

Alexander Bienstock, Ujjwal Kumar and Antigoni Polychroniadou

**Abstract:**

Federated Learning (FL) has gained lots of traction recently, both in industry and academia. In FL, a machine learning model is trained using data from various end-users. Since such data can often be sensitive, a primary challenge in FL is providing privacy while still retaining utility of the model. Differential Privacy (DP) has become the main measure of privacy in the FL setting. DP comes in two flavors: central and local. In the former, a centralized server is trusted to receive the users' raw gradients from a training step, and then perturb their aggregation with some noise before releasing the next version of the model. In the latter (more private) setting, noise is applied on users' local devices, and only the aggregation of users' noisy gradients is revealed even to the server. Great strides have been made in increasing the privacy-utility trade-off in the central DP setting, by utilizing the so-called \emph{matrix mechanism}. However, progress has been mostly stalled in the local DP setting. In this work, we introduce the \emph{distributed} matrix mechanism to achieve the best-of-both-worlds; local DP and also better privacy-utility trade-off from the matrix mechanism. We do so by using efficient cryptographic techniques, namely \emph{packed secret sharing}. We perform experiments to assess the utility and concrete costs of our techniques.

<p>&nbsp;</p>




### Call for Contributed Talks

There will be a session of contributed talks.

We encourage submissions exploring a range of techniques and applications for privacy preserving machine learning, including, but not limited to:

- Multiparty computation
- Homomorphic encryption
- Differential privacy
- Adversarial machine learning
- Model stealing
- Fairness and accountability
- Federated Learning
- Synthetic data generation



**Submission deadline:**

Wednesday, June 12th, 2024, 11:59pm EST.

**Notifications:**
Friday, June 21st, 2024.

Submission server: [https://easychair.org/my/conference?conf=cryptoppml2024](https://easychair.org/my/conference?conf=cryptoppml2024)


Submissions must comply with the following rules:
- We encourage submitting full papers. Abstracts can also be provided.
- Submissions must be non-anonymous and must clearly specify which author will give the talk.
- The submission should provide sufficient detail to explain what the talk will be about.
- As the workshop does not have formal proceedings, we accept contributed talk proposals which correspond to papers that are under submission or already published elsewhere (parallel submissions are allowed).

The committee will follow COI standards according to the IACR policy. Contributed Talks Committee members are allowed to submit as well.

### Contributed Talks Committee

- [Carsten Baum](https://carstenbaum.com) (DTU)
- [Ran Cohen](https://cs.idc.ac.il/~ran/) (Reichman University)
- [Dana Dachman-Soled](https://user.eng.umd.edu/~danadach/) (University of Maryland)
- [Vipul Goyal](https://vipulgoyal.org) (NTT Research)
- [Peihan Miao](https://sites.google.com/view/peihanmiao/home) (Brown University)
- [Parker Newton](https://www.amazon.science/author/parker-newton) (Amazon)
- [Melek Önen](https://onen.eurecom.io) (EURECOM)
- [Dario Pasquini](https://pasquini-dario.github.io/me/) (George Mason University)
- [Katerina Sotiraki](https://sotiraki.com) (Yale University)
- [Ni Trieu](https://nitrieu.github.io) (Arizona State University)
- [Vassilis Zikas](https://www.cs.purdue.edu/homes/vzikas/) (Purdue University)








<!---
- [Gilad Asharov](http://www.cs.biu.ac.il/~asharog) (Bar-Ilan University) -- organizer
- [Hubert Chan](https://i.cs.hku.hk/~hubert/) (University of Hong Kong)
- [Ran Cohen](https://cs.idc.ac.il/~ran/) (Reichman University)
- [Bernardo David](https://www.bmdavid.com) (IT University of Copenhagen)
- [Daniel Escudero](https://www.escudero.me) (JPM AI Research)
- Adrià Gascón (Google)
- [Abhishek Jain](https://www.cs.jhu.edu/~abhishek/) (Johns Hopkins University)
- [Parker Newton](https://www.amazon.science/author/parker-newton) (Amazon)
- [Rafail Ostrovsky](http://web.cs.ucla.edu/~rafail/) (UCLA) -- organizer
- [Antigoni Polychroniadou](https://antigonip.github.io/) (JP Morgan AI Research) -- organizer
- [Adam Sealfon](https://asealfon.github.io) (Google Research)
- [Yifan Song](https://crypto-song.github.io) (Tsinghua University)
- [Katerina Sotiraki](https://sotiraki.com) (UC Berkeley)
- [Akira Takahashi](https://akiratk0355.github.io) (University of Edinburgh)
--->

<!---
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
--->


### Organizers

- [Gilad Asharov](http://www.cs.biu.ac.il/~asharog) (Bar-Ilan University)
- Adrià Gascón (Google)
- [Harish Karthikeyan](https://sites.google.com/view/kharish/home) (JP Morgan AI Research)
- [Rafail Ostrovsky](http://web.cs.ucla.edu/~rafail/) (UCLA)
- [Antigoni Polychroniadou](https://antigonip.github.io/) (JP Morgan AI Research)

Contact email: [CRYPTO.PPML@gmail.com](mailto:CRYPTO.PPML@gmail.com)
