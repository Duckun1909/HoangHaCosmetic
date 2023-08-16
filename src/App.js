import logo from './logo.svg';
import './App.css';
import './components/GlobalStyles/GlobalStyles.scss';
import DefaultLayout from './components/Layout/DefaultLayout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from './routes';

function App() {
    return (
        <Router>
            <div className="App" >
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        return <Route key={index} path={route.path} element={<Layout>{route.component}</Layout>} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
