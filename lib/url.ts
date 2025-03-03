interface UpdateUrlProps {
  value: string;
  key: string;
}

export const updateUrlQueryParams = ({ value, key }: UpdateUrlProps) => {
  // extrract params from url;
  const queryParams = new URLSearchParams(new URL(window.location.href).search);

  if (value) {
    queryParams.set(key, value);
  } else {
    queryParams.delete(key);
  }
  return `${window.location.pathname}?${queryParams.toString()}`;
};
