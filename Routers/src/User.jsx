import React, { useState, useEffect } from 'react';

const User = ({ match }) => {
  const [userData, setUserData] = useState(null);
  const { userId } = match.params;

  useEffect(() => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(res => res.json())
      .then(userData => {
        console.log(userData);
        setUserData({
          avatarUrl: userData.avatar_url,
          userName: userData.name,
          userLocation: userData.location,
        });
      });
  }, [userId]);

  if (!userData) {
    return null;
  }
  const { avatarUrl, userName, userLocation } = userData;
  return (
    <div className="user">
      <img alt="User Avatar" src={avatarUrl} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{userName}</span>
        <span className="user__location">{userLocation}</span>
      </div>
    </div>
  );
};
export default User;
// componentDidMount() {
//   this.updateUserData(this.props.match.params.userId);
// }
// console.log('componentDidMount');
// console.log(this.props.match);
// updateUserData = id => {
//   fetch(`https://api.github.com/users/${id}`)
//     .then(res => res.json())
//     .then(userData => {
//       console.log(userData);
//       this.setState({
//         avatarUrl: userData.avatar_url,
//         userName: userData.name,
//         userLocation: userData.location,
//       });
//     });
// };

// componentDidUpdate(prevProps, prevState) {
//   console.log('componentDidUpdate');
//   // debugger;
//   const currentUserId = this.props.match.params.userId;
//   if (currentUserId !== prevProps.match.params.userId) {
//     this.updateUserData(currentUserId);
//   }
// }

// updateUserData = () => {
//   fetch(`https://api.github.com/users/${this.props.match.params.userId}`)
//     .then(res => res.json())
//     .then(userData => {
//       console.log(userData);
//       this.setState({
//         avatarUrl: userData.avatar_url,
//         userName: userData.name,
//         userLocation: userData.location,
//       });
//     });
// };

// render() {
//   // debugger;
//   console.log('render');
//   const { avatarUrl, userName, userLocation } = this.state;

//   if (!avatarUrl || !userName || !userLocation) {
//     return null;
//   }
