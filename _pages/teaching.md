---
layout: page
permalink: /teaching/
title: Teaching
description: Oh, I ❤️ to teach!
nav: true
nav_order: 3
display_categories: [On Demand, YouTube, Podcast]
---

<div class="projects">
  <div class="course">
    <div>
      <h3>Fall 2024:</h3>
      <ul>
        <li>VTPB 927 Clinical Pathology - Acid base disturbance & Monovalent electrolytes</li>
        <li>VSCS 948 Innovation in Veterinary Medicine - AI Panel</li>
        <li>BIMS602 Foundations in Biomedical Graduate Education and Research - AI tools in research</li>
        <li>Anatomic Pathology Gross Rounds</li>
        <li>Clinical Pathology Cytology Rounds</li>
      </ul>
    </div>
    <div>
      <h3>Spring 2025:</h3>
      <ul>
        <li>Clinical Pathology Cytology Rounds</li>
        <li>Clinical Pathology Seminar</li>
      </ul>
    </div>
  </div>
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.teaching | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each teaching -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display teaching without categories -->

{% assign sorted_projects = site.teaching | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
