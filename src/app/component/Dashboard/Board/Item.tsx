import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

interface BoardItemProps {
  data: DUMMY_POSTS_TYPE[];
  title: string;
  now: Date;
}

const item = ({ data, title, now }: BoardItemProps) => {
  const timeAgo = (update_at: string) => {
    const postDate = new Date(update_at);
    const diffInMs = now.getTime() - postDate.getTime();

    const minutes = Math.floor(diffInMs / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years >= 1) return `1년 전`;
    if (months > 0) return `${months}달 전`;
    if (days > 0) return `${days}일 전`;
    if (hours > 0) return `${hours}시간 전`;
    return `${minutes}분 전`;
  };

  return (
    <div className="w-1/3 grow rounded-lg border border-gray-200 dark:border-gray-800">
      <h4 className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-2">
        {title}
        <div className="text-blue-600 dark:text-blue-200">
          <MdOutlineKeyboardArrowRight />
        </div>
      </h4>
      <ul>
        {data.map((item: DUMMY_POSTS_TYPE, index: number) => {
          return (
            <li className="py-2 flex justify-between p-2" key={index}>
              <p className="truncate w-4/5 text-left">{item.title}</p>
              <p className="text-right w-1/5 text-gray-200 dark:text-gray-800">
                {timeAgo(item.update_at)}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default item;
