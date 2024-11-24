import "./App.css";
import { ProChat } from '@ant-design/pro-chat'

const App = () => {

  return (
    <ProChat
      request={async (messages) => {
        // Send a request with Message as the parameter
        return messages; // Supports both streaming and non-streaming
      }}
    />
  );
}

export default App;
