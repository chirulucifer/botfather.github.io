// eslint-disable-next-line consistent-return
const AsyncReferee = (store) => (next) => (action) => {
  const {
    asyncTask,
    failureAction,
    type,
    successAction,
    failurePayloadGen,
    parser,
  } = action;
  if (!asyncTask) return next(action);

  asyncTask
    .then((response) => {
      let responseAsPayload = response.data;
      // simplifying the logic for this if condition
      // we can check for custom web service errors and header/meta info
      // eslint-disable-next-line func-names
      if (typeof parser === typeof (function () {})) {
        responseAsPayload = parser(response);
      }
      store.dispatch({ type: successAction, payload: responseAsPayload });
    })
    .catch((error) => {
      // pass control over to other action...
      // do not throw from here to avoid unhandled promise rejection
      if (failureAction) {
        const sideEffectPayload = failurePayloadGen
          && failurePayloadGen({
            errorInfo: error,
            triggeringAction: type,
            dispatch: store.dispatch,
          });
        store.dispatch({
          type: failureAction,
          payload: sideEffectPayload,
        });
      }
    });
};

export default AsyncReferee;
