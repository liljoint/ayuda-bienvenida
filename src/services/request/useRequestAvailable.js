import AvailableProductsMock from "../../__mocks__/AvailabeProductsMock";
const useRequestAvailable = (idProduct) => {
  const response = Object.values(AvailableProductsMock).reduce(
    (obj = [], value) => {
      if (value.product === idProduct) {
        obj.push(value);
      }
      return obj;
    },
    []
  );
  return { results: response };
};
export default useRequestAvailable;
