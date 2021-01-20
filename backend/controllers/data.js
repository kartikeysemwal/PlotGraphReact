const fs = require("fs");

exports.createData = (req, res) => {
    // console.log("Data");

    const data = [];

    var size = 5;

    // Systolic 80 160
    // Diastolic 40 120

    var systolic_min = 130;
    var systolic_max = 160 + 1;

    var diastolic_min = 40;
    var diastolic_max = 120 + 1;

    var year_month_day = "2020-06-22";

    var time = ["00", "20", "40"];

    for (var i = 1; i <= size; i++) {
        for (var j = 0; j < time.length; j++) {
            var systolic_val =
                Math.random() * (systolic_max - systolic_min) + systolic_min;

            systolic_val = Math.floor(systolic_val);

            var systolic = [
                `${year_month_day} ${i}:${time[j]}:00`,
                "Systolic",
                systolic_val,
            ];

            data.push(systolic);

            var diastolic_val =
                Math.random() * (diastolic_max - diastolic_min) + diastolic_min;

            diastolic_val = Math.floor(diastolic_val);

            var diastolic = [
                `${year_month_day} ${i}:${time[j]}:00`,
                "Diastolic",
                diastolic_val,
            ];

            data.push(diastolic);
        }
    }

    fs.writeFile(
        "../healthood-app/src/data.json",
        JSON.stringify(data),
        function (err) {
            if (err) throw err;
            console.log("Data Updated");
        }
    );

    res.send("Created data");
};
