import React, { useEffect, useState } from 'react';

const User = ({ match }) => {
  console.log(match.params.userId);
  const [dataUser, setDataUser] = useState({ avatarUrl: null, name: null, location: null });
  const fetchInfo = userId =>
    fetch(`https://api.github.com/users/${userId}`)
      .then(res => res.json())
      .then(userInfo =>
        setDataUser({
          avatarUrl: userInfo.avatar_url,
          name: userInfo.name,
          location: userInfo.location,
        }),
      );
  useEffect(() => {
    fetchInfo(match.params.userId);
  }, []);
  console.log(dataUser);
  const{
    avatarUrl,
    name,
    location,
  }=dataUser;
  return (
    <div className="user">
      <img
        alt="User Avatar"
        src={avatarUrl}
        className="user__avatar"
      />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

export default User;
