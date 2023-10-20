import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { Registration } from './components/Registration';
import { Forgot } from './components/Forgot';
import 'react-toastify/dist/ReactToastify.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from 'react-helmet';
import { Taskbar } from './components/Taskbar';
import { TaskbarPages } from './GetDataPages/TaskbarPages';
import AutoPages from './GetDataPages/AutoPages';
import { Error } from './components/Error';
import { Groups } from './components/Groups';
import { ProtectedRoutes } from './components/ProtectedRoutes';

function App() {
  <Helmet>
    <link rel="stylesheet" type="text/css" href="../assets_pro/vendor/css/rtl/theme-semi-dark.css" className="template-customizer-theme-css" />
  </Helmet>
  
  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot' element={<Forgot />} />
        <Route path='/*' element={<Error />} />

        <Route path='/dashboard' element={<ProtectedRoutes Component={Dashboard} />} />
        <Route path='/taskbar' element={<ProtectedRoutes Component={Taskbar} />} />
        <Route path='/TaskbarPages/:id' element={<ProtectedRoutes Component={TaskbarPages} />} />
        <Route path='/AutoPages/:id' element={<ProtectedRoutes Component={AutoPages} />} />
        <Route path='/TaskbarPages/*' element={<Error />} />
        <Route path='/Groups' element={<ProtectedRoutes Component={Groups} />} />



      </Routes>
    </div>
  );
}

export default App;
