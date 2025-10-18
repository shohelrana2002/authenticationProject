import { BiStar } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router";

const NewsCardItem = ({ news }) => {
  const {
    title,
    thumbnail_url,
    id,
    author,
    rating,
    total_view,
    details,
    others,
  } = news;

  return (
    <Link
      to={`/details/${id}`}
      // className="p-4 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
    >
      <div className="flex flex-col md:flex-row gap-4">
        {/* Thumbnail */}
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full md:w-60 h-full object-cover rounded-xl"
        />

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2 hover:text-indigo-600 transition">
              {title}
            </h2>

            <p className="text-gray-600 text-sm mb-3 line-clamp-3">{details}</p>
          </div>

          {/* Footer info */}
          <div className="flex items-center justify-between text-sm text-gray-500 mt-3 border-t pt-3">
            {/* Author */}
            <div className="flex items-center gap-2">
              <img
                src={author?.img}
                alt={author?.name}
                className="w-8 h-8 rounded-full border"
              />
              <div>
                <p className="font-medium text-gray-700">{author?.name}</p>
                <p className="text-xs text-gray-400">
                  {new Date(author?.published_date).toLocaleDateString()}
                </p>
              </div>
            </div>

            {/* Rating & Views */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <BiStar className="w-4 h-4 text-yellow-500" />
                <span>{rating?.number}</span>
              </div>
              <div className="flex items-center gap-1">
                <BsEye className="w-4 h-4 text-blue-500" />
                <span>{total_view}</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-1 ">
            {news.tags.map((auth, index) => (
              <p key={index} className="">
                #{auth}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Badge */}
      {others?.is_today_pick && (
        <div className="absolute top-2 right-2 bg-indigo-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
          Today’s Pick
        </div>
      )}
    </Link>
  );
};

export default NewsCardItem;
