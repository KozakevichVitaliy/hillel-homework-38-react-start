import '../css/UsersList.css'

export const UsersList = ({ users, setUserId, isUsersVisible }) => {
  
  const handleUserClick = (event) => {
    const userId = event.currentTarget.getAttribute('data-user-id');
    setUserId(userId);
  };

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {isUsersVisible && users.map((user) => (
          <li key={user.id} className="user-item" onClick={handleUserClick} data-user-id={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}