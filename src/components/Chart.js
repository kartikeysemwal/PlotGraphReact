import React from "react";
import FusionCharts from "fusioncharts";
import TimeSeries from "fusioncharts/fusioncharts.timeseries";
import ReactFC from "react-fusioncharts";
import data from "../data.json";
import schema from "../schema.json";

ReactFC.fcRoot(FusionCharts, TimeSeries);

const jsonify = (res) => res.json();

// Systolic 80 160
// Diastolic 40 120

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
        Promise.all([data, schema]).then((res) => {
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
