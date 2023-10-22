'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import PageHeader from '@/component/common/header/PageHeader';
import {
  ReadOnlyRadio,
  ReadOnlyText,
  ToggleEditableText,
} from '@/component/common/input';
import { PAGE_HEADERS, USERS_MESSAGE } from '@/constants';

interface DetailContentsProps {
  user: User;
}

const DetailContents: React.FC<DetailContentsProps> = ({ user }) => {
  const router = useRouter();

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
  } = user;

  const [nicknameValue, setNicknameValue] = useState<string>(nickname);
  const [addressValue, setAddressValue] = useState<string>(address);
  const [nameValue, setNameValue] = useState<string>(name);
  const [phoneValue, setPhoneValue] = useState<string>(phone);

  const onClickReset = () => {
    toast(USERS_MESSAGE.DETAIL.PASSWORD_RESET_SUCCESS, {
      hideProgressBar: true,
      autoClose: 2000,
      type: 'success',
      position: 'top-right',
    });
  };

  const handleSave = () => {
    toast(USERS_MESSAGE.DETAIL.EDIT_SUCCESS, {
      hideProgressBar: true,
      autoClose: 2000,
      type: 'success',
      position: 'top-right',
    });
  };

  const handleEditLivingInfo = () => {
    console.log('handleEditLivingInfo');
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
          id="nickname"
          value={nicknameValue}
          setValue={setNicknameValue}
          labelText="닉네임"
          handleSave={handleSave}
        />
        <ToggleEditableText
          id="name"
          value={nameValue}
          setValue={setNameValue}
          labelText="회원명"
          handleSave={handleSave}
        />
        <ReadOnlyText value={birthDate} labelText="생년월일" />
        <ToggleEditableText
          id="phone"
          value={phoneValue}
          setValue={setPhoneValue}
          labelText="휴대폰번호"
          handleSave={handleSave}
        />
        <ReadOnlyText value={gender} labelText="성별" />
        <ReadOnlyText value={signUpDate} labelText="가입일시" />
        <ToggleEditableText
          id="address"
          value={addressValue}
          setValue={setAddressValue}
          labelText="주소"
          handleSave={handleSave}
        />
        <ReadOnlyText
          value={`${livingInfo.duration} / ${livingInfo.type} / ${livingInfo.people}`}
          labelText="자취정보"
          callbackMessage="수정"
          handleCallback={handleEditLivingInfo}
        />
        <ReadOnlyText
          value={`${postHistory.length}회`}
          labelText="게시물 이력"
          handleUseRouter={() => router.push(`/users/${user.id}/posts`)}
        />
        <ReadOnlyText
          value={`${reportHistory.length}회`}
          labelText="신고 이력"
          handleUseRouter={() => router.push(`/users/${user.id}/reports`)}
        />
      </div>
    </div>
  );
};

export default DetailContents;
