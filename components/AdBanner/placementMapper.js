const placementMapper = (position) => {
  switch (position) {
    case 'middle':
      return 'top-1/2';
    case 'bottom':
      return 'bottom-28';
    default:
      return 'top-20';
  }
};

export default placementMapper;
