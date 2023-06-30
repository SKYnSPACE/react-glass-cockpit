export const Display = ({ children, size }) => {
  return (
    <div className="display" style={{
      height: size ?? '500px',
      width: size ?? '500px',
      position: 'relative',
      backgroundColor: '#000000',
      display: 'inline-block',
      overflow: 'hidden',
    }}>

      {children}
    </div>
  );
};