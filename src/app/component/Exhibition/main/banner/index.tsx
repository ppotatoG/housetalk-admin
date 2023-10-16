'use client';

import moment from 'moment/moment';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import Button from '@/component/common/Button';
import PageHeader from '@/component/common/header/PageHeader';
import { RangeDate, Radio } from '@/component/common/input';
import Table from '@/component/common/table';
import {
  EXHIBITION_TABLE_HEADER,
  DUMMY_EXHIBITION,
  USAGE_STATUS,
  EXPOSURE_LIST,
} from '@/constants/exhibition';
import { PAGE_HEADERS } from '@/constants/pageHeaders';
import { TABLE_ROW_LIMIT } from '@/constants/TABLE_ROW_LIMIT';

const BannerPage = () => {
  const [minValue, setMinValue] = useState<Date>(
    moment().subtract(6, 'months').toDate()
  );
  const [maxValue, setMaxValue] = useState<Date>(new Date());
  const [exhibition, setExhibition] = useState<SearchExhibition[] | null>(null);
  const router = useRouter();

  const publishStatus = (state: boolean) => (state ? '노출' : '미노출');
  const usedStatus = (state: boolean) => (state ? '사용' : '미사용');

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setExhibition(
      DUMMY_EXHIBITION.map(exhibition => {
        return {
          imageUrl: exhibition.imageUrl,
          isPublished: publishStatus(exhibition.isPublished),
          displayDate: `${exhibition.displayStartDate} ~ ${exhibition.displayEndDate}`,
          isUsed: usedStatus(exhibition.isUsed),
          createdBy: exhibition.createdBy,
          createdDate: exhibition.createdDate,
          lastModifiedBy: exhibition.lastModifiedBy || '-',
          id: exhibition.id,
        };
      })
    );

    console.log(minValue, maxValue);
  };

  const onClickUpdateAction = (row: Row) => {
    router.push(`banner/update/${row.id}`);
  };

  const onClickDeleteAction = (row: Row) => {
    console.log('onClickDeleteAction', row);
  };

  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = DUMMY_EXHIBITION.length / TABLE_ROW_LIMIT;
  const [exposure, setExposure] = useState<CheckData>(EXPOSURE_LIST[0]);
  const [usage, setUsage] = useState<CheckData>(USAGE_STATUS[0]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <PageHeader title={PAGE_HEADERS.EXHIBITION_MAIN_BANNER} />
      <form
        className="flex flex-col gap-4 mt-8 border-b pb-4 border-gray-200 dark:border-gray-800"
        onSubmit={handelSubmit}
      >
        <RangeDate
          minValue={minValue}
          setMinValue={setMinValue}
          maxValue={maxValue}
          setMaxValue={setMaxValue}
          labelRangeDate="노출기간"
          required={false}
        />

        <Radio
          labelText="노출상태"
          value={exposure}
          setValue={setExposure}
          radioList={EXPOSURE_LIST}
        />

        <Radio
          labelText="사용여부"
          value={usage}
          setValue={setUsage}
          radioList={USAGE_STATUS}
        />

        <div className="flex justify-end gap-4">
          <Button
            variant="outlined"
            color="default"
            text="등록하기"
            onClick={() => router.push('banner/create')}
            className="!m-0"
          />
          <Button
            variant="filled"
            color="default"
            text="검색"
            type="submit"
            className="!m-0"
          />
        </div>
      </form>
      {exhibition && (
        <Table
          headers={EXHIBITION_TABLE_HEADER}
          rows={exhibition}
          onClickUpdateAction={onClickUpdateAction}
          onClickDeleteAction={onClickDeleteAction}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          hiddenColumns={['id']}
        />
      )}
    </div>
  );
};

export default BannerPage;
