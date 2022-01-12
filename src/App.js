import React from 'react';
import axios from 'axios';

import User from './components/User';
import FollowerList from './components/FollowerList';


class App extends React.Component {
  state = {
    curId: "yuririnnnu",
    user:{},
    followers: [],
  }
  componentDidMount () {
    axios.get(`https://api.github.com/users/${this.state.curId}`)
      .then(res => {
        this.setState({
          ...this.state,
          user: res.data
        })
      })
  }
  handleChange = e => {
    this.setState({
      ...this.state,
      curId: e.target.value
    })
 
  }
  handleSubmit = e => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.curId}`)
      .then(res => {
        this.setState({
          ...this.state,
          user: res.data
        })
      })
    }
    componentDidUpdate(prevProps, prevState) {
      if(prevState.user !== this.state.user) {
        axios.get(`https://api.github.com/users/${this.state.curId}/followers`)
          .then(res => {
            console.log(res.data)
            this.setState({
              ...this.state,
              followers: res.data
            })
          })
      }
    } 
    render() {
    
    return(<div>
      <h1>GITHUB INFO</h1>
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} />
        <button>Search</button>
      </form>
      
      <User user={this.state.user} />
      <FollowerList followers={this.state.followers} />
      
    </div>);
  }
}

export default App;
