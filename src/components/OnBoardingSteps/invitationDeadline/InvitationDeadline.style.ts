import styled from 'styled-components';

export const InvitationDeadlineWrapper = styled.div`
  ${({ theme }) => theme.mixin.flexCenter({ align: 'center', justify: 'center' })};
  margin-top: 16.9rem;
  gap: 1.7rem;
`;

export const Text = styled.p`
  ${({ theme }) => theme.fonts.body_05};
  color: ${({ theme }) => theme.colors.G_07};
`;

export const GoHomeBtnWrapper = styled.div`
  ${({ theme }) => theme.mixin.inlineFlexBox({ align: 'center', justify: 'center' })};
  padding: 1.1rem 2rem 1.2rem 2rem;
  border-radius: 9.9rem;
  border: 1px solid ${({ theme }) => theme.colors.P_06};
  background: #fff;
  margin-top: 1.5rem;
`;

export const GoHomeBtnText = styled.p`
  ${({ theme }) => theme.fonts.body_09};
  color: ${({ theme }) => theme.colors.P_06};
`;
