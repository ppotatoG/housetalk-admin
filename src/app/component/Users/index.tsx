'use client';

import { useState } from 'react';
import moment from 'moment';

import PageHeader from '@/app/component/common/header/PageHeader';
import RangeDate from '@/app/component/common/input/RangeDate';

import { SelectInputCombo } from '@/app/component/common/input';

import { PAGE_HEADERS } from '@/constants/PAGE_HEADERS';
import { SEARCH_USERS_TYPE } from '@/constants/users';

const Users = () => {
  const [required, setRequired] = useState<boolean>(false);
  const [textValue, setTextValue] = useState('');
  const [selectedType, setSelectedType] = useState(SEARCH_USERS_TYPE[0]);

  const [minValue, setMinValue] = useState<Date>(
    moment().subtract(6, 'months').toDate()
  );
  const [maxValue, setMaxValue] = useState<Date>(new Date());

  return (
    <>
      <div>
        <PageHeader title={PAGE_HEADERS.USERS} />
        <div className="flex flex-col gap-4 mt-4">
          <SelectInputCombo
            selectLabel="타입 선택"
            textLabel="입력"
            textValue={textValue}
            setTextValue={setTextValue}
            placeholder="검색어를 입력하세요"
            required
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
