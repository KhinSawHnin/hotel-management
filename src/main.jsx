import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import router from './route/Router.jsx'
import { PersistGate } from 'redux-persist/integration/react'
import store from './stores/store.js'
import { persistor } from './stores/store.js'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <RouterProvider router={router}/>
    <Toaster position="top-right" reverseOrder={false}/>
    </PersistGate>
    </Provider>
)
