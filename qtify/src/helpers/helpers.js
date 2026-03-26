export const endpoint = "https://qtify-backend-labs.crio.do";

export const truncate = (input, len) => {
  if (input.length > len) {
    return input.substring(0, len) + "...";
  }
  return input;
};