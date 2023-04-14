import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './components/form/form';
import HomePage from './components/homePage/homePage';
import EditPage from './components/editPage/editPage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/editPage/:id' element={<EditPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
