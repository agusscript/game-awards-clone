import "./MainButton.scss";

type ButtonProps = {
  className: string;
  text: string;
};

function MainButton({ className = "main-btn", text }: ButtonProps) {
  return <button className={className}>{text}</button>;
}

export default MainButton;
