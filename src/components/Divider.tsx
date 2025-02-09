type DividerProps = {
  className?: string;
};

const Divider: React.FC<DividerProps> = ({ className }) => {
  return <hr className={`${className} border-0 block`} />;
};

export default Divider;
