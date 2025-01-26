const API_URL = 'https://backend.tedooo.com';

export interface FeedItem {
  id: string;
  username: string;
  avatar: string;
  date: string;
  shopName: string;
  text: string;
  images: string[];
  comments: number;
  likes: number;
  didLike: boolean;
}

export interface ApiResponse<T> {
  data: T;
  hasMore: boolean;
}

export async function getFeedItems(
  skip: number = 0,
): Promise<ApiResponse<FeedItem[]>> {
  const feedUrl = `${API_URL}/hw/feed.json`;
  try {
    const response = await fetch(`${feedUrl}?skip=${skip}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data: ApiResponse<FeedItem[]> = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch feed items:', error);
    throw error;
  }
}

export async function sendImpression(id: string): Promise<void> {
  const impressionUrl = `${API_URL}/?itemId=${id}`;
  try {
    await fetch(impressionUrl);
  } catch (error) {
    console.error('Failed to send impression:', error);
    throw error;
  }
}
