function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every((submittedUser) => {
      return goodUsers.some((goodUser) => {
        return submittedUser.id === goodUser.id;
      });
    });
  };
}

module.exports = checkUsersValid