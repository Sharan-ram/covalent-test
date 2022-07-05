function Input({ value, onChange }) {
  return (
    <input
      className="w-2/5 bg-black"
      type="text"
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
