import { Post } from "../../types/database.mjs";
import AnchorTargetBlank from "../anchor-target-blank";
import Styles from "./card.module.css";
import classNames from "classnames";
import { LazyLoadImage } from "react-lazy-load-image-component";

type Props = {
  post: Post;
};

export function Card({ post }: Props) {
  return (
    <div className={classNames("card", Styles.Card)}>
      <div className={classNames("card-image")}>
        <AnchorTargetBlank href={post.url}>
          <figure className="image">
            <LazyLoadImage
              className={Styles.CardImage}
              src={post.thumbnail}
              alt={post.title}
              loading="lazy"
            />
          </figure>
        </AnchorTargetBlank>
      </div>
      <div className="card-content">
        <div className="content has-text-left">
          <AnchorTargetBlank className={Styles.CardTitle} href={post.url}>
            {post.title}
          </AnchorTargetBlank>
        </div>
        <div className={classNames("media", Styles.CardMedia)}>
          <div className="media-left">
            <figure className="image">
              <LazyLoadImage
                className={Styles.CardAvatar}
                src={`${post.author_avatar}?d=mm&r=g`}
                alt="avatar"
              />
            </figure>
          </div>
          <div className="media-content has-text-left">{post.author_name}</div>
          <div className="media-right">{post.date}</div>
        </div>
      </div>
    </div>
  );
}
