function logout() {
  try {
    localStorage.removeItem("studentId");
    localStorage.removeItem("loggedIn");
  } finally {
    window.location.replace("login.html");
  }
  return false;
}
