import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

interface ScoreData {
  userName: string;
  prNumber: number;
  score: {
    readability: number;
    maintainability: number;
    performance: number;
    score: number;
  };
  createdAt: string; // ISO date string
}

interface Props {
  data: ScoreData[];
}

const ScoreCard: React.FC<Props> = ({ data }) => {
  // Transform data for the chart
  const chartData = data.map(item => ({
    date: new Date(item.createdAt).toLocaleDateString(),
    readability: item.score.readability,
    maintainability: item.score.maintainability,
    performance: item.score.performance,
    total_score: item.score.score,
  }));

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-xl font-semibold mb-2">{data[0]?.userName}'s Performance</h3>
      <LineChart width={600} height={300} data={chartData}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
        <Line type="monotone" dataKey="readability" stroke="#8884d8" />
        <Line type="monotone" dataKey="maintainability" stroke="#82ca9d" />
        <Line type="monotone" dataKey="performance" stroke="#ffc658" />
        <Line type="monotone" dataKey="total_score" stroke="#ff7300" />
      </LineChart>
    </div>
  );
};

export default ScoreCard;
