"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Search, Play, Clock, User } from "lucide-react"
import { useAuthStore } from "@/store/authstore"
export default function Podcasts() {
  const [isUploadOpen, setIsUploadOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [podcasts, setPodcasts] = useState([])
  const [dataResponse, setResponse] = useState([]);
  const [wait, setWait] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    videoFile: null,
    photo: null
  })
  const {  isAuthenticated, podcastMaker, getData } = useAuthStore();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setResponse(data);
      console.log(dataResponse)
    };
  
    fetchData();
  }, []);
  
  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({ ...prev, videoFile: file }))
  }
  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, photo: file }))
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.title && formData.description) {
      const newPodcast = {
        title: formData.title,
        description: formData.description,
        publishedAt: new Date().toLocaleDateString(),
        videoFile: formData.videoFile,
        photo: formData.photo
      };
      setWait(true);
      await podcastMaker(newPodcast);
      setWait(false);
      const updatedPodcasts = await getData();
      setResponse(updatedPodcasts);
      setFormData({ title: "", description: "", videoFile: null, photo: null });
      setIsUploadOpen(false);
    }
  };

  const filteredPodcasts = dataResponse.filter(
    (podcast) =>
      podcast.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      podcast.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">My Podcasts</h1>
          <p className="text-muted-foreground">Upload and manage your podcast episodes</p>
        </div>
        {isAuthenticated && (
        <Dialog open={isUploadOpen} onOpenChange={setIsUploadOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Upload className="w-4 h-4" />
              Upload Podcast
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Upload New Podcast</DialogTitle>
              <DialogDescription>Add your podcast title, description, and video file.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Enter podcast title"
                  value={formData.title}
                  onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter podcast description"
                  value={formData.description}
                  onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                  rows={3}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="Thumbnail">Thumbnail</Label>
                <Input id="Thumbnail" type="file" accept="image/*" onChange={handlePhotoChange} required />
                {formData.photo && (
                  <p className="text-sm text-muted-foreground">Selected: {formData.photo.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="video">Video File</Label>
                <Input id="video" type="file" accept="video/*" onChange={handleFileChange} required />
                {formData.videoFile && (
                  <p className="text-sm text-muted-foreground">Selected: {formData.videoFile.name}</p>
                )}
              </div>
              <DialogFooter>
                {!wait ? (
                  <>
                    <Button type="button" variant="outline" onClick={() => setIsUploadOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit">Upload Podcast</Button>
                  </>
                ) : (
                  <Button disabled>
                    Uploading...
                  </Button>
                )}
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
        )}
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Search podcasts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>
      { /*Grid for the podcast*/ }
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dataResponse.length > 0 ? (
          filteredPodcasts.map((podcast, index) => (
            <Card key={ index } className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                  {podcast.photoKey ? (
                    <img
                      src={`https://awspodcastphotovideos.s3.us-east-1.amazonaws.com/${podcast.photoKey}`}
                      alt={podcast.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-muted">
                      <Play className="w-12 h-12 text-muted-foreground" />
                    </div>
                  )}
                </div>

                <CardTitle className="line-clamp-2">{podcast.title}</CardTitle>
                <CardDescription className="line-clamp-3">{podcast.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {podcast.publishedAt}
                  </div>
                </div>
                <Button
                  className="w-full mt-4 bg-transparent"
                  variant="outline"
                  onClick={() => {
                    const videoUrl = `https://awspodcastphotovideos.s3.us-east-1.amazonaws.com/${podcast.videoKey}`;
                    window.open(videoUrl, "_blank");
                  }}
                  disabled={!podcast.videoKey}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Play Episode
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No podcasts yet</h3>
            <p className="text-muted-foreground mb-4">
              {searchQuery ? "No podcasts match your search." : "Upload your first podcast to get started."}
            </p>
            <div className="flex flex-col items-center gap-4">
              {!isAuthenticated ? (
                <p className="text-center text-muted-foreground">
                  Sign up or log in to upload your first podcast!
                </p>
              ) : (
                <Button onClick={() => setIsUploadOpen(true)}>
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Your First Podcast
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
