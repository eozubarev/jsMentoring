const adaptiveNameTask = (str) =>
  str.toLowerCase().replaceAll(" ", "_") + ".js";

console.log(adaptiveNameTask("6 kyu plus 1 Array"));
