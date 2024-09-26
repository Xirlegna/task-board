export const timestampToDate = (timestamp: number): string => {
  const expiredAt = new Date(+timestamp);

  const year = expiredAt.getFullYear();
  const month = `${expiredAt.getMonth() + 1}`.padStart(2, '0');
  const day = `${expiredAt.getDate()}`.padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export const dateToTimestamp = (date: string): number => {
  const splittedDate: number[] = date.split('-').map((part: string) => +part);

  if (splittedDate.length !== 3) {
    throw new Error('Invalid date format');
  }

  return new Date(
    splittedDate[0],
    splittedDate[1] - 1,
    splittedDate[2]
  ).getTime();
};
