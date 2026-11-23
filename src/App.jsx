import { useState } from 'react'
import { Button } from './components/Button';
import { UsersList } from './components/UsersList';
import { UserDetails } from './components/UserDetails';
import './css/App.css';

function App() {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  const showUserDetails = (event) => {
    const userId = event.target.dataset["userId"];
    const user = users.find((user) => user.id === parseInt(userId));
    setUser(user);
  }

  return (
    <div className="users-container">
      <Button text="Fetch Users" onClick={async () => await fetchUsers()} type="button" />
      <UsersList users={users} showUserDetails={showUserDetails} />
        {user && <UserDetails user={user} />}
    </div>
  )
}

export default App
