---
layout: page
title: Computer Vision Course Project
description: Implementation of Robust Photometric Stereo, Structure From Motion, Supervised Depth Refinement
img: assets/img/projects/2025_coursecv_mainimg.png
# importance: 1
# category: 2025
importance: 1
category: "Course Term Project"
related_publications: true
---

In GIST Computer Vision Course (EC4216), there were 3 individual coding assignment: (i) Robust Photometric Stereo, (ii) Structure From Motion, (iii) Supervised Depth Refinement.

<br>

### 1. Robust Photometric Stereo

Robust Photometric Stereo with RPCA(Robust Principle Component Analysis) and photometric factor weighting for accurate surface normal estimation and relighting.

In this project, I implemented a Robust Photometric Stereo pipeline to precisely estimate the 3D surface information of objects from multiple images. First, assuming that objects follow Lambertian reflectance properties, I implemented the traditional Photometric Stereo method based on Least Squares. Next, to effectively handle non-Lambertian outliers such as shadows and highlights that may occur in real-world environments, I applied Robust Principal Component Analysis (RPCA) to build a Robust Photometric Stereo approach.

The detailed [code](https://github.com/gyoenge/robust-photometric-stereo) and [report(KR)](https://github.com/gyoenge/robust-photometric-stereo/blob/main/report.pdf) can be found in the link.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/2025_coursecv_inner1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<br>
<br>

### 2. Structure From Motion

Structure-from-Motion with two-view and multi-view reconstruction using feature matching, triangulation, and bundle adjustment.

In this project, I implemented Structure From Motion (SfM) to reconstruct the 3D structure of objects from images taken at multiple viewpoints. First, I performed Two-View SfM using the 5-point algorithm on the initial two viewpoints. Then, for additional viewpoints, I applied the 3-point algorithm along with bundle adjustment to perform Multi-View SfM.

In each SfM stage, the point algorithms were used to estimate the camera pose, where RANSAC was employed to select the most reliable estimates. Once the camera poses were extracted, we applied triangulation on the matching points across images to obtain 3D cloud points.

The detailed [code](https://github.com/gyoenge/structure-from-motion) and [report(KR)](<https://github.com/gyoenge/structure-from-motion/blob/main/(supplemented)%20report_compressed.pdf>) can be found in the link.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/2025_coursecv_inner2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<br>
<br>

### 3. Supervised Depth Refinement

Supervised Depth Refinement with UNet, architecture boosts, and data augmentation for accurate depth completion.

In this project, I implemented Supervised Depth Refinement (SDR) to accurately predict complete depth from the given Sparse Depth, RGB Image, and Surface Normal. The SDR model takes sparse depth and RGB as input and outputs depth and normal, where the model learns weights under the supervision of Sparse Ground Truth and Normal Ground Truth to perform depth refinement.

The baseline model consists of HoleFiller, UNet, and Depth2Normal modules, among which only UNet is trainable. It is trained to minimize Sparse depth loss and Normal loss. To improve the performance of the baseline model, I additionally designed and applied two boosting strategies: ArchBoost (Architecture Boost) and DataBoost (Data-driven Boost).

The detailed [code](https://github.com/gyoenge/supervised-depth-refinement) and [report(KR)](https://github.com/gyoenge/supervised-depth-refinement/blob/main/report_submitted.pdf) can be found in the link.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/2025_coursecv_inner3.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<br>
<br>
