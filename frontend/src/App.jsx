import './App.css';
import { FlatsList } from './components/FlatsList/FlatList';
import { FlatsFilter } from './components/Filter/Filter';
import { useFlatsState } from './redux/selectors';

function App() { 
  const {flats} = useFlatsState();
  return (
    <>
      <h1>Flats</h1>
      <FlatsFilter/>
{flats.length > 0 && (<FlatsList/>)}
      
    </>
  )
}

export default App
