import { TabNav, TabNavItem, Text } from "vcc-ui";

type FilterCarTabNavProps = {
  filter: string;
  setFilter: (bodyType: string) => void;
  options: string[];
};

function FilterCarTabNav({ filter, setFilter, options }: FilterCarTabNavProps) {
  return (
    <TabNav enableLineTransition>
      <TabNavItem
        isActive={filter === "all"}
        onClick={() => {
          setFilter("all");
        }}
      >
        <Text extend={{ onlyS: { fontSize: "0.8rem" } }}>ALL</Text>
      </TabNavItem>
      {options.map((item) => {
        return (
          <TabNavItem
            key={item}
            isActive={item === filter}
            onClick={() => {
              setFilter(item);
            }}
          >
            <Text
              extend={{
                onlyS: { fontSize: "0.8rem" },
              }}
            >
              {item.toUpperCase()}
            </Text>
          </TabNavItem>
        );
      })}
    </TabNav>
  );
}

export default FilterCarTabNav;
