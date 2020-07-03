const loginUser = (user, openError) => {
  const url = 'https://afternoon-falls-25894.herokuapp.com/signin';
  const rawResponse = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  return rawResponse
    .then((request) => {
      if (request.status !== 200) {
        throw new Error('Incorrect e-mail or password');
      }
      return request.json();
    })
    .then(({ userId }) => userId);
};

export default loginUser;
