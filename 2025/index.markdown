---
title: Privacy-Preserving Machine Learning Workshop 2025
headerTitle: PPML 2025
headerInfoDate: August 17, 2025
layout: default
redirect_from: "/"
---

## Affiliated Event: The 7th Privacy-Preserving Machine Learning Workshop 2025

### About

Artificial intelligence is progressing rapidly. Systems based on machine learning algorithms approach and sometimes even exceed the abilities of human experts. Applications of machine learning involve almost every aspect of our lives, from health care and DNA sequence classification, to financial markets, computer networks and many more. Machine learning algorithms perform better when being exposed to more and more data, but such data is not always accessible due to privacy constraints. Can we train machine learning algorithms on confidential data without ever being exposed to it? Can my model classify your sample without ever seeing it?

The workshop aims to strengthen collaborations among the machine learning and cryptography communities. The scope includes privacy preserving techniques for training, inference, and disclosure. The workshop will consist of few invited talks, together with contributed talks.

### Date of Event
August 17, 2025 (Sunday)

### Registration
The workshop is an affiliated event of [CRYPTO 2025](https://crypto.iacr.org/2025/). To register to the workshop, please register to CRYPTO 2025, and mark in the registration form the PPML workshop.


### Location

The workshop will be in-person.



### Invited Speakers
- Divya Gupta (Microsoft Research)
- Gautam Kamath (University of Waterloo)
- Sumanth Dathathri (Deep Mind)

### (Tentative) Program


The time displayed is in Pacific Daylight Time (GMT-7).

<div markdown="0">
    {% include program.html programURL='2025/assets/program.json' %}
</div>

<p>&nbsp;</p>


### Contributed Talks

#### TACITA: Threshold Aggregation without Client Interaction

Varun Madathil, Arthur Lazzaretti, Zeyu Liu, Charalampos Papamanthou

**Abstract:**

Secure aggregation enables a central server to compute the sum of client inputs without learning any individual input, even in the presence of dropouts or partial participation. This primitive is fundamental to privacy-preserving applications such as federated learning, where clients collaboratively train models without revealing raw data.
We present a new secure aggregation protocol, TACITA, in the single-server setting that satisfies four critical properties simultaneously: (1) one-shot communication from clients with no per-instance setup, (2) constant-size communication per client, independent of the number of participants per-instance, (3) robustness to client dropouts, and (4) no reliance on designated or persistent committees.
TACITA relies on a novel cryptographic primitive we introduce and realize: succinct multi-key linearly homomorphic threshold signatures (MKLHTS), which enables verifiable aggregation of client-signed inputs with constant-size signatures. To encrypt client inputs, we also adapt the Silent Threshold Encryption (STE) scheme of Garg et al. (CRYPTO 2024) to support ciphertext-specific decryption and additive homomorphism.
We formally prove security in the Universal Composability framework and demonstrate practicality through an open-source proof-of-concept implementation, showing our protocol achieves scalability without sacrificing efficiency or requiring new trust assumptions.

<p>&nbsp;</p>

#### Non-Interactive Verifiable Aggregation

Ojaswi Acharya, Suvasree Biswas, Weiqi Feng, Adam O'Neill, Arkady Yerukhimovich

**Abstract:**

Consider a weak analyst that wishes to outsource data collection and computation of aggregate statistics over a potentially large population of (also weak) clients to a powerful server. For flexibility and efficiency, we consider public-key and non-interactive protocols, meaning the clients know the analyst’s public key but do not share secrets, and each client sends at most one message. Furthermore, the final step should be silent, whereby the analyst simply downloads the (encrypted) result from the server when needed. To capture this setting, we define a new primitive we call Non-Interactive Verifiable Aggregation (NIVA).
We require both privacy and robustness for a NIVA protocol to be deemed secure. Namely, our security notion for NIVA ensures that the clients’ data remains private to both the server and the analyst, while also ensuring that malicious clients cannot skew the results by providing faulty data.

We propose a secure NIVA protocol, which we call PEAR (for Private, Efficient, Accurate, Robust), which can validate inputs according to any NP validity rule. PEAR is based on a novel combination of functional encryption for inner-products (Abdalla et al., PKC 2015) and fully-linear probabilistically-checkable proofs (Boneh et al., Crypto 2019). We emphasize that PEAR is non-interactive, public-key, and makes black-box use of the underlying cryptographic primitives.
Additionally, we devise substantial optimizations of PEAR for practically-relevant validity rules. Finally, we implement PEAR to show feasibility for such validity rules, conducting a thorough performance evaluation. In particular, we compare PEAR to two more straightforward or “off-the-shelf” NIVA protocols and show performance gains, demonstrating the merit of our new approach. The bottleneck in our protocol comes from the fact that we require the underlying IPFE scheme to be “unrestricted” over a large field. As more efficient such schemes are developed, they can be immediately plugged into PEAR for further gains.

<p>&nbsp;</p>

#### On Design Principles for Private Adaptive Optimizers
Arun Ganesh, Brendan McMahan, Abhradeep Thakurta

**Abstract:** 

The spherical noise added to gradients in differentially private (DP) training undermines the performance of adaptive optimizers like AdaGrad and Adam, and hence many recent works have proposed algorithms to address this challenge. However, the empirical results in these works focus on simple tasks and models and the conclusions may not generalize to model training in practice. In this paper we survey several of these variants, and develop better theoretical intuition for them as well as perform empirical studies comparing them. We find that a common intuition of aiming for unbiased estimates of second moments of gradients in adaptive optimizers is misguided, and instead that a simple technique called scale-then-privatize (which does not achieve unbiased second moments) has more desirable theoretical behaviors and outperforms all other variants we study on a small-scale language model training task. We additionally argue that scale-then-privatize causes the noise addition to better match the application of correlated noise mechanisms which are more desirable to use in practice.

<p>&nbsp;</p>

#### SHARE: computational differential privacy in the SHuffle-model using Additive Randomized Encodings

Jaspal Singh, Yu Wei, Vassilis Zikas

**Abstract:** 

<p>
Achieving distributed differential privacy (DP) without a trusted central party is of great interest in both theory and practice. The shuffle model has recently emerged as a compelling approach. Unlike the local DP model, where users directly send randomized data to the analyzer, the shuffle model introduces an intermediate, trusted shuffler that randomly permutes the already-randomized messages before forwarding them. A key appeal of this model is its privacy amplification effect, which enables a broader class of DP computations in distributed settings. However, despite these advantages, a substantial gap remains between what can be computed in the central model and the shuffle model, typically in the non-interactive setting, which is particularly attractive for deployment due to its simplicity and flexibility.

In this work, we take a step toward closing this gap by initiating the study of computational shuffle DP protocols in the non-interactive setting. We approach this by two folds. First, we make a mild relaxation of the privacy requirement — from protecting against arbitrary adversaries to protecting against all polynomial-time adversaries, i.e., transitioning from information-theoretic DP to computational DP. More importantly, we present a novel framework that transforms any central DP mechanism into a computational shuffle DP protocol, building on additively randomized encodings (ARE), a recently proposed cryptographic primitive by Halevi et al. (Crypto '23). As part of our construction, we introduce a new ARE scheme that distributes computational load more evenly across all clients, which might be of independent interest.

Our computational shuffle DP protocols can support any mechanism achievable in the central model. For several key DP tasks — including selection, parity, and distinct element estimation — our computational shuffle DP protocols achieve significantly lower sample complexity than existing information-theoretic shuffle DP protocols, overcoming known lower bounds in the shuffle model. For a broad class of mechanisms, we achieve near-optimal client bandwidth (up to polylogarithmic factors).
</p>

<p>&nbsp;</p>

#### Adapting to Linear Separable Subsets with Large-Margin in Differentially Private Learning

Erchi Wang, Yuqing Zhu, Yuxiang Wang

**Abstract:** 

<p>
This paper studies the problem of differentially private empirical risk minimization (DP-ERM) for binary linear classification.We obtain an efficient $(\varepsilon,\delta)$-DP algorithm with an empirical zero-one risk bound of $\tilde{O}\left(\frac{1}{\gamma^2\varepsilon n} + \frac{|S_{\mathrm{out}}|}{\gamma n}\right)$ where $n$ is the number of data points, $S_{\mathrm{out}}$ is an arbitrary subset of data one can remove and $\gamma$ is the margin of linear separation of the remaining data points (after $S_{\mathrm{out}}$ is removed). Here, $\tilde{O}(\cdot)$ hides only logarithmic terms. In the agnostic case, we improve the existing results when the number of outliers is small. Our algorithm is highly adaptive because it does not require knowing the margin parameter $\gamma$ or outlier subset $S_{\mathrm{out}}$. We also derive a utility bound for the advanced private hyperparameter tuning algorithm.
</p>

<p>&nbsp;</p>

#### The Normal Distributions Indistinguishability Spectrum and its Application to Privacy-Preserving Machine Learning

Yun Lu, Malik Magdon-Ismail, Yu Wei, Vassilis Zikas

**Abstract:** 

<p>
Big data analytics often use randomized sketching and aggregation algorithms to make processing high-dimensional data tractable. Thus, towards achieving (differentially) private (DP) machine learning (ML), one might ask: Can we leverage this randomization in privacy-preserving ML algorithms? This question has been well studied for specific cases such as subsampling and count sketches. In this work, we take a step toward tackling a broader class of mechanisms: motivated by the central role of the Central Limit Theorem (and thus, the Gaussian distribution) in big data scenarios, we ask:
(How) can we improve the utility of DP mechanisms for randomized ML queries when their output is a Gaussian, by leveraging the randomness of the query itself?
Towards a (positive) answer, our starting point is proving the Normal Distributions Indistinguishability Spectrum lemma (in short, NDIS Lemma), a theoretical result with several practical implications. In a nutshell, NDIS is a closed-form analytic computation of the hockey-stick divergence between an arbitrary pair of multivariate Gaussians, parameterized by exp(ε). The importance of the NDIS lemma lies in that (1) it yields efficient estimators for the above divergence, and (2) it allows us to analyze DP mechanisms with normally distributed outputs, as well as more general mechanisms by leveraging their behavior on large inputs.
We apply the NDIS lemma to derive DP mechanisms for queries with normally distributed outputs — i.e., Gaussian Random Projections (RP) — and for more general queries — i.e., Ordinary Least Squares (OLS). Both RP and OLS are highly relevant in data analytics. Compared to existing techniques, our new DP mechanisms achieve superior privacy-utility trade-offs for any privacy budget (ε, δ) by leveraging the randomness of the underlying algorithms. We then apply the NDIS lemma to a data-driven DP notion — in particular, relative DP introduced by Lu et al. (S&P 2024). Here, as we show, our method identifies, for the first time in any such data-driven notion, the range of (ε, δ) for which no additional noise is needed. The superiority of our resulting mechanisms is proven analytically and confirmed by extensive empirical results.
</p>

<p>&nbsp;</p>

#### Latest Trends and Results in PPML using FHE

Ahmad Al Badawi, Andreea Alexandru, Yuriy Polyakov

**Abstract:** 

<p>
There have been multiple recent advances in the state of the art of FHE for PPML. Many new PPML implementation results have appeared using both OpenFHE and other FHE libraries. A topic of special interest has been the implementation of privacy-preserving LLM inference using FHE. The goals of this talk are to provide an overview of latest FHE advances (with focus on bootstrapping and large matrix arithmetic), recent PPML applications implemented using OpenFHE, and latest LLM inference implementations.
</p>

<p>&nbsp;</p>

#### Orion: A Fully Homomorphic Encryption Framework with an Application to Deep Learning Recommendation Models

Karthik Garimella, Austin Ebel, Gabrielle De Micheli, Brandon Reagen

**Abstract:** 

<p>
We present two works that advance the state-of-the-art in privacy-preserving deep learning using Fully Homomorphic Encryption (FHE).
First, we introduce Orion (best paper award at ASPLOS 2025), a fully-automated framework that translates deep neural networks written in PyTorch into efficient FHE programs. Orion addresses several fundamental challenges in FHE programming such as data packing, non-linear activation approximation, bootstrap placement, and scale management. In detail, Orion introduces a single-shot multiplexed packing strategy that enables arbitrary convolutions (reducing multiplicative depth by 2× and rotations by up to 6.41×) and leverages the double-hoisted baby-step giant-step matrix-vector product to reduce both the complexity and count of ciphertext rotations. Furthermore, Orion automatically places bootstraps within a network without requiring any user input. Orion achieves a 2.38× speedup over prior work on ResNet-20 and scales to networks as large as ResNet-50 on ImageNet. Using Orion, we run the first high-resolution FHE object detection using a YOLO-v1 model with 139 million parameters with minimal code changes.
Second, we demonstrate the practical deployment of Orion through HE-LRM, the first FHE-based Deep Learning Recommendation Model. HE-LRM tackles the unique challenges of recommendation systems, which process both dense and sparse features through large embedding tables. We develop compressed embedding lookups that improve upon prior work by 77× and introduce a multi-embedding packing strategy enabling a 44 million parameter embedding lookup under FHE. Our system successfully performs encrypted inference on both the UCI Heart Disease and Criteo click-through datasets and achieves a latency of 24 and 227 seconds, respectively. HE-LRM is currently under submission.
Together, these works bridge the gap between FHE theory and real-world machine learning applications.
</p>

<p>&nbsp;</p>

#### Cinnamon: A Framework for Scale-Out Encrypted AI

Siddharth Jayashankar, Edward Chen, Tom Tang, Wenting Zheng, Dimitrios Skarlatos

**Abstract:** 
Fully homomorphic encryption (FHE) is a promising cryptographic solution that enables computation on encrypted data, but its adoption remains a challenge due to steep performance overheads. Although recent FHE architectures have made valiant efforts to narrow the performance gap, they not only have massive monolithic chip designs but also only target small ML workloads. We present Cinnamon, a framework for accelerating state-of-the-art ML workloads that are encrypted using FHE. Cinnamon accelerates encrypted computing by exploiting parallelism at all levels of a program, using novel algorithms, compilers, and hardware techniques to create a scale-out design for FHE as opposed to a monolithic chip design. Our evaluation of the Cinnamon framework on small programs shows a 2.3× improvement in performance compared to prior state-of-the-art designs. Further, we use Cinnamon to show for the first time the scalability of large ML models such as the BERT language model in FHE. Cinnamon achieves a speedup of 36,600× compared to a CPU bringing down the inference time from 17 hours to 1.67 seconds thereby enabling new opportunities for privacy-preserving machine learning. Finally, Cinnamon's parallelization strategies and architectural extensions reduce the required resources per-chip leading to a 5× and 2.68× improvement in performance-per-dollar compared to state-of-the-art monolithic and chiplet architectures respectively.

<p>&nbsp;</p>

#### Non-Interactive and Publicly Verifiable Zero Knowledge Proof for Fair Decision Trees

Elisaweta Masserova, Antigoni Polychroniadou, Akira Takahashi

**Abstract:** 

<p>
Ensuring fairness in AI is a complex challenge, further complicated by privacy concerns. While companies may want to prove fairness to comply with regulations or build customer trust, they are often hesitant to disclose proprietary models.
In our work, we address this for decision trees by designing customized zero-knowledge proofs (ZKPs), a well-established cryptographic method. Specifically, we propose and implement the first ZKP of fairness for decision trees, offering a combination of key features: 1) It overcomes previous limitations by guaranteeing fairness even against dishonest model owners who manipulate input data. 2) It is non-interactive and publicly verifiable, allowing the model owner to generate a one-time certificate proving fairness, which can be asynchronously verified by any interested party. Our solution is highly efficient in communication, delivering a dramatic improvement (~550,000× for a 30k-sized dataset) compared to the current state of the art.
</p>

<p>&nbsp;</p>

#### Real-World Deployment of Privacy-Preserving Machine Learning for Political Polling in the 2024 Presidential Election

Sam Buxbaum, Lucas Tassis, Lucas Boschelli, Giovanni Comarela, Mayank Varia, Mark Crovella, Dino Christenson

**Abstract:** 

<p>
We present a real-world deployment of secure multiparty computation to predict political preference from private web browsing data. To estimate aggregate preferences for the 2024 U.S. presidential election, we collect and analyze secret-shared data from nearly 8000 users from August 2024 through February 2025, with over 2000 daily active users sustained throughout the bulk of the survey. The use of MPC allows us to access sensitive web browsing data that users would otherwise be more hesitant to provide. We collected data using a custom-built Chrome browser plugin and performed our analysis using the CrypTen MPC library. To our knowledge, we provide the first implementation under MPC of a model for the learning from label proportions (LLP) problem in machine learning, which allows us to train on unlabeled web browsing data using publicly available polling and election results as the ground truth. This is a cross-disciplinary project combining cryptography, machine learning, and political science, and the proposed talk will focus on the privacy-preserving machine learning component. This document contains a description of the topics that will be covered in the talk.
</p>

<p>&nbsp;</p>

#### Privacy-Preserving LLM Interaction with Socratic Chain-of-Thought Reasoning and Homomorphically Encrypted Vector Databases

Yubeen Bae, Minchan Kim, Jaejin Lee, Sangbum Kim, Jaehyung Kim, Yejin Choi, Niloofar Mireshghallah

**Abstract:** 

<p>
Large language models (LLMs) are increasingly used as personal agents, accessing sensitive user data such as calendars, emails, and medical records. Users currently face a trade-off: They can send private records—many of which are stored in remote databases—to powerful but untrusted LLM providers, increasing their exposure risk. Alternatively, they can run less powerful models locally on trusted devices. We bridge this gap: Our Socratic Chain-of-Thought Reasoning first sends a generic, non-private user query to a powerful, untrusted LLM, which generates a Chain-of-Thought (CoT) prompt and detailed sub-queries without accessing user data. Next, we embed these sub-queries and perform encrypted sub-second semantic search using our Homomorphically Encrypted Vector Database across one million entries of a single user's private data. This represents a realistic scale of personal documents, emails, and records accumulated over years of digital activity. Finally, we feed the CoT prompt and the decrypted records to a local language model and generate the final response. On the LoCoMo long-context QA benchmark, our system—combining GPT-4o with a local Llama-1B model—outperforms using GPT-4o alone by up to 7.1 percentage points, while preserving strict data privacy. This demonstrates a first step toward systems where tasks are decomposed and split between untrusted strong LLMs and weak local ones, preserving user privacy.
</p>

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

Submission server:  [https://easychair.org/my/conference?conf=cryptoppml2025](https://easychair.org/my/conference?conf=cryptoppml2025)

The deadline for contributed talks is Sunday, June 15th, 2025

Notification will be sent out no later than Sunday, June 22nd, 2025

<!-- Wednesday, June 12th, 2024, 11:59pm EST. -->

**Notifications:**
TBA. 
<!-- Friday, June 21st, 2024. -->

<!-- [https://easychair.org/my/conference?conf=cryptoppml2024](https://easychair.org/my/conference?conf=cryptoppml2024) -->


Submissions must comply with the following rules:
- We encourage submitting full papers. Abstracts can also be provided.
- Submissions must be non-anonymous and must clearly specify which author will give the talk.
- The submission should provide sufficient detail to explain what the talk will be about.
- As the workshop does not have formal proceedings, we accept contributed talk proposals which correspond to papers that are under submission or already published elsewhere (parallel submissions are allowed).

The committee will follow COI standards according to the IACR policy. Contributed Talks Committee members are allowed to submit as well.

### Contributed Talks Committee


- [Gilad Asharov](http://www.cs.biu.ac.il/~asharog) (Bar-Ilan University) -- organizer
- [Carsten Baum](http://carstenbaum.com) (DTU Copenhagen)
- [Nishanth Chandran](https://www.microsoft.com/en-us/research/people/nichandr/) (Microsoft Research)
- [Bernardo David](https://www.bmdavid.com) (IT University of Copenhagen (ITU))
- [Sanjam Garg](https://people.eecs.berkeley.edu/~sanjamg/) (University of California, Berkeley)
- [Dov Gordon](https://cs.gmu.edu/~gordon/) (George Mason University)
- [Carmit Hazay](https://www.eng.biu.ac.il/~hazay) (Bar-Ilan University)
- [Harish Karthikeyan](https://sites.google.com/view/kharish/home) (JP Morgan AI Research) -- organizer
- [Parker Newton](https://www.amazon.science/author/parker-newton) (Amazon)
- [Melek Önen](https://onen.eurecom.io) (EURECOM)
- [Rafail Ostrovsky](http://web.cs.ucla.edu/~rafail/) (UCLA) -- organizer
- [Antigoni Polychroniadou](https://antigonip.github.io/) (JP Morgan AI Research) -- organizer
- [Mariana Raykova](https://marianapr.github.io) (Google) -- organizer
- [Phillipp Schoppmann](https://scholar.google.com/citations?user=1FkrtpsAAAAJ&hl=en&oi=ao) (Google)
- [Adam Sealfron](https://asealfon.github.io) (Google)
- [Elaine Shi](https://elaineshi.com) (CMU)
- [Ni Trieu](https://nitrieu.github.io) (Arizona State University)
- [Vassilis Zikas](https://faculty.cc.gatech.edu/~vzikas/) (Georgia Tech)









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
- [Harish Karthikeyan](https://sites.google.com/view/kharish/home) (JP Morgan AI Research)
- [Rafail Ostrovsky](http://web.cs.ucla.edu/~rafail/) (UCLA)
- [Antigoni Polychroniadou](https://antigonip.github.io/) (JP Morgan AI Research)
- [Mariana Raykova](https://marianapr.github.io) (Google)


Contact email: [CRYPTO.PPML@gmail.com](mailto:CRYPTO.PPML@gmail.com)
