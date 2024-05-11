import { css } from "../../styled-system/css";
import { MdDownload } from "react-icons/md";

export const WideHeader = () => {
  return (
    <div
      className={css({
        position: "sticky",
        top: 0,
        zIndex: 100,
        left: 0,
        background: "white",
        padding: "14px 40px",
        boxShadow:
          "rgb(60 64 67 / 10%) 0px 1px 2px, rgb(60 64 67 / 10%) 0px 2px 6px 2px",
        backdropFilter: "blur(10px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "@media (max-width: 767px)": {
          display: "none",
        },
      })}
    >
      <a href="/" className={css({ width: "fit-content", display: "block" })}>
        <h1
          className={css({
            fontSize: "20px",
            display: "block",
            width: "fit-content",
          })}
        >
          ScombZ Utilities
        </h1>
      </a>
      <div
        className={css({
          display: "flex",
          justifyContent: "flex-end",
          gap: 8,
          alignItems: "center",
        })}
      >
        <div className={css({ display: "flex", gap: 5, alignItems: "center" })}>
          <a
            href="/release"
            className={css({
              color: "black",
              textDecoration: "none",
              display: "block",
              width: "fit-content",
            })}
          >
            更新情報
          </a>
          <a
            href="/about"
            className={css({
              color: "black",
              textDecoration: "none",
              display: "block",
              width: "fit-content",
            })}
          >
            機能
          </a>
          <a
            href="/privacy_policy"
            className={css({
              color: "black",
              textDecoration: "none",
              display: "block",
              width: "fit-content",
            })}
          >
            プライバシーポリシー
          </a>
          <a
            href="/request"
            className={css({
              color: "black",
              textDecoration: "none",
              display: "block",
              width: "fit-content",
            })}
          >
            要望
          </a>
        </div>
        <a
          href="/"
          className={css({
            color: "white",
            background: "black",
            fontWeight: "bold",
            padding: "6px 10px",
            borderRadius: "4px",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 1,
            width: "fit-content",
          })}
        >
          <MdDownload
            className={css({
              fontSize: "22px",
              display: "inline-block",
              verticalAlign: "middle",
            })}
          />
          インストール
        </a>
      </div>
    </div>
  );
};
