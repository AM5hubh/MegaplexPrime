import React, { createContext, useContext, useState, useEffect } from "react";
import { authService } from "../services/authService";
import type { LoginCredentials } from "../services/authService";

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  adminEmail: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [adminEmail, setAdminEmail] = useState<string | null>(null);

  useEffect(() => {
    const verifyAuth = async () => {
      const token = authService.getToken();
      if (token) {
        const isValid = await authService.verifyToken();
        if (isValid) {
          setIsAuthenticated(true);
          // Extract email from token if needed, or fetch from API
          // For now, we'll set a placeholder
          setAdminEmail("admin@gmail.com");
        } else {
          authService.logout();
        }
      }
      setIsLoading(false);
    };

    verifyAuth();
  }, []);

  const login = async (credentials: LoginCredentials) => {
    const response = await authService.login(credentials);
    setIsAuthenticated(true);
    setAdminEmail(response.admin.email);
  };

  const logout = () => {
    authService.logout();
    setIsAuthenticated(false);
    setAdminEmail(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        adminEmail,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
