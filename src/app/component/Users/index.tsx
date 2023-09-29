'use client';

import moment from 'moment';
import React, { useState } from 'react';

import Button from '@/component/common/Button';
import PageHeader from '@/component/common/header/PageHeader';
import { SelectInputCombo, RangeDate } from '@/component/common/input';
import { PAGE_HEADERS } from '@/constants/pageHeaders';
import { SEARCH_USERS_TYPE } from '@/constants/users';

const Users = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState(SEARCH_USERS_TYPE[0]);
  const [minValue, setMinValue] = useState<Date>(
    moment().subtract(6, 'months').toDate()
  );
  const [maxValue, setMaxValue] = useState<Date>(new Date());

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchTerm, selectedType, minValue, maxValue);
  };
  return (
    <>
      <div>
        <PageHeader title={PAGE_HEADERS.USERS} />
        <form
          className="flex flex-col gap-4 mt-4 border-b pb-4 border-gray-200 dark:border-gray-800"
          onSubmit={handelSubmit}
        >
          <SelectInputCombo
            label="입력"
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            placeholder="검색어를 입력하세요"
            required={true}
            selectedOption={selectedType}
            setTypeOption={setSelectedType}
            typeOptions={SEARCH_USERS_TYPE}
          />

          <RangeDate
            minValue={minValue}
            setMinValue={setMinValue}
            maxValue={maxValue}
            setMaxValue={setMaxValue}
            labelRangeDate="가입기간"
            required={false}
          />

          <Button
            variant="filled"
            color="default"
            text="검색"
            padding="px-6 py-3"
            type="submit"
          />
        </form>
      </div>
    </>
  );
};

export default Users;
