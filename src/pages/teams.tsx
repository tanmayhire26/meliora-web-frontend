import { useEffect } from 'react';
import { useStore } from '../store';
import { Link } from 'react-router-dom';

const Teams = () => {
  const { teams, fetchTeams } = useStore();

  useEffect(() => {
    fetchTeams();
  }, [fetchTeams]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Teams List</h1>
      <ul>
        {teams.map((team: any) => (
          <li key={team.id}>
            <Link to={`/teams/${team.id}`} className="text-blue-600">{team.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Teams;
