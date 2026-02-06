import { useState } from "react";

function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();  // stop page refresh
        setSubmitted(true); //mark as submitted
        console.log(text);       
    };

    return (
        <div className="container mt-5">
            <h2>Contact Me</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Some Text" value={text}
                onChange={(e) => setText(e.target.value)}
                />
                <br /><br />

                <button className="btn btn-secondary" type="submit">Submit</button>
            </form>
            
            {/* Show after Submit */}
            {submitted && ( <p>Message sent Successfully</p>)}
        </div>
    );
}
export default Contact;
