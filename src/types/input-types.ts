export type ControllerOnChangeType = (event: {
  target: { name: string; value: string | number };
}) => void;
