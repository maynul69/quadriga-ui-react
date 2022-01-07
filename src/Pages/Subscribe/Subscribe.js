import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Subscribe = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
      console.log(data);
      axios
        .post("https://nameless-hollows-80731.herokuapp.com/packages", data)
        .then((res) => {
          if (res.data.insertedId) {
            alert("Car Added successfully");
            reset();
          }
        });
    };
    return (
      <div className="subscribe">
        <Header></Header>
        <h2 className=" my-5">Subscribe Now</h2>
        <form
          className="my-5"
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            width: "20rem",
            margin: "auto",
          }}
        >
          <input
            className="mt-2 py-2 px-5"
            {...register("key")}
            type="number"
            placeholder="key"
          />
          <input
            className="mt-2 py-2 px-5"
            {...register("email", { required: true, maxLength: 20 })}
            placeholder="email"
          />
          <input
            className="mt-2 py-2 px-5"
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="name"
          />

          <input
            className="mt-2 py-2 px-5"
            {...register("duration")}
            type="number"
            placeholder="duration (days)"
          />
          <input
            className="mt-2 py-2 px-5"
            type="number"
            {...register("nid")}
            placeholder="NID Number"
          />
          <input
            className="mt-2 py-2 px-5"
            type="number"
            {...register("dl")}
            placeholder="DL Number"
          />
          <p>
            Pay Us Via Bkash at : <b>01741940589</b> and give your number Below
            for us to verify
          </p>
          <input
            className="mt-2 py-2 px-5"
            type="number"
            {...register("bkash")}
            placeholder="BKash Number"
          />

          <input
            className="mt-2 py-2 px-5"
            style={{
              backgroundColor: "black",
              color: "white",
              marginTop: "10px",
            }}
            type="submit"
          />
        </form>
        <Footer></Footer>
      </div>
    );
};

export default Subscribe;