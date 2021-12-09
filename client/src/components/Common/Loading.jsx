import "./Loading.scss";
import { ReactComponent as Logo } from '../../assets/svg/Logo.svg'

const Loading = () => {
  return (
    <div className="loading">
      <Logo className="loading__logo" />
    </div>
  )
}

export default Loading