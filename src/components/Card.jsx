import React from "react";

function Card({ book }) {
  console.log(book);
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-32">
      {book.map((items, id) => {
        let thumbnail =
          items.volumeInfo.imageLinks &&
          items.volumeInfo.imageLinks.smallThumbnail;
        let amount =
          items.saleInfo.listPrice && items.saleInfo.listPrice.amount;

        if (thumbnail != undefined) {
          return (
            <div className="max-w-lg rounded-lg" key={id}>
              <div className="rounded bg-[pink] w-[200px] h-full">
                <img
                  src={thumbnail}
                  alt="images"
                  className="w-[200px] h-[200px]"
                  lazy="loading"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {items.volumeInfo.title}
                  </div>
                  <p className="text-gray-700 text-base">&#8377;{amount}</p>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Card;
