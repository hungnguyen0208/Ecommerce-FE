import { BrowserRouter } from 'react-router-dom';
import './App.css';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DashboardPage></DashboardPage>
      </BrowserRouter>
    </div>
  );
}

export default App;
