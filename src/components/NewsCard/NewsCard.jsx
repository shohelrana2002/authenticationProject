import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const NewsCard = () => {
  const { id } = useParams(); //string
  const data = useLoaderData();

  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
    } else if (id == "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true
      );

      setCategoryNews(filteredNews);
    } else {
      // const filteredNews = data.filter((news) => news?.category_id == id);
      // setCategoryNews(filteredNews);
    }
  }, [id, data]);

  return (
    <div>
      <p>News Card{categoryNews.length}</p>
      {categoryNews.map((news) => (
        <div key={news.id}>
          <h3>{news.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
