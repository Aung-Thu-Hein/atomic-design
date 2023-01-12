import { Routes, Route, } from 'react-router-dom';
import UserTable from '@/components/pages/UserTable';
import UserInfoForm from '@/components/pages/UserInfoForm'

function App() {

  return (
    <Routes>
        <Route path='/' element={<UserInfoForm/>} />
        <Route path='usertable' element={ <UserTable/>} />
    </Routes>
    
  )
}

export default App
