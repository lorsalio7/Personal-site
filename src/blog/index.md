---
title: "Блог с полезными статьями по веб-разработке и созданию сайтов"
description: "В этом блоге я делюсь своими знаниями в области веб-разработки, полезными советами, лайфхаками и актуальными трендами для начинающих и профессионалов"
cat: Проекты
layout: "posts.njk"
# tags: category
pagination:
  data: collections.blog
  size: 6
  reverse: true
permalink: "/blog/{% if pagination.pageNumber > 0 %}/page{{ pagination.pageNumber + 1 }}{% endif %}/index.html"
tag: "/blog/"
---
{% for post in pagination.items %}
  {% include "small-post.njk" %}
{% endfor %}