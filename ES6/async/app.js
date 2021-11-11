// async

const getData = async () => {
  try {
    const [data, dataa] = await Promise.all([fetch("url"), fetch("url")]);
    const [dataJson, dataaJson] = await Promise.all(data.json(), dataa.json());
    console.log(dataJson, dataaJson);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Finally!");
  }
};

getData();
