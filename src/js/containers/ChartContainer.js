import React, { Component } from "react";
import { connect } from "react-redux";
import { LineChart, Line, XAxis, Tooltip } from "recharts";

class ChartContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="chart">
        <LineChart width={900} height={400} data={this.props.data.sales}>
          <XAxis dataKey="weekEnding" />
          <Tooltip />
          <Line type="monotone" dataKey="retailSales" stroke="#40a8ef" />
          <Line type="monotone" dataKey="wholesaleSales" stroke="#3c4858" />
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
