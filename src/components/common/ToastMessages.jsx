/**
 * @Author: H.G. Malwatta - IT19240848
 * @Description: This component is used to show the different types of toast messages
 * @Version: 1.0.0
 */

import {toast} from "react-toastify";

const ToastMessages = (response,messages) => {
    if (response === "success") {
        toast.success(messages, {
            position: toast.POSITION.TOP_RIGHT
        });
    } else if(response === "error") {
        toast.error(messages, {
            position: toast.POSITION.TOP_CENTER,
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
