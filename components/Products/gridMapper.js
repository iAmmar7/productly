const gridMapper = (count) => {
  switch (count) {
    case 1:
      return 'lg:grid-cols-1';
    case 2:
      return 'lg:grid-cols-2';
    case 3:
      return 'lg:grid-cols-3';
    case 4:
      return 'lg:grid-cols-4';
    case 5:
      return 'lg:grid-cols-5';
    default:
      return 'lg:grid-cols-4';
  }
};

export default gridMapper;
