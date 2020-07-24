module.exports = {
    main_sidebar: {
        Основное: ["main", "timeline"],
        Javascript: [
            "js/comments_statements_expressions",
            "js/basic_statements",
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
            "js/variables",
            {
                type: "category",
                label: "Типы данных",
                items: ["js/data_types/data_types", "js/data_types/strings","js/data_types/arrays"],
            },
            "js/functions",
            "js/fp",
        ],
    },
};
