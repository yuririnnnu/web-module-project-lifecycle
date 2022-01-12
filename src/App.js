import React from 'react';
import axios from 'axios';

import User from './components/User';
import FollowerList from './components/FollowerList';

class App extends React.Component {
  state = {
    image: "",
    name:"",
    followers: 0,
    repo:0,
    follower: [],
    isLoading: true
  }
  componentDidMount () {
    const loginId = this.state.userId;
    axios.get(`https://api.github.com/users/${loginId}`)
      .then(res => {
        console.log(res.data)
        this.setState({
          ...this.state,
          userId: res.data.login,
          image: res.data.avatar_url,
          name: res.data.name,
          followers: res.data.followers,
          repo: res.data.public_repos
        })
      })
  }
  handleChange = e => {
    const loginId = e.target.value;
    axios.get(`https://api.github.com/users/${loginId}`)
      .then(res => {
        console.log(res.data)
        this.setState({
          ...this.state,
          userId: res.data.login,
          image: res.data.avatar_url,
          name: res.data.name,
          followers: res.data.followers,
          repo: res.data.public_repos,
          isLoading: false
          
        })
      })
  }
  handleSearch = e => {
    e.preventDefault();
    const loginId = this.state.userId;
    axios.get(`https://api.github.com/users/${loginId}/followers`)
      .then(res => {
        console.log(res.data);
        this.setState({
          ...this.state,
          follower : res.data
        })
      })
    }
    componentDidUpdate(prevProps, prevState) {
      if(prevState.userId !== this.state.userId) {

      }
    } 
    render() {
    
    return(<div>
      <h1>GITHUB INFO</h1>
      <form>
        <input onChange={this.handleChange} />
        <button onClick={this.handleSearch} >Search</button>
      </form>
      {
        this.state.isLoading ? <h3>User Loading</h3> : <User image={this.state.image} name={this.state.name} followers={this.state.followers} repo={this.state.repo} />        
      }
      {
        this.state.isLoading ? <h3>Follower Loading</h3> : <FollowerList follower={this.state.follower} />
      }
    </div>);
  }
}

export default App;
