import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { StyledEngineProvider } from '@mui/material';

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/us" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </StyledEngineProvider>
    </>
  );
}

export default App;
