import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarAndHeader from './components/NavbarAndHeader';
import ProcessManagement from './components/ProcessManagement';

function App() {
  return (
    <div className="App">
     < NavbarAndHeader />
     <ProcessManagement />
    </div>
  );
}

export default App;
