import { Navigate, createBrowserRouter } from "react-router-dom";
import ROUTES from "./constants/routes";
import App from "./App";
import IssueDetail from "./pages/IssueDetail";
import IssueListPage from "./pages/IssueListPage";

export const Router = createBrowserRouter([
    {
        path: '',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Navigate to={ROUTES.ISSUES} replace={true} />,
            },
            {
                path: ROUTES.ISSUES,
                element: (
                    <IssueListPage />
                ),
            },
            {
                path: ROUTES.ISSUE,
                element: (
                    <IssueDetail />
                ),

            },
        ],
    },
]);