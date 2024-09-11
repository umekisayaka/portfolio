//ローディング
$(window).on('load resize', function() {
  const loading = $('#loading');
  const mainContent = $('#top-content');
  const hamburger = $('.hamburger');

  // ページがリロードされた場合にセッションストレージをクリアする
  if (event.type === 'load') {
    sessionStorage.removeItem('loadingDisplayed');

    // ページがリロードされた際にスクロール位置をトップに戻す
    window.scrollTo(0, 0); // ページのトップにスクロール
  }

  // 画面幅が1000px以下の場合にのみハンバーガーメニューを表示
  if (window.innerWidth <= 1000) {
    hamburger.css('display', 'block');
  } else {
    hamburger.css('display', 'none');
  }

  // ページがリロードされたかどうかを確認（load時のみ実行）
  if (event.type === 'load' && !sessionStorage.getItem('loadingDisplayed')) {
    // 3.5秒後にローディング画面をフェードアウト
    setTimeout(() => {
      loading.addClass('hidden'); // ローディング画面をフェードアウト
      setTimeout(() => {
        loading.css('display', 'none'); // 完全に非表示にする
        mainContent.addClass('visible'); // ズームアウトとフェードインを開始

        // ローディングを表示したことをセッションストレージに記録
        sessionStorage.setItem('loadingDisplayed', 'true');
      }, 1000); // ローディング画面がフェードアウトしてから1秒後にメインコンテンツを表示
    }, 3500); // 3.5秒後にフェードアウト開始
  } else if (event.type === 'load') {
    // 既にセッションストレージに保存されている場合はスキップ
    loading.css('display', 'none');
    mainContent.addClass('visible'); // メインコンテンツを表示
  }
});
// ハンバーガー
$(function () {
  $(".hamburger").click(function () {
    $(".hamburger").toggleClass("open");
    $(".header-nav-sp").fadeToggle();
  });

  $(".header-nav-sp a").click(function () {
    $(".hamburger").removeClass("open");
    $(".header-nav-sp").fadeOut();
  });
});

// スクロールして紙飛行機動く
$(window).on('scroll', function() {
  const airplaneLayer = $('#AirplaneLayer');
  if (airplaneLayer.length) { // 要素が存在するかチェック
    const elementPosition = airplaneLayer.offset().top;
    const scrollPosition = $(window).scrollTop() + $(window).height();
    if (scrollPosition > elementPosition + 200) {
      $('.pass_airplane1.about').addClass('active');
      $('.pass_airplane2.about').addClass('active');
      $('.pass_line.about').addClass('active');
    }
  }
});

//スクロールでキャッチコピー
$(window).on('scroll', function() {
  const copyContainer = $('.section-about_copy-container');
  if (copyContainer.length) { // 要素が存在するかチェック
    const elementPosition = copyContainer.offset().top;
    const scrollPosition = $(window).scrollTop() + $(window).height();
    if (scrollPosition > elementPosition + 200) {
      copyContainer.addClass('visible');
    }
  }
});

// スクロールでリード文
$(window).on('scroll', function() {
  const leadElement = $('.section-about_lead');
  if (leadElement.length) { // 要素が存在するかチェック
    const elementPosition = leadElement.offset().top;
    const scrollPosition = $(window).scrollTop() + $(window).height();
    if (scrollPosition > elementPosition + 200) {
      leadElement.addClass('visible-lead');
    }
  }
});

//works
$(document).ready(function () {
  $(window).on('scroll', function () {
    $('.section-works_list li').each(function (i) {
      const elementPosition = $(this).offset().top;
      const scrollPosition = $(window).scrollTop();
      const windowHeight = $(window).height();
      
      if (scrollPosition + windowHeight > elementPosition) {
        setTimeout(() => {
          $(this).addClass('active');
        }, i * 300); // 各画像のアニメーションを300ミリ秒ずつ遅らせる
      }
    });
  });
});

// works出現
$(window).on('scroll', function() {
  $('.animate-on-scroll').each(function() {
    // 要素のトップ位置がウィンドウの底に近づいたときにアニメーションを適用
    if ($(window).scrollTop() + $(window).height() > $(this).offset().top + 100) {
      $(this).addClass('active');
    }
  });
});