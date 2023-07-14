import { ReactElement } from 'react';
import { styled } from 'styled-components';

const Button = styled.button<{ $fontSize: string; $color: string }>`
  background-color: transparent;
  color: ${(props) => props.$color};
  font-size: ${(props) => props.$fontSize};
  border: none;
  cursor: pointer;
`;

interface ToggleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: string;
  iconExpanded: ReactElement;
  iconCollapsed: ReactElement;
  isCollapsed?: boolean;
  color: string;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  size,
  iconExpanded,
  iconCollapsed,
  isCollapsed,
  color,
  ...attributes
}) => (
  <Button $fontSize={size} $color={color} {...attributes}>
    {isCollapsed ? iconExpanded : iconCollapsed}
  </Button>
);
