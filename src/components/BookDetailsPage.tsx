import React, { useState } from 'react';
import ViewModal from './ViewModal';

interface Book {
    id: number;
    title: string;
    author: string;
    description: string;
    image: string;
  }

interface BookDetailsProps {
  data: Book;
  onClose: () => void;
}

const BookDetails: React.FC<BookDetailsProps> = ({ data, onClose }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleOrder = () => {
    console.log('Order placed for:', data.title);
  };

  return (
    <ViewModal isVisible={true} onClose={onClose} text={"Book Details Page"}>
    <div className="bg-white p-4 rounded border">
      <img src={data?.image} alt={data?.title} className="max-w-full h-auto mb-2 rounded" />
      <h3 className="text-lg font-semibold mb-1">{data?.title}</h3>
      <p className="text-gray-700">{data?.author}</p>
      <p className="text-gray-700">{data?.description}</p>

      <div className="mt-4 flex justify-between items-center">
        <div>
          <button
            className={`text-white px-4 py-2 rounded ${isLiked ? 'bg-red-500' : 'bg-primary'}`}
            onClick={handleLike}
          >
            {isLiked ? 'Unlike' : 'Like'}
          </button>
        </div>
        <div>
          <button
            className="bg-primary text-white px-4 py-2 rounded mr-2"
            onClick={handleOrder}
          >
            Order
          </button>
        </div>
      </div>
    </div>
    </ViewModal>
  );
};

export default BookDetails;
