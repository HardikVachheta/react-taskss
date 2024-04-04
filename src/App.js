import './App.css';
import { Route, Routes } from 'react-router-dom';
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
import { ProcessDefinition } from './components/ProcessDefinition';
import { ProcessDefinitionDetails } from './components/ProcessDefinitionDetails';
import { AdminDashboard } from './components/AdminDashboard/AdminDashboard';
import { CreateUser } from './components/AdminDashboard/CreateUser';
import { ListOfUser } from './components/AdminDashboard/ListOfUser';
import { UpdateUser } from './components/AdminDashboard/UpdateUser';
import { CreateGroup } from './components/AdminDashboard/CreateGroup';
import { ListOfGroup } from './components/AdminDashboard/ListOfGroup';
import { UpdateGroup } from './components/AdminDashboard/UpdateGroup';
import { UpdateUser2 } from './components/AdminDashboard/UpdateUser2';
import { UpdateGroup2 } from './components/AdminDashboard/UpdateGroup2';
import { CompletedTask } from './components/CompletedTask';
import { Chats } from './components/AdminDashboard/Chats';
import { ChartMain } from './components/AdminDashboard/ChartMain';
import FindDuplicatesAndMissing from './components/Testing/FindDuplicatesAndMissing';
import { NewForm } from './components/AdminDashboard/NewForm';
import { CategoryList } from './components/AdminDashboard/CategoryList';
import { UpdateCategory } from './components/AdminDashboard/UpdateCategory';

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
        <Route path='/TaskbarPages' element={<ProtectedRoutes Component={TaskbarPages} />} />
        <Route path='/TaskbarPages/:id' element={<ProtectedRoutes Component={TaskbarPages} />} />
        <Route path='/CompletedTask' element={<ProtectedRoutes Component={CompletedTask} />} />
        <Route path='/CompletedTask/:id' element={<ProtectedRoutes Component={CompletedTask} />} />
        <Route path='/AutoPages/:id' element={<ProtectedRoutes Component={AutoPages} />} />
        <Route path='/TaskbarPages/*' element={<Error />} />
        <Route path='/Groups' element={<ProtectedRoutes Component={Groups} />} />
        <Route path='/Groups/:id' element={<ProtectedRoutes Component={Groups} />} />
        <Route path='/MyForm' element={<ProtectedRoutes Component={MyForm} />} />
        <Route path='/Formio1' element={<ProtectedRoutes Component={Formio1} />} />
        <Route path='/Dashboard/ProcessDefinition' element={<ProtectedRoutes Component={ProcessDefinition} />} />
        <Route path='/Dashboard/ProcessDefinitionDetails' element={<ProtectedRoutes Component={ProcessDefinitionDetails} />} />
        
        
        <Route path='/AdminDashboard' element={<ProtectedRoutes Component={AdminDashboard} />} />
        <Route path='/AdminDashboard/CreateUser' element={<ProtectedRoutes Component={CreateUser} />} />
        <Route path='/AdminDashboard/ListUser' element={<ProtectedRoutes Component={ListOfUser} />} />
        <Route path='/AdminDashboard/UpdateUser/:id' element={<ProtectedRoutes Component={UpdateUser} />} />
        <Route path='/AdminDashboard/UpdateUser2/:id' element={<ProtectedRoutes Component={UpdateUser2} />} />

        <Route path='/AdminDashboard/CreateGroup' element={<ProtectedRoutes Component={CreateGroup} />} />
        <Route path='/AdminDashboard/ListGroup' element={<ProtectedRoutes Component={ListOfGroup} />} />
        <Route path='/AdminDashboard/UpdateGroup/:id' element={<ProtectedRoutes Component={UpdateGroup} />} />
        <Route path='/AdminDashboard/UpdateGroup2/:id' element={<ProtectedRoutes Component={UpdateGroup2} />} />

        <Route path='/AdminDashboard/Chats' element={<ProtectedRoutes Component={Chats} />} />
        <Route path='/AdminDashboard/ChartMain' element={<ProtectedRoutes Component={ChartMain} />} />
        <Route path='/AdminDashboard/FindDuplicatesAndMissing' element={<ProtectedRoutes Component={FindDuplicatesAndMissing} />} />
        <Route path='/AdminDashboard/NewForm' element={<ProtectedRoutes Component={NewForm} />} />
        <Route path='/AdminDashboard/CategoryList' element={<ProtectedRoutes Component={CategoryList} />} />
        <Route path='/AdminDashboard/UpdateCategory/:id' element={<ProtectedRoutes Component={UpdateCategory} />} />
      </Routes>
    </div>
  );
}

export default App;
