"use client";
import React, { useRef } from "react";

const form = () => {
  const fileInputRef = useRef(null);

  const handleUpload = () => {
    event.preventDefault();
    fileInputRef.current.click();
  }

  const handleFileChange = (event) => {
    const files = event.target.files;
    console.log(files);
  };

  return (
    <>
      <div className="container mx-auto py-2 md:py-5 font-figtree">
        <div className="my-10 space-y-4 flex flex-col items-center justify-center">
          <p>Add Product</p>
          <form className="md:border border-[#b6b6b6] px-5 md:px-20 py-10 space-y-5 md:w-auto">
            <div className="space-y-3">
              <p>Product Name</p>
              <input
                type="name"
                className="border border-[#b6b6b6] w-full px-10 py-4 outline-none"
              />
            </div>
            <div className="space-y-3">
              <p>Category</p>
              <select
                id="category"
                className="border border-[#b6b6b6] w-full px-10 py-4 outline-none"
              >
                <option defaultValue="Backpack">Backpack</option>
                <option value="">Messenger Bags</option>
                <option value="">Breifcase</option>
                <option value="">Totes</option>
                <option value="">Clutches</option>
              </select>
            </div>
            <div className="space-y-3">
              <p>Price($)</p>
              <input
                type="text"
                className="border border-[#b6b6b6] w-full px-10 py-4 outline-none"
              />
            </div>
            <div>
              <p>Add Photos</p>

              <div className="flex flex-col px-10 py-4 my-2 border-2 border-dashed border-[#b6b6b6] ">
                <p className="text-sm">Drag and Drop your files anywhere or </p>
                <input
                  id="hidden-input"
                  type="file"
                  multiple
                  className="hidden"
                  onChange={handleFileChange}
                />
                <button
                  id="button"
                  className="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none"
                  onClick={handleUpload}
                >
                  Upload a file
                </button>
              </div>
              <div className="flex flex-col px-4 ">
                <h1 className="pt-8 pb-3 font-semibold sm:text-lg text-gray-900">
                  To Upload
                </h1>

                <ul id="gallery" className="flex flex-1 flex-wrap -m-1">
                  <li
                    id="empty"
                    className="h-full w-full text-center flex flex-cols justify-center items-center"
                  >
                    <img
                      className="mx-auto w-32"
                      src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png"
                      alt="no data"
                    />
                    <span className="text-small text-gray-500">
                      No files selected
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-[#1e1e1e] text-white">
              <input
                type="submit"
                className="w-full border px-10 py-4 outline-none"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default form;
