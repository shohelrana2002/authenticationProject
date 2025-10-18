import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCardItem from "./NewsCardItem";

const NewsCard = () => {
  const [categoryNews, setCategoryNews] = useState([]);
  const { id } = useParams(); //string
  const data = useLoaderData();

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
    } else if (id == "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true
      );

      setCategoryNews(filteredNews);
    } else {
      const filteredNews = data.filter((news) => news?.category_id == id);
      setCategoryNews(filteredNews);
    }
  }, [id, data]);

  return (
    <>
      {categoryNews.map((news) => (
        <NewsCardItem key={news.id} news={news} />
      ))}
    </>
  );
};

export default NewsCard;
