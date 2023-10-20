import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './Pages/Login';
import { Dashboard } from './Pages/Dashboard';
import { Registration } from './Pages/Registration';
import { Forgot } from './Pages/Forgot';
import 'react-toastify/dist/ReactToastify.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from 'react-helmet';
import { Taskbar } from './Pages/Taskbar';
import { TaskbarPages } from './GetDataPages/TaskbarPages';
import AutoPages from './GetDataPages/AutoPages';
import Temp from './Pages/Temp';
import { Error } from './Pages/Error';
import { Groups } from './Pages/Groups';

function App() {
  <Helmet>
    <link rel="stylesheet" type="text/css" href="../assets_pro/vendor/css/rtl/theme-semi-dark.css" class="template-customizer-theme-css" />
  </Helmet>
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<Testnav/>}/> */}
        <Route path='/' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/forgot' element={<Forgot />} />
        <Route path='/taskbar' element={<Taskbar />} />
        <Route path='/TaskbarPages/:id' element={<TaskbarPages />} />
        <Route path='/AutoPages/:id' element={<AutoPages />} />
        <Route path='/Temp' element={<Temp />} />
        <Route path='/TaskbarPages/*' element={<Error />} />
        <Route path='/Groups' element={<Groups />} />
        <Route path='/*' element={<Error/>}/>
        {/* <Route element={<Error />}/> Catch-All Route */}
        {/* <Redirect to="/error" /> */}
      </Routes>
    </div>
  );
}

export default App;
