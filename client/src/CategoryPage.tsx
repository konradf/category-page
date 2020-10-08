import React from 'react';
import Logo from './assets/logo.svg';
import { ArticleList, CategoryList, CategoryTitle } from './components';
import { Content, Footer, Header, Page, Sidebar } from './components/Layout';
import { Article, Category } from './types';
import { categoryExists, fetchCategory, filterCategoryArticles } from './libs';
import { useRouter } from './hooks';

interface CategoryPageProps {
  id: string;
}

const CategoryPage: React.FunctionComponent<CategoryPageProps> = ({ id }) => {
  const [category, setCategory] = React.useState<Category>();
  const [articles, setArticles] = React.useState<Article[]>();
  const [search, setSearch] = React.useState('');
  const [route, setRoute] = useRouter();

  React.useEffect(() => {
    fetchCategory(id).then((category) => {
      setCategory(category);
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

  const categories = category?.childrenCategories ?? [];

  return (
    <Page>
      <Header>
        <img src={Logo} width="120" alt="Home 24" onClick={() => setRoute('')} />
        <input placeholder={'Search'} value={search} onChange={handleChange} />
      </Header>

      <Sidebar>
        <h3>Kategorien</h3>
        <CategoryList categories={categories} route={route} setRoute={setRoute} />
      </Sidebar>

      <Content>
        {category && <CategoryTitle category={category} route={route} />}
        {articles && <ArticleList articles={articles} />}
      </Content>

      <Footer>Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und Versandkosten.</Footer>
    </Page>
  );
};

export { CategoryPage };
