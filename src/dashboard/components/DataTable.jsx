const DataTable = ({ items }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mt-6">
      <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Recent Connections</h3>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b dark:border-gray-700">
            <th className="p-3">Name</th>
            <th className="p-3">Subject</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item, i) => (
            <tr key={i} className="hover:bg-gray-100 dark:hover:bg-gray-700">
              <td className="p-3">{item.name}</td>
              <td className="p-3">{item.subject}</td>
              <td className="p-3">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
