function loadUsers(userIds, load, done) {
  var users = []
  var loaded = 0;
  userIds.forEach((id, i) => {
    setTimeout(() => {
      users[i] = load(id);
      loaded++;
      if (loaded === userIds.length) {
        done(users);
      }
    })
  })
}

module.exports = loadUsers