
import { createBrowserRouter} from "react-router";
import Root from "../pages/root/Root";
import Home from "../pages/home/Home";
import Error from "../pages/errorPage/Error";
import BookDetails from "../pages/bookDetails/BookDetails";
export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <Error></Error>,
        children: [
            {
                index: true, 
                path: '/',
                Component: Home
            },
            {
                path: '/bookDetails/:id',
                loader: () => fetch(`booksData.json`),
                Component: BookDetails
            }
        ]
    },
]);