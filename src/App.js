import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { Provider, useSelector } from 'react-redux';
import { ROUTES } from './constant/ROUTES';
import store from './store';
// Home
import Dashboard from './pages/admin/dashboard/index';
import Sidebar from './component/Sidebar/index'
import Header from './component/Header/index'
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <Sidebar/>
        <div class="h-screen flex-grow-1 overflow-y-lg-auto">
          <Header/>
        </div>
      </div>
      <Routes>
        <Route exact path={ROUTES.DASHBOARD} element={<Dashboard />} />
      </Routes>
    </div>
  );
}

const ConnectedApp = () => (
  <Provider store={store}>
      <Router>
        <App />
      </Router>
  </Provider>
);

export default ConnectedApp;
