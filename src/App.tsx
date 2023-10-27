import './App.css';
import Header from './components/Header/Header';
import StepOne from './components/StepOne/StepOne';
import Welcome from './components/Welcome/Welcome';

function App() {
    return (
        <div className="container">
            <Header />
            <div className="page">
                <Welcome />
                <StepOne />
            </div>
        </div>
    );
}

export default App;
