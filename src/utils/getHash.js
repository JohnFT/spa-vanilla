const getHash = () =>
  document.location.hash
    .slice(1)
    .toLocaleLowerCase()
    .split('/')
    .filter((prama) => prama)[0] || '/'

export default getHash
