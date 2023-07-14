import { styled } from 'styled-components';

export const Span = styled.span<{ $padding?: string }>`
  display: inline-block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: ${(props) => props.$padding};
  transition: opacity 0.6s ease;

  &.expanded {
    opacity: 1;
    cursor: pointer;
    pointer-events: auto;
  }

  &.collapsed {
    opacity: 0;
    cursor: none;
    pointer-events: none;
  }
`;

interface SpanProps {
  padding?: string;
  isCollapsed?: boolean;
  title: string;
}

export const MenuTitle: React.FC<SpanProps> = ({ padding, isCollapsed, title }) => (
  <Span $padding={padding} className={isCollapsed ? 'collapsed' : 'expanded'}>
    {title}
  </Span>
);
