import { useNavigate } from "react-router-dom";

type ButtonProps = {
  id: number;
  className?: string;
  children: React.ReactNode;
};

function Button({ id, className = "", children }: ButtonProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/${id}`)}
      className={`px-4 py-2 text-main-light mx-5 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
