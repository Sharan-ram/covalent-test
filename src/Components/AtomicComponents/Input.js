function Input({ value, onChange }) {
  return (
    <input
      className="w-1/2 px-3 py-1 border rounded-2xl border-[#e1e5f2] bg-white"
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Paste the Address here"
    />
  );
}

export default Input;
