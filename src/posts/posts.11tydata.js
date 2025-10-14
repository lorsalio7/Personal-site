module.exports = {
  eleventyComputed: {
    permalink: (data) => {
      // категория из front matter (например, "blog" или "projects")
      const category = data.category || 'blog';

      // дата из front matter или имени файла
      const date = data.page.date
        ? new Date(data.page.date)
        : new Date();

      // Получаем год у поста
      const relative = data.page.filePathStem
        .replace(/^\/posts\//, "")   // убираем "posts/"
        .replace(/\/index$/, "");    // убираем "index" в конце

      const fullDate = date.toISOString().slice(0, 10); // "2023-03-12"

      // финальный путь

      if (category === "projects") {
        return `${category}/${relative}/`;
      } else {
        return `${category}/${fullDate}-${data.page.fileSlug}/`
      }
    },
    layout: (data) => {
      const category = data.category || "blog";
      if (category === "projects") return "page-projects.njk";
      if (category === "services") return "page-services.njk";
      if (category === "blog") return "page-blog.njk";
    }
  }
};