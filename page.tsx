import { CardFooter } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, ExternalLink, MessageSquare, Settings, Users, Bell, Search, Zap, Home } from "lucide-react"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded-full bg-purple-600"></div>
              <span className="inline-block font-bold">Amethyst Guide</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#intro"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Introduction
              </Link>
              <Link
                href="#features"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="#hidden"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Hidden Features
              </Link>
              <Link
                href="#resources"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Resources
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Button asChild variant="outline">
                <Link href="#download">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50 dark:bg-purple-950/20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Amethyst Nostr Guide
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Your comprehensive guide to using Amethyst, the feature-rich Nostr client for Android
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="#download">
                      <Download className="mr-2 h-4 w-4" />
                      Download Amethyst
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#intro">Learn More</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=450"
                width={450}
                height={550}
                alt="Amethyst App Screenshot"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section id="intro" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What is Amethyst?</h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Amethyst is a feature-rich Nostr client for Android. Nostr (Notes and Other Stuff Transmitted by Relays)
                is a decentralized protocol that enables global, censorship-resistant social media.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Decentralized Communication</h3>
                      <p className="text-muted-foreground">
                        Connect with others without relying on centralized platforms. Your data belongs to you.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Privacy-Focused</h3>
                      <p className="text-muted-foreground">
                        Control your identity with cryptographic keys and choose which relays to connect to.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Feature-Rich</h3>
                      <p className="text-muted-foreground">
                        Enjoy a full suite of social features: posts, replies, direct messages, media sharing, and more.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  width={300}
                  height={400}
                  alt="Amethyst App Interface"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="download" className="w-full py-12 md:py-24 lg:py-32 bg-purple-50 dark:bg-purple-950/20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Download Amethyst</h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get started with Amethyst today. Available on Google Play and F-Droid.
              </p>
            </div>
            <div className="mx-auto grid max-w-3xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Google Play Store</CardTitle>
                  <CardDescription>Download from Google's official app store</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full" size="lg">
                    <Link
                      href="https://play.google.com/store/apps/details?id=com.vitorpamplona.amethyst"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download from Play Store
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>F-Droid</CardTitle>
                  <CardDescription>Download from the free and open source app store</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full" size="lg">
                    <Link
                      href="https://f-droid.org/packages/com.vitorpamplona.amethyst/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download from F-Droid
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>GitHub Releases</CardTitle>
                  <CardDescription>Download the APK directly from GitHub</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full" size="lg">
                    <Link
                      href="https://github.com/vitorpamplona/amethyst/releases"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download from GitHub
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Core Features</h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore the powerful features that make Amethyst one of the best Nostr clients for Android.
              </p>
            </div>

            <Tabs defaultValue="home" className="mx-auto max-w-4xl py-12">
              <TabsList className="grid w-full grid-cols-5 md:grid-cols-5">
                <TabsTrigger value="home">
                  <Home className="h-4 w-4 md:mr-2" />
                  <span className="hidden md:inline">Home</span>
                </TabsTrigger>
                <TabsTrigger value="messages">
                  <MessageSquare className="h-4 w-4 md:mr-2" />
                  <span className="hidden md:inline">Messages</span>
                </TabsTrigger>
                <TabsTrigger value="notifications">
                  <Bell className="h-4 w-4 md:mr-2" />
                  <span className="hidden md:inline">Notifications</span>
                </TabsTrigger>
                <TabsTrigger value="search">
                  <Search className="h-4 w-4 md:mr-2" />
                  <span className="hidden md:inline">Search</span>
                </TabsTrigger>
                <TabsTrigger value="settings">
                  <Settings className="h-4 w-4 md:mr-2" />
                  <span className="hidden md:inline">Settings</span>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="home" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Home Feed</CardTitle>
                    <CardDescription>View posts from people you follow</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="text-lg font-bold">How to use:</h3>
                      <ul className="mt-2 grid gap-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Zap className="h-3 w-3 text-primary" />
                          </div>
                          <span>Swipe down to refresh your feed</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Zap className="h-3 w-3 text-primary" />
                          </div>
                          <span>Long press on posts to see more options</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Zap className="h-3 w-3 text-primary" />
                          </div>
                          <span>Tap the lightning icon to send zaps (Bitcoin tips)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Zap className="h-3 w-3 text-primary" />
                          </div>
                          <span>Use the floating action button to create a new post</span>
                        </li>
                      </ul>
                    </div>
                    <Image
                      src="/placeholder.svg?height=400&width=250"
                      width={250}
                      height={400}
                      alt="Amethyst Home Feed"
                      className="mx-auto rounded-lg border"
                    />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="messages" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Direct Messages</CardTitle>
                    <CardDescription>Private, encrypted conversations with other users</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="text-lg font-bold">How to use:</h3>
                      <ul className="mt-2 grid gap-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Zap className="h-3 w-3 text-primary" />
                          </div>
                          <span>Tap on a contact to start a conversation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Zap className="h-3 w-3 text-primary" />
                          </div>
                          <span>Messages are end-to-end encrypted</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Zap className="h-3 w-3 text-primary" />
                          </div>
                          <span>Share images, links, and text</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Zap className="h-3 w-3 text-primary" />
                          </div>
                          <span>Start group conversations with multiple users</span>
                        </li>
                      </ul>
                    </div>
                    <Image
                      src="/placeholder.svg?height=400&width=250"
                      width={250}
                      height={400}
                      alt="Amethyst Messages"
                      className="mx-auto rounded-lg border"
                    />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="notifications" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                    <CardDescription>Stay updated with interactions on your content</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="text-lg font-bold">How to use:</h3>
                      <ul className="mt-2 grid gap-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Zap className="h-3 w-3 text-primary" />
                          </div>
                          <span>See likes, reposts, and mentions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Zap className="h-3 w-3 text-primary" />
                          </div>
                          <span>Track zaps received on your posts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Zap className="h-3 w-3 text-primary" />
                          </div>
                          <span>Filter notifications by type</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Zap className="h-3 w-3 text-primary" />
                          </div>
                          <span>Tap on notifications to view the related content</span>
                        </li>
                      </ul>
                    </div>
                    <Image
                      src="/placeholder.svg?height=400&width=250"
                      width={250}
                      height={400}
                      alt="Amethyst Notifications"
                      className="mx-auto rounded-lg border"
                    />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="search" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Search</CardTitle>
                    <CardDescription>Find users, posts, and content</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="text-lg font-bold">How to use:</h3>
                      <ul className="mt-2 grid gap-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Zap className="h-3 w-3 text-primary" />
                          </div>
                          <span>Search for users by name or npub</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Zap className="h-3 w-3 text-primary" />
                          </div>
                          <span>Find posts containing specific keywords</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Zap className="h-3 w-3 text-primary" />
                          </div>
                          <span>Discover trending hashtags</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Zap className="h-3 w-3 text-primary" />
                          </div>
                          <span>Scan QR codes to find users and content</span>
                        </li>
                      </ul>
                    </div>
                    <Image
                      src="/placeholder.svg?height=400&width=250"
                      width={250}
                      height={400}
                      alt="Amethyst Search"
                      className="mx-auto rounded-lg border"
                    />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="settings" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Settings</CardTitle>
                    <CardDescription>Customize your Amethyst experience</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="text-lg font-bold">How to use:</h3>
                      <ul className="mt-2 grid gap-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Zap className="h-3 w-3 text-primary" />
                          </div>
                          <span>Manage your relays for optimal connection</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Zap className="h-3 w-3 text-primary" />
                          </div>
                          <span>Configure your Lightning wallet for zaps</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Zap className="h-3 w-3 text-primary" />
                          </div>
                          <span>Customize theme and appearance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Zap className="h-3 w-3 text-primary" />
                          </div>
                          <span>Backup and restore your keys</span>
                        </li>
                      </ul>
                    </div>
                    <Image
                      src="/placeholder.svg?height=400&width=250"
                      width={250}
                      height={400}
                      alt="Amethyst Settings"
                      className="mx-auto rounded-lg border"
                    />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="hidden" className="w-full py-12 md:py-24 lg:py-32 bg-purple-50 dark:bg-purple-950/20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hidden Features</h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover these lesser-known but powerful features in Amethyst.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>NIP-05 Verification</CardTitle>
                  <CardDescription>Verify your identity with a domain name</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <Image
                      src="/placeholder.svg?height=200&width=350"
                      width={350}
                      height={200}
                      alt="NIP-05 Verification"
                      className="mx-auto rounded-lg border"
                    />
                    <div>
                      <h3 className="text-lg font-bold">How to use:</h3>
                      <ol className="mt-2 grid gap-2 text-sm list-decimal pl-5">
                        <li>Go to Profile Settings</li>
                        <li>Tap on "Add NIP-05 Verification"</li>
                        <li>Enter your domain name</li>
                        <li>Follow the instructions to verify ownership</li>
                      </ol>
                      <p className="mt-2 text-sm text-muted-foreground">
                        This adds a checkmark to your profile and helps others verify your identity.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Custom Relay Management</CardTitle>
                  <CardDescription>Fine-tune which relays receive your data</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <Image
                      src="/placeholder.svg?height=200&width=350"
                      width={350}
                      height={200}
                      alt="Custom Relay Management"
                      className="mx-auto rounded-lg border"
                    />
                    <div>
                      <h3 className="text-lg font-bold">How to use:</h3>
                      <ol className="mt-2 grid gap-2 text-sm list-decimal pl-5">
                        <li>Go to Settings &gt; Relays</li>
                        <li>Tap on a relay to configure it</li>
                        <li>Set read/write permissions per relay</li>
                        <li>Configure relay groups forr different content types</li>
                      </ol>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Advanced relay management gives you control over your data distribution.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Zap Splits</CardTitle>
                  <CardDescription>Configure automatic splitting of received Bitcoin tips</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <Image
                      src="/placeholder.svg?height=200&width=350"
                      width={350}
                      height={200}
                      alt="Zap Splits Configuration"
                      className="mx-auto rounded-lg border"
                    />
                    <div>
                      <h3 className="text-lg font-bold">How to use:</h3>
                      <ol className="mt-2 grid gap-2 text-sm list-decimal pl-5">
                        <li>Go to Profile > Lightning</li>
                        <li>Tap on "Configure Zap Split"</li>
                        <li>Add recipients and percentage splits</li>
                        <li>Save your configuration</li>
                      </ol>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Great for automatically sharing tips with collaborators or supporting causes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Content Filters</CardTitle>
                  <CardDescription>Customize your feed with advanced filtering options</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <Image
                      src="/placeholder.svg?height=200&width=350"
                      width={350}
                      height={200}
                      alt="Content Filters"
                      className="mx-auto rounded-lg border"
                    />
                    <div>
                      <h3 className="text-lg font-bold">How to use:</h3>
                      <ol className="mt-2 grid gap-2 text-sm list-decimal pl-5">
                        <li>Go to Settings > Content</li>
                        <li>Enable "Advanced Filters"</li>
                        <li>Configure keyword filters, mute lists, and content preferences</li>
                        <li>Set up custom feeds based on hashtags or topics</li>
                      </ol>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Take control of your feed with granular content filtering options.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Secret Gestures and Shortcuts</CardTitle>
                  <CardDescription>Hidden gestures and shortcuts to enhance your Amethyst experience</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="text-lg font-bold">Navigation Shortcuts:</h3>
                      <ul className="mt-2 grid gap-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Zap className="h-3 w-3 text-primary" />
                          </div>
                          <span>Double-tap profile picture to view full-size</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Zap className="h-3 w-3 text-primary" />
                          </div>
                          <span>Long-press on a post to see quick actions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Zap className="h-3 w-3 text-primary" />
                          </div>
                          <span>Swipe right on a post to reply quickly</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Zap className="h-3 w-3 text-primary" />
                          </div>
                          <span>Swipe left on a post to repost</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Hidden Settings:</h3>
                      <ul className="mt-2 grid gap-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Zap className="h-3 w-3 text-primary" />
                          </div>
                          <span>Tap the version number 7 times to access developer mode</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Zap className="h-3 w-3 text-primary" />
                          </div>
                          <span>Long-press the settings icon for experimental features</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Zap className="h-3 w-3 text-primary" />
                          </div>
                          <span>Enter "amethyst:debug" in the search bar for diagnostics</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Zap className="h-3 w-3 text-primary" />
                          </div>
                          <span>Shake device three times to toggle dark/light mode</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="setup" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Getting Started</h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Follow these steps to set up your Amethyst app and join the Nostr network.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:gap-12">
              <div className="grid gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">1</div>
                <h3 className="text-xl font-bold">Install the App</h3>
                <p className="text-muted-foreground">
                  Download Amethyst from Google Play, F-Droid, or GitHub and install it on your Android device.
                </p>
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  width={350}
                  height={200}
                  alt="Install Amethyst"
                  className="rounded-lg border"
                />
              </div>
              <div className="grid gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">2</div>
                <h3 className="text-xl font-bold">Create or Import a Key</h3>
                <p className="text-muted-foreground">
                  Generate a new Nostr key or import an existing one. This is your identity on the network.
                </p>
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  width={350}
                  height={200}
                  alt="Create Key"
                  className="rounded-lg border"
                />
              </div>
              <div className="grid gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">3</div>
                <h3 className="text-xl font-bold">Configure Relays</h3>
                <p className="text-muted-foreground">
                  Connect to Nostr relays to send and receive content. Amethyst comes with default relays, but you can
                  add more.
                </p>
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  width={350}
                  height={200}
                  alt="Configure Relays"
                  className="rounded-lg border"
                />
              </div>
              <div className="grid gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">4</div>
                <h3 className="text-xl font-bold">Set Up Your Profile</h3>
                <p className="text-muted-foreground">
                  Add your name, profile picture, and bio. Consider adding NIP-05 verification for added trust.
                </p>
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  width={350}
                  height={200}
                  alt="Setup Profile"
                  className="rounded-lg border"
                />
              </div>
              <div className="grid gap-4 md:col-span-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">5</div>
                <h3 className="text-xl font-bold">Find People to Follow</h3>
                <p className="text-muted-foreground">
                  Use the search function to find people to follow, or scan their Nostr QR codes.
                </p>
                <div className="grid gap-6 md:grid-cols-2">
                  <Image
                    src="/placeholder.svg?height=200&width=350"
                    width={350}
                    height={200}
                    alt="Find People"
                    className="rounded-lg border"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">Pro Tips:</h4>
                    <ul className="mt-2 grid gap-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/20 p-1">
                          <Users className="h-3 w-3 text-primary" />
                        </div>
                        <span>Look for the "Discover" section to find popular users</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/20 p-1">
                          <Users className="h-3 w-3 text-primary" />
                        </div>
                        <span>Import follows from Twitter using tools like Nostr.directory</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/20 p-1">
                          <Users className="h-3 w-3 text-primary" />
                        </div>
                        <span>Check who your follows are following to expand your network</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="resources" className="w-full py-12 md:py-24 lg:py-32 bg-purple-50 dark:bg-purple-950/20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nostr Resources</h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore these helpful resources to learn more about Nostr and connect with the community.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Njump</CardTitle>
                  <CardDescription>Web-based Nostr content viewer</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Njump allows you to view Nostr content on the web. It's useful for sharing Nostr content with people
                    who don't have a Nostr client.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="https://njump.me/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Njump
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Nostr.how</CardTitle>
                  <CardDescription>Comprehensive Nostr guide</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Nostr.how provides detailed guides, tutorials, and explanations about Nostr and how to use it
                    effectively.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="https://nostr.how/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Nostr.how
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Nostr.band</CardTitle>
                  <CardDescription>Nostr search engine</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Nostr.band is a search engine for Nostr content, allowing you to find posts, users, and topics
                    across the Nostr network.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="https://nostr.band/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Nostr.band
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Nostr.directory</CardTitle>
                  <CardDescription>Find Twitter users on Nostr</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Nostr.directory helps you find Twitter users who are also on Nostr, making it easier to build your
                    network.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="https://nostr.directory/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Nostr.directory
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Nostrich.fun</CardTitle>
                  <CardDescription>Nostr games and fun tools</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Nostrich.fun offers games and fun tools built on the Nostr protocol, showcasing the creative
                    potential of the network.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="https://nostrich.fun/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Nostrich.fun
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Nostr-Resources</CardTitle>
                  <CardDescription>Comprehensive resource collection</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A GitHub repository with a comprehensive collection of Nostr resources, tools, clients, and
                    documentation.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="https://github.com/aljazceru/awesome-nostr" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Nostr-Resources
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Common questions about Amethyst and Nostr.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12">
              <Card>
                <CardHeader>
                  <CardTitle>What is Nostr?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Nostr (Notes and Other Stuff Transmitted by Relays) is a simple, open protocol that enables global,
                    decentralized, and censorship-resistant social media. It uses cryptographic keys for identity and
                    relays for message distribution, allowing users to communicate without relying on centralized
                    platforms.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Is Amethyst open source?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Yes, Amethyst is completely open source. You can view the source code on
                    <Link
                      href="https://github.com/vitorpamplona/amethyst"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      GitHub
                    </Link>
                    . This transparency ensures that the app functions as advertised and allows the community to
                    contribute to its development.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>How do I back up my keys?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    In Amethyst, go to Settings > Account > Backup Keys. You can export your private key as an nsec
                    (Nostr Secret) or create a 12-word seed phrase. Store this backup securely, as anyone with access to
                    your private key can control your Nostr identity.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>What are zaps?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Zaps are Bitcoin micropayments sent over the Lightning Network. In Amethyst, you can zap posts or
                    users to show appreciation with actual value. To send zaps, you need to configure a Lightning wallet
                    in the app settings.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>How do relays work?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Relays are servers that store and transmit Nostr events (posts, likes, follows, etc.). When you
                    publish content in Amethyst, it's sent to your configured relays. To see others' content, you need
                    to connect to relays they use. Amethyst comes with default relays, but you can add or remove them in
                    Settings > Relays.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2023 Amethyst Guide. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
