import styled from 'styled-components';

export const DetailDoneRoomWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 100%;
`;

export const RoomWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({})};
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  top: 5rem;
  gap: 1.5rem;
  padding: 1.6rem 2rem;
`;

export const EmptyWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  height: 100%;
  gap: 1.2rem;
  margin: 0 2rem;
  margin-top: 15.9rem;
`;

export const EmptyText = styled.div`
  ${({ theme: { fonts } }) => fonts.body_10};
  color: ${({ theme: { colors } }) => colors.G_07};
`;
