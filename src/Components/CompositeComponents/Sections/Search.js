import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserAddress } from "../../../redux/user";

import Input from "../../AtomicComponents/Input";

function SearchSection() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="w-5/6 mx-auto py-2">
      <Input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          dispatch(setUserAddress(e.target.value));
        }}
      />
    </div>
  );
}

export default SearchSection;
