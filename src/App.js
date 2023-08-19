
import './App.css';
import { Home, Work } from './views';


function App() {
  return (
    <div className='w-full h-full'>
      <section className='w-full h-screen' id='/'>
        <Home />
      </section>
      <section className='w-full h-screen'>
        <Work />
      </section>
     
    </div>
  );
}

export default App;
