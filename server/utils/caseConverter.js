const snakeToCamel = (str) =>
  str.replace(/(_[a-z])/g, (group) => group.toUpperCase().replace("_", ""));

const camelToSnake = (str) =>
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

const renameKeys = (obj, renameFunction) => {
  Object.keys(obj).forEach((oldKey) => {
    const newKey = renameFunction(oldKey);
    if (newKey != oldKey) {
      delete Object.assign(obj, { [newKey]: obj[oldKey] })[oldKey];
    }
  });
  return obj;
};

const renameKeysSnakeToCamel = (obj) => renameKeys(obj, snakeToCamel);

const renameKeysCamelToSnake = (obj) => renameKeys(obj, camelToSnake);

module.exports = {
  renameKeysSnakeToCamel,
  renameKeysCamelToSnake,
};
