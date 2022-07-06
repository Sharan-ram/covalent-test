import AvatarLogo from "../../assets/images/Avatar.png";

function Avatar() {
  return (
    <div className="w-20">
      <img className="rounded-full" src={AvatarLogo} alt="avatar" />
    </div>
  );
}

export default Avatar;
