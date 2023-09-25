'use client';

import PageHeader from '@/app/component/common/header/PageHeader';
import { PAGE_HEADERS } from '@/constants/PAGE_HEADERS';
import { useState } from 'react';
import { Text } from '@/app/component/common/input';
import moment from 'moment';
import RangeDate from '@/app/component/common/input/RangeDate';

const Users = () => {
  const [userName, setUserName] = useState<string>('');
  const [userId, setUserId] = useState<string>('');
  const [required, setRequired] = useState<boolean>(false);

  const [minValue, setMinValue] = useState<Date>(
    moment().subtract(6, 'months').toDate()
  );
  const [maxValue, setMaxValue] = useState<Date>(new Date());

  return (
    <>
      <div>
        <PageHeader title={PAGE_HEADERS.USERS} />
        <div className="flex flex-col gap-4 mt-4">
          <Text
            label="userSearchType"
            value={userId}
            setValue={setUserId}
            labelText={'아이디'}
            placeholder={'유저 아이디를 입력해주세요.'}
            required={required}
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
