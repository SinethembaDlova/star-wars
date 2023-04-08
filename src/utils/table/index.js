const columnKeyName = (headerName) => {
  switch (headerName) {
    case 'Title':
      return 'title';
    case 'Director':
      return 'director';
    case 'Producer':
      return 'producer';
    case 'Release Date':
      return 'release_date';
    default:
      return null;
  }
};

export default columnKeyName;
