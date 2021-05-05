import { useState, useEffect } from "react";
import { db, storage, timestamp } from "../../firebase";

const useStorage = (file1, file2, data) => {
  const [error1, setError1] = useState(null);
  const [error2, setError2] = useState(null);
  const [url1, setUrl1] = useState(null);
  const [url2, setUrl2] = useState(null);

  useEffect(() => {
    const storageRef1 = storage.ref(data.phone + "_1");
    storageRef1.put(file1).on(
      "state_changed",
      (snap) => {},
      (err) => {
        setError1(err);
      },
      async () => {
        const url = await storageRef1.getDownloadURL();
        setUrl1(url);
      }
    );

    const storageRef2 = storage.ref(data.phone + "_2");
    storageRef2.put(file2).on(
      "state_changed",
      (snap) => {},
      (err) => {
        setError2(err);
      },
      async () => {
        const url = await storageRef2.getDownloadURL();
        setUrl2(url);
      }
    );

    const createdAt = timestamp();

    db.collection("photo")
      .doc(data.phone)
      .set({ ...data, url1, url2, createdAt })
      .then((docRef) => {})
      .catch((e) => {
        console.error("Error adding document: ", e);
      });
  }, [file1, file2, data]);

  return { url1, url2, error1, error2 };
};

export default useStorage;
