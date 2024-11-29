import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home} from "@pages";
/**
 * Router component defines the routing structure for the application.
 *
 * It uses `react-router-dom` to set up different routes.
 * It also includes a fallback route that redirects to the Home page if a route is not found.
 *
 * @component
 * @returns {JSX.Element} The application routing structure.
 */
export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Route to the home page */}
                <Route path={'/'} element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};