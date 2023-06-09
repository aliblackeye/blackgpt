/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useCallback, useEffect, useState } from "react";

// Store
import { useSelector, useDispatch } from "react-redux";
import {
  setActiveChat,
  setChatModels,
  setCurrentChatModel,
  setSidebarCollapsed,
} from "@/store/features/gpt";

// Icons
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarRightCollapse,
  TbRobot,
} from "react-icons/tb";
import { HiOutlineChatBubbleOvalLeft, HiPlus } from "react-icons/hi2";

// Types
import { ChatModel } from "./sidebarTypes";
import Select from "@/components/Select";
import { RootState } from "@/store";

export default function Sidebar() {
  // Variables
  const dispatch = useDispatch();

  // Store Variables
  const gpt = useSelector((state: RootState) => state.gpt);

  // States
  const [selectedModel, setSelectedModel] = useState<string | null>(null);

  // Handlers
  const handleCollapse = useCallback(() => {
    dispatch(setSidebarCollapsed(!gpt.sidebarCollapsed));
    console.log("çalıştı");
  }, [gpt.sidebarCollapsed]);

  const getChatModels = async () => {
    // const response = await fetch("/api/chat-models");
    // const data = await response.json();
    const fakeChatModels: ChatModel[] = [
      {
        modelId: "1",
        name: "ChatGPT",
        chatList: [
          {
            id: "1",
            name: "Chat 1",
            modelId: "1",
          },
          {
            id: "2",
            name: "Chat 2",
            modelId: "1",
          },
          {
            id: "3",
            name: "Chat 3",
            modelId: "1",
          },
        ],
      },
      {
        modelId: "2",
        name: "CodeGPT",
        chatList: [
          {
            id: "1",
            name: "Chat 1",
            modelId: "2",
          },
          {
            id: "2",
            name: "Chat 2",
            modelId: "2",
          },
          {
            id: "3",
            name: "Chat 3",
            modelId: "2",
          },
        ],
      },
    ];

    dispatch(setChatModels(fakeChatModels));
    dispatch(setCurrentChatModel(fakeChatModels[0]));
    dispatch(
      setActiveChat({
        modelId: fakeChatModels[0].modelId,
        chatId: fakeChatModels[0].chatList[0].id,
        content: [],
      })
    );
  };

  useEffect(() => {
    getChatModels();
  }, []);

  return (
    <aside
      className={`sidebar ${gpt.sidebarCollapsed ? "sidebar-collapsed" : ""}`}
    >
      {/* Sidebar Header */}
      <header className="sidebar-header">
        <div className="sidebar-header-buttons">
          {/* New Chat Button */}
          <button
            type="button"
            className="sidebar-header-button new-chat-button "
          >
            <div className="new-chat-icon">
              <HiPlus />
            </div>{" "}
            Yeni sohbet
          </button>
          {/* Collapse Button */}
          <button
            type="button"
            onClick={handleCollapse}
            className="sidebar-header-button collapse-button"
          >
            {gpt.sidebarCollapsed ? (
              <TbLayoutSidebarRightCollapse size={20} />
            ) : (
              <TbLayoutSidebarLeftCollapse size={20} />
            )}
          </button>
        </div>

        <Select
          icon={<TbRobot size={18} />}
          options={gpt?.chatModels?.map((model) => ({
            id: model.modelId,
            name: model.name,
          }))}
          selected={selectedModel}
          initialValue={gpt?.chatModels?.[0]?.name as string}
          className="sidebar-header-model-selector"
          setSelected={setSelectedModel}
          onChange={(value) => {
            const selectedChatModel = gpt?.chatModels?.find(
              (model) => model.modelId === value
            );
            if (selectedChatModel) {
              dispatch(setCurrentChatModel(selectedChatModel));
            }
          }}
        />
      </header>

      <div className="sidebar-header-divider" />

      {/* Sidebar Content */}
      <section className="sidebar-content">
        <ul className="sidebar-content-list">
          {gpt?.currentChatModel?.chatList?.map((chat) => (
            <li
              key={chat.id}
              className="sidebar-content-list-item"
            >
              <div className="chat-icon">
                <HiOutlineChatBubbleOvalLeft />
              </div>
              <span>{chat.name}</span>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
