const CategoryTable = () => {
  return (
    <>
      <table className="w-full">
        <thead className="text-center">
          <tr className="border-b-2 border-pal1-500 pb-5">
            <th className="w-1/12 pb-4">#</th>
            <th className="w-4/12 pb-4">نام دسته بندی</th>
            <th className="w-2/12 pb-4">اسلاگ</th>
            <th className="w-2/12 pb-4">تاریخ ایجاد</th>
            <th className="w-2/12 pb-4">تاریخ ویرایش</th>
            <th className="w-1/12 pb-4">عملیات</th>
          </tr>
        </thead>
        <tbody className="text-center text-lg border-2 border-pal1-400">
          {/* {products.map((item, index) => (
              <tr
                key={index}
                className="align-middle text-base border border-pal1-200 even:bg-pal1/60 hover:bg-pal1-200/50 transition-all duration-75"
              >
                <td className="py-3">{convertToPersianDigits(index + 1)}</td>
                <td className="py-3">
                  <Image
                    className="mx-auto"
                    src={`${item.img.length > 0 ? item.img[0] : "/structuralImages/def.jpg"}`}
                    alt={item.name}
                    width={80}
                    height={80}
                  />
                </td>
                <td className="py-3">
                  <span className="line-clamp-1">{item.name}</span>
                </td>
                <td className="py-3">
                  {convertToPersianDigits(item.price, true)}
                </td>
                <td className="py-3">
                  {convertToPersianDigits(item.stock, true)}
                </td>
                <td className="py-3">
                  {item.discount == 0
                    ? "ندارد"
                    : "%" + convertToPersianDigits(item.discount)}
                </td>
                <td
                  className={`${item.isActive ? "bg-green-200" : "bg-red-200"}`}
                >
                  {item.isActive ? "فعال" : "غیرفعال"}
                </td>
                <td>
                  <Link href={`/admin/users/${item._id}/edit`}>
                    <FontAwesomeIcon
                      icon={faNewspaper}
                      className="text-xl text-blue-500 mx-1.5"
                    />
                  </Link>
                  <Link href={`/admin/products/${item._id}/edit`}>
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="text-xl text-yellow-500 mx-1.5"
                    />
                  </Link>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="text-xl text-red-500 mx-1.5 cursor-pointer"
                  />
                </td>
              </tr>
            ))} */}
        </tbody>
      </table>
    </>
  );
};

export default CategoryTable;
