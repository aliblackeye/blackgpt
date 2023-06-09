"use client";

// Store
import { store } from "@/store";
import { Provider as StoreProvider } from "react-redux";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StoreProvider store={store}>{children}</StoreProvider>;
}
