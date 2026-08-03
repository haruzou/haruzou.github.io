---
layout: page
title: research
permalink: /research/
description: 
nav: true
nav_order: 3
display_categories: [Optimal Control, Intelligent Control]
horizontal: false
---
# research vision
My research is positioned at the intersection of control engineering, electrified transportation, power electronics, and modern power systems. I focus on developing control-oriented models, advanced control strategies, optimal energy management algorithms, and simulation/HIL platforms for energy systems with high penetration of power electronics, electric vehicles, renewable energy resources, and distributed energy storage.

A central objective of my work is to use control engineering as a unifying methodological foundation to address the modeling, optimization, stability, and real-time implementation challenges of the energy transition. My research activities are organized around four flagship themes.

# projects

<!-- This is additional, not the original version -->
<style>
.projects h2.category {
  text-align: left;
  color: var(--global-theme-color);
}
</style>

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  <!-- change all project keyword to research, except projects_horizontal.liquid and projects.liquid -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_research = site.research | where: "category", category %}
  {% assign sorted_research = categorized_research | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_research %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_research %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->
{% assign sorted_research = site.research | sort: "importance" %}
  <!-- Generate cards for each project -->
{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_research %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_research %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
