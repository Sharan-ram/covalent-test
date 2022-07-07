import { useSelector } from "react-redux";
import { getActiveTab } from "../../../redux/tabs";

import Assets from "../Assets";
import Transactions from "../Transactions";

function DetailSection() {
  const activeTab = useSelector(getActiveTab);
  return (
    <div className="w-5/6 mx-auto pt-4">
      {activeTab === "assets" && <Assets />}
      {activeTab === "transactions" && <Transactions />}
    </div>
  );
}

export default DetailSection;
