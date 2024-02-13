interface ButtonProps {
  name: string;
  onSubmit: () => void;
}
const Button = ({ name, onSubmit }: ButtonProps) => {
  return <button onClick={onSubmit}>{name}</button>;
};

export default Button;
