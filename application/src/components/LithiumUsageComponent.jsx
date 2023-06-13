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
const COLORS = ["#f84a2f", "#b161de", "#cd93ee", "#bcb3f5", "#eee6e6", "#ecd3a9", "#f2b34a", "#f88d6b", "#f96738"];
// const COLORS = ["#d858c9", "#f455b1", "#ff5a98", "#ff6781", "#ff786b", "#ff8c5a", "#ffa04e", "#f2b34a", "#f2b28a"];
// const COLORS = ["#b161de", "#d858c9", "#f455b1", "#ff5a98", "#ff6781", "#ff786b", "#ff8c5a", "#ffa04e", "#f2b34a"];


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
	return payload.payload.name + ": " + payload.payload.value + "%";
};

export default function LithiumUsageComponent() {
	return (
		<div id="uses-of-lithium" className='ChartContainer Anchor'>
			<div className="ChartTitle" >
				<p>What exactly is Lithium used for?</p>
			</div>
			<ResponsiveContainer height="70%" className="Chart">
				<PieChart>
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