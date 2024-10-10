import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useStore } from '../store';
import ScoreCard from '../components/scoreCard';
import { BiUser } from 'react-icons/bi'; // User icon
import { motion } from 'framer-motion';
import Loader from '../components/loader';

const UserDetail = () => {
  const { userId } = useParams<{ userId: string }>();
  const { users, fetchUserScores, userScoreData, loading, userAnalysisSummary, fetchUserAnalysisSummary } = useStore();

  const user = users.find((u: any) => u.username === userId);

  useEffect(() => {
    fetchUserScores(userId as any);
  }, [fetchUserScores, userId]);

  const handleViewAnalysis = async () => {
    await fetchUserAnalysisSummary(userId as any);
  };

  return (
    <div className="p-4">
      {user ? (
        <>
          <div className="flex items-center mb-4">
            <BiUser className="text-4xl text-gray-800 mr-2" />
            <h1 className="text-2xl font-bold">{user.name}</h1>
          </div>

          <div className="mb-4">
            <ScoreCard data={userScoreData} />
          </div>

          <motion.button
            onClick={handleViewAnalysis}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            View Analysis
          </motion.button>

          {loading && (
            <div className="mt-4">
              
            <Loader/>
            </div>
          )}

          {userAnalysisSummary && (
            <div className="mt-4 ml-20 p-4 bg-gray-100 rounded-lg shadow-md w-1/2">
              <h2 className="font-bold">Analysis Result:</h2>
              <p>{userAnalysisSummary}</p>
            </div>
          )}
        </>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default UserDetail;
