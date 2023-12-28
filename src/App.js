import logo from './logo.svg';
import './App.css';
import './components/GlobalStyles/GlobalStyles.scss';
import DefaultLayout from './components/Layout/DefaultLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';

// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { getAnalytics } from 'firebase/analytics';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBvrhyDgplbntlMhsaEflxWd7sq3mPOano",
//   authDomain: "hoanghacosmetic.firebaseapp.com",
//   projectId: "hoanghacosmetic",
//   storageBucket: "hoanghacosmetic.appspot.com",
//   messagingSenderId: "957858157205",
//   appId: "1:957858157205:web:56a9c3e234f89f36c7019c",
//   measurementId: "G-05G5ZC9PMX"
// };

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig)
// const analytics = getAnalytics(app);

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        return <Route key={index} path={route.path} element={<Layout name={route.name}>{route.component}</Layout>} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
