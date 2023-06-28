import { DataProvider } from './context/dataContext'
import MainClass from './mainClass'

function App() {

  return (
    <DataProvider>
      <MainClass />
    </DataProvider>
  )
}

export default App
