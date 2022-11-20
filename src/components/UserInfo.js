import './UserInfo.css';

function UserInfo({username, rating}) {
  return (
    <div className="UserInfo">
      {username}
    </div>
  );
}

export default UserInfo;