import StatsCard from "./components/StatsCard";
import ChartComponent from "./components/ChartComponent";
import DataTable from "./components/DataTable";
import { FiUsers, FiBookOpen, FiLink, FiTrendingUp } from "react-icons/fi";

const Overview = () => {
  const dummyConnections = [
    { name: "Rafi", subject: "Physics", status: "Accepted" },
    { name: "Jannat", subject: "Math", status: "Pending" },
    { name: "Siam", subject: "English", status: "Rejected" },
  ];

  return (
    <div>
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatsCard title="Total Partners" value="120" icon={<FiUsers />} />
        <StatsCard title="Subjects" value="18" icon={<FiBookOpen />} />
        <StatsCard title="Connections" value="52" icon={<FiLink />} />
        <StatsCard title="Growth" value="+27%" icon={<FiTrendingUp />} />
      </div>

      {/* Chart */}
      <ChartComponent />

      {/* Table */}
      <DataTable items={dummyConnections} />
    </div>
  );
};

export default Overview;
