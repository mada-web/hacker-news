import './styles/App.css'
import 'semantic-ui-css/semantic.min.css'
import Header from './components/Header'
import { TopNews } from './views/TopNews'

const App = () => {
  return (
    <div>
      <Header />
      <TopNews />
    </div>
  )
}

export default App
