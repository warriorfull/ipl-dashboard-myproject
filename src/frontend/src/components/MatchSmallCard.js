import { React } from 'react';
import { Link } from 'react-router-dom';

import './MatchSmallCard.scss'

export const MatchSmallCard = ({teamName, match}) => {
	const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
	const otherTeamRoute = `/team/${otherTeam}`;
	const isMatchWon = teamName === match.matchWinner;
	return (
		<div className={isMatchWon ? 'MatchSmallCard won-card' : 'MatchSmallCard lost-card'}>
			<h3>vs <Link to={otherTeamRoute}>{otherTeam}</Link>	</h3>
			<p className="match-result">{match.matchWinner} won by {match.resultMargin} {match.result}</p>			
		</div>
	)	
}