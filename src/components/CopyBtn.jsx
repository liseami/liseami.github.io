import React, { useState } from 'react';

const CopyButton = ({ content,btntitle}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setIsCopied(true);
      if (Notification.permission === "granted") {
        var notification = new Notification("复制成功", {
          body: "内容已复制。"
        });
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
          if (permission === "granted") {
            var notification = new Notification("复制成功", {
              body: "内容已复制。"
            });
          }
        });
      }
    } catch (err) {
      console.error("无法复制到剪贴板: ", err);
    }
  }

  return (
    <button onClick={handleCopy} className="text-emerald-600">
      {isCopied ? '已复制' : btntitle }
    </button>
  );
}

export default CopyButton;