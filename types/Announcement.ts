export type AnnouncementStatus = "ACTIVE" | "SCHEDULED" | "EXPIRED";

export type Announcement = {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string | null;
  thumbnailBlobName: string;
  contentImageBlobName: string | null;
  status: AnnouncementStatus;
  createdAt: string;
  updatedAt: string;
};

export type AnnouncementFormState = {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  thumbnailBlobName: string;
  contentImageBlobName: string;
};

export type AnnouncementPayload = {
  title: string;
  description: string;
  startDate: string;
  endDate: string | null;
  thumbnailBlobName: string;
  contentImageBlobName: string | null;
};

export type AnnouncementsResponse = {
  announcements: Announcement[];
};

export type AnnouncementResponse = {
  announcement: Announcement;
};
