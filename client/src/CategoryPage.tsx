import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import Logo from './assets/logo.svg';
import { ArticleList, CategoryList, CategoryTitle, Search, Error, Loader } from './components';
import { Content, Footer, Header, Page, Sidebar } from './components/Layout';
import { categoryExists, fetchCategory, filterCategoryArticles, theme } from './libs';
import { useRouter } from './hooks';
import { Article, Category } from './types';

interface CategoryPageProps {
  id: string;
}

const CategoryPage: React.FunctionComponent<CategoryPageProps> = ({ id }) => {
  const [category, setCategory] = React.useState<Category>();
  const [articles, setArticles] = React.useState<Article[]>();
  const [search, setSearch] = React.useState('');
  const [error, setError] = React.useState(false);
  const [route, setRoute] = useRouter();

  React.useEffect(() => {
    fetchCategory(id)
      .then((category) => {
        setCategory(category);
      })
      .catch(() => {
        setError(true);
      });
  }, [id]);

  React.useEffect(() => {
    if (!category) return;
    if (!categoryExists(category, route)) {
      setRoute('');
      return;
    }
    setArticles(filterCategoryArticles(category, route, search));
  }, [category, route, setRoute, search]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Page>
        <Header>
          <figure>
            <img src={Logo} width="120" alt="Home 24" onClick={() => setRoute('')} />
          </figure>
          <Search placeholder="Search..." value={search} onChange={handleChange} />
        </Header>

        <Sidebar>
          <CategoryList categories={category?.childrenCategories} route={route} setRoute={setRoute} />
        </Sidebar>

        <Content>
          {!category && !error && <Loader />}
          {error && <Error />}
          {category && <CategoryTitle category={category} route={route} />}
          {articles && <ArticleList articles={articles} />}
        </Content>

        <Footer>Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und Versandkosten.</Footer>
      </Page>
    </ThemeProvider>
  );
};

export { CategoryPage };
