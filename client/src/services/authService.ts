import api from "./api";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  admin: {
    id: string;
    email: string;
  };
}

export const authService = {
  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    const response = await api.post("/auth/login", credentials);
    if (response.data.token) {
      localStorage.setItem("adminToken", response.data.token);
    }
    return response.data;
  },

  async verifyToken(): Promise<boolean> {
    try {
      const response = await api.get("/auth/verify");
      return response.data.valid === true;
    } catch (error) {
      return false;
    }
  },

  logout() {
    localStorage.removeItem("adminToken");
  },

  getToken(): string | null {
    return localStorage.getItem("adminToken");
  },

  isAuthenticated(): boolean {
    return !!this.getToken();
  },
};
