import { useState } from "react";

const Lorem = () => {
    // State variables
    const [paragraphCount, setParagraphCount] = useState("");
    const [generatedParagraphs, setGeneratedParagraphs] = useState([]);

    // Function to generate Lorem Ipsum paragraphs
    const generateLoremIpsum = () => {
        const numParagraphs = parseInt(paragraphCount);
        const loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula enim eu ante varius ultricies. Nulla facilisi. Suspendisse vel convallis velit. Nulla quis semper metus. Mauris dictum diam magna, at egestas ipsum consectetur a. Sed id fringilla purus. Aliquam eleifend ipsum ac neque pharetra, vitae tincidunt sem eleifend. Sed tristique, metus eget malesuada volutpat, justo velit consequat nisi, vitae efficitur ligula libero id magna. Donec dictum eleifend ligula, et interdum ipsum. Integer nec libero odio. Maecenas in vestibulum quam. Ut ac libero leo. Cras vehicula orci vel odio consequat faucibus.";
        const loremIpsumSentences = loremIpsumText.split('. ');
            // console.log(loremIpsumSentences);
        const selectedParagraphs = [];

        // Generate random paragraphs
        for (let i = 0; i < numParagraphs; i++) {
            let paragraph = '';
            const randomSentenceCount = Math.floor(Math.random() * loremIpsumSentences.length) + 1;
            console.log(randomSentenceCount);

            for (let j = 0; j < randomSentenceCount; j++) {
                const randomIndex = Math.floor(Math.random() * loremIpsumSentences.length);
                paragraph += loremIpsumSentences[randomIndex] + '. ';
            }

            selectedParagraphs.push(paragraph);
        }

        // Update state with generated paragraphs
        setGeneratedParagraphs(selectedParagraphs);
    };

    return (
        <>
            <h1 className="m-15 font-bold text-2xl text-pink-800 text-center">
                TIRED OF BORING LOREM IPSUM?
            </h1>
            <div className="mb-8">
                <label>Paragraphs:</label>
                <input
                    type="number"
                    className="bg-slate-600 m-2"
                    value={paragraphCount}
                    onChange={(e) => {
                        setParagraphCount(e.target.value);
                    }}
                />
                <button className="m-2 bg-green-900 text-white rounded-lg w-[100px]" onClick={generateLoremIpsum}>
                    Generate
                </button>
            </div>
            <div className="m-10 space-y-4  border border-green-300">
                {generatedParagraphs.map((paragraph, index) => (
                    <p key={index} className=" m-10 p-5 text-left">{index+1 + " ) " + paragraph}</p>
                ))}
            </div>
        </>
    );
};

export default Lorem;
