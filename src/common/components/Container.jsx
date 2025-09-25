const Container = ({ children, className }) => {
  return (
    <div
      className={`
        w-full
        px-4             /* mobile padding */
        max-w-full
        sm:max-w-[640px]
        md:max-w-[768px]
        lg:max-w-[1024px]
        xl:max-w-[1280px]
        2xl:max-w-[1536px]
        3xl:max-w-[1920px]
        mx-auto
        ${className || ""}
      `}
    >
      {children}
    </div>
  );
};

export default Container;
