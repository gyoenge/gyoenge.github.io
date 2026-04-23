---
layout: page
title: "Comp System Course Team Project"
description: An educational project demonstrating cloud computer system concepts in Kubernetes by building and deploying a full-stack AI application
img: assets/img/projects/2024_coursecompsys_mainimg.png
# importance: 4
# category: 2024
importance: 4
category: "Course Project"
related_publications: false
---

Team project of GIST Computer Systems Theory and Laboratory course (EC3102). This project demonstrates cloud computing concepts by deploying a full-stack AI application on Kubernetes. This repository contains the FastAPI Backend code using OpenAI API.

- Course: GIST Computer Systems Theory and Laboratory course (EC3102)
- Project Type: Kubernetes AI Service Team Project
- Team Size: 3 Members
- Trepository is migrated from EC3102-Mobilex-Chunsik/dream-interpretation-app

An educational project demonstrating cloud computer system concepts in Kubernetes by building and deploying a full-stack AI application. This service, Dreamcatcher, provides AI-powered dream interpretations using a React frontend, a FastAPI backend, and the OpenAI API. The entire application is containerized with Docker and automatically deployed to a K3s cluster via a CI/CD pipeline built with GitHub Actions and managed by a Helm Chart.

The detailed [code](EC3102-Mobilex-Chunsik/dream-interpretation-app) can be found in the link. (My role: [backend](https://github.com/gyoenge/dream-interpretation-app-backend?tab=readme-ov-file) and [infra](https://github.com/gyoenge/dream-interpretation-app-infra))

Below is a preview of the proposed idea:

<br>

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/2024_coursecompsys_inner1.png" title="preview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The preview/prototype of the proposed idea.  
</div>

<br>

#### Infra Architecture

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/2024_coursecompsys_inner2.png" title="preview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The overview of infra architecture.  
</div>

#### Backend Mockup

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0 text-center">
        <video class="img-fluid rounded z-depth-1" controls>
            <source src="{{ 'assets/img/projects/2024_coursecompsys_inner3.mov' | relative_url }}" type="video/mp4">
        </video>
    </div>
</div>
<div class="caption text-center">
    Backend Mockup.
</div>

<br>
<br>
