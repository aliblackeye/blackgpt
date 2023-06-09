// Types

type Sender =  string;

type Message = {
  id: string;
  content: string;
  sender: Sender;
  sort: string;
};

type Chat = {
  modelId: string;
  id: string;
  name: string;
};

type ChatContent = {
  modelId: string | null;
  chatId: string | null;
  content: Message[] | [];
};

interface ChatModel {
  modelId: string | null;
  name: string | null;
  chatList: Chat[] | [];
}

type GptType = {
  chatModels: ChatModel[];
  currentChatModel: ChatModel | null;
  activeChat: ChatContent;
  sidebarCollapsed: boolean;
};

export type { GptType, ChatModel };
