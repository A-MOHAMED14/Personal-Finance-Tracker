module.exports = {
  format_date: (date) => {
    return date.toLocaleDateString();
  },

  jsonify: (context) => {
    return JSON.stringify(context);
  },
};
