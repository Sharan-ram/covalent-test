import classNames from "classnames";

function Image({ src, classes = {}, ...additionalProps }) {
  return (
    <div className={classNames(classes?.imageWrapper)}>
      <img
        src={src}
        className={classNames(classes?.image)}
        {...additionalProps}
      />
    </div>
  );
}

export default Image;
