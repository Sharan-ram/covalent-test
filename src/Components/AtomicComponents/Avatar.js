import AvatarLogo from "../../assets/images/Avatar.png";
import Image from "./Image";

function Avatar() {
  return (
    <Image
      src={AvatarLogo}
      classes={{ imageWrapper: "w-20", image: "rounded-full" }}
      alt="avatar"
    />
  );
}

export default Avatar;
