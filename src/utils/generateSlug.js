export const generateSlug = (str) => {
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};
