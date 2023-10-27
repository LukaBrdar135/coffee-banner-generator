import './App.css';
import './components/UI/utils/Utils.css';
import Header from './components/Header/Header';
import StepOne from './components/StepOne/StepOne';
import Welcome from './components/Welcome/Welcome';
import StepTwo from './components/StepTwo/StepTwo';

function App() {
    return (
        <div className="container">
            <Header />
            <div className="page">
                <Welcome />
                <StepOne />
                <StepTwo />
            </div>
        </div>
    );
}

export default App;
