import React, { useState } from "react";
import "./index.css";

const MultiPage = () => {
    const pages = [
        "In today’s fast-paced world, the importance of effective communication cannot be overstated. Whether in professional settings, social interactions, or personal relationships, the ability to convey ideas clearly and listen actively is essential. Strong communication skills help in building trust, resolving conflicts, and fostering collaboration among teams. People who communicate effectively are often seen as more confident and approachable, which can lead to better opportunities and stronger connectionsEqually important is the role of empathy in conversations. Understanding the perspective of others allows for more meaningful dialogues and reduces the chances of misunderstandings. Empathy encourages patience and respect, creating an environment where individuals feel heard and valued. \n In both personal and professional contexts, this can lead to more productive outcomes and lasting relationships.Additionally, the way we communicate has evolved with technology. Emails, social media, and instant messaging have transformed traditional interactions, making speed and clarity crucial. However, written communication can sometimes lack the nuance of face-to-face conversations, emphasizing the need for careful word choice and tone. Practicing mindfulness in communication ensures that our messages are received as intended.Finally, effective communication is not just about speaking but also about continuous learning. Observing others, reflecting on experiences, and seeking feedback can enhance one’s ability to express thoughts clearly and empathetically. By prioritizing both clarity and understanding, individuals can navigate complex situations with confidence and maintain strong interpersonal bonds. Ultimately, mastering the art of communication enriches personal growth, fosters professional success, and strengthens the fabric of social interactions.",
        "This is page 2 content.",
        "This is page 3 content."
    ];

    const [currentPage, setCurrentPage] = useState(0);

    return (
        <div
            style={{
                padding: "20px",
                width:"100vw",
                justifyItems:"center",
                fontFamily: "Arial, sans-serif",
            }}
        >
       <div>
            <h1 style={{ textAlign: "center" }}>Multi-Page Text Display</h1>

            <div
                key={currentPage} // re-renders when page changes to trigger animation
                className="text-appear"
            >
                {pages[currentPage].split('\n').map((line, index) => (
        <span key={index}>
          {line}
          <br />
          <br/>
        </span>
      ))}
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <button
                    onClick={() =>
                        setCurrentPage((currentPage - 1 + pages.length) % pages.length)
                    }
                    style={{ marginRight: "10px" }}
                >
                    Previous
                </button>
                <div style={{ padding: "7px" }}>
                    {currentPage + 1} of {pages.length}
                </div>
                <button
                    onClick={() => setCurrentPage((currentPage + 1) % pages.length)}
                    style={{ marginLeft: "10px" }}
                >
                    Next
                </button>
            </div>
        </div>
        </div>
    );
};

export default MultiPage;

