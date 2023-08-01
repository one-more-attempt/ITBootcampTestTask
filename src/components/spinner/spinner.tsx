import { ReactComponent as SpinnerSvg } from "../../img/spinner.svg";
import SpinnerStyles from "./spinner.module.scss";

export const Spinner = () => {
  return (
    <div className={SpinnerStyles.spinner}>
      <SpinnerSvg />
    </div>
  );
};
