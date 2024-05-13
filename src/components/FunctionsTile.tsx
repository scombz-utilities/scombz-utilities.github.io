import { css } from "../../styled-system/css";
import "@fontsource/zen-kaku-gothic-new";

type FunctionCard = {
  title: string;
  description: string[];
  image?: string;
};

const functionCards: FunctionCard[] = [
  {
    title: "直感的なUI",
    description: [
      "課題提出画面など、あらゆる場面で直感的なUIへと変更しています。",
      "提出ボタンや解答ボタンは青く目立たせ、文字以外の情報でストレスなくScombZを使用できます。",
    ],
    image: "/about/report.png",
  },
  {
    title: "テストの誤操作防止",
    description: [
      "1分ごとに自動的に解答内容が保存されるため、送信に失敗しても解答内容を大きく失うことはありません。",
      "また、テスト解答中に他の画面に移動しようとすると、確認ダイアログが表示されるため誤移動を防止します。",
    ],
  },
  {
    title: "課題一覧にアンケートの表示",
    description: [
      "表示登録した科目のアンケートを課題一覧に表示させることができるため、授業の感想などをアンケートで提出する必要がある科目などでも提出忘れを防止できます。",
      "科目詳細の最上部のトグルスイッチから、表示登録を行うことができます。",
    ],
    image: "/about/syllbtn.png",
  },
  {
    title: "ログインの自動化",
    description: [
      "未ログイン状態で表示される「学生ログイン」やADFS二段階認証確認画面の「次へ」ボタンを自動でクリックします。",
      "また、ログイン情報を保存することで学籍番号やパスワードを自動で入力します。",
    ],
    image: "/about/login.png",
  },
  {
    title: "URLをハイパーリンクに",
    description: [
      "授業詳細ページ内にあるURLで、ハイパーリンクになっていないものをハイパーリンクに変更します。",
      "zoomや授業資料等にシームレスにアクセスできます。",
    ],
    image: "/about/changeURL.png",
  },
  {
    title: "大きくて見やすいお知らせ",
    description: [
      "小さくて見づらいお知らせダイアログをページいっぱいまで表示させます。",
      "また、お知らせダイアログの外側をクリックして閉じることもできます。",
    ],
    image: "/about/dialog.jpg",
  },
  {
    title: "右クリック/ホイールクリック",
    description: [
      "LMSページ内の科目ボタン、科目別ページのダウンロードリンクなど、右クリックが通常できないリンクを通常のリンクと同じようにサポートします。",
    ],
    image: "/about/contextMenu.png",
  },
  {
    title: "ファイルの一括DL",
    description: [
      "科目詳細ページ内において、配布されているすべてのpdfファイルをZIP形式に圧縮し一括でダウンロードする機能。",
      "各回ごとにダウンロードすることもでき、こちらはpdfに限定されません。",
    ],
  },
  {
    title: "シラバスの学科保存",
    description: [
      "シラバスの入学年度・学科を保存し、簡単にシラバスを閲覧できるようにします。",
    ],
    image: "/about/syllabus.png",
  },
  {
    title: "学バス時刻表表示",
    description: [
      "大宮キャンパスと東大宮駅間のバスの簡易時刻表を表示します。",
      "既に出発済みのバスはグレーで表示され、直近2時間以内の発車予定が一目でわかります。",
      "学バス公式時刻表へのリンクアイコンも設置しています。",
    ],
    image: "/about/bus.png",
  },
  {
    title: "自作課題作成",
    description: [
      "課題一覧に、自作の課題を追加できます。",
      "ScombZ Utilitiesの課題一覧に表示されるため、他の課題と同じように課題へのリマインドができます。",
    ],
    image: "/about/originalTask.png",
  },

  {
    title: "わかりやすい設定画面",
    description: [
      "詳細設定では多くの項目を設定できる上、かんたん設定ではおすすめの機能を簡単に設定できます。",
    ],
    image: "/about/settings.png",
  },
  {
    title: "英語対応",
    description: [
      "ScombZ Utilitiesは日本語のほか英語にも対応しています。(v4.0.0~)",
      "ブラウザの言語設定が英語の場合、自動的に英語表示に切り替わります。",
    ],
    image: "/about/i18n.png",
  },
  {
    title: "S*gsot学番自動入力",
    description: [
      "S*gsotに学籍番号を自動で入力します。",
      "ScombZの自動ログインが有効になっている場合、認証も自動的に行います。",
    ],
  },
  {
    title: "カスタムCSS",
    description: [
      "ScombZのデザインを自分好みにカスタマイズできます。",
      "フォントや背景色、ボタンの色などを変更できます。",
    ],
  },
];

export const FunctionsTile = () => {
  return (
    <>
      <div
        className={css({
          width: "100%",
          maxWidth: "1920px",
          margin: "0 auto",
          height: "100%",
          display: "grid",
          gridTemplateColumns: 1,
          lg: {
            gridTemplateColumns: "repeat(2, 1fr)",
          },
          xl: {
            gridTemplateColumns: "repeat(3, 1fr)",
          },
          rowGap: 3,
        })}
      >
        {functionCards.map((card, idx) => (
          <div
            key={idx}
            className={css({
              my: "10px",
              boxShadow: "1px 1px 6px rgba(0, 0, 0, 0.2)",
              borderRadius: "10px",
              display: "grid",
              gridTemplateColumns: "100%",
              sm: { gridTemplateColumns: card.image ? "60% 40%" : "100%" },
              gap: 0,
              minHeight: "250px",
            })}
          >
            <div
              className={css({
                width: "100%",
                height: "100%",
                py: 3,
                px: 5,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              })}
            >
              <h3
                className={css({
                  fontFamily: "Zen Kaku Gothic New",
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  mb: 1,
                })}
              >
                {card.title}
              </h3>
              {card.description.map((d) => (
                <div key={d} className={css({ px: 2 })}>
                  <p
                    className={css({
                      fontFamily: "Zen Kaku Gothic New",
                      fontSize: "1rem",
                    })}
                  >
                    {d}
                  </p>
                </div>
              ))}
            </div>
            {card.image && (
              <div
                className={css({
                  width: "100%",
                  height: "100%",
                  borderTop: "2px solid #bbb",
                  sm: {
                    borderTop: "none",
                  },
                })}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className={css({
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "0 0 10px 10px",
                    maxHeight: "300px",
                    sm: {
                      maxHeight: "none",
                      borderRadius: "0 10px 10px 0",
                    },
                  })}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
