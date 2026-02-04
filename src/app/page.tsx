import Image from "next/image";

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "用户管理",
    description: "批量添加抖音创作者，一键刷新获取最新内容",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
    title: "批量下载",
    description: "高速并发下载，支持断点续传",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "AI 智能分析",
    description: "Grok Vision 驱动，自动生成标签和摘要",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
      </svg>
    ),
    title: "智能过滤",
    description: "多维度搜索筛选，快速定位视频",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: "本地存储",
    description: "SQLite 数据库，数据完全掌控",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    title: "桌面体验",
    description: "系统托盘常驻，随时唤起",
    color: "from-rose-500 to-pink-500",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafaf9] text-[#0c0a09] overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="gradient-orb gradient-orb-1" />
        <div className="gradient-orb gradient-orb-2" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 cursor-pointer group">
            <Image
              src="/icon.png"
              alt="dYm"
              width={36}
              height={36}
              className="rounded-xl shadow-lg group-hover:scale-105 transition-transform"
            />
            <span className="font-semibold text-lg">dYm</span>
          </a>
          <div className="flex items-center gap-8">
            <a href="#features" className="text-sm text-[#0c0a09]/70 hover:text-[#0c0a09] transition-colors cursor-pointer">
              功能
            </a>
            <a href="#download" className="text-sm text-[#0c0a09]/70 hover:text-[#0c0a09] transition-colors cursor-pointer">
              下载
            </a>
            <a
              href="https://github.com/Everless321/dYm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#0c0a09]/70 hover:text-[#0c0a09] transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-8 px-6 hero-gradient min-h-[90vh] flex flex-col justify-center">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-black/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-[#0c0a09]/80">v1.1.7 已发布</span>
          </div>

          {/* Main Title */}
          <h1 className="animate-fade-in-up animation-delay-100 text-6xl sm:text-8xl font-bold tracking-tight mb-6">
            <span className="text-gradient">dYm</span>
          </h1>

          <p className="animate-fade-in-up animation-delay-200 text-2xl sm:text-4xl font-medium text-[#0c0a09]/80 mb-4">
            抖音视频下载与智能分析
          </p>

          <p className="animate-fade-in-up animation-delay-300 text-lg text-[#0c0a09]/60 max-w-2xl mx-auto mb-10">
            一款功能强大的桌面应用，集视频批量下载、AI 智能分析、本地管理于一体
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#download"
              className="btn-glow px-8 py-4 rounded-2xl font-semibold text-lg inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              免费下载
            </a>
            <a
              href="https://github.com/Everless321/dYm"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card px-8 py-4 rounded-2xl font-semibold text-lg inline-flex items-center justify-center gap-2 cursor-pointer text-[#0c0a09]"
            >
              查看源码
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>

          {/* Download Cards */}
          <div id="download" className="animate-fade-in-up animation-delay-500 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {/* macOS */}
            <a
              href="https://ghfast.top/https://github.com/Everless321/dYm/releases/download/v1.1.7/dym-1.1.7.dmg"
              className="download-card p-6 cursor-pointer group"
            >
              <svg className="w-10 h-10 mx-auto mb-3 text-[#0c0a09] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <h3 className="font-semibold text-[#0c0a09] mb-1">macOS</h3>
              <p className="text-xs text-[#0c0a09]/60 mb-3">Intel & Apple Silicon</p>
              <span className="inline-block w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl text-sm font-medium">
                下载 .dmg
              </span>
            </a>

            {/* Windows */}
            <a
              href="https://ghfast.top/https://github.com/Everless321/dYm/releases/download/v1.1.7/dym-1.1.7-setup.exe"
              className="download-card p-6 cursor-pointer group"
            >
              <svg className="w-10 h-10 mx-auto mb-3 text-[#0c0a09] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 12V6.75l6-1.32v6.48L3 12zm17-9v8.75l-10 .15V5.21L20 3zM3 13l6 .09v6.81l-6-1.15V13zm17 .25V22l-10-1.91V13.1l10 .15z"/>
              </svg>
              <h3 className="font-semibold text-[#0c0a09] mb-1">Windows</h3>
              <p className="text-xs text-[#0c0a09]/60 mb-3">Windows 10+</p>
              <span className="inline-block w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl text-sm font-medium">
                下载 .exe
              </span>
            </a>

            {/* Linux */}
            <a
              href="https://ghfast.top/https://github.com/Everless321/dYm/releases/download/v1.1.7/dym-1.1.7.AppImage"
              className="download-card p-6 cursor-pointer group"
            >
              <svg className="w-10 h-10 mx-auto mb-3 text-[#0c0a09] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139z"/>
              </svg>
              <h3 className="font-semibold text-[#0c0a09] mb-1">Linux</h3>
              <p className="text-xs text-[#0c0a09]/60 mb-3">AppImage</p>
              <span className="inline-block w-full py-2 px-4 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-xl text-sm font-medium">
                下载 AppImage
              </span>
            </a>
          </div>

          <p className="animate-fade-in-up animation-delay-500 mt-6 text-sm text-[#0c0a09]/50">
            使用加速镜像下载 ·{" "}
            <a href="https://github.com/Everless321/dYm/releases/latest" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0071e3]">
              GitHub 原始下载
            </a>
          </p>
        </div>
      </section>

      {/* Screenshot Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="screenshot-premium overflow-hidden">
            <Image
              src="/screenshot.png"
              alt="dYm 应用截图"
              width={1920}
              height={1200}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-6xl font-bold text-[#0c0a09] mb-6 tracking-tight">
              强大功能
            </h2>
            <p className="text-xl text-[#0c0a09]/60 max-w-2xl mx-auto">
              专为抖音内容管理而设计，提供完整的下载、分析、管理解决方案
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card-premium p-8 cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-5 shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#0c0a09] mb-2">{feature.title}</h3>
                <p className="text-[#0c0a09]/60 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-[#0c0a09]/50 mb-6 uppercase tracking-widest">技术栈</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Electron", "React", "TypeScript", "Tailwind CSS", "SQLite", "FFmpeg"].map((tech) => (
              <span
                key={tech}
                className="glass-card px-5 py-2.5 rounded-full text-sm font-medium text-[#0c0a09]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 hero-gradient relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0c0a09] mb-6">
            开始使用 dYm
          </h2>
          <p className="text-xl text-[#0c0a09]/60 mb-8">
            开源免费，立即下载体验
          </p>
          <a
            href="#download"
            className="btn-glow px-10 py-5 rounded-2xl font-semibold text-lg inline-flex items-center gap-3 cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            立即下载
          </a>
          <p className="mt-6 text-sm text-[#0c0a09]/50">
            macOS 首次运行: <code className="bg-white/50 px-2 py-1 rounded text-xs">sudo xattr -cr /Applications/dYm.app/</code>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-black/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/icon.png"
                alt="dYm"
                width={24}
                height={24}
                className="rounded-lg"
              />
              <span className="text-sm text-[#0c0a09]/50">dYm - Douyin Video Manager</span>
            </div>

            <div className="flex items-center gap-8 text-sm text-[#0c0a09]/50">
              <a href="https://github.com/Everless321/dYm" target="_blank" rel="noopener noreferrer" className="hover:text-[#0c0a09] transition-colors cursor-pointer">
                GitHub
              </a>
              <a href="https://github.com/Everless321/dYm/releases" target="_blank" rel="noopener noreferrer" className="hover:text-[#0c0a09] transition-colors cursor-pointer">
                Releases
              </a>
              <a href="https://github.com/Everless321/dYm/issues" target="_blank" rel="noopener noreferrer" className="hover:text-[#0c0a09] transition-colors cursor-pointer">
                Issues
              </a>
            </div>

            <p className="text-sm text-[#0c0a09]/50">
              MIT License
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
