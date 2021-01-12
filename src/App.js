import './styles/App.css'
import 'semantic-ui-css/semantic.min.css'
import Header from './components/Header'
import Container from './components/Container'
import ItemLink from './components/NewsItems'
import { TopNews } from './views/TopNews'

const App = () => {
  return (
    <div>
      <Header />
      <Container />
      <ItemLink />
      <TopNews />
    </div>
  )
}

export default App
