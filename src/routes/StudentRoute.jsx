import React from 'react';
import useAuth from '../hooks/useAuth';
import useStudent from '../hooks/useStudent';
import { Navigate, useLocation } from 'react-router-dom';

const StudentRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isStudent, isStudentLoading] = useStudent();
    const location = useLocation()
    if (loading || isStudentLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isStudent) {
        return children
    }

    return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
};

export default StudentRoute;