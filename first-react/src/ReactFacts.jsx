import reactLogo from "../src/assets/react.svg";

function ReactFacts() {

    return (
        // <> This is called React Fragment for grouping some code together.
        <>
            <div>
                <img className="logo-margin" src={reactLogo} width="40" alt="React Logo" />
            </div>

            <h1>Fun Facts about React</h1>

            <ul>
                <li>First released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k start on the GitHub</li>
                <li>is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>

        </>
    )
}

export default ReactFacts;