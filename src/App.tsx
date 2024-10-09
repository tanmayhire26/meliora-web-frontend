import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ScoreChart from './components/scoreCard';
import AnalysisSummary from './components/analysisSummary';

function App() {

   const [scoreData, setScoreData] = useState<any[]>([]);
   const [showAnalysis, setShowAnalysis] = useState<Boolean>(false);
   const [analysisSummary, setAnalysisSummary] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:9001/user-pr-score');
      const data = await response.json();
      setScoreData(data);
    };
    

    fetchData();
  }, []);

  const handleViewAnalysis = async() => {
    setShowAnalysis(!showAnalysis);
    const fetchData = async () => {
      const response = await fetch('http://localhost:9001/user-pr-score/analysis-summary/tanmayhire26');
      
      const data=await response.text()
      setAnalysisSummary(data);
    };

    if(showAnalysis) {
      fetchData();
    }

  }
  return (
    <div className="App">
     <ScoreChart data={scoreData} />
     <button onClick={handleViewAnalysis}>View analysis</button>
    { showAnalysis &&<div>
      <AnalysisSummary data = {analysisSummary}/>
     </div>}
    </div>
  );
}

export default App;
