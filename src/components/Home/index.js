import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    isLoading: true,
    iplTeamsList: [],
  }

  componentDidMount() {
    this.getIplTeamsList()
  }

  getIplTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = data.teams.map(team => ({
      name: team.name,
      id: team.id,
      teamImageURL: team.team_image_url,
    }))

    this.setState({
      iplTeamsList: formattedData,
      isLoading: false,
    })
  }

  renderIplTeamsList = () => {
    const {iplTeamsList} = this.state

    return (
      <ul className="teams-list">
        {iplTeamsList.map(eachTeam => (
          <TeamCard teamDetails={eachTeam} key={eachTeam.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        <div className="heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        ) : (
          this.renderIplTeamsList()
        )}
      </div>
    )
  }
}

export default Home
