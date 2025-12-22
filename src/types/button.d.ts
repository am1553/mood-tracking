declare interface ButtonProps {
  onClick: () => void;
  innerHTML?: React.ReactNode;
  className?: string;
  type: "button" | "submit" | "reset";
}
