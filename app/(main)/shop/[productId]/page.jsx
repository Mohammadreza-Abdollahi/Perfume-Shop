const SingleProduct = () => {
  return (
    <>
      <section className="container mx-auto pt-52">
        <div className="flex gap-6">
          {/* محتوای اصلی */}
          <div className="w-2/3 bg-slate-200 rounded-2xl">
            <div className="h-[3000px]" />
          </div>
          {/* سایدبار */}
          <div className="w-1/3">
            <div className="sticky top-15 bg-slate-200 rounded-2xl">
              <div className="h-[500px]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
