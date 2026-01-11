const StatsCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex items-center gap-4">
      <div className="text-3xl text-indigo-600">{icon}</div>
      <div>
        <h3 className="text-gray-500 dark:text-gray-300">{title}</h3>
        <p className="text-2xl font-bold text-gray-800 dark:text-white">{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;
