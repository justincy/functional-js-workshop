function getDependencies(tree) {
  // SOLUTION GOES HERE
  // Note: Feel free to add additional arguments
  // to this function for use with recursive calls.
  // Or not! There are many ways to recurse.
  let deps = [];
  if (tree && tree.dependencies) {
    Object.keys(tree.dependencies).forEach(name => {
      deps.push(`${name}@${tree.dependencies[name].version}`);
      deps = deps.concat(getDependencies(tree.dependencies[name]));
    });
  }
  deps.sort()
  let uniqueDeps = [];
  deps.forEach((dep) => {
    if (uniqueDeps.indexOf(dep) === -1) {
      uniqueDeps.push(dep);
    }
  })
  return uniqueDeps
}

module.exports = getDependencies