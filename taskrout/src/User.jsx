import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const [dataUser, setDataUser] = useState({ avatarUrl: null, name: null, location: null });
  const { userId } = useParams();
  const fetchUserInfo = async () => {
    const responce = await fetch(`https://api.github.com/users/${userId}`);
    const userInfo = await responce.json();
    setDataUser({
      avatarUrl: userInfo.avatar_url,
      name: userInfo.name,
      location: userInfo.location,
    });
  };

  useEffect(() => {
    fetchUserInfo();
  }, [userId]);

  const { avatarUrl, name, location } = dataUser;
  return (
    <div className="user">
      <img alt="User Avatar" src={avatarUrl} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

export default User;
