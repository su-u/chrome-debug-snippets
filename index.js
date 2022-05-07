// リンク先URLを全て抽出
$$('a').map(x => x.href)

// Amazon欲しいものリストの件数を数える（一番下まで読みこむ必要あり）
$$('#g-items > li').filter(x => x.attributes['data-id']).length

// Amazon欲しいものリストの合計金額（一番下まで読みこむ必要あり）
$x('/html/body/div[1]/div[2]/div/div/div/div/div/div[2]/div[8]/div/div/ul/li/span/div/div/div/div[2]/div[3]/div/div[1]/div/div[1]/div[2]/div[2]/div/span[1]/span[2]/span[2]').map(x => parseInt(x.innerHTML.replaceAll(',', ''))).reduce((p, c) => p + c, 0)
