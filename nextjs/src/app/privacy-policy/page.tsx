import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー | サイト名',
  description: '当サイトのプライバシーポリシーについて記載しています。',
};

// mx-auto
export default function PrivacyPolicyPage() {
  return (
    <main className='py-3 md:py-6'>
      <h1 className='text-center text-4xl md:text-5xl font-bold mb-4 md:mb-8'>
        Privacy Policy
      </h1>

      <section className='space-y-8'>
        <div>
          <h2 className='text-xl font-semibold mb-3'>1. 個人情報の利用目的</h2>
          <p>
            当サイトでは、お問い合わせやサービス利用時に、名前・メールアドレスなどの個人情報を入力いただく場合があります。これらの情報は、質問への回答や必要なご連絡のために利用します。
          </p>
        </div>

        <div>
          <h2 className='text-xl font-semibold mb-3'>
            2. 個人情報の第三者提供
          </h2>
          <p>
            取得した個人情報を、法令に基づく場合を除き、第三者に提供することはありません。
          </p>
        </div>

        <div>
          <h2 className='text-xl font-semibold mb-3'>
            3. アクセス解析ツールについて
          </h2>
          <p>
            当サイトでは、Googleが提供する「Google
            Analytics」を利用しています。トラフィックデータの収集のためにCookieを使用しますが、匿名でのデータ収集であり、個人を特定するものではありません。
          </p>
          <p>
            詳細は
            <a
              href='https://policies.google.com/technologies/partner-sites?hl=ja'
              target='_blank'
              rel='noopener noreferrer'
              className='underline'
            >
              こちら
            </a>
            をご覧ください。
          </p>
        </div>

        <div>
          <h2 className='text-xl font-semibold mb-3'>
            4. Cookie（クッキー）について
          </h2>
          <p>
            Cookieは、サイトの利用状況を分析したり、利便性を向上させる目的で使用されます。Cookieの使用を希望しない場合は、ブラウザの設定から無効にできます。
          </p>
        </div>

        <div>
          <h2 className='text-xl font-semibold mb-3'>
            5. 個人情報の開示・訂正・削除について
          </h2>
          <p>
            本人からの請求があった場合、速やかに開示・訂正・削除を行います。その際は、本人確認をお願いする場合があります。
          </p>
        </div>

        <div>
          <h2 className='text-xl font-semibold mb-3'>6. 免責事項</h2>
          <p>
            当サイトからのリンクやバナーなどによって他サイトへ移動した場合、移動先サイトで提供される情報・サービス等については、当サイトは一切の責任を負いません。
          </p>
        </div>

        <div>
          <h2 className='text-xl font-semibold mb-3'>
            7. プライバシーポリシーの変更
          </h2>
          <p>
            本ポリシーの内容は、法令変更や運営方針により予告なく変更されることがあります。変更後のプライバシーポリシーは、当サイトに掲載した時点で効力を生じます。
          </p>
        </div>

        <div>
          <h2 className='text-xl font-semibold mb-3'>8. お問い合わせ</h2>
          <p>
            当サイトのプライバシーポリシーに関するお問い合わせは、以下の連絡先までお願いいたします。
          </p>
          <div className='mt-2 bg-gray-50 p-4 rounded-md border text-sm'>
            <p>運営者名：大倉聖也</p>
            <p>メールアドレス：seiya.ookura@gmail.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}
