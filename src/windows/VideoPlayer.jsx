import { X } from "lucide-react";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const VideoPlayer = () => {
    const { windows, closeWindow } = useWindowStore();
    const { data } = windows.videoplayer;

    if (!data?.href) return null;

    // Extract video ID from YouTube URL
    const getVideoId = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const videoId = getVideoId(data.href);
    const embedUrl = videoId
        ? `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3&color=white`
        : null;

    return (
        <div className="w-[800px] h-[500px] bg-black rounded-lg overflow-hidden shadow-2xl flex flex-col">
            <div className="h-8 bg-[#2d2d2d] flex items-center justify-between px-3">
                <div className="flex gap-2">
                    <div
                        onClick={() => closeWindow("videoplayer")}
                        className="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff5f57]/80 cursor-pointer flex items-center justify-center group"
                    >
                        <X className="w-2 h-2 text-black/50 opacity-0 group-hover:opacity-100" />
                    </div>
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="text-xs text-gray-400 font-medium">Media Player</span>
                <div className="w-14" /> {/* Spacer for centering */}
            </div>

            <div className="flex-1 bg-black relative">
                {embedUrl ? (
                    <iframe
                        width="100%"
                        height="100%"
                        src={embedUrl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-white">
                        Invalid Video URL
                    </div>
                )}
            </div>
        </div>
    );
};

const VideoPlayerWindow = WindowWrapper(VideoPlayer, "videoplayer");

export default VideoPlayerWindow;
