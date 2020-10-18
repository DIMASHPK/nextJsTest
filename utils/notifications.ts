import { toast } from "react-toastify";

const toastify = (toast, type, message): void => toast[type](message);

export const catchError = (error: Error): void => {
    console.log({ error });

    if (error.message) {
        return toastify(toast, "error", error.message);
    }

    error.json().then(res => {
        toastify(toast, "error", res.error);
    });
};
