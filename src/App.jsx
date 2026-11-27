import { useState, useEffect } from 'react'
import { Button } from './components/Button';
import { UsersList } from './components/UsersList';
import { UserDetails } from './components/UserDetails';
import './css/App.css';

function App() {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [users, setUsers] = useState([]);
  const [isUsersVisible, setUsersVisible] = useState(false);

  /* Fetch users from the API when the component mounts */
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  /* Show user details when a user is selected or when the users list visibility changes */
  useEffect(() => {
    const showUserDetails = () => {
      if (!isUsersVisible) {
        setUser(null);
        return;
      }
      if (userId) {
        const user = users.find((user) => user.id === parseInt(userId));
        setUser(user);
        return;
      }
    }
    showUserDetails()
  }, [userId, isUsersVisible]);

  /* Toggle the visibility of the users list */ 
  const handleUsersShow = () => setUsersVisible(!isUsersVisible);

  return (
    <div className="users-container">
      <Button text={isUsersVisible ? "Hide Users" : "Show Users"} onClick={handleUsersShow} type="button" />
      <UsersList users={users} setUserId={(userId) => setUserId(userId)} isUsersVisible={isUsersVisible} />
        {user && <UserDetails user={user} />}
    </div>
  )
}

export default App
