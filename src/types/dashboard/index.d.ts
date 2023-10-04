interface DUMMY_GENDER_COUNTS_TYPE {
  gender: gender;
  count: number;
}

interface DUMMY_SIGNUP_CONTENTS_TYPE {
  date: string;
  daily: number;
  cumulative: number;
}

interface DUMMY_POSTS_TYPE {
  title: string;
  update_at: string;
}

type gender = 'female' | 'male';
