import { Log } from "../question1/src/utils/Logger";

function App() {
  const sendLog = async () => {
    try {
      const result = await Log(
        "frontend",
        "info",
        "component",
        "Application started successfully"
      );

      console.log(result);
      alert("Log Sent Successfully");
    } catch (error) {
      console.error(error);
      alert("Error sending log");
    }
  };

  return (
    <div>
      <h1>AffordMed Logging Middleware</h1>
      <button onClick={sendLog}>Send Log</button>
    </div>
  );
}

export default App;