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

#### University of Santa Barbara, California

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


<p>&nbsp;</p>

#### Mind the Privacy Unit! User-Level Differential Privacy for Language Model Fine-Tuning

Lynn Chua, Badih Ghazi, Yangsibo Huang, Pritish Kamath, Ravi Kumar, Daogao Liu, Pasin Manurangsi, Amer Sinha and Chiyuan Zhang

**Abstract:**

<p>&nbsp;</p>


#### AITIA: Efficient Secure Computation of Bivariate Causal Discovery		

Truong Son Nguyen, Wang Lun, Evegenios Kornaropoulos and Ni Trieu


**Abstract:**

<p>&nbsp;</p>

#### OPA : One-shot Private Aggregation with Single Client Interaction and its Applications to Federated Learning

Harish Karthikeyan and Antigoni Polychroniadou

**Abstract:**

<p>&nbsp;</p>


#### Eureka: A General Framework for Black-box Differential Privacy Estimators

Yun Lu, Malik Magdon-Ismail, Yu Wei and Vassilis Zikas

**Abstract:**

<p>&nbsp;</p>

#### Metric Differential Privacy at the User-Level

Jacob Imola, Amrita Roy Chowdhury and Kamalika Chaudhuri


**Abstract:**

<p>&nbsp;</p>



#### Armadillo: Robust Secure Aggregation for Federated Learning with Input Validation

Yiping Ma, Yue Guo, Harish Karthikeyan and Antigoni Polychroniadou

**Abstract:**

<p>&nbsp;</p>

#### Sublinear Distributed Product Checks on Replicated Secret-Shared Data over Z2k without Ring Extensions

Yun Li, Daniel Escudero, Yufei Duan, Zhicong Huang, Cheng Hong, Chao Zhang and Yifan Song

**Abstract:**

<p>&nbsp;</p>


#### Willow: Secure Aggregation with One-Shot Clients

James Bell-Clark, Adrià Gascón, Baiyu Li, Mariana Raykova and Phillipp Schoppmann

**Abstract:**

<p>&nbsp;</p>

#### PRIVUS: Census Privacy System

Alexander Nicita and Steven Bellovin

**Abstract:**

<p>&nbsp;</p>

#### Privacy-Preserving Large Language Model Inference via GPU-Accelerated Fully Homomorphic Encryption

Leo de Castro, Daniel Escudero and Antigoni Polychroniadou

**Abstract:**

<p>&nbsp;</p>


#### Distributed Matrix Mechanism for Federated Learning using Packed Secret Sharing

Alexander Bienstock, Ujjwal Kumar and Antigoni Polychroniadou	

**Abstract:**

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
