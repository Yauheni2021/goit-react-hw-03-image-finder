import styled from 'styled-components';
export const SearchBarBox = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${p => `${p.theme.space[8]}px`};
  padding: ${p => `${p.theme.space[4]}px`} ${p => `${p.theme.space[6]}px`};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accent};
  box-shadow: ${p => p.theme.shadows.searchBoxShadow};
`;

export const SearchBarForm = styled.form`
  display: flex;
  align-items: baseline;
  width: 100%;
  max-width: 600px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
`;
export const SearchBarButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;

  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${p => p.theme.colors.white};
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;

export const SearchBarInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: ${p => p.theme.fontSizes.m};
  border: none;
  outline: none;
  padding: ${p => `${p.theme.space[2]}px`};
  line-height: ${p => p.theme.lineHeights.body};
  ::placeholder {
    font: inherit;
    font-size: ${p => p.theme.fontSizes.s};
  }
`;