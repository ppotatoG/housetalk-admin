'use client';

import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from '@/component/common/Button';
import PageHeader from '@/component/common/header/PageHeader';
import { Radio, RangeDate, Text } from '@/component/common/input';
import {
  EXPOSURE_LIST,
  NUMBER_REGISTRATIONS,
  USAGE_STATUS,
  PAGE_HEADERS,
} from '@/constants';
import { showModal } from '@/slices/modalSlice';

interface EditPageProps {
  type: string;
  updateValue?: Exhibition;
}

const EditPage: React.FC<EditPageProps> = ({ type, updateValue }) => {
  const dispatch = useDispatch();

  const editType = type === 'create' ? '등록' : '수정';

  const [minValue, setMinValue] = useState<Date>(
    moment().subtract(6, 'months').toDate()
  );
  const [maxValue, setMaxValue] = useState<Date>(new Date());

  const [exposure, setExposure] = useState<CheckData>(EXPOSURE_LIST[1]);
  const [usage, setUsage] = useState<CheckData>(USAGE_STATUS[1]);
  const [landingUrlValue, setLandingUrl] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  useEffect(() => {
    if (updateValue) {
      const {
        displayStartDate,
        displayEndDate,
        isPublished,
        isUsed,
        landingUrl,
        imageUrl,
        title,
        description,
      } = updateValue;
      setMinValue(new Date(displayStartDate));
      setMaxValue(new Date(displayEndDate));
      setUsage(isUsed ? USAGE_STATUS[1] : USAGE_STATUS[2]);
      setExposure(isPublished ? EXPOSURE_LIST[1] : EXPOSURE_LIST[2]);
      setLandingUrl(landingUrl);
      setImageUrl(imageUrl);
      setTitle(title);
      setDescription(description);
    }
  }, [updateValue]);

  const handelSubmit = () => {};

  const handleCancel = () => {
    dispatch(
      showModal({
        id: 'dont_save',
        title: `${editType} 취소하기`,
        description: `데이터를 저장하지 않고 취소하시겠습니까?`,
        type: 'warning',
        callbackButton: {
          text: '뒤로가기',
          type: 'back',
        },
      })
    );
  };

  return (
    <div>
      <PageHeader
        title={`${PAGE_HEADERS.EXHIBITION_MAIN_BANNER} ${editType}하기`}
      />
      <p className="text-xs mt-2 font-light">
        *동일한 노출기간에 최대 {NUMBER_REGISTRATIONS}개 배너까지 등록
        가능합니다.
      </p>

      <form
        className="flex flex-col mt-4 pb-4 border-t-2 border-gray-500"
        onSubmit={handelSubmit}
      >
        <RangeDate
          minValue={minValue}
          setMinValue={setMinValue}
          maxValue={maxValue}
          setMaxValue={setMaxValue}
          labelRangeDate="노출기간"
          className="!border-0 !border-b !border-gray-400 !dark:border-gray-600 w-full"
          useHour={true}
          useMinute={true}
          required={true}
          height={16}
          titleWidthClass="w-40"
        />
        <Radio
          labelText="노출상태"
          value={exposure}
          setValue={setExposure}
          radioList={EXPOSURE_LIST.slice(1)}
          required={true}
          className="!border-0 !border-b !border-gray-400 !dark:border-gray-600 w-full"
          height={16}
          titleWidthClass="w-40"
        />
        <Radio
          labelText="사용여부"
          value={usage}
          setValue={setUsage}
          radioList={USAGE_STATUS.slice(1)}
          required={true}
          className="!border-0 !border-b !border-gray-400 !dark:border-gray-600 w-full"
          height={16}
          titleWidthClass="w-40"
        />
        <Text
          labelText="랜딩 URL"
          value={landingUrlValue}
          label="landingUrl"
          setValue={setLandingUrl}
          placeholder="랜딩될 URL을 입력해주세요."
          required={true}
          className="!border-0 !border-b !border-gray-400 !dark:border-gray-600 w-full"
          height={16}
          titleWidthClass="w-40"
        />
        <Text
          labelText="이미지 URL"
          value={imageUrl}
          label="imageUrl"
          setValue={setImageUrl}
          placeholder="이미지 URL을 입력해주세요."
          required={true}
          className="!border-0 !border-b !border-gray-400 !dark:border-gray-600 w-full"
          height={16}
          titleWidthClass="w-40"
        />
        <Text
          labelText="메인 문구"
          value={title}
          label="title"
          setValue={setTitle}
          placeholder="띄어쓰기 포함 최대 N자 입력 가능"
          required={true}
          className="!border-0 !border-b !border-gray-400 !dark:border-gray-600 w-full"
          height={16}
          titleWidthClass="w-40"
        />
        <Text
          labelText="서브 문구"
          value={description}
          label="landingUrl"
          setValue={setDescription}
          placeholder="띄어쓰기 포함 최대 N자 입력 가능"
          required={true}
          className="!border-0 !border-b !border-gray-400 !dark:border-gray-600 w-full"
          height={16}
          titleWidthClass="w-40"
        />

        <div className="flex justify-center items-center gap-8 mt-8">
          <Button
            variant="outlined"
            text="취소"
            className="!ml-0 px-16"
            onClick={handleCancel}
          />
          <Button
            variant="filled"
            type="submit"
            text={editType}
            className="!ml-0 px-16 "
          />
        </div>
      </form>
    </div>
  );
};

export default EditPage;
