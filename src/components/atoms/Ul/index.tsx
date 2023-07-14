interface UlProps {
  children: React.ReactNode;
}

export const Ul: React.FC<UlProps> = ({ children }) => <ul style={{ listStyle: 'none' }}>{children}</ul>;
