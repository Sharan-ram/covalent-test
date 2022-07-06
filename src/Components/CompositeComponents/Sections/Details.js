import { useSelector } from "react-redux";
import { getActiveTab } from "../../../redux/tabs";

import Tabs from "../../AtomicComponents/Tabs";
import Assets from "../Assets";
import Transactions from "../Transactions";

function DetailSection() {
  const activeTab = useSelector(getActiveTab);
  return (
    <div>
      <Tabs />
      {activeTab === "assets" && <Assets />}
      {activeTab === "transactions" && <Transactions />}
    </div>
  );
}

export default DetailSection;
