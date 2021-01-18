const dataFetch = [
    ["01:20:00", "Systolic", 120],
    ["01:20:00", "Diastolic", 60],
    ["01:25:00", "Systolic", 140],
    ["01:25:00", "Diastolic", 50],
    ["01:40:00", "Systolic", 60],
    ["01:40:00", "Diastolic", 80],
    ["01:50:00", "Systolic", 120],
    ["01:50:00", "Diastolic", 60],

    // ["02:20:00", "Systolic", 120],
    // ["02:20:00", "Diastolic", 60],

    // ["02:25:00", "Systolic", 120],
    // ["02:25:00", "Diastolic", 60],

    // ["02:40:00", "Systolic", 120],
    // ["02:40:00", "Diastolic", 60],

    // ["02:50:00", "Systolic", 120],
    // ["02:50:00", "Diastolic", 60],

    // ["03:20:00", "Systolic", 120],
    // ["03:20:00", "Diastolic", 60],

    // ["03:25:00", "Systolic", 120],
    // ["03:25:00", "Diastolic", 60],

    // ["03:40:00", "Systolic", 120],
    // ["03:40:00", "Diastolic", 60],

    // ["03:50:00", "Systolic", 120],
    // ["03:50:00", "Diastolic", 60],

    // ["04:20:00", "Systolic", 120],
    // ["04:20:00", "Diastolic", 60],

    // ["04:25:00", "Systolic", 120],
    // ["04:25:00", "Diastolic", 60],

    // ["04:40:00", "Systolic", 120],
    // ["04:40:00", "Diastolic", 60],

    // ["04:50:00", "Systolic", 120],
    // ["04:50:00", "Diastolic", 60],
];

const schemaFetch = [
    {
        name: "Time",
        type: "date",
        format: "%H:%M:%S",
    },
    {
        name: "Type",
        type: "string",
    },
    {
        name: "Sales Value",
        type: "number",
    },
];

const dataFetch = [
    ["01-Feb-11", "Grocery", 8866],
    ["01-Feb-11", "Footwear", 984],
    ["02-Feb-11", "Grocery", 2174],
    ["02-Feb-11", "Footwear", 1109],
    ["03-Feb-11", "Grocery", 2084],
    ["03-Feb-11", "Footwear", 6526],
];

const schemaFetch = [
    {
        name: "Time",
        type: "date",
        format: "%d-%b-%y",
    },
    {
        name: "Type",
        type: "string",
    },
    {
        name: "Sales Value",
        type: "number",
    },
];
