import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import BookCard from '../components/BookCard';

const BooksOfWriter = () => {

    const { id } = useParams();
    const idInt = parseInt(id);
    const { writers } = useLoaderData();

    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('/books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    console.log(books);

    // console.log(idInt, writers)
    const writer = writers.find(writer => writer.id === idInt);
    return (
        <div className='mb-12'>
            <div className="text-center flex justify-center items-center h-28 bg-black bg-opacity-15 rounded-md mt-12 mb-8">
                <h1 className="text-5xl text-black font-bold">{writer.name}<span className='text-[#23BE0A] font-bold text-5xl'>'</span>s</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    books && books.map(book => <BookCard key={book.id} book={book} isWriter={true}></BookCard>)
                }
            </div>
        </div>
    );
};

export default BooksOfWriter;