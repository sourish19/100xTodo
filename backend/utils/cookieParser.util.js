const cookieParser = (cookieHeader) => {
  // Dynamically store all the cookies here in key value pair

  const cookieList = {};

  // Split the cookie string into an array of cookies, It will come from headers of the request
  // e.g cookieHeader = "sessionId=abc=123; theme=dark; loggedIn=true" -- in headers cookies look like this

  const splitCookie = cookieHeader?.split(';');

  if(!splitCookie) {
    return cookieList
  }

  // Loop through the array of cookies
  // e.g splitCookie = ['sessionId=abc=123', 'theme=dark', 'loggedIn=true']

  splitCookie.forEach((cookie) => {
    if (cookie.includes('=')) {
      // Split the cookie into key and value and store them in key value pair
      const [name, ...rest] = cookie.split('='); // e.g name = 'sessionId', rest = ['abc=123']

      //  Decode the cookie value, here using decodeURIComponent because Cookies are often sent in an encoded format because cookie values can’t have spaces, semicolons, etc., without breaking the format.
      cookieList[name] = decodeURIComponent(rest.join('=')); // e.g cookieList = { sessionId: 'abc=123' }
    }
  });

  return cookieList;
};

export default cookieParser;