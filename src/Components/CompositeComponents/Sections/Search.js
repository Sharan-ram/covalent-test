import { useState } from "react";

import Input from "../../AtomicComponents/Input";

function SearchSection() {
  const [value, setValue] = useState("");
  return (
    <div className="w-5/6 mx-auto py-2">
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}

export default SearchSection;
