import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

const injectGlobalStyles = () => createGlobalStyle`
  ${styledNormalize}
`;

export default injectGlobalStyles;
