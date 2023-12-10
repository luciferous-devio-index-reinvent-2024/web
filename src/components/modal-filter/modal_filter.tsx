import { FilterItem, FilterCondition } from "../../types/filter.mjs";
import classNames from "classnames";

type Props = {
  isActive: boolean;
  categories: FilterItem[];
  tags: FilterItem[];
  functionClose: () => void;
  functionUpdate: (condition: FilterCondition) => void;
};

const TypeNames = {
  categories: "categories",
  tags: "tags",
};

const elementId = {
  category: "filter-category",
  tag: "filter-tag",
};

export function ModalFilter(props: Props) {
  const onReset = () => {
    uncheckCheckboxes(elementId.category);
    uncheckCheckboxes(elementId.tag);
    props.functionUpdate({
      categories: [],
      tags: [],
    });
  };
  const onChange = (): void => {
    const condition: FilterCondition = {
      categories: getCheckedValues(elementId.category),
      tags: getCheckedValues(elementId.tag),
    };
    props.functionUpdate(condition);
  };
  const checkboxesCategory = createCheckboxes(
    props.categories,
    TypeNames.categories,
    onChange,
  );
  const checkboxesTag = createCheckboxes(
    props.tags.filter((x) => x.count > 0),
    TypeNames.categories,
    onChange,
  );

  return (
    <div className={classNames("modal", { "is-active": props.isActive })}>
      <div className="modal-background" onClick={props.functionClose} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Filter</p>
        </header>
        <section className="modal-card-body">
          <div id={elementId.category}>
            <h2 className="subtitle">Category</h2>
            {checkboxesCategory}
          </div>
          <hr />
          <div id={elementId.tag}>
            <h2 className="subtitle">Tag</h2>
            {checkboxesTag}
          </div>
        </section>
        <footer className="modal-card-foot is-justify-content-end">
          <div className="buttons">
            <button type="button" className="button" onClick={onReset}>
              reset
            </button>
            <button
              type="button"
              className="button"
              onClick={props.functionClose}
            >
              close
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

function createCheckboxes(
  items: FilterItem[],
  typeName: string,
  functionUpdate: () => void,
) {
  return items.map((x) => (
    <label className="checkbox mr-5" key={`${typeName}:${x.text}`}>
      <input
        type="checkbox"
        className="mr-1"
        value={x.text}
        disabled={x.count === 0}
        onChange={functionUpdate}
      />
      {x.text}
      {isNaN(x.count) ? "" : ` (${x.count})`}
    </label>
  ));
}

function getCheckedValues(id: string): string[] {
  const result: string[] = [];
  const allElms = window.document.querySelectorAll<HTMLInputElement>(
    `#${id} input`,
  );

  for (const elm of allElms) {
    if (elm.checked) {
      result.push(elm.value);
    }
  }

  return result;
}

function uncheckCheckboxes(id: string) {
  const allElms = window.document.querySelectorAll<HTMLInputElement>(
    `#${id} input`,
  );
  for (const elm of allElms) {
    elm.checked = false;
  }
}
