'use client';

export default function NewsSection() {
  const newsItems = [
    {
      date: '2025年03月05日',
      tags: [
        { label: '新聞', type: 'newspaper' }
      ],
      content: '日本物流新聞で取り上げられました',
      link: '/news/logistics-newspaper'
    },
    {
      date: '2025年05月24日',
      tags: [
        { label: '新聞', type: 'newspaper' }
      ],
      content: '日刊工業新聞で取り上げられました',
      link: '/news/industrial-newspaper'
    },
    {
      date: '2025年05月24日',
      tags: [
        { label: 'プレスリリース', type: 'press' }
      ],
      content: '登壇実績',
      link: '/news/presentation-achievement'
    }
  ];

  const getTagColor = (type: string) => {
    return 'bg-[#37B7C4]';
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* セクションタイトル */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] mb-4">
            お知らせ
          </h2>
        </div>

        {/* ニュース一覧 */}
        <div className="max-w-4xl mx-auto">
          {newsItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="block border-b border-gray-300 py-6 hover:bg-gray-50 transition-colors duration-200 px-4"
            >
              <div className="news-item">
                {/* 日付とタグ */}
                <div className="flex items-center gap-4 mb-3">
                  <div className="font-bold text-gray-800">
                    {item.date}
                  </div>
                  {/* タグ */}
                  <div className="flex gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`inline-block px-3 py-1 rounded-full text-white text-xs ${getTagColor(tag.type)}`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* コンテンツ */}
                <div className="text-lg font-bold text-gray-700 hover:text-[#37B7C4] transition-colors">
                  {item.content}
                </div>
              </div>
            </a>
          ))}

          {/* もっと見るボタン */}
          <div className="text-center mt-12">
            <a
              href="/news"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#37B7C4] text-[#37B7C4] rounded-lg font-bold hover:bg-[#37B7C4] hover:text-white transition-all duration-300"
            >
              すべてのニュースを見る
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}