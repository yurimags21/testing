import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search, Github } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";

interface SearchHeaderProps {
  onSearch?: (query: string) => void;
  suggestions?: string[];
  isLoading?: boolean;
}

const SearchHeader = ({
  onSearch = () => {},
  suggestions = ["react", "vue", "angular", "svelte", "nextjs"],
  isLoading = false,
}: SearchHeaderProps) => {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSearch = () => {
    onSearch(query);
    setOpen(false);
  };

  return (
    <header className="w-full h-20 bg-white border-b border-gray-200 px-4 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto h-full flex items-center gap-4">
        <Github className="h-8 w-8" />
        <div className="relative flex-1 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              className="w-full pl-10 pr-4"
              placeholder="Search repositories..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onClick={() => setOpen(true)}
            />
          </div>

          <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Type to search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                {suggestions.map((suggestion) => (
                  <CommandItem
                    key={suggestion}
                    onSelect={() => {
                      setQuery(suggestion);
                      handleSearch();
                    }}
                  >
                    <Search className="mr-2 h-4 w-4" />
                    {suggestion}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </CommandDialog>
        </div>

        <Button onClick={handleSearch} disabled={isLoading}>
          {isLoading ? "Searching..." : "Search"}
        </Button>
      </div>
    </header>
  );
};

export default SearchHeader;
