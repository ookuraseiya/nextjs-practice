export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // ← await が必要
  return <div>記事ID: {id} のページ</div>;
}
