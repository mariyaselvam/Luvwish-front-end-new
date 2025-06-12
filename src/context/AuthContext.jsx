import { createContext, useEffect, useState, useContext } from "react";
import { getMe } from "../api/auth";
 
const AuthContext = createContext();
 
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getMe();
        setUser(res.data.user);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
 
    fetchUser();
  }, []);
 
  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
 
export const useAuth = () => useContext(AuthContext);
 