const linkDefault = {
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'primary',
  variant: 'text.default'
};

const buttonDefault = {
  cursor: 'pointer',
  textDecoration: 'none',
  variant: 'text.default',
  '&:disabled, &[disabled]': {
    bg: 'disabled'
  },
  transition: '0.2s'
};

const hyperlinkDefault = {
  ...linkDefault
};

const links = {
  hyperlink: {
    // small
    ...hyperlinkDefault
  },
  footer: {
    ...linkDefault,
    variant: 'text.body.normal',
    lineHeight: 1.5,
    fontSize: ['1.4rem', null, '1.5rem', null, '1.6rem', '1.6rem']
  },
  legal: {
    ...linkDefault
  },
  contact: {
    ...linkDefault
  },
  clear: {
    ...linkDefault,
    p: 0,
    bg: 'transparent'
  },
  breadCrumb: {
    ...linkDefault,
    fontFamily: 'body.normal',
    fontSize: ['1.4rem', null, '1.5rem', null, '1.6rem', '1.6rem'],
    lineHeight: 1.25,
    fontFeatureSettings: "'ss01' on, 'ss02' on, 'liga' off"
  },
  navLinkOverlay: {
    ...linkDefault,
    variant: 'text.body.medium'
  }
};

const buttons = {
  primary: {
    // needs to before the buttonDefault styles, so that no hover styles are applied to disabled buttons
    '&:hover': {
      bg: 'hover'
    },
    ...buttonDefault,
    fontFamily: 'body.normal',
    border: 'none',
    color: 'white',
    display: 'flex',
    width: 'max-content',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    bg: 'primary',
    fontSize: ['1.8rem', null, '1.8rem', null, '1.8rem', '2rem'],
    p: [
      '1.6rem 2rem 1.6rem 2rem',
      null,
      '1.7rem 2.2rem 1.9rem 2.2rem',
      null,
      '1.7rem 2.2rem 1.9rem 2.2rem',
      '1.7rem 2rem 1.9rem 2rem'
    ],
    justifyContent: 'center',
    fontFeatureSettings: "'ss01' on, 'ss02' on, 'liga' off"
  },

  tertiary: {
    ...buttonDefault,
    variant: 'text.body.semiBold',
    fontSize: ['1.4rem', null, '1.4rem', null, '1.4rem', '1.4rem'],
    lineHeight: 1.25,
    border: '1px solid',
    borderColor: 'beige',
    color: 'primary',
    p: '1rem 2rem 1rem 2rem',
    fontFeatureSettings: "'ss01' on, 'ss02' on, 'liga' off",
    ':hover': {
      bg: 'beige100'
    }
  },

  clear: {
    ...buttonDefault,
    p: 0,
    bg: 'transparent',
    display: 'flex',
    alignItems: 'center'
  },
  clearWithArrow: {
    // needs to before the buttonDefault styles, so that no hover styles are applied to disabled buttons
    '&:hover': {
      color: 'hover'
    },
    ...buttonDefault,
    fontFamily: 'body.normal',
    border: 'none',
    display: 'flex',
    width: 'max-content',
    alignItems: 'center',
    whiteSpace: 'nowrap',

    justifyContent: 'center'
  }
};

const cards = {};

export { links, buttons, cards };
