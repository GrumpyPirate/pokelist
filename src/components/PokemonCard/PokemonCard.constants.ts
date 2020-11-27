import { position, rem, size } from 'polished';
import styled from 'styled-components';

import { mediaQueries } from '../../config/styles';

export const cardGaps = {
  mobile: 8,
  desktop: 16,
};

// Components
export const Number = styled.h3`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  transform: translate(-35%, -35%);
  background-color: #57bf6c;
  padding: ${rem(4)} ${rem(6)};
  font-size: ${rem(10)};
  line-height: 1;
  border-radius: ${rem(999)};
`;

export const Name = styled.h2`
  margin: 0;
  font-size: ${rem(12)};
`;

export const Image = styled.figure`
  ${position('absolute', '50%', '50%')}
  width: 75%;
  height: 75%;
  margin: 0;
  transform: translate(-50%, calc(-50% + ${rem(12)}));
  z-index: -1;

  img {
    ${size('100%')}
    position: absolute;
    display: block;
    object-fit: contain;
    image-rendering: crisp-edges;
    image-rendering: pixelated;
  }
`;

export const Type = styled.div``;

export const Card = styled.div`
  ${position('absolute', rem(cardGaps.mobile), rem(cardGaps.mobile))}
  width: calc(100% - ${rem(cardGaps.mobile * 2)});
  height: calc(100% - ${rem(cardGaps.mobile * 2)});
  background-color: #aaa;
  padding: ${rem(4)};
  color: #fff;
  border-radius: ${rem(4)};
  font-size: ${rem(12)};
  text-align: center;
  z-index: 1;

  @media ${mediaQueries.desktop} {
    top: ${rem(cardGaps.desktop)};
    left: ${rem(cardGaps.desktop)};
    width: calc(100% - ${rem(cardGaps.desktop * 2)});
    height: calc(100% - ${rem(cardGaps.desktop * 2)});
  }
`;
