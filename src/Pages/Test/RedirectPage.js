import React, { useEffect } from "react";
import { ACCESS_TOKEN } from "../../constants";
import { useLocation, useNavigate } from "react-router-dom";

function RedirectPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const getUrlParameter = (name) => {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");

    var results = regex.exec(location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  };

  const token = getUrlParameter("token");
  const error = getUrlParameter("error");

  useEffect(() => {
    if (token) {
      localStorage.setItem(ACCESS_TOKEN, token);
      navigate("/pageA", { state: { from: location } });
    } else {
      navigate("/pageB", { state: { from: location, error: error } });
    }
  }, [token, error, navigate, location]);

  // Return null or any loading indicator if needed
  return null;
}

export default RedirectPage;
