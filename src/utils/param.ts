export const getStateParam = (param: string) => {
  const params = param.replace("?", "");
  return params;
};
