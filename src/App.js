import "./App.css";
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png'
import gptImgLog from './assets/chatgptLogo.svg'
import { sendMsgToOpenAI } from "./openai";
import { useState } from "react";


function App() {
  const [input, setInput] = useState("");

  const handleSend = async () =>{
    const res = await sendMsgToOpenAI(input);
    console.log(res);
  }

  return (

    //Left Sidebar
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
              <div className="upperSideTop"><img src={gptLogo} alt="Logo" className="logo" /><span className="brand">ChatGPT</span></div>
              <button className="midBtn"><img src={addBtn} alt="new chat" className="addBtn" />New Chat</button>
              <div className="upperSideBottom">
                  <button className="query"><img src={msgIcon} alt="Query" />What is programming ?</button>
                  <button className="query"><img src={msgIcon} alt="Query" />How to use an API ?</button>
              </div>
        </div>
        <div className="lowerSide">
            <div className="listItems"><img src={home} alt="Home" className="listitemsImg" />Home</div>
            <div className="listItems"><img src={saved} alt="Saved" className="listitemsImg" />Saved</div>
            <div className="listItems"><img src={rocket} alt="Upgrade" className="listitemsImg" />Upgrade to Pro</div>
        </div>
      </div>

      {/* This is the main Body */}
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className="chatImg" src={userIcon} alt="" /><p className="tex">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde consectetur et debitis reiciendis facere totam eaque placeat architecto a expedita.</p>
          </div>
          <div className="chat bot">
            <img className="chatImg" src={gptImgLog} alt="" /><p className="tex">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia reiciendis animi nostrum doloribus voluptatibus suscipit odio sunt dolorum dignissimos beatae sed ullam optio, eaque perferendis numquam deleniti aliquid eius in ut ea labore voluptas nesciunt harum! Fugit, vel repellendus porro ratione, rem tempora sequi et optio quisquam corrupti voluptate quos. Nulla odio, ducimus, voluptatum harum cupiditate doloribus deleniti, eum sunt velit consequatur esse ipsum facere corporis officia exercitationem aperiam! Sapiente et ullam ipsa ipsum minus neque, dignissimos voluptas aut maxime repellendus dicta veritatis repudiandae veniam tempore blanditiis sed omnis commodi. Exercitationem beatae voluptate quo totam minima perferendis enim laborum quae.</p>
          </div>
        </div>

        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Send a message" value={input} onChange={(e)=>{setInput(e.target.value)}} /><button className="send" onClick={handleSend} ><img src={sendBtn} alt="Send" /></button>
          </div>
          <p>ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT August 20 Version.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
