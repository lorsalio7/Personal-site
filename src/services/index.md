---
title: "Услуги"
description: "Список услуг которые я предоставляю"
cat: Услуги
layout: "services.njk"
# tags: services
pagination:
  data: collections.services
  size: 6
  reverse: true
permalink: "/services/{% if pagination.pageNumber > 0 %}/page{{ pagination.pageNumber + 1 }}{% endif %}/index.html"
tag: "/services/"
---
{% for post in pagination.items %}
  {% include "small-post.njk" %}
{% endfor %}