import classNames from "classnames";

import Image from "../AtomicComponents/Image";

function TickerIconAndSymbol({ icon, symbol, classes = {} }) {
  return (
    <div className={classNames(classes?.iconAndSymbolWrapper)}>
      <div className={classNames(classes?.imageWrapper)}>
        <Image
          src={icon}
          classes={{
            imageWrapper: classes?.imageWrapper,
            image: classes.image,
          }}
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
