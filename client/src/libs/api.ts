import { Category } from '../types';

export const fetchCategory = async (categoryId: string, locale: string = 'de_DE'): Promise<Category> => {
  const response = await fetch('/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query categories {
        categories(ids: "${categoryId}", locale: ${locale}) {
          name
          articleCount
          childrenCategories {
            name
            urlPath
            articleCount
            ...categoryArticles
          }
          ...categoryArticles
        }
      }
      
      fragment categoryArticles on Category {
        categoryArticles(first: 50) {
          articles {
            name
            variantName
            prices {
              currency
              regular {
                value
              }
            }
            images(format: WEBP, maxWidth: 200, maxHeight: 200, limit: 1) {
              path
            }
          }
        }
      }`,
    }),
  });

  const { data } = await response.json();

  return data.categories[0];
};
