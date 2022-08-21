function parseQueryString() {
  if (window.location.search.length === 0) {
    return {};
  } else {
    const queryStringObject = {};
    const queryString = window.location.search.substring(1).split('&');
    // console.log(queryString);

    for (const query of queryString) {
      const q = query.split('=');
      // console.log(q);
      queryStringObject[q[0]] = q[1];
    }
    // console.log(queryStringObject);
    return queryStringObject;
  }
}
// console.log(parseQueryString());
