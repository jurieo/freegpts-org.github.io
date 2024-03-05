import{_ as e,r as t,o as c,c as p,a as s,b as n,d as o,e as i}from"./app-MzzXINbY.js";const l={},r=s("h1",{id:"反代教程",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#反代教程","aria-hidden":"true"},"#"),n(" 反代教程")],-1),d={href:"https://chat.freegpts.org/",target:"_blank",rel:"noopener noreferrer"},u=i(`<p>你也可以通过反代的方式绑定自己的域名使用, 以下是反代教程.</p><p>以下教程中, 你需要将 <code>chat.xxx.com</code> 替换为你自己的域名.</p><h2 id="caddy" tabindex="-1"><a class="header-anchor" href="#caddy" aria-hidden="true">#</a> Caddy</h2><div class="language-caddyfile line-numbers-mode" data-ext="caddyfile"><pre class="language-caddyfile"><code>chat.xxx.com {
	reverse_proxy https://chat.freegpts.org {
		header_up Host chat.freegpts.org
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cloudflare-workers" tabindex="-1"><a class="header-anchor" href="#cloudflare-workers" aria-hidden="true">#</a> Cloudflare Workers</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> hostname <span class="token operator">=</span> <span class="token string">&quot;https://chat.freegpts.org&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">handleRequest</span><span class="token punctuation">(</span><span class="token parameter">request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Request</span><span class="token punctuation">(</span>hostname <span class="token operator">+</span> url<span class="token punctuation">.</span>pathname<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;fetch&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  event<span class="token punctuation">.</span><span class="token function">respondWith</span><span class="token punctuation">(</span><span class="token function">handleRequest</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx-未测试" tabindex="-1"><a class="header-anchor" href="#nginx-未测试" aria-hidden="true">#</a> Nginx(未测试)</h2><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> chat.xxx.com</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> https://chat.freegpts.org</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Host chat.freegpts.org</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_buffering</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_ssl_server_name</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="apache-未测试" tabindex="-1"><a class="header-anchor" href="#apache-未测试" aria-hidden="true">#</a> Apache(未测试)</h2><div class="language-apache line-numbers-mode" data-ext="apache"><pre class="language-apache"><code>&lt;VirtualHost *:80&gt;
    ServerName chat.xxx.com
    ProxyPass / https://chat.freegpts.org/
    ProxyPassReverse / https://chat.freegpts.org/
    ProxyPreserveHost On
&lt;/VirtualHost&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function v(k,h){const a=t("ExternalLinkIcon");return c(),p("div",null,[r,s("p",null,[n("我们提供了公共镜像站,地址为 "),s("a",d,[n("https://chat.freegpts.org/"),o(a)]),n(", 你可以直接使用.")]),u])}const b=e(l,[["render",v],["__file","index.html.vue"]]);export{b as default};
