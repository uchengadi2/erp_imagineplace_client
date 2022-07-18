import { formValues } from "redux-form";
import data from "../apis/local";
import history from "../history";

import {
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
  CREATE_CATEGORY,
  FETCH_CATEGORIES,
  FETCH_CATEGORY,
  DELETE_CATEGORY,
  EDIT_CATEGORY,
  CREATE_USER,
  FETCH_USERS,
  FETCH_USER,
  DELETE_USER,
  EDIT_USER,
  CREATE_CITY,
  FETCH_CITIES,
  FETCH_CITY,
  DELETE_CITY,
  EDIT_CITY,
  CREATE_VENDOR,
  FETCH_VENDORS,
  FETCH_ASSIGNED_ORDERS,
  FETCH_COMPLETED_ORDERS,
  FETCH_ONTRANSIT_ORDERS,
  FETCH_VENDOR,
  DELETE_VENDOR,
  EDIT_VENDOR,
  CREATE_PRODUCT,
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  CREATE_POLICY,
  FETCH_POLICIES,
  FETCH_POLICY,
  DELETE_POLICY,
  EDIT_POLICY,
  CREATE_ORDER,
  FETCH_ORDERS,
  FETCH_ORDER,
  DELETE_ORDER,
  EDIT_ORDER,
  MAKE_PAYMENT,
  FETCH_PAYMENTS,
  FETCH_PAYMENT,
  DELETE_PAYMENT,
  EDIT_PAYMENT,
  PROCESS_REMITTANCE,
  FETCH_REMITTANCES,
  FETCH_REMITTANCE,
  DELETE_REMITTANCE,
  EDIT_REMITTANCE,
  CREATE_COUNTRY,
  FETCH_COUNTRIES,
  FETCH_COUNTRY,
  DELETE_COUNTRY,
  EDIT_COUNTRY,
  CREATE_STATE,
  FETCH_STATES,
  FETCH_STATE,
  DELETE_STATE,
  EDIT_STATE,
  CREATE_CURRENCY,
  FETCH_CURRENCIES,
  FETCH_CURRENCY,
  DELETE_CURRENCY,
  EDIT_CURRENCY,
  CREATE_CLUSTER,
  FETCH_CLUSTERS,
  FETCH_CLUSTER,
  DELETE_CLUSTER,
  EDIT_CLUSTER,
  CREATE_TRIP,
  FETCH_TRIPS,
  FETCH_TRIP,
  DELETE_TRIP,
  EDIT_TRIP,
  CREATE_ONTRANSIT_TRIP,
  FETCH_ONTRANSIT_TRIPS,
  FETCH_ONTRANSIT_TRIP,
  DELETE_ONTRANSIT_TRIP,
  EDIT_ONTRANSIT_TRIP,
  CREATE_FULLFILLED_TRIP,
  FETCH_FULLFILLED_TRIPS,
  FETCH_FULLFILLED_TRIP,
  DELETE_FULLFILLED_TRIP,
  EDIT_FULLFILLED_TRIP,
  CREATE_FULLFILLED_PAYMENT,
  FETCH_FULLFILLED_PAYMENTS,
  FETCH_FULLFILLED_PAYMENT,
  DELETE_FULLFILLED_PAYMENT,
  EDIT_FULLFILLED_PAYMENT,
  EDIT_PARTIAL_PAYMENT,
  CREATE_PARTIAL_PAYMENT,
  FETCH_PARTIAL_PAYMENTS,
  FETCH_PARTIAL_PAYMENT,
  DELETE_PARTIAL_PAYMENT,
  PROCESS_PARTIAL_REMITTANCE,
  FETCH_PARTIAL_REMITTANCES,
  FETCH_PARTIAL_REMITTANCE,
  DELETE_PARTIAL_REMITTANCE,
  EDIT_PARTIAL_REMITTANCE,
  PROCESS_COMPLETE_REMITTANCE,
  FETCH_COMPLETE_REMITTANCES,
  FETCH_COMPLETE_REMITTANCE,
  DELETE_COMPLETE_REMITTANCE,
  EDIT_COMPLETE_REMITTANCE,
  CREATE_SCHEMECODE,
  FETCH_SCHEMECODES,
  FETCH_SCHEMECODE,
  DELETE_SCHEMECODE,
  CREATE_GLCODE,
  FETCH_GLCODES,
  FETCH_GLCODE,
  DELETE_GLCODE,
  EDIT_GLCODE,
  CREATE_SUBGLCODE,
  FETCH_SUBGLCODES,
  FETCH_SUBGLCODE,
  DELETE_SUBGLCODE,
  EDIT_GLSUBCODE,
  CREATE_TRANSTYPE,
  FETCH_TRANSTYPES,
  FETCH_TRANSTYPE,
  DELETE_TRANSTYPE,
  EDIT_TRANSTYPE,
  CREATE_SERVICEOUTLET,
  FETCH_SERVICEOUTLETS,
  FETCH_SERVICEOUTLET,
  DELETE_SERVICEOUTLET,
  EDIT_SERVICEOUTLET,
} from "./types";

//authentication and authorization  operations

// export const signIn = (userId) => {
//   return {
//     type: SIGN_IN,
//     payload: userId,
//   };
// };

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const signUp = (formValues) => {
  return async (dispatch) => {
    const response = await data.post("/users/signup", formValues);
    dispatch({ type: SIGN_UP, payload: response.data.data });
  };
};

export const signIn = (formValues) => {
  return async (dispatch) => {
    const response = await data.post("/users/login", formValues);
    if (response.status === 200) {
      dispatch({ type: SIGN_IN, payload: response.data });

      //history.push("/dashboard");
    } else {
      console.log("something went wrong here");
    }
  };
};
//category resources crud operations
export const createCategory = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    console.log("the user id id:", userId);
    const response = await data.post("/categories", {
      ...formValues,
      userId,
    });

    dispatch({ type: CREATE_CATEGORY, payload: response.data.data.data });
  };
};

export const fetchCategories = () => {
  return async (dispatch) => {
    const response = await data.get("/categories");
    dispatch({ type: FETCH_CATEGORIES, payload: response.data.data.data });
  };
};

export const fetchCategory = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/categories/${id}`);
    dispatch({ type: FETCH_CATEGORY, payload: response.data.data });
  };
};

export const editCategory = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/categories/${id}`, formValues);
    console.log("this updated response:", response);
    dispatch({ type: EDIT_CATEGORY, payload: response.data.data.data });
    //history.push("/");
  };
};

export const deleteCategory = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/categories/${id}`);
    dispatch({ type: DELETE_CATEGORY, payload: id });
    history.push("/categories");
  };
};

//user resource crud operation
export const createUser = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await data.post("/users", {
      ...formValues,
      userId,
    });

    //console.log(response);
    dispatch({ type: CREATE_USER, payload: response.data });
    history.push("/users");
  };
};

export const fetchUsers = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/users");
    console.log("the users are:", response);
    dispatch({ type: FETCH_USERS, payload: response.data.data.data });
  };
};

export const fetchUser = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/users/${id}`);
    dispatch({ type: FETCH_USER, payload: response.data });
  };
};

export const editUser = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/users/${id}`, formValues);
    dispatch({ type: EDIT_USER, payload: response.data });
    history.push("/users");
  };
};

export const deleteUser = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/users/${id}`);
    dispatch({ type: DELETE_USER, payload: id });
    history.push("/users");
  };
};

////////////////////////////////////////////////////////

//city resource crud operation
export const createCity = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await data.post("/cities", {
      ...formValues,
      userId,
    });

    //console.log(response);
    dispatch({ type: CREATE_CITY, payload: response.data });
    history.push("/cities");
  };
};

export const fetchCities = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/cities");
    console.log("the cities are:", response);
    dispatch({ type: FETCH_CITIES, payload: response.data.data.data });
  };
};

export const fetchCity = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/cities/${id}`);
    dispatch({ type: FETCH_CITY, payload: response.data });
  };
};

export const editCity = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/cities/${id}`, formValues);
    dispatch({ type: EDIT_CITY, payload: response.data });
    history.push("/cities");
  };
};

export const deleteCity = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/cities/${id}`);
    dispatch({ type: DELETE_CITY, payload: id });
    history.push("/cities");
  };
};

/////////////////////////////////////////////////////////////////////

//vendor resource crud operation
export const createVendor = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await data.post("/vendors", {
      ...formValues,
      userId,
    });

    //console.log(response);
    dispatch({ type: CREATE_VENDOR, payload: response.data });
    history.push("/vendors");
  };
};

export const fetchVendors = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/vendors");
    console.log("vendor response is:", response);

    dispatch({ type: FETCH_VENDORS, payload: response.data.data.data });
  };
};

export const fetchVendor = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/vendors/${id}`);
    dispatch({ type: FETCH_VENDOR, payload: response.data });
  };
};

export const editVendor = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/vendors/${id}`, formValues);
    dispatch({ type: EDIT_VENDOR, payload: response.data });
    history.push("/vendors");
  };
};

export const deleteVendor = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/vendors/${id}`);
    dispatch({ type: DELETE_VENDOR, payload: id });
    history.push("/vendors");
  };
};

///////////////////////////////////////////////////////////////////

//product resource crud operation
export const createProduct = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await data.post("/products", {
      ...formValues,
      userId,
    });

    //console.log(response);
    dispatch({ type: CREATE_PRODUCT, payload: response.data });
    history.push("/products");
  };
};

export const fetchProducts = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/products");
    console.log("the products are:", response);
    dispatch({ type: FETCH_PRODUCTS, payload: response.data.data.data });
  };
};

export const fetchProduct = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/products/${id}`);
    dispatch({ type: FETCH_PRODUCT, payload: response.data });
  };
};

export const editProduct = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/products/${id}`, formValues);
    dispatch({ type: EDIT_PRODUCT, payload: response.data });
    history.push("/products");
  };
};

export const deleteProduct = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/products/${id}`);
    dispatch({ type: DELETE_PRODUCT, payload: id });
    history.push("/products");
  };
};

//////////////////////////////////////////////////////////////////

//policy resource crud operation
export const createPolicy = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await data.post("/policies", {
      ...formValues,
      userId,
    });

    //console.log(response);
    dispatch({ type: CREATE_POLICY, payload: response.data });
    history.push("/policies");
  };
};

export const fetchPolicies = (token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get("/policies");
    dispatch({ type: FETCH_POLICIES, payload: response.data.data.data });
  };
};

export const fetchPolicy = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/policies/${id}`);
    dispatch({ type: FETCH_POLICY, payload: response.data });
  };
};

export const editPolicy = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/policies/${id}`, formValues);
    dispatch({ type: EDIT_POLICY, payload: response.data });
    history.push("/policies");
  };
};

export const deletePolicy = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/policies/${id}`);
    dispatch({ type: DELETE_POLICY, payload: id });
    history.push("/policies");
  };
};

////////////////////////////////////////////////////////////////////////
//country resource models

export const createCountry = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await data.post("/countries", {
      ...formValues,
      userId,
    });

    //console.log(response);
    dispatch({ type: CREATE_COUNTRY, payload: response.data });
    history.push("/utilities/countries");
  };
};

export const fetchCountries = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/countries");
    console.log("countries response is:", response);

    dispatch({ type: FETCH_COUNTRIES, payload: response.data.data.data });
  };
};

export const fetchCountry = (id, token) => {
  return async (dispatch) => {
    const response = await data.get(`/countries/${id}`);
    dispatch({ type: FETCH_COUNTRY, payload: response.data });
  };
};

export const editCountry = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/countries/${id}`, formValues);
    dispatch({ type: EDIT_COUNTRY, payload: response.data });
    history.push("/utility/countries");
  };
};

export const deleteCountry = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/countries/${id}`);
    dispatch({ type: DELETE_COUNTRY, payload: id });
    history.push("/utilities/countries");
  };
};

////////////////////////////////////////////////////////////////////////
//state resource models

export const createState = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await data.post("/states", {
      ...formValues,
      userId,
    });

    //console.log(response);
    dispatch({ type: CREATE_STATE, payload: response.data });
    history.push("/utilities/states");
  };
};

export const fetchStates = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/states");
    //console.log("vendor response is:", response);

    dispatch({ type: FETCH_STATES, payload: response.data.data.data });
  };
};

export const fetchState = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/states/${id}`);
    dispatch({ type: FETCH_STATE, payload: response.data });
  };
};

export const editState = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/states/${id}`, formValues);
    dispatch({ type: EDIT_STATE, payload: response.data });
    history.push("/utilities/states");
  };
};

export const deleteState = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/states/${id}`);
    dispatch({ type: DELETE_STATE, payload: id });
    history.push("/utilities/states");
  };
};

////////////////////////////////////////////////////////////////////////
//currencies resource models

export const createCurrency = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await data.post("/currencies", {
      ...formValues,
      userId,
    });

    //console.log(response);
    dispatch({ type: CREATE_CURRENCY, payload: response.data });
    history.push("/utilities/currencies");
  };
};

export const fetchCurrencies = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/currencies");
    //console.log("vendor response is:", response);

    dispatch({ type: FETCH_CURRENCIES, payload: response.data.data.data });
  };
};

export const fetchCurrency = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/currencies/${id}`);
    dispatch({ type: FETCH_CURRENCY, payload: response.data });
  };
};

export const editCurrency = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/currencies/${id}`, formValues);
    dispatch({ type: EDIT_CURRENCY, payload: response.data });
    history.push("/utilities/currencies");
  };
};

export const deleteCurrency = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/currencies/${id}`);
    dispatch({ type: DELETE_CURRENCY, payload: id });
    history.push("/utilities/currencies");
  };
};

///Working on Scheme codes ////////////////////////////////////////

export const createSchemeCode = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await data.post("/schemecodes", formValues);
  };
};

export const fetchOrders = () => {};
