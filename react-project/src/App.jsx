import { ToastContainer, toast } from 'react-toastify';
import Chart from './components/Chart';
import Header from './components/Header';
import Drag from './components/Drag';

function App() {
  const notify = () =>
    toast.info('Успешно!', {
      position: 'bottom-left',
      theme: 'colored',
      autoClose: 1000,
      draggable: true,
    });
  return (
    <>
      <Header />
      <button onClick={notify}>Кликни!</button>
      <Drag/>
      {/* <Chart /> */}
      <ToastContainer />
    </>
  );
}

export default App;
