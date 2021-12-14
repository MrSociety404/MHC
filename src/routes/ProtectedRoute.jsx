import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom";
import Loading from "../components/Common/Loading";
import { UserContext } from '../context'

export const ProtectedRoute = () => {

  const [state] = useContext(UserContext);

  if( state.loading) return (
    <Loading />
  )

  return state.data ? <Outlet /> : <Navigate to="/login" />

}