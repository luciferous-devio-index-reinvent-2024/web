import AnchorTargetBlank from "../anchor-target-blank";
import classNames from "classnames";

type Props = {
  isActive: boolean;
  functionClose: () => void;
};

const urlIssue: string =
  "https://github.com/luciferous-devio-index-reinvent-2023/web/issues";

export function ModalAbout(props: Props) {
  const issue = <AnchorTargetBlank href={urlIssue}>Issue</AnchorTargetBlank>;
  const link = <AnchorTargetBlank href={urlIssue}>リンク</AnchorTargetBlank>;

  return (
    <div className={classNames("modal", { "is-active": props.isActive })}>
      <div className="modal-background" onClick={props.functionClose} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">About</p>
        </header>
        <section className="modal-card-body">
          <p className="mb-2">
            DevelopersIOにおけるre:Invent 2023の記事は非常に多数あります。
          </p>
          <p className="mb-2">
            どんなものがあるか探そうとするとなかなか難しいので索引となるサイトを作ってみました。
          </p>
          <p className="mb-2">
            要望や問い合わせはGithubの{issue}にお願いします。 ({link})
          </p>
        </section>
        <footer className="modal-card-foot is-justify-content-end">
          <button
            type="button"
            className="button"
            onClick={props.functionClose}
          >
            close
          </button>
        </footer>
      </div>
    </div>
  );
}
