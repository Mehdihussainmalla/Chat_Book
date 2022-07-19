import React, { useEffect } from 'react'
import { Provider } from "react-redux"
import Routes from "./src/navigation/Routes";
import store from './src/Redux/store';
import actions from './src/Redux/actions';
import { getItem, setLogin } from './src/utils/utils';
const App = () => {

  useEffect(() => {


    setLogin().then((res) => {
      console.log(res, "resssss")
      actions.saveUserData(res)
    })
  
}, [])
return (
  <>
    <Provider store={store} >
      <Routes />
    </Provider>
  </>

)
}

export default App