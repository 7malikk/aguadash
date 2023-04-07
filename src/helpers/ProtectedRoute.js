import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const AdminProctectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const admin = sessionStorage.getItem('admin');
  useEffect(() => {
    if (!admin) {
      navigate('/merchantlogin');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
};

export default AdminProctectedRoute;
