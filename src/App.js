import './styles/App.css'
import 'semantic-ui-css/semantic.min.css'
import Header from './components/Header'
import { BrowserRouter, Route } from 'react-router-dom'

import { Stories } from './views/StoriesList'

const App = () => {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Route path="/" component={Header} />
        <Route path="/ask" render={() => <Stories find={'askstories'} />} />
        <Route path="/top" render={() => <Stories find={'topstories'} />} />
        <Route path="/new" render={() => <Stories find={'newstories'} />} />
        <Route path="/best" render={() => <Stories find={'beststories'} />} />
        <Route path="/show" render={() => <Stories find={'showstories'} />} />
        <Route path="/jobs" render={() => <Stories find={'jobstories'} />} />
      </BrowserRouter>
    </div>
  )
}

export default App
