import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Star, GitFork, Circle } from "lucide-react";

interface RepositoryCardProps {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  ownerAvatar: string;
  ownerName: string;
  url: string;
}

const RepositoryCard = ({
  name = "react",
  description = "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
  stars = 12345,
  forks = 2345,
  language = "JavaScript",
  ownerAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=react",
  ownerName = "facebook",
  url = "https://github.com/facebook/react",
}: RepositoryCardProps) => {
  return (
    <Card className="w-[380px] h-[280px] bg-white flex flex-col justify-between">
      <CardHeader className="pb-2">
        <div className="flex items-start gap-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={ownerAvatar} alt={ownerName} />
            <AvatarFallback>{ownerName[0]}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h3 className="font-semibold text-lg leading-none truncate">
              {ownerName}/{name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400" />
            <span className="text-sm">{stars.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <GitFork className="h-4 w-4 text-gray-500" />
            <span className="text-sm">{forks.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Circle className="h-3 w-3 fill-current text-blue-500" />
            <span className="text-sm">{language}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          variant="outline"
          onClick={() => window.open(url, "_blank")}
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          View on GitHub
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RepositoryCard;
