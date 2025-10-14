const pluginDate = require("eleventy-plugin-date");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const pluginTOC = require("eleventy-plugin-toc");

module.exports = function (eleventyConfig) {
  eleventyConfig.setLibrary(
    'nunjucks',
    markdownIt().use(markdownItAnchor)
  );
  eleventyConfig.addPassthroughCopy("css/");
  eleventyConfig.addPassthroughCopy("img/");
  eleventyConfig.addPassthroughCopy("fonts/");
  eleventyConfig.addPassthroughCopy("js/");
  eleventyConfig.addPassthroughCopy("images/");
  eleventyConfig.addPassthroughCopy("favicon-dark.png");
  eleventyConfig.addPassthroughCopy("favicon-dark.svg");
  eleventyConfig.addPassthroughCopy("favicon-light.png");
  eleventyConfig.addPassthroughCopy("favicon-light.svg");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPlugin(pluginTOC, {
    wrapperClass: 'toc__navigation'
  });
  eleventyConfig.addPlugin(pluginDate);

  /* Фильтр для русской даты  */
  eleventyConfig.addFilter("ruDate", function (value) {
    return value.toLocaleString("ru", {
      year: "numeric",
      month: "numeric",
      day: "numeric"
    }).replace(" г.", "");
  });
  /* Фильтр для sitemap даты  */
  eleventyConfig.addFilter("mapDate", function (value) {
    return value.toISOString().split('T')[0];
  });
  /* 
  короткий код isHomePage, который принимает объект page (метаданные текущей страницы) и возвращает true, если page.url равен "/" (т.е. это главная страница), и false в противном случае.  
  Пример: 
  {% if isHomePage(page) %}
    <!-- Это главная страница -->
  {% else %}
    <!-- Это не главная страница -->
  {% endif %}
  !!! работает только для статических страниц у которых есть URL !!!
  */
  eleventyConfig.addFilter("isHomePage", function (page) {
    return page.url === "/";
  });

  /* Выведет последние два последних поста блога */
  eleventyConfig.addCollection("latestTwoBlogPosts", function (collectionApi) {
    return collectionApi.getAll()
      .filter(post => post.data.category === "blog")  // фильтр по категории
      .sort((a, b) => b.date - a.date)               // сортировка по дате, новые вперед
      .slice(0, 2);                                  // только 2 последних поста
  });

  /* Выведет последние две последние работы портфолио */
  eleventyConfig.addCollection("latestTwoPortfolioProjects", function (collectionApi) {
    return collectionApi.getAll()
      .filter(post => post.data.category === "projects")  // фильтр по категории
      .sort((a, b) => b.date - a.date)               // сортировка по дате, новые вперед
      .slice(0, 2);                                  // только 2 последних поста
  });

  eleventyConfig.addCollection("postsByCategory", function (collection) {
    let postsByCategory = [];

    collection.getAll().forEach(post => {
      let category = post.data.category;

      if (!postsByCategory[category]) {
        postsByCategory[category] = [];
      }

      postsByCategory[category].push(post);
    });

    return postsByCategory;
  });

  eleventyConfig.addGlobalData("siteTitle", "Сайт-Портфолио html-верстальщика Сергея Закирова")
  eleventyConfig.addGlobalData("siteDescription", "Я профессионально занимаюсь версткой сайтов, адаптивно и кроссбраузерно. На этом сайте вы можете ознакомится со списком моего портфолио.")
  eleventyConfig.addGlobalData("siteBaseurl", "/")
  eleventyConfig.addGlobalData("siteImagehome", "img/imagehome.jpg")
  eleventyConfig.addGlobalData("siteUrl", "https://sezak.ru")
  eleventyConfig.addGlobalData("email", "erega74@gmail.com")
  eleventyConfig.addGlobalData("telegram", "https://t.me/sezak74")
  eleventyConfig.addGlobalData("vk", "https://vk.com/id614911269")
  eleventyConfig.addGlobalData("github", "https://github.com/lorsalio7")

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "includes",
      layouts: "layouts"
    },
    dataTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk"]
  }
}