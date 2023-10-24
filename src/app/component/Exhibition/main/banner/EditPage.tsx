'use client';

import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';

import PageHeader from '@/component/common/header/PageHeader';
import { Radio, RangeDate, Text } from '@/component/common/input';
import {
  EXPOSURE_LIST,
  NUMBER_REGISTRATIONS,
  USAGE_STATUS,
  PAGE_HEADERS,
} from '@/constants';

interface EditPageProps {
  type: string;
  updateValue?: Exhibition;
}

const EditPage: React.FC<EditPageProps> = ({ type, updateValue }) => {
  const typeText = type === 'create' ? '등록' : '수정';

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
  return (
    <div>
      <PageHeader
        title={`${PAGE_HEADERS.EXHIBITION_MAIN_BANNER} ${typeText}하기`}
      />
      <p className="text-xs mt-2 font-light">
        *동일한 노출기간에 최대 {NUMBER_REGISTRATIONS}개 배너까지 등록
        가능합니다.
      </p>

      <form onSubmit={handelSubmit} className="flex flex-col gap-4">
        <RangeDate
          minValue={minValue}
          setMinValue={setMinValue}
          maxValue={maxValue}
          setMaxValue={setMaxValue}
          labelRangeDate="노출기간"
          className="w-full"
          useHour={true}
          useMinute={true}
          required={true}
        />
        <Radio
          labelText="노출상태"
          value={exposure}
          setValue={setExposure}
          radioList={EXPOSURE_LIST.slice(1)}
          required={true}
          className="w-full"
        />
        <Radio
          labelText="사용여부"
          value={usage}
          setValue={setUsage}
          radioList={USAGE_STATUS.slice(1)}
          required={true}
          className="w-full"
        />
        <Text
          labelText="랜딩 URL"
          value={landingUrlValue}
          label="landingUrl"
          setValue={setLandingUrl}
          placeholder="랜딩될 URL을 입력해주세요."
          required={true}
          className="w-full"
        />
        <Text
          labelText="이미지 URL"
          value={imageUrl}
          label="imageUrl"
          setValue={setImageUrl}
          placeholder="이미지 URL을 입력해주세요."
          required={true}
          className="w-full"
        />
        <Text
          labelText="메인 문구"
          value={title}
          label="title"
          setValue={setTitle}
          placeholder="띄어쓰기 포함 최대 N자 입력 가능"
          required={true}
          className="w-full"
        />
        <Text
          labelText="서브 문구"
          value={description}
          label="landingUrl"
          setValue={setDescription}
          placeholder="띄어쓰기 포함 최대 N자 입력 가능"
          required={true}
          className="w-full"
        />
      </form>
    </div>
  );
};

export default EditPage;
