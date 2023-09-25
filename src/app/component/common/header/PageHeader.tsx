interface PageHeaderProps {
  title: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <div className="flex gap-2 items-center">
      <span className="h-6 w-1 bg-blue-600 dark:bg-blue-200"></span>
      <h2 className="text-2xl font-semibold">{title}</h2>
    </div>
  );
};

export default PageHeader;
