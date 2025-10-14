---
layout: "page-blog.njk"
title: "Как сделать пульсирующую анимацию на HTML и CSS"
description:  "Подробное руководство по созданию пульсирующей анимации для кнопки на HTML и CSS"
categories: blog
category: blog
tags: blog
code: true
imagehome: true
date:  2024-08-01
tag: верстка
images:
  imagehome: "images/2024/2024-08-01-kak-sdelat-pulsiruyushhuyu-animaciyu-na-html-i-css/1.jpg" #968x544
  fullpost-webp: "images/2024/2024-08-01-kak-sdelat-pulsiruyushhuyu-animaciyu-na-html-i-css/1.webp" #968x544
  fullpost-jpg: "images/2024/2024-08-01-kak-sdelat-pulsiruyushhuyu-animaciyu-na-html-i-css/1.jpg" #968x544
  smallpost-webp: "images/2024/2024-08-01-kak-sdelat-pulsiruyushhuyu-animaciyu-na-html-i-css/small-post.webp" #436x244
  smallpost-jpg: "images/2024/2024-08-01-kak-sdelat-pulsiruyushhuyu-animaciyu-na-html-i-css/small-post.jpg" #436x244
  thumb-webp: "images/2024/2024-08-01-kak-sdelat-pulsiruyushhuyu-animaciyu-na-html-i-css/thumb-post.webp" #248x140
  thumb-jpg: "images/2024/2024-08-01-kak-sdelat-pulsiruyushhuyu-animaciyu-na-html-i-css/thumb-post.jpg" #248x140
---

Для того чтобы сделать красивую пульсирующую анимацию нам понадобиться сделать простую разметку, для наглядности я вставил нужный нам элемент(кнопку button) в центровщик с классом center:

```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Пульсирующая анимация</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="center">
    <button class="button" type="button">Pulse</button>
  </div>

</body>
</html>
```

и стили для выравнивания по-центру, установив высоту в 100vh для flex-контейнера:

```css
.center {
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
```

далее оформим кнопку задав ей размер, цвет, радиус закругления, уберем бордер и установим позиционирование relative которое нам понадобиться для выравнивания псевдоэлементов относительно нашей кнопки:

```css
.button {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: none;
  background-color: crimson;
  color: #fff;
  position: relative;
}
```

<h2>Оформление пульсирующих волн</h2> 
<ul>
  <li>зададим размеры и радиус закругления наследуемые от родителя;</li>
  <li>выставим абсолютное позиционирование с верхнего левого угла;</li>
  <li>z-index укажем: -1, чтобы псевдоэлементы были позади кнопки;</li>
  <li>напишем свойство отвечающее за анимацию(animation) элемента - длительность 2 секунды, функция времени: ease, и укажем бесконечный повтор(infinite);</li>
</ul>

Для <b>::after</b> правила будут те же что и для <b>::before</b>, за исключением для <b>::after</b> дополнительно укажем время задержки(animation-delay: 0.3s) анимации, чтобы разделить пульсации элементов.

```css

.button::before {
  content: "";
  width: inherit;
  height: inherit;
  position: absolute;
  top: 0;
  left: 0;
  background-color: crimson;
  z-index: -1;
  border-radius: inherit;
  -webkit-animation: pulse 2s ease infinite;
  animation: pulse 2s ease infinite;
}

.button::after {
  content: "";
  width: inherit;
  height: inherit;
  position: absolute;
  top: 0;
  left: 0;
  background-color: crimson;
  z-index: -1;
  border-radius: inherit;
  -webkit-animation: pulse 2s ease infinite;
  animation: pulse 2s ease infinite;
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
```

<h2>Напишем анимацию pulse.</h2>
Сама анимация очень простая состоящая из двух свойств - transform и opacity. На первом этапе элемент слегка сжимается, а на втором увеличивается в 2.5 раза(вы можете указать любой размер) и одновременно плавно становиться непрозрачным.

```css
@-webkit-keyframes pulse {
  0% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
    opacity: 1;
  }

  100% {
    -webkit-transform: scale(2.5);
    transform: scale(2.5);
    opacity: 0;
  }
}
@keyframes pulse {
  0% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
    opacity: 1;
  }

  100% {
    -webkit-transform: scale(2.5);
    transform: scale(2.5);
    opacity: 0;
  }
}
```

Что в итоге у нас должно получиться:

<img src="images/2024/2024-08-01-kak-sdelat-pulsiruyushhuyu-animaciyu-na-html-i-css/pulsation.gif" alt="Пульсирующая анимация на HTML и CSS" width="400" height="300" loading="lazy">