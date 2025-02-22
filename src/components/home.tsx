import React, { useState } from "react";
import SearchHeader from "./SearchHeader";
import RepositoryGrid from "./RepositoryGrid";

interface Repository {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  ownerAvatar: string;
  ownerName: string;
  url: string;
}

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query: string) => {
    if (!query.trim()) return;

    setIsLoading(true);
    setError("");
    setHasSearched(true);

    try {
      // Simulated API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock data - in a real app, this would be replaced with actual API call
      const mockRepositories: Repository[] = [
        {
          name: query,
          description: `This is a sample repository for ${query}`,
          stars: Math.floor(Math.random() * 10000),
          forks: Math.floor(Math.random() * 1000),
          language: "TypeScript",
          ownerAvatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${query}`,
          ownerName: "sample-org",
          url: `https://github.com/sample-org/${query}`,
        },
      ];

      setRepositories(mockRepositories);
    } catch (err) {
      setError("Failed to fetch repositories. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SearchHeader
        onSearch={handleSearch}
        isLoading={isLoading}
        suggestions={["react", "vue", "angular", "nextjs", "vite"]}
      />

      <main className="pt-24 pb-8 px-4">
        {!hasSearched ? (
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Search GitHub Repositories
            </h1>
            <p className="text-gray-600">
              Enter a search term above to find repositories on GitHub. Try
              searching for frameworks, libraries, or tools.
            </p>
          </div>
        ) : (
          <RepositoryGrid
            repositories={repositories}
            isLoading={isLoading}
            error={error}
          />
        )}
      </main>
    </div>
  );
};

export default Home;
