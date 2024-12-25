import React from "react";
import Loader from "./Loader";
import { ToastContainer, toast ,Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = ({ Images, loader, saved, setSaved }) => {
  const saveImage = (img) => {
    let flag = true;

    //already saved image ko check krna hai
    for (let i = 0; i < saved.length; i++) {
      if (saved[i].id === img.id) {
        flag = false;
        //console.log("Image already saved");

        toast.info('IMAGE ALREADY SAVED', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Flip,
          });

        break;
      }
    }

    //img save krne ke liye
    if (flag) {
      setSaved([...saved, img]);
      //console.log("Image saved");   TOAST success se dikha dega
      toast.success('IMAGE SAVED', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
        });
    }
  };

  return (
    <>
    <ToastContainer/> 
      <div className="container-fluid text-center" id="top">
        {loader ? (
          <Loader />
        ) : (
          <>
            <div className="flex">
              {Images.map((image) => (
                <div
                  key={image.id}
                  className="items"
                  onClick={() => saveImage(image)}
                >
                  <img src={image.src.medium} alt={image.photographer} />
                </div>
              ))}
            </div>
          </>
        )}

        {Images.length !== 0 && (
          <a href="#top" className="btn btn-warning my-5">
            Back To Top
          </a>
        )}
      </div>
    </>
  );
};

export default Home;
