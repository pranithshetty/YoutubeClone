const YT_KEY = process.env.REACT_APP_MY_KEY;

export const POPULAR_VIDEOS_API =
	"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=50&key=" +
	YT_KEY;

export const YOUTUBE_SEARCH_API =
	"http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&key=${YT_KEY}&q=`;

export const OFFSET_LIVE_CHAT = 15;
