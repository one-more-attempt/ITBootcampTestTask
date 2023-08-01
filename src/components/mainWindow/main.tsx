import { Character } from "../character/character";
import { ModalWindow } from "../modal/modal";
import { Header } from "../header/header";
import { DataHook } from "../../api/APIHook";
import { Spinner } from "../spinner/spinner";
import Main from "./main.module.scss";

export const MainWindow = () => {
  const { charactersData, loading, error } = DataHook();

  return (
    <>
      <ModalWindow />
      <div className={Main.mainWrapper}>
        <Header />
        {error && `Sorry, something went wrong!`}
        <div className={Main.mainList}>
          {charactersData &&
            charactersData.map((item: any) => (
              <Character
                key={item.id}
                name={item.name}
                status={item.status}
                species={item.species}
                gender={item.gender}
                location={item.location.name}
                origin={item.origin.name}
                image={item.image}
              />
            ))}
        </div>
        {loading && <Spinner />}
      </div>

      {error && `Sorry, something went wrong!`}
    </>
  );
};
