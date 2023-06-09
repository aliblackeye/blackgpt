import { ChatModel, GptType } from "@/app/home/_partials/sidebarTypes";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: GptType = {
  chatModels: [],
  currentChatModel: {
    modelId: null,
    name: null,
    chatList: [],
  },
  activeChat: {
    modelId: null,
    chatId: null,
    content: [
      {
        sort: "1",
        id: "1",
        content: "Hello, I'm GPT-4!",
        sender: "gpt",
      },
      {
        sort: "2",
        id: "2",
        content: "Hello, I'm Ali! How are you ?",
        sender: "aliblackeye",
      },
    ],
  },
  sidebarCollapsed: false,
};

export const gptSlice = createSlice({
  name: "gpt",
  initialState,
  reducers: {
    setChatModels: (state, action: PayloadAction<ChatModel[]>) => {
      state.chatModels = action.payload;
    },
    setCurrentChatModel: (state, action: PayloadAction<ChatModel>) => {
      state.currentChatModel = action.payload;
    },
    setActiveChat: (state, action: PayloadAction<any>) => {
      state.activeChat = action.payload;
    },

    setSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.sidebarCollapsed = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setActiveChat,
  setChatModels,
  setCurrentChatModel,
  setSidebarCollapsed,
} = gptSlice.actions;

export default gptSlice.reducer;
