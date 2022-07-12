import './App.scss'
import ListCards from './components/ListCards'
import NavFilters from './components/NavFilters'
import { useFilterContext } from './context/FilterContext'
import banner from '../banner.png'

const App = () =>{

  const { filters, dataFiltered} = useFilterContext()
  
  return (
        <div className="App">
            <header>
              <img src={banner} alt="" />
              {filters != null && <NavFilters/>}
            </header>
            <main>
              {dataFiltered != null && <ListCards/>}
            </main>
        </div>
  )
}

export default App
