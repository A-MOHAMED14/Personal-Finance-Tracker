module.exports = {
  format_date: (date) => {
    return date.toLocaleDateString();
  },

  jsonify: (context) => {
    return JSON.stringify(context);
  },

  remaining_budget: (a, b) => {
    return a - b;
  },
};
