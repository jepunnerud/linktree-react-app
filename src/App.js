import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/linktree-react-app/" element={<Home />} />
                    <Route path="/linktree-react-app/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
