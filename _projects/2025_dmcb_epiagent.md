---
layout: page
title: "Research Intern with EpiAgent Downstreams"
description: EpiAgent AD(Alzheimer Disease) Insilico task. Cell-type–aware extension of EpiAgent with LoRA
img: assets/img/projects/2025_dmcb_epiagent_mainimg.png
# importance: 2
# category: 2025
importance: 3
category: "Medical & Vision AI Project"
related_publications: false
---

Foundation models for single-cell epigenomics, such as EpiAgent, have recently demonstrated the ability to capture chromatin accessibility landscapes and perform in-silico perturbation tasks, including regulatory element knockouts in cancer. However, extending such frameworks to neurodegenerative diseases requires modeling brain-specific regulatory contexts and cellular heterogeneity. In this study, we **expand the EpiAgent in-silico treatment paradigm from cancer to Alzheimer’s disease (AD)** by incorporating **cell-type specific low-rank adapters (LoRA)**. These adapters enable fine-grained modulation of the pretrained foundation model, allowing differential simulation of regulatory responses across major brain cell types, including neurons, astrocytes, microglia, and oligodendrocytes. Using single-cell ATAC-seq datasets from AD and control brain tissues, we demonstrate that cell-type specific adapters enhance sensitivity in detecting disease-relevant regulatory programs and improve the fidelity of in-silico treatment simulations. Our results suggest that integrating modular adapters into foundation models provides a scalable strategy to simulate therapeutic effects in a cell-type aware manner, opening new avenues for computational drug discovery and mechanistic insight into complex brain disorders.
