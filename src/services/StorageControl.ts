interface storageData {
  name: string;
  data?: any; // or use a more specific type if known
}

export const storeData = ({ data, name }: storageData) => {
  if (!data) return;
  sessionStorage.setItem(name, JSON.stringify(data));
};

export const getData = ({ name }: { name: string }) => {
  const stored = sessionStorage.getItem(name);
  try {
    return { data: stored ? JSON.parse(stored) : [] };
  } catch {
    return { data: null };
  }
};

export const removeData = ({ name }: { name?: string }) => {
  if (name) {
    sessionStorage.removeItem(name);
  } else {
    sessionStorage.clear();
  }
};
