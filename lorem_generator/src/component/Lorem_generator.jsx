import { useState } from "react";

const Lorem = () => {
    const [val, setVal] = useState("");
    const [paragraphs, setParagraphs] = useState([]);

    const generate = () => {
        const num = parseInt(val);
        const loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula enim eu ante varius ultricies. Nulla facilisi. Suspendisse vel convallis velit. Nulla quis semper metus. Mauris dictum diam magna, at egestas ipsum consectetur a. Sed id fringilla purus. Aliquam eleifend ipsum ac neque pharetra, vitae tincidunt sem eleifend. Sed tristique, metus eget malesuada volutpat, justo velit consequat nisi, vitae efficitur ligula libero id magna. Donec dictum eleifend ligula, et interdum ipsum. Integer nec libero odio. Maecenas in vestibulum quam. Ut ac libero leo. Cras vehicula orci vel odio consequat faucibus.";

        const loremIpsumSentences = loremIpsumText.split('. '); // Split Lorem Ipsum text into sentences
        const selectedSentences = [];

        // Generate random paragraphs
        for (let i = 0; i < num; i++) {
            let paragraph = '';
            const randomSentenceCount = Math.floor(Math.random() * loremIpsumSentences.length) + 1;
            for (let j = 0; j < randomSentenceCount; j++) {
                const randomIndex = Math.floor(Math.random() * loremIpsumSentences.length);
                paragraph += loremIpsumSentences[randomIndex] + '. ';
            }
            selectedSentences.push(paragraph);
        }

        setParagraphs(selectedSentences);
    };

    return (
        <>
            <h1 className="m-15 font-bold text-2xl text-pink-800 text-center">
                TIRED OF BORING LOREM IPSUM?
            </h1>
            <div>
                <label>Paragraphs:</label>
                <input
                    type="number"
                    className="bg-slate-600 m-2"
                    value={val}
                    onChange={(e) => {
                        setVal(e.target.value);
                    }}
                />
                <button className="m-10 bg-green-900 text-white rounded-lg w-[100px]" onClick={generate}>
                    Generate
                </button>
            </div>
            <div className=" m-10 ">
                {paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </>
    );
};

export default Lorem;
