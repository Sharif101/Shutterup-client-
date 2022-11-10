import React, { useState } from "react";

const Editreviewdetails = ({ allrev }) => {
  let { reviewItem, message, _id } = allrev;

  const [update, setUpdate] = useState(allrev);

  const handleUpdate = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000/review/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Reviews updated successfully");
        }
      });
  };

  const handleOnchange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newReview = { ...update };
    // console.log(newReview);
    newReview[field] = value;
    setUpdate(newReview);
  };
  return (
    <div>
      <div className="add_service_container">
        <form onSubmit={handleUpdate}>
          <input type="text" name="name" defaultValue={reviewItem} disabled />
          <br />
          <input
            type="text"
            onChange={handleOnchange}
            name="message"
            defaultValue={message}
          />
          <br />
          <button className="add_service_btn" type="submit">
            update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Editreviewdetails;
