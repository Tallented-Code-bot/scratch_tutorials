const authHeader = () => {
  const user = localStorage.getItem("user");

  if (user) {
    return { Authorization: "Yes" };
  } else {
    return {};
  }
};

export default authHeader;
