import Modal from '../components/Modal/Modal'

// Assets
import "./Connect.scss";
import { ReactComponent as ConnectIllu } from '../assets/svg/loginIllu.svg'

const Connect = () => {
  return (
    <main className="connect">
      <Modal title="Login">
        
      </Modal>
      <ConnectIllu className="connect__illu" />
    </main>
  )
}

export default Connect