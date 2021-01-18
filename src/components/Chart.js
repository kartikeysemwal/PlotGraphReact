import React from "react";
import FusionCharts from "fusioncharts";
import TimeSeries from "fusioncharts/fusioncharts.timeseries";
import ReactFC from "react-fusioncharts";

ReactFC.fcRoot(FusionCharts, TimeSeries);

const jsonify = (res) => res.json();

const dataFetch = [
    ["01:00:00", "Systolic", 120],
    ["01:00:00", "Diastolic", 60],

    ["01:20:00", "Systolic", 130],
    ["01:20:00", "Diastolic", 70],

    ["01:40:00", "Systolic", 140],
    ["01:40:00", "Diastolic", 50],

    ["02:00:00", "Systolic", 110],
    ["02:00:00", "Diastolic", 40],

    ["02:20:00", "Systolic", 130],
    ["02:20:00", "Diastolic", 70],

    ["02:40:00", "Systolic", 150],
    ["02:40:00", "Diastolic", 40],

    ["03:00:00", "Systolic", 170],
    ["03:00:00", "Diastolic", 80],

    ["03:20:00", "Systolic", 140],
    ["03:20:00", "Diastolic", 60],

    ["03:40:00", "Systolic", 120],
    ["03:40:00", "Diastolic", 40],

    ["04:00:00", "Systolic", 170],
    ["04:00:00", "Diastolic", 50],

    ["04:20:00", "Systolic", 150],
    ["04:20:00", "Diastolic", 60],

    ["04:40:00", "Systolic", 150],
    ["04:40:00", "Diastolic", 70],

    ["05:00:00", "Systolic", 170],
    ["05:00:00", "Diastolic", 80],

    ["05:20:00", "Systolic", 180],
    ["05:20:00", "Diastolic", 50],

    ["05:40:00", "Systolic", 130],
    ["05:40:00", "Diastolic", 60],
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
        name: "Blood Pressure",
        type: "number",
    },
];

const dataSource = {
    chart: {},
    caption: {
        text: "Blood Pressure",
    },
    subcaption: {
        text: "Weekly Values",
    },
    series: "Type",
    yaxis: [
        {
            plot: "Blood Pressure Values",
            title: "Blood Pressure Values",
            format: {
                prefix: "",
            },
        },
    ],
};

class ChartViewer extends React.Component {
    constructor(props) {
        super(props);
        this.onFetchData = this.onFetchData.bind(this);
        this.state = {
            timeseriesDs: {
                type: "timeseries",
                renderAt: "container",
                width: "800",
                height: "800",
                dataSource,
            },
        };
    }

    componentDidMount() {
        this.onFetchData();
    }

    onFetchData() {
        Promise.all([dataFetch, schemaFetch]).then((res) => {
            const data = res[0];
            const schema = res[1];

            const fusionTable = new FusionCharts.DataStore().createDataTable(
                data,
                schema
            );
            const timeseriesDs = Object.assign({}, this.state.timeseriesDs);
            timeseriesDs.dataSource.data = fusionTable;
            this.setState({
                timeseriesDs,
            });
        });
    }

    render() {
        return (
            <div>
                {this.state.timeseriesDs.dataSource.data ? (
                    <ReactFC {...this.state.timeseriesDs} />
                ) : (
                    "loading"
                )}
            </div>
        );
    }
}

export default ChartViewer;
