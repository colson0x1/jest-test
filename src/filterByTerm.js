export function filterByTerm(inputArr, searchTerm) {
  if (!searchTerm) throw Error('Search term cannot be empty');
  if (!inputArr.length) throw Error('inputArr cannot be empty');

  const regex = new RegExp(searchTerm, 'i');
  return inputArr.filter((arrayElement) => arrayElement.url.match(regex));
}
