// components/MusicModalBox.tsx
"use client";

import { Button } from "@/components/ui/button"; // Assuming shadcn/ui Button
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"; // Assuming shadcn/ui Dialog
import { cn } from "@/lib/utils";
import { Play, Pause, Music2 } from "lucide-react"; // Import Play and Pause icons
import Image from "next/image";
import React, { useState, useRef } from "react";
import ReactAudioPlayer from "react-audio-player";

export default function MusicModalBox() {
  // State to control the Dialog visibility
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // State to track if the audio is currently playing (the single source of truth)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  // useRef to hold the reference to the ReactAudioPlayer instance
  const audioRef = useRef<ReactAudioPlayer | null>(null);

  // Static data (replace with dynamic data from your Zustand store/DB later)
  const audioSrc = "/audio/same_love.m4a";
  const coverSrc = "/temps/wedding/audio/wedding_1.jpg";

  /**
   * Toggles play/pause state of the hidden audio element using the ref.
   */
  const togglePlayPause = () => {
    // Access the underlying HTML audio element provided by react-audio-player
    const audioEl = audioRef.current?.audioEl.current;

    if (audioEl) {
      if (isAudioPlaying) {
        audioEl.pause();
        setIsAudioPlaying(false);
      } else {
        // Use play() which returns a Promise for safer playback handling
        audioEl
          .play()
          .then(() => {
            setIsAudioPlaying(true);
          })
          .catch((error) => {
            console.error(
              "Audio playback blocked by browser (autoplay policy):",
              error
            );
            // Inform the user that they must manually interact to play audio
            alert("Please press the Play button to start the music.");
            setIsAudioPlaying(false);
          });
      }
    }
  };

  /**
   * Custom handler for the initial trigger click.
   * Ensures the music starts and the modal opens.
   */
  const handleDialogTrigger = () => {
    // If the music isn't playing, attempt to start it when the user clicks the music icon
    if (!isAudioPlaying) {
      togglePlayPause();
    }
    // Open the dialog to show controls
    setIsDialogOpen(true);
  };

  return (
    // Control the open state of the Dialog component
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      {/* 1. Global Music Icon/Button (Dialog Trigger) */}
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size={"icon"}
          className="absolute top-0 right-0 z-10" // Adjust positioning as needed
          onClick={handleDialogTrigger} // Use the custom handler
          aria-label={isAudioPlaying ? "Pause music" : "Play music"}
        >
          {/* Change icon fill based on playing status */}
          <Music2
            size={20}
            className={cn("text-rose-900", {
              " animate-spin": isAudioPlaying,
            })}
          />
        </Button>
      </DialogTrigger>

      {/* 2. Dialog Content (Visible Controls) */}
      <DialogContent className="sm:max-w-[425px]">
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-rose-900">
            Invitation Music
          </h4>

          <div className="relative">
            <Image
              src={coverSrc}
              alt="Wedding Audio Cover"
              width={1600}
              height={896}
              className="rounded-lg w-full h-auto"
            />
            {/* Control Button INSIDE the Modal */}
            <Button
              size="lg"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg"
              onClick={togglePlayPause} // Control the hidden player
            >
              {isAudioPlaying ? (
                <Pause className="mr-2 h-4 w-4" />
              ) : (
                <Play className="mr-2 h-4 w-4" />
              )}
              {isAudioPlaying ? "Pause" : "Play"}
            </Button>
          </div>

          <p className="text-sm text-gray-500 mt-2">
            The music will continue to play in the background when you close
            this window.
          </p>
        </div>
      </DialogContent>

      {/* 3. The Permanent Audio Player (Hidden in the DOM) */}
      <div className="hidden">
        <ReactAudioPlayer
          ref={audioRef} // Attach the ref to allow external control
          src={audioSrc}
          controls={false} // Hide the default controls
          loop={true} // Loop the background music
        />
      </div>
    </Dialog>
  );
}
