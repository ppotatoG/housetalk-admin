'use client';

import moment from 'moment';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import Button from '@/component/common/Button';
import PageHeader from '@/component/common/header/PageHeader';
import { SelectInputCombo, RangeDate } from '@/component/common/input';
import Table from '@/component/common/table';
import { PAGE_HEADERS } from '@/constants/pageHeaders';
import { TABLE_ROW_LIMIT } from '@/constants/TABLE_ROW_LIMIT';
import {
  SEARCH_USERS_TYPE,
  DUMMY_USERS,
  USERS_TABLE_HEADER,
} from '@/constants/users';

const Users = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState(SEARCH_USERS_TYPE[0]);
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

    console.log(searchTerm, selectedType, minValue, maxValue);
  };

  const onClickViewAction = (row: searchUser) => {
    router.push(`users/${row.id}`);
  };

  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = DUMMY_USERS.length / TABLE_ROW_LIMIT;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div>
        <PageHeader title={PAGE_HEADERS.USERS} />
        <form
          className="flex flex-col gap-4 mt-8 border-b pb-4 border-gray-200 dark:border-gray-800"
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
    </>
  );
};

export default Users;
