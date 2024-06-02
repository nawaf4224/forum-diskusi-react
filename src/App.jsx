// import './App.css'
import BrowserRouter from './routes/BrowserRouter'
import { UserProvider } from './contexts/UserContext'

function App() {

    return (
        <UserProvider>
            <BrowserRouter />
        </UserProvider>
    )
}

export default App
