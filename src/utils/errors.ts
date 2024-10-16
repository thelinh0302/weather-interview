import { ERROR_CODE, errorMessages } from "@/constants";
import { InternalError, RESTError, ResponseErrorType } from "@/types";
import { AxiosError } from "axios";

const userFriendlyErrorMsg = (systemMessage: string | null) => {
  switch (systemMessage) {
    case ERROR_CODE.ERR_NETWORK:
      return "Oops..., There was a problem connecting to the server. Please try again.";
    default:
      return systemMessage;
  }
};
const isInternalError = (
  error: InternalError | ResponseErrorType
): error is InternalError => {
  return (error as InternalError)[0]?.extensions !== undefined;
};

const normalizeErrorResponseREST = ({
  error,
  error_description,
}: RESTError): ResponseErrorType => {
  return {
    code: error,
    message: error_description,
  };
};

const handleResponseErrors = (
  errors: InternalError | ResponseErrorType
): ResponseErrorType => {
  if (isInternalError(errors))
    return {
      code: errors[0]?.extensions.error,
      message: errors[0]?.extensions.error_description,
    };
  return errors;
};
type ErrorMessageKey = keyof typeof errorMessages;

function isValidErrorKey(key: any): key is ErrorMessageKey {
  return key in errorMessages;
}

function getErrorMessage(error: AxiosError): string {
  if (error.response && error.response.data) {
    const errorCode = (error.response.data as { msg?: string }).msg;
    if (errorCode && isValidErrorKey(errorCode)) {
      return errorMessages[errorCode];
    }

    return "An error occurred";
  }

  return error.message || "An unknown error occurred";
}

export {
  userFriendlyErrorMsg,
  handleResponseErrors,
  normalizeErrorResponseREST,
  getErrorMessage,
};
