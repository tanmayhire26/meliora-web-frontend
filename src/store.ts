import {create} from 'zustand';
import axios from 'axios';

interface User {
  id: number;
  name: string;
}

interface Team {
  id: number;
  name: string;
}

interface Store {
  users: User[];
  teams: Team[];
  isSidebarOpen: boolean; // New state for sidebar visibility
  fetchUsers: () => Promise<void>;
  fetchTeams: () => Promise<void>;
  toggleSidebar: () => void; // New method to toggle sidebar
  fetchUserScores: (username: string) => Promise<void>;
  userScoreData: any;
  fetchUserAnalysisSummary: (username: string) => Promise<void>;
  userAnalysisSummary: any;
  loading: Boolean;
}

export const useStore = create<Store>((set) => ({
  users: [],
  teams: [],
  isSidebarOpen: true, // Default state for sidebar
  userScoreData: {},
  userAnalysisSummary: "",
  loading: false,
  fetchUsers: async () => {
    const response = await axios.get('http://localhost:9001/users');
    set({ users: response?.data?.data });
  },
  fetchTeams: async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // Placeholder for teams API
    set({ teams: response.data });
  },
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })), // Toggle function

  fetchUserScores: async (username: string) => {
    const response = await axios.get(`http://localhost:9001/user-pr-score/performance/${username}`);
    console.log("response.data == === ", response.data);
         
    set({userScoreData: response.data});
  },

  fetchUserAnalysisSummary: async (username: string) => {
    set({loading:true})
    const response = await axios.get(`http://localhost:9001/user-pr-score/analysis-summary/${username}`);
    console.log("response.data == === ", response.data);
         
    set({userAnalysisSummary: response.data});
    set({loading:false})
  }
}));
