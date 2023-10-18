'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import PageHeader from '@/component/common/header/PageHeader';
import {
  ReadOnlyRadio,
  ReadOnlyText,
  ToggleEditableText,
} from '@/component/common/input';
import { PAGE_HEADERS } from '@/constants/pageHeaders';
import { DUMMY_USERS } from '@/constants/users';

interface DetailProps {
  params: { [key: string]: string };
}

const Detail: React.FC<DetailProps> = ({ params }) => {
  const currentUserId = params.id;
  const {
    id,
    signUpMethod,
    pushNotification,
    nickname,
    name,
    birthDate,
    phone,
    gender,
    signUpDate,
    address,
    livingInfo,
    postHistory,
    reportHistory,
  } = DUMMY_USERS.filter(v => v.id === currentUserId)[0];
  const router = useRouter();

  const onClickReset = () => {
    console.log('reset');
  };

  const handleSave = () => {
    console.log('handleSave');
  };

  return (
    <div>
      <PageHeader title={PAGE_HEADERS.USERS_DETAIL} />
      <div className="grid grid-cols-2 gap-x-16 gap-y-4 mt-8">
        <ReadOnlyText value={id} labelText="아이디" />
        <ReadOnlyText
          value={'**********'}
          labelText="비밀번호"
          handleReset={onClickReset}
        />
        <ReadOnlyText value={signUpMethod} labelText="가입방식" />
        <ReadOnlyRadio
          radioList={['수신동의', '수신거부']}
          value={pushNotification ? '수신동의' : '수신거부'}
          labelText="가입방식"
        />
        <ToggleEditableText
          value={nickname}
          labelText="닉네임"
          handleSave={handleSave}
        />
        <ToggleEditableText
          value={name}
          labelText="회원명"
          handleSave={handleSave}
        />
        <ReadOnlyText value={birthDate} labelText="생년월일" />
        <ToggleEditableText
          value={phone}
          labelText="휴대폰번호"
          handleSave={handleSave}
        />
        <ReadOnlyText value={gender} labelText="성별" />
        <ReadOnlyText value={signUpDate} labelText="가입일시" />
        <ToggleEditableText
          value={address}
          labelText="주소"
          handleSave={handleSave}
        />
        <ReadOnlyEditableText
          value={`${livingInfo.duration} / ${livingInfo.type} / ${livingInfo.people}`}
          labelText="자취정보"
          handleSave={handleSave}
        />
        <ReadOnlyText
          value={`${postHistory.length}회`}
          labelText="게시물 이력"
          handleUseRouter={() => router.push(`/users/${currentUserId}/posts`)}
        />
        <ReadOnlyText
          value={`${reportHistory.length}회`}
          labelText="신고 이력"
          handleUseRouter={() => router.push(`/users/${currentUserId}/reports`)}
        />
      </div>
    </div>
  );
};

export default Detail;
