import { FC } from "react";
import { IError } from "interfaces";
import { ErrorItem } from "./ErrorItem";

interface IProps {
  errors: IError[] | [] | null;
}
export const ErrorsContainer: FC<IProps> = ({ errors }) => {
  const list = errors?.map((e: IError) => <ErrorItem key={e.message} e={e} />);
  return <div className="errors-container">{list}</div>;
};
