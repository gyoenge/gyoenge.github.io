---
layout: page
title: "DACON SCPC AI Challenge"
description: DACON 2025 Samsung Collegiate Programming Challenge AI (Developing a multimodal AI model to understand everyday photos in smartphone user galleries)
img: assets/img/projects/2024_scpcdacon_mainimg.png
# importance: 4
# category: 2025
importance: 4
category: "Medical & Vision AI Project" 
related_publications: false
---

The core objective of this project was to develop a multimodal model that accurately answers multiple-choice questions about a given image, for which we implemented a comprehensive approach spanning custom dataset generation, model optimization, and a strategic inference process.

First, we built a three-step pipeline to generate a training dataset of 1,218 examples . In the first step, we used the `Qwen/Qwen-1_8B` model to generate scene prompts across various categories like nature, travel, and food. In the second step, these prompts were fed into the `dreamlike-art/dreamlike-photoreal-2.0` model to create realistic images. In the final step, we utilized the `llava-1.5-7b-hf` model to create a description, a multiple-choice question, and an answer pair for each generated image.

For modeling, we used the `Salesforce/blip2-flan-t5-xl` model as our base, which combines the BLIP-2 architecture with a FLAN-T5-XL text decoder . To ensure efficient training within limited resources, we applied two optimization techniques. First, through partial quantization, we applied 4-bit quantization only to the T5 decoder, improving inference efficiency. Second, we used LoRA (Low-Rank Adaptation), a Parameter-Efficient Fine-Tuning (PEFT) method, to freeze the existing model's weights and add trainable adapters only to specific layers of the Q-Former for training.

To improve accuracy during inference, we employed a two-stage strategy. The model first generates a descriptive text of the situation based on the image and question. It then makes the final answer selection by synthesizing this descriptive text, the original image, the question, and the multiple-choice options.

Through these strategies, our model achieved a score of 0.83262 on the public leaderboard, significantly outperforming the baseline model's score of 0.30486 and the pure `flan-t5` model's score of 0.81298. Ultimately, we achieved a final score of 0.8344, finishing 22nd on the public leaderboard and 18th on the private leaderboard.
