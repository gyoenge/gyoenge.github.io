---
layout: distill
title: 2025~2026 GIST Undergraduate Research Internship
description: Research internship experience in Medical AI and Computer Vision at GIST
date: 2026-04-01
tags: [Med-AI, ComputerVision]

toc:
  - name: Overview
  - name: GIST AI-MED Lab
    # subsections:
    #   - name:
  - name: GIST DMCB Lab
---

## Overview

I participated in an **undergraduate research internship at GIST** from 2025 to 2026. During this period, I conducted research in Medical AI and Computer Vision across the **[AI-MED](https://www.aimed-lab.com/)** (AI on Medical Applications) Lab and the **DMCB** (Data Mining and Computational Biology) Lab.

My primary research focus was on **predicting spatial transcriptomics from pathology images**. In simple terms, this task involves estimating the spatial distribution of gene expression levels of cells directly from histopathology images.

Through this experience, I gained hands-on expertise in deep learning, data analysis, and interdisciplinary research.
In particular, I studied a wide range of deep learning paradigms, including Convolutional and Transformer-based vision encoders, genetic language models, foundation models, self-supervised learning, multimodal representation learning, and contrastive learning.
By actively participating in weekly lab meetings and iteratively developing research ideas, I strengthened my ability to think critically, tackle complex problems with persistence, and effectively communicate technical concepts with others.

Overall, this period marked a **significant phase of both academic and personal growth**.

---

## GIST AI-MED Lab

At the GIST AI-MED Lab (Sep 2025 – Present), I have been conducting research in Medical AI with a focus on computational pathology and multimodal representation learning. I developed **STaRN (Summary Table Representation Learning with Semantic Neighborhood Distillation)**, a framework that reinterprets high-resolution pathology images as compact relational table representations to efficiently model spatial and semantic neighborhood structures across tissue regions. The framework explores how semantic relationships derived from pathology foundation models can guide neighborhood-aware representation learning while preserving interpretable morphological information from handcrafted radiomics features.

In parallel, I developed **RaPaCL-ST (RadiomicsFeature-Pathomics Contrastive Learning)**, a multimodal framework for spatial transcriptomics prediction that bridges handcrafted radiomics features and deep pathomics representations extracted from histopathology images. By leveraging contrastive learning, the framework aligns interpretable radiomics signals—such as texture and heterogeneity—with high-dimensional image embeddings in a shared latent space, improving both the biological relevance and interpretability of learned representations for downstream tasks such as spatial gene expression prediction.

Through these projects, I gained hands-on experience in model design, multimodal learning, self-supervised representation learning, and research-driven problem solving.

---

## GIST DMCB Lab

Previously, at the GIST DMCB Lab (Mar 2025 – Aug 2025), I participated in the G-SURF (GIST Summer Undergraduate Research Fellowship) program, where I conducted research on applying foundation models for single-cell epigenomics to neurodegenerative disease analysis. In particular, I reproduced and adapted the downstream task framework of **EpiAgent**, an in-silico perturbation framework originally proposed for cancer-related studies, to the context of Alzheimer’s disease (AD).

To address the high heterogeneity of brain cell populations, I designed a framework incorporating cell-type-specific LoRA (Low-Rank Adapters), enabling more specialized modeling of neurons, astrocytes, microglia, and oligodendrocytes. Using single-cell ATAC-seq datasets from AD and control brain tissues, I explored how foundation model representations could be utilized to simulate regulatory responses and cellular state transitions in neurodegenerative conditions.

Through this work, I gained hands-on experience in adapting foundation model frameworks to new biomedical domains, handling high-dimensional single-cell biological data, and designing domain-specific model extensions for complex heterogeneous systems.

---
