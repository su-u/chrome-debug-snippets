// リンク先URLを全て抽出
$$('a').map(x => x.href)

// Amazon欲しいものリストの件数を数える（一番下まで読みこむ必要あり）
$$('#g-items > li').filter(x => x.attributes['data-id']).length
