---
title: "Список выполненных мною проектов"
description: "Все работы которые я выполнил."
cat: Проекты
layout: "projects.njk"
# tags: category
pagination:
  data: collections.projects
  size: 6
  reverse: true
permalink: "/projects/{% if pagination.pageNumber > 0 %}/page{{ pagination.pageNumber + 1 }}{% endif %}/index.html"
tag: "/projects/"
---
{% for post in pagination.items %}
  {% include "small-post.njk" %}
{% endfor %}