import Char from "./character.module.scss";
import { useAppDispatch } from "../../store/hooks/redux-hooks";
import { setModalToActive } from "../../store/reducers/modalSlice";
type CharacterProps = {
  name: string;
  status: string;
  species: string;
  gender: string;
  location: string;
  origin: string;
  image: string;
};

export const Character = ({
  image,
  name,
  status,
  species,
  gender,
  location,
  origin,
 
}: CharacterProps) => {
  const dispatch = useAppDispatch();
  const modalData = {
    isActive: true,
    name,
    status,
    species,
    gender,
    location,
    origin,
    image,
  };
  return (
    <div
      className={Char.wrapper}
      onClick={() => {
        dispatch(setModalToActive(modalData));
        console.log();
      }}
    >
      <div className={Char.imgContainer}>
        <img src={image} alt="" />
      </div>
      <span>{name}</span>
    </div>
  );
};
