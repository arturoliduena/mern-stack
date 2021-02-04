export const loadState = () => {
  try {
    const token = localStorage.getItem('token');
    return {
      auth:
      {
        user: null,
        authorized: false,
        message: '',
        error: null,
        loading: true,
        token: token,
      }
    };

  } catch (err) {
    return undefined;
  }
};

export const saveToken = (token: string | null) => {
  try {
    localStorage.setItem('token', token ? token : '');
  } catch (err) {
    // Ignore write errors.
  }
};