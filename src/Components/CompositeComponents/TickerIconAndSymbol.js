import classNames from "classnames";

function TickerIconAndSymbol({ icon, symbol, classes = {} }) {
  return (
    <div className={classNames(classes?.iconAndSymbolWrapper)}>
      <div className={classNames(classes?.imageWrapper)}>
        <img
          src={icon}
          className={classNames(classes?.image)}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "";
          }}
        />
      </div>
      <div className={classNames(classes?.symbol)}>{symbol}</div>
    </div>
  );
}

export default TickerIconAndSymbol;
