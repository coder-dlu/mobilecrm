import React from 'react';

function MessageContent({ messageContent }) {
  // Kiểm tra xem messageContent có chứa dạng liên kết hay không
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  const regexString =
    /^[^a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/;
  const regexYTB = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
  const ytb = messageContent?.match(regexYTB);
  const isLink = urlRegex.test(messageContent);

  if (regexString.test(messageContent) && messageContent.length > 0) {
    return <div style={{ fontSize: '26px' }}>{messageContent}</div>;
  }

  if (ytb && ytb[2].length === 11) {
    const id = ytb[2];

    return (
      <>
        <iframe
          allowfullscreen
          width="420"
          height="345"
          src={`https://www.youtube.com/embed/${id}?controls=1`}
        ></iframe>
        <a
          style={{ color: '#fff', textDecoration: 'underline' }}
          target="_blank"
          href={messageContent}
        >
          {messageContent}
        </a>
      </>
    );
  }
  // Nếu là liên kết, hiển thị trong thẻ a
  if (isLink) {
    return (
      <a
        style={{ color: '#fff', textDecoration: 'underline' }}
        target="_blank"
        href={messageContent}
      >
        {messageContent}
      </a>
    );
  }

  // Nếu không phải liên kết, hiển thị trong thẻ div
  return <div>{messageContent}</div>;
}

export default MessageContent;
