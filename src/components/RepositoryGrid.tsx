import React from "react";
import RepositoryCard from "./RepositoryCard";
import StatusMessage from "./StatusMessage";

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

interface RepositoryGridProps {
  repositories?: Repository[];
  isLoading?: boolean;
  error?: string;
}

const defaultRepositories: Repository[] = [
  {
    name: "react",
    description:
      "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
    stars: 12345,
    forks: 2345,
    language: "JavaScript",
    ownerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=react",
    ownerName: "facebook",
    url: "https://github.com/facebook/react",
  },
  {
    name: "vue",
    description:
      "Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.",
    stars: 8765,
    forks: 1234,
    language: "JavaScript",
    ownerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=vue",
    ownerName: "vuejs",
    url: "https://github.com/vuejs/vue",
  },
  {
    name: "angular",
    description: "One framework. Mobile & desktop.",
    stars: 7654,
    forks: 987,
    language: "TypeScript",
    ownerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=angular",
    ownerName: "angular",
    url: "https://github.com/angular/angular",
  },
];

const RepositoryGrid = ({
  repositories = defaultRepositories,
  isLoading = false,
  error = "",
}: RepositoryGridProps) => {
  if (isLoading) {
    return (
      <div className="w-full max-w-7xl mx-auto p-6 bg-gray-50">
        <StatusMessage type="loading" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-7xl mx-auto p-6 bg-gray-50">
        <StatusMessage type="error" message={error} />
      </div>
    );
  }

  if (repositories.length === 0) {
    return (
      <div className="w-full max-w-7xl mx-auto p-6 bg-gray-50">
        <StatusMessage
          type="warning"
          title="No Results"
          message="No repositories found matching your search criteria."
        />
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {repositories.map((repo, index) => (
          <RepositoryCard
            key={`${repo.ownerName}-${repo.name}-${index}`}
            {...repo}
          />
        ))}
      </div>
    </div>
  );
};

export default RepositoryGrid;
