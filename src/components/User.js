import React from 'react';

class User extends React.Component {
    render() {
        console.log("User: ", this.props.user)
        return (
            <div>
                <img width="300" src={this.props.user.avatar_url} />
                <div className="profile">
                    <a href={this.props.user.html_url}>
                        <h1 className="username">{this.props.user.name}</h1>
                    </a>
                    <h2>TOTAL REPOS: {this.props.user.public_repos}</h2>
                    <h2>TOTAL FOLLOWERS: {this.props.user.followers}</h2>
                </div>
            </div>
      )
    }
}
export default User;