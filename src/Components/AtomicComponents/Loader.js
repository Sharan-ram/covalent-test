import { Circles } from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Loader() {
  return (
    <div className="h-28 flex justify-center items-center">
      <Circles color="#00BFFF" height={50} width={50} />
    </div>
  );
}

export default Loader;
