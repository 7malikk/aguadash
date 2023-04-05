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
