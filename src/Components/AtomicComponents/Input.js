function Input({ value, onChange }) {
  return (
    <input
      className="w-2/5 px-3 py-1 border rounded-2xl border-black"
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Paste the Address here"
    />
  );
}

export default Input;
