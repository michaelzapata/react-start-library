import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ variant, ...props }) => {
  const colorClasses = () => {
    if(variant === 'primary') return { borderColor: 'black', backgroundColor: 'white' };
    if(variant === 'secondary') return { borderColor: 'white', backgroundColor: 'black' };
    return {};
  }
  return (
    <button style={{ ...colorClasses(), ...props.style }} {...props}>
      {props.children}
    </button>
  );
};

export default Button;