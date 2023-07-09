import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchDetails
  let matchStatusColor = ''

  if (matchStatus === 'Won') {
    matchStatusColor = 'match-won'
  } else {
    matchStatusColor = 'match-lost'
  }

  return (
    <li className="list-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-logo"
      />
      <p className="opposition">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`status ${matchStatusColor}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
