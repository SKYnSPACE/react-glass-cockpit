export const Sky = (props) => {
  return (
    <div className="display" style={{
      position: 'absolute',
      width: '100%',
      height: `${50 + 500}%`,
      top: '-500%',
      left: '0%',
      outline: '0.2em solid white',
      backgroundColor: '#0080FF',
      transformOrigin: `50% 100%`,
      transform: `translate(0%, ${(props.pitch ?? 0) * 0.7}%) rotate(${props.roll ?? 0}deg)`,
    }}
    />
  );
};