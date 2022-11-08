import {toast} from "react-toastify";

const ToastMessages = (response,messages) => {
    if (response === "success") {
        toast.success(messages, {
            position: toast.POSITION.TOP_RIGHT
        });
    } else if(response === "error") {
        toast.error(messages, {
            position: toast.POSITION.TOP_RIGHT
        });
    }else if(response === "warning") {
        toast.warn(messages, {
            position: toast.POSITION.TOP_RIGHT
        });
    }else {
        toast.info(messages, {
            position: toast.POSITION.TOP_RIGHT
        });
    }
}

export default ToastMessages;