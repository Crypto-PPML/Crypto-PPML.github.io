---
title: Privacy-Preserving Machine Learning Workshop 2022
headerTitle: PPML 2022
headerInfoDate: August 14, 2022
layout: default
redirect_from: "/"
---

## Affiliated Event: The 4th Privacy-Preserving Machine Learning Workshop 2022

### About

Artificial intelligence is progressing rapidly. Systems based on machine learning algorithms approach and sometimes even exceed the abilities of human experts. Applications of machine learning involve almost every aspect of our lives, from health care and DNA sequence classification, to financial markets, computer networks and many more. Machine learning algorithms perform better when being exposed to more and more data, but such data is not always accessible due to privacy constraints. Can we train machine learning algorithms on confidential data without ever being exposed to it? Can my model classify your sample without ever seeing it?

The workshop aims to strengthen collaborations among the machine learning and cryptography communities. The scope includes privacy preserving techniques for training, inference, and disclosure. The workshop will consist of few invited talks, together with contributed talks.

### Date of Event
August 14, 2022 (Sunday)

### Registration
The workshop is an affiliated event of [CRYPTO 2022](https://crypto.iacr.org/2022/). To register to the workshop, please register to CRYPTO 2022, and mark in the registration form the PPML workshop.


### Location

#### University of Santa Barbara, California

The workshop will be in-person.

### (Confirmed) Invited Speakers
- [Dawn Song](https://people.eecs.berkeley.edu/~dawnsong/?_ga=2.112667716.1704394045.1656012795-300469976.1656012795) (UC Berkley)
- [Abhradeep Guha Thakurta](https://athakurta.squarespace.com) (Google Research - Brain Team)
- [Vitaly Feldman](http://vtaly.net) (Apple AI Research)

<!---
- [Yuval Ishai](https://www.cs.technion.ac.il/~yuvali/) (Technion)
- [Brendan McMahan](https://research.google/people/author35837/) (Google Research)
- [Nicolas Papernot](https://www.papernot.fr) (University of Toronto)
- [Vinod Vaikuntanathan](http://people.csail.mit.edu/vinodv/) (MIT)
--->

### (Tentative) Program

The time displayed is in Pacific Daylight Time (GMT-7).


<div markdown="0">
    {% include program.html programURL='2022/assets/program.json' %}
</div>

<p>&nbsp;</p>

### Abstracts -- Invited Speakers

#### **Abhradeep Guha Thakurta:** Federated Learning with Formal User-Level Differential Privacy Guarantees

**Abstract:**

<p>&nbsp;</p>

#### **Vitaly Feldman:** Low-communication Algorithms for Private Federated Data Analysis with Optimal Accuracy Guarantees

**Abstract:**

Locally Differentially Private (LDP) Reports are commonly used for collection of statistics and machine learning in the federated setting. Yet for both frequency estimation over a large domain and learning a high-dimensional model the best known LDP algorithms require sending prohibitively large messages from each client device to the server.  

In this talk I’ll describe several recent results on low-communication LDP protocols with optimal accuracy. In particular,
1. A general approach that, under standard cryptographic assumptions, gives  a low communication version of any efficient LDP randomizer with negligible loss in privacy and utility guarantees.
2. New algorithms for frequency estimation and high-dimensional mean estimation that achieve the optimal privacy/utility trade-off and have low communication cost.

Based on joint works with Hilal Asi, Jelani Nelson, Huy Nguyen and Kunal Talwar

<p>&nbsp;</p>

### Contributed Talks

#### The Power of the Differentially Oblivious Shuffle in Distributed Privacy Mechanisms

Mingxun Zhou and Elaine Shi

**Abstract**
The shuffle model has been extensively investigated in the distributed differential privacy (DP) literature. For a class of useful computational tasks, the shuffle model
allows us to achieve privacy-utility tradeoff similar to those in the central model, while shifting the trust from a central data curator to a ``trusted shuffle'' which can be implemented through either trusted hardware or cryptography. Very recently, several works explored cryptographic instantiations of a new type of shuffle with relaxed security, called differentially oblivious (DO) shuffles}.
These works demonstrate that by relaxing the shuffler's security from simulation-style secrecy to differential privacy, we can achieve asymptotical efficiency improvements. A natural question arises, can we replace the shuffler in distributed DP mechanisms with a DO-shuffle while retaining a similar privacy-utility tradeoff?

In this paper, we prove an optimal privacy amplification theorem by composing any locally differentially private (LDP) mechanism with a DO-shuffler, achieving parameters that tightly match the shuffle model. Our result asymptotically improves the recent work of Gordon et al., who initiated the study of distributed DP mechanisms in the DO-shuffle model. We also explore multi-message protocols in the DO-shuffle model, and construct mechanisms for the real summation and histogram problems. Our error bounds approximate the best-known results in the multi-message shuffle-model up to sub-logarithmic factors. Our results also suggest that just like in the shuffle model, allowing each client to send multiple messages is fundamentally more powerful than restricting to a single message. As an application, we derive the result of using repeated DO-shuffling for privacy-preserving time-series data aggregation.

<p>&nbsp;</p>


#### MicroFedML: Privacy Preserving Federated Learning for Small Weights

Yue Guo, Antigoni Polychroniadou, Elaine Shi, David Byrd and Tucker Balch

**Abstract**
Secure aggregation on user private data with the aid of an entrusted server provides strong privacy guarantees and has been well-studied in the context of privacy-preserving federated learning. An important problem in privacy-preserving federated learning with user constrained computation and wireless network resources is the computation and communication overhead which wastes bandwidth, increases training time, and can even impacts the model accuracy if many users drop out. The seminal work of Bonawitz et al. and the work of Bell et al. have constructed secure aggregation protocols for a very large number of users which handle dropout users in a federated learning setting. However, these works suffer from high round complexity (referred to as the number of times the users exchange messages with the server) and overhead in every training iteration. In this work, we propose and implement MicroFedML, a new secure aggregation system with lower round complexity and computation overhead per training iteration. MicroFedML reduces the computational burden by at least 100 orders of magnitude for 500 users (or more depending on the number of users) and the message size by 50 times compared to prior work. Our system is suitable and performs its best when the input domain is not too large, i.e., small model weights. Notable examples include gradient sparsification, quantization, and weight regularization in federated learning.

<p>&nbsp;</p>


#### Prio+: Privacy Preserving Aggregate Statistics via Boolean Shares

Eli Jaffe, Surya Addanki, Kevin Garbe, Rafail Ostrovsky and Antigoni Polychroniadou

**Abstract**
This paper introduces Prio+, a privacy-preserving system for the collection of aggregate statistics, with the same model and goals in mind as the original and highly influential Prio paper by Henry Corrigan-Gibbs and Dan Boneh (NSDI 2017).
As in the original Prio, each client holds a private data value (e.g. number of visits to a particular website) and a small set of servers privately compute statistical functions over the set of client values (e.g. the average number of visits). To achieve security against faulty or malicious clients, unlike Prio, Prio+ clients use Boolean secret-sharing instead of zero-knowledge proofs to convince servers that their data is of the correct form and Prio+ servers execute a share conversion protocol as needed in order to properly compute over client data.
This allows us to ensure that clients' data is properly formatted essentially for free, and the work shifts to novel share-conversion protocols between servers, where some care is needed to make it efficient.

Our overall approach is simpler than Prio and our Prio+ strategy reduces the client's computational burden by at least two orders of magnitude (or more depending on the statistic) while keeping server costs comparable to Prio. Prio+ permits computation of exactly the same wide range of complex statistics as the original Prio protocol, including high-dimensional linear regression over private values held by clients.

We report detailed benchmarks of our Prio+ implementation and compare these to both the original Go implementation of Prio and the Mozilla implementation of Prio. Our Prio+ software is open-source and released with the same license as Prio.

<p>&nbsp;</p>

#### SIMC: ML Inference Secure Against Malicious Clients at Semi-Honest Cost

Nishanth Chandran, Divya Gupta, Sai Lakshmi Bhavana Obbattu and Akash Shah

**Abstract**
Secure inference allows a model owner (or, the server) and
the input owner (or, the client) to perform inference on machine learning model without revealing their private information to each other. A large body of work has shown efficient
cryptographic solutions to this problem through secure 2-
party computation. However, they assume that both parties
are semi-honest, i.e., follow the protocol specification. Recently, Lehmkuhl et al. showed that malicious clients can
extract the whole model of the server using novel modelextraction attacks. To remedy the situation, they introduced
the client-malicious threat model and built a secure inference
system, MUSE, that provides security guarantees, even when
the client is malicious.
In this work, we design and build SIMC, a new cryptographic system for secure inference in the client malicious
threat model. On secure inference benchmarks considered
by MUSE, SIMC has 23 − 29× lesser communication and
is up to 11.4× faster than MUSE. SIMC obtains these improvements using a novel protocol for non-linear activation
functions (such as ReLU) that has > 28× lesser communication and is up to 43× more performant than MUSE. In fact,
SIMC’s performance beats the state-of-the-art semi-honest
secure inference system!
Finally, similar to MUSE, we show how to push the majority
of the cryptographic cost of SIMC to an input independent
preprocessing phase. While the cost of the online phase of
this protocol, SIMC++, is same as that of MUSE, the overall
improvements of SIMC translate to similar improvements to
the preprocessing phase of MUSE.

<p>&nbsp;</p>

#### Through the Looking-Glass: Benchmarking Secure Multi-Party Computation Comparisons for ReLU's

Abdelrahaman Aly, Kashif Nawaz, Eugenio Salazar and Victor Sucasas

**Abstract**
Comparisons are an essential component of Rectified Linear Unit functions (ReLU's), ever more present in Machine Learning, specifically in Neural Networks. Motivated by the increasing interest in privacy-preserving Artificial Intelligence, we explore the current state of the art in Multi-Party Computation (MPC) protocols for privacy preserving comparisons. We systematize them, and introduce constant round variations that are compatible with customary fixed point arithmetic over MPC. Furthermore, we provide novel combinations, inspired by popular comparison protocols, equipped with state of the art elements. Our main focus is implementation and benchmarking; hence, we translate our results into practice via an open source library, compatible with current MPC software tools, showcasing our contributions. Additionally, we include a comprehensive comparative study on various adversarial settings. Indeed, our results improve running times in practical scenarios. Finally, we offer conclusions about the viability of these protocols when adopted for privacy-preserving Machine Learning.

<p>&nbsp;</p>

#### On the Limits of Provable Security Against Model Extraction

Ari Karchmer

**Abstract**
Can we hope to provide provable security against model extraction attacks? As a first step towards a theoretical study of this question, we unify and abstract a wide range of ``observational" model extraction defense mechanisms (OMEDs) --- roughly those that attempt to detect model extraction using a statistical analysis conducted on the distribution over the adversary's queries.
To accompany the OMED, we define the notion of complete model extraction defenses (MEDs) -- the notion that benign clients can freely interact with the model -- and sound MEDs -- the notion that adversarial clients are caught and prevented from reverse engineering the model.
Our main result establishes a computational incompleteness theorem for our abstract defense mechanism: any efficient defense for an ML model computable by a polynomial size decision tree that satisfies a basic form of completeness cannot satisfy soundness, unless the subexponential Learning Parity with Noise (LPN) assumption does not hold.
To prove the incompleteness theorem, we introduce a class of model extraction attacks called natural covert learning attacks based on an intuitive connection to the Covert Learning model of Canetti and Karchmer (TCC '21). To the best of our knowledge, our result constitutes the first provable and efficient attack on any large class of MEDs, as a response to Vaikuntanathan's open problem from his talk at PPML Crypto '21.
Finally, in this talk we will further expose the tension between Covert Learning and OMEDs by proving that Covert Learning algorithms require the nonexistence of efficient OMEDs. Therefore we obtain a full characterization of the existence of efficient OMEDs by the nonexistence of natural covert learning algorithms.

<p>&nbsp;</p>

#### Differentially Private Stochastic Linear Bandits: (Almost) for Free

Osama A. Hanna, Antonious M. Girgis, Christina Fragouli and Suhas Diggavi

**Abstract**
In this paper, we propose differentially private algorithms for the problem of stochastic linear bandits in the central, local, and shuffled models. In the central model, we achieve almost the same regret as the optimal non-private algorithms, which means we get privacy for free. In particular, we achieve a regret of $\tilde{O}(\sqrt{T}+\frac{1}{\epsilon})$ matching the known lower bound for private linear bandits, while the best previously known algorithm achieves $\tilde{O}(\frac{1}{\epsilon}\sqrt{T})$. In the local case, we achieve a regret of $\tilde{O}(\frac{1}{\epsilon}{\sqrt{T}})$ which matches the non-private regret for constant $\epsilon$, but suffers a regret penalty when $\epsilon$ is small. In the shuffled model, we also achieve regret of $\tilde{O}(\sqrt{T}+\frac{1}{\epsilon})$ %for small $\epsilon$ as in the central case, while the best previously known algorithm suffers a regret of $\tilde{O}(\frac{1}{\epsilon}{T^{3/5}})$. Our numerical evaluation validates our theoretical results.

<p>&nbsp;</p>

#### LERNA: Secure Single-Server Aggregation via Key-Homomorphic Masking

Hanjun Li, Huijia Lin, Antigoni Polychroniadou and Stefano Tessaro

**Abstract**
Secure aggregation protocols allow a server to privately compute the sum of inputs supplied by clients, while tolerating the potential dropout of a number of these clients. These protocols underlie an increasing number of applications ranging from secure data analytics to Federated Machine Learning.

This paper introduces LERNA, a new framework for single-server secure aggregation. Unlike prior works in this space, our protocols avoid the need for clients to perform an expensive secret sharing operations for each computation, instead relying on a single re-usable secret sharing setup. This results in saving one round of communication per computation, for both semi-honest and maliciously secure variants of our protocols, over the state-of-the-art (Bell et al., CCS '20), and in a significant improvement in server computational costs. Our maliciously secure version also provide stronger correctness and security guarantees than the protocol of Bell et al.

We provide instantiations of LERNA based on both the Decisional Composite Residuosity (DCR) and (Ring) Learning with Rounding ((R)LWR) assumptions respectively, and evaluate a version based on the latter assumption. In addition to savings in round-complexity (which result in reduced latency), our experiments show that the server computational costs are reduced by three orders of magnitude in comparison to the state-of-the-art. In settings with a large number of clients, we also reduce the computational costs up to eight fold for most clients, while a small set of "heavy clients" is subject to a workload comparable to that of prior work.

<p>&nbsp;</p>

#### Multi-Server Covert Learning

Justin Holmgren and Ruta Jawale

**Abstract**
We consider the problem of covert learning [Canetti and Karchmer (TCC 2021)] and the closely related problem of cryptographic sensing [Ishai, Kushilevitz, Ostrovsky, and Sahai (Crypto 2019)]. Here the goal is to learn a concept class with membership queries, while also satisfying an additional covertness constraint. This constraint concerns an observer who sees the instances x queried by the learner along with the corresponding labels f(x). Covertness requires that the observer's view is simulatable given random examples, i.e. a list of pairs (x, f(x)) where the values of x are chosen i.i.d. uniformly at random. In particular, the simulator cannot make membership queries.

The work of [Canetti and Karchmer (TCC 2021), Ishai, Kushilevitz, Ostrovsky, and Sahai (Crypto 2019)] showed (under computational assumptions) that covert learning is easier than learning from random examples. For example, [Canetti and Karchmer (TCC 2021)] gave efficient algorithms for covertly learning classes of Boolean functions, such as parities and decision trees, for which learning from random examples is conjectured to be computationally intractable. This secure outsourcing paradigm [Canetti and Karchmer (TCC 2021)] is motivated by automated scientific discovery in drug design and molecular biology, where a scientist can only make queries to a function of interest by enlisting the help of an untrusted laboratory.

We introduce a natural variant of covert learning, analogous to the notion of distributed cryptographic sensing from [IKOS19], which is motivated by the observation that a scientist may have access to multiple non-colluding laboratories. We show that in this setting, it is possible to learn a more general class Boolean functions—namely all Fourier-sparse functions—than was handled in [Canetti and Karchmer (TCC 2021)] or [Ishai, Kushilevitz, Ostrovsky, and Sahai (Crypto 2019)]. Moreover, our algorithm does not rely on any computational assumptions and achieves perfect (rather than computational) covertness.

The simplest instantiation of our variant divides the learner's queries into two groups such that both group's queries are simulatable given random examples. Our algorithm generalizes to have k groups of queries such that any k - 1 groups are jointly simulatable, albeit with query complexity that grows exponentially with k. Our algorithm is an adaptation of the (original) Goldreich-Levin algorithm, whereas the more pedagogically popular variant due to Rackoff does not suffice for our purposes.

We also consider additional security properties from prior work, such as hypothesis-hiding and verifiability, and show that our multi-lab model allows for similar gains relative to the conventional single-lab model.

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




**Submission site:**
The submission site is available [here](https://easychair.org/conferences/?conf=cryptoppml2022)

**Submission deadline:**

~~Friday, July 15th, 2022, 11:59pm EST.~~

**Extended:** Sunday, July 17th, 2022, 11:59pm EST.

**Notifications:**
Monday, July 25th, 2022.



Submissions must comply with the following rules:
- We encourage submitting full papers. Abstracts can also be provided.
- Submissions must be non-anonymous and must clearly specify which author will give the talk.
- The submission should provide sufficient detail to explain what the talk will be about.
- As the workshop does not have formal proceedings, we accept contributed talk proposals which correspond to papers that are under submission or already published elsewhere (parallel submissions are allowed).

The committee will follow COI standards according to the IACR policy. Contributed Talks Committee members are allowed to submit as well.

### Contributed Talks Committee
- [Gilad Asharov](http://www.cs.biu.ac.il/~asharog) (Bar-Ilan University) -- organizer
- [Leo de Castro](https://internetpolicy.mit.edu/team/leo-de-castro/) (MIT)
- [Dana Dachman-Soled](https://user.eng.umd.edu/~danadach/) (University of Maryland)
- [Deepesh Data](https://sites.google.com/view/deepeshdata/) (UCLA)
- [Daniel Escudero](https://www.escudero.me) (JPM AI Research)
- [Harish Karthikeyan](https://sites.google.com/view/kharish/home) (NYU)
- [Rafail Ostrovsky](http://web.cs.ucla.edu/~rafail/) (UCLA) -- organizer
- [Antigoni Polychroniadou](https://antigonip.github.io/) (JP Morgan AI Research) -- organizer
- [Adam Sealfon](https://asealfon.github.io) (UC Berkley)


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
- [Rafail Ostrovsky](http://web.cs.ucla.edu/~rafail/) (UCLA)
- [Antigoni Polychroniadou](https://antigonip.github.io/) (JP Morgan AI Research)

Contact email: [CRYPTO.PPML@gmail.com](mailto:CRYPTO.PPML@gmail.com)
