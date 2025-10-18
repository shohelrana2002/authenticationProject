import React from "react";
import { useLoaderData, useParams } from "react-router";

const Details = () => {
  const loader = useLoaderData();
  const { id } = useParams();

  const findId = loader.find((findDetails) => findDetails.id === id);

  console.log(findId);
  if (findId) {
    return (
      <div className="p-6 bg-gray-100 rounded-2xl shadow-lg max-w-xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          {findId.title}
        </h2>

        <div className="space-y-2 text-gray-600">
          <p>
            <span className="font-medium text-gray-700">Category ID:</span>{" "}
            {findId.category_id}
          </p>
          <p>
            <span className="font-medium text-gray-700">Total Views:</span>{" "}
            {findId.total_view}
          </p>
          <p>
            <span className="font-medium text-gray-700">Author:</span>{" "}
            {findId.author?.name}
          </p>
          <p>
            <span className="font-medium text-gray-700">Published:</span>{" "}
            {findId.author?.published_date}
          </p>
        </div>

        {findId.thumbnail_url && (
          <img
            src={findId.thumbnail_url}
            alt={findId.title}
            className="rounded-xl mt-5 shadow-md"
          />
        )}
      </div>
    );
  }

  return (
    <div className="text-center mt-10 text-red-500 text-lg font-medium">
      ❌ No matching data found for this ID.
    </div>
  );
};

export default Details;
