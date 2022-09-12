import React from "react";

// third party imports
import { useDispatch } from "react-redux";

// local imports
import SimpleBtn from "../master/SimpleBtn/SimpleBtn";
import { toggleModal } from "../../_redux/store/action/globalAction";

function RemoveCartItem(props) {
  const { children, onRemoveItem } = props;
  const dispatch = useDispatch();

  const cancelHandler = () => {
    dispatch(toggleModal());
  };

  const removeHandler = () => {
  };

  return (
    <div className="remove-cart-item">
      <div className="remove-cart-item__details">
        <div className="remove-cart-item__name">{children}</div>
        <div onClick={cancelHandler} className="remove-cart-item__close">
        </div>
      </div>

      <div className="remove-cart-item__action">
        <div className="remove-cart-item__cancel">
          <SimpleBtn
            onClick={cancelHandler}
            variant="success"
            style={{ backgroundColor: "#bebebe" }}
          >
            CANCEL
          </SimpleBtn>
        </div>
        <div classNam="remove-cart-item__remove">
          <SimpleBtn onClick={removeHandler} variant="danger">
            REMOVE
          </SimpleBtn>
        </div>
      </div>
    </div>
  );
}

export default RemoveCartItem;
