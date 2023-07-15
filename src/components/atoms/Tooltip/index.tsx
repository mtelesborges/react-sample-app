import { Tooltip as ChakraTooltip, TooltipProps } from '@chakra-ui/react';

export const Tooltip: React.FC<TooltipProps> = ({ label, placement, children }) => (
  <ChakraTooltip label={label} placement={placement}>
    {children}
  </ChakraTooltip>
);
