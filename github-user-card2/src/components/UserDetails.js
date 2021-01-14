import React from 'react'

export default function UserDetails(props) {
    return (
        <div>
            <img src={props.user.avatar_url} alt={props.user.name} width='600' />
            <h2>{props.user.name}</h2>
            <h2>{props.user.login}</h2>
            <h3>{props.user.twitter_username}</h3>
        </div>
    )
}
