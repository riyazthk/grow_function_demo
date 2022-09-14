

import { Provider } from "react-redux"
import { store } from "./redux/Store"
import { Dashboard } from "./screens"





export default function App() {
    return (
        <Provider  store={store}>
        <Dashboard />
        </Provider>
    )
}