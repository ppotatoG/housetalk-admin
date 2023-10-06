'use client';

import moment from 'moment/moment';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import Button from '@/component/common/Button';
import PageHeader from '@/component/common/header/PageHeader';
import { RangeDate, Radio } from '@/component/common/input';
import Table from '@/component/common/table';
import { EXPOSURE_LIST, USAGE_STATUS } from '@/constants/exhibition';
import { PAGE_HEADERS } from '@/constants/pageHeaders';
import { TABLE_ROW_LIMIT } from '@/constants/TABLE_ROW_LIMIT';
import { DUMMY_USERS, USERS_TABLE_HEADER } from '@/constants/users';

const BannerPage = () => {
  const [minValue, setMinValue] = useState<Date>(
    moment().subtract(6, 'months').toDate()
  );
  const [maxValue, setMaxValue] = useState<Date>(new Date());
  const [users, setUsers] = useState<searchUser[] | null>(null);
  const router = useRouter();

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setUsers(
      DUMMY_USERS.map(user => ({
        id: user.id,
        name: user.name,
        gender: user.gender,
        nickname: user.nickname,
        signUpDate: user.signUpDate,
      }))
    );

    console.log(minValue, maxValue);
  };

  const onClickViewAction = (row: searchUser) => {
    router.push(`users/${row.id}`);
  };

  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = DUMMY_USERS.length / TABLE_ROW_LIMIT;
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

        <Button
          variant="filled"
          color="default"
          text="검색"
          padding="px-6 py-3"
          type="submit"
        />
      </form>
      {users && (
        <Table
          headers={USERS_TABLE_HEADER}
          rows={users}
          onClickViewAction={onClickViewAction}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default BannerPage;
