import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import fetchReducer, {
  initialFetchState,
} from "../../reducer/fetchReducer/fetchReducer";
import { ERROR, LOADING, SUCCESS } from "../../reducer/fetchReducer/fetchType";

const URL = "http://localhost:8000/students";

function UserDetail() {
  const [client, setClient] = useState(null);

  const [fetchState, fetchDispatch] = useReducer(
    fetchReducer,
    initialFetchState
  );
  const { loading, error, success } = fetchState;

  const { id } = useParams();

  useEffect(() => {
    async function getUserInfo() {
      fetchDispatch({ type: LOADING });
      try {
        const res = await axios.get(`${URL}/${id}`);
        const data = res.data;

        console.log("data", data);

        setClient(data);
        fetchDispatch({ type: SUCCESS });
      } catch (error) {
        console.log(error);
        fetchDispatch({ type: ERROR, payload: "Something went wrong!!!" });
      }
    }

    getUserInfo();
  }, [id]);

  return (
    <div className="min-h-screen dark:text-white">
      {loading && <Loading />}
      {error && <h1 className="dark:text-red-500">{error}</h1>}
      {success && client ? (
        <div className="border border-gray-300 rounded-xl !p-6 bg-white dark:bg-slate-700 shadow-md max-w-md mx-auto !m-8">
          <h1 className="text-xl font-bold mb-2">User ID: {id}</h1>
          <p>
            <strong>Name:</strong> {client.name}
          </p>
          <p>
            <strong>Age:</strong> {client.age}
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default UserDetail;
