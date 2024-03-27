import { useLoaderData } from "react-router-dom";
import WriterCard from "../components/WriterCard";
import { useState } from "react";

const Writer = () => {
    const { writers } = useLoaderData();

    const [totalWriters, setTotalWriters] = useState(writers.slice(0,24));
    const [toggle, setToggle] = useState(false);

    const handelSeeAll = isToggle =>{
        if(isToggle){
            setTotalWriters(writers);
        }
        else{
            setTotalWriters(writers.slice(0,24));
        }
        setToggle(isToggle);
    }
    // console.log(writers)
    return (
        <div>
            <div className="flex justify-center items-center h-28 bg-black bg-opacity-15 rounded-md mt-12 mb-8">
                <h1 className="text-5xl text-black font-bold">WRITERS</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                {
                    totalWriters.map(writer => <WriterCard key={writer} writer={writer}></WriterCard>)
                }
            </div>
            <div className="flex justify-center my-10">
                <button onClick={() => handelSeeAll(!toggle)} className="px-3 py-2 rounded-xl text-lg font-bold text-green-600 border border-green-500/50">{!toggle ? 'See All' : 'See Less'}</button>
            </div>
        </div>
    );
};

export default Writer;