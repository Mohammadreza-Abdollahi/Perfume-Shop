const Welcome = () => {
  return (
    <>
      <section className="relative h-[524px] w-full bg-[url(/images/welcome_bg.png)] bg-fixed bg-no-repeat bg-cover bg-center">
        {/* لایه سفید شفاف با ::before */}
        <div className="absolute inset-0 bg-white/95"></div>

        {/* محتوا با z-index بالاتر */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <span className="text-4xl text-first lalezar mb-5">خوش آمدید</span>
          <p className="text-lg max-w-2xl mx-auto mt-4 text-gray-800">
            به پرفیوم شاپ خوش آمدید، جایی که روح پیروزی و ظفر از طریق
            رایحه‌هایی که قدرت و الهام می‌بخشند، زنده می‌شود. مجموعه منتخب ما،
            که به درستی <b>عطر پیروزی</b> نامگذاری شده است، جشنی از موفقیت و
            ظرافت است که برای رها کردن جوهره پیروزمندانه شما طراحی شده است. با
            رایحه‌های جذابی که داستان دستاوردهای شما را روایت می‌کنند، از طعم
            شیرین پیروزی لذت ببرید. در لوکال فیس، ما معتقدیم که هر پیروزی سزاوار
            یک رایحه خاص است و ما خود را وقف ارائه عطرهای فراموش‌نشدنی کرده‌ایم
            که روحیه شما را ارتقا می‌دهند و به سفر شما قدرت می‌بخشند.
          </p>
        </div>
      </section>
    </>
  );
};

export default Welcome;
