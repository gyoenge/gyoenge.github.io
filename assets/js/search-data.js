// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my developing projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-2025-2026-gist-undergraduate-research-internship",
        
          title: "2025~2026 GIST Undergraduate Research Internship",
        
        description: "Research internship experience in Medical AI and Computer Vision at GIST",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/research-internships/";
          
        },
      },{id: "post-2025-korea-university-exchange-student",
        
          title: "2025 Korea University Exchange Student",
        
        description: "Exchange student experience at Korea University (Jun-Dec 2025)",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ku-exchange/";
          
        },
      },{id: "post-2024-uc-berkeley-summer-session",
        
          title: "2024 UC Berkeley Summer Session",
        
        description: "Academic and personal experiences in Berkeley, California (Jun-Aug 2024)",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/berkeley-summer/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-oop-course-c-team-project",
          title: 'OOP Course C++ Team Project',
          description: "A smart refrigerator management and recipe recommendation system in C++, demonstrating object-oriented programming principles",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2023_course_oopcpp/";
            },},{id: "projects-safety-detection-with-grounding-dino",
          title: 'Safety Detection with Grounding DINO',
          description: "An AI-powered safety alert system, which analyzes CCTV to detect dangers and alerts users via a mobile application, utilizing Grounding DINO model",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2023_netchallenge/";
            },},{id: "projects-ping-pong-robot-vision-system",
          title: 'Ping-pong Robot Vision System',
          description: "We utilized OpenCV for its stereo vision system, a trajectory approximation algorithm for prediction, and a multiprocessing architecture to enable a fast response",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2023_pingpongrobot/";
            },},{id: "projects-ai4good-team-hackathon",
          title: 'AI4Good Team Hackathon',
          description: "Assistive learning tool prototype that improves graphic accessibility for the visually impaired by converting elements from PPT slides (figures, texts, diagrams) into a Braille pad",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2024_ai4good/";
            },},{id: "projects-comp-system-course-team-project",
          title: 'Comp System Course Team Project',
          description: "An educational project demonstrating cloud computer system concepts in Kubernetes by building and deploying a full-stack AI application",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2024_course_compsys/";
            },},{id: "projects-deep-learning-course-team-project",
          title: 'Deep Learning Course Team Project',
          description: "A mobile application that uses a two-stage deep learning pipeline to detect meat in an image and classify its level of doneness",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2024_course_dl/";
            },},{id: "projects-machine-learning-course-project",
          title: 'Machine Learning Course Project',
          description: "Implementation of Support Vector Machines (SVM) from scratch",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2024_course_ml/";
            },},{id: "projects-computer-vision-course-project",
          title: 'Computer Vision Course Project',
          description: "Implementation of Robust Photometric Stereo, Structure From Motion, Supervised Depth Refinement",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2025_course_cv/";
            },},{id: "projects-research-intern-with-epiagent-downstreams",
          title: 'Research Intern with EpiAgent Downstreams',
          description: "EpiAgent AD(Alzheimer Disease) Insilico task. Cell-type–aware extension of EpiAgent with LoRA",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2025_dmcb_epiagent/";
            },},{id: "projects-k-tour-memory-generate-studio",
          title: 'K-Tour Memory Generate Studio',
          description: "A generative AI service that produces personalized souvenirs using elements of Korean tradition",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2025_ktourmemory/";
            },},{id: "projects-vision-language-model-for-multiple-choice-vqa",
          title: 'Vision-Language Model for Multiple-choice VQA',
          description: "DACON 2025 Samsung Collegiate Programming Challenge AI (Developing a multimodal AI model to understand everyday photos in smartphone user galleries)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2025_scpcdacon/";
            },},{id: "projects-club-tave-16th-project-team-medivision",
          title: 'Club TAVE 16th Project - Team MediVision',
          description: "3D Medical SAM with Frequency-based Dual-path Adapter",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2025_tave_medivision/";
            },},{id: "projects-research-intern-with-radiomics-pathomics-cl",
          title: 'Research Intern with Radiomics-Pathomics CL',
          description: "Radiomics and Rathomics Contrastive Learning (RaPaCL) for Spatial Transcriptomics Prediction",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2026_aimed_rapacl/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
