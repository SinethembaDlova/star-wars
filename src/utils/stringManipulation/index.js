export const replaceLastComma = (str = '') => {
  const parts = str
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  if (parts.length < 2) return parts[0] || '';

  const [last, ...rest] = parts.reverse();
  return rest.reverse().join(', ') + ` & ${last}`;
};
