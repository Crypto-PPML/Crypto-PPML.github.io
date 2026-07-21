---
title: Privacy-Preserving Machine Learning Workshop 2026
headerTitle: PPML 2026
headerInfoDate: August 16, 2026
layout: default
redirect_from: "/"
---

## Affiliated Event: The 7th Privacy-Preserving Machine Learning Workshop 2026

### About

Artificial intelligence is progressing rapidly. Systems based on machine learning algorithms approach and sometimes even exceed the abilities of human experts. Applications of machine learning involve almost every aspect of our lives, from health care and DNA sequence classification, to financial markets, computer networks and many more. Machine learning algorithms perform better when being exposed to more and more data, but such data is not always accessible due to privacy constraints. Can we train machine learning algorithms on confidential data without ever being exposed to it? Can my model classify your sample without ever seeing it?

The workshop aims to strengthen collaborations among the machine learning and cryptography communities. The scope includes privacy preserving techniques for training, inference, and disclosure. The workshop will consist of few invited talks, together with contributed talks.

### Date of Event
August 16, 2026 (Sunday)

### Registration
The workshop is an affiliated event of [CRYPTO 2026](https://crypto.iacr.org/2026/). To register to the workshop, please register to CRYPTO 2026, and mark in the registration form the PPML workshop.


### Location

University Center Harbor Room, USCB
<!---
MCC theater, UCSB [(On Google Maps)](https://maps.app.goo.gl/EuD8PHU5wKH592Yb6)
-->


### Invited Speakers


- [Raluca Ada Popa](https://people.eecs.berkeley.edu/~raluca/) (Google Deepmind, UC Berkely)
- [Yevgeniy Dodis](https://cs.nyu.edu/~dodis/) (New York University) 
- [Eugene Bagdasarian](https://people.cs.umass.edu/~eugene/) (UMass Amherst)  


### (Tentative) Program


The time displayed is in Pacific Daylight Time (GMT-7).

<div markdown="0">
    {% include program.html programURL='2026/assets/program.json' %}
</div>


<p>&nbsp;</p>

### Abstracts -- Invited Speakers

### Contributed Talks

#### Let's Ask Gauss: Improved One-Run Privacy Auditing
   
Adya Agrawal, Yu Wei, Jaspal Singh, Malik Magdon-Ismail and Vassilis Zikas

**Abstract:**
Privacy auditing provides an important safeguard by estimating the actual information leaked by a model, thus ensuring that theoretical privacy guarantees hold in practice. We study empirical privacy auditing for differentially private (DP) machine learning, focusing on efficient one-run methods for mechanisms such as DP-SGD. Prior one-run approaches threshold training examples or "canaries" into binary membership guesses, which discards useful information. We show that, in the white-box DP-SGD setting, canary-aligned signals naturally form a sequence of random variables whose normalized sum is asymptotically Gaussian. Leveraging this distributional perspective, we develop a DP-auditing framework that leads to tighter privacy lower bounds from a single training run.

<p>&nbsp;</p>
<p>&nbsp;</p>

#### Lighthouse: Single-Server Secure Aggregation with O(1) Server-Committee Communication at Scale

Sanjam Garg, Alireza Kavousi, Dimitris Kolonelos, Erkan Tairi and Zhipeng Wang
   
**Abstract** 
Secure aggregation is a core primitive for privacy-preserving federated learning, enabling a server to compute aggregates of client updates without learning individual inputs. Recent protocols have explored committee-based designs to reduce client overhead and tolerate weakly connected participants. However, existing approaches still incur communication and computation costs that scale with the number of clients and/or the size of model updates. This becomes a serious bottleneck in interaction between the server and the committee, given that model updates are high-dimensional and the committee is a small set of clients. We present Lighthouse, a new secure aggregation protocol that supports one-shot client communication and achieves constant committee computation and communication overhead with the server, independent of both the number of clients and the size of the input vector. Our protocol attains the best-known round complexity of two rounds, matching OPA (CRYPTO 2025) and TACITA (ePrint 2025) and improving upon Flamingo (S&P 2023) and Willow (CRYPTO 2025). Our core technical contribution is a novel application of recent advances in batched threshold encryption, which enables succinct server–committee interaction while preserving security and correctness. Beyond asymptotic improvements over prior works, Lighthouse yields substantial concrete efficiency gains: For an aggregation with 1024 clients, we reduce server-to-committee communication by over 100× and committee-to-server communication by over 300× compared to Flamingo and Willow. Also, we present an extension that supports dynamic client participation, a critical requirement for practical deployments at scale, while preserving the asymptotic and concrete efficiency of the static protocol for clients.

<p>&nbsp;</p>
<p>&nbsp;</p>

#### Speakeasy: Billion-Scale Two-Server Private Semantic Search

Vihan Lakshman, Xiaochen Zhu, Alexandra Henzinger, Henry Corrigan-Gibbs and Emma Dauterman

**Abstract** 
We present the Speakeasy system for private search. Speakeasy allows a client to search a public corpus of a billion documents (e.g., a web crawl) while cryptographically hiding all information about the client's query from the system's servers. A Speakeasy deployment consists of two infrastructure providers; the system tolerates a malicious attacker controlling at most one of them. On DEEP-1B, Speakeasy achieves 83.63% recall and answers queries with 4.4 seconds of latency using less than 20 MB communication in the WAN setting. Prior private search systems had either significantly worse recall (e.g., 32.15 recall@10 on DEEP-10M) or prohibitively expensive communication costs (e.g., hundreds of megabytes of communication per-query at billion-document scale). Speakeasy achieves these gains with a new private nearest-neighbor search protocol that heavily exploits lightweight two-server private-information-retrieval techniques. Using Speakeasy, we build end-to-end solutions for two search applications: private retrieval-augmented generation (RAG) and private web search.

<p>&nbsp;</p>
<p>&nbsp;</p>

#### PinPointe: Personalized Private Recommendations through Clustering and Private Information Retrieval

Naomi Boneh, Caeley Woo and Emma Dauterman

**Abstract** 

Modern recommendation systems provide value to users through personalized suggestions driven by machine learning models, yet they require users to divulge their behavioral history to a platform. To address this tension between privacy and personalization, we present PinPointe. PinPointe is a private, personalized recommendation system that provides privacy for querying users seeking recommendations. PinPointe introduces a clustering abstraction to transform the challenge of receiving personalized recommendations into a private key-value lookup. The proposed system works by embedding and clustering user profiles, and pre-computing aggregate recommendation lists for each cluster. Clients then find the nearest cluster to their user profile embedding and use SimplePIR, a private information retrieval protocol, to retrieve the list of pre-computed recommendations. PinPointe relies on its server having access to a portion of user data, aligning with real-world platforms that have opt-in privacy settings. With 30% of user profiles available for training and 70% of users kept fully private, our best configuration achieves 70.5% of the recall of its non-private counterpart. Through the use of user-item interactions and SimplePIR, PinPointe offers a practical privacy-utility tradeoff, achieving recommendation quality competitive with non-private systems while hiding user data.

<p>&nbsp;</p>
<p>&nbsp;</p>

#### Cerium: A Framework For TB-Scale Encrypted LLM Inference

Siddharth Jayashankar, Wenting Zheng and Dimitrios Skarlatos

**Abstract** 
Encrypted AI using fully homomorphic encryption (FHE) enables processing data in the encrypted form, providing strong privacy guarantees; but its slow performance has limited practical deployment. Recent works proposed ASICs to accelerate FHE, but they require advanced manufacturing processes that constrain their accessibility. GPUs provide a far more accessible platform, but achieving ASIC-level performance using GPUs has remained elusive despite substantial prior efforts, primarily focused on small models that fit comfortably within a single device. Supporting large models such as LLMs in FHE introduces a dramatic increase in computational complexity that requires optimized GPU kernels, along with managing terabyte-scale memory footprints that far exceed the capacity of a single GPU. This paper presents Cerium, a multi-GPU framework for FHE inference targeting large models. Cerium integrates a DSL, an optimizing compiler, and a runtime system to automatically generate high-performance GPU kernels, manage terabyte-scale memory footprints, and parallelize computation across multiple GPUs. Cerium introduces new IR constructs, compiler passes, plaintext compression techniques, memory-efficient data layouts, and communication-aware parallelization techniques that together enable scalable encrypted inference from small CNNs to Llama3-8B. We build Cerium on NVIDIA GPUs and demonstrate significant performance gains. For small models, Cerium outperforms expert-written GPU libraries by up to 2.25 times. Cerium achieves performance competitive with state-of-the-art FHE ASICs, outright matching the prior CraterLake FHE ASIC. It is the first GPU system to execute bootstrapping in under 10 milliseconds, achieving 7.5 milliseconds, and is the first to demonstrate encrypted inference for BERT-Base and Llama3-8B in 8 seconds and 43 seconds, respectively.

<p>&nbsp;</p>
<p>&nbsp;</p>

#### Bridging Usability and Performance: A Tensor Compiler for Autovectorizing Homomorphic Encryption

Edward Chen

**Abstract** 

Homomorphic encryption (HE) offers strong privacy guarantees by enabling computation over encrypted data. However, the performance of tensor operations in HE is highly sensitive to how the plaintext data is packed into ciphertexts. Large tensor programs introduce numerous possible layout assignments, making it both challenging and tedious for users to manually write efficient HE programs. In this paper, we present Rotom, a compilation framework that autovectorizes tensor programs into optimized HE programs. Rotom systematically explores a wide range of layout assignments, applies state-of-the-art optimizations, and automatically generates an equivalent, efficient HE program. At its core, Rotom utilizes a novel, lightweight ApplyRoll layout conversion operator to easily modify the underlying data layouts and unlock new avenues for performance gains. Our evaluation demonstrates Rotom scalably compiles all tensor workloads in under 5 minutes, reduces rotations in hand-tuned protocols by up to 3×, and achieves up to 80× performance improvement over prior autovectorization systems.

<p>&nbsp;</p>
<p>&nbsp;</p>

#### Manifold Projection Guarantees Adversarial Robustness

Hiroaki Maeshima and Akira Otsuka

**Abstract** 

Adversarial examples (AEs) are inputs to machine learning models that closely resemble natural data but induce incorrect predictions, posing a major challenge to model robustness. While numerous defense strategies have been proposed, they often suffer from a trade-off between robustness to AEs and accuracy on clean data. To address this issue, we propose a novel defense method based on an isometric autoencoder, a variant of an autoencoder in which the decoder acts as an isometry. This model learns the data manifold and projects off-manifold inputs, such as AEs, onto their nearest points on the manifold. According to the Dimpled Manifold Model, adversarial perturbations are approximately perpendicular to the data manifold; thus, our method effectively neutralizes these perturbations by restoring inputs to their unperturbed states. We theoretically show that, in the context of Gaussian Process (GP) regression, the encoder of an isometric autoencoder preserves both the predictive mean and variance, maintaining consistent model behavior. On the other hand, the projection by isometric autoencoder improves the robustness of the AEs, and thereby overcoming the trade-off, which achieves the certified robustness and accuracy simultaneously. Empirical evaluations further confirm the efficacy of our approach. Therefore, our method can be applied as a pre-processing step for enhancing robustness to any classifier including neural networks, serving as a purifier of AEs.

<p>&nbsp;</p>
<p>&nbsp;</p>

#### Multi-Skill Coding Agent for Encrypted Computation in OpenFHE

Ahmad Al Badawi, Andreea Alexandru, Zohar Duchin, Yuriy Polyakov, Oded Oded Rosolio and Vinod Vaikuntanathan

**Abstract** 

Developing functional, optimized, and secure FHE code is a challenging task that typically requires expert cryptographers. It demands carefully tracking multiplicative depth, monitoring noise growth, strategically placing bootstrapping operations, and selecting appropriate cryptographic parameters. Given the emergence of powerful AI coding agents, we ask: can we automate this process, to what extent, and how reliably? In this work, we present a multi-skill, LLM-based coding agent that compiles a free-form natural-language prompt into functionally correct and secure CKKS code for the OpenFHE-Python library, without the user writing any FHE code by hand. Our agent decomposes the FHE development process into a seven-stage pipeline that first designs and validates an FHE-friendly algorithm for the invoked task using cleartext data, and then lowers it to FHE. We evaluate the agent on two case studies: (1) private MLP inference and (2) the encrypted fetch-by-similarity challenge of the FHE Benchmarking Suite Consortium. Experiments demonstrate that the agent successfully generates functionally correct and secure FHE code for both case studies, suggesting a positive answer to the research question posed above.

<p>&nbsp;</p>
<p>&nbsp;</p>

#### AgentCrypt: Advancing Privacy and Secure Computation in AI Agent Collaboration

 Harish Karthikeyan, Yue Guo, Leo de Castro, Antigoni Polychroniadou, Udari Madhushani Sehwag, Leo Ardon, Sumitra Ganesh and Manuela Veloso
   
**Abstract** 
AI agents in multi-agent systems increasingly operate over sensitive data, yet existing guardrail and LLM-scanning approaches primarily provide empirical, average-case protections and fail to prevent post-access leakage through tool calls, context sharing, memory persistence, inference, or multi-hop routing. Because LLM-based agents are inherently non-deterministic, placing them in the security-critical path is unsafe: in regulated settings, any non-zero attack success rate is unacceptable. We introduce AgentCrypt, a three-level framework that enforces privacy via a deterministic cryptographic wrapper independent of model behavior. AgentCrypt provides rigorous, worst-case guarantees for tagged data, even under adversarial manipulation or agent errors. We formalize this with new security definitions, a foundation absent from prior guardrail- and LLM-scanning-based agent safety work. The framework spans policy-based encrypted retrieval (Level 2, via identity-based encryption) and any computation (Level 3), with optional fully homomorphic encryption when raw data access must be eliminated. Importantly, we also address multi-hop routing scenarios in which sensitive data traverses multiple intermediate agents, a setting fundamentally beyond the reach of LLM-based scanning approaches. We implement AgentCrypt in LangGraph and Google ADK and introduce a benchmark of privacy-annotated multi-agent scenarios spanning FERPA, HIPAA, GLBA, GDPR, and CCPA standards. We generate hundreds of scenarios across 14 (attack) classes, including impersonation, multi-hop routing, real-world exfiltration, and prompt injection attacks. AgentCrypt maintains 84% task correctness while preserving privacy in 100% of the scenarios.

<p>&nbsp;</p>
<p>&nbsp;</p>

#### Sequential Auditing for f-Differential Privacy

Tim Kutta, Martin Dunsche, Yu Wei and Vassilis Zikas

**Abstract** 

We present new auditors to assess Differential Privacy (DP) of an algorithm based on output samples. Such empirical auditors are common to check for algorithmic correctness and implementation bugs. Most existing auditors are batch-based or targeted toward the traditional notion of (ε,δ)-DP; typically both. In this work, we shift the focus to the highly expressive privacy concept of f-DP, in which the entire privacy behavior is captured by a single tradeoff curve. Our auditors detect violations across the full privacy spectrum with statistical significance guarantees, which are supported by theory and simulations. Most importantly, and in contrast to prior work, our auditors do not require a user-specified sample size as an input. Rather, they adaptively determine a near-optimal number of samples needed to reach a decision, thereby avoiding the excessively large sample sizes common in many auditing studies. This reduction in sampling cost becomes especially beneficial for expensive training procedures such as DP-SGD. Our method supports both whitebox and blackbox settings and can also be executed in one-run frameworks.

<p>&nbsp;</p>
<p>&nbsp;</p>

#### CryptanalysisBench: Can LLMs do cryptanalysis?

Lukas Fluri, Avital Shafran, Nicholas Carlini, Matthew Jagielski, Milad Nasr, Orr Dunkelman, Eyal Ronen and Florian Tramèr

**Abstract** 

Cryptanalysis---the task of finding attacks against cryptographic schemes---sits at the intersection of mathematical reasoning and programming, two areas where LLMs have made rapid progress. Just like math and programming, cryptanalytic attacks are formally defined and can be unambiguously verified. This raises the question if cryptanalysis might experience a similar acceleration in progress through LLMs. In this paper we introduce CryptanalysisBench, a benchmark of 114 tasks spanning six families of cryptographic primitives (block ciphers, hash functions, etc) drawn primarily from four NIST standardization competitions. Each task asks an agent to break an implementation of a cryptographic primitive by winning a formal security game. The benchmark has three tiers: (1) primitives with known practical breaks; (2) scaled-down variants of primitives without one; (3) a challenge set of unbroken production primitives. We evaluate Claude Opus 4.7, GPT-5.5 and Claude Mythos: all three solve a majority of Tier 1 (72.4%, 79.3%, and 75.9% respectively), while Tier 2 remains largely out of reach. One notable exception in Tier 2 is the SPoC AEAD, for which Mythos proposed a novel full key recovery attack. For Tier 1 successes, we provide a fine-grained analysis distinguishing paper recall from source-level rediscovery. We release CryptanalysisBench both as a forecasting tool to track when AI cryptanalytic capability becomes a serious factor, and as scaffolding for subjecting candidate schemes to more attacks before they are deployed.

<p>&nbsp;</p>
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

Submission server:  [https://easychair.org/my/conference?conf=cryptoppml2026](https://easychair.org/my/conference?conf=cryptoppml2026)

**Deadline:** The deadline for contributed talks is Wednesday, June 10th, 2026

**Notifications:** The notificatinos will be sent out no later than Friday, June 19th, 2026




Submissions must comply with the following rules:
- We encourage submitting full papers. Abstracts can also be provided.
- Submissions must be non-anonymous and must clearly specify which author will give the talk.
- The submission should provide sufficient detail to explain what the talk will be about.
- As the workshop does not have formal proceedings, we accept contributed talk proposals which correspond to papers that are under submission or already published elsewhere (parallel submissions are allowed).

The committee will follow COI standards according to the IACR policy. Contributed Talks Committee members are allowed to submit as well.

### Contributed Talks Committee

- [Ni Trieu](https://nitrieu.github.io/) (Arizona State University)
- [Parker Newton](https://www.amazon.science/author/parker-newton) (Amazon)
- [Bernardo David](https://www.bmdavid.com/) (IT University of Copenhagen)
- [Carsten Baum](https://carstenbaum.com/) (DTU)
- [Melek Önen](https://onen.eurecom.io/) (EURECOM)
- [Dario Pasquini](https://pasquini-dario.github.io/me/) (Cracken)


<!---
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
-->








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
