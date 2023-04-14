import { DeleteMessager, GetMessage } from '@/untils/request';
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { userState } from '@/slices/messageSlice';
import { checkIcon, fileIcon } from '../../../asset';
import path from 'path';
import { IoMdClose } from 'react-icons/io';
import './ChatItem.css';
import moment from 'moment';
import { Image, Tooltip } from 'antd';
import EmtyAvatar from '../../Common/EmtyAvatar/EmtyAvatar';
import IsLinkContent from './MessageContent/MessageContent';
import MessageContent from './MessageContent/MessageContent';
import FormatDate from '../../Common/FormatDate/FormatDate';
import { GrFormCheckmark } from 'react-icons/gr';
const ChatItem = ({
  isReciper,
  name,
  text,
  img,
  dataMess,
  messageId,
  conversationId,
  imgUser,
  imgGuest,
  chat,
}) => {
  const [action, setAction] = useState(false);
  const actionRef = useRef();
  const [removeMess, setRemoveMess] = useState(false);
  const conversiton = useSelector(userState);
  const Refa = useRef();
  function formatDate(date) {
    const h = '0' + date.getHours();
    const m = '0' + date.getMinutes();
    return `${h.slice(-2)}:${m.slice(-2)}`;
  }

  const handleIsAction = () => {
    setAction((prevAction) => !prevAction);
  };

  const handleOutsideClick = (e) => {
    if (actionRef.current && !actionRef.current.contains(e.target)) {
      setAction(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleRemoveMessager = () => {
    const data = {
      conversitonId: dataMess.conversationId,
      messageId: dataMess.messageId,
    };
    DeleteMessager(data).then((res) => {
      setRemoveMess(true);
      if (res.data) GetMessage(dataMess.conversationId);
      setAction(false);
    });
  };
  // console.log('dataMess', dataMess);
  // console.log('imgUser', imgUser);
  // console.log('imgGuest', imgGuest);
  const handleEmptyAvatar = () => {
    switch (true) {
      case dataMess.senderThumbnail !== '':
        return <img className="msg-img" src={dataMess.senderThumbnail} />;
      case (dataMess.messageType === 0 && dataMess.senderThumbnail === '') || imgGuest === '':
        return <div className="avatarSend">{dataMess?.senderName.slice(0, 2)}</div>;
      case (dataMess.messageType === 1 && dataMess.senderThumbnail === '') || imgUser === '':
        return <div className="avatarSend">{dataMess?.senderName.slice(0, 2)}</div>;
      case (dataMess.messageType === 1 && dataMess.senderThumbnail !== '') || imgUser !== '':
        return <div className="avatarSend">{imgUser ? imgUser : dataMess.senderThumbnail}</div>;
    }

    // if (dataMess.senderThumbnail !== '') {
    //   return <img className="msg-img" src={dataMess.senderThumbnail} />;
    // } else if (
    //   (dataMess.messageType === 0 && dataMess.senderThumbnail === '') &&
    //   imgGuest === ''
    // ) {
    //   return <div className="avatarSend">{dataMess?.senderName.slice(0, 2)}</div>;
    // }
  };
  const [viewImage, setViewImage] = useState('');
  const handleViewImage = (urlImg) => {
    setViewImage(urlImg.dataUrl);
  };
  // console.log(dataMess.attachments);

  const handleSendFileImage = (dataFile) => {
    return dataFile.map((item) => {
      const fileName = path.basename(item.dataUrl || item.data_url);
      switch (item.fileType || item.file_type) {
        case 'image':
          return (
            <>
              <Image.PreviewGroup
                preview={{
                  onChange: (current, prev) =>
                    console.log(`current index: ${current}, prev index: ${prev}`),
                }}
              >
                <Image className="conversationImg" src={item.dataUrl || item.data_url} />
              </Image.PreviewGroup>
            </>
          );
        case 'file':
          return (
            <div className="file">
              <img src={fileIcon} className="iconFile" />
              <div className="fileInfo">
                <h6 className="nameFile">{fileName}</h6>
                <a download={fileName} href={item.dataUrl || item.data_url} target="_blank">
                  Tải xuống
                </a>
              </div>
            </div>
          );
        case 'video':
          return (
            <>
              <video
                controls
                className="conversationImg filevideo"
                src={item.dataUrl || item.data_url}
                type="video/mp4"
              />
            </>
          );
      }
    });
  };
  return (
    <li className="chat-Item">
      {/** UI Del */}
      <div className="containerChatItem">
        {dataMess.messageContent === 'Tin nhắn đã bị xoá' || removeMess ? (
          <div className={`msg  ${isReciper ? 'left-msg' : 'right-msg'}`}>
            {handleEmptyAvatar()}

            <div className="msg-bubble messDel">
              <div className="msg-text">{removeMess ? 'Tin nhắn đã bị xoá' : text}</div>
              <div className="msg-info">
                <div className="msg-info-time del">{formatDate(new Date())}</div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={`msg ${isReciper ? 'left-msg' : 'right-msg'} ${
              dataMess.messageType === 2 && 'msg-type'
            }`}
          >
            {dataMess.messageType === 2 ? (
              <div className="msg-system">
                <div className="msg-text">{dataMess.text ? dataMess.text : text}</div>
                <span className="msg-system-time">
                  <FormatDate date={dataMess.messageCreatedAt} />
                </span>
              </div>
            ) : (
              <>
                {handleEmptyAvatar()}
                <div className={`msg-bubble`}>
                  {dataMess.attachments?.length > 0 ? (
                    <div className="msg-text">
                      {handleSendFileImage(dataMess.attachments)}
                      {/* <div>{dataMess.messageContent ? dataMess.messageContent : undefined}</div> */}
                      <MessageContent messageContent={dataMess.messageContent} />
                    </div>
                  ) : (
                    // <div className="msg-text">{dataMess.text ? dataMess.text : text}</div>
                    <MessageContent messageContent={dataMess.messageContent || dataMess.text} />
                  )}
                  <div className="msg-info">
                    <div className="msg-info-time">
                      <FormatDate date={dataMess.messageCreatedAt} />
                    </div>
                  </div>
                </div>
                <div className={`msg-more  ${dataMess.messageType === 0 ? 'msg-more-left' : ''} `}>
                  <span className="msg-xx" onClick={handleIsAction}>
                    ...
                  </span>
                  {action && (
                    <div ref={actionRef} className="msg-Action">
                      {/* <span className="msg-ActionEdit action">Sao chép</span> */}
                      <span className="msg-ActionDel action" onClick={handleRemoveMessager}>
                        Xóa
                      </span>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </li>
  );
};

export default ChatItem;
