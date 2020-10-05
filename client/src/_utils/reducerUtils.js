export const asyncState = {
  initial: (initialData = null) => ({
    loading: false,
    data: initialData,
    error: null,
  }),
  load: (keepData = null) => ({
    loading: true,
    data: keepData,
    error: null,
  }),
  success: (data) => ({
    loading: false,
    data,
    error: null,
  }),
  error: (error) => ({
    loading: false,
    data: null,
    error,
  }),
};

export const createAsyncReducer = (type, key, keepData = false) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  const reducer = (state, action) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: asyncState.load(keepData ? state[key].data : null),
        };
      case SUCCESS:
        return {
          ...state,
          [key]: asyncState.success(action.payload),
        };
      case ERROR:
        return {
          ...state,
          [key]: asyncState.error(action.error),
        };
      default:
        return state;
    }
  };

  return reducer;
};
