interface Exhibition {
  id: string;
  title: string;
  description: string;
  displayStartDate: string;
  displayEndDate: string;
  imageUrl: string;
  isPublished: boolean;
  isUsed: boolean;
  createdBy: string;
  createdDate: string;
  lastModifiedBy: string;
}

interface SearchExhibition {
  id: string;
  imageUrl: string;
  isPublished: string;
  displayDate: string;
  isUsed: string;
  createdBy: string;
  createdDate: string;
  lastModifiedBy: string;
}

interface CheckData {
  id: string;
  label: string;
  value: string | number | boolean;
}
