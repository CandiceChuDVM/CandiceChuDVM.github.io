// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "My research centers on advancing veterinary medicine through innovative applications of artificial intelligence (AI) and machine learning (ML). This includes developing AI-driven diagnostic tools for veterinary cytopathology, creating specialized datasets and benchmarks for AI applications, and identifying microRNA biomarkers to enable early disease detection.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Oh, I ❤️ to teach!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "For speaker invitaiton, please email Dr. Chu - cchu [at] cvm [dot] tamu [dot] edu",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-people",
          title: "People",
          description: "Dr. Chu&#39;s lab members",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Click on the PDF icon for my complete CV 👉",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-a-post-with-image-galleries",
      
        title: "a post with image galleries",
      
      description: "this is what included image galleries could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/12/04/photo-gallery.html";
        
      },
    },{id: "post-a-post-with-tabs",
      
        title: "a post with tabs",
      
      description: "this is what included tabs in a post could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/05/01/tabs.html";
        
      },
    },{id: "post-a-post-with-typograms",
      
        title: "a post with typograms",
      
      description: "this is what included typograms code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/04/29/typograms.html";
        
      },
    },{id: "post-a-post-that-can-be-cited",
      
        title: "a post that can be cited",
      
      description: "this is what a post that can be cited looks like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/04/28/post-citation.html";
        
      },
    },{id: "post-a-post-with-pseudo-code",
      
        title: "a post with pseudo code",
      
      description: "this is what included pseudo code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/04/15/pseudocode.html";
        
      },
    },{id: "post-a-post-with-code-diff",
      
        title: "a post with code diff",
      
      description: "this is how you can display code diffs",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/01/27/code-diff.html";
        
      },
    },{id: "post-a-post-with-advanced-image-components",
      
        title: "a post with advanced image components",
      
      description: "this is what advanced image components could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/01/27/advanced-images.html";
        
      },
    },{id: "post-a-post-with-vega-lite",
      
        title: "a post with vega lite",
      
      description: "this is what included vega lite code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/01/27/vega-lite.html";
        
      },
    },{id: "post-a-post-with-geojson",
      
        title: "a post with geojson",
      
      description: "this is what included geojson code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/01/26/geojson-map.html";
        
      },
    },{id: "post-a-post-with-echarts",
      
        title: "a post with echarts",
      
      description: "this is what included echarts code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/01/26/echarts.html";
        
      },
    },{id: "post-a-post-with-chart-js",
      
        title: "a post with chart.js",
      
      description: "this is what included chart.js code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/01/26/chartjs.html";
        
      },
    },{id: "post-a-post-with-tikzjax",
      
        title: "a post with TikZJax",
      
      description: "this is what included TikZ code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/12/12/tikzjax.html";
        
      },
    },{id: "post-a-post-with-bibliography",
      
        title: "a post with bibliography",
      
      description: "an example of a blog post with bibliography",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/07/12/post-bibliography.html";
        
      },
    },{id: "post-a-post-with-jupyter-notebook",
      
        title: "a post with jupyter notebook",
      
      description: "an example of a blog post with jupyter notebook",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/07/04/jupyter-notebook.html";
        
      },
    },{id: "post-a-post-with-custom-blockquotes",
      
        title: "a post with custom blockquotes",
      
      description: "an example of a blog post with custom blockquotes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/05/12/custom-blockquotes.html";
        
      },
    },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
      
        title: "a post with table of contents on a sidebar",
      
      description: "an example of a blog post with table of contents on a sidebar",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/04/25/sidebar-table-of-contents.html";
        
      },
    },{id: "post-a-post-with-audios",
      
        title: "a post with audios",
      
      description: "this is what included audios could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/04/25/audios.html";
        
      },
    },{id: "post-a-post-with-videos",
      
        title: "a post with videos",
      
      description: "this is what included videos could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/04/24/videos.html";
        
      },
    },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
      
        title: "displaying beautiful tables with Bootstrap Tables",
      
      description: "an example of how to use Bootstrap Tables",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/03/20/tables.html";
        
      },
    },{id: "post-a-post-with-table-of-contents",
      
        title: "a post with table of contents",
      
      description: "an example of a blog post with table of contents",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/03/20/table-of-contents.html";
        
      },
    },{id: "post-a-post-with-giscus-comments",
      
        title: "a post with giscus comments",
      
      description: "an example of a blog post with giscus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/external-services/2022/12/10/giscus-comments.html";
        
      },
    },{id: "post-a-post-with-redirect",
      
        title: "a post with redirect",
      
      description: "you can also redirect to assets like pdf",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/example_pdf.pdf";
        
      },
    },{id: "post-a-post-with-diagrams",
      
        title: "a post with diagrams",
      
      description: "an example of a blog post with diagrams",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/2021/07/04/diagrams.html";
        
      },
    },{id: "post-a-distill-style-blog-post",
      
        title: "a distill-style blog post",
      
      description: "an example of a distill-style blog post and main elements",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/2021/05/22/distill.html";
        
      },
    },{id: "post-a-post-with-twitter",
      
        title: "a post with twitter",
      
      description: "an example of a blog post with twitter",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/external-services/2020/09/28/twitter.html";
        
      },
    },{id: "post-a-post-with-disqus-comments",
      
        title: "a post with disqus comments",
      
      description: "an example of a blog post with disqus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/external-services/2015/10/20/disqus-comments.html";
        
      },
    },{id: "post-a-post-with-math",
      
        title: "a post with math",
      
      description: "an example of a blog post with some math",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2015/10/20/math.html";
        
      },
    },{id: "post-a-post-with-code",
      
        title: "a post with code",
      
      description: "an example of a blog post with some code",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2015/07/15/code.html";
        
      },
    },{id: "post-a-post-with-images",
      
        title: "a post with images",
      
      description: "this is what included images could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2015/05/15/images.html";
        
      },
    },{id: "post-a-post-with-formatting-and-links",
      
        title: "a post with formatting and links",
      
      description: "march &amp; april, looking forward to summer",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2015/03/15/formatting-and-links.html";
        
      },
    },{id: "news-media-coverage-cvm-students-win-awards-at-acvp-annual-meeting-vmbs-news",
          title: '📺 Media coverage: CVM Students Win Awards at ACVP Annual Meeting (VMBS News)...',
          description: "",
          section: "News",},{id: "news-media-coverage-cvm-brings-home-top-awards-from-annual-pathology-meeting-vmbs-news",
          title: '📺 Media coverage: CVM Brings Home Top Awards from Annual Pathology Meeting (VMBS...',
          description: "",
          section: "News",},{id: "news-️-video-i-am-cvm-dr-candice-chu-vmbs-facebook",
          title: '🖥️ Video: I AM CVM - Dr. Candice Chu (VMBS Facebook)',
          description: "",
          section: "News",},{id: "news-article-top-3-conditions-missed-by-skipping-urinalysis-clinician-s-brief",
          title: '📝 Article: Top 3 Conditions Missed by Skipping Urinalysis (Clinician’s Brief)',
          description: "",
          section: "News",},{id: "news-chu-lab-welcomes-first-graduate-student-dr-yumi-chang",
          title: 'Chu Lab welcomes first graduate student - Dr. Yumi Chang! 👏',
          description: "",
          section: "News",},{id: "news-on-demand-webinar-all-you-need-to-know-about-round-cell-tumor-cytology-vetgirl",
          title: '🌐 On-demand webinar: All you Need to Know About Round Cell Tumor Cytology...',
          description: "",
          section: "News",},{id: "news-dr-chu-is-offically-back-to-aggieland-to-establish-the-chu-lab",
          title: 'Dr. Chu is offically back to Aggieland to establish the Chu Lab! 👏...',
          description: "",
          section: "News",},{id: "news-media-coverage-texas-a-amp-amp-m-researcher-explores-benefits-of-ai-in-veterinary-medicine-education-texas-a-amp-amp-m-today",
          title: '📺 Media coverage: Texas A&amp;amp;amp;M Researcher Explores Benefits Of AI In Veterinary Medicine,...',
          description: "",
          section: "News",},{id: "news-article-canine-round-cell-tumor-cytology-vet-focus",
          title: '📝 Article: Canine Round Cell Tumor Cytology (Vet Focus)',
          description: "",
          section: "News",},{id: "news-on-demand-webinar-how-i-streamline-academic-writing-with-ai-and-digital-tools-acvim",
          title: '🌐 On-demand webinar: How I Streamline Academic Writing with AI and Digital Tools...',
          description: "",
          section: "News",},{id: "news-article-dr-chu-has-published-banish-the-pdf-hunting-blues-with-these-ai-and-digital-tools-nature-career-column",
          title: '📝 Article: Dr. Chu has published Banish the PDF-hunting blues with these AI...',
          description: "",
          section: "News",},{id: "news-podcast-listen-to-the-a-c-v-p-podcast-for-a-conversation-with-dr-candice-chu-on-spotify-or-apple-podcasts",
          title: '🔈 Podcast: Listen to The A.C.V.P. Podcast for A Conversation with Dr. Candice...',
          description: "",
          section: "News",},{id: "news-️-video-watch-dr-chu-s-research-conversation-series-talk-how-i-streamline-academic-writing-with-ai-and-digital-tools-on-youtube",
          title: '🖥️ Video: Watch Dr. Chu’s Research Conversation Series talk How I Streamline Academic...',
          description: "",
          section: "News",},{id: "news-dr-chu-has-been-appointed-to-join-the-american-veterinary-medical-association-avma-task-force-on-emerging-technologies-and-innovation-to-advance-veterinary-medicine",
          title: 'Dr. Chu has been appointed to join the American Veterinary Medical Association (AVMA)...',
          description: "",
          section: "News",},{id: "news-workshop-dr-chu-is-hosting-data-science-for-veterinary-researchers-with-texas-a-amp-amp-m-institute-of-data-science-on-feb-17-21-2025",
          title: '👩‍🏫 Workshop: Dr. Chu is hosting Data Science for Veterinary Researchers with Texas...',
          description: "",
          section: "News",},{id: "news-️-conference-dr-chu-is-heading-to-the-vmx-2025-veterinary-conference-to-teach-hematology-and-talk-about-ai",
          title: '✈️ Conference: Dr. Chu is heading to the VMX 2025 Veterinary Conference to...',
          description: "",
          section: "News",},{id: "projects-microrna-in-feline-ckd",
          title: 'MicroRNA in Feline CKD',
          description: "EveryCat Health Foundation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project_research_catmicrorna/";
            },},{id: "projects-what-s-your-diagnosis-wyd-database",
          title: 'What’s Your Diagnosis (WYD) Database',
          description: "A free, searchable, easy-to-use platform that includes all WYD articles published in Veterinary Clinical Pathology since 2008.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-application-of-ai-chatbot-in-veterinary-education",
          title: 'Application of AI Chatbot in Veterinary Education',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project_research_vetclinpathgpt/";
            },},{id: "projects-vetclinpathgpt",
          title: 'VetClinPathGPT',
          description: "A free veterinary clinical pathology AI tutor",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "teaching-a-conversation-with-dr-candice-chu",
          title: 'A conversation with Dr. Candice Chu',
          description: "ACVP Podcast (12/7/2024)",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/10_teaching/";
            },},{id: "teaching-top-3-conditions-missed-by-skipping-urinalysis",
          title: 'Top 3 Conditions Missed by Skipping Urinalysis',
          description: "Clinician’s Brief (1/15/2024)",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/11_teaching/";
            },},{id: "teaching-how-i-streamline-academic-writing-with-ai-and-digital-tools",
          title: 'How I Streamline Academic Writing with AI and Digital Tools',
          description: "ACVIM - Free to all ACVIM Candidates and Diplomates (11/2024)",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/12_teaching_ondemand_acvim/";
            },},{id: "teaching-chatgpt-in-veterinary-medicine-how-artificial-intelligence-can-benefit-you",
          title: 'ChatGPT in Veterinary Medicine - How Artificial Intelligence Can Benefit You',
          description: "VIN (7/14/2024)",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/13_teaching_ondemand_VIN/";
            },},{id: "teaching-all-you-need-to-know-about-round-cell-tumor-cytology",
          title: 'All You Need to Know About Round Cell Tumor Cytology',
          description: "VETgirl - $50.00 (2/6/2024)",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/13_teaching_ondemand_vetgirl/";
            },},{id: "teaching-streamlining-academic-writing-with-ai-and-digital-tools-for-enhacing-productivity",
          title: 'Streamlining Academic Writing with AI and Digital Tools for Enhacing Productivity',
          description: "AI - TAMU Research Conversation (11/12/2024)",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/1_teaching/";
            },},{id: "teaching-google-notebooklm-turned-my-cv-into-a-podcast",
          title: 'Google NotebookLM Turned My CV into a Podcast',
          description: "AI (9/14/2024)",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/2_teaching/";
            },},{id: "teaching-approach-to-veterinary-cytology",
          title: 'Approach to Veterinary Cytology',
          description: "Cytology",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/3_teaching/";
            },},{id: "teaching-how-to-take-cytology-pictures-using-your-smartphone",
          title: 'How to Take Cytology Pictures Using Your Smartphone?',
          description: "Cytology",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/4_teaching/";
            },},{id: "teaching-keys-to-successful-scientific-presentations",
          title: 'Keys to Successful Scientific Presentations',
          description: "Grad School 101",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/5_teaching/";
            },},{id: "teaching-design-a-great-slide-presentation",
          title: 'Design a Great Slide Presentation',
          description: "Grad School 101",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/6_teaching/";
            },},{id: "teaching-can-ai-improve-veterinary-diagnostics-and-academic-efficiency",
          title: 'Can AI Improve Veterinary Diagnostics and Academic Efficiency?',
          description: "Digital Pathology (10/17/2024)",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/7_teaching/";
            },},{id: "teaching-how-to-build-your-own-chatgpt",
          title: 'How to Build Your Own ChatGPT?',
          description: "AI - TAMU Center for Teaching Excellence (10/16/2024)",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/8_teaching/";
            },},{id: "teaching-how-to-analyze-rna-seq-data",
          title: 'How to Analyze RNA-Seq Data?',
          description: "Bioinformatics",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/9_teaching/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%63%68%75@%63%76%6D.%74%61%6D%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-8543-7233", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=cv_brEAAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/candicechudvm", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/candicechudvm", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@candicechudvm", "_blank");
        },
      },{
        id: 'social-facebook',
        title: 'Facebook',
        section: 'Socials',
        handler: () => {
          window.open("https://facebook.com/vet.clin.path.professor", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/vet.clin.path.professor", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
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
