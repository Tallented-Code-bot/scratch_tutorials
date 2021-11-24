class AuthService {
  login() {
    localStorage.setItem("user", "testing");
  }

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return localStorage.getItem("user");
  }
}

export default new AuthService();
