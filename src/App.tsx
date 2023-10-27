import './App.css';
import './components/UI/utils/Utils.css';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import StepsAndPreview from './components/StepsAndPreview/StepsAndPreview';

function App() {
    return (
        <div className="container">
            <Header />
            <div className="page">
                <Welcome />
                <StepsAndPreview />
            </div>
        </div>
    );
}

export default App;
