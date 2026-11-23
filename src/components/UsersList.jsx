import '../css/UsersList.css'

export const UsersList = ({ users, showUserDetails }) => {
  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="user-item" onClick={(event) => showUserDetails(event)} data-user-id={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}