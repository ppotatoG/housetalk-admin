interface User {
  id: string;
  password: string;
  signUpMethod: 'naver' | 'kakao' | 'email';
  pushNotification: boolean;
  nickname: string;
  name: string;
  birthDate: string;
  phone: string;
  gender: gender;
  signUpDate: string;
  address: string;
  livingInfo: LivingInfo;
  postHistory: Post[];
  reportHistory: Report[];
}

interface LivingInfo {
  duration: '1-2 years' | '3-4 years' | '5 years or more';
  type: 'One-room' | 'Two-room';
  people: '1 person' | '2 people' | '3 or more people';
}

interface Post {
  postId: string;
  content: string;
  datePosted: string;
}

interface Report {
  reportId: string;
  reason: string;
  dateReported: string;
}

interface SearchUser {
  id: string;
  name: string;
  gender: gender;
  nickname: string;
  signUpDate: string;
}
