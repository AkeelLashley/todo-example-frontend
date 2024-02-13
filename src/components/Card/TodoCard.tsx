// const TodoCard = (props) => {
//   const { title, completed } = props;
//   return (
//     <div>
//       <h1 className="text-blue-500 p-2">{title}</h1>
//       <p>{completed ? "Completed" : "Not Completed"}</p>
//     </div>
//   );
// };

import Button from "../Buttons/Button";

interface TodoCardProps {
  title: string;
  completed: boolean;
  onSubmit: () => void;
}

const TodoCard = ({ title, completed, onSubmit }: TodoCardProps) => {
  return (
    <div>
      <h1 className="text-blue-500 p-2">{title}</h1>
      <p>{completed ? "Completed" : "Not Completed"}</p>

      <Button name={"Click Me"} onSubmit={onSubmit} />
    </div>
  );
};

export default TodoCard;
