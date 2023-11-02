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
import { TaskbarPages } from './components/TaskbarPages';
import AutoPages from './GetDataPages/AutoPages';
import { Error } from './components/Error';
import { Groups } from './components/Groups';
import { ProtectedRoutes } from './components/ProtectedRoutes';
import { MyForm } from './components/MyForm';
import { Formio1 } from './components/Formio1';
import { PerfectScrollbar } from './components/PerfectScrollbar';
import { DashboardNew } from './componentsNew/DashboardNew';
import { MainBpmn } from './components/MainBpmn';
import Com from './componentsNew/Com';


function App() {
  <Helmet>
    <link rel="stylesheet" type="text/css" href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/vendor/css/rtl/theme-semi-dark.css" className="template-customizer-theme-css" />
  </Helmet>
  
  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot' element={<Forgot />} />
        <Route path='/*' element={<Error />} />
        <Route path='/PerfectScrollbar' element={<PerfectScrollbar />} />
        <Route path='/DashboardNew' element={<DashboardNew />} />
        <Route path='/MainBpmn' element={<MainBpmn />} />
        <Route path='/Com' element={<Com />} />

        <Route path='/Dashboard' element={<ProtectedRoutes Component={Dashboard} />} />
        <Route path='/taskbar' element={<ProtectedRoutes Component={Taskbar} />} />
        <Route path='/TaskbarPages/:id' element={<ProtectedRoutes Component={TaskbarPages} />} />
        <Route path='/TaskbarPages' element={<ProtectedRoutes Component={TaskbarPages} />} />
        <Route path='/AutoPages/:id' element={<ProtectedRoutes Component={AutoPages} />} />
        <Route path='/TaskbarPages/*' element={<Error />} />
        <Route path='/Groups' element={<ProtectedRoutes Component={Groups} />} />
        <Route path='/Groups/:id' element={<ProtectedRoutes Component={Groups} />} />
        <Route path='/MyForm' element={<ProtectedRoutes Component={MyForm} />} />
        <Route path='/Formio1' element={<ProtectedRoutes Component={Formio1} />} />



      </Routes>
    </div>
  );
}

export default App;
