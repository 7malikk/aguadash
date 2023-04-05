import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const userId = sessionStorage.getItem('userId');
  useEffect(() => {
    if (!userId) {
      navigate('/');
    }
  }, []);

  return children;
};

export default ProtectedRoute;

const AdminProctectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const admin = sessionStorage.getItem('admin');
  useEffect(() => {
    if (!admin) {
      navigate('/merchantlogin');
    }
  }, []);

  return children;
};

export { AdminProctectedRoute };
