import "./Modal.scss";

const Modal = ({title, children}) => {

  const handlingSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form className="modal" onSubmit={(e) => handlingSubmit(e)}>
      <h1 className="modal__title"> {title} </h1>
      {children}
    </form>
  )
}

export default Modal