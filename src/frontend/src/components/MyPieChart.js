import { React } from 'react';

import { PieChart } from 'react-minimal-pie-chart';

export const MyPieChart = ({team}) => {
	return (
		<PieChart
		  data={[
		    { title: 'Wins', value: team.totalMatches - team.totalWins, color: '#1ec67f' },
		    { title: 'Losses', value: team.totalWins, color: '#c6511e' },
		  ]}
		/>
	)
}