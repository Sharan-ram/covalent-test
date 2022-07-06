import { useState } from "react";
import classnames from "classnames";

function Tabs() {
  const [value, setValue] = useState("assets");
  return (
    <div className="flex justify-between w-1/4">
      <div
        onClick={() => setValue("assets")}
        className={classnames({
          "w-1/2 text-lg flex justify-center cursor-pointer": true,
          "border-b-2 text-orange-500/100 border-b-orange-500/100":
            value === "assets",
        })}
      >
        Assets
      </div>
      <div
        onClick={() => setValue("transactions")}
        className={classnames({
          "w-1/2 text-lg flex justify-center cursor-pointer": true,
          "border-b-2 text-orange-500/100 border-b-orange-500/100":
            value === "transactions",
        })}
      >
        Transactions
      </div>
    </div>
  );
}

export default Tabs;
