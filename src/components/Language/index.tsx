import { AVAILABLE_LANGS, Lang } from '@i18n/consts';
import { setLang } from '@i18n/utils';
import { ClickAwayListener, IconButton, MenuItem, MenuList, Paper, Popper } from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import i18next from 'i18next';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    position: 'absolute',
    right: '6rem',
  },
  languageSelection: {
    '& .text': {
      width: '1.25rem',
      height: '1.25rem',
      border: `1px solid ${theme.palette.warning.contrastText}`,
      borderRadius: '0.625rem',
      fontSize: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    color: theme.palette.warning.contrastText,
    borderRadius: 8,
  },
  popper: {
    zIndex: 99,
  },
}));

const Language = (properties: any): React.ReactElement => {
  const classes = useStyles();
  const [isLangsMenuOpen, setLangsAnchorElement] = React.useState(false);
  // const anchorReference = React.useRef<HTMLButtonElement>();
  const anchorReference = React.createRef<HTMLButtonElement>();

  const handleLangsMenuOpen = () => {
    setLangsAnchorElement((_isLangsMenuOpen: boolean) => !_isLangsMenuOpen);
  };
  const handleLangsMenuClose = () => {
    setLangsAnchorElement(false);
  };
  const handleLanguageChange = (lang: Lang) => () => {
    setLang(lang);
    setLangsAnchorElement(false);
  };

  // return focus to the button when we transitioned from !isLangsMenuOpen -> isLangsMenuOpen
  const previousOpen = React.useRef(isLangsMenuOpen);
  React.useEffect(() => {
    if (previousOpen.current === true && isLangsMenuOpen === false) {
      anchorReference.current?.focus();
    }
    previousOpen.current = isLangsMenuOpen;
  }, [anchorReference, isLangsMenuOpen]);

  return (
    <div className={properties.className || classes.root}>
      <IconButton
        ref={anchorReference}
        edge='end'
        aria-label='account of current user'
        className={classes.languageSelection}
        onClick={handleLangsMenuOpen}
      >
        <div className='text'>{i18next.language.toUpperCase()}</div>
      </IconButton>

      <Popper
        open={isLangsMenuOpen}
        className={classes.popper}
        anchorEl={anchorReference.current}
        role={undefined}
        transition
        disablePortal
      >
        <Paper>
          <ClickAwayListener onClickAway={handleLangsMenuClose}>
            <MenuList autoFocusItem={isLangsMenuOpen}>
              {AVAILABLE_LANGS.map((lang) => (
                <MenuItem key={lang.value} onClick={handleLanguageChange(lang.value)}>
                  {lang.label}
                </MenuItem>
              ))}
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </div>
  );
};

export default Language;
