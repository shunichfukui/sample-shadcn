import Link from "next/link";
import { Search, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
          <div
            className="h-[500px] bg-cover bg-center"
            style={{
              backgroundImage: "url('/placeholder.svg?height=500&width=1200')",
            }}
          />
          <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Find Your Perfect Poker Spot
            </h1>
            <p className="mt-4 max-w-2xl text-lg sm:text-xl">
              Discover, review, and share the best poker shop in your area
            </p>
            <div className="mt-8 w-full max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search for poker shop..."
                  className="pl-10 bg-white/90 text-black placeholder:text-gray-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured shop */}
        <section className="container py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Featured shop</h2>
            <Link href="/shop" className="text-primary hover:underline">
              View all shop
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredShop.map((shop) => (
              <Link href={`/shops/${shop.id}`} key={shop.id}>
                <Card className="overflow-hidden h-full transition-all hover:shadow-md">
                  <div className="aspect-video relative">
                    <div className="absolute top-2 right-2 z-10">
                      <Badge
                        variant="secondary"
                        className="bg-black/70 text-white hover:bg-black/70"
                      >
                        {shop.category}
                      </Badge>
                    </div>
                    <img
                      src={shop.image || "/placeholder.svg"}
                      alt={shop.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-lg line-clamp-1">
                          {shop.name}
                        </h3>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{shop.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center bg-primary/10 px-2 py-1 rounded-md">
                        <Star className="h-4 w-4 text-primary fill-primary mr-1" />
                        <span className="font-medium">{shop.rating}</span>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {shop.description}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="text-sm">
                        <span className="font-medium">${shop.minBuy}</span>
                        <span className="text-muted-foreground">
                          {" "}
                          min buy-in
                        </span>
                      </div>
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <Avatar
                            key={i}
                            className="h-6 w-6 border-2 border-background"
                          >
                            <AvatarFallback className="text-[10px]">
                              U{i}
                            </AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="bg-muted/50 py-12">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-8">
              Browse by Category
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {categories.map((category) => (
                <Link href={`/category/${category.slug}`} key={category.name}>
                  <div className="bg-background rounded-lg p-4 text-center transition-all hover:shadow-md hover:bg-primary/5">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      {category.icon}
                    </div>
                    <h3 className="font-medium">{category.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {category.count} shop
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Top Reviewers */}
        <section className="container py-12">
          <h2 className="text-3xl font-bold tracking-tight mb-8">
            Top Reviewers
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topReviewers.map((reviewer) => (
              <Card key={reviewer.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src={reviewer.avatar || "/placeholder.svg"}
                        alt={reviewer.name}
                      />
                      <AvatarFallback>{reviewer.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{reviewer.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {reviewer.reviews} reviews
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-primary fill-primary mr-1" />
                      <span>{reviewer.avgRating} avg rating</span>
                    </div>
                    <Badge variant="outline" className="font-normal">
                      {reviewer.level}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/leaderboard">
              <Button variant="outline">View Full Leaderboard</Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

// Sample data
const featuredShop = [
  {
    id: "1",
    name: "The Royal Flush Club",
    location: "Las Vegas, NV",
    description:
      "Upscale poker room with professional dealers and premium amenities. Regular tournaments and high-stakes games.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Casino",
    rating: 4.8,
    minBuy: 100,
  },
  {
    id: "2",
    name: "Downtown Poker Lounge",
    location: "Chicago, IL",
    description:
      "Casual atmosphere with daily tournaments and cash games. Great for beginners and experienced players alike.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Card Room",
    rating: 4.5,
    minBuy: 50,
  },
  {
    id: "3",
    name: "High Stakes Poker Club",
    location: "Atlantic City, NJ",
    description:
      "Exclusive membership club featuring premium tables, private rooms, and professional service.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Private Club",
    rating: 4.9,
    minBuy: 200,
  },
];

const categories = [
  {
    name: "Casinos",
    slug: "casinos",
    count: 42,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M2 20h20" />
        <path d="M5 20V8.2a1 1 0 0 1 .4-.8l7-5.2a1 1 0 0 1 1.2 0l7 5.2a1 1 0 0 1 .4.8V20" />
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      </svg>
    ),
  },
  {
    name: "Card Rooms",
    slug: "card-rooms",
    count: 28,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M7 7h.01" />
        <path d="M17 17h.01" />
        <path d="M7 17h.01" />
        <path d="M17 7h.01" />
      </svg>
    ),
  },
  {
    name: "Private Clubs",
    slug: "private-clubs",
    count: 15,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
        <path d="M8 14.5c0 1.4.6 2.7 1.5 3.7" />
        <path d="M15 14.5c1.1 0 2.1.3 3 .7" />
        <path d="M16.5 19.8c0-1.5-2-2.8-4.5-2.8s-4.5 1.3-4.5 2.8" />
      </svg>
    ),
  },
  {
    name: "Home Games",
    slug: "home-games",
    count: 36,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    name: "Tournaments",
    slug: "tournaments",
    count: 23,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    ),
  },
];

const topReviewers = [
  {
    id: "1",
    name: "Alex Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    reviews: 87,
    avgRating: 4.2,
    level: "Diamond Reviewer",
  },
  {
    id: "2",
    name: "Sarah Miller",
    avatar: "/placeholder.svg?height=40&width=40",
    reviews: 64,
    avgRating: 4.5,
    level: "Platinum Reviewer",
  },
  {
    id: "3",
    name: "Mike Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    reviews: 52,
    avgRating: 4.1,
    level: "Gold Reviewer",
  },
  {
    id: "4",
    name: "Jessica Lee",
    avatar: "/placeholder.svg?height=40&width=40",
    reviews: 41,
    avgRating: 4.3,
    level: "Gold Reviewer",
  },
];
