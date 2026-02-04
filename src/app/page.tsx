import Image from "next/image";

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "用户管理",
    description: "批量添加抖音创作者，一键刷新获取最新视频内容",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
    title: "批量下载",
    description: "高速并发下载，支持数量限制和断点续传",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "AI 智能分析",
    description: "Grok Vision API 驱动，自动生成标签和内容摘要",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
      </svg>
    ),
    title: "智能过滤",
    description: "多维度搜索筛选，按创作者、标签、评分快速定位",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: "本地存储",
    description: "SQLite 数据库，离线访问，数据完全掌控在你手中",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    title: "桌面体验",
    description: "原生桌面应用，系统托盘常驻，随时唤起使用",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#1d1d1f]">
      {/* Navigation - Apple style */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200/50">
        <div className="max-w-[980px] mx-auto px-6 h-12 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/icon.png"
              alt="dYm"
              width={28}
              height={28}
              className="rounded-md"
            />
            <span className="font-semibold text-[#1d1d1f]">dYm</span>
          </a>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-xs text-[#1d1d1f] hover:text-[#0071e3] transition-colors cursor-pointer">
              功能
            </a>
            <a href="#download" className="text-xs text-[#1d1d1f] hover:text-[#0071e3] transition-colors cursor-pointer">
              下载
            </a>
            <a
              href="https://github.com/Everless321/dYm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#1d1d1f] hover:text-[#0071e3] transition-colors cursor-pointer"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Apple style */}
      <section className="pt-28 pb-12 px-6">
        <div className="max-w-[980px] mx-auto text-center">
          <div className="opacity-0 animate-fade-in-up">
            <Image
              src="/icon.png"
              alt="dYm"
              width={80}
              height={80}
              className="mx-auto mb-6 rounded-2xl shadow-lg"
            />
          </div>

          <h1 className="opacity-0 animate-fade-in-up animation-delay-100 text-5xl sm:text-6xl font-semibold tracking-tight text-[#1d1d1f] mb-2">
            dYm
          </h1>

          <p className="opacity-0 animate-fade-in-up animation-delay-200 text-2xl sm:text-3xl text-[#86868b] font-medium mb-4">
            抖音视频下载与智能分析
          </p>

          <p className="opacity-0 animate-fade-in-up animation-delay-300 text-lg text-[#86868b] max-w-xl mx-auto mb-8">
            集视频批量下载、AI 智能分析、本地管理于一体的桌面应用
          </p>

          <div className="opacity-0 animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/Everless321/dYm/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-7 py-3 rounded-full font-medium inline-flex items-center justify-center gap-2 cursor-pointer"
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
              className="btn-secondary px-7 py-3 rounded-full font-medium inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              了解更多
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Screenshot Section */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="screenshot-shadow overflow-hidden bg-[#f5f5f7] rounded-2xl">
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

      {/* Features Section - Apple Style Large Cards */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              强大功能
            </h2>
            <p className="text-xl sm:text-2xl text-[#86868b] max-w-2xl mx-auto">
              专为抖音内容管理而设计，提供完整的下载、分析、管理解决方案
            </p>
          </div>

          {/* Large Feature Cards - 2 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* 用户管理 - Large Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#f5f5f7] to-[#e8e8ed] p-10 min-h-[320px] cursor-pointer transition-all duration-300 hover:shadow-2xl">
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#0071e3] flex items-center justify-center text-white mb-6 shadow-lg">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#1d1d1f] mb-3">用户管理</h3>
                <p className="text-lg text-[#86868b] leading-relaxed max-w-sm">
                  批量添加抖音创作者，一键刷新获取最新视频内容，轻松管理你关注的所有账号
                </p>
              </div>
              <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-[#0071e3]/5 rounded-full transition-transform duration-500 group-hover:scale-150" />
            </div>

            {/* 批量下载 - Large Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#f5f5f7] to-[#e8e8ed] p-10 min-h-[320px] cursor-pointer transition-all duration-300 hover:shadow-2xl">
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#34c759] flex items-center justify-center text-white mb-6 shadow-lg">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#1d1d1f] mb-3">批量下载</h3>
                <p className="text-lg text-[#86868b] leading-relaxed max-w-sm">
                  高速并发下载，支持数量限制和断点续传，一次下载成百上千个视频
                </p>
              </div>
              <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-[#34c759]/5 rounded-full transition-transform duration-500 group-hover:scale-150" />
            </div>
          </div>

          {/* AI Feature - Full Width */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#f5f5f7] to-[#e8e8ed] p-10 sm:p-14 min-h-[280px] cursor-pointer transition-all duration-300 hover:shadow-2xl mb-6">
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#af52de] to-[#5856d6] flex items-center justify-center text-white shadow-lg flex-shrink-0">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-semibold text-[#1d1d1f] mb-4">AI 智能分析</h3>
                <p className="text-lg sm:text-xl text-[#86868b] leading-relaxed max-w-2xl">
                  Grok Vision API 驱动，自动识别视频内容，智能生成标签、分类和内容摘要，让你的视频库井井有条
                </p>
              </div>
            </div>
            <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-[#af52de]/5 rounded-full transition-transform duration-500 group-hover:scale-150" />
          </div>

          {/* Bottom 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* 智能过滤 */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#f5f5f7] to-[#e8e8ed] p-8 min-h-[240px] cursor-pointer transition-all duration-300 hover:shadow-xl">
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-[#ff9500] flex items-center justify-center text-white mb-5 shadow-lg">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">智能过滤</h3>
                <p className="text-[#86868b] leading-relaxed">
                  多维度搜索筛选，按创作者、标签、评分快速定位目标视频
                </p>
              </div>
            </div>

            {/* 本地存储 */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#f5f5f7] to-[#e8e8ed] p-8 min-h-[240px] cursor-pointer transition-all duration-300 hover:shadow-xl">
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-[#30b0c7] flex items-center justify-center text-white mb-5 shadow-lg">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">本地存储</h3>
                <p className="text-[#86868b] leading-relaxed">
                  SQLite 数据库，离线访问，数据完全掌控在你手中
                </p>
              </div>
            </div>

            {/* 桌面体验 */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#f5f5f7] to-[#e8e8ed] p-8 min-h-[240px] cursor-pointer transition-all duration-300 hover:shadow-xl">
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-[#ff2d55] flex items-center justify-center text-white mb-5 shadow-lg">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">桌面体验</h3>
                <p className="text-[#86868b] leading-relaxed">
                  原生桌面应用，系统托盘常驻，随时唤起使用
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-6">
        <div className="max-w-[980px] mx-auto text-center">
          <p className="text-sm text-[#86868b] mb-6 uppercase tracking-wider">技术栈</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Electron", "React", "TypeScript", "Tailwind CSS", "SQLite", "FFmpeg"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-[#f5f5f7] text-sm text-[#1d1d1f] font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Support Section */}
      <section className="py-16 px-6 bg-[#fbfbfd]">
        <div className="max-w-[980px] mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4">跨平台支持</h2>
          <p className="text-[#86868b] mb-12">支持主流桌面操作系统</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {/* macOS */}
            <div className="p-6 rounded-2xl bg-white cursor-pointer hover:shadow-lg transition-shadow">
              <svg className="w-10 h-10 mx-auto mb-3 text-[#1d1d1f]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <h3 className="font-semibold text-[#1d1d1f] mb-1">macOS</h3>
              <p className="text-sm text-[#86868b]">Intel & Apple Silicon</p>
            </div>

            {/* Windows */}
            <div className="p-6 rounded-2xl bg-white cursor-pointer hover:shadow-lg transition-shadow">
              <svg className="w-10 h-10 mx-auto mb-3 text-[#1d1d1f]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 12V6.75l6-1.32v6.48L3 12zm17-9v8.75l-10 .15V5.21L20 3zM3 13l6 .09v6.81l-6-1.15V13zm17 .25V22l-10-1.91V13.1l10 .15z"/>
              </svg>
              <h3 className="font-semibold text-[#1d1d1f] mb-1">Windows</h3>
              <p className="text-sm text-[#86868b]">Windows 10+</p>
            </div>

            {/* Linux */}
            <div className="p-6 rounded-2xl bg-white cursor-pointer hover:shadow-lg transition-shadow">
              <svg className="w-10 h-10 mx-auto mb-3 text-[#1d1d1f]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.002c-.06-.135-.12-.2-.12-.2.193.266.32.466.32.734-.14.066-.339.135-.539.135-.3.135-.6.266-.899.401v.003l-.003.003c.823-.07 1.39-.201 1.89-.4-.3.3-.39.534-.39.668v.131c-.135.135-.405.2-.676.265-.27.066-.54.133-.879.2-.443.066-.787.137-.91.2l-.063-.003h-.01c.47-.067 1.111-.2 1.712-.4.27-.135.405-.2.405-.333v-.066c0-.066-.135-.133-.467-.133-.47 0-1.477.066-1.812.066-.3 0-.665-.065-.996-.137-.3-.066-.676-.133-.939-.067-.073.031-.18.065-.27.133-.085.068-.16.135-.174.199-.159.066-.133.4-.133.467l-.001.003c-.027.8-.09 1.277-.263 1.612-.17.334-.5.54-1.012.602-.383.065-.746-.068-1.03-.399-.285-.334-.5-.8-.64-1.267a6.007 6.007 0 01-.2-1.269v-.066c-.134.668-.398 1.134-.796 1.468-.466.399-1.1.535-1.846.335-.39-.135-.655-.334-.795-.602-.14-.2-.197-.466-.197-.8 0-.27.04-.534.122-.8.034-.134.068-.2.102-.333l-.244.332c-.334.466-.673.867-1.1 1.2-.422.333-.893.533-1.493.533-.46 0-.866-.133-1.163-.465-.298-.334-.465-.8-.465-1.402 0-.135.005-.27.023-.401a3.91 3.91 0 01.099-.532v-.006c.079-.402.191-.869.328-1.333.138-.467.318-.934.498-1.401l.003.003c.18-.469.266-.869.233-1.2-.033-.332-.166-.598-.466-.864-.134-.134-.27-.2-.405-.2s-.27.066-.404.2c.405-1.2 1.113-2.003 1.915-2.537.8-.533 1.7-.8 2.597-.866.896-.068 1.792.066 2.588.332.797.267 1.497.668 2.093 1.135.466-.534.845-1.2 1.012-2.002.167-.8.133-1.737-.167-2.803v.002zm-8.425 3.07c-.473 0-.86.132-1.085.399-.228.265-.326.6-.326.999 0 .135.008.27.02.399.012.137.022.27.037.4l-.003-.003c.036.2.086.396.15.593.066.2.156.4.257.599.102.2.22.398.358.598.134.2.289.399.463.6v-.003l.002.003c.209.268.396.533.478.866.08.336.04.734-.224 1.27-.268.533-.5.8-.665 1.002-.165.2-.22.335-.11.467.098.135.356.2.687.134l.002-.002c.332-.066.734-.265 1.1-.732.365-.467.699-.869.93-1.403.234-.533.337-1.132.164-1.67-.174-.533-.496-1-.93-1.467l-.002-.003c-.402-.467-.735-.93-.903-1.533-.164-.601-.13-1.335.236-2.202-.109.003-.189.065-.28.065zm.991.135c-.2.066-.466.267-.6.466l-.003.003c-.066.133-.145.265-.145.467 0 .133.1.199.233.199.134 0 .267-.135.4-.333.133-.2.256-.333.233-.533 0-.066-.033-.134-.118-.269z"/>
              </svg>
              <h3 className="font-semibold text-[#1d1d1f] mb-1">Linux</h3>
              <p className="text-sm text-[#86868b]">AppImage</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-20 px-6">
        <div className="max-w-[980px] mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#1d1d1f] mb-4">
            开始使用 dYm
          </h2>
          <p className="text-xl text-[#86868b] mb-8">
            开源免费，立即下载体验
          </p>
          <a
            href="https://github.com/Everless321/dYm/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-4 rounded-full font-medium text-lg inline-flex items-center gap-2 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            下载最新版本
          </a>
          <p className="mt-4 text-sm text-[#86868b]">
            macOS 用户首次运行请执行: <code className="bg-[#f5f5f7] px-2 py-1 rounded text-xs">sudo xattr -cr /Applications/dYm.app/</code>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200/50 bg-[#f5f5f7]">
        <div className="max-w-[980px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/icon.png"
                alt="dYm"
                width={20}
                height={20}
                className="rounded"
              />
              <span className="text-xs text-[#86868b]">dYm - Douyin Video Manager</span>
            </div>

            <div className="flex items-center gap-6 text-xs text-[#86868b]">
              <a
                href="https://github.com/Everless321/dYm"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1d1d1f] transition-colors cursor-pointer"
              >
                GitHub
              </a>
              <a
                href="https://github.com/Everless321/dYm/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1d1d1f] transition-colors cursor-pointer"
              >
                Releases
              </a>
              <a
                href="https://github.com/Everless321/dYm/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1d1d1f] transition-colors cursor-pointer"
              >
                Issues
              </a>
            </div>

            <p className="text-xs text-[#86868b]">
              MIT License
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
