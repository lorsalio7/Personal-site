---
layout: page-blog
title: "Как сделать градиентный текст на css и анимировать его"
description: "Небольшое руководство о том как легко сделать буквально в несколько строк градиентный текст, который часто встречается на различных сайтах и анимируем его"
categories: blog
code: true
imagehome: true
date:  2024-08-02
tag: верстка
permalink: "blog/:year-:month-:day-:slug/"
images:
  imagehome: "images/2024/2024-08-02-kak-sdelat-gradientnyj-tekst-na-css-i-animirovat-ego/1.jpg" #968x544
  fullpost-webp: "images/2024/2024-08-02-kak-sdelat-gradientnyj-tekst-na-css-i-animirovat-ego/1.webp" #968x544
  fullpost-jpg: "images/2024/2024-08-02-kak-sdelat-gradientnyj-tekst-na-css-i-animirovat-ego/1.jpg" #968x544
  smallpost-webp: "images/2024/2024-08-02-kak-sdelat-gradientnyj-tekst-na-css-i-animirovat-ego/small-post.webp" #436x244
  smallpost-jpg: "images/2024/2024-08-02-kak-sdelat-gradientnyj-tekst-na-css-i-animirovat-ego/small-post.jpg" #436x244
  thumb-webp: "images/2024/2024-08-02-kak-sdelat-gradientnyj-tekst-na-css-i-animirovat-ego/thumb-post.webp" #248x140
  thumb-jpg: "images/2024/2024-08-02-kak-sdelat-gradientnyj-tekst-na-css-i-animirovat-ego/thumb-post.jpg" #248x140
---

<p>Нам понадобится сделать простую разметку:</p>

```html
<body>
  <p class="text">Градиентный текст</p>
</body>
```

<p>Весь остальной код будет в CSS. Для начала оформим текст необязательными свойствами: установим шрифт без засечек, т.к. я выбрал тег &lt;p&gt; для обертки текста нам нужно будет его преобразовать в строчно-блочный элемент, чтобы правильно отображался градиент, и зададим размер текста в 80 пикселей:</p>

```css
.text {
  font-family: Inter, sans-serif;
  text-transform: uppercase;
  display: inline-block;
  font-size: 80px;
}
```

<p>Теперь зададим сам градиент нашему тексту, точнее фон</p>

```css
.text {
  …
  background: -webkit-gradient(linear, right top, left top, from(#f1d335), color-stop(50%, #db01ff), to(#f1d335));
  background: -o-linear-gradient(right, #f1d335 0%, #db01ff 50%, #f1d335 100%);
  background: linear-gradient(to left, #f1d335 0%, #db01ff 50%, #f1d335 100%);
}
```

<p>Установим два важных свойства, которые применят и обрежут градиент на нашем тексте:</p>

```css
.text {
  …
  background-clip: text;
  -webkit-background-clip: text;
  text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
}
```

<p>Расширим фон текста на 200% чтобы анимация работала стабильно</p>

```css
.text {
  …
  background-size: 200%;
}
```

<p>Зададим свойства анимации: назовём нашу анимацию animationGradient, время длительности 5 секунд, ускорение линейное, и количество итераций бесконечное:</p>

```css
.text {
  …
  animation: animationGradient 5s linear infinite;
  -webkit-animation: animationGradient 5s linear infinite;
}
```

<p>Теперь сама анимация, которая будет основана на движении фона по оси X:</p>

```css
@-webkit-keyframes animationGradient {
  0% {
    background-position: -100% 0%;
  }
  100% {
    background-position:  100% 0%;
  }
}

@keyframes animationGradient {
  0% {
    background-position: -100% 0%;
  }
  100% {
    background-position:  100% 0%;
  }
}
```

<p>В итоге у нас должна получиться плавная анимация градиентного текста:</p>

<img src="images/2024/2024-08-02-kak-sdelat-gradientnyj-tekst-na-css-i-animirovat-ego/result.gif" alt="Анимированный градентный текст на CSS" width="930" height="279" loading="lazy">
