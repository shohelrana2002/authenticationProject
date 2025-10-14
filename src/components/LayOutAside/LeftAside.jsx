import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

const LeftAside = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div className="flex gap-y-3 flex-col">
      {category.map((cate) => (
        <NavLink to={`/newsCard/${cate.id}`} className="btn" key={cate.id}>
          {cate.name}
        </NavLink>
      ))}
    </div>
  );
};

export default LeftAside;
