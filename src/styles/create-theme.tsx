import {
  Theme,
  ThemeOptions,
  createMuiTheme,
  unstable_createMuiStrictModeTheme,
} from '@material-ui/core/styles';

export default function createMyTheme(options: ThemeOptions): Theme {
  const theme = unstable_createMuiStrictModeTheme(options);
  return createMuiTheme({
    ...theme,
    appDrawer: {
      width: 225,
    },
  });
}

/**
 * @see https://material-ui.com/zh/guides/typescript/#customization-of-theme
 *
 */
declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    appDrawer: {
      width: React.CSSProperties['width'];
    };
  }
  // 允许用 `createMuiTheme` 来配置
  interface ThemeOptions{
    appDrawer?: {
      width?: React.CSSProperties['width'];
    };
  }
}

declare module '@material-ui/core/styles/createPalette' {
  interface TypeBackground {
    productDetail: string;
    footer: string;
    designerHeaderLighter: string;
    designerHeaderDeeper: string;
  }
}

declare module '@material-ui/core/styles/createTypography' {
  type GfashionVariant =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'
    | 'homeSectionTitle'
    | 'homeSectionDescription';

  interface Typography extends Record<GfashionVariant, TypographyStyle>, FontStyle, TypographyUtils {}

  interface TypographyOptions extends Partial<Record<GfashionVariant, TypographyStyleOptions> & FontStyleOptions> {}
}
