import { useLoaderData } from "react-router-dom";
import WriterCard from "../components/WriterCard";

const Writer = () => {
    const {writers} = useLoaderData();
    console.log(writers)
    return (
        <div>
            <div className="flex justify-center items-center h-28 bg-black mt-12 mb-8">
                <h1 className="text-5xl text-white font-bold">WRITERS</h1>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {
                    writers.map(writer => <WriterCard key={writer} writer={writer}></WriterCard>)
                }
            </div>
        </div>
    );
};

export default Writer;