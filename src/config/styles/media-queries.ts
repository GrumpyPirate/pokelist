import { screenSizes } from './screen-sizes';

export const mediaQueries = {
  // 'up'
  largeMobile: `(min-width: ${screenSizes.largeMobileMin / 16}em)`,
  tablet: `(min-width: ${screenSizes.tabletMin / 16}em)`,
  desktop: `(min-width: ${screenSizes.desktopMin / 16}em)`,
  largeDesktop: `(min-width: ${screenSizes.largeDesktop / 16}em)`,
  tv: `(min-width: ${screenSizes.tvMin / 16}em)`,
  // down
  largeMobileDown: `(max-width: ${(screenSizes.tabletMin - 1) / 16}em)`,
  tabletDown: `(max-width: ${(screenSizes.desktopMin - 1) / 16}em)`,
  desktopDown: `(max-width: ${(screenSizes.largeDesktop - 1) / 16}em)`,
  largeDesktopDown: `(max-width: ${(screenSizes.tvMin - 1) / 16}em)`,
  // Device-specific
  mobileOnly: `(max-width: ${(screenSizes.largeMobileMin - 1) / 16}em)`,
  largeMobileOnly: `(min-width: ${screenSizes.largeMobileMin / 16}em) and (max-width: ${
    (screenSizes.tabletMin - 1) / 16
  }em)`,
  tabletOnly: `(min-width: ${screenSizes.tabletMin / 16}em) and (max-width: ${(screenSizes.desktopMin - 1) / 16}em)`,
  desktopOnly: `(min-width: ${screenSizes.desktopMin / 16}em) and (max-width: ${
    (screenSizes.largeDesktop - 1) / 16
  }em)`,
  largeDesktopOnly: `(min-width: ${screenSizes.largeDesktop / 16}em) and (max-width: ${
    (screenSizes.tvMin - 1) / 16
  }em)`,
};
