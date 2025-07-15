import React, { useEffect, useReducer, useRef, useState } from "react";
import "./About.css";
import mapsVideo from "../../assets/video/maps_vd.mp4";
import audioSound from "../../assets/audio/machine_sound.mp3";
import {
  FaRegPlayCircle,
  FaPauseCircle,
  FaRegPauseCircle,
} from "react-icons/fa";
import axios from "axios";
import UserCard from "../../components/UserCard/UserCard";
import { ERROR, LOADING, SUCCESS } from "../../reducer/fetchReducer/fetchType";
import Loading from "../../components/Loading/Loading";
import fetchReducer, {
  initialFetchState,
} from "../../reducer/fetchReducer/fetchReducer";

function About() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const videoRef = useRef();
  const audioRef = useRef();
  const overlayRef = useRef();
  const [users, setUsers] = useState([]);

  const [fetchState, fetchDispatch] = useReducer(
    fetchReducer,
    initialFetchState
  );
  const { loading, error, success } = fetchState;

  // const URL = "https://jsonplaceholder.typicode.com/users";
  const URL = "http://localhost:8000/students";

  const toggleVideoPlay = () => {
    if (!isPlaying) {
      videoRef.current.play();
      overlayRef.current.style.opacity = "0";
    } else {
      videoRef.current.pause();
      overlayRef.current.style.opacity = "1";
    }
    setIsPlaying((prev) => !prev);
  };

  const handlerMouseLeave = () => {
    overlayRef.current.style.opacity = "0";
  };

  const handlerMouseEnter = () => {
    overlayRef.current.style.opacity = "1";
  };

  const toggleAudioHandler = () => {
    if (!isPlayingAudio) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlayingAudio((prev) => !prev);
  };

  async function getUserFromApi() {
    fetchDispatch({ type: LOADING });
    try {
      const res = await axios.get(URL);
      const data = res.data;
      setUsers(data);
      fetchDispatch({ type: SUCCESS });
    } catch (error) {
      console.log(error);
      fetchDispatch({ type: ERROR });
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const students = Object.fromEntries(form.entries());

    try {
      const res = await axios.post(URL, students);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserFromApi();
  }, []);

  return (
    <div className="container min-h-screen dark:text-white">
      <h1 className="">About Page</h1>
      <div className="video__block">
        <video
          ref={videoRef}
          className="video__el"
          width="280"
          height="500"
          src={mapsVideo}
        ></video>

        <div
          onClick={toggleVideoPlay}
          onMouseLeave={handlerMouseLeave}
          onMouseEnter={handlerMouseEnter}
          ref={overlayRef}
          className="overlay"
        >
          {isPlaying ? (
            <FaRegPauseCircle className="pause_icon" />
          ) : (
            <FaRegPlayCircle className="play_icon" />
          )}
        </div>
      </div>
      <div
        onClick={toggleAudioHandler}
        className="audio__block dark:text-slate-300"
      >
        <audio ref={audioRef} src={audioSound}></audio>
        {isPlayingAudio ? (
          <FaPauseCircle className="audio_icon-play" />
        ) : (
          <FaRegPlayCircle className="audio_icon-pause" />
        )}
      </div>
      <div className="test-tastk3">
        <h1 className="text-3xl">Student API with JSON Server</h1>
        <div className="user-wrappers--block">
          <form className="!pb-10" onSubmit={handleSubmit}>
            <input
              required
              name="name"
              className="border rounded-[6px] mb-5 sm:mb-0 !py-2.5 !px-4 sm:!mr-2.5 w-full sm:w-auto"
              type="text"
              placeholder="Enter user name..."
            />
            <input
              required
              name="age"
              className="border rounded-[6px] mb-5 sm:mb-0 !py-2.5 !px-4 sm:!mr-2.5 w-full sm:w-auto"
              type="number"
              placeholder="Enter user age..."
            />
            <button className="btn-default btn-darkMode mb-5 sm:mb-0 !py-3 !px-7 w-full sm:w-auto">
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="users_wrapper grid grid-cols-4 gap-5 !py-10">
        {loading && <Loading />}
        {error && <h1 className="dark:text-red-500">{error}</h1>}
        {success && users.length > 0
          ? users.map((user) => <UserCard key={user.id} user={user} />)
          : null}
      </div>
    </div>
  );
}

export default About;
