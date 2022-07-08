import classNames from "classnames";

export const TableRowHead = ({ classes = {}, data }) => {
  return (
    <tr className={classNames("bg-[#eff3f8]", classes?.tr)}>
      {data.map((item) => {
        return <th className={classNames("py-2", classes?.tr)}>{item}</th>;
      })}
    </tr>
  );
};

export const TableRow = ({ data, classes }) => {
  return (
    <tr className={classNames(classes?.tr)}>
      {data.map((item) => {
        return (
          <td
            className={classNames("py-2 text-xs text-[#19233c]", classes?.td)}
          >
            {item}
          </td>
        );
      })}
    </tr>
  );
};
