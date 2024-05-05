export const userVaidators = {
    username: {
        errorMessage: 'Invalid username',
        isString: true
    },
    password: {
      isLength: {
        options: { min: 8 },
        errorMessage: 'Password should be at least 8 chars',
      },
    },
  }