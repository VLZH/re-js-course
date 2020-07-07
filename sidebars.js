module.exports = {
  main_sidebar: {
    Основное: ["main"],
    Javascript: [
      "js/comments_statements_expressions",
      {
        type: "category",
        label: "Операторы",
        items: [
          "js/operators/arithmetic_operators",
          "js/operators/assigment_operators",
          "js/operators/bitwise_operators",
          "js/operators/comparison_logical_operators",
        ],
      },
    ],
  },
};
