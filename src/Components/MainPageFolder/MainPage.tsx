import React, { useEffect, useState } from 'react';
import ArticleCard from '../ArticleCardFolder/ArticleCard';


interface Article {
  author: string;
  title: string;
  description: string;
  url: string;
  source: string;
  image: string;
  category: string;
  language: string;
  country: string;
  published_at: string;
}

const MainPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `http://api.mediastack.com/v1/news?access_key=32c50dafa58a712b3034d29f78beed69&limit=20&languages=en`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }

        const data = await response.json();
        const filteredArticles = data.data.filter((article: Article) => article.image); // Only include articles with images
        setArticles(filteredArticles);
      } catch (error: any) {
        console.error('Error fetching articles:', error);
        setError(error.message);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="main-page">
      <h2>News</h2>
      {error && <p className="error">{error}</p>}
      <div className="articles-list">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            image={article.image}
            category={article.category}
            published_at={article.published_at}
            onClick={() => window.open(article.url, "_blank")}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
