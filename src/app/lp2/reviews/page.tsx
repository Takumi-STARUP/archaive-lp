// ユーザーレビューページ /lp2/reviews
export default function ReviewsPage() {
  const reviews = [
    {
      name: '山田 太郎',
      title: '製造業・営業部長',
      rating: 5,
      comment: 'AI見積もりの精度とスピードに驚きました。今まで数時間かかっていた作業が数分で終わり、業務効率が大幅に向上しました。',
    },
    {
      name: '佐藤 花子',
      title: '建設業・現場監督',
      rating: 4,
      comment: 'チャット形式で直感的に使えるので、ITが苦手なスタッフでもすぐに慣れました。サポートも丁寧で安心です。',
    },
    {
      name: '鈴木 次郎',
      title: '設備工事・経営者',
      rating: 5,
      comment: '属人化していた見積もり業務が標準化でき、ミスも減りました。導入して本当に良かったです。',
    },
  ];
  return (
    <section className="py-20 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#37B7C4]">お客様の声・レビュー</h1>
        <div className="flex flex-col gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-bold text-lg text-[#181A1B]">{r.name}</span>
                  <span className="text-sm text-gray-500">{r.title}</span>
                </div>
                <div className="flex items-center mb-3">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <svg key={idx} className={`w-5 h-5 ${idx < r.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                  ))}
                </div>
                <p className="text-[#181A1B] text-base md:text-lg leading-relaxed">{r.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 