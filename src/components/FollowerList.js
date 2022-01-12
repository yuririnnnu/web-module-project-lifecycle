import React from 'react';
import Follower from './Follower';

class FollowerList extends React.Component {
    render () {
        console.log("FollowerList: ",this.props.followers)
        return (<div>
            {
                this.props.followers.map(follower => {
                    return (<Follower key={follower.login} follower={follower}/>)
                })
            }            
            </div>)
    }
}
export default FollowerList;