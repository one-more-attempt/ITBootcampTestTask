import ReactDOM from "react-dom";
import Modal from "./modal.module.scss";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux-hooks";
import { setModalToInitial, modalSlice } from "../../store/reducers/modalSlice";

export const ModalWindow = () => {
  const portal = document.querySelector("#portal");
  const dispatch = useAppDispatch();
  const userDataState = useAppSelector((state) => state.modalSliceReducer);
  const { isActive, name, status, species, gender, location, origin, image } =
    userDataState;

  const modal = isActive ? (
    <>
      <div
        className={Modal.modalWrapper}
        onClick={() => {
          dispatch(setModalToInitial());
        }}
      >
        <div
          className={Modal.modalContent}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className={Modal.imgContainer}>
            <img src={image} alt="" />
          </div>
          <div className={Modal.info}>
            <div>
              <p> Name:</p>
              <span>{name}</span>
            </div>
            <div>
              <p> Status:</p>
              <span>{status}</span>
            </div>
            <div>
              <p> Gender:</p>
              <span>{gender}</span>
            </div>
            <div>
              <p> Species:</p>
              <span>{species}</span>
            </div>
            <div>
              <p> Location:</p>
              <span>{location}</span>
            </div>
            <div>
              <p> Origin:</p>
              <span>{origin}</span>
            </div>
          </div>

          {/* <button
            onClick={() => {
             dispatch(setModalToInitial());
            }}
          >
            Close
         </button> */}
        </div>
      </div>
    </>
  ) : null;

  return portal ? ReactDOM.createPortal(modal, portal) : null;
};
