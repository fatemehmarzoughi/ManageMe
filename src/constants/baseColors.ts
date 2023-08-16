/* -------------------------------------------------------------------------- */
/*                                Basic Colors                                */
/* -------------------------------------------------------------------------- */
export const lightGray = '#80808017';

/* -------------------------------------------------------------------------- */
/*                                Color Themes                                */
/* -------------------------------------------------------------------------- */
/* ----------------------------------- Red ---------------------------------- */
export const primaryColorRed = '#900C3F';
export const secondaryColorRed = '#C70039';
export const surfaceColorRed = '#F94C10';
export const backgroundColorRed = '#F8DE22';
/* ---------------------------------- Green --------------------------------- */
export const primaryColorGreen = '#C8E4B2';
export const secondaryColorGreen = '#9ED2BE';
export const surfaceColorGreen = '#7EAA92';
export const backgroundColorGreen = '#FFD9B7';
/* ---------------------------------- Blue ---------------------------------- */
export const primaryColorBlue = '#071952';
export const secondaryColorBlue = '#0B666A';
export const surfaceColorBlue = '#35A29F';
export const backgroundColorBlue = '#97FEED';
/* --------------------------------- Purple --------------------------------- */
export const primaryColorPurple = '#6528F7';
export const secondaryColorPurple = '#A076F9';
export const surfaceColorPurple = '#D7BBF5';
export const backgroundColorPurple = '#EDE4FF';

export const secondaryColor = (themeId: string): string => {
  switch (themeId) {
    case 'red':
      return secondaryColorRed;
    case 'green':
      return secondaryColorGreen;
    case 'blue':
      return secondaryColorBlue;
    case 'purple':
      return secondaryColorPurple;

    default:
      return secondaryColorRed;
  }
};

export const backgroundColor = (themeId: string): string => {
  switch (themeId) {
    case 'red':
      return backgroundColorRed;
    case 'green':
      return backgroundColorGreen;
    case 'blue':
      return backgroundColorBlue;
    case 'purple':
      return backgroundColorPurple;

    default:
      return backgroundColorRed;
  }
};

export const primaryColor = (themeId: string): string => {
  switch (themeId) {
    case 'red':
      return primaryColorRed;
    case 'green':
      return primaryColorGreen;
    case 'blue':
      return primaryColorBlue;
    case 'purple':
      return primaryColorPurple;

    default:
      return primaryColorRed;
  }
};

export const surfaceColor = (themeId?: string): string => {
  switch (themeId) {
    case 'red':
      return surfaceColorRed;
    case 'green':
      return surfaceColorGreen;
    case 'blue':
      return surfaceColorBlue;
    case 'purple':
      return surfaceColorPurple;

    default:
      return surfaceColorRed;
  }
};
