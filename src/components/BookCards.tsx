import React, { useState } from 'react';
import BookDetails from './BookDetailsPage';

interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  image: string;
}

interface BookCardProps {
  data: Book; 
}

const BookCard: React.FC<BookCardProps> = ({ data }) => {
  const [quantity, setQuantity] = useState(0);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  const handleAddToCart = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleRemoveFromCart = () => {
    setQuantity((prev) => Math.max(0, prev - 1));
  };
  const toggleRegisterModal = () => {
    setRegisterOpen(!isRegisterOpen);
  };
  const closeRegisterModal = () => {
    setRegisterOpen(false);
  };
  return (
    <div className="bg-white p-4 rounded border cursor-pointer" onClick={toggleRegisterModal}>
      <img src={data?.image} alt={data?.title} className="max-w-full h-auto mb-2 rounded" />
      <h3 className="text-lg font-semibold mb-1">{data?.title}</h3>
      <p className="text-gray-700">{data?.author}</p>
      <p className="text-gray-700">{data?.description}</p>
      
      <div className="mt-4 flex justify-between items-center">
        {quantity === 0 ? (
          <button
            className="bg-primary text-white px-4 py-2 rounded w-full"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex items-center justify-center bg-primary text-white w-full">
            <button
              className="bg-primary px-3 py-1  text-2xl"
              onClick={handleRemoveFromCart}
            >
              -
            </button>
            <span className="px-3 py-1 text-lg">{quantity}</span>
            <button
              className="px-3 py-1"
              onClick={handleAddToCart}
            >
              +
            </button>
          </div>
        )}
      </div>
      {isRegisterOpen && (
    //    <Signup onClose={closeRegisterModal} />
       <BookDetails onClose={closeRegisterModal} data={data}/>
      )}
    </div>
  );
};

export default BookCard;
