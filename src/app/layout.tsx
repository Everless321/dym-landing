import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "dYm - 抖音视频下载与智能分析管理工具",
  description: "一款功能强大的桌面应用，集视频下载、AI智能分析、本地管理于一体",
  keywords: ["抖音", "视频下载", "AI分析", "Douyin", "视频管理"],
  authors: [{ name: "Everless" }],
  openGraph: {
    title: "dYm - 抖音视频下载与智能分析管理工具",
    description: "一款功能强大的桌面应用，集视频下载、AI智能分析、本地管理于一体",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
