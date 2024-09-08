---
layout: page-blog
title: "Как сделать бургер кнопку на css с анимацией"
description: "В этом руководстве вы узнаете как сделать анимированную бургер кнопку которая часто применяется в мобильной адаптации на сайтах"
categories: blog
code: true
imagehome: true
date:  2024-08-16
tag: верстка
permalink: "blog/:year-:month-:day-:slug/"
images:
  imagehome: "images/2024/2024-08-16-kak-sdelat-burger-knopku-na-css-s-animatsiey/1.jpg" #968x544
  fullpost-webp: "images/2024/2024-08-16-kak-sdelat-burger-knopku-na-css-s-animatsiey/1.webp" #968x544
  fullpost-jpg: "images/2024/2024-08-16-kak-sdelat-burger-knopku-na-css-s-animatsiey/1.jpg" #968x544
  smallpost-webp: "images/2024/2024-08-16-kak-sdelat-burger-knopku-na-css-s-animatsiey/small-post.webp" #436x244
  smallpost-jpg: "images/2024/2024-08-16-kak-sdelat-burger-knopku-na-css-s-animatsiey/small-post.jpg" #436x244
  thumb-webp: "images/2024/2024-08-16-kak-sdelat-burger-knopku-na-css-s-animatsiey/thumb-post.webp" #248x140
  thumb-jpg: "images/2024/2024-08-16-kak-sdelat-burger-knopku-na-css-s-animatsiey/thumb-post.jpg" #248x140
---

<p>Для начала создадим простую html-разметку которая будет состоять всего из двух элементов - элемента кнопки button с классом <code>.burger</code> и span с классом <code>.burger__line</code> который будет выполнять роль линии:</p>

```html
<button type="button" class="burger">
  <span class="burger__line"></span>
</button>
```
<p>В псевдокласс <code>:root</code> добавим некоторые переменные:</p>

```css
:root {
  --timing: 0.3s;
  --bg-color: #3d3d49;
  --border-color: #4e4e5e;
  --white-color: #fff;
}
```

<p>Переменная <code>--timing</code> будет содержать время выполнения перехода из одного состояния в другое, <code>--bg-color</code>, <code>--border-color</code>, <code>--white-color</code> содержат цвета.</p>

<p>Добавим стили для body, в которых будет задано вычисление элементов страницы с учетом внутренних отступов и границ <code>box-sizing: border-box</code>, цвет фона страницы, а также выравнивание кнопки по центру страницы на <code>flex</code>, и высота страницы <code>100vh</code> чтобы можно было выровнять по вертикали:</p>
</p>

```css
body {
  box-sizing: border-box;
  background-color: var(--bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

<p>Теперь зададим стили для самой кнопки. Укажем размеры в 50 пикселей, цвет по умолчанию изменим на прозрачный, позиционирование <code>relative</code>, потому что относительно кнопки мы будем абсолютно позиционировать линии, курсор <code>pointer</code>, и добавим границу кнопки:</p>

```css
.burger {
  width: 50px;
  height: 50px;
  background-color: transparent;
  position: relative;
  cursor: pointer;
  border: 1px solid var(--border-color);
}
```

<p>Стилизуем линию в кнопке.</p>

<p>Укажем ей размеры, цвет, скругление, выровняем ее ровно по центру кнопки, отключаем возможность взаимодействия с элементом с помощью указателя при помощи <code>pointer-events</code>, линия будет медленно становиться прозрачной когда кнопка станет активной здесь же нам понадобится переменная <code>--timing</code>, при возвращении в обычное состояние нам понадобиться небольшая задержка, после длительности перехода выполним через функцию <code>calc()</code> умножение значения переменной <code>--timing</code> на 1.5, и значение временной функции <code>ease</code>:</p>

```css
.burger__line {
  width: 34px;
  height: 4px;
  background-color: var(--white-color);
  border-radius: 2px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: background-color var(--timing) calc(var(--timing) * 1.5) ease;
}
```

<p>Остальные линии мы сделаем псевдоэлементами <code>::before</code> и <code>::after</code>. Позиционируем элементы абсолютно, сдвинем наверх на -12 пикселей, а слева нулевой отступ, ширину и высоту как у родительской линии, также скругление в 2 пикселя и фон белый, переход сделаем для двух свойств, а именно для <code>top</code> и <code>transform</code>, для <code>top</code> необходимо указать задержку переменной <code>--timing</code> чтобы правильно случился переход:</p>

```css
.burger__line::before {
  content: "";
  position: absolute;
  top: -12px;
  left: 0;
  width: 34px;
  height: 4px;
  border-radius: 2px;
  background-color: var(--white-color);
  transition:
    top var(--timing) var(--timing) ease,
    transform var(--timing) ease;
}
```

<p>А для псевдоэлемента <code>::after</code> свойства будут те же, за исключением <code>top</code> опустим вниз на 12 пикселей:</p>

```css
.burger__line::after {
  content: "";
  position: absolute;
  top: 12px;
  left: 0;
  width: 34px;
  height: 4px;
  border-radius: 2px;
  background-color: var(--white-color);
  transition:
    top var(--timing) var(--timing) ease,
    transform var(--timing) ease;
}
```

<p>Когда мы будем нажимать на кнопку на нее будет добавлятся активный класс с помощью которого будет происходить анимация, напишем правила для этого.</p>

<p>Для главной линии делаем фон прозрачным, и плавный переход для него:</p>

```css
.burger--active .burger__line {
  background-color: transparent;
  transition: background-color var(--timing) ease;
}
```

<p>Псевдоэлемент выровняем по центру относительно родителя, и повернем на 45 градусов, укажем плавный переход для трансформаций и главное не забыть указать задержку для <code>transform</code>:</p>

```css
.burger--active .burger__line::before {
  top: 0;
  transform: rotate(45deg);
  transition:
    top var(--timing) ease,
    transform var(--timing) var(--timing) ease;
}
```

<p>Для псевдоэлемента <code>::after</code> все тоже самое только повернем в другую сторону указав в <code>transform</code> -45 градусов:</p>

```css
.burger--active .burger__line::after {
  top: 0;
  transform: rotate(-45deg);
  transition:
    top var(--timing) ease,
    transform var(--timing) var(--timing) ease;
}
```

<p>Со стилями все, теперь напишем небольшой скрипт который будет добавлять активный класс нашей кнопке при клике или нажатию.</p>

<p>Поместим нашу кнопку в переменную <code>burgerButton</code>, затем зададим слушатель события <code>click</code> на нее, в стрелочной функции укажем кнопке <code>classList.toggle</code> который будет переключать класс на активный:</p>

```js
let burgerButton = document.querySelector(".burger");

burgerButton.addEventListener("click", () => {
   burgerButton.classList.toggle("burger--active");
});
```

<p>Вот что должно получиться:</p>

<img src="images/2024/2024-08-16-kak-sdelat-burger-knopku-na-css-s-animatsiey/result.gif">