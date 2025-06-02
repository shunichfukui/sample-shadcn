import Link from "next/link";
import {
  ChevronLeft,
  MapPin,
  Calendar,
  Clock,
  DollarSign,
  Star,
  Users,
  MessageSquare,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default async function ShopPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // In a real app, you would fetch the shop data based on the ID
  const shop = {
    id: id,
    name: "The Royal Flush Club",
    description:
      "Upscale poker room with professional dealers and premium amenities. Regular tournaments and high-stakes games available for all skill levels. Our shop features 20 tables, a full-service bar, and restaurant with table-side service.",
    location: "3570 Las Vegas Blvd S, Las Vegas, NV 89109",
    category: "Casino",
    rating: 4.8,
    reviewCount: 124,
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    hours: {
      weekdays: "2PM - 4AM",
      weekends: "24 Hours",
    },
    games: [
      { name: "No Limit Hold'em", stakes: "$1/$2, $2/$5, $5/$10" },
      { name: "Pot Limit Omaha", stakes: "$2/$5, $5/$10" },
      { name: "Mixed Games", stakes: "$10/$20, $25/$50" },
    ],
    amenities: [
      "Full Bar",
      "Restaurant",
      "Valet Parking",
      "Comps",
      "Table-side Service",
    ],
    events: [
      {
        id: "e1",
        name: "Friday Night Tournament",
        date: "Every Friday",
        time: "7:00 PM",
        buyIn: "$200 + $25",
        description:
          "Weekly No Limit Hold'em tournament with $10,000 guaranteed prize pool.",
      },
      {
        id: "e2",
        name: "Sunday Special",
        date: "Every Sunday",
        time: "2:00 PM",
        buyIn: "$500 + $50",
        description:
          "Deep stack tournament with 30,000 starting chips and 30-minute levels.",
      },
      {
        id: "e3",
        name: "Monthly High Roller",
        date: "First Saturday of each month",
        time: "3:00 PM",
        buyIn: "$1,000 + $100",
        description:
          "High stakes tournament with $50,000 guaranteed prize pool.",
      },
    ],
    reviews: [
      {
        id: "r1",
        user: {
          name: "Alex Johnson",
          avatar: "/placeholder.svg?height=40&width=40",
          level: "Diamond Reviewer",
        },
        rating: 5,
        date: "2023-12-15",
        content:
          "Absolutely top-notch poker room. The dealers are professional, the atmosphere is great, and the competition is just right. I particularly enjoy their Friday night tournaments.",
      },
      {
        id: "r2",
        user: {
          name: "Sarah Miller",
          avatar: "/placeholder.svg?height=40&width=40",
          level: "Platinum Reviewer",
        },
        rating: 4,
        date: "2023-11-28",
        content:
          "Great shop with excellent service. The only reason I'm not giving 5 stars is because the waiting list can get quite long on weekends. Otherwise, it's a fantastic place to play.",
      },
      {
        id: "r3",
        user: {
          name: "Mike Chen",
          avatar: "/placeholder.svg?height=40&width=40",
          level: "Gold Reviewer",
        },
        rating: 5,
        date: "2023-10-05",
        content:
          "I've been to many poker rooms across the country, and this one ranks among the best. The staff is friendly, the games run smoothly, and the food service is excellent. Highly recommended!",
      },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="rounded-md bg-primary p-1">
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
                className="h-5 w-5 text-primary-foreground"
              >
                <path d="m5 7 5-5 5 5m5 5-5 5-5-5" />
              </svg>
            </div>
            <span className="text-xl font-bold">PokerSpots</span>
          </Link>
          <nav className="hidden md:flex gap-6 text-sm">
            <Link href="/" className="font-medium">
              Home
            </Link>
            <Link href="/shops" className="font-medium">
              shops
            </Link>
            <Link href="/leaderboard" className="font-medium">
              Leaderboard
            </Link>
            <Link href="/about" className="font-medium">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Sign In
            </Button>
            <Button size="sm">Sign Up</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
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
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-6">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium mb-4 hover:underline"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to shops
          </Link>

          {/* shop Header */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-1 lg:col-span-2">
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src={shop.images[0] || "/placeholder.svg"}
                  alt={shop.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {shop.images.slice(1, 3).map((image, i) => (
                  <div
                    key={i}
                    className="aspect-[4/3] overflow-hidden rounded-lg"
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${shop.name} ${i + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <Badge className="mb-2">{shop.category}</Badge>
                <h1 className="text-3xl font-bold">{shop.name}</h1>
                <div className="flex items-center mt-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{shop.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-primary fill-primary" />
                  <span className="ml-1 font-medium text-lg">
                    {shop.rating}
                  </span>
                </div>
                <Separator orientation="vertical" className="h-5" />
                <span className="text-muted-foreground">
                  {shop.reviewCount} reviews
                </span>
              </div>
              <p className="text-muted-foreground">{shop.description}</p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-medium">Hours</div>
                    <div className="text-sm text-muted-foreground">
                      Weekdays: {shop.hours.weekdays}
                      <br />
                      Weekends: {shop.hours.weekends}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-medium">Games & Stakes</div>
                    <div className="text-sm text-muted-foreground">
                      {shop.games.map((game, i) => (
                        <div key={i}>
                          {game.name}: {game.stakes}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {shop.amenities.map((amenity, i) => (
                  <Badge key={i} variant="outline">
                    {amenity}
                  </Badge>
                ))}
              </div>
              <div className="pt-4 flex gap-3">
                <Button className="flex-1">Write a Review</Button>
                <Button variant="outline" className="flex-1">
                  Save
                </Button>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-8">
            <Tabs defaultValue="reviews">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger
                  value="reviews"
                  className="flex items-center gap-2"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Reviews</span>
                </TabsTrigger>
                <TabsTrigger value="events" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Events</span>
                </TabsTrigger>
                <TabsTrigger value="info" className="flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  <span>shop Info</span>
                </TabsTrigger>
              </TabsList>

              {/* Reviews Tab */}
              <TabsContent value="reviews" className="pt-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Reviews</h2>
                  <Button>Write a Review</Button>
                </div>
                <div className="space-y-6">
                  {shop.reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage
                                src={review.user.avatar || "/placeholder.svg"}
                                alt={review.user.name}
                              />
                              <AvatarFallback>
                                {review.user.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">
                                {review.user.name}
                              </div>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Badge
                                  variant="outline"
                                  className="mr-2 font-normal text-xs"
                                >
                                  {review.user.level}
                                </Badge>
                                <time dateTime={review.date}>
                                  {new Date(review.date).toLocaleDateString(
                                    "en-US",
                                    {
                                      year: "numeric",
                                      month: "short",
                                      day: "numeric",
                                    }
                                  )}
                                </time>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center bg-primary/10 px-2 py-1 rounded-md">
                            <Star className="h-4 w-4 text-primary fill-primary mr-1" />
                            <span className="font-medium">{review.rating}</span>
                          </div>
                        </div>
                        <p className="mt-4 text-muted-foreground">
                          {review.content}
                        </p>
                        <div className="mt-4 flex items-center gap-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 gap-1"
                          >
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
                              className="h-4 w-4"
                            >
                              <path d="M7 10v12" />
                              <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                            </svg>
                            Helpful
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 gap-1"
                          >
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
                              className="h-4 w-4"
                            >
                              <path d="M17 14V2" />
                              <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
                            </svg>
                            Not Helpful
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 gap-1 ml-auto"
                          >
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
                              className="h-4 w-4"
                            >
                              <circle cx="12" cy="12" r="1" />
                              <circle cx="19" cy="12" r="1" />
                              <circle cx="5" cy="12" r="1" />
                            </svg>
                            Report
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline">Load More Reviews</Button>
                </div>
              </TabsContent>

              {/* Events Tab */}
              <TabsContent value="events" className="pt-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Upcoming Events</h2>
                </div>
                <div className="space-y-4">
                  {shop.events.map((event) => (
                    <Card key={event.id}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-bold">{event.name}</h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2">
                              <div className="flex items-center text-sm">
                                <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                                <span>{event.date}</span>
                              </div>
                              <div className="flex items-center text-sm">
                                <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                                <span>{event.time}</span>
                              </div>
                              <div className="flex items-center text-sm">
                                <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />
                                <span>Buy-in: {event.buyIn}</span>
                              </div>
                            </div>
                            <p className="mt-2 text-sm text-muted-foreground">
                              {event.description}
                            </p>
                          </div>
                          <div className="flex gap-3 md:flex-col">
                            <Button className="flex-1 md:w-32">Register</Button>
                            <Button
                              variant="outline"
                              className="flex-1 md:w-32"
                            >
                              Details
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* shop Info Tab */}
              <TabsContent value="info" className="pt-6">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">About the shop</h2>
                    <p className="text-muted-foreground mb-6">
                      {shop.description}
                    </p>

                    <h3 className="text-lg font-bold mb-3">Games & Stakes</h3>
                    <div className="space-y-2 mb-6">
                      {shop.games.map((game, i) => (
                        <div key={i} className="flex justify-between">
                          <span>{game.name}</span>
                          <span className="text-muted-foreground">
                            {game.stakes}
                          </span>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-lg font-bold mb-3">
                      Hours of Operation
                    </h3>
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between">
                        <span>Weekdays</span>
                        <span className="text-muted-foreground">
                          {shop.hours.weekdays}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Weekends</span>
                        <span className="text-muted-foreground">
                          {shop.hours.weekends}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold mb-3">Amenities</h3>
                    <div className="flex flex-wrap gap-2">
                      {shop.amenities.map((amenity, i) => (
                        <Badge key={i} variant="outline">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">Location</h2>
                    <div className="aspect-square rounded-lg bg-muted overflow-hidden">
                      {/* This would be a map in a real application */}
                      <div className="w-full h-full flex items-center justify-center bg-muted">
                        <div className="text-center p-4">
                          <MapPin className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                          <p className="font-medium">{shop.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {shop.location}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h3 className="text-lg font-bold mb-3">
                        Contact Information
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
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
                            className="h-4 w-4 text-muted-foreground"
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                          <span>(702) 555-1234</span>
                        </div>
                        <div className="flex items-center gap-2">
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
                            className="h-4 w-4 text-muted-foreground"
                          >
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                          </svg>
                          <span>contact@royalflushclub.com</span>
                        </div>
                        <div className="flex items-center gap-2">
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
                            className="h-4 w-4 text-muted-foreground"
                          >
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                          </svg>
                          <span>www.royalflushclub.com</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h3 className="text-lg font-bold mb-3">
                        Current Activity
                      </h3>
                      <Card>
                        <CardContent className="p-4">
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-muted-foreground" />
                                <span>Active Tables</span>
                              </div>
                              <Badge>12 / 20</Badge>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
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
                                  className="h-4 w-4 text-muted-foreground"
                                >
                                  <rect
                                    width="18"
                                    height="18"
                                    x="3"
                                    y="3"
                                    rx="2"
                                  />
                                  <path d="M7 7h.01" />
                                  <path d="M17 17h.01" />
                                  <path d="M7 17h.01" />
                                  <path d="M17 7h.01" />
                                </svg>
                                <span>Waiting List</span>
                              </div>
                              <Badge variant="outline">8 players</Badge>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <DollarSign className="h-4 w-4 text-muted-foreground" />
                                <span>Highest Stakes Game</span>
                              </div>
                              <Badge variant="outline">$25/$50 Mixed</Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-md bg-primary p-1">
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
                className="h-4 w-4 text-primary-foreground"
              >
                <path d="m5 7 5-5 5 5m5 5-5 5-5-5" />
              </svg>
            </div>
            <span className="font-semibold">PokerSpots</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PokerSpots. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
