import classNames from "classnames";

export const TableRowHead = ({ classes = {}, data }) => {
  return (
    <tr className={classNames("bg-[#eff3f8]", classes?.tr)}>
      {data.map((item, index) => {
        return (
          <th key={index} className={classNames("py-2", classes?.tr)}>
            {item}
          </th>
        );
      })}
    </tr>
  );
};

export const TableRow = ({ data, classes }) => {
  return (
    <tr className={classNames(classes?.tr)}>
      {data.map((item, index) => {
        return (
          <td
            key={index}
            className={classNames("py-2 text-xs text-[#19233c]", classes?.td)}
          >
            {item}
          </td>
        );
      })}
    </tr>
  );
};

function Table({ tableHeadData, tableBodyData, classes }) {
  return (
    <div className="bg-white p-4 rounded-md">
      <table className="w-full text-center">
        <thead>{tableHeadData && <TableRowHead data={tableHeadData} />}</thead>
        <tbody>
          {tableBodyData.map((item, index) => {
            return (
              <TableRow key={index} classes={classes?.tableBody} data={item} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
