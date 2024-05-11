export type ReleaseNote = {
  version: string;
  date: {
    firefox: string;
    chrome: string;
  };
  contents: {
    genre: "feature" | "optimization" | "fix" | "security";
    title: string;
    explain: string;
  }[];
};
export const releaseNotes: ReleaseNote[] = [
  {
    version: "4.0.0",
    date: {
      firefox: "2024/6/10",
      chrome: "2024/6/10",
    },
    contents: [
      {
        genre: "feature",
        title: "アップデート機能の追加",
        explain:
          "アップデートがあると通知が来るようになりました。また、アップデートの確認を手動で行うこともできます。",
      },
      {
        genre: "feature",
        title: "アップデート情報の表示",
        explain:
          "アップデート情報が表示されるようになりました。アップデート情報は公式サイトから取得されます。",
      },
      {
        genre: "feature",
        title: "アップデート情報の表示",
        explain:
          "アップデート情報が表示されるようになりました。アップデート情報は公式サイトから取得されます。",
      },
    ],
  },
];

export const legacyReleaseNote = [
  {
    version: "3.23.3",
    date: {
      firefox: "2023/9/21",
      chrome: "2023/9/21",
    },
    contents: [
      {
        genre: "newfunc",
        title: "変更されたログイン形式に対応",
        explain: "変更されたログイン形式に対応しました。",
      },
    ],
  },
  {
    version: "3.23.2",
    date: {
      firefox: "2023/9/2",
      chrome: "2023/9/2",
    },
    contents: [
      {
        genre: "optimisation",
        title: "一部機能の修正",
        explain: "一部の非推奨関数の最適化を行いました。",
      },
      {
        genre: "bugfix",
        title: "科目ページにおける問題の修正",
        explain:
          "特定の状況において科目ページ内の機能が上手く働かない問題を修正しました。",
      },
    ],
  },
  {
    version: "3.23.1",
    date: {
      firefox: "2023/7/25",
      chrome: "2023/7/25",
    },
    contents: [
      {
        genre: "bugfix",
        title: "ファイルの一括ダウンロード機能におけるバグを修正しました",
        explain:
          "ファイルの一括ダウンロード機能において、回ごとでのダウンロードで本来ダウンロードできないものをダウンロード仕様とすることにより動作が途中で止まることがある問題を修正しました。",
      },
    ],
  },
  {
    version: "3.23.0",
    date: {
      firefox: "2023/7/25",
      chrome: "2023/7/25",
    },
    contents: [
      {
        genre: "newfunc",
        title: "ファイルの一括ダウンロード機能を追加しました",
        explain:
          "[Chrome限定]科目詳細ページ内において、配布されているすべてのpdfファイルをZIP形式に圧縮し一括でダウンロードする機能を追加しました。また、各回ごとにダウンロードすることもでき、こちらはpdfに限定されません。",
      },
      {
        genre: "newfunc",
        title: "テスト中にUtilitiesを目立たせない設定を追加しました",
        explain:
          "ScombZ上でテストを受ける際、ScombZ Utilitiesが目立たないようになる設定を追加しました(テスト受験中の時間割・課題一覧表示)。時間割、課題一覧、画面上部のアイコン、拡張機能設定へのリンクが一時的に非表示になります。",
      },
    ],
  },
  {
    version: "3.22.0",
    date: {
      firefox: "2023/7/24",
      chrome: "2023/7/25",
    },
    contents: [
      {
        genre: "bugfix",
        title: "複数のバグを修正しました",
        explain:
          "違う年度のシラバスが開かれる問題を修正しました。テスト提出時にタイマー横の提出ボタンをクリックすると確認画面が出る問題を修正しました。URLをハイパーリンクに置換する機能がうまく動かないことがある問題を修正しました。",
      },
      {
        genre: "optimisation",
        title: "一部のページでホイールクリック時の挙動を変更しました",
        explain:
          "LMSページにおいて、ホイールクリック時にページをバックグラウンドで開くように変更しました。",
      },
      {
        genre: "optimisation",
        title: "アップデート時に公式サイトが開く挙動を変更しました",
        explain:
          "アップデート時、公式サイトがバックグラウンドで開くように変更しました。これによりテスト中などでも邪魔されません。",
      },
    ],
  },
  {
    version: "3.21.0",
    date: {
      firefox: "2023/7/21",
      chrome: "2023/7/21",
    },
    contents: [
      {
        genre: "newfunc",
        title: "クリックできないURLをハイパーリンクに置換する機能",
        explain:
          "科目詳細ページ内で、クリックできないただの文字列になっているURLをハイパーリンクに置換する機能を追加しました。",
      },
    ],
  },
  {
    version: "3.20.1",
    date: {
      firefox: "2023/7/3",
      chrome: "2023/7/3",
    },
    contents: [
      {
        genre: "else",
        title: "ドメインの変更",
        explain:
          "公式サイトのドメインをscombz-utilities.comに変更しました。それに伴い、拡張機能本体をアップデートしました。",
      },
      {
        genre: "optimisation",
        title: "3.20.0の機能の追加",
        explain:
          "3.20.0のアップデートと同日に行っているため、その他の仕様変更については更新情報をご覧ください。",
      },
    ],
  },
  {
    version: "3.20.0",
    date: {
      firefox: "2023/7/3",
      chrome: "2023/7/3",
    },
    contents: [
      {
        genre: "bugfix",
        title: "自作追加課題で自動で日付・時間を入力するボタンの実装 ",
        explain:
          "自作追加課題で自動で日付・時間を入力するボタンを実装しました。科目詳細ページで自作課題追加を行うと自動入力ボタンが表示されます。",
      },
      {
        genre: "optimisation",
        title: "科目メモの入出力機能を追加",
        explain:
          "設定画面からインポート/エクスポート機能を使用したとき、設定だけでなく科目メモもインポート/エクスポートされるようにしました。",
      },
      {
        genre: "bugfix",
        title: "出席コードをエンターで送信するとバグる問題を修正",
        explain:
          "出席コードをエンターで送信するとバグが起きる問題を修正しました。",
      },
      {
        genre: "optimisation",
        title: "タブの時間割を目立たせる",
        explain:
          "LMSでなくメニュー画面での時間割でも現在の授業を目立たせるようにしました。",
      },
      {
        genre: "bugfix",
        title: "…が下に潜ってしまうバグの解消",
        explain:
          "テスト等で…が下にもぐってしまうことがあるバグを修正しました。",
      },
      {
        genre: "else",
        title: "ドキュメントの更新",
        explain: "ドキュメントサイトのスタイルを変更しました。",
      },
    ],
  },
  {
    version: "3.19.1",
    date: {
      firefox: "2023/4/20",
      chrome: "2023/4/21",
    },
    contents: [
      {
        genre: "optimisation",
        title: "課題マウスオーバーで科目表示",
        explain:
          "課題一覧でマウスオーバーすることによって科目名を表示するようになりました。",
      },
      {
        genre: "bugfix",
        title: "一部機能の修正",
        explain:
          "教材の並び替えがうまくいかない問題を修正しました。ポップアップから課題を更新したとき、回答済みのアンケートも表示される問題を修正しました。クォーター制の授業があるとき、課題一覧と時間割が被る問題を修正しました。",
      },
    ],
  },
  {
    version: "3.19.0",
    date: {
      firefox: "2023/4/17",
      chrome: "2023/4/19",
    },
    contents: [
      {
        genre: "newfunc",
        title: "課題手動追加に自動で現在の科目名とURLを入力するボタンの追加",
        explain:
          "課題手動追加に科目名とURLを自動で入力するボタンを追加しました。",
      },
      {
        genre: "newfunc",
        title:
          "アンケート回答完了ページ等で「アンケート一覧に戻る」ボタンを追加",
        explain:
          "アンケートの回答完了時などのページで「科目トップに戻る」ボタンの隣に「アンケート一覧に戻る」ボタンを追加します（cf. スクリーンショット）。自己評価アンケートに回答したり，アンケートのエラーページから戻ったりするときは，科目トップよりもアンケート一覧に戻りたいケースが多そうなので実装しました。",
      },
      {
        genre: "bugfix",
        title: "一部機能の追加・修正",
        explain:
          "より快適にScombZを使えるために、一部のスクリプトをより効率的なものに修正しました。また、一部の科目名がうまく取得できない問題を修正しました。",
      },
    ],
  },
  {
    version: "3.18.0",
    date: {
      firefox: "2023/2/3",
      chrome: "2023/2/3",
    },
    contents: [
      {
        genre: "newfunc",
        title: "オプションのインポート及びエクスポート機能の追加",
        explain:
          "オプションページで行う設定を、1つのファイルとしてエクスポートする機能を追加しました。また、その設定を一括で読み込むことができるインポート機能を実装しました。",
      },
      {
        genre: "newfunc",
        title: "一部機能の追加・修正",
        explain:
          "より快適にScombZを使えるために、一部のスクリプトをより効率的なものに修正しました。また、Beta版機能を使用できる開発者モードを追加しました。",
      },
    ],
  },
  {
    version: "3.17.1",
    date: {
      firefox: "2022/12/20",
      chrome: "2022/12/22",
    },
    contents: [
      {
        genre: "bugfix",
        title: "履修していない科目の科目ページに飛んだ際に起きるバグの修正",
        explain:
          "検索ページから履修していない科目のページなどに飛ぶと、普通ならあるはずの教材欄などがないためバグが発生したため、その周りの修正。",
      },
      {
        genre: "optimisation",
        title: "2023年度学年歴の適応",
        explain: "2023年度学年歴データを追加しました。",
      },
    ],
  },
  {
    version: "3.17.0",
    date: {
      firefox: "2022/12/17",
      chrome: "2022/12/19",
    },
    contents: [
      {
        genre: "bugfix",
        title:
          "「科目トップ」ページのタイトル変更において，科目名が適切に反映されないバグの修正",
        explain:
          "科目名に半角スペース（ ）が含まれている場合，タイトル名が正しく変更されないバグを修正しました。",
      },
      {
        genre: "newfunc",
        title: "科目ページに自作課題追加ボタンを追加",
        explain:
          "科目ページ下部に自作課題追加ボタンを表示されるようにしました。",
      },
    ],
  },
  {
    version: "3.16.0",
    date: {
      firefox: "2022/11/7",
      chrome: "2022/11/8",
    },
    contents: [
      {
        genre: "newfunc",
        title: "科目タイトル表示",
        explain:
          "科目トップページのタイトルを「科目トップ」→「（科目名） - 科目トップ」へ変更する機能を追加しました。",
      },
    ],
  },
  {
    version: "3.15.2",
    date: {
      firefox: "2022/10/22",
      chrome: "2022/10/22",
    },
    contents: [
      {
        genre: "bugfix",
        title: "アップデート内容がオプションに表示されない問題の修正",
        explain:
          "3.15.1のアップデートに伴うオプションが設定画面に表示されない問題を修正しました。",
      },
    ],
  },
  {
    version: "3.15.1",
    date: {
      firefox: "2022/10/21",
      chrome: "2022/10/21",
    },
    contents: [
      {
        genre: "optimisation",
        title: "ポップアップ課題表示設定追加",
        explain:
          "ポップアップについて、バッジにカウントする課題を残り日数に応じて制限する機能を追加しました。",
      },
      {
        genre: "bugfix",
        title: "Google連携機能の修正",
        explain:
          'Google連携機能で、同じ課題が何度も追加されてしまうバグに対するパッチを公開しました。<br><strong>このバグは自動で修正されないため、導入していただいている方は再度<a href="gas.html">初期設定</a>に従ってGAS URLを設定しなおしてください。</strong>',
      },
    ],
  },
  {
    version: "3.15.0",
    date: {
      firefox: "2022/10/19",
      chrome: "2022/10/19",
    },
    contents: [
      {
        genre: "newFunc",
        title: "ポップアップ課題表示",
        explain:
          "課題一覧には曜日タブの操作と同様に「課題」タブをクリックすることでアクセスでき、課題一覧には「未提出の課題」「未回答のアンケート」「Utilitiesで作成した自作課題」が表示されます。\nメニュー横課題一覧で非表示に設定した課題はポップアップ課題一覧にも表示されなくなります。\n課題の数分だけバッジが表示されるようになります。",
      },
      {
        genre: "optimisation",
        title: "ポップアップ改善",
        explain:
          "ポップアップ時間割にも設定「6限非表示」「7限非表示」「土曜非表示」が適用されるようになります",
      },
    ],
  },
  {
    version: "3.14.0",
    date: {
      firefox: "2022/10/7",
      chrome: "2022/10/9",
    },
    contents: [
      {
        genre: "newFunc",
        title: "Google連携機能の追加",
        explain:
          'Googleカレンダー・Google ToDo(リマインダー)と連携し、課題・アンケートをScombZにログインしていない状態やスマートフォンで確認できるようになりました。詳細は<a href="gas.html">こちら</a>',
      },
    ],
  },
  {
    version: "3.13.3",
    date: {
      firefox: "2022/10/3",
      chrome: "2022/10/3",
    },
    contents: [
      {
        genre: "bugfix",
        title: "バグ修正",
        explain:
          "課題一覧の表示方式を「残り時間 + 月/日 時:分」または「月/日 時:分」にすると、月の十の桁が消えてしまう問題の修正",
      },
    ],
  },
  {
    version: "3.13.2",
    date: {
      firefox: "2022/7/5",
      chrome: "2022/7/8",
    },
    contents: [
      {
        genre: "bugfix",
        title: "バグ修正",
        explain:
          "新機能関連のバグを修正、また使用しなくなったファイルを削除しました。",
      },
      {
        genre: "optimisation",
        title: "ADFS自動化",
        explain:
          "ADFSにワンタイムパスワードを設定している場合のユーザビリティを大幅に向上させました。",
      },
      {
        genre: "optimisation",
        title: "メモ削除確認",
        explain: "メモの削除時に確認画面を出すようにしました。",
      },
    ],
  },
  {
    version: "3.13.1",
    date: {
      firefox: "2022/6/28",
      chrome: "2022/6/30",
    },
    contents: [
      {
        genre: "bugfix",
        title: "バグ修正",
        explain: "新機能追加時に発生していたバグをいくつか修正しました。",
      },
    ],
  },
  {
    version: "3.13.0",
    date: {
      firefox: "2022/6/28",
      chrome: "2022/6/30",
    },
    contents: [
      {
        genre: "newFunc",
        title: "科目ページ内容の入れ替え",
        explain:
          "科目別ページにおいて、内容を自由に入れ替えできるようになりました。",
      },
      {
        genre: "newFunc",
        title: "一時非表示",
        explain:
          "教材、テスト、課題の一次非表示化、またそのためのボタンを追加しました。",
      },
    ],
  },
  {
    version: "3.12.1",
    date: {
      firefox: "2022/6/25",
      chrome: "2022/6/28",
    },
    contents: [
      {
        genre: "optimisation",
        title: "アンケート提出課題更新",
        explain: "アンケート提出時に課題一覧を更新するようにしました。",
      },
      {
        genre: "style",
        title: "ダークモード",
        explain: "ダークモードのスタイリングを修正しました。",
      },
      {
        genre: "optimisation",
        title: "自動調整機能",
        explain:
          "課題一覧の最大表示数を設定していない場合、自動で調整されるようになりました。",
      },
      {
        genre: "newFunc",
        title: "学番一時非表示",
        explain:
          "テスト結果閲覧画面で、学番をクリックすることで一時的に非表示にできるようになりました。",
      },
    ],
  },
  {
    version: "3.12.0",
    date: {
      firefox: "2022/6/22",
      chrome: "2022/6/24",
    },
    contents: [
      {
        genre: "newFunc",
        title: "科目ページメモ機能",
        explain:
          "科目別ページに、メモ機能を追加しました。マークダウン形式で記入できます。",
      },
      {
        genre: "newFunc",
        title: "設定項目名表示",
        explain: "設定に、オプションIDを併記するようにしました。",
      },
      {
        genre: "optimisation",
        title: "スマホ版設定",
        explain:
          "スマホに導入したときに、表示をスマホに最適化するようにしました。",
      },
    ],
  },
  {
    version: "3.11.2",
    date: {
      firefox: "2022/6/19",
      chrome: "2022/6/21",
    },
    contents: [
      {
        genre: "optimisation",
        title: "ADFS二段階認証修正",
        explain:
          "ADFSで二段階認証をオンにしているユーザー向けに、ワンタイムパスワード入力時はスキップボタンを押さないようにしました。",
      },
    ],
  },
  {
    version: "3.11.1",
    date: {
      firefox: "2022/6/15",
      chrome: "2022/6/16",
    },
    contents: [
      {
        genre: "newFunc",
        title: "Utilitiesからのお知らせ表示機能",
        explain:
          "Utilitiesからのお知らせを、ScombZのホーム・LMSに表示するようにしました。",
      },
      {
        genre: "optimisation",
        title: "回答したアンケートの非表示",
        explain: "回答済みのアンケートを再表示されないようにしました。",
      },
    ],
  },
  {
    version: "3.11.0",
    date: {
      firefox: "2022/6/14",
      chrome: "2022/6/16",
    },
    contents: [
      {
        genre: "newFunc",
        title: "過去アンケート表示機能",
        explain: "過去のアンケートを表示できる機能を追加しました。",
      },
      {
        genre: "optimisation",
        title: "アンケートリンク変更",
        explain:
          "課題一覧に表示されるアンケートのリンク先を、アンケートのある科目のページからアンケート本体に変更しました。",
      },
    ],
  },
  {
    version: "3.10.3",
    date: {
      firefox: "2022/6/13",
      chrome: "2022/6/16",
    },
    contents: [
      {
        genre: "style",
        title: "ダークモード",
        explain:
          "ダークモードで、一部の文字が背景と同化していて見えない問題を修正しました。",
      },
      {
        genre: "bugfix",
        title: "近日表示バグ",
        explain:
          "課題一覧で、n日以内のみ表示にしたとき、n日より長い期間で表示されるバグを修正しました。",
      },
      {
        genre: "bugfix",
        title: "自作課題連続追加バグ修正",
        explain:
          "課題一覧で、自作課題を何個も連続で追加する際に前回の入力データが残ったままになるバグを修正しました。",
      },
      {
        genre: "newFunc",
        title: "リリースノートとの連携",
        explain:
          "Utilitiesの設定画面からリリースノートへのリンクを追加しました。また、リリースノートからUtilitiesへのリンクを追加しました。",
      },
    ],
  },
  {
    version: "3.10.2",
    date: {
      firefox: "2022/6/13",
      chrome: "2022/6/15",
    },
    contents: [
      {
        genre: "newFunc",
        title: "自作課題追加",
        explain: "課題一覧に、自作の課題を追加できるようになりました。",
      },
      {
        genre: "optimisation",
        title: "ハイライト時間変更",
        explain:
          "課題一覧でのハイライトで、背景色が赤色になるのを6時間から12時間に変更しました。",
      },
      {
        genre: "bugfix",
        title: "課題表示限界",
        explain:
          "課題一覧で、終了しているはずの課題が表示される問題を修正しました。",
      },
    ],
  },
  {
    version: "3.10.1",
    date: {
      firefox: "2022/6/9",
      chrome: "2022/6/11",
    },
    contents: [
      {
        genre: "newFunc",
        title: "課題ハイライト",
        explain: "課題一覧を、提出期限で色をつけて目立たせるようにしました。",
      },
    ],
  },
  {
    version: "3.10.0",
    date: {
      firefox: "2022/6/8",
      chrome: "2022/6/11",
    },
    contents: [
      {
        genre: "newFunc",
        title: "カレンダーエクスポート",
        explain:
          "LMSデータと、学年歴データをカレンダー形式でエクスポートできるようになりました。",
      },
      {
        genre: "bugfix",
        title: "ダークモードのスタイリング",
        explain: "テスト画面で文字が見にくいバグを修正しました。",
      },
      {
        genre: "newFunc",
        title: "出席記録削除",
        explain: "出席記録を非表示にする機能を追加しました。",
      },
    ],
  },
  {
    version: "3.9.6",
    date: {
      firefox: "2022/6/7",
      chrome: "2022/6/9",
    },
    contents: [
      {
        genre: "bugfix",
        title: "軽微なバグ修正",
        explain:
          "ドラッグ&ドロップ提出時に複数ファイルの境目がわかりやすくなっていないのを修正しました。",
      },
    ],
  },
  {
    version: "3.9.5",
    date: {
      firefox: "2022/6/6",
      chrome: "2022/6/9",
    },
    contents: [
      {
        genre: "optimisation",
        title: "一定より先の課題の非表示",
        explain:
          "メニュー横課題一覧で、一定より先の課題を非表示にできる機能を追加しました。",
      },
    ],
  },
  {
    version: "3.9.4",
    date: {
      firefox: "2022/6/6",
      chrome: "2022/6/9",
    },
    contents: [
      {
        genre: "optimisation",
        title: "課題ページのレイアウト変更",
        explain:
          "課題提出時に、複数ファイルがあるとき境目がわかりやすくなりました。また、最大横幅が設定できるようになりました。",
      },
      {
        genre: "debug",
        title: "シラバス学科名表示",
        explain:
          "シラバスリンクを押して科目名一覧に行ったとき、学科名がうまく表示されないバグを修正しました。",
      },
    ],
  },
  {
    version: "3.9.3",
    date: {
      firefox: "2022/6/5",
      chrome: "2022/6/7",
    },
    contents: [
      {
        genre: "newFunc",
        title: "課題ファイル名自動入力ボタンの追加",
        explain:
          "お問い合わせで要望があった機能である、課題ファイル名自動入力を実装しました。テンプレートのファイル名を設定画面で追加することによって、ワンクリックで課題ファイル名を自動入力できます。",
      },
      {
        genre: "style",
        title: "当たり判定の調整",
        explain:
          "課題一覧で、短い課題名のものは課題名より長く当たり判定を取るように変更しました。",
      },
    ],
  },
  {
    version: "3.9.2",
    date: {
      firefox: "2022/6/4",
      chrome: "2022/6/7",
    },
    contents: [
      {
        genre: "style",
        title: "アンケートソート化",
        explain:
          "メニュー横課題一覧で、アンケート表示にしていた場合にアンケートだけが時間順でソートされず上部に表示されていたのを、課題一覧のなかでアンケートを含んでソートするように変更しました。",
      },
      {
        genre: "bugfix",
        title: "課題削除できないバグの修正",
        explain:
          "ドラッグ&ドロップ状態で提出しようとすると真っ白なページが開き課題削除できないという、ScombZ本体のバグを修正するモードを追加しました。これはUtilitiesのバグではないため、Utilitiesを導入していない状態でも発生することがあります。",
      },
    ],
  },
  {
    version: "3.9.1",
    date: {
      firefox: "2022/6/3",
      chrome: "2022/6/7",
    },
    contents: [
      {
        genre: "style",
        title: "ダークモードのスタイリング",
        explain:
          "ダークモードで、新機能のスタイリングがうまくいっていなかったのを修正しました。",
      },
      {
        genre: "bugfix",
        title: "課題一覧表示調整",
        explain:
          "メニュー横の課題一覧で、残り時間がずれて表示されることがある問題を修正しました。",
      },
      {
        genre: "bugfix",
        title: "予期せぬLPの修正",
        explain:
          "ブラウザ本体のアップデートなど、本来開く場面でない場面でもランディングページが開く問題を修正しました。",
      },
    ],
  },
  {
    version: "3.9.0",
    date: {
      firefox: "2022/6/3",
      chrome: "2022/6/6",
    },
    contents: [
      {
        genre: "newFunc",
        title: "任意の課題を非表示にできる機能",
        explain:
          "サイドメニュー横の課題一覧で、ユーザーが任意の課題・テスト・アンケートの表示を非表示にできる設定を追加しました。ここで非表示にした課題は、ScombZ Utilitiesの設定から再表示させることができます。",
      },
      {
        genre: "newFunc",
        title: "通知一括削除ボタンを追加",
        explain:
          "更新通知アイコンの隣に一括削除アイコンを設置します。ここをクリックすることにより更新通知をすべて既読状態にします。(この機能はデフォルトではオフに設定されています。)",
      },
      {
        genre: "newFunc",
        title: "初期化ボタンを追加",
        explain:
          "すべての設定と保存したデータを初期化するボタンを追加しました。ScombZ Utilitiesの設定画面からアクセスできます。",
      },
      {
        genre: "style",
        title: "崩れているレイアウトを修正",
        explain:
          "新規の更新通知がないときにレイアウトが崩れるのを修正しました。",
      },
      {
        genre: "newFunc",
        title: "ランディングページの追加",
        explain:
          "拡張機能のアップデート、インストール時に表示されるランディングページを追加しました。",
      },
      {
        genre: "else",
        title: "その他のアップデート",
        explain:
          "・公式サイトへのリンクを追加しました<br>・誤字を修正しました<br>・設定のスタイルを変更しました。",
      },
    ],
  },
  {
    version: "3.8.3",
    date: {
      firefox: "2022/5/31",
      chrome: "2022/6/1",
    },
    contents: [
      {
        genre: "newFunc",
        title: "ヘッダ中央のリンクを選択できるように",
        explain:
          "ヘッダ中央にあるアイコンのリンク先を、「home」,「lms」,「課題一覧」から選択できるようにしました。",
      },
      {
        genre: "bugfix",
        title: "バグ修正",
        explain:
          "更新ボタンを押すと何個もアンケート課題表示ボタンが生成される問題を修正しました。",
      },
      {
        genre: "optimisation",
        title: "課題一覧アンケートリンク先変更",
        explain:
          "・課題一覧に表示されるアンケートのリンクを踏んだ時にただの科目ページに飛んでていたのを科目ページのアンケート一覧に変更しました。",
      },
      {
        genre: "newFunc",
        title: "時間割カスタマイズ",
        explain:
          "LMSと簡易時間割の表示を、土曜日の非表示、6限の非表示、7限の非表示、講師名を教室名に置き換える、文字センタリングでカスタムできるようになりました。",
      },
      {
        genre: "news",
        title: "FireFox版のリリース",
        explain:
          "Chromeだけで提供していた本拡張機能をFireFox向けにリリースしました。",
      },
    ],
  },
  {
    version: "3.7.1",
    date: {
      firefox: "Not Released",
      chrome: "2022/5/29",
    },
    contents: [
      {
        genre: "newFunc",
        title: "課題一覧アンケート表示",
        explain:
          "課題一覧に任意の科目のアンケートを表示できるようになりました。",
      },
      {
        genre: "newFunc",
        title: "課題ドラッグ&ドロップ提出",
        explain:
          "課題を最初からドラッグ＆ドロップで提出する画面にできるようになりました。",
      },
      {
        genre: "style",
        title: "ダークモードスタイル修正",
        explain: "ダークモードでアンケート課題表示ボタンの色を修正しました。",
      },
      {
        genre: "style",
        title: "最新のChromeバグによる表示調整",
        explain:
          "最新のChromeで、サイドメニュー展開時に真っ黒になる問題を修正しました。",
      },
    ],
  },
  {
    version: "3.6.13",
    date: {
      firefox: "Not Released",
      chrome: "2022/5/26",
    },
    contents: [
      {
        genre: "newFunc",
        title: "アンケートスタイル変更",
        explain:
          "アンケート画面もテストやレポート提出と同じようにユーザビリティに配慮したボタンにしました。また、入力欄の高さを自由に変えられるようにしました。",
      },
      {
        genre: "newFunc",
        title: "メモにリンクを含められるように",
        explain:
          "メモに[[URL]]といった形式で書くことによってリンクを含められるようになりました。",
      },
      {
        genre: "newFunc",
        title: "名前クリック非表示",
        explain:
          "右上の履修者名をクリックすると一時的に非表示にできるようになりました。",
      },
      {
        genre: "style",
        title: "ロゴ画像をsvgに変更",
        explain: "ロゴ画像をpng形式からsvg形式に変更しました。",
      },
      {
        genre: "style",
        title: "ログインメニューネコ表示",
        explain: "ログインページのネコの主張を激しくしました。",
      },
      {
        genre: "bugfix",
        title: "課題が取得できないバグの修正",
        explain:
          "課題再取得スパン経過時に非ログイン状態の時、課題がうまく取得できないバグの修正を行いました。",
      },
      {
        genre: "style",
        title: "課題表示が崩れるバグの修正",
        explain:
          "時間や課題の表示が長いとき課題表示が崩れるスタイルの修正を行いました。",
      },
      {
        genre: "newFunc",
        title: "課題の表示数を選択できるように",
        explain:
          "設定画面から課題の表示数を選択できるようになりました。表示が多すぎると画面からはみ出るので、調整してください。",
      },
      {
        genre: "newFunc",
        title: "課題表示で科目名をクリックして飛べるように",
        explain:
          "要望に合ったように、課題表示で科目名をクリックして科目詳細ページに飛べるようになりました。",
      },
      {
        genre: "newFunc",
        title: "ダークモード追加",
        explain:
          "ダークモードを追加しました。適用タイミングは設定から変更できます。",
      },
      {
        genre: "newFunc",
        title: "時間割ポップアップ表示",
        explain:
          "拡張機能アイコンをクリックすることによって、時間割をポップアップ表示できるようになりました。",
      },
      {
        genre: "newFunc",
        title: "カスタムCSS機能",
        explain:
          "カスタムCSS機能を追加しました。ユーザー独自のCSSを追加できます。",
      },
      {
        genre: "newFunc",
        title: "課題時間相対表示",
        explain: "課題提出までの残り時間の相対表示ができるようになりました。",
      },
      {
        genre: "newFunc",
        title: "メモ機能",
        explain:
          "ユーザー独自に追加できるメモをメニュー横に貼り付けられるようになりました。",
      },
      {
        genre: "style",
        title: "バナーのシャドウ変更",
        explain:
          "ページ上部に表示されるバナーの影を透明度のある自然なものに変更しました。",
      },
      {
        genre: "newFunc",
        title: "サイドメニュー調整",
        explain:
          "サイドメニューに常にお知らせ・アンケートへのリンクを表示させるようにし、リンク先をホームのお知らせ・アンケートではなく個別ページに変更しました。",
      },
      {
        genre: "else",
        title: "バグ修正",
        explain: "その他のバグ修正等を行いました。",
      },
    ],
  },
  {
    version: "3.3.0",
    date: {
      firefox: "Not Released",
      chrome: "2022/5/13",
    },
    contents: [
      {
        genre: "bugfix",
        title: "Windowsでインストールできないバグを修正",
        explain:
          "Windows版Chromeと、Chromium系列ブラウザでインストールできないバグを修正しました。",
      },
      {
        genre: "newFunc",
        title: "課題表示",
        explain: "メニュー横に課題一覧を表示できるようにしました。",
      },
      {
        genre: "style",
        title: "レポート提出・テストでのUI変更",
        explain:
          "レポート提出・テスト画面でボタンのUIをユーザビリティに配慮した者に変更しました。",
      },
      {
        genre: "newFunc",
        title: "課題提出時間簡易入力",
        explain:
          "課題提出画面で作成時間がボタンとバーによって簡易入力できるようになりました。",
      },
      {
        genre: "style",
        title: "遷移時の画面のちらつき軽減",
        explain:
          "ページ遷移時に動的な読み込みによって画面がちらつく問題が軽減されました。",
      },
      {
        genre: "newFunc",
        title: "ホイールクリック",
        explain:
          "LMS、お知らせ、添付ファイルなどでホイールクリックで新規タブで開けるようになりました。",
      },
      {
        genre: "optimisation",
        title: "シラバスリンクの強化",
        explain: "シラバスリンクの精確性の向上と、表示分岐を追加しました。",
      },
      {
        genre: "else",
        title: "その他のスタイル変更・バグ修正",
        explain: "多くのバグ修正・スタイル調整を行いました。",
      },
    ],
  },
  {
    version: "3.2.1",
    date: {
      firefox: "Not Released",
      chrome: "2022/5/12",
    },
    contents: [
      {
        genre: "newFunc",
        title: "ダイアログ拡大表示",
        explain:
          "お知らせなどのダイアログが画面幅に合わせて大きく表示されるようになりました。それに伴って、ダイアログ外をクリックしてもダイアログを閉じられるようになりました。",
      },
      {
        genre: "newFunc",
        title: "旧Scombログイン",
        explain: "旧Scombにログインボタンを復活させました。",
      },
      {
        genre: "style",
        title: "芝猫表示",
        explain:
          "旧Scombと同様に、ログインページで芝猫が表示されるようになりました。(この設定はオフにできません。)",
      },
      {
        genre: "newFunc",
        title: "カレンダー提出済み課題非表示",
        explain:
          "ホームにあるカレンダーで、提出済みの課題を非表示にできるようにしました。",
      },
    ],
  },
  {
    version: "2.5.4",
    date: {
      firefox: "Not Released",
      chrome: "2022/4/30",
    },
    contents: [
      {
        genre: "optimisation",
        title: "シラバス検索精度向上",
        explain: "シラバスの検索精度が向上しました。",
      },
      {
        genre: "optimisation",
        title: "時間割特殊履修対応",
        explain:
          "メニュー横の時間割表が、集中講座等の不特定時間に開講される授業に対応しました。",
      },
      {
        genre: "bigfix",
        title: "シラバスリンク表示調整",
        explain:
          "シラバスボタンが科目外ページでも出現する不具合を修正しました。",
      },
    ],
  },
  {
    version: "2.5.0",
    date: {
      firefox: "Not Released",
      chrome: "2022/4/29",
    },
    contents: [
      {
        genre: "newFunc",
        title: "シラバスリンク挿入",
        explain:
          "科目詳細ページからシラバスへのリンクが表示されるようになりました。",
      },
      {
        genre: "optimisation",
        title: "時間割クォーター対応",
        explain: "メニュー横時間割がクォーター制授業に対応しました。",
      },
      {
        genre: "bugfix",
        title: "バグ修正",
        explain:
          "メニューでおこる読み込み時の不具合を修正しました。その他、ScombZ自体の仕様変更などによる細かな不具合を修正しました。",
      },
    ],
  },
  {
    version: "2.0.0",
    date: {
      firefox: "Not Released",
      chrome: "2022/4/28",
    },
    contents: [
      {
        genre: "newFunc",
        title: "メニュー横時間割表示",
        explain:
          "ウィンドウ幅が一定以上のサイズでサイドメニューを展開したとき、右側に時間割が表示されるようになりました。",
      },
    ],
  },
  {
    version: "1.0.0",
    date: {
      firefox: "Not Released",
      chrome: "2022/4/27",
    },
    contents: [
      {
        genre: "release",
        title: "拡張機能リリース",
        explain:
          "ユーザースクリプト向けに開発していた本拡張機能をChrome拡張機能に移植して公開しました。",
      },
    ],
  },
];
