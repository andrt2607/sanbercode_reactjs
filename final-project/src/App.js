import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import DataTablePage from './pages/DataTablePage';
import DataFormPage from './pages/DataFormPage';
import ProfilePage from './pages/ProfilePage';
import ChangePasswordPage from './pages/ChangePasswordPage';
import LowonganPage from './pages/LowonganPage';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';
import DetailLowonganPage from './pages/DetailLowonganPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {

  const LoginRoute = (props) => {
    if (Cookies.get('token') !== undefined) {
      return <Navigate to={'/'} />
    } else if (Cookies.get('token') === undefined) {
      return props.children
    }
  }

  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/job-vacancy' element={<LowonganPage />} />
          <Route path='/job-vacancy/:IdData' element={<DetailLowonganPage />} />
          <Route path='/login' element={
            <LoginRoute>
              <LoginPage />
            </LoginRoute>
          } />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/dashboard/list-job-vacancy' element={<DataTablePage />} />
          <Route path='/dashboard/list-job-vacancy/:IdData' element={<DataFormPage />} />
          <Route path='/dashboard/list-job-vacancy/form' element={<DataFormPage />} />
          <Route path='/dashboard/profile' element={<ProfilePage />} />
          <Route path='/dashboard/change-password' element={<ChangePasswordPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
