import styled from 'styled-components';

export const StyledSurveyCollection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledSurveyCard = styled.div`
  position: relative;
  background-color: white;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 3px;

  & > div {
    border-radius: 0 0 3px 3px;
    // - Top half of card.
    &:nth-of-type(1) {
      padding: 1.5rem;
      h3 {
        padding-bottom: 1.5rem;
        font-size: 30px;
      }

      p {
        padding-bottom: 1rem;
      }
      span {
        display: block;
        font-size: 14px;
        text-align: right;
        color: #8f8f8f;
      }
    }
    // - Bottom half of card.
    &:nth-of-type(2) {
      display: flex;
      gap: 1rem;
      padding: 1rem 1.5rem;
      border-top: 1px solid rgba(160, 160, 160, 0.2);
    }
  }
`;
