
import './App.css';
import { LandingPage } from './Pages/LandingPage/Component/LandingPage';
import PDFDownloadButton from './Pages/LandingPage/Component/PDFDownloadButton';
import PDFAndEmail from './Pages/LandingPage/Component/PDFDownloadButton';

function App() {
  return (
    <div className="App">
  {/* <LandingPage/> */}
  <h1>PDF Mailer</h1>
      <PDFAndEmail />
    </div>
  );
}
export default App;