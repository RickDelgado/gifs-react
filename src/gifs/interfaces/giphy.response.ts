export interface GiphyResponse {
  data: Datum[];
  meta: Meta;
  pagination: Pagination;
}

export interface Datum {
  type: Type;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: Rating;
  content_url: string;
  source_tld: SourceTLD;
  source_post_url: string;
  source_caption?: string;
  is_sticker: number;
  import_datetime: Date;
  trending_datetime: TrendingDatetime;
  images: Images;
  user?: User;
  analytics_response_payload: string;
  analytics: Analytics;
  alt_text: string;
  is_low_contrast: boolean;
}

export interface Analytics {
  onload: Onclick;
  onclick: Onclick;
  onsent: Onclick;
}

export interface Onclick {
  url: string;
}

export interface Images {
  original: Image;
  fixed_height: Image;
  fixed_height_downsampled: Image;
  fixed_height_small: Image;
  fixed_width: Image;
  fixed_width_downsampled: Image;
  fixed_width_small: Image;
}

export interface Image {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size?: string;
  mp4?: string;
  webp_size: string;
  webp: string;
  frames?: string;
  hash?: string;
}

export type Rating = "g";

export type SourceTLD = "" | "joinhagifs.blogspot.com" | "www.youtube.com";

export type TrendingDatetime = "0000-00-00 00:00:00";

export type Type = "gif";

export interface User {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
  description: string;
  instagram_url: string;
  website_url: string;
  is_verified: boolean;
}

export interface Meta {
  status: number;
  msg: string;
  response_id: string;
}

export interface Pagination {
  total_count: number;
  count: number;
  offset: number;
}
