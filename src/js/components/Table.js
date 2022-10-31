import React from "react";

const Table = props => {
  return (
    <div id="table">
      <table>
        <thead>
          <tr>
            <th scope="col" onClick={() => props.sortBy("weekEnding")}>
              <div>
                Week Ending
                <span className="arrowIcon"> {props.icon}</span>
              </div>
            </th>
            <th scope="col" onClick={() => props.sortBy("retailSales")}>
              <div>
                Retail Sales <span className="arrowIcon">{props.icon}</span>
              </div>
            </th>
            <th scope="col" onClick={() => props.sortBy("wholesaleSales")}>
              <div>
                Whole Sales <span className="arrowIcon">{props.icon}</span>
              </div>
            </th>
            <th scope="col" onClick={() => props.sortBy("unitsSold")}>
              <div>
                Units Sales <span className="arrowIcon">{props.icon}</span>
              </div>
            </th>
            <th scope="col" onClick={() => props.sortBy("retailerMargin")}>
              <div>
                Retailer Margin <span className="arrowIcon">{props.icon}</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>{props.rows}</tbody>
      </table>
    </div>
  );
};

export default Table;
