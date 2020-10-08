import { Category } from '../types';

const categoryExists = (category: Category, route: string) => {
  return route === '' ? true : category.childrenCategories.some(({ urlPath }) => urlPath === route);
};

const getArticlesFromCategory = (category: Category, route: string) => {
  return route === ''
    ? category.categoryArticles.articles // Main category
    : category.childrenCategories.find(({ urlPath }) => urlPath === route)?.categoryArticles.articles;
};

const filterCategoryArticles = (category: Category, route: string, search: string) => {
  return getArticlesFromCategory(category, route)?.filter(
    // Case insensitive comparison
    ({ name }) => name.toLowerCase().includes(search.toLowerCase())
  );
};

const getCategorySummary = (category: Category, route: string) => {
  if (route === '') {
    return { name: category.name, articleCount: category.articleCount };
  }
  const { name, articleCount } = category.childrenCategories.find(({ urlPath }) => urlPath === route) || {};

  return { name, articleCount };
};

export { categoryExists, filterCategoryArticles, getCategorySummary };
