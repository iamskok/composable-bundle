export type ButtonPros = {
  children: React.ReactNode;
}

export const PrimaryButton = ({ children }: ButtonPros) => {
  return (
    <button className="bg-primary-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-primary-700 transition duration-200 ease-in-out mr-4 flex-1">
      {children}
    </button>
  );
};
