import { BrowserRouter, Route } from "react-router-dom"
import Home from "./pages/home/home"
import LayoutHome from "./layouts/LayoutHome"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutHome />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
