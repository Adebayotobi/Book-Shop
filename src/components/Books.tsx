import React from 'react';
import BookCard from "./BookCards"
import {books} from "../dummyData"

interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  image: string;
}

interface BooksProps {
  bookData: Book[];
}

const Books: React.FC<BooksProps> = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
      {books.map((book) => (
        <BookCard key={book.id} data={book} />
      ))}
    </div>
  );
};

export default Books;
