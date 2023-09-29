'use client';

import { useState } from 'react';
import moment from 'moment';

import PageHeader from '@/app/component/common/header/PageHeader';

import { SelectInputCombo, RangeDate } from '@/app/component/common/input';

import { PAGE_HEADERS } from '@/constants/PAGE_HEADERS';
import { SEARCH_USERS_TYPE } from '@/constants/users';

const Users = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState(SEARCH_USERS_TYPE[0]);
  const [minValue, setMinValue] = useState<Date>(
    moment().subtract(6, 'months').toDate()
  );
  const [maxValue, setMaxValue] = useState<Date>(new Date());

  const [required, setRequired] = useState<boolean>(false);

  return (
    <>
      <div>
        <PageHeader title={PAGE_HEADERS.USERS} />
        <div className="flex flex-col gap-4 mt-4">
          <SelectInputCombo
            label="입력"
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            placeholder="검색어를 입력하세요"
            required={required}
            selectedOption={selectedType}
            setTypeOption={setSelectedType}
            typeOptions={SEARCH_USERS_TYPE}
          />

          <RangeDate
            minValue={minValue}
            setMinValue={setMinValue}
            maxValue={maxValue}
            setMaxValue={setMaxValue}
            labelRangeDate={'가입기간'}
            required={required}
          />
        </div>
      </div>
    </>
  );
};

export default Users;
