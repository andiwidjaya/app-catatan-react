const getInitialData = () => [
  {
    id: 1,
    title: "Pengantar Stateful Component",
    body: "Sebelumnya, kita sudah mempelajari props yang dapat mengirimkan data kepada child component dari parent component. Perlu kami tekankan bahwa props adalah “read-only” data yang immutable alias tidak untuk diubah nilainya.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 2,
    title: "Class Component",
    body: "Di modul sebelumnya, Anda sudah belajar bahwa React component dibuat melalui sebuah fungsi. Namun, selain hanya fungsi, React component juga dapat dibuat menggunakan sintaksis class. Component yang dibuat menggunakan fungsi sering disebut dengan functional component, sedangkan component yang dibuat oleh class disebut dengan class component.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 3,
    title: "Composition",
    body: "Anda mungkin sudah terbiasa memecah kode yang kompleks menjadi fungsi terpisah agar kode lebih mudah dibaca. Jika fungsi mengembalikan sebuah data, Anda juga mungkin terbiasa menggabungkan beberapa fungsi untuk menciptakan data yang lebih kompleks. Contohnya seperti ini.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
];

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export { getInitialData, showFormattedDate };
