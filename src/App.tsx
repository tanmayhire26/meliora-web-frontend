import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ScoreChart from './components/scoreCard';

function App() {

   const [scoreData, setScoreData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:9001/user-pr-score');
      const data = await response.json();
      setScoreData(data);
    };

    fetchData();
  }, []);
  return (
    <div className="App">
     <ScoreChart data={scoreData} />
    </div>
  );
}

export default App;
