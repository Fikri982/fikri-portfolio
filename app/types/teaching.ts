export interface TeachingMaterial {
  id: string;
  course: string;
  topic: string;
  driveFileId: string;
  /** Set only when these specific slides were authored by a guest group, overriding the course's default practicum partner credit. */
  preparedBy?: string;
}
