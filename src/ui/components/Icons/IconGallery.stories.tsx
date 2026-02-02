import * as Icons from "./index";

export default {
  title: 'Icons/Gallery',
};

const iconStyle = {
  '--icon-primary': '#353535',
  '--icon-accent': '#18fbff',
} as React.CSSProperties;

export const IconGallery = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: 24,
    }}
  >
    {Object.entries(Icons).map(([name, Icon]) => (
      <span key={name} style={iconStyle}>
        <Icon />
        <span>{name}</span>
      </span>
    ))}
  </div>
);
