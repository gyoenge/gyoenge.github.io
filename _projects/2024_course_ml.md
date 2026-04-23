---
layout: page
title: "[Individual Task] Machine Learning"
description: Implementation of Support Vector Machines (SVM) from scratch
img: assets/img/projects/2024_courseml_mainimg.png
# importance: 3
# category: 2024
importance: 2
category: "Course Term Project"
related_publications: false
---

Coding Assignement of GIST Machine Learning course (EC4213). Implementation of Support Vector Machines (SVM) from scratch. The project covers key concepts such as hard margin SVM, soft margin SVM (primal and dual formulations), and the use of kernel tricks to handle non-linear data.

- Course: GIST Machine Learning (EC4213)
- Project Type: SVM Implementation Individual Coding Assignment

An educational project focusing on the implementation of Support Vector Machines (SVM) from scratch. The project covers key concepts such as hard margin SVM, soft margin SVM (primal and dual formulations), and the use of kernel tricks to handle non-linear data.

The detailed [code](https://github.com/gyoenge/support-vector-machine-impl) can be found in the link.

<br>
<br>

### Overview

#### Hard margin SVM

We implemented the process of finding the optimal decision boundary using hinge loss and coordinate gradient descent.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/2024_courseml_inner1.png" title="preview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The result of Hard margin SVM.  
</div>

#### Soft margin SVM

We can find a decision boundary of two classes by solving dual problem. Slack variables allow misclassification.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/2024_courseml_inner2.png" title="preview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/2024_courseml_inner3.png" title="preview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The result of Soft margin SVM.  
</div>

#### Kernel Tricks

We implemented various kernel filters to SVM to compare their performance.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/2024_courseml_inner4.png" title="preview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The result of Kernel Tricks.  
</div>

<br>
<br>
