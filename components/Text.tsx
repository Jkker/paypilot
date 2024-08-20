export const Title = ({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <h2 className='text-2xl font-bold flex items-center space-x-2'>
      {icon}
      {children}
    </h2>
  );
};

export const SubTitle = ({
  children,
  icon,
}: {
  children?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <h3 className='text-lg font-semibold text-gray-800 flex items-center gap-2 leading-none mt-2'>
      {icon}
      {children}
    </h3>
  );
};
