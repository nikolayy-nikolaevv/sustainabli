import { PieChart, Pie, Tooltip, Legend, Cell, ResponsiveContainer } from 'recharts';

const data = [
	{ name: 'Rechargable Batteries', value: 37.4 },
	{ name: 'Ceramics', value: 25.4 },
	{ name: 'Lubricants', value: 7.9 },
	{ name: 'Glass', value: 5.1 },
	{ name: 'Polymers', value: 5 },
	{ name: 'Metal Powder', value: 4.5 },
	{ name: 'Air Treatment', value: 2.5 },
	{ name: 'Non-Rechargable Batteries', value: 1.5 },
	{ name: 'Others', value: 10.6 },
];
const COLORS = ['#f2b34a', '#f6c275', '#f7d19e', '#f6e1c7', '#f1f1f1', '#f0e9de', '#efe2cd', '#eedabb', '#ecd3a9'];


const CustomTooltip = ({ active, payload, label }) => {
	if (active) {
		return (
			<div
				className="custom-tooltip"
				style={{
					backgroundColor: "#ffff",
					padding: "5px",
					border: "1px solid #cccc"
				}}
			>
				<label>{`${payload[0].name}: ${payload[0].value}%`}</label>
			</div>
		);
	}
	return null;
};

const CustomLabel = ({ active, payload, label }) => {
	return payload.payload.value + "%";
};

export default function LithiumUsageComponent() {
	return (
		<div id="uses-of-lithium" className='ChartContainer Anchor'>
			<ResponsiveContainer width="100%" className="Chart">
				<PieChart width="50%" height="100%">
					<Pie
						data={data}
						labelLine={false}
						outerRadius="90%"
						fill="#8884d8"
						dataKey="value"
						label={CustomLabel}
						labelline
					>
						{data.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
						))}
					</Pie>
					<Tooltip content={CustomTooltip} />
					<Legend wrapperStyle={{ marginTop: 25 }} />
				</PieChart>
			</ResponsiveContainer>
		</div>
	);
}