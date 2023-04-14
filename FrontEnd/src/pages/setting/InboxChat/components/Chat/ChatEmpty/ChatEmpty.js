import { chatEmpty } from "@/pages/setting/asset";
import './ChatEmpty.css'
function ChatEmpty() {
    return ( 
        <div className="wrapperChatEmpty">
           <div className="chatEmpty">
                <img src={chatEmpty}/>
                <p>Vui lòng chọn cuộc trò chuyện bên trái</p>
           </div>
        </div>
     );
}

export default ChatEmpty;