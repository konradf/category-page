import { categoryExists, filterCategoryArticles, getCategorySummary } from '../categoryHelpers';
import { Article, Category } from '../../types';

const categoryMock: Category = {
  name: 'MainCategory',
  articleCount: 231,
  childrenCategories: [
    {
      name: 'SubCategory1',
      urlPath: '/category/sub1',
      articleCount: 10,
      categoryArticles: {
        articles: [
          { name: 'subArticle1' } as Article,
          { name: 'subArticle2' } as Article,
          { name: 'other' } as Article,
        ],
      },
    },
    {
      name: 'SubCategory2',
      urlPath: '/category/sub2',
      articleCount: 30,
      categoryArticles: {
        articles: [
          { name: 'subArticle3' } as Article,
          { name: 'subArticle4' } as Article,
          { name: 'other2' } as Article,
        ],
      },
    },
  ],
  categoryArticles: {
    articles: [{ name: 'MainArticle' } as Article],
  },
};

describe('categoryHelpers', () => {
  describe('categoryExists', () => {
    it('returns true for empty route', () => {
      expect(categoryExists(categoryMock, '')).toBe(true);
    });

    it('returns true for existing subcategory', () => {
      expect(categoryExists(categoryMock, '/category/sub2')).toBe(true);
    });

    it('returns false for non-existing route', () => {
      expect(categoryExists(categoryMock, '/category/sub3')).toBe(false);
    });
  });

  describe('filterCategoryArticles', () => {
    it('returns articles for main category', () => {
      const mainArticles = categoryMock.categoryArticles.articles;

      expect(filterCategoryArticles(categoryMock, '', '')).toEqual(mainArticles);
    });

    it('returns articles for sub category', () => {
      const subCategoryArticles = categoryMock.childrenCategories[0].categoryArticles.articles;

      expect(filterCategoryArticles(categoryMock, '/category/sub1', '')).toEqual(subCategoryArticles);
    });

    it('returns articles filtered by search', () => {
      const subCategoryArticles = [{ name: 'subArticle1' }, { name: 'subArticle2' }];

      expect(filterCategoryArticles(categoryMock, '/category/sub1', 'subArticle')).toEqual(subCategoryArticles);
    });

    it('returns articles filtered by search for other category', () => {
      const subCategoryArticles = [{ name: 'other2' }];

      expect(filterCategoryArticles(categoryMock, '/category/sub2', 'oth')).toEqual(subCategoryArticles);
    });
  });
});
