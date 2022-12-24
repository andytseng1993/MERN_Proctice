import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList'
import {Provider} from 'react-redux'
import store from './redux/store'
import ItemModal from './components/ItemModal'
import { loadUser } from './redux/actions/authActions'
import { useEffect } from 'react'


function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar/>
        <ItemModal/>
        <ShoppingList/>
      </div>
    </Provider>
  )
}

export default App
