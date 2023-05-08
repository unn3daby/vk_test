
import Form from '../Form/Form';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import './App.scss';
import 'dayjs/locale/en-gb';
import logo from '../../img/logo.svg'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
function App() {
  return (
    <div className="App">
      <img src={logo} alt="VK logo" />
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-gb'>
          <Form/>
        </LocalizationProvider>
    </div>
  );
}

export default App;
