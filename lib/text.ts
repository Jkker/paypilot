export const toTitleCase = (str: string): string => {
  return str
    .split(/[_-\s]/)
    .map(
      (word) =>
        word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase(),
    )
    .join(' ');
};
