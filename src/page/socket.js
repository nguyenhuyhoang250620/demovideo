import axios from "axios";
import { useEffect } from "react";

const Socket = ({sendata}) => {
  useEffect(() => {
    // Tạo kết nối HTTP đến máy chủ của bạn
    const httpClient = axios.create({
      baseURL: `ws://123.24.199.156:18080/ws/vms-server/`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Chuyển đổi kết nối HTTP thành kết nối WebSocket
    let socket = new WebSocket(
      `ws://123.24.199.156:18080/ws/vms-server/`
    );
    // Xử lý sự kiện khi kết nối WebSocket được mở
    socket.onopen = () => {
      console.log("Kết nối đã được mở");
    };

    // Xử lý sự kiện khi kết nối WebSocket nhận được tin nhắn
    socket.onmessage = (event) => {
        const dataEvent = JSON.parse(event.data);
        if(dataEvent.event === "video_face_scan"){
          sendata(dataEvent.data)
        }
    };

    socket.onclose = () => {
      console.log("Socket mất kết nối . Tự động kết nối lại sau 1 giây");
      setTimeout(() => {
        socket = new WebSocket(
            `ws://123.24.199.156:18080/ws/vms-server/`
        );
      }, 1000);
    };
    // Giải phóng kết nối WebSocket khi thành phần bị huỷ
    return () => {
      socket.close();
    };
  }, []);

  return <></>;
};
export default Socket;
