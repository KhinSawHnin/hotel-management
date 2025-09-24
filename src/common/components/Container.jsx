const Container = ({ children, className }) => {
  return (
    <div className={`  w-full 
        px-4 sm:px-6 
        md:max-w-[720px]
        lg:max-w-[1024px]
        xl:max-w-[1802px] ${className}`}>
      {children}
    </div>
  );
};

export default Container;