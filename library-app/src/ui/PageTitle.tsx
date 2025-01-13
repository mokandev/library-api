interface IPageTitleProps {
  children: string;
}

export const PageTitle: React.FC<IPageTitleProps> = ({ children }) => {
  return (
    <h1 className="mb-8 mt-6 text-center text-xl font-bold md:text-2xl">
      {children}
    </h1>
  );
};
