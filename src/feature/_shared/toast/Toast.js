import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToastDemo = () => {
    const notify = () => toast("votre paiment s'est bien passe ");
  return (
    <div>
    <button type="button" class="btn btn-primary" onClick={notify}> Toast!</button>
    <ToastContainer />
  </div>
  )
}