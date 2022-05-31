
import { FC } from 'react'
import Layout from './layout'
import { BrowserRouter } from 'react-router-dom'


const App: FC = () => {

  return (
    <BrowserRouter>
      <Layout/>
    </BrowserRouter>
    

  )
}

export default App
