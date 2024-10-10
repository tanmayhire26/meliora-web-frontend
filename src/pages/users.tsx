import { useEffect } from 'react';
import { useStore } from '../store';
import { Link } from 'react-router-dom';
import { HiUser } from 'react-icons/hi'; // Import user icon

const Users = () => {
  const { users, fetchUsers } = useStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
        <HiUser className="mr-2 text-blue-600" />
        Developer's List
      </h1>
      <ul className="space-y-4">
        {users.map((user: any) => (
          <li key={user.id} className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <HiUser className="text-blue-500 mr-3" />
            <Link to={`/users/${user.username}`} className="text-blue-600 font-semibold hover:underline">
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
