import Marquee from "react-fast-marquee";

const Marquees = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center bg-gray-100 rounded-xl shadow p-3 gap-3 w-full">
      {/* 🔹 Latest Button */}
      <button className="btn btn-error text-white font-semibold px-5 py-2 w-full sm:w-auto">
        🔥 Latest
      </button>

      {/* 🔹 Marquee Text Section */}
      <div className="bg-white rounded-lg w-full sm:flex-1 shadow-inner p-2">
        <Marquee
          pauseOnHover
          gradient={false}
          speed={60}
          className="text-gray-700 font-medium"
        >
          <p className="mx-5">
            📰 Archaeological Excavation Uncovers Ancient Civilization Site in
            Northern Bangladesh
          </p>
          <p className="mx-5">
            🌏 Bangladesh's Export Earnings Show Strong Growth in Q1 2025
          </p>
          <p className="mx-5">
            💡 New Renewable Energy Policy Aims to Boost Solar Investments
          </p>
          <p className="mx-5">
            🏫 Education Sector Sees Record Enrollment in Digital Programs
          </p>
          <p className="mx-5">
            🏥 Health Ministry Launches New AI-Based Diagnostic System
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default Marquees;
