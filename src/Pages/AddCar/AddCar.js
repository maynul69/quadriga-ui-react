import axios from 'axios';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddCar = () => {
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
      <div className="add-service my-5">
        <h2>Add A Car</h2>
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
            className="mt-3"
            className="mt-3"
            {...register("key")}
            type="number"
            placeholder="key"
          />
          <input
            className="mt-3"
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="name"
          />

          <input
            className="mt-3"
            {...register("duration")}
            type="number"
            placeholder="duration (days)"
          />
          <input
            className="mt-3"
            type="number"
            {...register("price")}
            placeholder="price"
          />

          <textarea
            className="mt-3"
             {...register("description")}
            placeholder="description"
          />

          {/* <input className="mt-3" ref={register} type="file" name="picture" /> */}

          <input
            className="mt-3"
            type="file"
            {...register("picture")}
            placeholder="picture"
          />

          <input
            className="mt-3"
            style={{
              backgroundColor: "black",
              color: "white",
              marginTop: "10px",
            }}
            type="submit"
          />
        </form>
      </div>
    );
};

export default AddCar;