import { ReactElement } from 'react';
import { styled } from 'styled-components';

import { Tooltip } from '../Tooltip';

const Container = styled.span<{ $width: string }>`
  width: ${(props) => props.$width};

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IconContainerProps {
  width: string;
  tooltip?: string;
  icon: ReactElement;
}

export const IconContainer: React.FC<IconContainerProps> = ({ width, icon, tooltip }) => (
  <Tooltip label={tooltip} placement="right">
    <Container $width={width}>{icon}</Container>
  </Tooltip>
);
