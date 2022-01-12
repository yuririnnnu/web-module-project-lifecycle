import React from 'react';

class FollowerList extends React.Component {
    render () {
        console.log("FollowerList: ",this.props.follower)
        return (<div>
            {
                this.props.follower.map(fol => {
                    return (            
                        <img width="300" src={fol.avatar_url} />
                        // <p>{fol.name}</p>
                    )
                })
            }
            Hi
            </div>)
    }
}
export default FollowerList;