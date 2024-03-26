import React from 'react';
import { Link } from 'react-router-dom';

const WriterCard = ({writer}) => {
    console.log(writer);
    const {id, name} = writer;
    return (
        <Link to = {`/writer/${id}`} className='flex flex-col justify-center items-center py-3 px-5 rounded-2xl shadow-2xl'>
            <h1 className='text-2xl font-bold'>{name}</h1>
        </Link>
    );
};

export default WriterCard;