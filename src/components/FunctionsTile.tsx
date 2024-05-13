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
              width: "100%",
              height: "100%",
              display: "flex",
              maxWidth: "700px",
              margin: "0 auto",
              justifyContent: "center",
              alignItems: "center",
              py: "10px",
            })}
          >
            <div
              className={css({
                width: "calc(100% - 20px)",
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
          </div>
        ))}
      </div>
    </>
  );
};
