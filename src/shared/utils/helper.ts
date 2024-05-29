/**
 * GET ENV VARIABLE
 * @param value
 * @param defaultValue
 */
export const env = (value: string, defaultValue: any = null) => {
  return process.env[value] ?? defaultValue;
};
