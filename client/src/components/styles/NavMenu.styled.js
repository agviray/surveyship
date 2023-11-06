import styled from 'styled-components';

export const StyledNavMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  visibility: hidden;
  transform: translateY(-100%);
  background-color: #5a7d9e;
  transition: all 0.3s ease;

  &.isDisplayed {
    visibility: visible;
    transform: translateY(0);
  }

  @media screen and (min-width: 800px) {
    position: relative;
    height: 100%;
    visibility: visible;
    transform: translateY(0);
  }

  & ul {
    display: flex;
    flex-direction: column;
    padding: 6rem 0 4rem 0;

    @media screen and (min-width: 800px) {
      flex-direction: row;
      align-items: center;
      gap: 0.75rem;
      height: 100%;
      padding: 0;
    }

    & > li {
      height: 56px;
      padding: 0 4rem 0 1rem;
      span {
        font-size: 16px;
        display: inline-block;
        height: 100%;
        line-height: 56px;
      }

      @media screen and (min-width: 800px) {
        padding: 0;
      }

      // - Logout
      &:last-child {
        a {
          padding: 0;
        }
        @media screen and (min-width: 800px) {
          span {
            display: inline-block;
            line-height: 56px;
            padding: 0 1rem;
          }
        }
      }
    }
  }
`;
