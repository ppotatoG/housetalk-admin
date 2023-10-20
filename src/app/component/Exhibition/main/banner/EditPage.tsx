'use client';

import moment from 'moment/moment';
import React, { useState } from 'react';

import PageHeader from '@/component/common/header/PageHeader';
import { Radio, RangeDateAndTime, Text } from '@/component/common/input';
import {
  EXPOSURE_LIST,
  NUMBER_REGISTRATIONS,
  USAGE_STATUS,
} from '@/constants/exhibition';
import { PAGE_HEADERS } from '@/constants/pageHeaders';

interface EditPageProps {
  type: string;
}

const EditPage: React.FC<EditPageProps> = ({ type }) => {
  const typeText = type === 'create' ? '등록' : '수정';

  const [minValue, setMinValue] = useState<Date>(
    moment().subtract(6, 'months').toDate()
  );
  const [maxValue, setMaxValue] = useState<Date>(new Date());

  const [exposure, setExposure] = useState<CheckData>(EXPOSURE_LIST[0]);
  const [usage, setUsage] = useState<CheckData>(USAGE_STATUS[0]);
  const [landingUrl, setLandingUrl] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

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
        <RangeDateAndTime
          minValue={minValue}
          setMinValue={setMinValue}
          maxValue={maxValue}
          setMaxValue={setMaxValue}
          labelRangeDateAndTime="노출기간"
          className="w-full"
        />
        <Radio
          labelText="노출상태"
          value={exposure}
          setValue={setExposure}
          radioList={EXPOSURE_LIST}
          required={true}
          className="w-full"
        />
        <Radio
          labelText="사용여부"
          value={usage}
          setValue={setUsage}
          radioList={USAGE_STATUS}
          required={true}
          className="w-full"
        />
        <Text
          labelText="랜딩 URL"
          value={landingUrl}
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
