import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const userId = sessionStorage.getItem('userId');
  useEffect(() => {
    if (!userId) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
};

export default ProtectedRoute;
