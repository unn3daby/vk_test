
import Form from '../Form/Form';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './App.scss';
import logo from '../../img/logo.svg'

function App() {
  return (
    <div className="App">
      <img src={logo} alt="VK logo" />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Form/>
        </LocalizationProvider>
    </div>
  );
}

export default App;
