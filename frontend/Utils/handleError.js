import toast from "react-hot-toast";

const handleError = (error, router = null) => {
  const status = error?.response?.status;

  switch (status) {
    case 400:
      toast.error(error.response.data.message || "Bad Request");
      break;

    case 401:
      toast.error(error.response.data.message ||"Session expired. Please login again.");

      localStorage.removeItem("token");

      if (router) {
        router.push("/");
      }

      break;

    case 403:
      toast.error(error.response.data.message ||"Access Denied");
      break;

    case 404:
      toast.error(error.response.data.message ||"Resource Not Found");
      break;

    case 500:
      toast.error(error.response.data.message ||"Internal Server Error");
      break;

    default:
      toast.error(
        error.response?.data?.message ||
        error.message ||
        "Something went wrong"
      );
  }
};

export default handleError;