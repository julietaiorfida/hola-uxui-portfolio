interface GeometricDividerProps {
  variant?: 'circle' | 'rectangle' | 'square' | 'mixed';
  position?: 'left' | 'center' | 'right';
}

const GeometricDivider = ({ variant = 'circle', position = 'center' }: GeometricDividerProps) => {
  const getPositionClass = () => {
    switch (position) {
      case 'left':
        return 'justify-start';
      case 'right':
        return 'justify-end';
      case 'center':
      default:
        return 'justify-center';
    }
  };

  const renderShape = () => {
    switch (variant) {
      case 'circle':
        return (
          <div className="w-32 h-32 rounded-full bg-primary/10 blur-sm" />
        );
      case 'rectangle':
        return (
          <div className="w-64 h-24 rounded-2xl bg-accent/10 blur-sm" />
        );
      case 'square':
        return (
          <div className="w-40 h-40 rounded-3xl bg-secondary/10 blur-sm" />
        );
      case 'mixed':
        return (
          <div className="flex gap-8 items-center">
            <div className="w-24 h-24 rounded-full bg-primary/10 blur-sm" />
            <div className="w-32 h-16 rounded-2xl bg-accent/10 blur-sm" />
            <div className="w-20 h-20 rounded-lg bg-secondary/10 blur-sm" />
          </div>
        );
    }
  };

  return (
    <div className={`w-full py-12 flex ${getPositionClass()}`}>
      {renderShape()}
    </div>
  );
};

export default GeometricDivider;
