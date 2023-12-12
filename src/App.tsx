import Styles from "./App.module.css";
import Card from "./components/card";
import ModalAbout from "./components/modal-about";
import ModalFilter from "./components/modal-filter";
import Navbar, { NavbarMenuItem } from "./components/navbar";
import { FilterCondition } from "./types/filter.mjs";
import { execFilter } from "./usecases/filter/filter.mjs";
import classNames from "classnames";
import { useState } from "react";

function App() {
  const menuItems: NavbarMenuItem[] = [
    {
      text: "about",
      onClick: () => setShowModalAbout(true),
    },
  ];

  const [condition, setCondition] = useState<FilterCondition>({
    categories: [],
    tags: [],
  });
  const [showModalFilter, setShowModalFilter] = useState(false);
  const [showModalAbout, setShowModalAbout] = useState(false);

  const filtered = execFilter(condition);
  const cards = filtered.posts.map((x) => <Card post={x} key={x.url} />);

  return (
    <>
      <Navbar menuItems={menuItems} />
      <section>
        <div className="container">
          <button
            type="button"
            className={classNames("button", Styles.FilterButton)}
            onClick={() => setShowModalFilter(true)}
          >
            filter
          </button>
          <span className={Styles.CountTop}>
            ({filtered.count.filtered}/{filtered.count.all})
          </span>
          <hr />
          <div className="has-text-centered">{cards}</div>
        </div>
      </section>
      <ModalFilter
        isActive={showModalFilter}
        categories={filtered.categories}
        tags={filtered.tags}
        count={filtered.count}
        functionClose={() => setShowModalFilter(false)}
        functionUpdate={(x) => setCondition(x)}
      />
      <ModalAbout
        isActive={showModalAbout}
        functionClose={() => setShowModalAbout(false)}
      />
    </>
  );
}

export default App;
