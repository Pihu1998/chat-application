const endpoint = "http://localhost:3001/comments";

export const updateHeaders = () => {
    return {
      // "Content-Type": "x-www-form-url-encoded",
      "Content-Type": "application/json",
  };
};
  
  export const apiGet = async () => {
    return fetch(endpoint, {
      method: "GET",
      headers: updateHeaders(),
    }).then((res) => {
      if (res.status === 403) {
         console.log("apiGet-status",res.status);
      } else {
        return res;
      }
    });
  };
  
  export const apiPost = async (options) => {
    console.log("Post-options",options);
    return fetch(endpoint, {
      method: "POST",
      headers: updateHeaders(),
      body: JSON.stringify(options),
    }).then((res) => {
      if (res.status === 400) {
        return res;
      } else {
        return res;
      }
    });
  };
  
  export const apiPut = async (options) => {
    return fetch(endpoint, {
      method: "PUT",
      headers: updateHeaders(),
      ...options,
    }).then((res) => {
      if (res.status === 403) {
      } else {
        return res;
      }
    });
  };
  
  export const apiDelete = async (options) => {
    return fetch(endpoint, {
      method: "GET",
      headers: updateHeaders(),
      ...options,
    }).then((res) => {
      if (res.status === 403) {
      } else {
        return res;
      }
    });
  };