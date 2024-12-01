export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Projects',
        href: '#projects',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -5.5, 0] : isTablet ? [0.5, -7.5, 0] : [0.5, -7.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [7, -5, 0] : [11, -6.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 5, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-12, 10, 0] : isMobile ? [-15, 15, 0] : isTablet ? [-20, 15, 0] : [-47, 12, 0],
      targetPosition: isSmall ? [-6, -9, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-9, -12, -10] : [-10,-8,0],
    };
  };