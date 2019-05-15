import withRoot from 'withRoot';

injectGlobalStyles();

const setupDecorator = withRoot({i18n, store, history, theme});

export default setupDecorator;
