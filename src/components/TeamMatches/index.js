import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, teamMatchesData: []}

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getFormattedData = details => ({
    umpires: details.umpires,
    result: details.result,
    manOfTheMatch: details.man_of_the_match,
    id: details.id,
    date: details.date,
    venue: details.venue,
    competingTeam: details.competing_team,
    competingTeamLogo: details.competing_team_logo,
    firstInnings: details.first_innings,
    secondInnings: details.second_innings,
    matchStatus: details.match_status,
  })

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {id} = match.params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatch: this.getFormattedData(data.latest_match_details),
      recentMatches: data.recent_matches.map(eachMatch =>
        this.getFormattedData(eachMatch),
      ),
    }
    this.setState({teamMatchesData: formattedData, isLoading: false})
  }

  getBgColor = () => {
    const {match} = this.props
    const {id} = match.params

    switch (id) {
      case 'CSK':
        return 'csk'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'RCB':
        return 'rcb'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  render() {
    const {isLoading, teamMatchesData} = this.state
    const {teamBannerUrl, latestMatch, recentMatches} = teamMatchesData
    return (
      <div className={`match-bg-container ${this.getBgColor()}`}>
        {isLoading ? (
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        ) : (
          <div className="match-container">
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="banner-image"
            />
            <LatestMatch latestMatchData={latestMatch} />
            <ul className="matches-list-container">
              {recentMatches.map(eachTeam => (
                <MatchCard matchDetails={eachTeam} key={eachTeam.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
