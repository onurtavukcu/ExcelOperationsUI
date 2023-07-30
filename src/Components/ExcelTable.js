import { useState } from "react";
import { BsSortAlphaDown, BsSortAlphaUp } from "react-icons/bs";
import "./Table.css";

export default function ExcelTable(props) {
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState(false);

  console.log(props);

  const filteredData =
    props.body &&
    props.body
      .filter((items) =>
        items.some((item) =>
          (item?.key || item?.props?.searchableText || item)
            .toString()
            .toLocaleLowerCase("TR")
            .includes(search.toLocaleLowerCase("TR"))
        )
      )
      .sort((a, b) => {
        if (sorting?.orderBy === "asc") {
          return (
            a[sorting.key]?.key ||
            a[sorting.key]?.props?.searchableText ||
            a[sorting.key]
          )
            .toString()
            .localeCompare(
              b[sorting.key]?.key ||
                b[sorting.key]?.props?.searchableText ||
                b[sorting.key]
            );
        }
        if (sorting?.orderBy === "desc") {
          return b[sorting.key].toString().localeCompare(a[sorting.key]);
        }
        return null;
      });

  if (!props.body || props.body?.length === 0) {
    return <div>Gösterilecek veri bulunmuyor.</div>;
  }

  return (
    <>
      {props.searchable && (
        <div className="searchContainer">
          <div className="search">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Tabloda ara"
            />
          </div>
          <div className="CancelSort">
            {sorting && (
              <button onClick={() => setSorting(false)}>
                Sıralamayı İptal Et
              </button>
            )}
          </div>
        </div>
      )}
      {
        <div className="ReactTable">
          <table>
            <thead>
              <tr>
                {props.head.map((h, key) => (
                  <th width={h?.width} key={key}>
                    <div className="tableHeader">
                      {h.name}
                      {h.sortable && (
                        <button
                          onClick={() => {
                            if (sorting?.key === key) {
                              setSorting({
                                key,
                                orderBy:
                                  sorting.orderBy === "asc" ? "desc" : "asc",
                              });
                            } else {
                              setSorting({
                                key,
                                orderBy: "asc",
                              });
                            }
                          }}
                        >
                          <div className="OrderBy">
                            {sorting?.key === key &&
                              (sorting.orderBy === "asc" ? (
                                <BsSortAlphaDown className="OrderBy" />
                              ) : (
                                <BsSortAlphaUp className="OrderBy" />
                              ))}
                            {sorting?.key !== key && (
                              <BsSortAlphaDown className="OrderBy" />
                            )}
                          </div>
                        </button>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((items, key) => (
                <tr className="group" key={key}>
                  {items.map((item, key) => (
                    <td key={key}>
                      {Array.isArray(item) ? <div>{item}</div> : item}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
    </>
  );
}
