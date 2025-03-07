import styled from 'styled-components';

export const ThumbnailWrapper = styled.div`
  position: relative;
  ${({ theme }) => theme.mixin.flexCenter({})}

  width: 19.2rem;
  height: 19.2rem;

  margin: 0 auto;
  cursor: pointer;

  background-color: ${({ theme }) => theme.colors.G_01};
  border-radius: 1.2rem;
`;

export const ImgPreview = styled.img`
  width: 19.2rem;
  height: 19.2rem;

  object-fit: contain;
`;

export const IcEmptyThumbnailWrapper = styled.div`
  ${({ theme }) =>
    theme.mixin.flexCenter({ direction: 'column', align: 'center', justify: 'center' })};

  margin-top: 2.8rem;
  cursor: pointer;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
