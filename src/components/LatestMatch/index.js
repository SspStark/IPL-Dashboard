import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchData

  return (
    <div className="latest-match">
      <h2 className="heading2">Latest Matches</h2>
      <div className="latest-match-container">
        <div className="team-logo-container">
          <div className="team-details">
            <p className="competing-team">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="venue">{venue}</p>
            <p className="result">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="competing-team-logo"
          />
        </div>
        <hr className="line" />
        <div className="latest-match-details">
          <p className="match-labels">First Innings</p>
          <p className="match-values">{firstInnings}</p>
          <p className="match-labels">Second Innings</p>
          <p className="match-values">{secondInnings}</p>
          <p className="match-labels">Man Of The Match</p>
          <p className="match-values">{manOfTheMatch}</p>
          <p className="match-labels">Umpires</p>
          <p className="match-values">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
