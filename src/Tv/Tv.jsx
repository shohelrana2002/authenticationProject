import { useState, Suspense } from "react";
import ReactPlayer from "react-player";

const streams = [
  {
    title: "YouTube Live",
    url: "https://stream.arcast.com.ar/casse/casse/playlist.m3u8",
  },
];

const Tv = () => {
  const [activeStream, setActiveStream] = useState(streams[0]);

  return (
    <>
      <div className="w-full max-w-4xl mx-auto mt-8">
        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          {streams.map((stream, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStream(stream)}
              className={`px-4 py-2 rounded-lg font-semibold ${
                activeStream.title === stream.title
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {stream.title}
            </button>
          ))}
        </div>

        {/* Player */}
        <Suspense
          fallback={
            <p className="text-center">Loading {activeStream.title}...</p>
          }
        >
          <div className="relative pb-[56.25%] rounded-xl overflow-hidden shadow-lg">
            <ReactPlayer
              url={activeStream.url}
              className="absolute top-0 left-0 w-full h-full"
              playing
              controls
            />
          </div>
        </Suspense>
      </div>
    </>
  );
};

export default Tv;
