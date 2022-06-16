import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarAndHeader from './components/NavbarAndHeader';
import ProcessManagement from './components/ProcessManagement';
import TestSection from './components/TestSection';

function App() {
  return (
    <div className="App">
     < NavbarAndHeader />
     <ProcessManagement />
     <TestSection />
    </div>
  );
}

export default App;
