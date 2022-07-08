function Input({
  value,
  onChange,
  className = "w-1/2 px-3 py-1 border rounded-2xl border-[#e1e5f2] bg-white",
  type = "text",
}) {
  return (
    <input
      className={className}
      type={type}
      value={value}
      onChange={onChange}
      placeholder="Paste the Address here"
    />
  );
}

export default Input;
