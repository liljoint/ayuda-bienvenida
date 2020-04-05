const DropdownFormat = (data) => {
  const res = Object.values(data).map((value) => {
    return { key: value.id, value: value.id, text: value.name };
  });
  return res;
};
export default DropdownFormat;
