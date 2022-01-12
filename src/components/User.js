import React from 'react';

class User extends React.Component {
    render() {
        return (
            <div>
                <img width="300" src={this.props.image} />
                <div className="profile">
                    <h1 className="username">{this.props.name}</h1>
                    <h2>TOTAL REPOS: {this.props.repo}</h2>
                    <h2>TOTAL FOLLOWERS: {this.props.followers}</h2>
                </div>
            </div>
      )
    }
}
export default User;