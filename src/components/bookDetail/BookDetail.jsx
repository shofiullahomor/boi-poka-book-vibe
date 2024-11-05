import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  addToStoredReadList,
  addToStoredWishList,
} from "../../utility/addToDB";

const BookDetail = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);
  const book = data.find((book) => book.bookId === id);
  const {
    bookId: currentBookId,
    image,
    review,
    bookName,
    author,
    category,
    totalPages,
    tags,
    rating,
    publisher,
    yearOfPublishing,
  } = book;
  const handleMarkAsRead = (id) => {
    /*
    1- understand what to store or save : => bookId 
    2- where to store: database
    3- array, list, collection :
    4- check: if the book is already in the readlist.
    5- if not, then add the book to the list
    6- if yes, do not add the book 
    */
    addToStoredReadList(id);
  };
  const handleAddToWishList = (id) => {
    addToStoredWishList(id);
  };
  return (
    <div className="hero  ">
      <div className="hero-content flex-col lg:flex-row gap-20 justify-between">
        <img
          src={image}
          className="max-w-xl rounded-lg shadow-2xl bg-gray-200 p-5 m-5"
        />
        <div>
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p>By: {author}</p>
          <div className="border-t-2 border-dashed"></div>
          <h3>{category}</h3>
          <div className="border-t-2 border-dashed"></div>
          <p className="py-6">
            <span className="text-xl">Review: </span> {review}
          </p>
          <h3>
            Tags:{" "}
            {tags.map((tag, index) => (
              <button key={index} className="btn btn-xs text-green-500">
                {tag}
              </button>
            ))}
          </h3>
          <div className="border-t-2 border-dashed"></div>
          <h3>Number of Pages: {totalPages}</h3>
          <h3>Publisher: {publisher}</h3>
          <h3>Year of Publishing: {yearOfPublishing}</h3>
          <h3>Rating: {rating}</h3>

          <button
            onClick={() => handleMarkAsRead(bookId)}
            className="btn btn-accent btn-outline mr-4"
          >
            Mark as Read
          </button>
          <button
            onClick={() => handleAddToWishList(bookId)}
            className="btn btn-accent mt-4"
          >
            Add to WishList
          </button>
        </div>
      </div>
    </div>
    // <div className="my-12">
    //   <h1>Book Detail: {bookId}</h1>
    //   <img src={image} alt="" />
    //   <br />
    //   <button className="btn btn-accent btn-outline mr-4">Read</button>
    //   <button className="btn btn-accent">Wish List</button>
    // </div>
  );
};

export default BookDetail;
