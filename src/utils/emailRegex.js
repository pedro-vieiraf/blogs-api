const emailRegex = (email) => String(email)
  .toLowerCase()
  .match(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, // talvez tirar a última parte?
  );

module.exports = {
  emailRegex,
};