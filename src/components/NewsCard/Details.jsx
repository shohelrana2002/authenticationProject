import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import RightAside from "../LayOutAside/RightAside";
import Header from "../Header/Header";

const Details = () => {
  const navigate = useNavigate();
  const loader = useLoaderData();
  const { id } = useParams();

  const findId = loader.find((findDetails) => findDetails.id === id);

  if (findId) {
    return (
      <>
        <div>
          <Header />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-10 max-w-7xl mx-auto px-4">
            {/* ---------- Left Content Section ---------- */}
            <div className="lg:col-span-9">
              <h2 className="font-semibold text-xl">Dragon News</h2>
              <div className="p-6 bg-white rounded-2xl  hover:shadow-2xl transition-all duration-300">
                <h2 className="text-3xl font-bold text-gray-800 mb-5 border-b pb-3">
                  {findId.title}
                </h2>

                {findId.thumbnail_url && (
                  <img
                    src={findId.thumbnail_url}
                    alt={findId.title}
                    className="rounded-xl mb-6 shadow-md w-full h-[300px] object-cover"
                  />
                )}

                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    <span className="font-medium text-gray-800">
                      Category ID:
                    </span>{" "}
                    {findId.category_id}
                  </p>
                  <p>
                    <span className="font-medium text-gray-800">
                      Total Views:
                    </span>{" "}
                    {findId.total_view}
                  </p>
                  <p>
                    <span className="font-medium text-gray-800">Author:</span>{" "}
                    {findId.author?.name}
                  </p>
                  <p>
                    <span className="font-medium text-gray-800">
                      Published:
                    </span>{" "}
                    {findId.author?.published_date}
                  </p>
                </div>

                {/* Optional content */}
                {findId.details && (
                  <p className="mt-5 text-gray-600 text-justify">
                    {findId.details}
                  </p>
                )}
                <button
                  onClick={() => navigate(-1)}
                  className="mt-6 px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300"
                >
                  All news in this category
                </button>
              </div>
            </div>

            {/* ---------- Right Sidebar Section ---------- */}
            <div className="lg:col-span-3">
              <div className="sticky top-10">
                <h3 className="font-semibold text-xl">Login With</h3>
                <RightAside />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="text-center mt-10 text-red-500 text-lg font-medium">
      ❌ No matching data found for this ID.
    </div>
  );
};

export default Details;
