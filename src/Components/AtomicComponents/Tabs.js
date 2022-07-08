import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";

import { getActiveTab, toggleActiveTab } from "../../redux/tabs";

function Tabs({
  tabs = [
    { name: "Assets", value: "assets" },
    { name: "Transactions", value: "transactions" },
  ],
}) {
  const activeTab = useSelector(getActiveTab);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between w-1/4">
      {tabs.map((tab) => {
        return (
          <div
            onClick={() => dispatch(toggleActiveTab())}
            className={classnames({
              "w-1/2 pb-2.5 text-sm text-[#8b93a7] font-semibold flex justify-center cursor-pointer": true,
              "border-b-4 text-orange-500/100 border-b-orange-500/100":
                activeTab === tab.value,
            })}
          >
            {tab.name}
          </div>
        );
      })}
    </div>
  );
}

export default Tabs;
