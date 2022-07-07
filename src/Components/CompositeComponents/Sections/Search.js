import { useSelector, useDispatch } from "react-redux";
import { setUserAddress, getUserAddress } from "../../../redux/user";

import Input from "../../AtomicComponents/Input";

function SearchSection() {
  const userAddress = useSelector(getUserAddress);
  const dispatch = useDispatch();
  return (
    <div className="w-5/6 mx-auto py-2">
      <Input
        value={userAddress}
        onChange={(e) => dispatch(setUserAddress(e.target.value))}
      />
    </div>
  );
}

export default SearchSection;
