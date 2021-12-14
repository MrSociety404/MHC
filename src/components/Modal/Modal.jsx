import "./Modal.scss";

const Modal = ({title, children, onSubmitEvent}) => {

  const handlingSubmit = (e) => {
    e.preventDefault();
    onSubmitEvent();
  }

  return (
    <form className="modal" onSubmit={(e) => handlingSubmit(e)}>
      <h1 className="modal__title"> {title} </h1>
      {children}
    </form>
  )
}

export default Modal