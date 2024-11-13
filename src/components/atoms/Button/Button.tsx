import { ReactNode } from 'react';

export interface ButtonProps {
  children: string | ReactNode;
}

export const Button = ({ children }: ButtonProps) => <button>{children}</button>;
