import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Pages/Login/Login';
// import NotFound from './Paginas/NotFound/NotFound';

function App(){
    return (
        <Router>
            <Routes>
              <Route path="/" element={<Login />} />

              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
