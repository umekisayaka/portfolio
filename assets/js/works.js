$(document).ready(function() {
  // 初期状態ではすべての作品を表示
  $('.section-works_list li').hide().fadeIn(1000); // ページロード時にふわっと表示

  // カテゴリリストのタブをクリックしたときの処理
  $('.categoly_list li').click(function() {
    // すべてのタブから active クラスを削除
    $('.categoly_list li').removeClass('active');
    // クリックされたタブに active クラスを追加
    $(this).addClass('active');

    // 選択されたカテゴリに応じて作品リストをフィルタリング
    const category = $(this).text().toLowerCase();
    if (category === 'all') {
      $('.section-works_list li').hide().fadeIn(1000); // 全て表示（ふわっと登場）
    } else {
      $('.section-works_list li').hide(); // 全て素早く隠す
      $('.' + category).fadeIn(1000); // 選択されたカテゴリだけふわっと表示
    }
  });
});
