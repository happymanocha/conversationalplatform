import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'unemployment_info', value: 4 },
  { name: 'pension_eligibility', value: 6 }
];

const COLORS = ['#0088FE', '#00C49F'];

const App: React.FC = () => (
  <div className="p-4">
    <h1 className="text-xl font-bold mb-4">Dashboard</h1>
    <PieChart width={400} height={300}>
      <Pie data={data} dataKey="value" nameKey="name" label>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  </div>
);

export default App;
