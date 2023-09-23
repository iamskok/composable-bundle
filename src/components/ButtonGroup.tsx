export type ButtonGroupProps = {
  children: React.ReactNode;
}

export const ButtonGroup = ({ children }: ButtonGroupProps) => (
  <div className="flex pt-6">
    {children}
  </div>
)
