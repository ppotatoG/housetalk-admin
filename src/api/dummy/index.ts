import interceptors from '@/interceptors';

interface Interface {
  freeBoardPosts: DUMMY_POSTS_TYPE[];
  genderCounts: { gender: gender; count: number }[];
  signUpContents: DUMMY_SIGNUP_CONTENTS_TYPE[];
  recommendItemPosts: DUMMY_POSTS_TYPE[];
  houseReviewPosts: DUMMY_POSTS_TYPE[];
}

export const dummyApi = (data: Interface): Promise<Interface> => {
  return interceptors
    .post('/dummy', data)
    .then(response => response.data as Interface);
};
