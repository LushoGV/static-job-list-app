import './App.scss'
import ListCards from './components/ListCards'
import NavFilters from './components/NavFilters'
import { useFilterContext } from './context/FilterContext'

const App = () =>{

  const { filters, dataFiltered} = useFilterContext()
  
  return (
        <div className="App">
            <header>
              {filters != null && <NavFilters/>}
            </header>
            <main>
              {dataFiltered != null && <ListCards/>}
            </main>
        </div>
  )
}

export default App
