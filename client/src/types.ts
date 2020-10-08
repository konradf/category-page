export type Category = {
  name: string;
  categoryArticles: CategoryArticle;
  articleCount: number;
  childrenCategories: ChildCategory[];
};

export type Article = {
  name: string;
  variantName: string;
  prices: Prices;
  images: Image[];
};

export type ChildCategory = {
  name: string;
  urlPath: string;
  articleCount: number;
  categoryArticles: CategoryArticle;
};

export type Prices = {
  currency: string;
  regular: {
    value: number;
  };
};

export type Image = {
  path: string;
};

export type CategoryArticle = {
  articles: Article[];
};
