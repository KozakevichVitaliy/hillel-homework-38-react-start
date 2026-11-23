import '../css/UsersList.css'

export const UsersList = ({ users, showUserDetails }) => {
  
  const handleUserClick = (event) => {
    const userId = event.currentTarget.getAttribute('data-user-id');
    showUserDetails(userId);
  };

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="user-item" onClick={handleUserClick} data-user-id={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}