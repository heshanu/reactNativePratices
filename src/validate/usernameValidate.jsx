
const ValidateUsername = (username) => {
    return username.match(
        /^[a-zA-Z0-9_]{3,}$/
    );
  };
  
export default ValidateUsername;