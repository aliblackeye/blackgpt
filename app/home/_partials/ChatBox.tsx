"use client";

import { RootState } from "@/store";
import Image from "next/image";
import { TbSend } from "react-icons/tb";
import { useSelector } from "react-redux";

export default function ChatBox() {
  // Store Variables
  const gpt = useSelector((state: RootState) => state.gpt);

  return (
    <section
      className={`chatbox ${
        gpt.sidebarCollapsed ? "chatbox-sidebar-collapsed" : ""
      }`}
    >
      <header className="chatbox-header">
        <h1 className="model text-3xl font-extrabold text-center">
          {gpt?.currentChatModel?.name}
        </h1>
      </header>

      <div className="chatbox-body h-full">
        <ul className="messages-list">
          <li className="message-list-item message-sent">
            <Image
              src="https://avatars.githubusercontent.com/u/80913896?v=4"
              width={30}
              height={30}
              className="avatar"
              alt={"avatar"}
            />
            Merhaba!
          </li>
          <li className="message-list-item message-received">
            <Image
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhst4ldgBOg9rtbkICkI7VFyOe407LtYYCjVv0cfHh44OfJXH2V8huGuxGKV1Q0skZQiPiSrlAZjfpfRW1mQoOYMXc_M30p_eSarCnCCKF8ukhOMKoTCSiKIREJHCtsNfpzMAvZ5Lk83zOuk_21Au7LVzOwH5E0kPFPuV1bObJWc29Vp_IeeCJn0QDmew/s640/chat-gpt-logo.jpg"
              width={30}
              height={30}
              className="avatar"
              alt={"avatar"}
            />
            Merhaba aliblackeye! Size nasıl yardımcı olabilirim ?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia debitis 
          </li>
          <li className="message-list-item message-sent">
            <Image
              src="https://avatars.githubusercontent.com/u/80913896?v=4"
              width={30}
              height={30}
              className="avatar"
              alt={"avatar"}
            />
            Merhaba!
          </li>
          <li className="message-list-item message-received">
            <Image
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhst4ldgBOg9rtbkICkI7VFyOe407LtYYCjVv0cfHh44OfJXH2V8huGuxGKV1Q0skZQiPiSrlAZjfpfRW1mQoOYMXc_M30p_eSarCnCCKF8ukhOMKoTCSiKIREJHCtsNfpzMAvZ5Lk83zOuk_21Au7LVzOwH5E0kPFPuV1bObJWc29Vp_IeeCJn0QDmew/s640/chat-gpt-logo.jpg"
              width={30}
              height={30}
              className="avatar"
              alt={"avatar"}
            />
            Merhaba aliblackeye! Size nasıl yardımcı olabilirim ?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          </li>
          <li className="message-list-item message-sent">
            <Image
              src="https://avatars.githubusercontent.com/u/80913896?v=4"
              width={30}
              height={30}
              className="avatar"
              alt={"avatar"}
            />
            Merhaba!
          </li>
          <li className="message-list-item message-received">
            <Image
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhst4ldgBOg9rtbkICkI7VFyOe407LtYYCjVv0cfHh44OfJXH2V8huGuxGKV1Q0skZQiPiSrlAZjfpfRW1mQoOYMXc_M30p_eSarCnCCKF8ukhOMKoTCSiKIREJHCtsNfpzMAvZ5Lk83zOuk_21Au7LVzOwH5E0kPFPuV1bObJWc29Vp_IeeCJn0QDmew/s640/chat-gpt-logo.jpg"
              width={30}
              height={30}
              className="avatar"
              alt={"avatar"}
            />
            Merhaba aliblackeye! Size nasıl yardımcı olabilirim ?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia debitis soluta cupiditate ex? Aut provident animi ut culpa repudiandae ad ducimus veniam accusantium expedita cumque dolores dolor earum ipsa quam laborum possimus eum enim unde iste quibusdam, dignissimos doloribus inventore. Quisquam tempora accusantium placeat porro fugiat explicabo non cum minus?
          </li>
        </ul>
      </div>
      <footer className="chatbox-footer">
        <div className="form-input flex justify-between items-center gap-2 rounded-md  bg-[#40414f] p-[14px] w-full">
          <input
            type="text"
            placeholder="Bir mesaj gönder..."
          />
          <TbSend
            size={20}
            className="cursor-pointer"
          />
        </div>
      </footer>
    </section>
  );
}
