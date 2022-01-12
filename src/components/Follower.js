import React from 'react';

class Follower extends React.Component {
    render() {
        // const {follower} = this.props.follower;
        console.log("Follower: ",this.props)
        return (
            <div className="followers">
                <img width="200" src={this.props.follower.avatar_url} />
                <a href={this.props.follower.html_url}>
                    <h3>{this.props.follower.login}</h3>                    
                </a>
            </div>
        )
    }

}

export default Follower;