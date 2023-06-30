export const Ground = (props) => {
  return (
    <div className="display" style={{
      position: 'absolute',
      width: '100%',
      height: `${500 + 50}%`,
      bottom: '-500%',
      left: '0%',
      outline: '0.2em solid white',
      backgroundColor: '#A96400',
      transformOrigin: `50% 0%`,
      transform: `translate(0%, ${(props.pitch ?? 0) * 0.7}%) rotate(${props.roll ?? 0}deg)`,
    }}
    />
  );
};