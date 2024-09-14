document.getElementById('fetchButton').addEventListener('click', async () => {
    const responseDiv = document.getElementById('response');
    const url = 'https://hook.us1.make.com/xxxxx'; // 自身が作成したWebhookURLに書き換えましょう。
    const payload = {
        message: "どもども"
    };

    try {
        // Fetch APIを使用してHTTP POSTリクエストを送信
        const response = await fetch(url, {
            method: 'POST', // HTTPメソッドをPOSTに指定
            headers: {
                'Content-Type': 'application/json' // JSONデータを送信するためのヘッダー
            },
            body: JSON.stringify(payload) // JSONデータを文字列に変換して送信
        });

        // レスポンスが成功したか確認
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // JSON形式でレスポンスを取得
        const data = await response.json();
        
        // レスポンスのデータを表示
        responseDiv.textContent = `レスポンス: ${JSON.stringify(data, null, 2)}`;
    } catch (error) {
        // エラーメッセージを表示
        responseDiv.textContent = `エラー: ${error.message}`;
    }
});
