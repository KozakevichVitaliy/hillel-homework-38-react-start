import '../css/UserDetails.css'

export const UserDetails = ({ user }) => {
  return (
    <div className="user-details">
      <p><span>Name:</span> {user.name.toUpperCase()}</p>
      <p><span>Email:</span> {user.email}</p>
      <p><span>Phone:</span> {user.phone}</p>
    </div>
  );
};