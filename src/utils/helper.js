export const formatCurrencyToIDR = (value) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value);
};

export const getURL = (url) => {
  const baseUrl =
    "https://cwrfdvnvvcedqjylgvms.supabase.co/storage/v1/object/public/";
  return baseUrl + url;
};
