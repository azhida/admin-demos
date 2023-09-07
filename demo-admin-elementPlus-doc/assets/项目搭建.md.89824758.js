import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.772c9e38.js";const m=JSON.parse('{"title":"项目搭建","description":"","frontmatter":{},"headers":[],"relativePath":"项目搭建.md","filePath":"项目搭建.md"}'),p={name:"项目搭建.md"},e=l(`<h1 id="项目搭建" tabindex="-1">项目搭建 <a class="header-anchor" href="#项目搭建" aria-label="Permalink to &quot;项目搭建&quot;">​</a></h1><h2 id="初始化项目" tabindex="-1">初始化项目 <a class="header-anchor" href="#初始化项目" aria-label="Permalink to &quot;初始化项目&quot;">​</a></h2><ul><li>创建项目</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 创建项目</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vite@latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ? Project name: demo-admin-elementPlus</span></span>
<span class="line"><span style="color:#6A737D;"># ? Package name: » demo-admin-elementplus</span></span>
<span class="line"><span style="color:#6A737D;"># ? Select a framework: Vue</span></span>
<span class="line"><span style="color:#6A737D;"># ? Select a variant: Customize with create-vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ? Package name: » demo-admin-elementplus</span></span>
<span class="line"><span style="color:#6A737D;"># ? Add TypeScript? » No / Yes 选择 Yes</span></span>
<span class="line"><span style="color:#6A737D;"># ? Add JSX Support? » No / Yes 选择 No</span></span>
<span class="line"><span style="color:#6A737D;"># ? Add Vue Router for Single Page Application development? » No / Yes 选择 Yes</span></span>
<span class="line"><span style="color:#6A737D;"># ? Add Pinia for state management? » No / Yes 选择 Yes</span></span>
<span class="line"><span style="color:#6A737D;"># ? Add Vitest for Unit Testing? » No / Yes 选择 No</span></span>
<span class="line"><span style="color:#6A737D;"># ? Add an End-to-End Testing Solution?  选择 No</span></span>
<span class="line"><span style="color:#6A737D;"># ? Add ESLint for code quality? » No / Yes  选择 No</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">demo-admin-elementPlus</span></span>
<span class="line"><span style="color:#6A737D;"># 安装依赖</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span></span>
<span class="line"><span style="color:#6A737D;"># 运行</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 创建项目</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vite@latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ? Project name: demo-admin-elementPlus</span></span>
<span class="line"><span style="color:#6A737D;"># ? Package name: » demo-admin-elementplus</span></span>
<span class="line"><span style="color:#6A737D;"># ? Select a framework: Vue</span></span>
<span class="line"><span style="color:#6A737D;"># ? Select a variant: Customize with create-vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ? Package name: » demo-admin-elementplus</span></span>
<span class="line"><span style="color:#6A737D;"># ? Add TypeScript? » No / Yes 选择 Yes</span></span>
<span class="line"><span style="color:#6A737D;"># ? Add JSX Support? » No / Yes 选择 No</span></span>
<span class="line"><span style="color:#6A737D;"># ? Add Vue Router for Single Page Application development? » No / Yes 选择 Yes</span></span>
<span class="line"><span style="color:#6A737D;"># ? Add Pinia for state management? » No / Yes 选择 Yes</span></span>
<span class="line"><span style="color:#6A737D;"># ? Add Vitest for Unit Testing? » No / Yes 选择 No</span></span>
<span class="line"><span style="color:#6A737D;"># ? Add an End-to-End Testing Solution?  选择 No</span></span>
<span class="line"><span style="color:#6A737D;"># ? Add ESLint for code quality? » No / Yes  选择 No</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">demo-admin-elementPlus</span></span>
<span class="line"><span style="color:#6A737D;"># 安装依赖</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span></span>
<span class="line"><span style="color:#6A737D;"># 运行</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dev</span></span></code></pre></div><h2 id="安装-element-plus" tabindex="-1">安装 element-plus <a class="header-anchor" href="#安装-element-plus" aria-label="Permalink to &quot;安装 element-plus&quot;">​</a></h2><p><a href="https://element-plus.org/zh-CN/guide/quickstart.html" target="_blank" rel="noreferrer">element-plus 安装文档</a></p><h3 id="安装依赖包" tabindex="-1">安装依赖包 <a class="header-anchor" href="#安装依赖包" aria-label="Permalink to &quot;安装依赖包&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">element-plus</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 按需导入</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unplugin-vue-components</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unplugin-auto-import</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">element-plus</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 按需导入</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unplugin-vue-components</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unplugin-auto-import</span></span></code></pre></div><h3 id="配置-vite-config-ts" tabindex="-1">配置 <code>/vite.config.ts</code> <a class="header-anchor" href="#配置-vite-config-ts" aria-label="Permalink to &quot;配置 \`/vite.config.ts\`&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 新增</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> AutoImport </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;unplugin-auto-import/vite&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Components </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;unplugin-vue-components/vite&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ElementPlusResolver } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;unplugin-vue-components/resolvers&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 新增</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">AutoImport</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      resolvers: [</span><span style="color:#B392F0;">ElementPlusResolver</span><span style="color:#E1E4E8;">()],</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">Components</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      resolvers: [</span><span style="color:#B392F0;">ElementPlusResolver</span><span style="color:#E1E4E8;">()],</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 新增</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> AutoImport </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;unplugin-auto-import/vite&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Components </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;unplugin-vue-components/vite&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ElementPlusResolver } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;unplugin-vue-components/resolvers&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 新增</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">AutoImport</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      resolvers: [</span><span style="color:#6F42C1;">ElementPlusResolver</span><span style="color:#24292E;">()],</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">Components</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      resolvers: [</span><span style="color:#6F42C1;">ElementPlusResolver</span><span style="color:#24292E;">()],</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="修改-gitignore" tabindex="-1">修改 <code>.gitignore</code> <a class="header-anchor" href="#修改-gitignore" aria-label="Permalink to &quot;修改 \`.gitignore\`&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># ...</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 新增</span></span>
<span class="line"><span style="color:#e1e4e8;">auto-imports.d.ts</span></span>
<span class="line"><span style="color:#e1e4e8;">components.d.ts</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># ...</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 新增</span></span>
<span class="line"><span style="color:#24292e;">auto-imports.d.ts</span></span>
<span class="line"><span style="color:#24292e;">components.d.ts</span></span></code></pre></div><p><code>unplugin-vue-components</code> 和 <code>unplugin-auto-import</code> 会动态生成 <code>auto-imports.d.ts</code> 和 <code>components.d.ts</code> 两个文件，无需提交，避免多人协同开发代码冲突。</p><h3 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h3><ul><li>添加路由 <code>src/router/index.ts</code></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">router</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createRouter</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">  routes: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&#39;/button&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;button&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;../views/button.vue&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> router</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">router</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createRouter</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">  routes: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&#39;/button&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;button&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;../views/button.vue&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> router</span></span></code></pre></div><ul><li>新增 <code>src/views/button.vue</code></li></ul><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;">&gt;我是 ElButton&lt;/</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;">&gt;我是 ElButton&lt;/</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><ul><li>访问路由 <code>/button</code> 看效果</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 启动项目</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ➜  Local:   http://127.0.0.1:5173/admin-demos/demo-admin-elementPlus</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 启动项目</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ➜  Local:   http://127.0.0.1:5173/admin-demos/demo-admin-elementPlus</span></span></code></pre></div><p>浏览器访问地址就可以看到一个按钮的效果了：</p><p><a href="http://127.0.0.1:5173/admin-demos/demo-admin-elementPlus/button" target="_blank" rel="noreferrer">http://127.0.0.1:5173/admin-demos/demo-admin-elementPlus/button</a></p>`,22),o=[e];function t(c,r,i,y,E,d){return n(),a("div",null,o)}const g=s(p,[["render",t]]);export{m as __pageData,g as default};
