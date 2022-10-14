import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { LineChart, Line, XAxis, Tooltip } from "recharts";

class ChartContainer extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="chart">
        <LineChart width={900} height={400} data={this.props.data.sales}>
          <XAxis
            dataKey="weekEnding"
            axisLine={false}
            tickLine={false}
            tickFormatter={date =>
              moment(date, "YYYY-MM-DD HH:mm:ss").format("MMMM")
            }
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="retailSales"
            stroke="#40a8ef"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="wholesaleSales"
            stroke="#3c4858"
            dot={false}
          />
        </LineChart>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

export default connect(
  mapStateToProps,
  null
)(ChartContainer);
