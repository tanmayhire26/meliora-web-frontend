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
  const [activeTab, setActiveTab] = useState('Overview');
  
  // State for managing multiple feedback entries
  const [feedbacks, setFeedbacks] = useState<{ id: number; fieldName: string; text: string; isOpen: boolean }[]>([]);
  const [newFeedbacks, setNewFeedbacks] = useState([{ fieldName: '', text: '' }]);

  useEffect(() => {
    fetchUserScores(userId as any);
  }, [fetchUserScores, userId]);

  const handleViewAnalysis = async () => {
    await fetchUserAnalysisSummary(userId as any);
  };

  const handleAddFeedbackField = () => {
    setNewFeedbacks([...newFeedbacks, { fieldName: '', text: '' }]);
  };

  const handleFeedbackChange = (index: number, field: 'fieldName' | 'text', value: string) => {
    const updatedFeedbacks = [...newFeedbacks];
    updatedFeedbacks[index][field] = value;
    setNewFeedbacks(updatedFeedbacks);
  };

  const handleSubmitFeedback = () => {
    const validFeedbacks = newFeedbacks.filter(f => f.fieldName.trim() && f.text.trim());
    if (validFeedbacks.length) {
      setFeedbacks([...feedbacks, ...validFeedbacks.map(f => ({ ...f, id: Date.now(), isOpen: false }))]);
      setNewFeedbacks([{ fieldName: '', text: '' }]); // Reset to one empty feedback field
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {user ? (
        <>
          <div className="flex items-center mb-4">
            <BiUser className="text-4xl text-gray-800 mr-2" />
            <h1 className="text-2xl font-bold">{user.name}</h1>
          </div>

          {/* Tabs */}
          <div className="flex space-x-4 mb-6">
            {['Overview', 'Code Quality Performance', 'Analysis Summary', "Manager's Feedback", "JIRA Tasks"].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg transition duration-300 ${
                  activeTab === tab ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border border-blue-500'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {tab}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === 'Overview' && (
              <div className="flex flex-col items-center mb-4">
                <img
                  src={user.profilePicture} // Assuming user has a profilePicture field
                  alt={user.name}
                  className="w-32 h-32 rounded-full shadow-lg mb-4"
                />
                <div className="w-full bg-white rounded-lg shadow-md p-4">
                  <p className="font-bold">Projects Worked On: {user.projectsWorkedOn}</p>
                  <p className="font-bold">Number of Commits: </p>
                  <p className="font-bold">Number of Changes Made: </p>
                  <p className="font-bold">Sentiment: {user.sentiment}</p>
                </div>
              </div>
            )}

            {activeTab === 'Code Quality Performance' && (
              <div className="mb-4">
                <ScoreCard data={userScoreData} />
              </div>
            )}

            {activeTab === 'Analysis Summary' && (
              <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md ml-56">
                <h2 className="font-bold">Analysis Result:</h2>
                <div><p>{userAnalysisSummary}</p></div>
                <button
                  onClick={handleViewAnalysis}
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                >
                  View Analysis
                </button>
              </div>
            )}

            {activeTab === "Manager's Feedback" && (
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">Manager's Feedback</h2>

                {/* Input Fields for New Feedback */}
                {newFeedbacks.map((feedback, index) => (
                  <div key={index} className="flex flex-col mb-4">
                    <input
                      type="text"
                      placeholder="Field Name"
                      value={feedback.fieldName}
                      onChange={(e) => handleFeedbackChange(index, 'fieldName', e.target.value)}
                      className="border border-gray-300 rounded-lg p-2 mb-2"
                    />
                    <textarea
                      placeholder="Feedback Text"
                      value={feedback.text}
                      onChange={(e) => handleFeedbackChange(index, 'text', e.target.value)}
                      rows={3}
                      className="border border-gray-300 rounded-lg p-2 mb-2"
                    />
                  </div>
                ))}

                {/* Button to Add More Fields */}
                <button
                  onClick={handleAddFeedbackField}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 mb-4"
                >
                  Add Another Feedback Field
                </button>

                {/* Submit All Feedback */}
                <button
                  onClick={handleSubmitFeedback}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
                >
                  Submit Feedback
                </button>

                {/* Display Feedbacks */}
                {feedbacks.map((feedback) => (
                  <div key={feedback.id} className="mb-2">
                    <motion.button
                      onClick={() =>
                        setFeedbacks(
                          feedbacks.map((f) =>
                            f.id === feedback.id ? { ...f, isOpen: !f.isOpen } : f
                          )
                        )
                      }
                      className="text-left w-full bg-gray-200 rounded-lg p-2 hover:bg-gray-300 transition duration-300 flex justify-between items-center"
                    >
                      <span>{feedback.fieldName}</span>
                      <span>{feedback.isOpen ? '-' : '+'}</span>
                    </motion.button>
                    {feedback.isOpen && (
                      <p className="ml-4 mt-1 text-gray-600">{feedback.text}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Loader */}
          {loading && (
            <div className="mt-4">
              <Loader /> {/* Show loader while fetching */}
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
