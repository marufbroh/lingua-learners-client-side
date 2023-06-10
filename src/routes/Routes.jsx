import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Account/Login";
import Register from "../pages/Account/Register";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../layouts/Dashboard";
import PrivateRoute from "./PrivateRoute";
import UserDashboard from "../pages/Dashboard/UserDashboard/UserDashboard";
import InstructorDashboard from "../pages/Dashboard/InstructorDashboard/InstructorDashboard";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";
import AdminDashboard from "../pages/Dashboard/AdminDashboard/AdminDashboard";
import StudentRoute from "./StudentRoute";
import MySelectedClasses from "../pages/Dashboard/UserDashboard/MySelectedClasses";
import MyEnrolledClasses from "../pages/Dashboard/UserDashboard/MyEnrolledClasses";
import PaymentHistory from "../pages/Dashboard/UserDashboard/PaymentHistory";
import PaymentPage from "../pages/Dashboard/UserDashboard/PaymentPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/instructors",
                element: <Instructors />
            },
            {
                path: "/classes",
                element: <Classes />
            },
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            // user dashboard routes
            {
                path: "/dashboard/student",
                element: <StudentRoute><UserDashboard /></StudentRoute>
            },
            {
                path: "/dashboard/my-selected-classes",
                element: <StudentRoute><MySelectedClasses /></StudentRoute>
            },
            {
                path: "/dashboard/my-enrolled-classes",
                element: <StudentRoute><MyEnrolledClasses /></StudentRoute>
            },
            {
                path: "/dashboard/payment",
                element: <StudentRoute><PaymentPage /></StudentRoute>
            },
            {
                path: "/dashboard/payment-history",
                element: <StudentRoute><PaymentHistory /></StudentRoute>
            },

            // instructor dashboard routes
            {
                path: "/dashboard/instructor",
                element: <InstructorRoute><InstructorDashboard /></InstructorRoute>
            },

            // admin dashboard route
            {
                path: "/dashboard/admin",
                element: <AdminRoute><AdminDashboard /></AdminRoute>
            },
        ]
    }
]);

export default router