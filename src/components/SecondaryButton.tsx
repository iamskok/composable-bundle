export type SecondaryButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
}

export const SecondaryButton = ({ children, onClick }: SecondaryButtonProps) => {
  return (
      <button
        onClick={onClick}
        className="bg-secondary-300 text-secondary-700 px-5 py-2 rounded-lg shadow-md hover:bg-secondary-400 transition duration-200 ease-in-out"
      >
        {children}
      </button>
  );
}
