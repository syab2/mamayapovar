import vars from '../_vars';
export const getHeaderHeight = () => {
  document.querySelector(':root').style.setProperty('--header-height', `${vars.headerHeight}px`);
}
