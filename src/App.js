import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import RemindersList from "./RemindersList";
import AddReminderPage from "./AddReminderPage";
import NotFound from "./NotFound";
import {useState} from "react";
import FontContext from "./FontContext";
import './App.css'
import RemindersListNewAndWorse from "./RemindersListNewAndWorse";

function App() {
    const [currentFont, setCurrentFont] = useState('main-font')
    return (
        <FontContext.Provider value={
            {
                currentFont: currentFont,
                setCurrentFont: setCurrentFont
            }
        }>
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<RemindersListNewAndWorse />} />
                        <Route path="/add" element={<AddReminderPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
        </FontContext.Provider>
    );
}

export default App;
