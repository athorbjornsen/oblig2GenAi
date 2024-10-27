import React from 'react';


interface ArticleProps {
  title: string;
  image: string | null;
  category: string;
  published_at: string;
  onClick: () => void;
}

const ArticleCard: React.FC<ArticleProps> = ({ title, image, category, published_at, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="image-container">
        {image ? (
          <img src={image} alt={title} className="article-image" />
        ) : (
          <div className="placeholder">Image Unavailable</div>
        )}
      </div>
      <div className="article-details">
        <h3 className="article-title">{title}</h3>
        <p className="article-category">{category}</p>
        <p className="article-date">{new Date(published_at).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
