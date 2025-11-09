// 1ページの表示件数
export const LIMIT = 10;

export const NOT_FOUND_IMAGE_URL = '/Image-not-found.jpg';

export const DUMMY_ARTICLES_DATA = {
  contents: [
    {
      id: 'c80nihlx27ss',
      createdAt: '2024-10-23T00:56:43.848Z',
      updatedAt: '2025-10-24T12:36:37.747Z',
      publishedAt: '2024-10-23T00:56:43.848Z',
      revisedAt: '2025-10-24T12:36:37.747Z',
      eyecatch: {
        url: 'https://images.microcms-assets.io/assets/202bc129280e4d1e86d2dcbf716d01f5/014b9eea52334c5da4314282d63145a0/blog-template.png',
        height: 630,
        width: 1200,
      },
      title: '（サンプル）まずはこの記事を開きましょう7 test Python',
      tags: [
        {
          id: 'react',
          createdAt: '2024-10-23T00:46:54.985Z',
          updatedAt: '2024-10-23T01:08:11.334Z',
          publishedAt: '2024-10-23T00:46:54.985Z',
          revisedAt: '2024-10-23T01:07:58.568Z',
          name: 'React.js',
        },
        {
          id: 'next',
          createdAt: '2024-10-23T00:46:54.975Z',
          updatedAt: '2024-10-23T01:08:35.505Z',
          publishedAt: '2024-10-23T00:46:54.975Z',
          revisedAt: '2024-10-23T01:08:35.505Z',
          name: 'Next.js',
        },
        {
          id: 'express',
          createdAt: '2024-10-23T00:46:54.918Z',
          updatedAt: '2024-10-23T01:08:57.471Z',
          publishedAt: '2024-10-23T00:46:54.918Z',
          revisedAt: '2024-10-23T01:08:50.191Z',
          name: 'Express.js',
        },
      ],
      content:
        '<h2 id="hdb41525ba7">ブログテンプレートから作成されました🎉</h2><p>ブログテンプレートからAPIを作成しました。<br>おつかれさまでした🎉</p><h2 id="hf45076424a">APIプレビューを試そう🚀</h2><p>最初に「APIプレビュー」をしてみましょう。</p><p>入稿したコンテンツはAPI経由で取得し、Viewに繋ぎ込みます。<br>APIプレビューでは実際のAPIレスポンスを確認でき、あなたの開発を加速させます。</p><p>👇まずはここをクリックします。</p><figure><img src="https://images.microcms-assets.io/assets/202bc129280e4d1e86d2dcbf716d01f5/70b303eef720476b888139f0fb276a92/blog-template-description1.png" alt="" width="2490" height="1652"></figure><p>APIプレビュー画面が開いたら、<strong>「取得」</strong>ボタンでリクエストを試してみましょう。</p><figure><img src="https://images.microcms-assets.io/assets/202bc129280e4d1e86d2dcbf716d01f5/53b996aa0cca48518f765e1d41b0abc5/blog-template-description2.png" alt="" width="2492" height="1648"></figure><p>この記事の内容がAPIで取得できていることがわかります。</p><figure><img src="https://images.microcms-assets.io/assets/202bc129280e4d1e86d2dcbf716d01f5/cb89a53ce1ef47d68faee648d9c03933/blog-template-description3.png" alt="" width="1592" height="1246"></figure><h2 id="h88398f2fb7">次にやること🏃</h2><p>APIプレビューで確認したレスポンスを参考に、あなた自身のWebサイトを構築しましょう。<br>microCMSはAPIでコンテンツを取得するため、お好きな言語・フレームワークで画面を構築できます。</p><ul><li><a href="https://document.microcms.io/tutorial/javascript/javascript-top" target="_blank" rel="noopener noreferrer nofollow"><u>JavaScript SDK</u></a></li><li><a href="https://document.microcms.io/tutorial/nuxt/nuxt-top" target="_blank" rel="noopener noreferrer nofollow"><u>Nuxt SDK</u></a></li><li><a href="https://document.microcms.io/tutorial/gatsby/gatsby-top" target="_blank" rel="noopener noreferrer nofollow"><u>Gatsby SDK</u></a></li></ul><p>その他に<a href="https://microcms.io/features/sdk" target="_blank" rel="noopener noreferrer nofollow"><u>サーバーサイドSDK（PHP / Go / Ruby）やモバイルSDK（iOS / Android）</u></a>もございます。</p><p>お困りなことや疑問点などございましたらお気軽にご連絡ください。<br>サポート窓口：<a href="mailto:support@microcms.io">support@microcms.io</a><br>よくある質問：<a href="https://help.microcms.io/ja/knowledge">https://help.microcms.io/ja/knowledge</a></p><div data-filename="index.ts"><pre><code class="language-typescript">import ts from &quot;typescript&quot;;\n\n// このディレクトリの tsconfig.json を元に config や解析対象のファイルをロードする\nconst tsconfig = ts.readConfigFile(&quot;./tsconfig.json&quot;, ts.sys.readFile);\nconst options = ts.parseJsonConfigFileContent(tsconfig.config, ts.sys, &quot;./&quot;);\n\n// Compiler Host を取得\nconst host = ts.createCompilerHost(options.options);\nconst program = ts.createProgram(options.fileNames, options.options, host);\n\n// 型の解析結果を取得\nfor (const diagnostic of program.getSemanticDiagnostics()) {\n  console.log(\n    &quot;[semantic diagnostics]&quot;,\n    diagnostic.file?.fileName.replace(process.cwd(), &quot;&quot;),\n    `#${diagnostic.start}:${diagnostic.length}`,\n    &quot;-&quot;,\n    diagnostic.messageText,\n    indexSourceFile.getLineAndCharacterOfPosition(diagnostic.start!),\n  );\n}</code></pre></div>',
    },
    {
      id: 'r01z_fyd7',
      createdAt: '2024-10-23T00:56:28.336Z',
      updatedAt: '2024-10-23T01:09:37.924Z',
      publishedAt: '2024-10-23T00:56:28.336Z',
      revisedAt: '2024-10-23T01:09:37.924Z',
      eyecatch: {
        url: 'https://images.microcms-assets.io/assets/202bc129280e4d1e86d2dcbf716d01f5/014b9eea52334c5da4314282d63145a0/blog-template.png',
        height: 630,
        width: 1200,
      },
      title: '（サンプル）まずはこの記事を開きましょう6',
      tags: [
        {
          id: 'next',
          createdAt: '2024-10-23T00:46:54.975Z',
          updatedAt: '2024-10-23T01:08:35.505Z',
          publishedAt: '2024-10-23T00:46:54.975Z',
          revisedAt: '2024-10-23T01:08:35.505Z',
          name: 'Next.js',
        },
      ],
      content:
        '<h2 id="hdb41525ba7">ブログテンプレートから作成されました🎉</h2><p>ブログテンプレートからAPIを作成しました。<br>おつかれさまでした🎉</p><h2 id="hf45076424a">APIプレビューを試そう🚀</h2><p>最初に「APIプレビュー」をしてみましょう。</p><p>入稿したコンテンツはAPI経由で取得し、Viewに繋ぎ込みます。<br>APIプレビューでは実際のAPIレスポンスを確認でき、あなたの開発を加速させます。</p><p>👇まずはここをクリックします。</p><figure><img src="https://images.microcms-assets.io/assets/202bc129280e4d1e86d2dcbf716d01f5/70b303eef720476b888139f0fb276a92/blog-template-description1.png" alt="" width="2490" height="1652"></figure><p>APIプレビュー画面が開いたら、<strong>「取得」</strong>ボタンでリクエストを試してみましょう。</p><figure><img src="https://images.microcms-assets.io/assets/202bc129280e4d1e86d2dcbf716d01f5/53b996aa0cca48518f765e1d41b0abc5/blog-template-description2.png" alt="" width="2492" height="1648"></figure><p>この記事の内容がAPIで取得できていることがわかります。</p><figure><img src="https://images.microcms-assets.io/assets/202bc129280e4d1e86d2dcbf716d01f5/cb89a53ce1ef47d68faee648d9c03933/blog-template-description3.png" alt="" width="1592" height="1246"></figure><h2 id="h88398f2fb7">次にやること🏃</h2><p>APIプレビューで確認したレスポンスを参考に、あなた自身のWebサイトを構築しましょう。<br>microCMSはAPIでコンテンツを取得するため、お好きな言語・フレームワークで画面を構築できます。</p><ul><li><a href="https://document.microcms.io/tutorial/javascript/javascript-top" target="_blank" rel="noopener noreferrer nofollow"><u>JavaScript SDK</u></a></li><li><a href="https://document.microcms.io/tutorial/nuxt/nuxt-top" target="_blank" rel="noopener noreferrer nofollow"><u>Nuxt SDK</u></a></li><li><a href="https://document.microcms.io/tutorial/gatsby/gatsby-top" target="_blank" rel="noopener noreferrer nofollow"><u>Gatsby SDK</u></a></li></ul><p>その他に<a href="https://microcms.io/features/sdk" target="_blank" rel="noopener noreferrer nofollow"><u>サーバーサイドSDK（PHP / Go / Ruby）やモバイルSDK（iOS / Android）</u></a>もございます。</p><p>お困りなことや疑問点などございましたらお気軽にご連絡ください。<br>サポート窓口：<a href="mailto:support@microcms.io">support@microcms.io</a><br>よくある質問：<a href="https://help.microcms.io/ja/knowledge"><u>https://help.microcms.io/ja/knowledge</u></a></p>',
    },
    {
      id: 'jj5tcpffx4',
      createdAt: '2024-10-23T00:56:12.771Z',
      updatedAt: '2024-10-23T00:56:12.771Z',
      publishedAt: '2024-10-23T00:56:12.771Z',
      revisedAt: '2024-10-23T00:56:12.771Z',
      eyecatch: {
        url: 'https://images.microcms-assets.io/assets/202bc129280e4d1e86d2dcbf716d01f5/014b9eea52334c5da4314282d63145a0/blog-template.png',
        height: 630,
        width: 1200,
      },
      title: '（サンプル）まずはこの記事を開きましょう5',
      tags: [],
      content:
        '<h2 id="hdb41525ba7">ブログテンプレートから作成されました🎉</h2><p>ブログテンプレートからAPIを作成しました。<br>おつかれさまでした🎉</p><h2 id="hf45076424a">APIプレビューを試そう🚀</h2><p>最初に「APIプレビュー」をしてみましょう。</p><p>入稿したコンテンツはAPI経由で取得し、Viewに繋ぎ込みます。<br>APIプレビューでは実際のAPIレスポンスを確認でき、あなたの開発を加速させます。</p><p>👇まずはここをクリックします。</p><figure><img src="https://images.microcms-assets.io/assets/202bc129280e4d1e86d2dcbf716d01f5/70b303eef720476b888139f0fb276a92/blog-template-description1.png" alt="" width="2490" height="1652"></figure><p>APIプレビュー画面が開いたら、<strong>「取得」</strong>ボタンでリクエストを試してみましょう。</p><figure><img src="https://images.microcms-assets.io/assets/202bc129280e4d1e86d2dcbf716d01f5/53b996aa0cca48518f765e1d41b0abc5/blog-template-description2.png" alt="" width="2492" height="1648"></figure><p>この記事の内容がAPIで取得できていることがわかります。</p><figure><img src="https://images.microcms-assets.io/assets/202bc129280e4d1e86d2dcbf716d01f5/cb89a53ce1ef47d68faee648d9c03933/blog-template-description3.png" alt="" width="1592" height="1246"></figure><h2 id="h88398f2fb7">次にやること🏃</h2><p>APIプレビューで確認したレスポンスを参考に、あなた自身のWebサイトを構築しましょう。<br>microCMSはAPIでコンテンツを取得するため、お好きな言語・フレームワークで画面を構築できます。</p><ul><li><a href="https://document.microcms.io/tutorial/javascript/javascript-top" target="_blank" rel="noopener noreferrer nofollow"><u>JavaScript SDK</u></a></li><li><a href="https://document.microcms.io/tutorial/nuxt/nuxt-top" target="_blank" rel="noopener noreferrer nofollow"><u>Nuxt SDK</u></a></li><li><a href="https://document.microcms.io/tutorial/gatsby/gatsby-top" target="_blank" rel="noopener noreferrer nofollow"><u>Gatsby SDK</u></a></li></ul><p>その他に<a href="https://microcms.io/features/sdk" target="_blank" rel="noopener noreferrer nofollow"><u>サーバーサイドSDK（PHP / Go / Ruby）やモバイルSDK（iOS / Android）</u></a>もございます。</p><p>お困りなことや疑問点などございましたらお気軽にご連絡ください。<br>サポート窓口：<a href="mailto:support@microcms.io">support@microcms.io</a><br>よくある質問：<a href="https://help.microcms.io/ja/knowledge"><u>https://help.microcms.io/ja/knowledge</u></a></p>',
    },
    {
      id: 'ux0p2q8fcsnb',
      createdAt: '2024-10-23T00:56:00.292Z',
      updatedAt: '2024-10-23T00:56:00.292Z',
      publishedAt: '2024-10-23T00:56:00.292Z',
      revisedAt: '2024-10-23T00:56:00.292Z',
      eyecatch: {
        url: 'https://images.microcms-assets.io/assets/202bc129280e4d1e86d2dcbf716d01f5/014b9eea52334c5da4314282d63145a0/blog-template.png',
        height: 630,
        width: 1200,
      },
      title: '（サンプル）まずはこの記事を開きましょう4',
      tags: [],
      content:
        '<h2 id="hdb41525ba7">ブログテンプレートから作成されました🎉</h2><p>ブログテンプレートからAPIを作成しました。<br>おつかれさまでした🎉</p><h2 id="hf45076424a">APIプレビューを試そう🚀</h2><p>最初に「APIプレビュー」をしてみましょう。</p><p>入稿したコンテンツはAPI経由で取得し、Viewに繋ぎ込みます。<br>APIプレビューでは実際のAPIレスポンスを確認でき、あなたの開発を加速させます。</p><p>👇まずはここをクリックします。</p><figure><img src="https://images.microcms-assets.io/assets/202bc129280e4d1e86d2dcbf716d01f5/70b303eef720476b888139f0fb276a92/blog-template-description1.png" alt="" width="2490" height="1652"></figure><p>APIプレビュー画面が開いたら、<strong>「取得」</strong>ボタンでリクエストを試してみましょう。</p><figure><img src="https://images.microcms-assets.io/assets/202bc129280e4d1e86d2dcbf716d01f5/53b996aa0cca48518f765e1d41b0abc5/blog-template-description2.png" alt="" width="2492" height="1648"></figure><p>この記事の内容がAPIで取得できていることがわかります。</p><figure><img src="https://images.microcms-assets.io/assets/202bc129280e4d1e86d2dcbf716d01f5/cb89a53ce1ef47d68faee648d9c03933/blog-template-description3.png" alt="" width="1592" height="1246"></figure><h2 id="h88398f2fb7">次にやること🏃</h2><p>APIプレビューで確認したレスポンスを参考に、あなた自身のWebサイトを構築しましょう。<br>microCMSはAPIでコンテンツを取得するため、お好きな言語・フレームワークで画面を構築できます。</p><ul><li><a href="https://document.microcms.io/tutorial/javascript/javascript-top" target="_blank" rel="noopener noreferrer nofollow"><u>JavaScript SDK</u></a></li><li><a href="https://document.microcms.io/tutorial/nuxt/nuxt-top" target="_blank" rel="noopener noreferrer nofollow"><u>Nuxt SDK</u></a></li><li><a href="https://document.microcms.io/tutorial/gatsby/gatsby-top" target="_blank" rel="noopener noreferrer nofollow"><u>Gatsby SDK</u></a></li></ul><p>その他に<a href="https://microcms.io/features/sdk" target="_blank" rel="noopener noreferrer nofollow"><u>サーバーサイドSDK（PHP / Go / Ruby）やモバイルSDK（iOS / Android）</u></a>もございます。</p><p>お困りなことや疑問点などございましたらお気軽にご連絡ください。<br>サポート窓口：<a href="mailto:support@microcms.io">support@microcms.io</a><br>よくある質問：<a href="https://help.microcms.io/ja/knowledge"><u>https://help.microcms.io/ja/knowledge</u></a></p>',
    },
    {
      id: 'hpszlq1zqp',
      createdAt: '2024-10-23T00:55:48.534Z',
      updatedAt: '2024-10-23T01:09:19.480Z',
      publishedAt: '2024-10-23T00:55:48.534Z',
      revisedAt: '2024-10-23T01:09:19.480Z',
      eyecatch: {
        url: 'https://images.microcms-assets.io/assets/202bc129280e4d1e86d2dcbf716d01f5/014b9eea52334c5da4314282d63145a0/blog-template.png',
        height: 630,
        width: 1200,
      },
      title: '（サンプル）まずはこの記事を開きましょう3',
      tags: [
        {
          id: 'react',
          createdAt: '2024-10-23T00:46:54.985Z',
          updatedAt: '2024-10-23T01:08:11.334Z',
          publishedAt: '2024-10-23T00:46:54.985Z',
          revisedAt: '2024-10-23T01:07:58.568Z',
          name: 'React.js',
        },
        {
          id: 'express',
          createdAt: '2024-10-23T00:46:54.918Z',
          updatedAt: '2024-10-23T01:08:57.471Z',
          publishedAt: '2024-10-23T00:46:54.918Z',
          revisedAt: '2024-10-23T01:08:50.191Z',
          name: 'Express.js',
        },
      ],
      content:
        '<h2 id="hdb41525ba7">ブログテンプレートから作成されました🎉</h2><p>ブログテンプレートからAPIを作成しました。<br>おつかれさまでした🎉</p><h2 id="hf45076424a">APIプレビューを試そう🚀</h2><p>最初に「APIプレビュー」をしてみましょう。</p><p>入稿したコンテンツはAPI経由で取得し、Viewに繋ぎ込みます。<br>APIプレビューでは実際のAPIレスポンスを確認でき、あなたの開発を加速させます。</p><p>👇まずはここをクリックします。</p><figure><img src="https://images.microcms-assets.io/assets/202bc129280e4d1e86d2dcbf716d01f5/70b303eef720476b888139f0fb276a92/blog-template-description1.png" alt="" width="2490" height="1652"></figure><p>APIプレビュー画面が開いたら、<strong>「取得」</strong>ボタンでリクエストを試してみましょう。</p><figure><img src="https://images.microcms-assets.io/assets/202bc129280e4d1e86d2dcbf716d01f5/53b996aa0cca48518f765e1d41b0abc5/blog-template-description2.png" alt="" width="2492" height="1648"></figure><p>この記事の内容がAPIで取得できていることがわかります。</p><figure><img src="https://images.microcms-assets.io/assets/202bc129280e4d1e86d2dcbf716d01f5/cb89a53ce1ef47d68faee648d9c03933/blog-template-description3.png" alt="" width="1592" height="1246"></figure><h2 id="h88398f2fb7">次にやること🏃</h2><p>APIプレビューで確認したレスポンスを参考に、あなた自身のWebサイトを構築しましょう。<br>microCMSはAPIでコンテンツを取得するため、お好きな言語・フレームワークで画面を構築できます。</p><ul><li><a href="https://document.microcms.io/tutorial/javascript/javascript-top" target="_blank" rel="noopener noreferrer nofollow"><u>JavaScript SDK</u></a></li><li><a href="https://document.microcms.io/tutorial/nuxt/nuxt-top" target="_blank" rel="noopener noreferrer nofollow"><u>Nuxt SDK</u></a></li><li><a href="https://document.microcms.io/tutorial/gatsby/gatsby-top" target="_blank" rel="noopener noreferrer nofollow"><u>Gatsby SDK</u></a></li></ul><p>その他に<a href="https://microcms.io/features/sdk" target="_blank" rel="noopener noreferrer nofollow"><u>サーバーサイドSDK（PHP / Go / Ruby）やモバイルSDK（iOS / Android）</u></a>もございます。</p><p>お困りなことや疑問点などございましたらお気軽にご連絡ください。<br>サポート窓口：<a href="mailto:support@microcms.io">support@microcms.io</a><br>よくある質問：<a href="https://help.microcms.io/ja/knowledge"><u>https://help.microcms.io/ja/knowledge</u></a></p>',
    },
    {
      id: 'tikx6i71h',
      createdAt: '2024-10-23T00:55:34.357Z',
      updatedAt: '2024-10-23T00:55:34.357Z',
      publishedAt: '2024-10-23T00:55:34.357Z',
      revisedAt: '2024-10-23T00:55:34.357Z',
      eyecatch: {
        url: 'https://images.microcms-assets.io/assets/202bc129280e4d1e86d2dcbf716d01f5/014b9eea52334c5da4314282d63145a0/blog-template.png',
        height: 630,
        width: 1200,
      },
      title: '（サンプル）まずはこの記事を開きましょう2',
      tags: [],
      content:
        '<h2 id="hdb41525ba7">ブログテンプレートから作成されました🎉</h2><p>ブログテンプレートからAPIを作成しました。<br>おつかれさまでした🎉</p><h2 id="hf45076424a">APIプレビューを試そう🚀</h2><p>最初に「APIプレビュー」をしてみましょう。</p><p>入稿したコンテンツはAPI経由で取得し、Viewに繋ぎ込みます。<br>APIプレビューでは実際のAPIレスポンスを確認でき、あなたの開発を加速させます。</p><p>👇まずはここをクリックします。</p><figure><img src="https://images.microcms-assets.io/assets/202bc129280e4d1e86d2dcbf716d01f5/70b303eef720476b888139f0fb276a92/blog-template-description1.png" alt="" width="2490" height="1652"></figure><p>APIプレビュー画面が開いたら、<strong>「取得」</strong>ボタンでリクエストを試してみましょう。</p><figure><img src="https://images.microcms-assets.io/assets/202bc129280e4d1e86d2dcbf716d01f5/53b996aa0cca48518f765e1d41b0abc5/blog-template-description2.png" alt="" width="2492" height="1648"></figure><p>この記事の内容がAPIで取得できていることがわかります。</p><figure><img src="https://images.microcms-assets.io/assets/202bc129280e4d1e86d2dcbf716d01f5/cb89a53ce1ef47d68faee648d9c03933/blog-template-description3.png" alt="" width="1592" height="1246"></figure><h2 id="h88398f2fb7">次にやること🏃</h2><p>APIプレビューで確認したレスポンスを参考に、あなた自身のWebサイトを構築しましょう。<br>microCMSはAPIでコンテンツを取得するため、お好きな言語・フレームワークで画面を構築できます。</p><ul><li><a href="https://document.microcms.io/tutorial/javascript/javascript-top" target="_blank" rel="noopener noreferrer nofollow"><u>JavaScript SDK</u></a></li><li><a href="https://document.microcms.io/tutorial/nuxt/nuxt-top" target="_blank" rel="noopener noreferrer nofollow"><u>Nuxt SDK</u></a></li><li><a href="https://document.microcms.io/tutorial/gatsby/gatsby-top" target="_blank" rel="noopener noreferrer nofollow"><u>Gatsby SDK</u></a></li></ul><p>その他に<a href="https://microcms.io/features/sdk" target="_blank" rel="noopener noreferrer nofollow"><u>サーバーサイドSDK（PHP / Go / Ruby）やモバイルSDK（iOS / Android）</u></a>もございます。</p><p>お困りなことや疑問点などございましたらお気軽にご連絡ください。<br>サポート窓口：<a href="mailto:support@microcms.io">support@microcms.io</a><br>よくある質問：<a href="https://help.microcms.io/ja/knowledge"><u>https://help.microcms.io/ja/knowledge</u></a></p>',
    },
    {
      id: 'da0bmt8sv4',
      createdAt: '2024-10-23T00:46:56.391Z',
      updatedAt: '2024-10-23T01:06:33.577Z',
      publishedAt: '2024-10-23T00:46:56.391Z',
      revisedAt: '2024-10-23T01:06:33.577Z',
      eyecatch: {
        url: 'https://images.microcms-assets.io/assets/202bc129280e4d1e86d2dcbf716d01f5/014b9eea52334c5da4314282d63145a0/blog-template.png',
        height: 630,
        width: 1200,
      },
      title: '（サンプル）まずはこの記事を開きましょう',
      tags: [
        {
          id: 'react',
          createdAt: '2024-10-23T00:46:54.985Z',
          updatedAt: '2024-10-23T01:08:11.334Z',
          publishedAt: '2024-10-23T00:46:54.985Z',
          revisedAt: '2024-10-23T01:07:58.568Z',
          name: 'React.js',
        },
        {
          id: 'next',
          createdAt: '2024-10-23T00:46:54.975Z',
          updatedAt: '2024-10-23T01:08:35.505Z',
          publishedAt: '2024-10-23T00:46:54.975Z',
          revisedAt: '2024-10-23T01:08:35.505Z',
          name: 'Next.js',
        },
      ],
      content:
        '<h2 id="hdb41525ba7">ブログテンプレートから作成されました🎉</h2><p>ブログテンプレートからAPIを作成しました。<br>おつかれさまでした🎉</p><h2 id="hf45076424a">APIプレビューを試そう🚀</h2><p>最初に「APIプレビュー」をしてみましょう。</p><p>入稿したコンテンツはAPI経由で取得し、Viewに繋ぎ込みます。<br>APIプレビューでは実際のAPIレスポンスを確認でき、あなたの開発を加速させます。</p><p>👇まずはここをクリックします。</p><figure><img src="https://images.microcms-assets.io/assets/202bc129280e4d1e86d2dcbf716d01f5/70b303eef720476b888139f0fb276a92/blog-template-description1.png" alt="" width="2490" height="1652"></figure><p>APIプレビュー画面が開いたら、<strong>「取得」</strong>ボタンでリクエストを試してみましょう。</p><figure><img src="https://images.microcms-assets.io/assets/202bc129280e4d1e86d2dcbf716d01f5/53b996aa0cca48518f765e1d41b0abc5/blog-template-description2.png" alt="" width="2492" height="1648"></figure><p>この記事の内容がAPIで取得できていることがわかります。</p><figure><img src="https://images.microcms-assets.io/assets/202bc129280e4d1e86d2dcbf716d01f5/cb89a53ce1ef47d68faee648d9c03933/blog-template-description3.png" alt="" width="1592" height="1246"></figure><h2 id="h88398f2fb7">次にやること🏃</h2><p>APIプレビューで確認したレスポンスを参考に、あなた自身のWebサイトを構築しましょう。<br>microCMSはAPIでコンテンツを取得するため、お好きな言語・フレームワークで画面を構築できます。</p><ul><li><a href="https://document.microcms.io/tutorial/javascript/javascript-top" target="_blank" rel="noopener noreferrer nofollow"><u>JavaScript SDK</u></a></li><li><a href="https://document.microcms.io/tutorial/nuxt/nuxt-top" target="_blank" rel="noopener noreferrer nofollow"><u>Nuxt SDK</u></a></li><li><a href="https://document.microcms.io/tutorial/gatsby/gatsby-top" target="_blank" rel="noopener noreferrer nofollow"><u>Gatsby SDK</u></a></li></ul><p>その他に<a href="https://microcms.io/features/sdk" target="_blank" rel="noopener noreferrer nofollow"><u>サーバーサイドSDK（PHP / Go / Ruby）やモバイルSDK（iOS / Android）</u></a>もございます。</p><p>お困りなことや疑問点などございましたらお気軽にご連絡ください。<br>サポート窓口：<a href="mailto:support@microcms.io">support@microcms.io</a><br>よくある質問：<a href="https://help.microcms.io/ja/knowledge"><u>https://help.microcms.io/ja/knowledge</u></a></p>',
    },
  ],
  totalCount: 7,
  offset: 0,
  limit: 10,
};

export const DUMMY_ARTICLE_DATA = {
  id: 'c80nihlx27ss',
  createdAt: '2024-10-23T00:56:43.848Z',
  updatedAt: '2025-10-24T12:36:37.747Z',
  publishedAt: '2024-10-23T00:56:43.848Z',
  revisedAt: '2025-10-24T12:36:37.747Z',
  eyecatch: {
    url: 'https://images.microcms-assets.io/assets/202bc129280e4d1e86d2dcbf716d01f5/014b9eea52334c5da4314282d63145a0/blog-template.png',
    height: 630,
    width: 1200,
  },
  title: '（サンプル）まずはこの記事を開きましょう7 test Python',
  tags: [
    {
      id: 'react',
      createdAt: '2024-10-23T00:46:54.985Z',
      updatedAt: '2024-10-23T01:08:11.334Z',
      publishedAt: '2024-10-23T00:46:54.985Z',
      revisedAt: '2024-10-23T01:07:58.568Z',
      name: 'React.js',
    },
    {
      id: 'next',
      createdAt: '2024-10-23T00:46:54.975Z',
      updatedAt: '2024-10-23T01:08:35.505Z',
      publishedAt: '2024-10-23T00:46:54.975Z',
      revisedAt: '2024-10-23T01:08:35.505Z',
      name: 'Next.js',
    },
    {
      id: 'express',
      createdAt: '2024-10-23T00:46:54.918Z',
      updatedAt: '2024-10-23T01:08:57.471Z',
      publishedAt: '2024-10-23T00:46:54.918Z',
      revisedAt: '2024-10-23T01:08:50.191Z',
      name: 'Express.js',
    },
  ],
  content:
    '<h2 id="hdb41525ba7">ブログテンプレートから作成されました🎉</h2><p>ブログテンプレートからAPIを作成しました。<br>おつかれさまでした🎉</p><h2 id="hf45076424a">APIプレビューを試そう🚀</h2><p>最初に「APIプレビュー」をしてみましょう。</p><p>入稿したコンテンツはAPI経由で取得し、Viewに繋ぎ込みます。<br>APIプレビューでは実際のAPIレスポンスを確認でき、あなたの開発を加速させます。</p><p>👇まずはここをクリックします。</p><figure><img src="https://images.microcms-assets.io/assets/202bc129280e4d1e86d2dcbf716d01f5/70b303eef720476b888139f0fb276a92/blog-template-description1.png" alt="" width="2490" height="1652"></figure><p>APIプレビュー画面が開いたら、<strong>「取得」</strong>ボタンでリクエストを試してみましょう。</p><figure><img src="https://images.microcms-assets.io/assets/202bc129280e4d1e86d2dcbf716d01f5/53b996aa0cca48518f765e1d41b0abc5/blog-template-description2.png" alt="" width="2492" height="1648"></figure><p>この記事の内容がAPIで取得できていることがわかります。</p><figure><img src="https://images.microcms-assets.io/assets/202bc129280e4d1e86d2dcbf716d01f5/cb89a53ce1ef47d68faee648d9c03933/blog-template-description3.png" alt="" width="1592" height="1246"></figure><h2 id="h88398f2fb7">次にやること🏃</h2><p>APIプレビューで確認したレスポンスを参考に、あなた自身のWebサイトを構築しましょう。<br>microCMSはAPIでコンテンツを取得するため、お好きな言語・フレームワークで画面を構築できます。</p><ul><li><a href="https://document.microcms.io/tutorial/javascript/javascript-top" target="_blank" rel="noopener noreferrer nofollow"><u>JavaScript SDK</u></a></li><li><a href="https://document.microcms.io/tutorial/nuxt/nuxt-top" target="_blank" rel="noopener noreferrer nofollow"><u>Nuxt SDK</u></a></li><li><a href="https://document.microcms.io/tutorial/gatsby/gatsby-top" target="_blank" rel="noopener noreferrer nofollow"><u>Gatsby SDK</u></a></li></ul><p>その他に<a href="https://microcms.io/features/sdk" target="_blank" rel="noopener noreferrer nofollow"><u>サーバーサイドSDK（PHP / Go / Ruby）やモバイルSDK（iOS / Android）</u></a>もございます。</p><p>お困りなことや疑問点などございましたらお気軽にご連絡ください。<br>サポート窓口：<a href="mailto:support@microcms.io">support@microcms.io</a><br>よくある質問：<a href="https://help.microcms.io/ja/knowledge">https://help.microcms.io/ja/knowledge</a></p><div data-filename="index.ts"><pre><code class="language-typescript">import ts from &quot;typescript&quot;;\n\n// このディレクトリの tsconfig.json を元に config や解析対象のファイルをロードする\nconst tsconfig = ts.readConfigFile(&quot;./tsconfig.json&quot;, ts.sys.readFile);\nconst options = ts.parseJsonConfigFileContent(tsconfig.config, ts.sys, &quot;./&quot;);\n\n// Compiler Host を取得\nconst host = ts.createCompilerHost(options.options);\nconst program = ts.createProgram(options.fileNames, options.options, host);\n\n// 型の解析結果を取得\nfor (const diagnostic of program.getSemanticDiagnostics()) {\n  console.log(\n    &quot;[semantic diagnostics]&quot;,\n    diagnostic.file?.fileName.replace(process.cwd(), &quot;&quot;),\n    `#${diagnostic.start}:${diagnostic.length}`,\n    &quot;-&quot;,\n    diagnostic.messageText,\n    indexSourceFile.getLineAndCharacterOfPosition(diagnostic.start!),\n  );\n}</code></pre></div>',
};
