import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";

import { getActiveTab, toggleActiveTab } from "../../redux/tabs";

function Tabs() {
  const activeTab = useSelector(getActiveTab);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between w-1/4">
      <div
        onClick={() => dispatch(toggleActiveTab())}
        className={classnames({
          "w-1/2 text-lg flex justify-center cursor-pointer": true,
          "border-b-2 text-orange-500/100 border-b-orange-500/100":
            activeTab === "assets",
        })}
      >
        Assets
      </div>
      <div
        onClick={() => dispatch(toggleActiveTab())}
        className={classnames({
          "w-1/2 text-lg flex justify-center cursor-pointer": true,
          "border-b-2 text-orange-500/100 border-b-orange-500/100":
            activeTab === "transactions",
        })}
      >
        Transactions
      </div>
    </div>
  );
}

export default Tabs;
