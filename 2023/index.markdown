---
title: Privacy-Preserving Machine Learning Workshop 2023
headerTitle: PPML 2023
headerInfoDate: August 20, 2023
layout: default
redirect_from: "/"
---

## Affiliated Event: The 5th Privacy-Preserving Machine Learning Workshop 2023

### About

Artificial intelligence is progressing rapidly. Systems based on machine learning algorithms approach and sometimes even exceed the abilities of human experts. Applications of machine learning involve almost every aspect of our lives, from health care and DNA sequence classification, to financial markets, computer networks and many more. Machine learning algorithms perform better when being exposed to more and more data, but such data is not always accessible due to privacy constraints. Can we train machine learning algorithms on confidential data without ever being exposed to it? Can my model classify your sample without ever seeing it?

The workshop aims to strengthen collaborations among the machine learning and cryptography communities. The scope includes privacy preserving techniques for training, inference, and disclosure. The workshop will consist of few invited talks, together with contributed talks.

### Date of Event
August 20, 2023 (Sunday)

### Registration
The workshop is an affiliated event of [CRYPTO 2023](https://crypto.iacr.org/2023/). To register to the workshop, please register to CRYPTO 2023, and mark in the registration form the PPML workshop.


### Location

#### University of Santa Barbara, California

The workshop will be in-person.

### Invited Speakers
- [Janardhan (Jana) Kulkarni](https://www.microsoft.com/en-us/research/people/jakul/) (Microsoft Research)
- [Sewoong Oh](https://homes.cs.washington.edu/~sewoong/) (University of Washington & Google)
- [Mariana Raykova](https://marianapr.github.io) (Google)
- [Kunal Talwar](http://kunaltalwar.org) (Apple)

### (Tentative) Program


The time displayed is in Pacific Daylight Time (GMT-7).


<div markdown="0">
    {% include program.html programURL='2023/assets/program.json' %}
</div>


<p>&nbsp;</p>

### Abstracts -- Invited Speakers

#### **Kunal Talwar:** Cryptographic Primitives for Private Federated Learning

**Abstract:**
Private machine learning algorithms often exhibit a large gap between what is achievable with and without a trusted curator. This motivates the problem of designing simple primitives that are on the one hand, rich enough to enable a large class of differentially private algorithms, and on the other, simple enough to be implementable scalably and reliably. In this talk, I will talk about a new primitive of this kind, that allows for efficient implementation of several commonly used algorithms, and allows for privacy accounting that is close to that in the central setting. I will discuss a system architecture that implements this primitive. Time permitting, I will also talk about Euclidean norm verification in this setting, and discuss some open questions.

#### **Sewoong Oh:** Unleashing the Power of Randomization in Auditing Differentially Private ML

**Abstract:**
Standard statistical approaches for auditing whether a private training algorithm satisfies the claimed level of privacy requires training many models, which is computationally intense. Under the standard definition of differential privacy, we are fundamentally limited by the sample dependence of the Bernoulli confidence intervals involved. To break this barrier, it requires rethinking differential privacy from first principles. To this end, we introduce Lifted Differential Privacy that, while equivalent to differential privacy, allows the privacy auditor to search over a larger space of counterexamples. We exploit this lifted search space in our novel design of audits that inject multiple canary examples. Together with a novel confidence interval that exploits the (lack of) correlation between those test statistics, we showcase the significant gain in sample complexity both theoretically and empirically.

This is based on joint work with Krishna Pillutla, Galen Andrew, Peter Kairouz, H. Brendan McMahan, and Alina Oprea.

[https://arxiv.org/abs/2305.18447](https://arxiv.org/abs/2305.18447)

<p>&nbsp;</p>

#### **Mariana Raykova:** Advances (and Challenges) in Secure Aggregation

**Abstract:**
Systems for private analytics and federated learning rely on aggregation of distributed data generated across many user devices. In this talk we will discuss cryptographic techniques for distributed secure aggregation in a few different models and the applications that have adopted them. We will highlight some new technical results in this area including how we can use lattices instead of PRGs to improve efficiency and how we can achieve input norm bounding guarantees in the setting of single server aggregation. We will discuss the challenges of differentially private aggregation of sparse inputs in both single and multi-server settings and we will present a new construction in the two server model.

<p>&nbsp;</p>


### Contributed Talks

#### Scalable Incrementally Verifiable Computation with Applications to Zero-Knowledge Proof-of-Learning

Kasra Abbaszadeh, Christodoulos Pappas, Dimitrios Papadopoulos and Jonathan Katz

**Abstract**
Proof-of-learning enables the owner of a machine-learning model to prove the quality and correctness of the training process. The only known proof-of-learning for neural networks [Jia et al., IEEE S&P 2021] is based on re-execution, i.e., the verifier must re-run a subset of gradient descent iterations in order to be convinced. However, this does not provide rigorous security guarantees, makes the proof size and the verifier's work proportional to the number of iterations, and violates the privacy of models and datasets. In this work, we address these limitations by presenting Kaizen, a zero-knowledge proof-of-learning for neural networks.

Kaizen draws inspiration from cryptographic schemes for incrementally verifiable computation (IVC), which allow a prover to recursively prove the correctness of an iterative computation with a succinct verification overhead independent of the number of iterations. Unfortunately, known IVC constructions do not scale to large computations, such as gradient descent, because of the prohibitive memory demands and time overhead of the proving algorithm. In this work, we introduce a new approach for scalable IVC based on recursive composition of sumcheck-based interactive proofs. Moreover, we present an interactive proof system for gradient descent with a concretely efficient prover overhead, which We then use to instantiate our IVC for Kaizen.

Benchmarks indicate that our construction can effectively support neural networks with 20 billion gates gradient descent circuit size, 200 × larger than the state-of-art limitation while achieving an overhead of 0.083μs per gate--a 14× improvement over prior works. Independent of the number of iterations, the proof size is only 900KB.

<p>&nbsp;</p>

#### Flamingo: Multi-Round Single-Server Secure Aggregation with Applications to Private Federated Learning

Yiping Ma, Jess Woods, Sebastian Angel, Antigoni Polychroniadou and Tal Rabin

**Abstract**
This paper introduces Flamingo, a system for secure aggregation of data across a large set of clients. In secure aggregation, a server sums up the private inputs of clients and obtains the result without learning anything about the individual inputs beyond what is implied by the final sum. Flamingo focuses on the multi-round setting found in federated learning in which many consecutive summations (averages) of model weights are performed to derive a good model. Previous protocols, such as Bell et al. (CCS ’20), have been designed for a single round and are adapted to the federated learning setting by repeating the protocol multiple times. Flamingo eliminates the need for the per-round setup of previous protocols, and has a new lightweight dropout resilience protocol to ensure that if clients leave in the middle of a sum the server can still obtain a meaningful result. Furthermore, Flamingo introduces a new way to locally choose the so-called client neighborhood introduced by Bell et al. These techniques help Flamingo reduce the number of interactions between clients and the server, resulting in a significant reduction in the end-to-end runtime for a full training session over prior work.
We implement and evaluate Flamingo and show that it can securely train a neural network on the (Extended) MNIST and CIFAR-100 datasets, and the model converges without a loss in accuracy, compared to a non-private federated learning system.

<p>&nbsp;</p>

#### Privacy-Preserving Tree-Based Inference with TFHE

Jordan Frery, Andrei Stoian, Roman Bredehoft, Luis Montero, Celia Kherfallah, Benoit Chevallier-Mames and Arthur Meyre

**Abstract**
Fully Homomorphic Encryption is a powerful tool for processing encrypted data and is particularly adapted to the type of programs that are common in machine learning (ML). On tabular data, tree-based ML models obtain state-of-the-art results, are more robust, and are easier to use and deploy than neural networks. We introduce an implementation of privacy-preserving decision tree evaluation based on the TFHE scheme, leveraging optimized representations for encrypted integer and TFHE’s powerful programmable boostrapping mechanism. Our technique is applicable to decision trees, random forests, and gradient boosted trees. We demonstrate our approach on popular datasets and show that accuracy on encrypted data is very close the one obtained by the same models applied to clear data, while latency is competitive with the state of the art.

<p>&nbsp;</p>

#### Private, Federated Ensemble Modeling for Financial Anomaly Detection (US-UK PETs Challenge)

Kevin McCarthy, Dimitar Jetchev, Sergiu Carpov, Mariya Georgieva Belorgey, Marius Vuille and Florian Duraffourg

**Abstract**

We propose a scalable, privacy-preserving federated architecture leveraging secure Multi-Party Computation (MPC) for high-precision statistical analysis and Machine Learning (ML). The solution provides information-theoretic security using a novel MPC framework that is optimized for ML applications like anomaly detection that require high numerical precision without compromising data privacy and efficiency.

We present results, workflows and benchmarks solving for the highly visible US-UK PETs Challenge in collaboration with SWIFT.

The following steps provide a high-level outline of the proposed ensemble model
process to improve the anomalous transaction detection model’s AUPRC. The solution is powered by a scalable, secure and programmable data science platform that is easy to deploy and use without cryptographic expertise.

• SWIFT uses XGBoost classification on its private data to compute a feature that models the probability of an anomalous transaction.

• SWIFT and Bank data are securely joined using Private Set Intersection (PSI) to link transactions to accounts. This is performed twice with all participating parties using (1) Ordering Account ID and (2) Beneficiary Account ID, thus enabling the use of features specific to both accounts from the Banks’ data.

• Additional features are generated from the joined dataset using MPC to calculate matches between SWIFT or Bank data (e.g. equality of ordering name in both datasets). When utilized, the additional features tested improve the AUPRC by ≈17% on the synthetic data (from 0.7821 to 0.9110).

• Using the joined data and the additional features, a global logistic regression model is trained in MPC by the participating parties with the features: probability of anomalous transaction, flag fields from Bank data (for Ordering and Beneficiary), matches between account details. The models tested incorporating all attributes improve the baseline AUPRC by >50% (from 0.5998 to 0.9110) on the synthetic data.

• The trained global model weights remain secure as secret shares across the participating parties and are computed in MPC for logistic regression inference to detect anomalous transactions.

<p>&nbsp;</p>

#### Bounding the Accuracy Loss for Graphical Model Based Synthetic Data Generation in Privacy-Preserving Machine Learning

Yvonne Zhou, Ivan Brugere, Dana Dachman-Soled, Danial Dervovic, Mingyu Liang, Antigoni Polychroniadou and Min Wu

**Abstract**
The growing use of machine learning has raised concerns about the privacy risk to an individual whose data is used in the training dataset. To prevent leakage of sensitive data, we consider using differentially-private (DP), synthetic training data instead of real training data to train the machine learning (ML) model. This approach eliminates the trust assumption on the party performing the ML training, which is implicit in DP ML solutions that train on the real data and achieve DP via an in-processing or post-processing step. A leading practical approach for generating DP synthetic data is known as Private-Probability Graphical Model (PGM). We explore the applicability of Private-PGM to common classification models by analyzing the impact on accuracy when training on data generated by Private-PGM. We present rigorous upper bounds on the loss in quality of a logistic regression model trained on real versus Private-PGM synthetic data, where loss is measured as cross-entropy loss. Our results imply that when the dataset size is sufficiently large, Private-PGM can be used to train logistic regression models privately, while sustaining a high level of accuracy. Experimental results empirically confirm our analysis on two public datasets.

<p>&nbsp;</p>

#### Smooth Lower Bounds for Differentially Private Algorithms via Padding-and-Permuting Fingerprinting Codes

Naty Peter, Eliad Tsfadia and Jonathan Ullman

**Abstract**
Fingerprinting arguments, first introduced by Bun, Ullman, and Vadhan [BUV14], are the most widely used method for establishing lower bounds on the sample complexity or error of approximately differentially private (DP) algorithms. Still, there are many problems in differential privacy for which we don’t know suitable lower bounds, and even for problems that we do, the lower bounds are not smooth, and become vacuous when the error is larger than some threshold.

In this work, we present a simple method to generate smooth lower bounds that establish strong lower bounds on the sample complexity of differentially private algorithms satisfying very weak accuracy. We illustrate the applicability of this method by providing new lower bounds in various settings:

1. A tight lower bound for DP averaging in the low-accuracy regime, which in particular implies a new lower bound for the private 1-cluster problem introduced by Nissim, Stemmer, and Vadhan [NSV16].

2. A lower bound on the additive error of DP algorithms for approximate k-means clustering, as a function of the multiplicative error, which is tight for a constant multiplication error.

3. A lower bound for estimating the top singular vector of a matrix under DP in low-accuracy regimes, which is a special case of the DP subspace estimation problem studied by Singhal and Steinke [SS21b].

Our main technique is to apply a padding-and-permuting transformation to a fingerprinting code. However, rather than proving our results using a black-box access to an existing fingerprinting code (e.g., Tardos’ code [Tar08]), we develop a new fingerprinting lemma that is stronger than those of Dwork et al. [DSS+15] and Bun, Steinke, and Ullman [BSU17], and prove our lower bounds directly from the lemma. Our lemma, in particular, gives a simpler fingerprinting code construction with optimal rate (up to polylogarithmic factors) that is of independent interest.

<p>&nbsp;</p>

#### Sparsity-Preserving Differentially Private Training

Badih Ghazi, Yangsibo Huang, Pritish Kamath, Ravi Kumar, Pasin Manurangsi, Amer Sinha and Chiyuan Zhang

**Abstract**
As the use of large embedding models in recommendation systems and language applications increases, concerns over user data privacy have also risen. DP-SGD, a training algorithm that combines differential privacy with stochastic gradient descent, has been the workhorse in protecting user privacy without compromising model accuracy by much. However, applying DP-SGD naively to embedding models can destroy gradient sparsity, leading to reduced training efficiency. To address this issue, we present two new algorithms, DP-FEST and DP-AdaFEST, that preserve gradient sparsity during private training of large embedding models. Our algorithms achieve substantial reductions (10^6 times) in gradient size, while maintaining comparable levels of accuracy, on benchmark real-world datasets.

<p>&nbsp;</p>

#### Private Time-Series Queries from Function Secret Sharing with Applications to Machine Learning

Emma Dauterman, Mayank Rathee, Raluca Popa and Ion Stoica

**Abstract**
Applications today rely on the cloud for storing, querying, and training models on time-series data. While outsourcing storage is convenient, this data is often sensitive, making data breaches a serious concern. In this talk, I will show how to support aggregate queries on time-series data with strong privacy guarantees: I will demonstrate how to provide multi-predicate filtering while protecting data contents, query filter values, and search access patterns and providing malicious security in the three-party honest-majority setting. Oblivious RAM and generic multiparty computation are natural choices for private queries, but both of these are prohibitively expensive in our setting due to the number of roundtrips and communication overhead, respectively. To minimize both, I will show how to use function secret sharing to evaluate predicates. I will propose new techniques for applying function secret sharing to our setting where there are malicious parties, secret inputs, and chained predicates. Finally, I will explain how to use these techniques to filter a set of data records for private linear model training.

This talk is based on an IEEE Security & Privacy 2022 paper with co-authors Mayank Rathee, Raluca Ada Popa, and Ion Stoica. In this talk, I plan to highlight how private aggregation queries can be a building block for training linear models. Prior work has shown how systems for computing private sums can also be used for training linear models. I will show how this observation enables us to privately select records to use to privately train a linear model.

<p>&nbsp;</p>

#### Proof of Compliance for Anonymous, Unlinkable Messages

Mingxun Zhou, Giulia Fanti and Elaine Shi

**Abstract**
Anonymous and unlinkable messaging systems are susceptible to malicious activities in the absence of proper regulation. For instance, malicious users can manipulate the outcome of training models in shuffling-based federated learning systems or engage in illicit practices like money laundering within anonymous payment systems, all while evading detection. Although various Zero-Knowledge Proof (ZKP) systems have been employed to establish certain forms of compliance verification, proving compliance rules that are defined on the entire collection of a user’s messages poses a challenge without compromising anonymity and unlinkability.

To address this challenge, we propose an efficient protocol called Shuffle-ZKP, which enables users within an anonymous and unlinkable messaging system to collectively prove their compliance with such rules. Our protocol leverages a distributed and private set equality check protocol along with generic Non-Interactive Zero-Knowledge (NIZK) proof systems. We provide the theoretical analysis and implement our protocol across multiple use cases with an open-sourced ZKP library. Empirical results show that, in our protocol, each user is able to generate the necessary proof within 0.2-40 seconds, depending on the specific use case, while the additional communication overhead remains under 3KB. Furthermore, the protocol shows computational
efficiency on the server side, as the verification algorithm only requires a few seconds to handle thousands of users.

<p>&nbsp;</p>

#### Private web search with Tiptoe

Alexandra Henzinger, Emma Dauterman, Henry Corrigan-Gibbs and Nickolai Zeldovich


**Abstract**
This talk will present Tiptoe, the first system for private search that can operate at Internet scale. With Tiptoe, a client can perform a full-text search (e.g., “Hikes in Santa Barbara”, “What are the causes of neck pain”, or “How to find a lawyer”), all while revealing no information---in a strong, cryptographic sense---about its search query to the search engine’s servers. The Tiptoe search engine answers these queries in the span of seconds: for example, searching over 360 million web pages incurs 14.7 MiB of client-server communication and 2.8 seconds of end-to-end latency.

To provide private web search at a comparatively low cost, Tiptoe relies on a careful co-design of neural information-retrieval algorithms with fast cryptographic protocols. In particular, Tiptoe first uses modern machine-learning techniques to reduce the problem of private full-text search to private nearest-neighbor search, and then Tiptoe implements private nearest-neighbor search using a new, high-throughput homomorphic encryption scheme. With this design, Tiptoe is extensible: beyond text search, it also supports private image search and, with only minor changes, it can support private search over audio, video, and more.

<p>&nbsp;</p>

#### Practical Lattice-based Private Stream Aggregation and Application to Federated Learning

Jinyeong Seo, Yongsoo Song, Hyukki Lee, Yongwoo Oh, Donghoon Yoo and Hanyul Ryu

**Abstract**
Private Stream Aggregation (PSA) is a cryptographic primitive which securely computes the sum of data aggregated from multiple parties. In this work, we design a new lattice-based PSA scheme with various advantages over the prior work. Our construction is very simple, achieves a stronger security notion, makes less assumptions on the aggregator, and enjoys better performance in terms of both space and time complexity.
For example, the encryption of 2,048 values in a single ciphertext takes less than 0.01 seconds, while the aggregation of ciphertexts from 10 parties takes about 0.02 seconds.
We provide a proof-of-concept implementation of our scheme, apply it to an open-source federated learning library and demonstrate the concrete performance. Our experiments show that the secure aggregation of 3.7M features from 10 parties takes about 19, 34 and 35 seconds in encryption, communication and aggregation, respectively while the local training requires about 3 seconds.

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

Saturday, July 15th, 2023, 11:59pm EST.

**Notifications:**
Friday, July 21st, 2023.

Submission server: [https://easychair.org/conferences/?conf=cryptoppml2023](https://easychair.org/conferences/?conf=cryptoppml2023)

Submissions must comply with the following rules:
- We encourage submitting full papers. Abstracts can also be provided.
- Submissions must be non-anonymous and must clearly specify which author will give the talk.
- The submission should provide sufficient detail to explain what the talk will be about.
- As the workshop does not have formal proceedings, we accept contributed talk proposals which correspond to papers that are under submission or already published elsewhere (parallel submissions are allowed).

The committee will follow COI standards according to the IACR policy. Contributed Talks Committee members are allowed to submit as well.

### Contributed Talks Committee
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
- [Rafail Ostrovsky](http://web.cs.ucla.edu/~rafail/) (UCLA)
- [Antigoni Polychroniadou](https://antigonip.github.io/) (JP Morgan AI Research)

Contact email: [CRYPTO.PPML@gmail.com](mailto:CRYPTO.PPML@gmail.com)
