function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    }
    // If not successful, do nothing (implicitly returns a rejected promise)
  });
}

module.exports = getPaymentTokenFromAPI;

